import { Metadata } from "next";
import { CatalogGrid } from "@/components/commerce/catalog-grid";
import { getAllProducts } from "@/lib/queries/products";

export const metadata: Metadata = {
  title: "Shop All Collections | LumiBelle",
  description: "Browse the entire LumiBelle fashion catalog. Discover premium aesthetics, polished occasion wear, soft tops, and perfectly tailored bottoms.",
  openGraph: {
    title: "Shop All Collections | LumiBelle",
    description: "Browse the entire LumiBelle fashion catalog.",
    images: ["/placeholders/hero-main.svg"]
  }
};

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <CatalogGrid
      products={products}
      title="Shop all"
      description="A polished fashion catalog with cleaner product cards, working local fallbacks for broken remote images, and a shared data layer that can read from Supabase."
    />
  );
}
