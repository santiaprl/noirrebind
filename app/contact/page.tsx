"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full mx-auto text-center py-15 space-y-10">

        {/* Page Heading */}
        <h1 className="text-5xl md:text-6xl font-serif font-light tracking-tight text-neutral-900">
          Contact Us
        </h1>

        {/* Quote Description Only */}
        <p className="italic text-neutral-600 text-base md:text-lg max-w-md mx-auto leading-relaxed">
          This is Noir Rebind—where books are preserved, not forgotten.
        </p>

        {/* Divider */}
        <div className="w-10 h-px bg-neutral-300 mx-auto" />

        {/* CTA Button (Grouped) */}
        <div className="mt-8 flex flex-col items-center space-y-4">
        <Link
          href="/arcs/all"
          className="inline-block px-6 py-2 border border-black text-black bg-white text-sm font-medium"
          >
            View All Books
          </Link>
  
          <Button
            asChild
            size="lg"
            className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 text-base font-medium tracking-wide rounded mt-1"
          >
            <Link href="/start-your-rebind">Create a Custom Book →</Link>
          </Button>
          <p className="text-xs text-neutral-500 mt-3">
            You’ll receive a quote and follow-up within 1–2 business days.
          </p>
        </div>

        {/* Soft Divider */}
        <div className="w-10 h-px bg-neutral-200 mx-auto" />

        {/* Stay Connected */}
        <div className="space-y-2 text-base text-neutral-700">
          <p className="font-medium uppercase tracking-widest text-sm text-neutral-500 mb-2">
            Stay Connected
          </p>
          <p>
  → Follow us on TikTok {" "}
  <a
    href="https://www.tiktok.com/@noir.rebind"
    target="_blank"
    rel="noopener noreferrer"
    className="underline"
  >
    @noir.rebind
  </a>
</p>
<p>
  → DM us on Instagram {" "}
  <a
    href="https://www.instagram.com/noir.rebind"
    target="_blank"
    rel="noopener noreferrer"
    className="underline"
  >
    @noir.rebind
  </a>
</p>

          <p>
            → Or email us anytime:{" "}
            <a href="mailto:noirrebind@gmail.com" className="underline">
              noirrebind@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
