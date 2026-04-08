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
    <article className="group overflow-hidden rounded-[30px] border border-outline/10 bg-white shadow-ambient transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(48,51,48,0.12)]">
      <div className="relative">
        <Link href={`/product/${product.slug}`} className="block overflow-hidden bg-surface-low">
          <Image
            src={product.primaryImage}
            alt={product.name}
            width={720}
            height={900}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {product.newArrival ? (
            <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              New
            </span>
          ) : null}
          {hasDiscount ? (
            <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Sale
            </span>
          ) : null}
          {product.inventoryCount <= 8 ? (
            <span className="rounded-full bg-tertiary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink">
              Low stock
            </span>
          ) : null}
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
          <Link href={`/product/${product.slug}`} className="font-headline text-xl font-bold tracking-tight text-ink">
            {product.name}
          </Link>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{product.shortDescription}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-headline text-xl font-extrabold text-primary">{formatCurrency(product.price)}</span>
          {hasDiscount ? (
            <span className="text-sm text-muted line-through">{formatCurrency(product.compareAtPrice!)}</span>
          ) : null}
        </div>

        <div className="flex items-center justify-end">
          <div className="inline-flex items-center gap-1 rounded-full bg-secondary/55 px-2.5 py-1 text-xs font-semibold text-ink">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {product.freeSize ? "Free Size" : product.sizes.join(" • ")}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-muted">{product.inventoryCount} in stock</span>
          <AddToCartButton
            product={product}
            defaults={{ size: defaultSize }}
            compact
          />
        </div>
      </div>
    </article>
  );
}
