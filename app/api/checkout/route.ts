import { NextResponse } from "next/server";
// Fail closed until the merchant integration is connected. A confirmation
// number must represent a real stored order, never a random value.
export async function POST() {
  return NextResponse.json(
    { error: "This is a demo. Real ordering and payments are disabled. Use the browser demo checkout." },
    { status: 503 }
  );
}
