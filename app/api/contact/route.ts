import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    ok: true,
    message: "Message received. In production this should enqueue email or CRM processing through Render."
  });
}
