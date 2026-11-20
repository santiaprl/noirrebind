import Image from "next/image"
import Link from "next/link"
import ScrollLink from "@/components/scroll-link"
import Testimonials from "@/components/testimonials"
import { getProductEditionLabel, products, type Product } from "@/lib/products"

type CollectionEdition = {
  product: Product
  /** Author or subtitle, as shown on the product page. */
  byline: string
  /** Short description, as written on the product page. */
  description: string
  image: { src: string; alt: string }
}

// Titles, prices, and routes come from lib/products.ts.
// Bylines, descriptions, and images match each individual product page.
const collection: CollectionEdition[] = [
  {
    product: products.marcusAurelius,
    byline: products.marcusAurelius.subtitle,
    description:
      "A handcrafted leather interpretation of the private reflections of Marcus Aurelius—words written without an audience, preserved for readers centuries later.",
    image: {
      src: "/images/stoics/marcus/marcus_cover.png",
      alt: "Meditations by Marcus Aurelius rebound in red leather",
    },
  },
  {
    product: products.seneca,
    byline: "Letters from a Stoic",
    description:
      "A handcrafted leather interpretation of Seneca’s letters on time, friendship, grief, virtue, and the difficult practice of living according to one’s principles.",
    image: {
      src: "/images/stoics/seneca/seneca.png",
      alt: "Letters from a Stoic by Seneca rebound in blue leather",
    },
  },
  {
    product: products.epictetus,
    byline: "The Enchiridion",
    description:
      "A handcrafted leather interpretation of Epictetus’s enduring guide to freedom, judgment, and the discipline of separating what belongs to us from what does not.",
    image: {
      src: "/images/stoics/epictetus/epic_main.png",
      alt: "The Enchiridion by Epictetus rebound in green leather",
    },
  },
  {
    product: products.dailyStoic,
    byline: "Ryan Holiday and Stephen Hanselman",
    description:
      "A handcrafted companion for daily reflection, preserving the enduring ideas of Stoicism in an edition designed to be opened, considered, and returned to each day.",
    image: {
      src: "/images/Daily_Stoic_Large.jpeg",
      alt: "The Daily Stoic handcrafted black leather edition",
    },
  },
  {
    product: products.alchemist,
    byline: "Paulo Coelho",
    description:
      "A handcrafted leather interpretation of Santiago’s journey—a story of pursuit, purpose, and learning to recognize the path that has been calling all along.",
    image: {
      src: "/images/Alchemist/alchemist_main.jpg",
      alt: "The Alchemist handcrafted leather edition",
    },
  },
]

