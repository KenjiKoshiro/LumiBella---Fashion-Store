"use client";

import Link from "next/link";
import Image from "next/image";
import { useStore } from "@/components/providers/store-provider";
import { calculateShipping, calculateSubtotal, calculateTax } from "@/lib/commerce";
import { formatCurrency } from "@/lib/utils";

export function CartPageClient() {
  const { state, removeFromCart, updateQuantity } = useStore();
  const subtotal = calculateSubtotal(state.cart);
  const shipping = calculateShipping(subtotal);
  const tax = calculateTax(subtotal);
  const total = subtotal + shipping + tax;

  if (state.cart.length === 0) {
    return (
      <div className="rounded-[32px] bg-surface-low p-8 text-center">
        <h2 className="font-headline text-2xl font-bold">Your cart is empty</h2>
        <p className="mt-3 text-muted">Browse the new collection and add pieces you love.</p>
        <Link href="/shop" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 font-headline font-semibold text-white">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="space-y-4">
        {state.cart.map((item) => (
          <div key={`${item.slug}-${item.color}-${item.size}`} className="flex gap-4 rounded-[28px] bg-surface-card p-4 shadow-ambient">
            <Image src={item.image} alt={item.name} width={120} height={150} className="h-[150px] w-[120px] rounded-[20px] object-cover" />
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <h3 className="font-headline text-lg font-bold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted">{item.color} • {item.size}</p>
                <p className="mt-3 font-headline text-lg font-bold text-primary">{formatCurrency(item.price)}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(event) => updateQuantity(item.slug, item.color, item.size, Number(event.target.value))}
                  className="w-20 rounded-full bg-surface-low px-4 py-2 outline-none"
                />
                <button onClick={() => removeFromCart(item.slug, item.color, item.size)} className="text-sm font-semibold text-primary">Remove</button>
                <button className="text-sm font-semibold text-muted">Save for later</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <aside className="rounded-[32px] bg-surface-low p-6">
        <h2 className="font-headline text-2xl font-bold">Order summary</h2>
        <div className="mt-6 space-y-4 text-sm">
          <div className="flex justify-between"><span className="text-muted">Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
          <div className="flex justify-between"><span className="text-muted">Shipping</span><span>{shipping === 0 ? "Free" : formatCurrency(shipping)}</span></div>
          <div className="flex justify-between"><span className="text-muted">Estimated tax</span><span>{formatCurrency(tax)}</span></div>
          <div className="border-t border-outline/15 pt-4">
            <div className="flex justify-between font-headline text-lg font-bold"><span>Total</span><span>{formatCurrency(total)}</span></div>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] bg-white p-4 text-sm text-muted">
          Secure checkout, address capture, order notes, coupon support, and delivery estimate are included in the checkout flow.
        </div>

        <Link href="/checkout" className="mt-6 inline-flex w-full justify-center rounded-full bg-primary px-5 py-3 font-headline font-semibold text-white">Proceed to checkout</Link>
      </aside>
    </div>
  );
}
