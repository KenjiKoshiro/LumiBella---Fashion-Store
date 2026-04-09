import { NextResponse } from "next/server";
import { applyCoupon, calculateShipping, calculateSubtotal, calculateTax } from "@/lib/commerce";
import { CartItem } from "@/lib/types";

import { getAllProducts } from "@/lib/queries/products";

export async function POST(request: Request) {
  const body = (await request.json()) as { items: CartItem[]; couponCode?: string };
  const items = body.items ?? [];

  if (!items.length) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  const allProducts = await getAllProducts();
  const productMap = new Map(allProducts.map(p => [p.id, p]));

  for (const item of items) {
    const dbProduct = productMap.get(item.productId);
    if (!dbProduct) {
      return NextResponse.json({ error: `Product not found: ${item.name}` }, { status: 404 });
    }
    if (item.quantity > dbProduct.inventoryCount) {
      return NextResponse.json(
        { error: `Sorry! ${item.name} is out of stock (only ${dbProduct.inventoryCount} left).` },
        { status: 400 }
      );
    }
  }

  const subtotal = calculateSubtotal(items);
  const shipping = calculateShipping(subtotal);
  const tax = calculateTax(subtotal);
  const coupon = body.couponCode ? applyCoupon(body.couponCode, subtotal, shipping) : null;

  const total = subtotal + tax + shipping - (coupon?.discount ?? 0) - (coupon?.shippingDiscount ?? 0);
  const orderId = `LB-${Math.floor(Math.random() * 900000 + 100000)}`;

  return NextResponse.json({ orderId, subtotal, shipping, tax, total });
}
