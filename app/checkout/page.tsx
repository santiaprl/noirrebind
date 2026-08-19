"use client"

import Link from "next/link"
import { useCallback } from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js"
import { useCart } from "@/components/cart-provider"

const publishableKey =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

const stripePromise = publishableKey
  ? loadStripe(publishableKey)
  : null

export default function CheckoutPage() {
  const { items, itemCount, subtotal } = useCart()

  const fetchClientSecret = useCallback(async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: items.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })),
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(
        data.error || "Unable to create checkout session."
      )
    }

    return data.clientSecret
  }, [items])

  return (
    <main className="min-h-screen bg-[#F3F0E9] text-[#171512]">
      {/* Checkout navigation */}
      <section className="border-b border-[#CFC9BE] px-6 py-9 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center">
          <div>
            <Link
              href="/cart"
              className="text-[9px] uppercase tracking-[0.24em] text-[#625E58] transition-colors hover:text-black"
            >
              ← Return to Cart
            </Link>
          </div>

          <p className="text-center font-serif text-2xl italic">
            Noir Rebind
          </p>

          <div aria-hidden="true" />
        </div>
      </section>

      {/* Checkout progress */}
      <section className="px-6 pb-12 pt-9 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="relative grid grid-cols-3">
            <div className="absolute left-0 right-0 top-[5px] h-px bg-[#AAA49B]" />

            {["Cart", "Checkout", "Confirmation"].map((step, index) => (
              <div
                key={step}
                className="relative z-10 flex flex-col items-center"
              >
                <span
                  className={`h-[11px] w-[11px] rounded-full border ${
                    index === 1
                      ? "border-black bg-black"
                      : "border-[#8C877F] bg-[#F3F0E9]"
                  }`}
                />

                <span
                  className={`mt-4 text-[9px] uppercase tracking-[0.24em] ${
                    index === 1
                      ? "text-black"
                      : "text-[#8C877F]"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial heading */}
      <section className="px-6 pb-12 md:px-12">
        <div className="mx-auto max-w-7xl border-t border-[#CFC9BE] pt-9">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-[8px] uppercase tracking-[0.3em] text-[#9B7338]">
                Secure Checkout
              </p>

              <h1 className="mt-5 font-serif text-4xl font-light tracking-[-0.035em] md:text-5xl">
                Complete your order.
              </h1>

              <p className="mt-4 max-w-xl text-sm font-light leading-7 text-[#716B63]">
                Payment is securely processed through Stripe before your
                edition enters the Noir Rebind studio process.
              </p>
            </div>

            {itemCount > 0 && (
              <p className="pb-1 text-[8px] uppercase tracking-[0.24em] text-[#817B73]">
                {itemCount}{" "}
                {itemCount === 1 ? "edition" : "editions"} selected
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Unified checkout composition */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-7xl border border-[#CFC9BE]">
          <div className="grid lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)]">
            
            {/* Payment */}
            <section className="bg-white lg:border-r lg:border-[#CFC9BE]">
              <div className="flex items-center justify-between border-b border-[#D8D2C8] px-7 py-5 md:px-10">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.26em] text-[#817B73]">
                    I
                  </p>

                  <p className="mt-2 font-serif text-xl font-light">
                    Payment
                  </p>
                </div>

                <p className="text-[8px] uppercase tracking-[0.22em] text-[#817B73]">
                  Secure connection
                </p>
              </div>

              <div className="px-4 py-6 sm:px-8 md:px-12 md:py-10">
                {items.length > 0 ? (
                  <div className="mx-auto max-w-[560px]">
                    <EmbeddedCheckoutProvider
                      stripe={stripePromise}
                      options={{ fetchClientSecret }}
                    >
                      <EmbeddedCheckout />
                    </EmbeddedCheckoutProvider>
                  </div>
                ) : (
                  <div className="flex min-h-[420px] flex-col items-center justify-center px-6 text-center">
                    <p className="font-serif text-4xl font-light">
                      Your collection awaits.
                    </p>

                    <p className="mt-5 max-w-md text-sm font-light leading-7 text-[#716B63]">
                      Return to the collection and choose the edition you would
                      like preserved in leather.
                    </p>

                    <Link
                      href="/arcs"
                      className="mt-10 border-b border-black pb-2 text-[9px] uppercase tracking-[0.24em]"
                    >
                      Explore the Collection →
                    </Link>
                  </div>
                )}
              </div>
            </section>

            {/* Order summary */}
            <aside className="bg-[#171512] text-[#F5F1E9]">
              <div className="border-b border-white/15 px-7 py-5 md:px-8">
                <p className="text-[8px] uppercase tracking-[0.26em] text-white/45">
                  II
                </p>

                <p className="mt-2 font-serif text-xl font-light">
                  Your Editions
                </p>
              </div>

              <div className="px-7 py-8 md:px-8">
                <div className="space-y-7">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-white/15 pb-7"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="font-serif text-xl font-light leading-6">
                            {item.name}
                          </p>

                          <p className="mt-3 text-[8px] uppercase tracking-[0.2em] text-white/40">
                            Quantity {item.quantity}
                          </p>
                        </div>

                        <p className="pt-1 text-xs tracking-wide text-white/80">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="flex items-end justify-between gap-6">
                    <span className="text-[8px] uppercase tracking-[0.24em] text-white/45">
                      Subtotal
                    </span>

                    <span className="font-serif text-3xl font-light">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <p className="mt-4 text-right text-[8px] leading-5 text-white/35">
                    Shipping and applicable taxes calculated during checkout.
                  </p>
                </div>

                <div className="my-9 h-px bg-white/15" />

                <p className="text-[8px] uppercase tracking-[0.24em] text-white/40">
                  The Noir Presentation
                </p>

                <p className="mt-5 font-serif text-xl italic text-white/90">
                  Prepared with intention.
                </p>

                <p className="mt-4 text-xs font-light leading-6 text-white/50">
                  Every edition is carefully wrapped and prepared inside the
                  Noir Rebind studio before beginning its journey to you.
                </p>
              </div>

              <div className="border-t border-white/15 px-7 py-5 md:px-8">
                <p className="text-[7px] uppercase tracking-[0.22em] text-white/30">
                  Secure payment · Powered by Stripe
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}