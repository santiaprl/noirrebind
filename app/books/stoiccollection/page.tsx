import Image from "next/image"
import Link from "next/link"

export default function StoicCollectionPage() {
  return (
    <div className="bg-[#D7D7D4] text-[#181612]">
      {/* Collection Hero */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/images/stoics/three_stoics/stoic-collection-hero.png"
          alt="The Marcus Aurelius, Seneca, and Epictetus leather editions"
          fill
          priority
          className="object-cover object-[center_62%]"
          sizes="100vw"
        />

       <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/60" />


        <div className="relative z-10 flex min-h-[85vh] flex-col items-center px-6 pt-20 text-center text-white md:pt-28">
          <Link
            href="/arcs"
            className="mb-3 text-[9px] uppercase tracking-[0.28em] text-white/75 transition-colors hover:text-white"
          >
            ← The Collection
          </Link>

          <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[#D5B477]">
            Noir Rebind · Collection I
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-light tracking-[-0.04em] md:text-7xl lg:text-8xl">
            The Stoic Collection
          </h1>

          <p className="mt-6 font-serif text-xl italic text-white/85 md:text-2xl">
            Ideas that have endured for centuries.
          </p>
        </div>
            </section>

            {/* Collection Story */}
      <section className="border-b border-white/10 bg-[#11110F] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="mb-6 text-[9px] font-medium uppercase tracking-[0.32em] text-[#C29A59]">
              The Philosophy
            </p>

            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-[-0.035em] text-[#F4F1EA] md:text-6xl">
              Three lives.
              <br />
              One enduring question:
              <br />
              <span className="italic">how should we live?</span>
            </h2>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <p className="font-serif text-xl leading-8 text-[#E2DDD3] md:text-2xl md:leading-10">
              An emperor, a statesman, and a teacher born into slavery—each
              confronted power, loss, discipline, and the limits of control.
            </p>

            <div className="my-8 h-px w-16 bg-[#B18A4A]" />

            <p className="text-sm font-light leading-7 text-[#AAA49B] md:text-base md:leading-8">
              Marcus Aurelius, Seneca, and Epictetus wrote from radically
              different lives, yet returned to the same pursuit: meeting the
              world with clarity, character, and restraint. Their words have
              survived not because they promise an easier life, but because
              they offer a way to face life as it is.
            </p>

            <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-[#817B72]">
              Preserved in leather. Made to be returned to.
            </p>
          </div>
        </div>
      </section>

            {/* Transition into the editions */}
      <div className="h-36 bg-gradient-to-b from-[#11110F] via-[#454644] to-[#D7D7D4]" />

      {/* The Editions */}
      <section className="bg-[#D7D7D4] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 border-t border-[#AAA9A4] pt-8 md:mb-20">
            <p className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#8A6938]">
              The Editions
            </p>

            <div className="mt-5 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <h2 className="font-serif text-4xl font-light tracking-[-0.035em] text-[#181612] md:text-6xl">
                The three Stoics.
              </h2>

              <p className="max-w-sm text-sm font-light leading-6 text-[#625E58]">
                Three handcrafted interpretations, each bound in a color
                selected to reflect the philosopher it preserves.
              </p>
            </div>
          </div>

                    <div className="grid gap-14 md:grid-cols-3 md:gap-5">
            {/* Marcus Aurelius */}
            <Link
              href="/books/stoiccollection/marcus-aurelius"
              className="group relative z-10 block cursor-pointer"
            >
              <article>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#CECFCC]">
                  <Image
                    src="/images/stoics/marcus/marcus_cover.png"
                    alt="Marcus Aurelius handcrafted leather edition"
                    fill
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="border-b border-[#AAA9A4] py-6">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-2 text-[8px] uppercase tracking-[0.26em] text-[#8A6938]">
  Edition I · Limited to 15
</p>  

                      <h3 className="font-serif text-2xl font-light">
                        Marcus Aurelius
                      </h3>
                    </div>

                    <p className="pt-5 text-xs tracking-wide">$200 USD</p>
                  </div>

                  <p className="mt-3 text-xs font-light leading-5 text-[#68635D]">
                    Burgundy leather · Gold-tooled detail
                  </p>
                </div>
              </article>
            </Link>

            {/* Seneca */}
            <Link
              href="/books/stoiccollection/seneca"
              className="group relative z-10 block cursor-pointer"
            >
              <article>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#CECFCC]">
                  <Image
                    src="/images/stoics/seneca/seneca.png"
                    alt="Seneca handcrafted leather edition"
                    fill
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="border-b border-[#AAA9A4] py-6">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-2 text-[8px] uppercase tracking-[0.26em] text-[#8A6938]">
  Edition I · Limited to 15
</p>

                      <h3 className="font-serif text-2xl font-light">
                        Seneca
                      </h3>
                    </div>

                    <p className="pt-5 text-xs tracking-wide">$200 USD</p>
                  </div>

                  <p className="mt-3 text-xs font-light leading-5 text-[#68635D]">
                    Navy leather · Gold-tooled detail
                  </p>
                </div>
              </article>
            </Link>

            {/* Epictetus */}
            <Link
              href="/books/stoiccollection/epictetus"
              className="group block"
            >
              <article>
                <div className="relative aspect-[3/4] overflow-hidden bg-[#CECFCC]">
                  <Image
                    src="/images/stoics/epictetus/epic_main.png"
                    alt="Epictetus handcrafted leather edition"
                    fill
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="border-b border-[#AAA9A4] py-6">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="mb-2 text-[8px] uppercase tracking-[0.26em] text-[#8A6938]">
  Edition I · Limited to 15
</p>

                      <h3 className="font-serif text-2xl font-light">
                        Epictetus
                      </h3>
                    </div>

                    <p className="pt-5 text-xs tracking-wide">$200 USD</p>
                  </div>

                  <p className="mt-3 text-xs font-light leading-5 text-[#68635D]">
                    Forest green leather · Gold-tooled detail
                  </p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
         {/* Three Stoics Bundle */}
      <section className="bg-[#11110F] px-6 py-24 text-[#F4F1EA] md:px-12 md:py-32">
        <Link
          href="/books/stoiccollection/bundle"
          className="group mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-12 md:gap-16"
        >
          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#292A28]">
              <Image
                src="/images/stoics/three_stoics/stoic-collection-hero.png"
                alt="The complete Three Stoics leather collection"
                fill
                className="object-cover object-[center_68%] transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="mb-6 text-[9px] uppercase tracking-[0.32em] text-[#C29A59]">
  Collection Edition · Edition I · Limited to 15
</p>

            <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-[-0.035em] md:text-6xl">
              The Three
              <br />
              <span className="italic">Stoics.</span>
            </h2>

            <p className="mt-7 max-w-md font-serif text-lg leading-8 text-[#D6D0C6]">
              Marcus Aurelius, Seneca, and Epictetus—presented together as one
              complete collection.
            </p>

            <div className="my-8 h-px w-16 bg-[#B18A4A]" />

            <div className="flex items-end justify-between gap-6 border-b border-white/20 pb-6">
              <p className="text-[9px] uppercase tracking-[0.22em] text-[#A9A299]">
                Three-volume set
              </p>

              <p className="text-sm tracking-wide">$500 USD</p>
            </div>

            <div className="mt-8 inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.24em]">
              View the complete set
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </div>
          </div>
        </Link>

                {/* PLACEHOLDER — Update bundle details and price later. */}
      </section>

      {/* The Daily Stoic Companion Edition */}
<section className="bg-[#191917] px-6 py-28 text-[#F4F1EA] md:px-12 md:py-36">
  <Link
    href="/books/the-daily-stoic"
    className="group mx-auto block max-w-7xl border-y border-[#666762]"
  >
    {/* Exhibition label */}
    <div className="flex items-center justify-between py-5">
  <p className="text-[8px] uppercase tracking-[0.3em] text-[#A7A8A3]">
    The Stoic Collection · Edition I
  </p>

  <p className="text-[8px] uppercase tracking-[0.3em] text-[#A7A8A3]">
    Limited to 10
  </p>
</div>

    <div className="grid gap-14 border-t border-[#454642] py-14 md:grid-cols-12 md:items-center md:gap-20 md:py-20">
      {/* Edition information */}
      <div className="md:col-span-5">
        <p className="text-[9px] uppercase tracking-[0.32em] text-[#C29A59]">
          A Daily Practice
        </p>

        <h2 className="mt-7 font-serif text-5xl font-light leading-[0.96] tracking-[-0.04em] md:text-7xl">
          The Daily
          <br />
          <span className="italic">Stoic.</span>
        </h2>

        <p className="mt-8 max-w-md font-serif text-xl italic leading-8 text-[#D6D0C6]">
          Ancient philosophy, returned to one day at a time.
        </p>

        <div className="my-8 h-px w-14 bg-[#777873]" />

        <p className="max-w-md text-sm font-light leading-7 text-[#AAA49B]">
          A handcrafted companion for daily reflection—designed to be opened,
          considered, and returned to each day.
        </p>

        <div className="mt-9 flex items-end justify-between gap-6 border-t border-[#4C4D49] pt-6">
          <div>
            <p className="text-[8px] uppercase tracking-[0.24em] text-[#8D8982]">
              Black leather
            </p>

            <p className="mt-3 text-xs text-[#C9C3B9]">
              Hand-finished detail
            </p>
          </div>

          <p className="font-serif text-lg">$150 USD</p>
        </div>

        <div className="mt-9 inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.24em]">
          Explore the edition

          <span className="transition-transform duration-500 group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>

      {/* Edition photograph */}
<div className="flex justify-center md:col-span-7 md:justify-end">
  <div className="relative aspect-[3/4] w-full max-w-[560px] overflow-hidden bg-[#D2D2CF]">
    <Image
      src="/images/Daily_Stoic_Large.jpeg"
      alt="The Daily Stoic handcrafted leather edition"
      fill
      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
      sizes="(max-width: 768px) 90vw, 38vw"
    />
  </div>
</div>
    </div>
  </Link>

  {/* PLACEHOLDER — Confirm Daily Stoic price and edition details later. */}
</section>
    </div>
  )
}