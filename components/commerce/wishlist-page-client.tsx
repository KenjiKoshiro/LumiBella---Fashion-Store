"use client";

import Link from "next/link";
import { useStore } from "@/components/providers/store-provider";
import { ProductCard } from "@/components/commerce/product-card";
import { products } from "@/lib/mock-data";

export function WishlistPageClient() {
  const { state } = useStore();

  if (state.wishlist.length === 0) {
    return (
      <div className="rounded-[32px] bg-surface-low p-8 text-center">
        <h2 className="font-headline text-2xl font-bold">Your wishlist is empty</h2>
        <p className="mt-3 text-muted">Tap the heart on any product to save it here.</p>
        <Link href="/shop" className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 font-headline font-semibold text-white">Explore products</Link>
      </div>
    );
  }

  const savedProducts = products.filter((product) => state.wishlist.some((wishlistItem) => wishlistItem.slug === product.slug));

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {savedProducts.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
