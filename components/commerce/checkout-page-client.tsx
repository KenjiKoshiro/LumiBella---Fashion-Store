"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/components/providers/store-provider";
import { applyCoupon, calculateShipping, calculateSubtotal, calculateTax } from "@/lib/commerce";
import { formatCurrency } from "@/lib/utils";

export function CheckoutPageClient() {
  const router = useRouter();
  const { state, clearCart } = useStore();
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [discount, setDiscount] = useState(0);
  const [shippingDiscount, setShippingDiscount] = useState(0);
  const [loading, setLoading] = useState(false);

  const subtotal = calculateSubtotal(state.cart);
  const shipping = calculateShipping(subtotal);
  const tax = calculateTax(subtotal);
  const total = subtotal + shipping + tax - discount - shippingDiscount;

  const estimatedDelivery = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }, []);

  async function placeOrder() {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: state.cart, couponCode: coupon })
      });

      const data = (await response.json()) as { orderId: string };
      clearCart();
      router.push(`/order-success?order=${data.orderId}`);
    } finally {
      setLoading(false);
    }
  }

  if (state.cart.length === 0) {
    return (
      <div className="rounded-[32px] bg-surface-low p-8 text-center">
        <h2 className="font-headline text-2xl font-bold">No items ready for checkout</h2>
        <p className="mt-3 text-muted">Add products to your bag first.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
      <div className="rounded-[32px] bg-surface-card p-6 shadow-ambient">
        <h2 className="font-headline text-2xl font-bold">Shipping & payment</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {["First name", "Last name", "Email", "Phone"].map((field) => (
            <label key={field} className="text-sm">
              <span className="mb-2 block text-muted">{field}</span>
              <input className="w-full rounded-2xl bg-surface-low px-4 py-3 outline-none" />
            </label>
          ))}
          <label className="text-sm md:col-span-2"><span className="mb-2 block text-muted">Address</span><input className="w-full rounded-2xl bg-surface-low px-4 py-3 outline-none" /></label>
          <label className="text-sm"><span className="mb-2 block text-muted">City</span><input className="w-full rounded-2xl bg-surface-low px-4 py-3 outline-none" /></label>
          <label className="text-sm"><span className="mb-2 block text-muted">Postal code</span><input className="w-full rounded-2xl bg-surface-low px-4 py-3 outline-none" /></label>
          <label className="text-sm md:col-span-2"><span className="mb-2 block text-muted">Order notes</span><textarea className="min-h-[120px] w-full rounded-2xl bg-surface-low px-4 py-3 outline-none" /></label>
        </div>

        <div className="mt-8 rounded-[28px] bg-surface-low p-5">
          <h3 className="font-headline text-lg font-bold">Secure checkout indicators</h3>
          <p className="mt-3 text-sm leading-6 text-muted">
            SSL checkout, server-side order validation, coupon checks, inventory reservation, and order email processing are wired into the architecture plan.
          </p>
        </div>
      </div>

      <aside className="rounded-[32px] bg-surface-low p-6">
        <h2 className="font-headline text-2xl font-bold">Review order</h2>
        <div className="mt-5 space-y-3">
          {state.cart.map((item) => (
            <div key={`${item.slug}-${item.size}`} className="flex items-center justify-between gap-4 text-sm">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-muted">{item.size} • Qty {item.quantity}</p>
              </div>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <input value={coupon} onChange={(event) => setCoupon(event.target.value)} placeholder="Promo code" className="w-full rounded-full bg-white px-4 py-3 outline-none" />
          <button
            onClick={() => {
              const couponResult = applyCoupon(coupon, subtotal, shipping);
              setDiscount(couponResult.discount);
              setShippingDiscount(couponResult.shippingDiscount);
              setCouponMessage(couponResult.message);
            }}
            className="rounded-full bg-primary px-4 py-3 font-headline font-semibold text-white"
          >
            Apply
          </button>
        </div>
        {couponMessage ? <p className="mt-3 text-sm text-primary">{couponMessage}</p> : null}

        <div className="mt-6 space-y-3 text-sm">
          <div className="flex justify-between"><span className="text-muted">Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
          <div className="flex justify-between"><span className="text-muted">Shipping</span><span>{shipping - shippingDiscount <= 0 ? "Free" : formatCurrency(shipping - shippingDiscount)}</span></div>
          {discount > 0 ? <div className="flex justify-between text-primary"><span>Discount</span><span>-{formatCurrency(discount)}</span></div> : null}
          <div className="flex justify-between"><span className="text-muted">Estimated tax</span><span>{formatCurrency(tax)}</span></div>
          <div className="flex justify-between"><span className="text-muted">Estimated delivery</span><span>{estimatedDelivery}</span></div>
          <div className="border-t border-outline/15 pt-4"><div className="flex justify-between font-headline text-lg font-bold"><span>Total</span><span>{formatCurrency(Math.max(total, 0))}</span></div></div>
        </div>

        <button onClick={placeOrder} disabled={loading} className="mt-6 inline-flex w-full justify-center rounded-full bg-primary px-5 py-3 font-headline font-semibold text-white disabled:opacity-60">
          {loading ? "Placing order..." : "Place order"}
        </button>
      </aside>
    </div>
  );
}
