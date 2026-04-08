import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/queries/products";
import { getSizeRecommendation } from "@/lib/size-recommendation";
import { FitPreference } from "@/lib/types";

export async function POST(request: Request) {
  const body = await request.json();
  const product = await getProductBySlug(body.productSlug);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const result = getSizeRecommendation(product, {
    height: Number(body.height),
    weight: Number(body.weight),
    age: body.age ? Number(body.age) : undefined,
    fitPreference: (body.fitPreference as FitPreference) ?? "regular"
  });

  return NextResponse.json({ result });
}
