import { CatalogGrid } from "@/components/commerce/catalog-grid";
import { getAllProducts } from "@/lib/queries/products";

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
