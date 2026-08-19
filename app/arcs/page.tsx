"use client"

import Image from "next/image"
import Link from "next/link"

const museumCollections = [
  {
    id: "stoics",
    number: "I",
    title: "The Stoic Collection",
    subtitle: "Ideas that have endured for centuries.",
    description:
      "Handcrafted editions of the philosophers whose words continue to shape how we live, endure, and choose.",
    image: "/images/stoics/marcus/marcus-gallery-v2.png",
  },
  {
    id: "literary",
    number: "II",
    title: "The Literary Collection",
    subtitle: "Stories that become part of us.",
    description:
      "Literary works preserved for the stories they contain and the lives they accompany.",
    image: "/images/Alchemist/alchemist-gallery-v2.png",
  },
  {
    id: "archive",
    number: "III",
    title: "The Studio Archive",
    subtitle: "Past works from the bindery.",
    description:
      "A record of private commissions, retired designs, and earlier works created inside the Noir Rebind studio.",
    image: "/images/atomic/atomic-gallery-v2.png",
  },
]

export default function ArcsPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-16 text-center font-serif text-4xl font-light md:text-5xl">
          The Collection
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-center font-serif text-lg font-light leading-8 text-[#5F574F] md:text-xl">
          Philosophy, literature, and enduring works; selected with intention
          and rebound by hand.
        </p>

        <div
          className="mx-auto mb-16 mt-8 h-px w-12 bg-[#A77B2F]"
          aria-hidden="true"
        />

        {/* Museum collection index */}
        <div className="scroll-reveal mb-20 border-t border-[#C9BFAF]">
          {museumCollections.map((collection, index) => (
            <Link
              href={
                collection.id === "stoics"
                  ? "/books/stoiccollection"
                  : collection.id === "literary"
                    ? "/books/literarycollection"
                    : "/books/archive"
              }
              key={collection.id}
              className="group grid grid-cols-1 gap-8 border-b border-[#C9BFAF] py-10 transition-colors duration-500 hover:bg-[#EFE9DF]/60 md:grid-cols-12 md:items-center md:gap-10 md:px-6 md:py-14"
            >
              {/* Collection number */}
              <div
                className={`md:col-span-1 ${
                  index % 2 !== 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#A77B2F]">
                  {collection.number}
                </p>
              </div>

              {/* Collection information */}
              <div
                className={`md:col-span-4 ${
                  index % 2 !== 0 ? "md:order-3" : "md:order-2"
                }`}
              >
                <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.25em] text-[#82786E]">
                  Noir Rebind Collection
                </p>

                <h2 className="font-serif text-3xl font-light tracking-[-0.03em] text-[#181612] transition-transform duration-500 group-hover:translate-x-1 md:text-5xl">
                  {collection.title}
                </h2>

                <p className="mt-4 font-serif text-lg italic text-[#655D55] md:text-xl">
                  {collection.subtitle}
                </p>

                <p className="mt-5 max-w-xl text-sm font-light leading-7 text-[#706860]">
                  {collection.description}
                </p>

                <div className="mt-7 inline-flex items-center text-[9px] font-medium uppercase tracking-[0.2em] text-[#181612]">
                  {collection.id === "archive"
                    ? "Enter the Archive"
                    : "Explore the Collection"}

                  <span className="ml-4 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              {/* Collection image */}
              <div className="md:col-span-7">
                <div className="mx-auto w-full max-w-[460px] overflow-hidden bg-[#EAE5DC]">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={collection.image}
                      alt={collection.title}
                      fill
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
                      sizes="(max-width: 768px) 100vw, 42vw"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mb-8 text-center">
          <Link
            href="/arcs/all"
            className="inline-block bg-black px-8 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-800"
          >
            View All Editions
          </Link>
        </div>

        <div className="mb-16 text-center">
          <Link
            href="/start-your-rebind"
            className="mt-4 inline-block border border-black bg-white px-8 py-3 text-sm font-medium text-black transition-colors duration-300 hover:bg-black hover:text-white"
          >
            Personalize Your Edition →
          </Link>
        </div>
      </div>
    </div>
  )
}