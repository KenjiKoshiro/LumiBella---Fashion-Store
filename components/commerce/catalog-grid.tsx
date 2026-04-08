import { Product } from "@/lib/types";
import { ProductCard } from "@/components/commerce/product-card";

export function CatalogGrid({
  products,
  title,
  description
}: {
  products: Product[];
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-8">
      <div className="rounded-[36px] bg-surface-low p-6 lg:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
            <p className="mt-4 text-base leading-7 text-muted">{description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-4">
            {["Popularity", "Newest", "Price", "Rating"].map((sort) => (
              <span
                key={sort}
                className="rounded-full border border-outline/15 bg-white px-4 py-2 text-center text-sm font-semibold text-ink"
              >
                {sort}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="rounded-[32px] bg-white p-6 shadow-ambient">
          <h2 className="font-headline text-xl font-bold">Shopping filters</h2>
          <div className="mt-6 space-y-6 text-sm">
            <div>
              <p className="font-semibold text-ink">Category</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Dresses", "Tops", "Bottoms", "Accessories", "Activewear", "Occasion"].map((item) => (
                  <span key={item} className="rounded-full bg-surface-low px-3 py-2 text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold text-ink">Need help with sizing?</p>
              <p className="mt-3 leading-6 text-muted">
                Every product page includes a height and weight based recommendation panel for a faster, more confident fit.
              </p>
            </div>
            <div>
              <p className="font-semibold text-ink">Trust cues</p>
              <ul className="mt-3 space-y-2 leading-6 text-muted">
                <li>• Secure checkout flow</li>
                <li>• Wishlist and save-for-later ready</li>
                <li>• Free shipping threshold support</li>
              </ul>
            </div>
          </div>
        </aside>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
