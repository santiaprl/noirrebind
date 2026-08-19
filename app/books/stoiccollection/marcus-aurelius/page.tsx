"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { products } from "@/lib/products"
import { useCart } from "@/components/cart-provider"

export default function MarcusAureliusPage() {
  const product = products.marcusAurelius
  const { addItem } = useCart()
  const [addedToCart, setAddedToCart] = useState(false)

  return (
    <main className="min-h-screen bg-[#E2E1DE] text-[#181612]">
      {/* PLACEHOLDER — Update the final price, inventory, and cart connection later. */}

      <div className="mx-auto max-w-[1800px] px-3 py-3 md:px-5 md:py-5">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,2fr)_minmax(350px,0.82fr)]">
          
          {/* Four-Image Editorial Gallery */}
          <section className="grid content-start gap-3 sm:grid-cols-2">
            
            {/* Front cover */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#CACAC7]">
              <Image
                src="/images/stoics/marcus/marcus_cover.png"
                alt="Marcus Aurelius burgundy leather edition"
                fill
                priority
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              />
            </div>

            {/* Back cover */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#CACAC7]">
              <Image
                src="/images/stoics/marcus/back_marcus.png"
                alt="Back of the Marcus Aurelius leather edition"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              />
            </div>

            {/* Interior */}
            <div className="group relative order-4 aspect-[4/5] overflow-hidden bg-[#CACAC7]">
              <Image
                src="/images/stoics/marcus/inside_marcus_gallery.png"
                alt="Interior of the Marcus Aurelius handcrafted edition"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              />
            </div>

            {/* Spine */}
            <div className="group relative order-3 aspect-[4/5] overflow-hidden bg-[#CACAC7]">
              <Image
                src="/images/stoics/marcus/spine_marcus.png"
                alt="Gold-detailed spine of the Marcus Aurelius edition"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              />
            </div>
          </section>

          {/* Edition Information */}
          <aside className="bg-[#F7F4EE] px-7 py-10 sm:px-10 lg:px-12 lg:py-14">
            <div className="lg:sticky lg:top-24">
              <Link
                href="/books/stoiccollection"
                className="inline-block text-[8px] uppercase tracking-[0.26em] text-[#746F68] transition-colors hover:text-[#181612]"
              >
                ← The Stoic Collection
              </Link>

              <div className="mt-14">
               <p className="text-[8px] uppercase tracking-[0.3em] text-[#986F39]">
  Stoic Collection · {product.editionIdentifier}
</p>

<h1 className="mt-5 font-serif text-4xl font-light tracking-[-0.035em] sm:text-5xl">
  {product.title}
</h1>

<p className="mt-3 font-serif text-base italic text-[#655F57]">
  {product.subtitle}
</p>

<p className="mt-6 font-serif text-xl">
  ${product.price} USD
</p>
              </div>

              <div className="my-9 h-px bg-[#CEC7BD]" />

              <p className="text-sm font-light leading-7 text-[#625D56]">
                A handcrafted leather interpretation of the private reflections
                of Marcus Aurelius—words written without an audience, preserved
                for readers centuries later.
              </p>

              <div className="mt-9 space-y-5 border-y border-[#CEC7BD] py-7">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
                    Leather
                  </span>

                  <span className="text-xs">Burgundy</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
                    Detail
                  </span>

                  <span className="text-xs">Gold</span>
                </div>

                <div className="flex items-center justify-between gap-6">
  <span className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
    Binding
  </span>

  <span className="text-xs">Rebound by hand</span>
</div>

<div className="flex items-center justify-between gap-6">
  <span className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
    Edition
  </span>

  <span className="text-xs">
    {product.editionIdentifier} · Limited to {product.editionLimit}
  </span>
</div>
              </div>

              <div className="mt-9">
                <p className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
                  Current status
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.18em]">
                  Available to order
                </p>
              </div>

              {/* PLACEHOLDER — Connect to the cart after the CartProvider is installed. */}
<button
  type="button"
  onClick={() => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: "/images/stoics/marcus/marcus_cover.png",
    })

    setAddedToCart(true)

    window.setTimeout(() => {
      setAddedToCart(false)
    }, 1800)
  }}
  className={`mt-8 w-full border px-6 py-5 text-[9px] uppercase tracking-[0.24em] text-white transition-all duration-300 ${
    addedToCart
      ? "border-[#4F5A45] bg-[#350616]"
      : "border-[#6F211B] bg-[#8E3028] hover:bg-[#70231D]"
  }`}
>
  {addedToCart ? "Added to Cart ✓" : "Add to Cart"}
</button>

              <p className="mt-4 text-center text-[9px] font-light leading-5 text-[#77716A]">
                Rebound individually by hand in the Noir Rebind studio.
              </p>

              <details className="mt-10 border-t border-[#CEC7BD] py-6">
                <summary className="cursor-pointer list-none text-[9px] uppercase tracking-[0.22em]">
                  Edition details
                  <span className="float-right">＋</span>
                </summary>

                <p className="mt-5 text-xs font-light leading-6 text-[#625D56]">
                  Each edition is rebound and finished individually. Natural
                  variations in the leather and gold detailing are part of the
                  character of every volume.
                </p>
              </details>

              <details className="border-y border-[#CEC7BD] py-6">
                <summary className="cursor-pointer list-none text-[9px] uppercase tracking-[0.22em]">
                  Production and delivery
                  <span className="float-right">＋</span>
                </summary>

                <p className="mt-5 text-xs font-light leading-6 text-[#625D56]">
                  Production timing and delivery estimates will be finalized
                  before checkout is activated.
                </p>
              </details>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}