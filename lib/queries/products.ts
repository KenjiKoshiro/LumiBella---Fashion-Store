import { createSupabaseServerClient } from "@/lib/supabase/server";
import { Category, Product, SizeChartRule } from "@/lib/types";
import {
  categories as fallbackCategories,
  getCategoryBySlug as getFallbackCategoryBySlug,
  getProductBySlug as getFallbackProductBySlug,
  products as fallbackProducts,
  searchProducts as searchFallbackProducts
} from "@/lib/mock-data";
import { titleCase } from "@/lib/utils";

type ModernProductRow = {
  id: string;
  category_id?: string | null;
  name: string;
  slug: string;
  subcategory?: string | null;
  short_description?: string | null;
  description?: string | null;
  material_details?: string | null;
  size_guide?: string | null;
  model_info?: string | null;
  tags?: string[] | null;
  collection?: string | null;
  price: number | string;
  compare_at_price?: number | string | null;
  rating?: number | string | null;
  review_count?: number | null;
  featured?: boolean | null;
  is_new_arrival?: boolean | null;
  is_best_seller?: boolean | null;
  is_on_sale?: boolean | null;
  free_size?: boolean | null;
  status?: string | null;
};

type ProductImageRow = {
  product_id: string;
  storage_path: string;
  is_primary?: boolean | null;
  sort_order?: number | null;
};

type ProductVariantRow = {
  product_id: string;
  color_name?: string | null;
  color_hex?: string | null;
  size_label?: string | null;
};

type SizeChartRow = {
  size_label: string;
  height_min_cm: number;
  height_max_cm: number;
  weight_min_kg: number;
  weight_max_kg: number;
  size_charts?: { product_id: string } | { product_id: string }[] | null;
};

function defaultPalette(categorySlug: string) {
  switch (categorySlug) {
    case "accessories":
      return [
        { name: "Pearl", hex: "#F2E7DD", image: placeholderFor(categorySlug) },
        { name: "Noir", hex: "#2B2A30", image: placeholderFor(categorySlug) }
      ];
    case "activewear":
      return [
        { name: "Rosewater", hex: "#E8C4CC", image: placeholderFor(categorySlug) },
        { name: "Mist", hex: "#DDE6E1", image: placeholderFor(categorySlug) }
      ];
    case "bottoms":
      return [
        { name: "Sand", hex: "#E7D8CC", image: placeholderFor(categorySlug) },
        { name: "Graphite", hex: "#56545A", image: placeholderFor(categorySlug) }
      ];
    case "tops":
      return [
        { name: "Cloud", hex: "#F4F2EF", image: placeholderFor(categorySlug) },
        { name: "Taupe", hex: "#C4B0A5", image: placeholderFor(categorySlug) }
      ];
    default:
      return [
        { name: "Rose Dust", hex: "#D8B4BE", image: placeholderFor(categorySlug) },
        { name: "Champagne", hex: "#E8DEC7", image: placeholderFor(categorySlug) }
      ];
  }
}

function defaultSizes(categorySlug: string, freeSize = false) {
  if (freeSize || categorySlug === "accessories") return ["Free Size"];
  if (categorySlug === "activewear") return ["S", "M", "L", "XL"];
  if (categorySlug === "tops") return ["S", "M", "L"];
  if (categorySlug === "occasion-wear") return ["S", "M", "L"];
  return ["XS", "S", "M", "L"];
}

function defaultSizeChart(sizes: string[]): SizeChartRule[] {
  const base: Record<string, SizeChartRule> = {
    XS: { label: "XS", heightMin: 148, heightMax: 158, weightMin: 40, weightMax: 46 },
    S: { label: "S", heightMin: 154, heightMax: 164, weightMin: 45, weightMax: 52 },
    M: { label: "M", heightMin: 160, heightMax: 170, weightMin: 51, weightMax: 59 },
    L: { label: "L", heightMin: 166, heightMax: 176, weightMin: 58, weightMax: 67 },
    XL: { label: "XL", heightMin: 170, heightMax: 180, weightMin: 64, weightMax: 75 },
    "Free Size": { label: "Free Size", heightMin: 0, heightMax: 0, weightMin: 0, weightMax: 0 }
  };

  return sizes.map((size) => base[size]).filter(Boolean);
}

