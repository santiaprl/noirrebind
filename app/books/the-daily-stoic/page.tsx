import Image from "next/image"
import Link from "next/link"

const images = [
  {
    src: "/images/Daily_Stoic_Large.jpeg",
    alt: "The Daily Stoic handcrafted black leather edition",
    position: "object-center",
  },
  {
    src: "/images/daily/daily2.jpg",
    alt: "Gold-lettered spine of The Daily Stoic edition",
    position: "object-center",
  },
  {
    src: "/images/daily/daily3.jpg",
    alt: "Page edges and ribbon detail of The Daily Stoic edition",
    position: "object-center",
  },
]

export default function DailyStoicPage() {
  return (
    <main className="min-h-screen bg-[#D3D3D0] text-[#181816]">
      <div className="mx-auto grid max-w-[1600px] gap-1 px-2 py-2 lg:grid-cols-[minmax(0,2fr)_minmax(340px,0.78fr)]">
        {/* Product gallery */}
        <section className="grid gap-1 sm:grid-cols-2">
          {images.map((image, index) => (
            <div
              key={image.src}
              className="relative aspect-[3/4] overflow-hidden bg-[#C9C9C6]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index < 2}
                className={`object-cover ${image.position} transition-transform duration-1000 ease-out hover:scale-[1.015]`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36vw"
              />
            </div>
          ))}

          
        </section>

        {/* Product information */}
        <aside className="bg-[#F3F0E9] px-7 py-10 sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto lg:px-12 lg:py-14">
          <Link
            href="/books/stoiccollection"
            className="text-[8px] uppercase tracking-[0.27em] text-[#77736D] transition-colors hover:text-black"
          >
            ← The Stoic Collection
          </Link>

          <p className="mt-10 text-[8px] uppercase tracking-[0.3em] text-[#9A7338]">
            Companion Edition · No. IV
          </p>

          <h1 className="mt-5 font-serif text-4xl font-light tracking-[-0.035em] sm:text-5xl">
            The Daily Stoic
          </h1>

          <p className="mt-2 font-serif text-sm italic text-[#6D6861]">
            Ryan Holiday and Stephen Hanselman
          </p>

          <p className="mt-5 font-serif text-lg">$200 USD</p>

          <div className="my-8 h-px bg-[#CEC7BC]" />

          <p className="text-sm font-light leading-7 text-[#69645D]">
            A handcrafted companion for daily reflection, preserving the
            enduring ideas of Stoicism in an edition designed to be opened,
            considered, and returned to each day.
          </p>

          {/* Materials */}
          <dl className="mt-9 space-y-5 border-y border-[#CEC7BC] py-7">
            <div className="flex items-center justify-between gap-6">
              <dt className="text-[8px] uppercase tracking-[0.25em] text-[#77726B]">
                Leather
              </dt>

              <dd className="text-xs">Matte black</dd>
            </div>

            <div className="flex items-center justify-between gap-6">
              <dt className="text-[8px] uppercase tracking-[0.25em] text-[#77726B]">
                Detail
              </dt>

              <dd className="text-xs">Gold and silver</dd>
            </div>

            <div className="flex items-center justify-between gap-6">
              <dt className="text-[8px] uppercase tracking-[0.25em] text-[#77726B]">
                Binding
              </dt>

              <dd className="text-xs">Rebound by hand</dd>
            </div>
          </dl>

          {/* Availability */}
          <div className="mt-8">
            <p className="text-[8px] uppercase tracking-[0.25em] text-[#77726B]">
              Current status
            </p>

            <p className="mt-4 text-[10px] uppercase tracking-[0.24em]">
              Available to order
            </p>
          </div>

          {/* Future integrated cart button */}
          <button
            type="button"
            className="mt-8 w-full border border-[#242422] bg-[#242422] px-6 py-5 text-[9px] uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-black"
          >
            Add to Cart
          </button>

          <p className="mt-4 text-center text-[9px] font-light text-[#8A857E]">
            Please allow 9–12 business days before shipping.
          </p>

          {/* Additional information */}
          <div className="mt-10 border-t border-[#CEC7BC]">
            <details className="group border-b border-[#CEC7BC] py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[9px] uppercase tracking-[0.24em]">
                Edition details

                <span className="text-sm font-light transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 text-xs font-light leading-6 text-[#706B64]">
                Hand-bound in matte black leather and finished with symbols
                representing wisdom, justice, courage, and temperance. The
                edition includes a ribbon marker and hand-finished page edges.
              </p>
            </details>

            <details className="group border-b border-[#CEC7BC] py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[9px] uppercase tracking-[0.24em]">
                Production and delivery

                <span className="text-sm font-light transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 text-xs font-light leading-6 text-[#706B64]">
                Every edition is completed by hand. Small variations in the
                leather grain, tooling, and finish are part of its individual
                character.
              </p>
            </details>

            <details className="group border-b border-[#CEC7BC] py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[9px] uppercase tracking-[0.24em]">
                Ask about this edition

                <span className="text-sm font-light transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-5 text-xs font-light leading-6 text-[#706B64]">
                Questions about availability or this edition can be sent
                directly through the Noir Rebind contact page.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex border-b border-[#181816] pb-1 text-[8px] uppercase tracking-[0.22em]"
              >
                Contact the studio →
              </Link>
            </details>
          </div>
        </aside>
      </div>
    </main>
  )
}