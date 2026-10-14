import Link from "next/link";
import { getAllProducts, getCategories } from "@/lib/queries/products";
import { ProductCard } from "@/components/commerce/product-card";
import { CatalogImage } from "@/components/shared/catalog-image";

export default async function HomePage() {
  const [products, categories] = await Promise.all([getAllProducts(), getCategories()]);
  const hero = products.find(item => item.primaryImage.startsWith("http")) ?? products[0];
  return <div className="space-y-16 pb-10 md:space-y-24">
    <section className="grid overflow-hidden rounded-[2rem] bg-[#f2e3de] lg:min-h-[560px] lg:grid-cols-2">
      <div className="flex flex-col justify-center p-7 md:p-12 lg:p-16">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">The everyday edit · Thailand</p>
        <h1 className="mt-6 font-headline text-5xl leading-[1.08] tracking-tight md:text-7xl">Soft light.<br /><span className="italic">Your own style.</span></h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-muted">Easy layers, thoughtful details, and pieces to make every day feel a little more you.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/shop" className="rounded-full bg-primary px-7 py-4 font-semibold text-white">Explore the collection ↗</Link><Link href="/new-arrivals" className="rounded-full border border-ink/25 px-7 py-4">See what's new</Link></div>
        <p className="mt-8 text-sm text-muted">A fashion demo. Browse, save favourites, and try the bag.</p>
      </div>
      <div className="relative min-h-[360px] bg-surface-low">
        <CatalogImage src={hero?.primaryImage ?? "/placeholders/hero-main.svg"} alt={hero?.name ?? "LumiBelle collection illustration"} width={900} height={1100} priority className="h-full max-h-[650px] w-full object-cover" />
        <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5"><p className="text-xs uppercase tracking-widest text-primary">In the spotlight</p><p className="mt-2 font-headline text-2xl">{hero?.name ?? "The LumiBelle collection"}</p></div>
      </div>
    </section>
    <section><div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs uppercase tracking-widest text-primary">Find your mood</p><h2 className="mt-3 font-headline text-4xl">A piece for every day</h2></div><Link href="/shop" className="underline underline-offset-4">View all pieces</Link></div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">{categories.map((category, index) => <Link key={category.slug} href={`/category/${category.slug}`} className="group rounded-2xl border border-outline/40 bg-white p-5"><span className="text-xs text-muted">0{index + 1}</span><h3 className="mt-5 font-headline text-xl group-hover:text-primary">{category.name}</h3><span className="mt-4 block" aria-hidden="true">↗</span></Link>)}</div>
    </section>
    <section><p className="text-xs uppercase tracking-widest text-primary">Handpicked for your wardrobe</p><h2 className="mb-8 mt-3 font-headline text-4xl">The LumiBelle selection</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 8).map(product => <ProductCard key={product.slug} product={product} />)}</div></section>
    <section className="grid gap-6 border-y border-outline/50 py-10 md:grid-cols-3">{[{ title: "Make it your own", text: "Explore sizes and styling details before adding a piece to your demo bag." }, { title: "Keep your favourites", text: "Your wishlist and bag stay in this browser, ready when you return." }, { title: "Try it freely", text: "Enjoy a complete demo checkout without payment or personal details." }].map(item => <div key={item.title}><h2 className="font-headline text-2xl">{item.title}</h2><p className="mt-3 leading-7 text-muted">{item.text}</p></div>)}</section>
  </div>;
}
