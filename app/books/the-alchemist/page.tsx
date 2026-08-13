import Image from "next/image"
import Link from "next/link"

export default function AlchemistPage() {
  return (
    <main className="min-h-screen bg-[#D9D9D6] text-[#181612]">
      {/*
        PLACEHOLDER — Connect Add to Cart to the Noir Rebind cart later.

        Previous Stripe Payment Link:
        https://buy.stripe.com/3cI6oHf8z5115RPgRi1Jm0e
      */}

      <div className="mx-auto max-w-[1800px] px-3 py-3 md:px-5 md:py-5">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,2fr)_minmax(350px,0.82fr)]">
          {/* Product Gallery */}
          <section className="grid content-start gap-3 sm:grid-cols-2">
            {/* Front cover */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#C8C9C7]">
              <Image
                src="/images/Alchemist/alchemist_main.jpg"
                alt="The Alchemist handcrafted cobalt leather edition"
                fill
                priority
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              />
            </div>

            {/* Satin photograph */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#C8C9C7]">
              <Image
                src="/images/Alchemist/alchemist_3_gallery.png"
                alt="The Alchemist edition presented on satin"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              />
            </div>

            {/* Spine */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#C8C9C7]">
              <Image
                src="/images/Alchemist/alchemist_2.jpeg"
                alt="Gold-detailed spine of The Alchemist edition"
                fill
                className="object-fit object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              />
            </div>

            {/* Cleaned marbled endpapers */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#C8C9C7]">
              <Image
                src="/images/Alchemist/alchemist_1.jpeg"
                alt="Blue, black, and gold marbled endpapers inside The Alchemist edition"
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
                href="/books/literarycollection"
                className="inline-block text-[8px] uppercase tracking-[0.26em] text-[#746F68] transition-colors hover:text-[#181612]"
              >
                ← The Literary Collection
              </Link>

              <div className="mt-12">
                <p className="text-[8px] uppercase tracking-[0.3em] text-[#A07C35]">
                  Literary Collection
                </p>

                <h1 className="mt-5 font-serif text-4xl font-light tracking-[-0.035em] sm:text-5xl">
                  The Alchemist
                </h1>

                <p className="mt-3 font-serif text-base italic text-[#655F57]">
                  Paulo Coelho
                </p>

                <p className="mt-6 font-serif text-xl">$175 USD</p>
              </div>

              <div className="my-8 h-px bg-[#CEC7BD]" />

              <p className="text-sm font-light leading-7 text-[#625D56]">
                A handcrafted leather interpretation of Santiago’s journey—a
                story of pursuit, purpose, and learning to recognize the path
                that has been calling all along.
              </p>

              {/* Materials */}
              <div className="mt-8 space-y-5 border-y border-[#CEC7BD] py-7">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
                    Leather
                  </span>

                  <span className="text-xs">Cobalt blue</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
                    Detail
                  </span>

                  <span className="text-xs">Gold and hand-painted</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
                    Binding
                  </span>

                  <span className="text-xs">Rebound by hand</span>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 flex items-end justify-between gap-6">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
                    Current status
                  </p>

                  <p className="mt-3 text-[10px] uppercase tracking-[0.18em]">
                    Available to order
                  </p>
                </div>

          
              </div>

              {/* PLACEHOLDER — Connect to the integrated cart before launch. */}
              <button
                type="button"
                className="mt-8 w-full border border-[#07182B] bg-[#0B2944] px-6 py-5 text-[9px] uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-[#07182B]"
              >
                Add to Cart
              </button>

              <p className="mt-4 text-center text-[9px] font-light leading-5 text-[#77716A]">
                Prepared by hand. Please allow 9–12 business days before
                shipping.
              </p>

              {/* Additional Details */}
              <div className="mt-10 border-b border-[#CEC7BD]">
                <details className="border-t border-[#CEC7BD] py-6">
                  <summary className="cursor-pointer list-none text-[9px] uppercase tracking-[0.22em]">
                    Edition details
                    <span className="float-right">＋</span>
                  </summary>

                  <p className="mt-5 text-xs font-light leading-6 text-[#625D56]">
                    Each edition is rebound and finished individually by hand.
                    Natural variations in the leather, painted details, marbled
                    endpapers, and gold placement belong to the character of
                    every volume.
                  </p>
                </details>

                <details className="border-t border-[#CEC7BD] py-6">
                  <summary className="cursor-pointer list-none text-[9px] uppercase tracking-[0.22em]">
                    Production and delivery
                    <span className="float-right">＋</span>
                  </summary>

                  <p className="mt-5 text-xs font-light leading-6 text-[#625D56]">
                    Please allow 9–12 business days for the edition to be
                    prepared before shipping. Final delivery timing depends on
                    the destination.
                  </p>
                </details>
              </div>

              <Link
                href="/books/literarycollection"
                className="mt-10 inline-flex items-center gap-4 text-[8px] uppercase tracking-[0.24em] text-[#746F68] transition-colors hover:text-[#181612]"
              >
                Continue exploring
                <span>→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}