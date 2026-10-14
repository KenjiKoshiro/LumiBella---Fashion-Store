"use client";
import { useMemo, useState } from "react";
import { Product } from "@/lib/types";
import { ProductCard } from "@/components/commerce/product-card";
export function CatalogGrid({ products, title, description }: { products: Product[]; title: string; description: string }) {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");
  const categories = [...new Map(products.map(item => [item.categorySlug, item.categoryName])).entries()];
  const visible = useMemo(() => {
    const items = products.filter(item => category === "all" || item.categorySlug === category);
    if (sort === "low") items.sort((a, b) => a.price - b.price);
    if (sort === "high") items.sort((a, b) => b.price - a.price);
    if (sort === "name") items.sort((a, b) => a.name.localeCompare(b.name));
    return items;
  }, [products, category, sort]);
  return <div className="space-y-8">
    <div className="border-b border-outline/40 pb-8"><p className="text-sm uppercase tracking-widest text-primary">The LumiBelle edit</p><h1 className="mt-3 font-headline text-4xl md:text-5xl">{title}</h1><p className="mt-4 max-w-2xl text-muted">{description}</p></div>
    <div className="flex flex-wrap items-end justify-between gap-4 rounded-2xl bg-white p-5">
      <label className="space-y-2 text-sm"><span className="block">Category</span><select className="min-h-11 rounded-lg border border-outline bg-white px-3" value={category} onChange={event => setCategory(event.target.value)}><option value="all">All categories</option>{categories.map(([slug, name]) => <option key={slug} value={slug}>{name}</option>)}</select></label>
      <p role="status" className="py-3 text-sm text-muted">{visible.length} pieces</p>
      <label className="space-y-2 text-sm"><span className="block">Sort by</span><select className="min-h-11 rounded-lg border border-outline bg-white px-3" value={sort} onChange={event => setSort(event.target.value)}><option value="featured">Our edit</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="name">Name: A–Z</option></select></label>
    </div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{visible.map(product => <ProductCard key={product.slug} product={product} />)}</div>
    {!visible.length && <p className="rounded-2xl bg-white p-8">No pieces in this collection yet.</p>}
  </div>;
}
