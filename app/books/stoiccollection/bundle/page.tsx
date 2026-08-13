import Image from "next/image"
import Link from "next/link"

export default function StoicBundlePage() {
  return (
    <main className="min-h-screen bg-[#E2E1DE] text-[#181612]">
      {/* PLACEHOLDER — Update price, availability, and purchase action later. */}

      <div className="mx-auto max-w-[1800px] px-3 py-3 md:px-5 md:py-5">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,2fr)_minmax(350px,0.82fr)]">
          
          {/* Four-Image Editorial Gallery */}
          <section className="grid content-start gap-3 sm:grid-cols-2">
            {/* Image 1 */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#CACAC7]">
              <Image
                src="/images/stoics/three_stoics/3stoic_classic.png"
                alt="Marcus Aurelius, Seneca, and Epictetus leather editions"
                fill
                priority
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              />
            </div>

            {/* Image 2 */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#CACAC7]">
              <Image
                src="/images/stoics/three_stoics/3stoic_living.jpg"
                alt="The Three Stoics collection in a reading space"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              />
            </div>

            {/* Image 3 */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#CACAC7]">
              <Image
                src="/images/stoics/three_stoics/stoic-collection-hero.png"
                alt="The complete Three Stoics leather collection"
                fill
                className="object-cover object-[center_68%] transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              />
            </div>

            {/* PLACEHOLDER — Replace this with a final bundle photograph later. */}
            {/* Image 4 */}
            <div className="group relative aspect-[4/5] overflow-hidden bg-[#CACAC7]">
              <Image
                src="/images/stoics/marcus/inside_marcus.jpg"
alt="Interior of the Marcus Aurelius handcrafted edition"
                fill
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 34vw"
              />
            </div>
          </section>

          {/* Product Information */}
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
                  The Complete Collection
                </p>

                <h1 className="mt-5 font-serif text-4xl font-light tracking-[-0.035em] sm:text-5xl">
                  The Three Stoics
                </h1>

                <p className="mt-3 font-serif text-base italic text-[#655F57]">
                  Marcus Aurelius · Seneca · Epictetus
                </p>

                <p className="mt-6 font-serif text-xl">$600 USD</p>
              </div>

              <div className="my-9 h-px bg-[#CEC7BD]" />

              <p className="text-sm font-light leading-7 text-[#625D56]">
                Three handcrafted leather editions presented together as one
                complete collection. Each volume is bound in a color selected
                to reflect the philosopher it preserves and finished with gold
                detailing.
              </p>

              <div className="mt-9 space-y-5 border-y border-[#CEC7BD] py-7">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
                    Marcus Aurelius
                  </span>

                  <span className="text-xs">Burgundy</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
                    Seneca
                  </span>

                  <span className="text-xs">Navy</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <span className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
                    Epictetus
                  </span>

                  <span className="text-xs">Forest green</span>
                </div>
              </div>

              <div className="mt-9">
                <p className="text-[8px] uppercase tracking-[0.22em] text-[#77716A]">
                  Current status
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.18em]">
                  Availability forthcoming
                </p>
              </div>

              {/* PLACEHOLDER — Connect this button to the cart system before launch. */}
  <button
  type="button"
  className="mt-8 w-full border border-[#11110F] bg-[#11110F] px-6 py-5 text-[9px] uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-[#2A2926]"
>
  Add to Cart
</button> 

              <p className="mt-4 text-center text-[9px] font-light leading-5 text-[#77716A]">
                Final price and availability will be announced before release.
              </p>

              <details className="mt-10 border-t border-[#CEC7BD] py-6">
                <summary className="cursor-pointer list-none text-[9px] uppercase tracking-[0.22em]">
                  Edition details
                  <span className="float-right">＋</span>
                </summary>

                <p className="mt-5 text-xs font-light leading-6 text-[#625D56]">
                  Every volume is rebound and finished individually by hand.
                  Natural variations in the leather and gold detailing belong
                  to the character of each edition.
                </p>
              </details>

              <details className="border-y border-[#CEC7BD] py-6">
                <summary className="cursor-pointer list-none text-[9px] uppercase tracking-[0.22em]">
                  What is included
                  <span className="float-right">＋</span>
                </summary>

                <p className="mt-5 text-xs font-light leading-6 text-[#625D56]">
                  One Marcus Aurelius edition, one Seneca edition, and one
                  Epictetus edition. Presentation and packaging details will be
                  added before release.
                </p>
              </details>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}