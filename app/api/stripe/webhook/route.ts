import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is not configured.")
}

const stripe = new Stripe(stripeSecretKey)

export async function POST(request: Request) {
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Stripe webhook secret is not configured." },
      { status: 500 }
    )
  }

  const signature = request.headers.get("stripe-signature")

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature." },
      { status: 400 }
    )
  }

  const body = await request.text()

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    )
  } catch (error) {
    console.error("Stripe webhook signature error:", error)

    return NextResponse.json(
      { error: "Invalid webhook signature." },
      { status: 400 }
    )
  }

  if (
  event.type === "checkout.session.completed" ||
  event.type === "checkout.session.async_payment_succeeded"
) {
  const session = event.data.object as Stripe.Checkout.Session

  if (session.payment_status === "paid") {
    console.log("Noir Rebind paid checkout:", {
      sessionId: session.id,
      paymentStatus: session.payment_status,
      customerEmail: session.customer_details?.email ?? null,
      amountTotal: session.amount_total,
    })

    // Paid order confirmed.
    // Later:
    // - record the paid order
    // - assign edition number when applicable
    // - update inventory
    // - trigger fulfillment / order email
  } else {
    console.log("Noir Rebind checkout awaiting payment:", {
      sessionId: session.id,
      paymentStatus: session.payment_status,
    })
  }
}
  return NextResponse.json({ received: true })
}