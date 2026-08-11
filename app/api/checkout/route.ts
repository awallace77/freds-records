import { NextResponse } from "next/server";

export async function POST() {
  // TODO: Create a Stripe Checkout Session here.
  // Keep Stripe secret-key usage on the server only.
  return NextResponse.json(
    { message: "Stripe checkout is not wired yet." },
    { status: 501 }
  );
}
