export const dynamic = "force-static"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Arc data
const arcs = [
  {
    id: 1,
    title: "Arc I – This Is Where You Begin Again",
    color: "#E69E6C",
    description:
      "This arc is about rebirth after collapse. It's not healing just to feel better—it's healing because you're building something new.",
  },
  {
    id: 2,
    title: "Arc II – Discipline Is a Love Language",
    color: "#D98C7C",
    description:
      "This is about reclaiming self-respect through structure. You don't need to feel like it. You just need to trust your own word again. Not hustle. Not pressure. Just power through consistency.",
  },
  {
    id: 3,
    title: "Arc III – Return to Yourself",
    color: "#E3DAC9",
    textColor: "#2C2C2C",
    description:
      "This isn't about becoming something new. It's about remembering what's already inside you. This arc guides you through a quiet transformation—from seeking to sensing, from control to connection.",
  },
  {
    id: 4,
    title: "Arc IV – Build in Silence",
    color: "#8198AD",
    description:
      "This arc is about going from idea to impact—without noise. It's about power, not performance. Systems over stress. Patience over panic. And building something that lasts.",
  },
]

// Book data
const books = [
{ id: 1, title: "Breaking the Habit of Being Yourself", slug:"breaking-the-habit-of-being-yourself", arc: 1, image: "Arc_1_cs.png", description: "Nothing will change in your life, until you change. Until you change your limiting beliefs, your destructive habits and your way of being." },
{ id: 2, title: "Atomic Habits", slug:"atomic-habits", arc: 2, image: "atomic-habits.jpg", description: "A quiet but powerful reminder that big change doesn't require drama—just small, consistent wins staked with intention.", hasPage: true },
{ id: 3, title: "Can't Hurt Me", slug:"cant-hurt-me", arc: 2, image: "Arc_2_cs.png", description: "For the days when you feel scattered, or sorry for yourself. This is the book that will snap you back into self-respect" },
{ id: 4, title: "The Daily Stoic", slug:"the-daily-stoic", arc: 3, image: "Daily_Stoic_Large.jpeg", description: "Daily training in stillness, virtue, and self-mastery for when life demands more than emotion.", hasPage: true },
{ id: 5, title: "The Power of Now", slug:"the-power-of-now", arc: 3, image: "Arc_3_cs.png", description: "Break free from overthinking and return to the only moment you have, now." },
{ id: 6, title: "The 4-Hour Workweek", slug:"the-4-hour-workweek", arc: 4, image: "4hour-after.png", description: "Learn how to work less, earn more, and design a life on your own terms", hasPage: true },
{ id: 7, title: "The 48 Laws of Power", slug:"the-48-laws-of-power", arc: 4, image: "Arc_4_cs.png", description: "Power is silent, strategic—and never sentimental. If you want to stop being played, start here." },
]

export default async function ArcDetailPage({ params }: { params: { id: string } }) {
  const arcId = Number.parseInt(params?.id ?? '') ;


  // Find the arc by ID
  const arc = arcs.find((a) => a.id === arcId) ;

  // If arc doesn't exist, return 404
  if (!arc) {
    notFound()
  }

  // Filter books by arc
  const arcBooks = books.filter((book) => book.arc === arcId)

  return (
    <div className="bg-white">
      <div className="container mx-auto pt-4 pb-24 px-4">
      <div
        className="py-10 mb-12 text-center px-4 sm:px-8 md:px-0"
        style={{
          backgroundColor: arc.color,
          color: arc.textColor ? arc.textColor : "white",
        }}
      >
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light mb-4">{arc.title}</h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl opacity-90">{arc.description}</p>
      </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
  <h2 className="font-serif text-3xl font-light mb-4 text-center sm:text-left">
    Books in This Arc
  </h2>

  {/* Buttons on desktop (side-by-side) */}
  <div className="hidden sm:flex justify-end gap-5">
    <Link href="/arcs" className="inline-block px-6 py-3 border border-black text-sm font-medium bg-white">
      Back to All Arcs
    </Link>
    <Link href="/start-your-rebind" className="inline-block px-6 py-3 border border-black text-sm font-medium bg-black-700 text-black bg-[#E6E6E6]">
      Custom Rebind
    </Link>
  </div>

  {/* Buttons on mobile (stacked under title) */}
  <div className="flex flex-col sm:hidden items-center gap-3 mt-6">
    <Link href="/arcs" className="w-full text-center px-6 py-3 border border-black text-sm font-medium bg-white">
      Back to All Arcs
    </Link>
    <Link href="/start-your-rebind" className="w-full text-center px-6 py-3 border border-black text-sm font-medium text-black bg-[#E6E6E6]">
      Custom Rebind
    </Link>
  </div>
</div>

          {arcBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {arcBooks.map((book) => {
  const bookCard = (
    <div
      key={book.id}
      className="rounded-lg shadow-sm p-3 border border-gray-100 transition block"
    >
      <div className="relative h-64 bg-white flex items-center justify-center">
        <Image
          src={`/images/${book.image}`}
          alt={book.title}
          fill
          className="object-contain"
          style={book.hasPage ? {}: {opacity:0.6}}
        />
      </div>
      <div
        className="absolute top-0 right-0 px-3 py-1 text-xs text-white"
        style={{ backgroundColor: arc.color }}
      >
        Arc {arc.id}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-medium mb-2">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.description}</p>
      </div>
    </div>
  );

  return book.hasPage ? (
    <Link
      key={book.id}
      href={`/books/${book.slug}`}
      className="block hover:shadow-md transition"
    >
      {bookCard}
    </Link>
  ) : bookCard;
})}

            </div>
          ) : (
            <p className="text-center text-gray-500">No books found for this arc.</p>
          )}
        </div>
      </div>
    </div>
  )
}
export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' }
  ];
}
