import Image from "next/image"
import Link from "next/link"
import { arcs, books } from "@/lib/data"

export default function AllBooksPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-center mb-6">All Books</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Browse our complete collection of rebound books across all four emotional arcs.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {books.map((book) => {
              const bookArc = arcs.find((a) => a.id === book.arc)
              return (
                <Link
  key={book.id}
  href={`/books/${book.title.toLowerCase().replaceAll(" ", "-")}`}
  className="block border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition-all"
>
  <div className="relative h-[345px] bg-white flex items-center justify-center">
    <Image
      src={`/images/${book.image?.trim()}`}
      alt={book.title}
      fill
      className="object-contain"
    />
    <div
      className="absolute top-0 right-0 px-3 py-1 text-xs text-white"
      style={{ backgroundColor: arcs[book.arc - 1].color }}
    >
      Arc {book.arc}
    </div>
  </div>
  <div className="p-4">
    <h3 className="font-serif text-lg font-medium mb-2">{book.title}</h3>
    <p className="text-sm text-gray-600">{book.description}</p>
  </div>
</Link>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/arcs"
              className="inline-block px-6 py-3 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300"
            >
              Back to Arcs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
