import { CheckoutPageClient } from "@/components/commerce/checkout-page-client";

export default function CheckoutPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-surface-low p-6">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight">Demo checkout</h1>
        <p className="mt-3 text-muted">Review your selections and create a sample receipt. No real order is placed.</p>
      </div>
      <CheckoutPageClient />
    </div>
  );
}
