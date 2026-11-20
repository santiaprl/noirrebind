"use client"

import { useId, useState, type KeyboardEvent } from "react"
import { testimonials } from "@/lib/testimonials"

const focusRing =
  "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#A77B2F]"

/**
 * "Words From Our Readers." — one genuine review at a time, presented like
 * a letter. Manual navigation only (no auto-rotation). Content lives in
 * lib/testimonials.ts.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()
  const count = testimonials.length

  if (count === 0) return null

  const review = testimonials[index]
  const hasFullReview = review.fullReview.trim() !== review.excerpt.trim()

  const goTo = (next: number) => {
    setIndex((next + count) % count)
    setExpanded(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      goTo(index - 1)
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      goTo(index + 1)
    }
  }

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-t border-[#BEB8AE]/60 bg-[#F8F5EF] px-6 py-24 text-[#171512] md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        {/* Heading */}
        <p className="mb-6 text-[9px] uppercase tracking-[0.34em] text-[#946F38] md:text-[10px]">
          Testimonials
        </p>

        <h2
          id="testimonials-heading"
          className="font-serif text-4xl font-light leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl"
        >
          Words From <span className="whitespace-nowrap italic">Our Readers.</span>
        </h2>

        <div className="mx-auto my-12 h-px w-12 bg-[#A77B2F] md:my-16" aria-hidden="true" />

        {/* Carousel */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
          onKeyDown={handleKeyDown}
        >
          <div aria-live="polite">
            <figure
              key={review.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`Review ${index + 1} of ${count}`}
              className="animate-in fade-in duration-700 motion-reduce:animate-none"
            >
              <div className="flex min-h-[13rem] flex-col items-center justify-center md:min-h-[14rem]">
                <span
                  aria-hidden="true"
                  className="mb-2 font-serif text-5xl leading-none text-[#A77B2F] md:text-6xl"
                >
                  “
                </span>

                <blockquote className="mx-auto max-w-3xl">
                  <p className="font-serif text-2xl font-light leading-snug tracking-[-0.02em] text-[#2E2A25] sm:text-3xl md:text-4xl">
                    {review.excerpt}
                  </p>
                </blockquote>
              </div>

              <figcaption className="mt-10 flex flex-col items-center gap-3">
                <p
                  className="text-[10px] tracking-[0.35em] text-[#A77B2F]"
                  aria-label={`Rated ${review.rating} out of 5`}
                >
                  <span aria-hidden="true">{"★".repeat(review.rating)}</span>
                </p>

                <p className="font-serif text-lg italic text-[#2E2A25] md:text-xl">
                  — {review.name}
                </p>

                <p className="text-[9px] uppercase tracking-[0.24em] text-[#7B7469]">
                  <time dateTime={review.date}>{review.displayDate}</time>
                  <span aria-hidden="true"> · </span>
                  {review.source} Review
                  {review.product && (
                    <>
                      <span aria-hidden="true"> · </span>
                      <span className="whitespace-nowrap">{review.product}</span>
                    </>
                  )}
                </p>
              </figcaption>

              {/* Full review */}
              {hasFullReview && (
                <div className="mt-8">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setExpanded((open) => !open)}
                    className={`border-b border-[#A77B2F]/60 pb-1 text-[9px] font-medium uppercase tracking-[0.24em] text-[#171512] transition-colors duration-500 hover:border-[#171512] ${focusRing}`}
                  >
                    {expanded ? "Close the full review" : "Read the full review"}
                  </button>

                  <div id={panelId} hidden={!expanded}>
                    <div className="mx-auto mt-8 max-w-2xl border-t border-[#171512]/15 pt-8 text-left">
                      <p className="font-serif text-base font-light leading-8 text-[#575148] md:text-lg md:leading-9">
                        “{review.fullReview}”
                      </p>
                      <p className="mt-4 text-[9px] uppercase tracking-[0.24em] text-[#7B7469]">
                        Full review, as written by {review.name} on {review.source}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </figure>
          </div>

          {/* Controls */}
          {count > 1 && (
            <div className="mt-14 flex items-center justify-center gap-6 md:mt-16">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous review"
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-[#171512]/20 text-sm text-[#171512] transition-colors duration-500 hover:border-[#171512] ${focusRing}`}
              >
                <span aria-hidden="true">←</span>
              </button>

              <div className="flex items-center gap-1">
                {testimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show review ${i + 1} of ${count}, from ${item.name}`}
                    aria-current={i === index ? "true" : undefined}
                    className={`group flex h-11 items-center px-1.5 ${focusRing}`}
                  >
                    <span
                      className={`block h-px transition-all duration-500 ${
                        i === index
                          ? "w-10 bg-[#A77B2F]"
                          : "w-5 bg-[#171512]/25 group-hover:bg-[#171512]/60"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next review"
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-[#171512]/20 text-sm text-[#171512] transition-colors duration-500 hover:border-[#171512] ${focusRing}`}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
