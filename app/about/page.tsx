import Image from "next/image";
import { valueProps } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 rounded-[40px] bg-white p-6 shadow-ambient lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div>
          <p className="font-headline text-xs font-semibold uppercase tracking-[0.35em] text-primary">About LumiBelle</p>
          <h1 className="mt-4 font-headline text-5xl font-extrabold tracking-tight">A softer storefront with real e-commerce structure</h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            LumiBelle blends feminine styling, clean merchandising, and practical shopping UX. The refreshed project keeps the aesthetic premium but removes unnecessary brittle pieces so the storefront is easier to run and extend.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[
              "Modern, rounded, mobile-first UI",
              "Fallback-safe product cards for broken image links",
              "Supabase-first catalog queries",
              "Reusable cart, wishlist, and size helper flows"
            ].map((item) => (
              <div key={item} className="rounded-[24px] bg-surface-low p-5 font-medium text-ink">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[32px] bg-surface-low">
          <Image src="/images/about-boutique.png" alt="About LumiBelle Boutique" width={960} height={900} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {valueProps.map((item) => (
          <div key={item.title} className="rounded-[32px] bg-white p-6 shadow-ambient">
            <h2 className="font-headline text-2xl font-bold">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
