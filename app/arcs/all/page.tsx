import Image from "next/image"
import Link from "next/link"

const editions = [
  {
    number: "01",
    title: "Marcus Aurelius",
    work: "Meditations",
    collection: "The Stoic Collection",
    material: "Burgundy leather · Gold-tooled detail",
    price: "$200 USD",
    image: "/images/stoics/marcus/marcus_cover.png",
    href: "/books/stoiccollection/marcus-aurelius",
  },
  {
    number: "02",
    title: "Seneca",
    work: "Letters from a Stoic",
    collection: "The Stoic Collection",
    material: "Navy leather · Gold-tooled detail",
    price: "$200 USD",
    image: "/images/stoics/seneca/seneca.png",
    href: "/books/stoiccollection/seneca",
  },
  {
    number: "03",
    title: "Epictetus",
    work: "The Enchiridion",
    collection: "The Stoic Collection",
    material: "Forest green leather · Gold-tooled detail",
    price: "$200 USD",
    image: "/images/stoics/epictetus/epic_main.png",
    href: "/books/stoiccollection/epictetus",
  },
  {
    number: "04",
    title: "The Daily Stoic",
    work: "Ryan Holiday and Stephen Hanselman",
    collection: "Companion Edition",
    material: "Matte black leather · Gold and silver detail",
    price: "$200 USD",
    image: "/images/Daily_Stoic_Large.jpeg",
    href: "/books/the-daily-stoic",
  },
  {
    number: "05",
    title: "The Alchemist",
    work: "Paulo Coelho",
    collection: "The Literary Collection",
    material: "Cobalt leather · Gold and hand-painted detail",
    price: "$200 USD",
    image: "/images/Alchemist/alchemist_main.jpg",
    href: "/books/the-alchemist",
  },
]

export default function AllBooksPage() {
  return (
    <main className="min-h-screen bg-[#F3F0E9] text-[#181612]">
      {/* Catalog heading */}
      <section className="px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-7xl border-b border-[#BEB8AE] pb-14">
          <Link
            href="/arcs"
            className="text-[8px] uppercase tracking-[0.28em] text-[#777169] transition-colors hover:text-black"
          >
            ← The Collection
          </Link>

          <div className="mt-16 grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-6 text-[9px] uppercase tracking-[0.34em] text-[#946F38]">
                The Noir Rebind Catalog
              </p>

              <h1 className="font-serif text-6xl font-light leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-9xl">
                All
                <br />
                <span className="italic">Editions.</span>
              </h1>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <p className="font-serif text-xl font-light leading-8 text-[#5F5952] md:text-2xl">
                Every book currently held in the Noir Rebind catalog.
              </p>

              <div className="my-7 h-px w-14 bg-[#A77B38]" />

              <p className="text-sm font-light leading-7 text-[#756F67]">
                Selected for the ideas and stories they preserve. Rebound by
                hand and made to be returned to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unified edition catalog */}
      <section className="px-6 pb-28 md:px-12 md:pb-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-x-5 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {editions.map((edition, index) => (
              <Link
                key={edition.title}
                href={edition.href}
                className="group block"
              >
                <article>
                  {/* Edition photograph */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#D1D1CE]">
                    <Image
                      src={edition.image}
                      alt={`${edition.title} handcrafted leather edition`}
                      fill
                      priority={index < 3}
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div className="absolute left-5 top-5 text-[8px] uppercase tracking-[0.26em] text-[#F5F2EB] mix-blend-difference">
                      No. {edition.number}
                    </div>
                  </div>

                  {/* Edition information */}
                  <div className="border-b border-[#BEB8AE] pb-7 pt-6">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.25em] text-[#8E6B38]">
                          {edition.collection}
                        </p>

                        <h2 className="mt-4 font-serif text-2xl font-light tracking-[-0.025em] md:text-3xl">
                          {edition.title}
                        </h2>

                        <p className="mt-2 font-serif text-sm italic text-[#777067]">
                          {edition.work}
                        </p>
                      </div>

                      <p className="whitespace-nowrap pt-8 font-serif text-base">
                        {edition.price}
                      </p>
                    </div>

                    <p className="mt-5 text-xs font-light leading-5 text-[#6D6760]">
                      {edition.material}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-4 text-[8px] uppercase tracking-[0.23em] text-[#181612]">
                      View the edition

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Three Stoics collection */}
<section className="bg-[#171715] px-6 py-20 text-[#F3F0E9] md:px-12 md:py-28">
  <Link
    href="/books/stoiccollection/bundle"
    className="group mx-auto grid max-w-7xl overflow-hidden border border-white/15 md:grid-cols-12"
  >
    {/* Collection photograph */}
    <div className="relative aspect-[4/3] overflow-hidden bg-[#222220] md:col-span-7 md:aspect-auto md:min-h-[460px]">
      <Image
        src="/images/stoics/three_stoics/stoic-collection-hero.png"
        alt="The complete Three Stoics leather collection"
        fill
        className="object-cover object-[center_68%] transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 58vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20" />
    </div>

    {/* Collection information */}
    <div className="flex flex-col justify-center px-8 py-12 md:col-span-5 md:px-12 md:py-16">
      <p className="text-[8px] uppercase tracking-[0.32em] text-[#C79B55]">
        The Stoic Collection
      </p>

      <h2 className="mt-7 font-serif text-4xl font-light leading-none tracking-[-0.035em] md:text-6xl">
        The Three
        <br />
        <span className="italic">Stoics.</span>
      </h2>

      <p className="mt-7 font-serif text-lg italic leading-7 text-white/65">
        Marcus Aurelius, Seneca, and Epictetus presented together as one
        three-volume collection.
      </p>

      <div className="my-8 h-px w-14 bg-[#B88A45]" />

      <div className="flex items-end justify-between gap-6 border-b border-white/20 pb-7">
        <div>
          <p className="text-[8px] uppercase tracking-[0.24em] text-white/45">
            Complete leather set
          </p>

          <p className="mt-3 text-xs text-white/70">
            Three handcrafted volumes
          </p>
        </div>

        <p className="font-serif text-lg">$600 USD</p>
      </div>

      <div className="mt-9 inline-flex items-center gap-5 text-[8px] uppercase tracking-[0.25em]">
        View the complete set

        <span className="transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </div>
    </div>
  </Link>
</section>
    </main>
  )
}