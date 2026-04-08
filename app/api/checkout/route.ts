import { NextResponse } from "next/server";
import { applyCoupon, calculateShipping, calculateSubtotal, calculateTax } from "@/lib/commerce";
import { CartItem } from "@/lib/types";

export async function POST(request: Request) {
  const body = (await request.json()) as { items: CartItem[]; couponCode?: string };
  const items = body.items ?? [];

  const subtotal = calculateSubtotal(items);
  const shipping = calculateShipping(subtotal);
  const tax = calculateTax(subtotal);
  const coupon = body.couponCode ? applyCoupon(body.couponCode, subtotal, shipping) : null;

  const total = subtotal + tax + shipping - (coupon?.discount ?? 0) - (coupon?.shippingDiscount ?? 0);
  const orderId = `LB-${Math.floor(Math.random() * 900000 + 100000)}`;

  return NextResponse.json({ orderId, subtotal, shipping, tax, total });
}
