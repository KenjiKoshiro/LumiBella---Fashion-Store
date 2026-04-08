import { CatalogGrid } from "@/components/commerce/catalog-grid";
import { getSaleProducts } from "@/lib/queries/products";

export default async function SalePage() {
  const products = await getSaleProducts();

  return (
    <CatalogGrid
      products={products}
      title="Sale"
      description="Discounted products with strike-through pricing and cleaner sale badges across the storefront."
    />
  );
}
