import { CatalogGrid } from "@/components/commerce/catalog-grid";
import { getBestSellerProducts } from "@/lib/queries/products";

export default async function BestSellersPage() {
  const products = await getBestSellerProducts();

  return (
    <CatalogGrid
      products={products}
      title="Best sellers"
      description="Products with stronger visual proof, featured merchandising support, and higher trust for quick conversion."
    />
  );
}
