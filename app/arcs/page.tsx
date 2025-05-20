'use client';
import Image from "next/image"
import Link from "next/link"
import { arcs, books } from "@/lib/data"
import { usePathname } from 'next/navigation';

export default function ArcsPage() {
const pathname = usePathname ();
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-center mb-16">The Four Arcs</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {arcs.map((arc) => (
            <Link href={`/arcs/${arc.id}`} key={arc.id} className="block group">
              <div
                className="h-80 rounded-lg overflow-hidden relative transition-all duration-300 group-hover:shadow-xl"
                style={{ backgroundColor: arc.color }}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                  <h2
                    className={`font-serif text-2xl md:text-3xl font-semibold mb-4 ${
                      arc.textColor ? "text-[#2C2C2C]" : "text-white"
                    }`}
                  >
                    {arc.title}
                  </h2>
                  <p className={`font-sans text-lg ${arc.textColor ? "text-[#2C2C2C]/80" : "text-white/80"}`}>
                    {arc.description}
                  </p>
                  <div className="mt-6">
                    <div
                      className={`inline-block px-4 py-2 rounded border ${
                        arc.textColor ? "border-[#2C2C2C]/30 text-[#2C2C2C]" : "border-white/30 text-white"
                      } text-sm`}
                    >
                      View Books
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mb-8">
          <Link
            href="/arcs/all"
            className="inline-block px-8 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            View All Books
          </Link>
        </div>

        <div className="text-center mb-16">
          <Link
            href="/start-your-rebind"
            className="inline-block px-8 py-3 bg-white text-black text-sm font-medium border border-black hover:bg-black hover:text-white transition-colors duration-300 mt-4"
          >
            Have a book of your own? Start Your Custom Rebind →
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h2 className="font-serif text-3xl font-light text-center mb-12">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.slice(0, 4).map((book) => (
  <Link
    key={book.id}
    href={`/books/${book.title.toLowerCase().replaceAll(" ", "-")}`}
    className="block border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition"
  >
    <div className="relative h-64 bg-white flex items-center justify-center">
  <Image
    src={`/images/${book.image?.trim()}`}
    alt={book.title}
    fill
    className="object-contain"
  />
  <div
    className="absolute top-0 right-0 px-3 py-1 text-xs text-white z-10"
    style={{ backgroundColor: arcs[book.arc - 1].color }}
  >
    Arc {book.arc}
  </div>
</div>
   {(!pathname?.startsWith("/arcs") || pathname === "/arcs/all") && (
  <div className="absolute top-0 right-0 px-3 py-1 text-xs text-white z-10"
       style={{ backgroundColor: arcs[book.arc - 1].color }}>
    Arc {book.arc}
  </div>
)}

    <div className="p-4">
      <h3 className="font-serif text-lg font-medium mb-2">{book.title}</h3>
      <p className="text-sm text-gray-600">{book.description}</p>
    </div>
  </Link>
))}
          </div>
        </div>
      </div>
    </div>
  )
}

