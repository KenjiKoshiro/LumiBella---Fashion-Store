import { CheckoutPageClient } from "@/components/commerce/checkout-page-client";

export default function CheckoutPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-surface-low p-6">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight">Checkout</h1>
        <p className="mt-3 text-muted">Optimized for trust, clear totals, shipping visibility, and conversion-focused mobile completion.</p>
      </div>
      <CheckoutPageClient />
    </div>
  );
}
