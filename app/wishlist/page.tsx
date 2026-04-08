import { WishlistPageClient } from "@/components/commerce/wishlist-page-client";

export default function WishlistPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] bg-surface-low p-6">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight">Wishlist</h1>
        <p className="mt-3 text-muted">Saved products sync to the database in production through Supabase wishlist tables.</p>
      </div>
      <WishlistPageClient />
    </div>
  );
}
