import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/queries/products";
import { ProductDetailClient } from "@/components/commerce/product-detail-client";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  
  if (!product) {
    return { title: "Product Not Found | LumiBelle" };
  }

  return {
    title: `${product.name} | LumiBelle`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.primaryImage]
    }
  };
}

export default async function ProductDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getAllProducts();
  const relatedProducts = allProducts.filter((item) =>
    product.relatedSlugs.includes(item.slug)
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:py-14">
      <ProductDetailClient
        product={product}
        relatedProducts={relatedProducts}
      />
    </main>
  );
}