/**
 * "Our Vision" — removed from the homepage on 2026-11-20 but kept here,
 * unchanged, for a future About / Our Story page.
 *
 * Usage: import OurVision from "@/components/our-vision" and render <OurVision />.
 */
export default function OurVision() {
  return (
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
  )
}
