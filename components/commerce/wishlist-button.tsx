"use client";

import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WishlistItem } from "@/lib/types";
import { useStore } from "@/components/providers/store-provider";
import { cn } from "@/lib/utils";

export function WishlistButton({ item }: { item: WishlistItem }) {
  const { state, toggleWishlist } = useStore();
  const active = state.wishlist.some((wishlistItem) => wishlistItem.slug === item.slug);

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={() => toggleWishlist(item)}
      className="group rounded-full bg-background/85 p-3 shadow-ambient backdrop-blur-sm transition-colors hover:bg-white"
      aria-label="Toggle wishlist"
    >
      <motion.div
        animate={active ? { scale: [1, 1.2, 1], fill: "var(--primary)" } : { scale: 1, fill: "none" }}
        transition={{ duration: 0.3 }}
      >
        <Heart 
          className={cn(
            "h-4 w-4 transition-colors duration-300", 
            active ? "text-primary fill-primary" : "text-ink/40 group-hover:text-primary"
          )} 
        />
      </motion.div>
    </motion.button>
  );
}
