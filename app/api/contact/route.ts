import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Message delivery is temporarily unavailable. Your message has not been sent. Please try again later." },
    { status: 503 }
  );
}
