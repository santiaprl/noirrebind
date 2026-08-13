import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
     {/* Hero Section */}
<section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-[#F8F5EF] px-6 py-24 text-[#171512]">
  

  <div className="hero-reveal relative z-10 mx-auto max-w-5xl text-center">
    <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.32em] text-[#A77B2F] md:text-xs">
      Noir Rebind · Handcrafted Editions
    </p>

    <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
      We Rebind Books
      <span className="block italic">by Hand.</span>
    </h1>

    <p className="mx-auto mt-8 max-w-2xl font-serif text-lg font-light leading-relaxed text-[#39352F] md:text-2xl">
      Handcrafted leather editions for readers, collectors, and the books
      that deserve a second life.
    </p>

    <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-7 text-[#6B665D] md:text-base">
      Explore our collection, or create an
      edition of your own.
    </p>

    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        href="/arcs/all"
        className="inline-flex min-h-[48px] min-w-[220px] items-center justify-center border border-[#171512] bg-[#171512] px-8 text-xs font-medium uppercase tracking-[0.14em] text-white transition-all duration-500 hover:bg-transparent hover:text-[#171512]"
      >
        Explore the Library
      </Link>

      <Link
        href="/start-your-rebind"
        className="inline-flex min-h-[48px] min-w-[220px] items-center justify-center border border-[#171512] bg-transparent px-8 text-xs font-medium uppercase tracking-[0.14em] text-[#171512] transition-all duration-500 hover:bg-[#171512] hover:text-white"
      >
        Customize Your Edition
      </Link>
    </div>
  </div>

  
</section>
      
      {/* Our Vision Section */}
<section className="relative overflow-hidden bg-[#EFE9DF] px-6 py-28 text-[#171512] md:py-36">
  <div
  className="absolute left-1/2 top-0 flex -translate-x-1/2 flex-col items-center"
  aria-hidden="true"
>
  <span className="-mt-1.5 h-3 w-3 rotate-45 border border-[#A77B2F]/60 bg-[#EFE9DF]" />
  <span className="h-20 w-px bg-[#A77B2F]/50" />
</div>

  <div className="scroll-reveal mx-auto max-w-4xl text-center">
    <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.32em] text-[#A77B2F] md:text-xs">
      Our Vision
    </p>

    <h2 className="font-serif text-4xl font-light leading-tight tracking-[-0.03em] sm:text-5xl md:text-6xl">
      A book worth preserving deserves
      <span className="block italic">a form worthy of what it holds.</span>
    </h2>

    <div
      className="mx-auto my-10 h-px w-12 bg-[#A77B2F]"
      aria-hidden="true"
    />

    <div className="mx-auto max-w-2xl space-y-6 text-sm font-light leading-8 text-[#575148] md:text-base">
      <p>
        At Noir Rebind, we create handcrafted leather editions of books
        worth preserving.
      </p>

      <p>
        Whether drawn from philosophy, literature, or modern classics, each
        volume is carefully rebound by hand to honor the ideas, stories, and
        authors that continue to shape us.
      </p>
    </div>

    <p className="mt-10 font-serif text-lg italic tracking-wide text-[#2E2A25] md:text-xl">
      Built to be read. Crafted to endure.
    </p>
  </div>
</section>

      {/* The Stoics Collection Section */}
<section className="border-t border-[#C8B99D]/30 bg-[#181612] px-6 py-28 text-[#F3EDE2] md:px-12 md:py-36">
  <div className="scroll-reveal mx-auto max-w-[1500px]">
    {/* Collection introduction */}
    <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.32em] text-[#B58A3A] md:text-xs">
          The Stoic Collection
        </p>

        <h2 className="font-serif text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
          The Stoics.
          <span className="block italic text-[#D8CFC0]">
            Bound in leather.
          </span>
        </h2>
      </div>

      <p className="max-w-sm text-sm font-light leading-7 text-[#AAA397]">
        Three enduring voices, reimagined as handcrafted editions made to be
        read, revisited, and kept.
      </p>
    </div>

    {/* Book grid */}
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
      {/* Marcus Aurelius */}
      <article className="group">
        <div className="relative aspect-[3/4] overflow-hidden bg-[#24211C] p-3 ring-1 ring-white/10">
          <Image
            src="/images/stoics/marcus/marcus_cover.png"
            alt="Meditations by Marcus Aurelius rebound in red leather"
            fill
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="flex items-start justify-between px-5 py-5">
          <div>
            <h3 className="font-serif text-xl font-light">
              Marcus Aurelius
            </h3>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#8F887D]">
              Meditations
            </p>
          </div>

          <span className="text-[10px] tracking-[0.18em] text-[#B58A3A]">
            01
          </span>
        </div>
      </article>

      {/* Seneca */}
      <article className="group border-b border-r border-white/15">
       <div className="relative aspect-[3/4] overflow-hidden bg-[#24211C] p-3 ring-1 ring-white/10">
          <Image
            src="/images/stoics/seneca/seneca.png"
            alt="Seneca rebound in blue leather"
            fill
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="flex items-start justify-between px-5 py-5">
          <div>
            <h3 className="font-serif text-xl font-light">
              Seneca
            </h3>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#8F887D]">
              Letters from a Stoic
            </p>
          </div>

          <span className="text-[10px] tracking-[0.18em] text-[#B58A3A]">
            02
          </span>
        </div>
      </article>

      {/* Epictetus */}
      <article className="group border-b border-r border-white/15">
<div className="relative aspect-[3/4] overflow-hidden bg-[#24211C] p-3 ring-1 ring-white/10">          <Image
            src="/images/stoics/epictetus/epic_main.png"
            alt="Discourses by Epictetus rebound in green leather"
            fill
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="flex items-start justify-between px-5 py-5">
          <div>
            <h3 className="font-serif text-xl font-light">
              Epictetus
            </h3>
            <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#8F887D]">
              Discourses
            </p>
          </div>

          <span className="text-[10px] tracking-[0.18em] text-[#B58A3A]">
            03
          </span>
        </div>
      </article>
    </div>

    {/* Collection button */}
    <div className="mt-12 text-center">
      <Link
        href="/arcs/all"
        className="inline-flex min-h-[48px] items-center justify-center border border-[#8D806B] px-9 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F3EDE2] transition-all duration-500 hover:border-[#F3EDE2] hover:bg-[#F3EDE2] hover:text-[#181612]"
      >
        Discover the Collection
      </Link>
    </div>
  </div>
</section>
      {/* Past Commissions Section */}
<section
  id="past-commissions"
  className="bg-[#F8F5EF] px-6 py-28 text-[#171512] md:px-12 md:py-36"
>
  <div className="scroll-reveal mx-auto max-w-6xl">
    {/* Section introduction */}
    <div className="mb-16 max-w-2xl md:mb-24">
      <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.32em] text-[#A77B2F] md:text-xs">
        Selected Work
      </p>

      <h2 className="font-serif text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
        Past
        <span className="block italic">Commissions.</span>
      </h2>

      <p className="mt-7 max-w-lg text-sm font-light leading-7 text-[#6B665D] md:text-base">
        One-of-one bindings created around the books their owners chose to
        preserve.
      </p>
    </div>

    {/* Editorial commission gallery */}
    <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
      {/* The Daily Stoic */}
      <article className="group md:col-span-7">
        <div className="border border-[#CFC6B8] bg-transparent p-1">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/daily-stoic-after.png"
              alt="The Daily Stoic custom leather commission"
              fill
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between border-t border-[#171512]/20 pt-4">
          <div>
            <h3 className="font-serif text-xl font-light md:text-2xl">
              The Daily Stoic
            </h3>

            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#7B7469]">
              Handbound in black leather
            </p>
          </div>

          <span className="text-[10px] tracking-[0.18em] text-[#A77B2F]">
            01
          </span>
        </div>
      </article>

      {/* The Alchemist */}
      <article className="group md:col-span-5 md:mt-32">
       <div className="border border-[#CFC6B8] bg-transparent p-1">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/Alchemist/alchemist_cover.jpeg"
              alt="The Alchemist custom leather commission"
              fill
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between border-t border-[#171512]/20 pt-4">
          <div>
            <h3 className="font-serif text-xl font-light md:text-2xl">
              The Alchemist
            </h3>

            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#7B7469]">
              Handbound in blue leather
            </p>
          </div>

          <span className="text-[10px] tracking-[0.18em] text-[#A77B2F]">
            02
          </span>
        </div>
      </article>
    </div>

    {/* Custom commission invitation */}
    <div className="mt-28 border-t border-[#171512]/20 pt-16 text-center md:mt-36 md:pt-20">
      <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.32em] text-[#A77B2F]">
        Your Book, Reimagined
      </p>

      <h3 className="font-serif text-4xl font-light leading-tight tracking-[-0.03em] md:text-6xl">
        Have a book worth
        <span className="block italic">preserving?</span>
      </h3>

      <Link
        href="/start-your-rebind"
        className="mt-10 inline-flex min-h-[48px] items-center justify-center border border-[#171512] bg-[#171512] px-9 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-transparent hover:text-[#171512]"
      >
        Customize Your Edition
      </Link>
    </div>
  </div>
</section>
    </div>
  )
}
