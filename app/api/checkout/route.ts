import { NextResponse } from "next/server";
// Fail closed until the merchant integration is connected. A confirmation
// number must represent a real stored order, never a random value.
export async function POST() {
  return NextResponse.json(
    { error: "Online ordering is temporarily unavailable. Your bag has been saved. Please try again later." },
    { status: 503 }
  );
}
