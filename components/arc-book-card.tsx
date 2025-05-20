import Image from "next/image"

interface Book {
  id: number
  title: string
  arc: number
  description: string
}

interface Arc {
  id: number
  title: string
  color: string
  textColor?: string
  description: string
}

interface ArcBookCardProps {
  book: Book
  arc: Arc
}

export default function ArcBookCard({ book, arc }: ArcBookCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden group hover:shadow-md transition-shadow duration-300">
      <div className="relative h-64 bg-gray-100">
        <Image
          src={`/placeholder.svg?height=400&width=300&text=${encodeURIComponent(book.title)}`}
          alt={book.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-0 right-0 px-3 py-1 text-xs text-white" style={{ backgroundColor: arc.color }}>
          Arc {arc.id}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-medium mb-2">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.description}</p>
      </div>
    </div>
  )
}
