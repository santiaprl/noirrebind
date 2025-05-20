import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="font-sans text-sm">Crafted with care in California</p>
          </div>
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link
              href="https://www.instagram.com/noir.rebind"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.tiktok.com/@noir.rebind"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              <span className="sr-only">TikTok</span>
            </Link>
            <Link href="mailto:noirrebind@gmail.com" className="text-white hover:text-gray-300 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <div>
            <p className="font-sans text-sm">© Noir Rebind 2025</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
