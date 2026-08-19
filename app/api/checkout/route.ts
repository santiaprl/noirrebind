import Stripe from "stripe"
import { NextResponse } from "next/server"
import { products } from "@/lib/products"

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is not configured.")
}

const stripe = new Stripe(stripeSecretKey)

type CheckoutItem = {
  id: string
  quantity: number
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const cartItems: CheckoutItem[] = body.items

    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return NextResponse.json(
        { error: "Your cart is empty." },
        { status: 400 }
      )
    }

    const approvedProducts = Object.values(products)

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] =
      cartItems.map((cartItem) => {
        const product = approvedProducts.find(
          (approvedProduct) => approvedProduct.id === cartItem.id
        )

        if (!product) {
          throw new Error(`Unknown product: ${cartItem.id}`)
        }

        return {
          quantity: cartItem.quantity,
          price_data: {
            currency: "usd",
            unit_amount: product.price * 100,
            product_data: {
              name: product.title,
            },
          },
        }
      })

    const origin = new URL(request.url).origin

    const session = await stripe.checkout.sessions.create({
  ui_mode: "embedded_page",
  mode: "payment",
  line_items: lineItems,
  return_url: `${origin}/checkout/return?session_id={CHECKOUT_SESSION_ID}`,
})

    return NextResponse.json({
      clientSecret: session.client_secret,
    })
  } catch (error) {
    console.error("Stripe checkout error:", error)

    return NextResponse.json(
      { error: "Unable to create checkout session." },
      { status: 500 }
    )
  }
}