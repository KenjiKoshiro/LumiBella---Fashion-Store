"use client";

import { Heart } from "lucide-react";
import { WishlistItem } from "@/lib/types";
import { useStore } from "@/components/providers/store-provider";
import { cn } from "@/lib/utils";

export function WishlistButton({ item }: { item: WishlistItem }) {
  const { state, toggleWishlist } = useStore();
  const active = state.wishlist.some((wishlistItem) => wishlistItem.slug === item.slug);

  return (
    <button
      onClick={() => toggleWishlist(item)}
      className="rounded-full bg-background/85 p-3 shadow-ambient backdrop-blur-sm"
      aria-label="Toggle wishlist"
    >
      <Heart className={cn("h-4 w-4 text-primary", active && "fill-primary")} />
    </button>
  );
}
