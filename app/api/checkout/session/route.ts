import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is not configured.")
}

const stripe = new Stripe(stripeSecretKey)

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get("session_id")

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing checkout session ID." },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    return NextResponse.json({
      status: session.status,
      paymentStatus: session.payment_status,
      customerEmail: session.customer_details?.email ?? null,
      amountTotal: session.amount_total,
      currency: session.currency,
    })
  } catch (error) {
    console.error("Stripe session verification error:", error)

    return NextResponse.json(
      { error: "Unable to verify checkout session." },
      { status: 500 }
    )
  }
}