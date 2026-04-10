"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/components/providers/store-provider";
import { applyCoupon, calculateShipping, calculateSubtotal, calculateTax } from "@/lib/commerce";
import { formatCurrency } from "@/lib/utils";

import { ArrowRight, Lock, MapPin, Truck } from "lucide-react";
import { Input } from "@/components/shared/input";

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
      <div className="flex flex-col items-center justify-center rounded-[40px] bg-surface-low px-8 py-20 text-center">
        <h2 className="font-headline text-2xl font-bold">No items ready for checkout</h2>
        <p className="mt-3 text-muted">Add products to your bag first.</p>
        <Link href="/shop" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-headline font-semibold text-white">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
      <div className="space-y-8">
        <div className="rounded-[40px] bg-white p-8 shadow-ambient ring-1 ring-black/[0.03]">
          <div className="flex items-center gap-3 border-b border-outline/10 pb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-headline text-2xl font-bold tracking-tight text-ink">Shipping Information</h2>
          </div>
          
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Input label="First name" placeholder="E.g. Jane" />
            <Input label="Last name" placeholder="E.g. Doe" />
            <Input label="Email address" type="email" placeholder="jane@example.com" className="md:col-span-1" />
            <Input label="Phone number" type="tel" placeholder="+1 (555) 000-0000" />
            <div className="md:col-span-2">
              <Input label="Shipping Address" placeholder="Street name and number" />
            </div>
            <Input label="City" placeholder="E.g. Los Angeles" />
            <Input label="Postal code" placeholder="90001" />
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-muted/80">Order notes (optional)</label>
              <textarea 
                className="mt-2 min-h-[120px] w-full rounded-2xl bg-surface-low px-4 py-3 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/20" 
                placeholder="Notes about your delivery, e.g. special instructions."
              />
            </div>
          </div>
        </div>

        <div className="rounded-[40px] bg-primary/5 p-8 ring-1 ring-primary/10">
          <div className="flex items-center gap-3">
            <Lock className="h-5 w-5 text-primary" />
            <h3 className="font-headline text-xl font-bold text-ink">Secure Payment</h3>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            All transactions are secure and encrypted. We do not store your credit card details on our servers.
          </p>
        </div>
      </div>

      <aside className="relative">
        <div className="sticky top-28 space-y-6 rounded-[400px] bg-surface-low p-1 shadow-sm ring-1 ring-black/[0.02]">
          <div className="rounded-[40px] bg-white p-8 shadow-sm">
            <h2 className="font-headline text-2xl font-bold tracking-tight text-ink">Review Order</h2>
            
            <div className="mt-6 flex flex-col gap-4">
              {state.cart.map((item) => (
                <div key={`${item.slug}-${item.size}`} className="flex items-center gap-4 border-b border-outline/5 pb-4 last:border-0 last:pb-0">
                  <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-xl bg-surface-low">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-ink">{item.name}</p>
                    <p className="text-xs text-muted">{item.size} • Qty {item.quantity}</p>
                  </div>
                  <span className="text-sm font-bold text-ink">{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-2">
              <Input 
                value={coupon} 
                onChange={(event) => setCoupon(event.target.value)} 
                placeholder="Promo code" 
                className="h-11 bg-surface-low/50"
              />
              <button
                onClick={() => {
                  const couponResult = applyCoupon(coupon, subtotal, shipping);
                  setDiscount(couponResult.discount);
                  setShippingDiscount(couponResult.shippingDiscount);
                  setCouponMessage(couponResult.message);
                }}
                className="h-11 rounded-full bg-ink px-6 text-sm font-bold text-white transition-all hover:bg-primary active:scale-95"
              >
                Apply
              </button>
            </div>
            {couponMessage ? <p className="mt-2 text-[11px] font-bold text-primary">{couponMessage}</p> : null}

            <div className="mt-8 space-y-3 border-t border-outline/10 pt-6 text-sm font-medium">
              <div className="flex justify-between text-muted"><span>Subtotal</span><span className="text-ink">{formatCurrency(subtotal)}</span></div>
              <div className="flex justify-between text-muted">
                <div className="flex items-center gap-1.5"><Truck className="h-3.5 w-3.5" /><span>Shipping</span></div>
                <span className="text-ink">{shipping - shippingDiscount <= 0 ? "Complimentary" : formatCurrency(shipping - shippingDiscount)}</span>
              </div>
              {discount > 0 ? <div className="flex justify-between text-primary"><span>Discount</span><span>-{formatCurrency(discount)}</span></div> : null}
              <div className="flex justify-between text-muted"><span>Estimated tax</span><span className="text-ink">{formatCurrency(tax)}</span></div>
              <div className="flex justify-between text-muted"><span>Est. Delivery</span><span className="text-ink">{estimatedDelivery}</span></div>
              <div className="mt-4 flex justify-between font-headline text-2xl font-bold text-ink">
                <span>Total</span>
                <span>{formatCurrency(Math.max(total, 0))}</span>
              </div>
            </div>

            <button 
              onClick={placeOrder} 
              disabled={loading} 
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-headline text-lg font-bold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl disabled:opacity-60"
            >
              {loading ? "Processing..." : "Complete Purchase"}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
