"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Star } from "lucide-react";
import { AddToCartButton } from "@/components/commerce/add-to-cart-button";
import { WishlistButton } from "@/components/commerce/wishlist-button";
import { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const hasDiscount = !!product.compareAtPrice && product.compareAtPrice > product.price;
  const defaultSize = product.freeSize ? "Free Size" : product.sizes[0] ?? "One Size";

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-[32px] border border-outline/10 bg-white shadow-ambient transition-all duration-500 hover:shadow-[0_22px_70px_rgba(48,51,48,0.15)]"
    >
      <div className="relative">
        <Link href={`/product/${product.slug}`} className="block overflow-hidden bg-surface-low">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Image
              src={product.primaryImage}
              alt={product.name}
              width={720}
              height={900}
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </Link>

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {product.newArrival && (
            <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              New
            </span>
          )}
          {hasDiscount && (
            <span className="rounded-full bg-primary/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
              Sale
            </span>
          )}
          {product.inventoryCount <= 8 && product.inventoryCount > 0 && (
            <span className="rounded-full bg-tertiary/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ink shadow-sm backdrop-blur-md">
              Low stock
            </span>
          )}
        </div>

        <div className="absolute right-4 top-4">
          <WishlistButton
            item={{
              productId: product.id,
              slug: product.slug,
              name: product.name,
              image: product.primaryImage,
              price: product.price
            }}
          />
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="font-headline text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {product.collection}
          </p>
          <div className="inline-flex items-center gap-1 rounded-full bg-surface-low px-2.5 py-1 text-xs font-semibold text-ink">
            <Star className="h-3.5 w-3.5 fill-current text-primary" />
            {product.rating.toFixed(1)}
          </div>
        </div>

        <div>
          <Link href={`/product/${product.slug}`} className="font-headline text-xl font-bold tracking-tight text-ink transition-colors hover:text-primary">
            {product.name}
          </Link>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{product.shortDescription}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-headline text-xl font-extrabold text-primary">{formatCurrency(product.price)}</span>
          {hasDiscount && (
            <span className="text-sm text-muted line-through">{formatCurrency(product.compareAtPrice!)}</span>
          )}
        </div>

        <div className="flex items-center justify-end">
          <div className="inline-flex items-center gap-1 rounded-full bg-secondary/55 px-2.5 py-1 text-xs font-semibold text-ink">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {product.freeSize ? "Free Size" : product.sizes.slice(0, 3).join(" • ")}
            {!product.freeSize && product.sizes.length > 3 && ` +${product.sizes.length - 3}`}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <span className="text-xs font-bold text-muted/60">{product.inventoryCount} in stock</span>
          <AddToCartButton
            product={product}
            defaults={{ size: defaultSize }}
            compact
          />
        </div>
      </div>
    </motion.article>
  );
}
