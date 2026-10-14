import { CatalogGrid } from "@/components/commerce/catalog-grid";
import { getBestSellerProducts } from "@/lib/queries/products";

export default async function BestSellersPage() {
  const products = await getBestSellerProducts();

  return (
    <CatalogGrid
      products={products}
      title="Best sellers"
      description="Discover the featured favourites in our demo collection."
    />
  );
}
