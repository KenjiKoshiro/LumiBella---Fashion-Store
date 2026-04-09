import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogGrid } from "@/components/commerce/catalog-grid";
import { getCategories, getProductsByCategory } from "@/lib/queries/products";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const categories = await getCategories();
  const category = categories.find((item) => item.slug === params.slug);
  
  if (!category) {
    return { title: "Category Not Found | LumiBelle" };
  }

  return {
    title: `${category.name} | LumiBelle`,
    description: category.description,
    openGraph: {
      title: `${category.name} Collection | LumiBelle`,
      description: category.description,
      images: [category.image]
    }
  };
}

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
