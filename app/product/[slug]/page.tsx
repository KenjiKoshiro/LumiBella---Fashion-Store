import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/queries/products";
import { ProductDetailClient } from "@/components/commerce/product-detail-client";

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