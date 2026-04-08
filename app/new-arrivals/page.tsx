import { CatalogGrid } from "@/components/commerce/catalog-grid";
import { getNewArrivalProducts } from "@/lib/queries/products";

export default async function NewArrivalsPage() {
  const products = await getNewArrivalProducts();

  return (
    <CatalogGrid
      products={products}
      title="New arrivals"
      description="Fresh additions, trend-right colors, and the newest product cards ready for homepage, collection, or campaign promotion."
    />
  );
}
