import { CartPageClient } from "@/components/commerce/cart-page-client";

export default function CartPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-surface-low p-6">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight">Shopping bag</h1>
        <p className="mt-3 text-muted">Includes quantity updates, save for later hooks, shipping estimate, and promo-ready order summary.</p>
      </div>
      <CartPageClient />
    </div>
  );
}
