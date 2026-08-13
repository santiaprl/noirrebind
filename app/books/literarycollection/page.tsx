import Image from "next/image"
import Link from "next/link"

export default function LiteraryCollectionPage() {
  return (
    <main className="overflow-hidden bg-[#07182B] text-[#F5F0E6]">
      {/* Celestial Collection Hero */}
      <section className="relative min-h-[92vh] overflow-hidden">
        {/* Celestial atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_38%,#174A6B_0%,#0B2944_30%,#07182B_68%,#050C14_100%)]" />

        {/* Stars */}
        <div className="absolute left-[8%] top-[17%] h-1 w-1 rounded-full bg-[#E8C978] shadow-[0_0_9px_2px_rgba(232,201,120,0.55)]" />
        <div className="absolute left-[18%] top-[65%] h-[3px] w-[3px] rounded-full bg-white/75" />
        <div className="absolute left-[29%] top-[25%] h-[2px] w-[2px] rounded-full bg-white/70" />
        <div className="absolute left-[43%] top-[13%] h-1 w-1 rounded-full bg-[#E8C978]" />
        <div className="absolute left-[53%] top-[71%] h-[3px] w-[3px] rounded-full bg-white/80" />
        <div className="absolute left-[66%] top-[18%] h-[2px] w-[2px] rounded-full bg-white/70" />
        <div className="absolute left-[82%] top-[27%] h-1 w-1 rounded-full bg-[#E8C978] shadow-[0_0_8px_2px_rgba(232,201,120,0.45)]" />
        <div className="absolute left-[90%] top-[62%] h-[3px] w-[3px] rounded-full bg-white/70" />
        <div className="absolute left-[75%] top-[81%] h-[2px] w-[2px] rounded-full bg-white/60" />
        <div className="absolute left-[35%] top-[82%] h-[3px] w-[3px] rounded-full bg-[#E8C978]" />

        {/* Fine constellation lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1440 900"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M865 135L1015 235L930 370L1135 475L1050 650"
            stroke="#D8B86A"
            strokeWidth="1"
          />
          <circle cx="865" cy="135" r="4" fill="#D8B86A" />
          <circle cx="1015" cy="235" r="3" fill="#D8B86A" />
          <circle cx="930" cy="370" r="4" fill="#D8B86A" />
          <circle cx="1135" cy="475" r="3" fill="#D8B86A" />
          <circle cx="1050" cy="650" r="4" fill="#D8B86A" />
        </svg>

                <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col px-6 py-20 md:px-12">
          <Link
            href="/arcs"
            className="inline-block w-fit text-[9px] uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white"
          >
            ← The Collection
          </Link>

          <div className="flex flex-1 flex-col items-center justify-center pb-16 text-center">
            <div className="mb-10 flex items-center gap-4 text-[#D3AE59]">
              <span className="text-xs">✦</span>
              <span className="h-px w-12 bg-[#D3AE59]/60" />
              <span className="text-[8px]">✧</span>
              <span className="h-px w-12 bg-[#D3AE59]/60" />
              <span className="text-xs">✦</span>
            </div>

            <h1 className="max-w-6xl font-serif text-6xl font-light leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-9xl">
              The Literary
              <br />
              <span className="italic text-[#E5D8B6]">Collection.</span>
            </h1>

            <p className="mt-10 font-serif text-xl italic text-white/70 md:text-2xl">
              Stories that become part of us.
            </p>

            <div className="mt-10 flex items-center gap-5 text-[#D3AE59]/70">
              <span className="h-px w-20 bg-[#D3AE59]/50" />
              <span className="text-[10px]">✦</span>
              <span className="h-px w-20 bg-[#D3AE59]/50" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 h-24 w-px bg-gradient-to-b from-[#D3AE59] to-transparent" />
      </section>

      {/* Literary Passage */}
      <section className="relative bg-[#F1EEE7] px-6 py-28 text-[#181612] md:px-12 md:py-40">
        <div className="absolute left-1/2 top-0 h-20 w-px bg-gradient-to-b from-[#D3AE59] to-transparent" />

        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[9px] uppercase tracking-[0.36em] text-[#9A7435]">
            The Written Journey
          </p>

          <p className="mx-auto mt-12 max-w-4xl font-serif text-4xl font-light leading-[1.15] tracking-[-0.03em] md:text-6xl">
            “A story does not remain on the page.
            <span className="italic text-[#716352]">
              {" "}
              It follows the reader beyond it.”
            </span>
          </p>

          <div className="mx-auto my-12 h-px w-16 bg-[#B18A4A]" />

          <p className="mx-auto max-w-2xl text-sm font-light leading-8 text-[#6B645D] md:text-base">
            The Literary Collection preserves works shaped by longing,
            transformation, and the unknown. Each edition is selected for the
            world it creates—and for what remains with us after we leave it.
          </p>
        </div>
      </section>

      {/* Featured Edition */}
      <section className="relative bg-[#0A1E32] px-6 py-24 md:px-12 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(31,87,117,0.35),transparent_45%)]" />

        <Link
          href="/books/the-alchemist"
          className="group relative z-10 mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-12"
        >
          {/* Edition information */}
          <div className="md:col-span-5">
            <p className="mb-7 text-[9px] uppercase tracking-[0.34em] text-[#D3AE59]">
              Literary Collection · Edition I
            </p>

            <h2 className="font-serif text-6xl font-light leading-[0.9] tracking-[-0.045em] md:text-8xl">
              The
              <br />
              <span className="italic text-[#E5D8B6]">Alchemist.</span>
            </h2>

            <p className="mt-9 max-w-md font-serif text-xl leading-9 text-white/75">
              A journey toward treasure that becomes a meditation on purpose,
              faith, and learning to recognize one’s own path.
            </p>

            <div className="my-9 h-px w-16 bg-[#C6A154]" />

            <div className="flex items-end justify-between gap-6 border-b border-white/20 pb-7">
              <div>
                <p className="text-[8px] uppercase tracking-[0.25em] text-white/45">
                  Handcrafted edition
                </p>

                <p className="mt-3 text-xs text-white/70">
                  Cobalt leather · Gold detailing
                </p>
              </div>

              <p className="font-serif text-xl">$200 USD</p>
            </div>

            <div className="mt-9 inline-flex items-center gap-4 text-[9px] uppercase tracking-[0.25em]">
              Enter the story
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </div>
          </div>

          {/* Edition photography */}
          <div className="md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/Alchemist/alchemist_4.jpeg"
                alt="The Alchemist edition surrounded by greenery"
                fill
                className="object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025]"
                sizes="(max-width: 768px) 100vw, 58vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#07182B]/35 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 border-l border-[#D3AE59] pl-5">
                <p className="text-[8px] uppercase tracking-[0.28em] text-white/80">
                  Pursuit · Purpose · Becoming
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </main>
  )
}