import Link from "next/link";
import { ProductCard } from "@/components/commerce/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getFeaturedProducts } from "@/lib/queries/products";

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Featured now"
        title="Top picks from the LumiBelle edit"
        description="Curated statement pieces, soft basics, and easy add-to-bag favorites."
        action={
          <Link href="/shop" className="rounded-full border border-outline/20 px-5 py-3 font-headline text-sm font-semibold text-ink transition hover:border-primary hover:text-primary">
            Shop all
          </Link>
        }
      />

      {products.length === 0 ? (
        <div className="rounded-[32px] border border-dashed border-outline/20 bg-white p-10 text-center text-muted">
          No featured products found yet. Add products in Supabase or use the included seed file to populate the catalog.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