// Layout helpers so the five cards stay balanced:
// desktop = 3 + 2 (second row centred), tablet = 2 + 2 + 1 (last card centred).
const cardPlacement = [
  "",
  "",
  "",
  "lg:col-start-2",
  "sm:col-span-2 sm:mx-auto sm:w-[calc(50%-0.75rem)] lg:col-span-2 lg:mx-0 lg:w-auto",
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F8F5EF] px-6 pb-20 pt-20 text-[#171512] md:pb-24 md:pt-28">
        <div className="hero-reveal mx-auto max-w-5xl text-center">
          <p className="mb-10 text-[10px] font-medium uppercase tracking-[0.32em] text-[#A77B2F] md:text-xs">
            A Bookbinding Studio
          </p>

          <h1 className="font-serif text-6xl font-light leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-9xl">
            Noir Rebind.
          </h1>

          <p className="mt-6 font-serif text-3xl font-light italic leading-tight tracking-[-0.02em] text-[#2E2A25] sm:text-4xl md:mt-8 md:text-5xl">
            The Art of Rebinding Books.
          </p>

          <div
            className="mx-auto my-10 h-px w-12 bg-[#A77B2F] md:my-12"
            aria-hidden="true"
          />

          <p className="mx-auto max-w-2xl font-serif text-lg font-light leading-relaxed text-[#39352F] md:text-2xl">
            Handcrafted leather-bound editions, thoughtfully made for you and
            the people you love.
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm font-light leading-7 text-[#6B665D] md:text-base">
            A meaningful gift for yourself or someone special.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ScrollLink
              targetId="collection"
              className="inline-flex min-h-[48px] min-w-[220px] items-center justify-center border border-[#171512] bg-[#171512] px-8 text-xs font-medium uppercase tracking-[0.14em] text-white transition-all duration-500 hover:bg-transparent hover:text-[#171512]"
            >
              Explore the Collection
            </ScrollLink>

            <Link
              href="/start-your-rebind"
              className="inline-flex min-h-[48px] min-w-[220px] items-center justify-center border border-[#171512] bg-transparent px-8 text-xs font-medium uppercase tracking-[0.14em] text-[#171512] transition-all duration-500 hover:bg-[#171512] hover:text-white"
            >
              Customize Your Cover
            </Link>
          </div>
        </div>
      </section>

      {/* The Collection Section */}
      <section
        id="collection"
        aria-labelledby="collection-heading"
        className="scroll-mt-4 border-t border-[#BEB8AE]/60 bg-[#F3F0E9] px-6 pb-28 pt-24 text-[#181612] md:px-12 md:pb-36 md:pt-32"
      >
        <div className="scroll-reveal mx-auto max-w-7xl">
          {/* Catalog heading */}
          <div className="mb-16 grid gap-10 border-b border-[#BEB8AE] pb-14 md:mb-20 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="mb-6 text-[9px] uppercase tracking-[0.34em] text-[#946F38]">
                Handcrafted Editions
              </p>

              <h2
                id="collection-heading"
                className="font-serif text-5xl font-light leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl"
              >
                The
                <br />
                <span className="italic">Collection.</span>
              </h2>
            </div>

            
          
          </div>

          {/* Edition catalog */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-6">
            {collection.map(({ product, byline, description, image }, index) => (
              <Link
                key={product.id}
                href={product.slug}
                className={`group block lg:col-span-2 ${cardPlacement[index]}`}
              >
                <article>
                  {/* Edition photograph */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#D1D1CE]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    />

                    <div className="absolute left-5 top-5 text-[8px] uppercase tracking-[0.26em] text-[#F5F2EB] mix-blend-difference">
                      No. {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Edition information */}
                  <div className="border-b border-[#BEB8AE] pb-7 pt-6">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-[8px] uppercase tracking-[0.25em] text-[#8E6B38]">
                          {getProductEditionLabel(product)}
                        </p>

                        <h3 className="mt-4 font-serif text-2xl font-light tracking-[-0.025em] transition-colors duration-500 group-hover:text-[#8E6B38] md:text-3xl">
                          {product.title}
                        </h3>

                        <p className="mt-2 font-serif text-sm italic text-[#777067]">
                          {byline}
                        </p>
                      </div>

                      <p className="whitespace-nowrap pt-8 font-serif text-base">
                        ${product.price} USD
                      </p>
                    </div>

                    <p className="mt-5 text-xs font-light leading-6 text-[#6D6760]">
                      {description}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-4 text-[8px] uppercase tracking-[0.23em] text-[#181612]">
                      View the Edition
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Full library link */}
          <div className="mt-20 text-center">
            <Link
              href="/arcs/all"
              className="inline-flex min-h-[48px] items-center justify-center border border-[#181612] px-9 text-[10px] font-medium uppercase tracking-[0.2em] text-[#181612] transition-all duration-500 hover:bg-[#181612] hover:text-[#F3F0E9]"
            >
              Explore the Full Library
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Past Commissions Section */}
<section
  id="past-commissions"
  className="border-t border-[#BEB8AE]/60 bg-[#F8F5EF] px-6 py-28 text-[#171512] md:px-12 md:py-36"
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
        <Link
          href="/books/archive"
          aria-label="The Daily Stoic commission — explore the Studio Archive"
          className="block border border-[#CFC6B8] bg-transparent p-1 transition-colors duration-700 hover:border-[#A77B2F] focus-visible:border-[#A77B2F] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#A77B2F]"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/daily-stoic-after.png"
              alt="The Daily Stoic custom leather commission"
              fill
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
        </Link>

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
       <Link
          href="/books/archive"
          aria-label="The Alchemist commission — explore the Studio Archive"
          className="block border border-[#CFC6B8] bg-transparent p-1 transition-colors duration-700 hover:border-[#A77B2F] focus-visible:border-[#A77B2F] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#A77B2F]"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/Alchemist/alchemist_cover.jpeg"
              alt="The Alchemist custom leather commission"
              fill
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.025]"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>
        </Link>

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

    {/* Studio archive link */}
    <div className="mt-20 flex flex-col items-center gap-4 text-center md:mt-24">
      <p className="font-serif text-base italic text-[#6B665D] md:text-lg">
        More one-of-one bindings from the studio.
      </p>

      <Link
        href="/books/archive"
        className="group inline-flex items-center gap-3 border-b border-[#A77B2F]/60 pb-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#171512] transition-colors duration-500 hover:border-[#171512]"
      >
        Explore the Studio Archive
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
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
        Customize Your Cover
      </Link>
    </div>
  </div>
</section>
    </div>
  )
}
