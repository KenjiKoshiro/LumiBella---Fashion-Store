"use client";

import Link from "next/link";
import { ShieldCheck, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ProductGallery } from "@/components/commerce/product-gallery";
import { SizeRecommendationPanel } from "@/components/commerce/size-recommendation-panel";
import { AddToCartButton } from "@/components/commerce/add-to-cart-button";
import { WishlistButton } from "@/components/commerce/wishlist-button";
import { ProductCard } from "@/components/commerce/product-card";
import { formatCurrency } from "@/lib/utils";
import { Product } from "@/lib/types";

export function ProductDetailClient({
  product,
  relatedProducts
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const initialSize = product.freeSize ? "Free Size" : product.sizes?.[0] ?? "";
  const initialImage = product.images?.[0] || "";

  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [selectedImage, setSelectedImage] = useState(initialImage);

  const galleryImages = useMemo(() => {
    return product.images || [];
  }, [product.images]);

  return (
    <div className="space-y-16">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <ProductGallery
          images={galleryImages}
          alt={product.name}
          selectedImage={selectedImage}
          onSelectImage={setSelectedImage}
        />

        <div className="space-y-6">
          <div>
            <p className="font-headline text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              {product.collection}
            </p>
            <h1 className="mt-3 font-headline text-4xl font-extrabold tracking-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-7 text-muted">
              {product.shortDescription}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-headline text-3xl font-extrabold text-primary">
              {formatCurrency(product.price)}
            </span>
            {product.compareAtPrice ? (
              <span className="text-lg text-muted line-through">
                {formatCurrency(product.compareAtPrice)}
              </span>
            ) : null}
            <span className="rounded-full bg-tertiary px-3 py-1 text-sm font-semibold text-ink">
              {product.rating} ★ ({product.reviewCount} reviews)
            </span>
          </div>

          <div className="rounded-[28px] bg-surface-low p-5">
            <div className="mt-3 flex flex-wrap gap-3">
              {(product.freeSize ? ["Free Size"] : product.sizes).map((size) => {
                const active = selectedSize === size;

                return (
                  <motion.button
                    key={size}
                    type="button"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedSize(size)}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                      active
                        ? "bg-white border border-primary text-primary shadow-sm"
                        : "bg-white border border-outline/10 hover:border-primary/40"
                    }`}
                  >
                    {size}

                    {active ? (
                      <motion.span
                        layoutId="activeSizeOutline"
                        className="absolute inset-0 rounded-full ring-2 ring-primary/20"
                      />
                    ) : null}
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-5 flex gap-3">
              <AddToCartButton
                product={product}
                defaults={{
                  size:
                    selectedSize ||
                    (product.freeSize ? "Free Size" : product.sizes[0] ?? "One Size")
                }}
              />
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-headline font-semibold text-ink"
              >
                Buy now
              </Link>
              <WishlistButton
                item={{
                  productId: product.id,
                  slug: product.slug,
                  name: product.name,
                  image: selectedImage || product.images[0],
                  price: product.price
                }}
              />
            </div>
          </div>

          <SizeRecommendationPanel product={product} />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] bg-surface-card p-5 shadow-ambient">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-primary" />
                <h3 className="font-headline text-lg font-bold">Shipping info</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                Estimated delivery in 4–7 business days. Shipping fee is shown at checkout and becomes free over the configured threshold.
              </p>
            </div>
            <div className="rounded-[28px] bg-surface-card p-5 shadow-ambient">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <h3 className="font-headline text-lg font-bold">Returns & trust</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted">
                7-day return window for unworn items, secure checkout indicators, and verified review support.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] bg-surface-card p-6 shadow-ambient">
            <h3 className="font-headline text-2xl font-bold">Product details</h3>
            <div className="mt-5 grid gap-4 text-sm leading-7 text-muted">
              <p><span className="font-semibold text-ink">Description:</span> {product.description}</p>
              <p><span className="font-semibold text-ink">Material:</span> {product.material}</p>
              <p><span className="font-semibold text-ink">Size guide:</span> {product.sizeGuide}</p>
              <p><span className="font-semibold text-ink">Model info:</span> {product.modelInfo}</p>
              <p><span className="font-semibold text-ink">Tags:</span> {product.tags.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="mb-8">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight">Related items</h2>
          <p className="mt-3 text-muted">
            Similar products, recommendation blocks, and recently viewed slots can be powered by query logic or Supabase functions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}