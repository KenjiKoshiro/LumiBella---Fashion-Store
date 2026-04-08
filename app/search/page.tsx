import { CatalogGrid } from "@/components/commerce/catalog-grid";
import { searchProducts } from "@/lib/queries/products";

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q ?? "";
  const results = query ? await searchProducts(query) : [];

  return (
    <CatalogGrid
      products={results}
      title={query ? `Search results for “${query}”` : "Search the catalog"}
      description={
        query
          ? `${results.length} matching product card(s) across name, description, category, and tags.`
          : "Use the header search bar to discover dresses, tops, accessories, and more."
      }
    />
  );
}
