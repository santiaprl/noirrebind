"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const archivedEditions = [
  {
    number: "No. 01",
    title: "Breaking the Habit of Being Yourself",
    year: "2025",
    image: "/images/archive/breaking-the-habit-archive.png",
    description:
      "A study in personal transformation. After nine months on display, the design was retired and the original preserved as a private gift.",
  },
  {
    number: "No. 02",
    title: "Can’t Hurt Me",
    year: "2025",
    image: "/images/archive/cant-hurt-me-archive.png",
    description:
      "An early exploration of resilience and confrontation. The completed edition was later gifted, and the design will not return.",
  },
  {
    number: "No. 03",
    title: "Atomic Habits",
    year: "2025",
    image: "/images/archive/atomic-habits-archive.png",
    description:
      "Two editions were completed before the design was withdrawn as Noir Rebind moved toward a quieter and more enduring catalog.",
  },
  {
    number: "No. 04",
    title: "The 4-Hour Workweek",
    year: "2025",
    image: "/images/archive/four-hour-workweek-archive.png",
    description:
      "An early studio experiment, retired as the bindery refined its focus toward philosophy, literature, and works made to endure.",
  },
]

export default function StudioArchivePage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<"next" | "previous">("next")
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const currentEdition = archivedEditions[currentIndex]

  const showNext = () => {
    setDirection("next")
    setCurrentIndex((current) =>
      current === archivedEditions.length - 1 ? 0 : current + 1
    )
  }

  const showPrevious = () => {
    setDirection("previous")
    setCurrentIndex((current) =>
      current === 0 ? archivedEditions.length - 1 : current - 1
    )
  }

  const selectEdition = (index: number) => {
    if (index === currentIndex) return

    setDirection(index > currentIndex ? "next" : "previous")
    setCurrentIndex(index)
  }

  const handleTouchStart = (event: React.TouchEvent) => {
    setTouchStart(event.touches[0].clientX)
  }

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStart === null) return

    const touchEnd = event.changedTouches[0].clientX
    const distance = touchStart - touchEnd

    if (distance > 50) showNext()
    if (distance < -50) showPrevious()

    setTouchStart(null)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") showNext()
      if (event.key === "ArrowLeft") showPrevious()
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-[#080706] text-[#F2EBDD]">
      {/* Archive heading */}
      <header className="px-6 pb-12 pt-12 text-center md:pb-14 md:pt-16">
        <Link
          href="/arcs"
          className="text-[8px] uppercase tracking-[0.32em] text-white/40 transition-colors duration-300 hover:text-white"
        >
          ← The Collection
        </Link>

        <p className="mt-9 text-[10px] uppercase tracking-[0.5em] text-[#C18D43] md:text-xs">
          Studio Archive
        </p>

        <h1 className="mt-5 font-serif text-5xl font-light italic tracking-[-0.035em] md:text-7xl">
          Past Works
        </h1>

        <p className="mx-auto mt-5 max-w-xl font-serif text-base leading-7 text-[#9C8C75] md:text-lg">
          Retired bindings, kept on record. Swipe through what the bindery has
          made before.
        </p>
      </header>

      {/* Complete exhibit: image and description stay together */}
      <section
        className="relative mx-auto max-w-5xl px-5 pb-16 md:px-24"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous button */}
        <button
          type="button"
          onClick={showPrevious}
          aria-label="View previous archived edition"
          className="group absolute left-1 top-[36%] z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#74552D]/70 text-[#C99547] transition-all duration-500 hover:border-[#C99547] hover:bg-[#C99547] hover:text-black md:left-3 md:h-16 md:w-16"
        >
          <span className="text-xl transition-transform duration-500 group-hover:-translate-x-1">
            ‹
          </span>
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={showNext}
          aria-label="View next archived edition"
          className="group absolute right-1 top-[36%] z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#74552D]/70 text-[#C99547] transition-all duration-500 hover:border-[#C99547] hover:bg-[#C99547] hover:text-black md:right-3 md:h-16 md:w-16"
        >
          <span className="text-xl transition-transform duration-500 group-hover:translate-x-1">
            ›
          </span>
        </button>

        <article className="mx-auto max-w-[600px]">
          {/* Image */}
          <div className="relative aspect-[3/4] overflow-hidden bg-[#050505]">
            <Image
              key={currentEdition.image}
              src={currentEdition.image}
              alt={`${currentEdition.title}, a retired Noir Rebind edition`}
              fill
              priority
              className={`object-cover object-center ${
                direction === "next"
                  ? "animate-[archiveNext_650ms_ease-out]"
                  : "animate-[archivePrevious_650ms_ease-out]"
              }`}
              sizes="(max-width: 768px) 90vw, 600px"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5" />

            <p className="absolute bottom-5 left-5 text-[8px] uppercase tracking-[0.3em] text-white/45">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(archivedEditions.length).padStart(2, "0")}
            </p>
          </div>

          {/* Caption now directly attached to the image */}
          <div
            key={`${currentEdition.title}-caption`}
            className="border-t border-[#6E5029]/70 px-5 pb-8 pt-8 text-center animate-[captionReveal_650ms_ease-out] md:px-8 md:pb-10 md:pt-10"
          >
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#C99547]">
              {currentEdition.number}
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-light italic leading-[1.05] tracking-[-0.025em] md:text-5xl">
              {currentEdition.title}
            </h2>

            <p className="mt-3 text-[8px] uppercase tracking-[0.3em] text-white/35">
              Retired · {currentEdition.year}
            </p>

            <p className="mx-auto mt-5 max-w-xl font-serif text-base leading-7 text-[#A9977D] md:text-lg md:leading-8">
              {currentEdition.description}
            </p>

            <p className="mt-6 text-[7px] uppercase tracking-[0.3em] text-white/25 md:text-[8px]">
              One work on record · Not available for reproduction
            </p>
          </div>
        </article>

        {/* Progress controls */}
        <div className="mt-2 flex justify-center gap-3">
          {archivedEditions.map((edition, index) => (
            <button
              key={edition.title}
              type="button"
              onClick={() => selectEdition(index)}
              aria-label={`View ${edition.title}`}
              className={`h-px transition-all duration-500 ${
                index === currentIndex
                  ? "w-12 bg-[#C99547]"
                  : "w-5 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Current editions */}
      <footer className="border-t border-white/10 px-6 py-10 text-center">
        <Link
          href="/arcs/all"
          className="inline-flex items-center gap-5 text-[8px] uppercase tracking-[0.3em] text-white/40 transition-colors hover:text-white"
        >
          View current editions
          <span>→</span>
        </Link>
      </footer>

      <style jsx global>{`
        @keyframes archiveNext {
          from {
            opacity: 0;
            transform: translateX(28px) scale(0.99);
            filter: blur(3px);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes archivePrevious {
          from {
            opacity: 0;
            transform: translateX(-28px) scale(0.99);
            filter: blur(3px);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes captionReveal {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          [class*="animate-"] {
            animation: none !important;
          }
        }
      `}</style>
    </main>
  )
}