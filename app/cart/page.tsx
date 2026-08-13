"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/components/cart-provider"

export default function CartPage() {
  const {
    items,
    itemCount,
    subtotal,
    removeItem,
    updateQuantity,
  } = useCart()

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price)

  return (
    <main className="min-h-screen bg-[#F3F0E9] text-[#171512]">
      {/* Page heading */}
      <section className="border-b border-[#CFC9BE] px-6 py-10 md:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/arcs/all"
            className="text-[10px] uppercase tracking-[0.22em] text-[#625E58] transition-colors hover:text-black"
          >
            ← Continue Exploring
          </Link>

          <p className="font-serif text-2xl italic">Noir Rebind</p>

          <div className="w-28" aria-hidden="true" />
        </div>
      </section>

      {/* Checkout progress */}
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
                    index === 0
                      ? "border-black bg-black"
                      : "border-[#8C877F] bg-[#F3F0E9]"
                  }`}
                />

                <span
                  className={`mt-4 text-[9px] uppercase tracking-[0.24em] ${
                    index === 0 ? "text-black" : "text-[#8C877F]"
                  }`}
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          {/* Cart contents */}
          <div className="bg-[#FAF8F3] lg:col-span-8">
            <div className="border-b border-[#D8D2C8] px-7 py-8 md:px-10">
              <h1 className="text-[11px] uppercase tracking-[0.28em]">
                {itemCount === 0
                  ? "Your cart is currently empty."
                  : `You have ${itemCount} ${
                      itemCount === 1 ? "edition" : "editions"
                    } in your cart.`}
              </h1>
            </div>

            {items.length === 0 ? (
              <div className="px-7 py-20 text-center md:px-10">
                <p className="font-serif text-4xl font-light">
                  Your collection awaits.
                </p>

                <p className="mx-auto mt-5 max-w-md text-sm font-light leading-7 text-[#716B63]">
                  Explore the available handcrafted editions and choose the
                  work you would like preserved in leather.
                </p>

                <Link
                  href="/arcs/all"
                  className="mt-10 inline-block border-b border-black pb-2 text-[9px] uppercase tracking-[0.24em]"
                >
                  View All Editions →
                </Link>
              </div>
            ) : (
              <>
                <div className="divide-y divide-[#D8D2C8]">
                  {items.map((item) => (
                    <article
                      key={item.id}
                      className="grid gap-7 px-7 py-9 sm:grid-cols-[180px_1fr] md:px-10"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-[#E3E0DA]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover object-center"
                          sizes="180px"
                        />
                      </div>

                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-6">
                            <div>
                              <p className="mb-3 text-[8px] uppercase tracking-[0.26em] text-[#9B7338]">
                                Handcrafted Edition
                              </p>

                              <h2 className="font-serif text-3xl font-light">
                                {item.name}
                              </h2>
                            </div>

                            <p className="font-serif text-lg">
                              {formatPrice(item.price * item.quantity)}
                            </p>
                          </div>

                          <p className="mt-4 text-xs font-light text-[#716B63]">
                            Rebound by hand · Made to order
                          </p>
                        </div>

                        <div className="mt-10 flex items-end justify-between gap-6">
                          <div className="flex items-center border border-[#CFC9BE]">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-[#E8E3DA]"
                              aria-label={`Decrease ${item.name} quantity`}
                            >
                              <Minus className="h-3 w-3" />
                            </button>

                            <span className="flex h-10 min-w-10 items-center justify-center border-x border-[#CFC9BE] text-xs">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-[#E8E3DA]"
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#6F6961] transition-colors hover:text-black"
                          >
                            <Trash2 className="h-3 w-3" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="border-t border-[#D8D2C8] px-7 py-8 md:px-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.24em]">
                      Subtotal
                    </span>

                    <span className="font-serif text-2xl">
                      {formatPrice(subtotal)}
                    </span>
                  </div>

                  <p className="mt-3 text-right text-xs text-[#817B73]">
                    Shipping and applicable taxes calculated at checkout.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Service information */}
          <aside className="space-y-8 lg:col-span-4">
            <div className="bg-[#FAF8F3] px-7 py-9">
              <p className="text-[10px] uppercase tracking-[0.28em]">
                The Noir Presentation
              </p>

              <div className="my-7 h-px bg-[#D8D2C8]" />

              <p className="font-serif text-2xl italic">
                Prepared with intention.
              </p>

              <p className="mt-5 text-sm font-light leading-7 text-[#6F6961]">
                Every edition is carefully wrapped and prepared inside the
                Noir Rebind studio before beginning its journey to you.
              </p>
            </div>

            <div className="bg-[#FAF8F3] px-7 py-9">
              <p className="text-[10px] uppercase tracking-[0.28em]">
                Studio Assistance
              </p>

              <div className="my-7 h-px bg-[#D8D2C8]" />

              <p className="text-sm font-light leading-7 text-[#6F6961]">
                Questions about an edition or your order? The studio is
                available to help before your purchase.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-block border-b border-[#726C64] pb-1 text-[9px] uppercase tracking-[0.22em]"
              >
                Contact the Studio
              </Link>
            </div>

            {items.length > 0 && (
              <div className="bg-[#171512] p-7 text-[#F5F1E9]">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.24em] text-white/60">
                    Order Total
                  </span>

                  <span className="font-serif text-2xl">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <Link
                  href="/checkout"
                  className="mt-7 flex w-full items-center justify-center border border-[#F5F1E9]/50 px-6 py-5 text-[9px] uppercase tracking-[0.26em] transition-colors hover:bg-[#F5F1E9] hover:text-[#171512]"
                >
                  Proceed to Checkout →
                </Link>

                <p className="mt-4 text-center text-[9px] leading-5 text-white/45">
                  Secure payment will be completed through Stripe.
                </p>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  )
}