"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useCart } from "@/components/cart-provider"

type SessionStatus = {
  status: string | null
  paymentStatus: string | null
  customerEmail: string | null
  amountTotal: number | null
  currency: string | null
}

type ConfirmationState =
  | "loading"
  | "paid"
  | "processing"
  | "incomplete"
  | "missing"
  | "error"

export default function CheckoutReturnPage() {
  const { clearCart } = useCart()
  const cartCleared = useRef(false)

  const [confirmationState, setConfirmationState] =
    useState<ConfirmationState>("loading")

  const [session, setSession] = useState<SessionStatus | null>(null)

  useEffect(() => {
    async function verifySession() {
      const searchParams = new URLSearchParams(window.location.search)
      const sessionId = searchParams.get("session_id")

      if (!sessionId) {
        setConfirmationState("missing")
        return
      }

      try {
        const response = await fetch(
          `/api/checkout/session?session_id=${encodeURIComponent(sessionId)}`
        )

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.error || "Unable to verify order.")
        }

        setSession(data)

        if (data.paymentStatus === "paid") {
  if (!cartCleared.current) {
    clearCart()
    cartCleared.current = true
  }

  setConfirmationState("paid")
  return
}

        if (data.status === "complete") {
          setConfirmationState("processing")
          return
        }

        setConfirmationState("incomplete")
      } catch (error) {
        console.error("Order verification error:", error)
        setConfirmationState("error")
      }
    }

    verifySession()
  }, [])

  const content = {
    loading: {
      label: "Order Confirmation",
      title: "Confirming your order.",
      description:
        "We are verifying the final details of your payment with Stripe.",
    },

    paid: {
      label: "Order Confirmed",
      title: "Your order is confirmed.",
      description:
        "Your payment has been received. Your edition will now enter the Noir Rebind studio process.",
    },

    processing: {
      label: "Payment Processing",
      title: "Your payment is being confirmed.",
      description:
        "Stripe has received your checkout. We are waiting for final payment confirmation before your order enters the studio process.",
    },

    incomplete: {
      label: "Checkout Incomplete",
      title: "Your order has not been completed.",
      description:
        "No confirmed payment was found for this checkout. Your cart remains available if you would like to return and complete your order.",
    },

    missing: {
      label: "Order Confirmation",
      title: "No order to confirm.",
      description:
        "This page is used after completing checkout. Return to your cart to continue your order.",
    },

    error: {
      label: "Order Confirmation",
      title: "We could not verify your order.",
      description:
        "Your order status could not be retrieved at this time. Please return to your cart or contact the studio if you need assistance.",
    },
  }[confirmationState]

  return (
    <main className="min-h-screen bg-[#F3F0E9] text-[#171512]">
      {/* Confirmation navigation */}
      <section className="border-b border-[#CFC9BE] px-6 py-10 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center">
          <div>
            <Link
              href="/arcs"
              className="text-[9px] uppercase tracking-[0.24em] text-[#625E58] transition-colors hover:text-black"
            >
              ← Continue Exploring
            </Link>
          </div>

          <p className="text-center font-serif text-2xl italic">
            Noir Rebind
          </p>

          <div aria-hidden="true" />
        </div>
      </section>

      {/* Progress */}
      <section className="px-6 pb-14 pt-10 md:px-12">
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
                    index === 2
                      ? "border-black bg-black"
                      : "border-black bg-[#F3F0E9]"
                  }`}
                />

                <span
                  className={`mt-4 text-[9px] uppercase tracking-[0.24em] ${
                    index === 2 ? "text-black" : "text-[#8C877F]"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confirmation body */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="bg-[#FAF8F3] px-8 py-16 md:px-14 md:py-20 lg:col-span-8">
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#9B7338]">
                {content.label}
              </p>

              <h1 className="mt-6 max-w-3xl font-serif text-4xl font-light tracking-[-0.035em] md:text-5xl">
                {content.title}
              </h1>

              <div className="my-10 h-px w-16 bg-[#A77B2F]" />

              <p className="max-w-xl text-sm font-light leading-7 text-[#716B63]">
                {content.description}
              </p>

              {confirmationState === "paid" && session?.customerEmail && (
                <p className="mt-8 text-xs font-light leading-6 text-[#817B73]">
                  Confirmation details are associated with{" "}
                  <span className="text-[#171512]">
                    {session.customerEmail}
                  </span>
                  .
                </p>
              )}

              {(confirmationState === "incomplete" ||
                confirmationState === "missing") && (
                <Link
                  href="/cart"
                  className="mt-10 inline-block border-b border-[#171512] pb-2 text-[9px] uppercase tracking-[0.24em]"
                >
                  Return to Cart →
                </Link>
              )}
            </div>

            <aside className="bg-[#171512] p-8 text-[#F5F1E9] lg:col-span-4">
              <p className="text-[9px] uppercase tracking-[0.26em] text-white/55">
                What Happens Next
              </p>

              <div className="my-7 h-px bg-white/15" />

              <p className="font-serif text-2xl italic">
                Prepared with intention.
              </p>

              <p className="mt-5 text-sm font-light leading-7 text-white/60">
                {confirmationState === "paid"
                  ? "Your confirmed order will be reviewed, prepared by hand, and packaged inside the Noir Rebind studio before shipment."
                  : "Once payment is confirmed, your order will enter the Noir Rebind studio process."}
              </p>

              <Link
                href="/arcs"
                className="mt-10 inline-block border-b border-white/50 pb-2 text-[9px] uppercase tracking-[0.24em]"
              >
                Explore the Collection →
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}