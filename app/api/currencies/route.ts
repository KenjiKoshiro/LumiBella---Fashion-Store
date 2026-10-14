import { NextResponse } from "next/server";
import { parseRates } from "@/lib/demo";

export async function GET() {
  try {
    const response = await fetch("https://api.frankfurter.dev/v2/rates?base=THB&quotes=USD,EUR,GBP,JPY,SGD,AUD", {
      next: { revalidate: 3600 }, signal: AbortSignal.timeout(8000)
    });
    if (!response.ok) throw new Error("Currency provider unavailable");
    return NextResponse.json(parseRates(await response.json()));
  } catch {
    return NextResponse.json({ rates: { THB: 1 }, date: null, error: "Conversion unavailable. Prices shown in THB." }, { status: 503 });
  }
}
