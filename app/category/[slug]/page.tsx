import { notFound } from "next/navigation";
import { CatalogGrid } from "@/components/commerce/catalog-grid";
import { getCategories, getProductsByCategory } from "@/lib/queries/products";

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProductsByCategory(params.slug)
  ]);

  const category = categories.find((item) => item.slug === params.slug);
  if (!category) notFound();

  return (
    <CatalogGrid
      products={products}
      title={category.name}
      description={category.description}
    />
  );
}
