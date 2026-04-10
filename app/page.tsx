import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FeaturedProducts from "@/components/commerce/featured-products";
import { SectionHeading } from "@/components/shared/section-heading";
import { testimonials, valueProps } from "@/lib/constants";
import { getBestSellerProducts, getCategories, getNewArrivalProducts } from "@/lib/queries/products";
import { ProductCard } from "@/components/commerce/product-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export default async function HomePage() {
  const [categories, newArrivals, bestSellers] = await Promise.all([
    getCategories(),
    getNewArrivalProducts(),
    getBestSellerProducts()
  ]);

  return (
    <div className="space-y-24 pb-12">
      <ScrollReveal>
        <section className="grid gap-8 rounded-[40px] bg-white p-6 shadow-ambient lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="font-headline text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Fresh drop for modern girls
            </p>
            <h1 className="mt-4 max-w-xl font-headline text-5xl font-extrabold tracking-tight text-ink lg:text-7xl">
              Soft, polished fashion with a real shopping flow.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              LumiBelle now includes a cleaner storefront, a verified product image audit workflow, Supabase-ready catalog queries, and mobile-friendly product discovery.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="rounded-full bg-primary px-8 py-4 font-headline font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl active:scale-95">
                Shop the catalog
              </Link>
              <Link href="/new-arrivals" className="rounded-full border border-outline/15 px-8 py-4 font-headline font-semibold text-ink transition-all hover:bg-surface-low">
                Explore new arrivals
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Products rendered", value: "42" },
                { label: "Verified image links", value: "14" },
                { label: "Fallback-safe cards", value: "28" }
              ].map((item) => (
                <div key={item.label} className="rounded-[24px] bg-surface-low p-5">
                  <p className="font-headline text-3xl font-extrabold text-primary">{item.value}</p>
                  <p className="mt-1 text-sm font-medium text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[32px] bg-surface-low shadow-sm">
              <Image 
                src="https://wzuxnpxkpbjgotnccoav.supabase.co/storage/v1/object/public/images/Motion%20Fit%20Set.webp" 
                alt="LumiBelle seasonal feature" 
                width={900} 
                height={1100} 
                className="h-full w-full object-cover transition duration-700 hover:scale-105" 
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[32px] bg-surface-low shadow-sm">
                <Image 
                  src="https://wzuxnpxkpbjgotnccoav.supabase.co/storage/v1/object/public/images/Blush%20Midi%20Dress.webp" 
                  alt="LumiBelle trending pieces" 
                  width={900} 
                  height={520} 
                  className="h-full w-full object-cover transition duration-700 hover:scale-105" 
                />
              </div>
              <div className="rounded-[32px] bg-secondary/45 p-8">
                <p className="font-headline text-xl font-bold text-ink">Conversion-friendly updates</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  Cleaner experiences across home, product, and collection pages with fewer demo-only dependencies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <section>
          <SectionHeading
            eyebrow="Shop by category"
            title="Browse the edits that shoppers actually use"
            description="Each category is wired to the shared catalog layer so the site works with Supabase when available and still stays usable with fallback catalog data."
          />
          <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-6">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="group rounded-[30px] bg-white p-4 shadow-ambient transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="overflow-hidden rounded-[24px] bg-surface-low">
                  <Image src={category.image} alt={category.name} width={320} height={360} className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-5 font-headline text-xl font-bold text-ink">{category.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{category.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <FeaturedProducts />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <section className="grid gap-8 lg:grid-cols-3">
          {valueProps.map((item) => (
            <div key={item.title} className="rounded-[40px] border border-white bg-white/50 p-8 shadow-ambient backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl">
              <h3 className="font-headline text-2xl font-bold text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <section className="space-y-10">
          <SectionHeading
            eyebrow="New arrivals"
            title="Fresh products ready for browsing"
            description="Newness cards are driven by the shared product model so they remain consistent across home, collections, and search."
            action={<Link href="/new-arrivals" className="rounded-full border border-outline/20 px-6 py-3 font-headline text-sm font-semibold text-ink transition-all hover:bg-white">View all</Link>}
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <section className="space-y-10">
          <SectionHeading
            eyebrow="Best sellers"
            title="Top-performing products with stronger social proof"
            description="These are ideal for promotion slots, email campaigns, and trust-building merch rows."
            action={<Link href="/best-sellers" className="rounded-full border border-outline/20 px-6 py-3 font-headline text-sm font-semibold text-ink transition-all hover:bg-white">See more</Link>}
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {bestSellers.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <section className="grid gap-12 rounded-[40px] bg-white p-6 shadow-ambient lg:grid-cols-2 lg:p-12">
          <div className="overflow-hidden rounded-[32px] bg-surface-low">
            <Image 
              src="/images/about-boutique.png" 
              alt="The LumiBella Boutique Interior" 
              width={1200} 
              height={1000} 
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" 
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-headline text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              The Boutique Experience
            </p>
            <h2 className="mt-6 font-headline text-4xl font-extrabold tracking-tight text-ink lg:text-5xl">
              Modern grace, <br/>Curated for you.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              LumiBella isn&apos;t just a store; it&apos;s a curated destination for modern girls who value both effortless style and thoughtful quality. Every piece in our collection is selected to bring a touch of soft light to your wardrobe.
            </p>
            <div className="mt-8">
              <Link href="/about" className="group inline-flex items-center gap-2 font-headline text-base font-bold text-primary transition-all hover:gap-3">
                Discover our story
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <section className="rounded-[40px] bg-white p-6 shadow-ambient lg:p-12">
          <SectionHeading
            eyebrow="Loved by shoppers"
            title="Social-proof style testimonials"
            description="Simple, believable feedback blocks that support trust without cluttering the shopping experience."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[32px] bg-surface-low p-8 transition-colors hover:bg-primary/5">
                <p className="text-lg leading-relaxed text-ink italic">“{item.quote}”</p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px w-8 bg-primary/30" />
                  <p className="font-headline text-xs font-bold uppercase tracking-[0.25em] text-primary">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
