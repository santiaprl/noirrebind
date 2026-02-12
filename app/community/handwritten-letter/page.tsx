// app/community/handwritten-letter/page.tsx
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

const STRIPE_HANDWRITTEN_LETTER_LINK = "https://buy.stripe.com/REPLACE_ME"
const OVERLAY_COLOR = "#4A1F2A"

export default function HandwrittenLetterPage() {
  const openStripe = () => {
    window.open(STRIPE_HANDWRITTEN_LETTER_LINK, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-[#34161e]">
      <div className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-sm border border-white/10">
          {/* HERO */}
          <section className="relative bg-[#4A1F2A] text-white">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h1 className="font-serif text-4xl md:text-5xl font-light leading-tight">
                  A handwritten letter, just for you
                </h1>
                <p className="mt-4 text-white/80 text-base md:text-lg">
                  In a world that moves too quickly, sometimes it's essential to stop and savor a moment of stillness. 
                </p>
                <p className="mt-4 text-white/75">
                  This is an invitation to sit in stillness with me. Each month, I’ll send you a handwritten letter, a small moment of reflection and intention, delivered to your home.
                </p>

                <div className="mt-8">
                  <Button
                    onClick={openStripe}
                    className="w-full md:w-auto px-8 py-6 text-base bg-white text-[#4A1F2A] hover:bg-white/90"
                  >
                    Receive a handwritten letter
                  </Button>
                  <p className="mt-3 text-xs text-white/60">Checkout opens in a new tab.</p>
                </div>
              </div>

              <div className="relative min-h-[320px] md:min-h-[480px]">
                <Image
                  src="/images/Letter/open journal.jpg"
                  alt="Open journal"
                  fill
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: OVERLAY_COLOR, opacity: 0.38 }}
                />
              </div>
            </div>
          </section>

          {/* EXPLANATION (soft background) */}
          <section className="relative">
            <Image
              src="/images/Letter/ink.jpg"
              alt="Ink and quill"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: OVERLAY_COLOR, opacity: 0.58 }}
            />
            <div className="relative px-8 md:px-12 py-12 text-white">
              <div className="max-w-3xl">
                <h2 className="font-serif text-2xl md:text-3xl font-light">What you’ll receive</h2>
                <p className="mt-4 text-white/80">
                  A short, handwritten letter created just for you. It might be:
                </p>
                <ul className="mt-4 space-y-2 text-white/80 list-disc list-inside">
                  <li>a gentle encouragement</li>
                  <li>a reflection</li>
                  <li>a small piece of poetry</li>
                  <li>or a thought chosen to meet you where you are</li>
                </ul>
                <p className="mt-6 text-white/80">
                  No two letters are the same. Each one is written slowly, with care.
                </p>

                <h2 className="mt-10 font-serif text-2xl md:text-3xl font-light">Why I write them</h2>
                <p className="mt-4 text-white/80">
                  Noir Rebind has always been about more than books: it’s about connection,
                  memory, and the quiet beauty of things made by hand. This letter is an extension
                  of that philosophy.
                </p>

                <h2 className="mt-10 font-serif text-2xl md:text-3xl font-light">How it works</h2>
                <ol className="mt-4 space-y-2 text-white/80 list-decimal list-inside">
                  <li>You request a letter</li>
                  <li>I write it by hand</li>
                  <li>Once a month, it’s delivered to your home.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="px-8 md:px-12 py-12 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-8 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-[#4A1F2A]">
                  Your letter awaits
                </h2>
                <p className="mt-4 text-gray-700">
                  A small moment of softness — written just for you.
                </p>

                <div className="mt-8 space-y-3">
                  <Button
                    onClick={openStripe}
                    className="w-full py-6 text-base bg-[#4A1F2A] text-white hover:bg-[#3a1720]"
                  >
                    Receive a handwritten letter
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full py-6 text-base border-[#4A1F2A]/25 text-[#4A1F2A] hover:bg-[#4A1F2A]/5"
                    onClick={() => window.history.back()}
                  >
                    Back to The Studio
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-[240px] w-full overflow-hidden rounded-xl shadow-sm border border-[#4A1F2A]/10">
                  <Image
                    src="/images/Letter/pile_of_letters.jpg"
                    alt="Pile of letters"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}