export type FitPreference = "slim" | "regular" | "oversized";
export type ImageAuditStatus = "ok" | "broken" | "placeholder" | "unknown";

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
};


export type SizeChartRule = {
  label: string;
  heightMin: number;
  heightMax: number;
  weightMin: number;
  weightMax: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  compare_at_price?: number | null;
  compareAtPrice?: number | null;
  rating: number;
  reviewCount: number;
  collection: string;
  stock?: number;
  inventoryCount: number;
  freeSize: boolean;
  sizes: string[];
  images: string[];
  categoryId?: string | null;
  categorySlug: string;
  categoryName: string;
  subcategory: string;
  material: string;
  sizeGuide: string;
  modelInfo: string;
  tags: string[];
  newArrival: boolean;
  bestSeller: boolean;
  onSale: boolean;
  featured: boolean;
  trending: boolean;
  status: string;
  sizeChart: SizeChartRule[];
  relatedSlugs: string[];
  sourceImageUrl: string | null;
  imageAuditStatus: ImageAuditStatus;
  primaryImage: string;
};

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
};

export type WishlistItem = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  price: number;
};

export type SizeRecommendationInput = {
  height: number;
  weight: number;
  age?: number;
  fitPreference: FitPreference;
};

export type SizeRecommendationResult = {
  recommendedSize: string;
  message: string;
  fitNote: string;
  confidence: "high" | "medium" | "low";
  matchedExactly: boolean;
};
