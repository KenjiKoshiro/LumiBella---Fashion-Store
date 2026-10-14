import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "This is a demo. No email is sent or stored." },
    { status: 503 }
  );
}
