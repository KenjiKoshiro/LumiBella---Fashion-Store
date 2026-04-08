"use client";

import { useMemo } from "react";
import { ShoppingBag } from "lucide-react";
import { Product } from "@/lib/types";
import { useStore } from "@/components/providers/store-provider";
import { cn } from "@/lib/utils";

type Props = {
  product: Product;
  defaults: {
    size: string;
    quantity?: number;
  };
  compact?: boolean;
};

export function AddToCartButton({ product, defaults, compact = false }: Props) {
  const { addToCart } = useStore();

  const label = useMemo(() => (compact ? "Add" : "Add to cart"), [compact]);

  return (
    <button
      onClick={() =>
        addToCart({
          productId: product.id,
          slug: product.slug,
          name: product.name,
          image: product.primaryImage,
          price: product.price,
          size: defaults.size,
          quantity: defaults.quantity ?? 1
        })
      }
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-headline text-sm font-semibold text-white transition hover:opacity-90",
        compact && "px-4 py-2"
      )}
    >
      <ShoppingBag className="h-4 w-4" />
      {label}
    </button>
  );
}