function placeholderFor(categorySlug: string) {
  switch (categorySlug) {
    case "accessories":
      return "/placeholders/category-accessories.svg";
    case "activewear":
      return "/placeholders/category-activewear.svg";
    case "bottoms":
      return "/placeholders/category-bottoms.svg";
    case "tops":
      return "/placeholders/category-tops.svg";
    case "occasion-wear":
      return "/placeholders/category-occasion.svg";
    default:
      return "/placeholders/category-dresses.svg";
  }
}

function uniqueStrings(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function withRelated(products: Product[]) {
  const grouped = new Map<string, Product[]>();

  for (const product of products) {
    grouped.set(product.categorySlug, [...(grouped.get(product.categorySlug) ?? []), product]);
  }

  return products.map((product) => {
    const related = (grouped.get(product.categorySlug) ?? [])
      .filter((item) => item.slug !== product.slug)
      .slice(0, 4)
      .map((item) => item.slug);

    return { ...product, relatedSlugs: related };
  });
}

function normalizeLegacyProduct(row: Record<string, any>, categoryMap: Map<string, Category>): Product {
  const fallback = fallbackProducts.find((item) => item.slug === row.slug);
  const categorySlug = fallback?.categorySlug ?? categoryMap.get(row.category_id)?.slug ?? "dresses";
  const categoryName =
    fallback?.categoryName ??
    categoryMap.get(row.category_id)?.name ??
    titleCase(categorySlug);

  const freeSize = fallback?.freeSize ?? categorySlug === "accessories";
  const sizes = fallback?.sizes ?? defaultSizes(categorySlug, freeSize);

  const primaryImage =
    fallback?.imageAuditStatus === "broken"
      ? fallback.primaryImage
      : row.image_url || fallback?.primaryImage || placeholderFor(categorySlug);

  const look2 =
    row.look2_url ||
    fallback?.images?.[1] ||
    primaryImage;

  const look3 =
    row.look3_url ||
    fallback?.images?.[2] ||
    primaryImage;

  const images = uniqueStrings(
    fallback?.images?.length
      ? fallback.images
      : [primaryImage, look2, look3]
  );

  const paletteBase = fallback?.colors ?? defaultPalette(categorySlug);
  const colors = paletteBase.map((color, index) => ({
    ...color,
    image:
      color.image ||
      images[index] ||
      primaryImage
  }));

  return {
    id: String(row.id),
    slug: row.slug,
    name: row.name,
    categoryId: row.category_id ?? null,
    categorySlug,
    categoryName,
    subcategory: fallback?.subcategory ?? titleCase(categorySlug),
    shortDescription: fallback?.shortDescription ?? row.description ?? `${row.name} in LumiBelle's polished finish.`,
    description: row.description ?? fallback?.description ?? `${row.name} is part of LumiBelle's curated catalog.`,
    material: fallback?.material ?? "Premium blended fabric with a smooth hand feel.",
    sizeGuide: fallback?.sizeGuide ?? (freeSize ? "Free Size." : "Fits true to size."),
    modelInfo: fallback?.modelInfo ?? "Styled for an easy everyday fit.",
    tags: fallback?.tags ?? [categorySlug, "lumibelle"],
    collection: fallback?.collection ?? "LumiBelle Edit",
    price: Number(row.price ?? 0),
    compareAtPrice: row.compare_at_price ? Number(row.compare_at_price) : null,
    rating: fallback?.rating ?? 4.7,
    reviewCount: fallback?.reviewCount ?? 24,
    colors,
    sizes,
    freeSize,
    images,
    primaryImage,
    inventoryCount: row.stock ?? fallback?.inventoryCount ?? 12,
    newArrival: fallback?.newArrival ?? false,
    bestSeller: fallback?.bestSeller ?? Boolean(row.is_featured),
    onSale: fallback?.onSale ?? Number(row.compare_at_price ?? 0) > Number(row.price ?? 0),
    featured: fallback?.featured ?? Boolean(row.is_featured),
    trending: fallback?.trending ?? false,
    status: row.is_active === false ? "draft" : "active",
    sizeChart: fallback?.sizeChart ?? defaultSizeChart(sizes),
    relatedSlugs: [],
    sourceImageUrl: row.image_url ?? fallback?.sourceImageUrl ?? null,
    imageAuditStatus: fallback?.imageAuditStatus ?? (row.image_url ? "unknown" : "placeholder")
  };
}

async function fetchModernCatalog() {
  const supabase = createSupabaseServerClient();

  const { data: categoryRows, error: categoryError } = await supabase
    .from("categories")
    .select("id, slug, name, description")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (categoryError) throw categoryError;

  const categoryMap = new Map<string, Category>(
    (categoryRows ?? []).map((row) => [
      row.id,
      {
        id: row.id,
        slug: row.slug,
        name: row.name,
        description: row.description ?? "",
        image: getFallbackCategoryBySlug(row.slug)?.image ?? placeholderFor(row.slug)
      }
    ])
  );

  const { data: productRows, error: productError } = await supabase
    .from("products")
    .select(
      "id, category_id, name, slug, subcategory, short_description, description, material_details, size_guide, model_info, tags, collection, price, compare_at_price, rating, review_count, featured, is_new_arrival, is_best_seller, is_on_sale, free_size, status"
    )
    .eq("status", "active")
    .order("created_at", { ascending: false });

  if (productError) throw productError;

  const ids = (productRows ?? []).map((row) => row.id);

  const [imagesRes, variantsRes, sizeChartRes] = await Promise.all([
    ids.length
      ? supabase
          .from("product_images")
          .select("product_id, storage_path, is_primary, sort_order")
          .in("product_id", ids)
          .order("sort_order", { ascending: true })
      : Promise.resolve({ data: [], error: null }),
    ids.length
      ? supabase
          .from("product_variants")
          .select("product_id, color_name, color_hex, size_label")
          .in("product_id", ids)
      : Promise.resolve({ data: [], error: null }),
    ids.length
      ? supabase
          .from("size_chart_rules")
          .select("size_label, height_min_cm, height_max_cm, weight_min_kg, weight_max_kg, size_charts(product_id)")
      : Promise.resolve({ data: [], error: null })
  ]);

  if (imagesRes.error) throw imagesRes.error;
  if (variantsRes.error) throw variantsRes.error;
  if (sizeChartRes.error) throw sizeChartRes.error;

  const imagesByProduct = new Map<string, string[]>();

  for (const row of (imagesRes.data ?? []) as ProductImageRow[]) {
    const current = imagesByProduct.get(row.product_id) ?? [];
    current.push(row.storage_path);
    imagesByProduct.set(row.product_id, uniqueStrings(current));
  }

  const variantsByProduct = new Map<
    string,
    { colors: Product["colors"]; sizes: string[] }
  >();

  for (const row of (variantsRes.data ?? []) as ProductVariantRow[]) {
    const current = variantsByProduct.get(row.product_id) ?? { colors: [], sizes: [] };
    const productImages = imagesByProduct.get(row.product_id) ?? [];

    if (row.color_name && !current.colors.some((color) => color.name === row.color_name)) {
      current.colors.push({
        name: row.color_name,
        hex: row.color_hex ?? "#E5E7EB",
        image: productImages[0] ?? placeholderFor("dresses")
      });
    }

    if (row.size_label && !current.sizes.includes(row.size_label)) {
      current.sizes.push(row.size_label);
    }

    variantsByProduct.set(row.product_id, current);
  }

  const rulesByProduct = new Map<string, SizeChartRule[]>();

  for (const row of (sizeChartRes.data ?? []) as SizeChartRow[]) {
    const productId = Array.isArray(row.size_charts)
      ? row.size_charts[0]?.product_id
      : row.size_charts?.product_id;

    if (!productId) continue;

    const current = rulesByProduct.get(productId) ?? [];
    current.push({
      label: row.size_label,
      heightMin: row.height_min_cm,
      heightMax: row.height_max_cm,
      weightMin: row.weight_min_kg,
      weightMax: row.weight_max_kg
    });
    rulesByProduct.set(productId, current);
  }

  const products = (productRows ?? []).map((row: ModernProductRow) => {
    const category = categoryMap.get(row.category_id ?? "");
    const categorySlug = category?.slug ?? "dresses";
    const freeSize = Boolean(row.free_size) || categorySlug === "accessories";

    const sizes = variantsByProduct.get(row.id)?.sizes.length
      ? variantsByProduct.get(row.id)!.sizes
      : defaultSizes(categorySlug, freeSize);

    const images = imagesByProduct.get(row.id)?.length
      ? imagesByProduct.get(row.id)!
      : [placeholderFor(categorySlug)];

    const primaryImage = images[0] ?? placeholderFor(categorySlug);

    const colors = variantsByProduct.get(row.id)?.colors.length
      ? variantsByProduct.get(row.id)!.colors.map((color, index) => ({
          ...color,
          image: color.image || images[index] || primaryImage
        }))
      : defaultPalette(categorySlug).map((color, index) => ({
          ...color,
          image: images[index] || primaryImage
        }));

    return {
      id: row.id,
      slug: row.slug,
      name: row.name,
      categoryId: row.category_id ?? null,
      categorySlug,
      categoryName: category?.name ?? titleCase(categorySlug),
      subcategory: row.subcategory ?? titleCase(categorySlug),
      shortDescription: row.short_description ?? row.description ?? `${row.name} by LumiBelle.`,
      description: row.description ?? `${row.name} by LumiBelle.`,
      material: row.material_details ?? "Premium fabric blend.",
      sizeGuide: row.size_guide ?? (freeSize ? "Free Size." : "Fits true to size."),
      modelInfo: row.model_info ?? "Model styling notes available in admin.",
      tags: row.tags ?? [categorySlug],
      collection: row.collection ?? "LumiBelle Collection",
      price: Number(row.price),
      compareAtPrice: row.compare_at_price ? Number(row.compare_at_price) : null,
      rating: Number(row.rating ?? 4.7),
      reviewCount: row.review_count ?? 0,
      colors,
      sizes,
      freeSize,
      images,
      primaryImage,
      inventoryCount: 12,
      newArrival: Boolean(row.is_new_arrival),
      bestSeller: Boolean(row.is_best_seller),
      onSale: Boolean(row.is_on_sale) || Number(row.compare_at_price ?? 0) > Number(row.price),
      featured: Boolean(row.featured),
      trending: Boolean(row.is_best_seller || row.featured),
      status: row.status ?? "active",
      sizeChart: rulesByProduct.get(row.id)?.length
        ? rulesByProduct.get(row.id)!
        : defaultSizeChart(sizes),
      relatedSlugs: [],
      sourceImageUrl: primaryImage,
      imageAuditStatus: primaryImage.startsWith("http") ? "ok" : "placeholder"
    } satisfies Product;
  });

  return {
    categories: Array.from(categoryMap.values()),
    products: withRelated(products)
  };
}

async function fetchLegacyCatalog() {
  const supabase = createSupabaseServerClient();

  const { data: categoryRows } = await supabase
    .from("categories")
    .select("id, slug, name, description")
    .order("sort_order", { ascending: true });

  const categoryMap = new Map<string, Category>(
    (categoryRows ?? []).map((row) => [
      row.id,
      {
        id: row.id,
        slug: row.slug,
        name: row.name,
        description: row.description ?? "",
        image: getFallbackCategoryBySlug(row.slug)?.image ?? placeholderFor(row.slug)
      }
    ])
  );

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return {
    categories: categoryRows?.length ? Array.from(categoryMap.values()) : fallbackCategories,
    products: withRelated((data ?? []).map((row) => normalizeLegacyProduct(row, categoryMap)))
  };
}

async function getCatalog() {
  try {
    return await fetchModernCatalog();
  } catch {
    try {
      return await fetchLegacyCatalog();
    } catch {
      return {
        categories: fallbackCategories,
        products: fallbackProducts
      };
    }
  }
}

export async function getCategories() {
  return (await getCatalog()).categories;
}

export async function getAllProducts() {
  return (await getCatalog()).products;
}

export async function getFeaturedProducts() {
  const products = await getAllProducts();
  return products.filter((product) => product.featured).slice(0, 12);
}

export async function getNewArrivalProducts() {
  const products = await getAllProducts();
  return products.filter((product) => product.newArrival).slice(0, 12);
}

export async function getBestSellerProducts() {
  const products = await getAllProducts();
  return products.filter((product) => product.bestSeller).slice(0, 12);
}

export async function getSaleProducts() {
  const products = await getAllProducts();
  return products.filter((product) => product.onSale).slice(0, 12);
}

export async function getProductsByCategory(categorySlug: string) {
  const products = await getAllProducts();
  return products.filter((product) => product.categorySlug === categorySlug);
}

export async function getProductBySlug(slug: string) {
  const products = await getAllProducts();
  return products.find((product) => product.slug === slug) ?? getFallbackProductBySlug(slug) ?? null;
}

export async function getRelatedProducts(product: Product) {
  const products = await getAllProducts();
  return products.filter((item) => product.relatedSlugs.includes(item.slug)).slice(0, 4);
}

export async function searchProducts(query: string) {
  if (!query.trim()) return [];

  const products = await getAllProducts();
  const normalized = query.trim().toLowerCase();

  const results = products.filter((product) =>
    [
      product.name,
      product.shortDescription,
      product.description,
      product.categoryName,
      product.subcategory ?? "",
      ...product.tags
    ]
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );

  return results.length ? results : searchFallbackProducts(query);
}