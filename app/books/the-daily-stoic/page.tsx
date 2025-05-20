"use client"

import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ProductPage() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({ loop: true })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const images = [
    "/images/Daily_Stoic_Large.jpeg",
    "/images/daily/daily2.jpg",
    "/images/daily/daily3.jpg",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    await fetch("https://formspree.io/f/mdkgyqyo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image Slider */}
          <div className="relative">
            <div ref={sliderRef} className="keen-slider aspect-square bg-neutral-50 rounded-lg overflow-hidden">
              {images.map((src, index) => (
                <div key={index} className="keen-slider__slide flex justify-center items-center">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white px-2 py-1 shadow"
            >
              ◀
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white px-2 py-1 shadow"
            >
              ▶
            </button>
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-light tracking-tight">The Daily Stoic</h1>
              <p className="text-2xl font-light">$98.00</p>
            </div>

            <div className="h-px bg-neutral-200" />

            <p className="text-neutral-600 leading-relaxed">
              A luxury rebound of <strong>The Daily Stoic</strong>, handcrafted in matte black vegan leather and detailed with minimalist gold foil symbols representing the four Stoic virtues — wisdom, justice, courage, and temperance. The page edges are sanded for a raw, natural texture. Gift-wrapped in our signature aesthetic style, this edition invites quiet strength and steady growth — one page at a time, one virtue at a time.
            </p>

            <div className="h-px bg-neutral-200" />

            <Button
              className="w-full md:w-auto bg-black hover:bg-neutral-800 text-white rounded-none py-6 text-base"
              onClick={() => window.open("https://buy.stripe.com/3csaF35yTffrapqfYZ", "_blank")}
            >
              Buy Now
            </Button>

            <p className="text-sm text-neutral-500 italic mt-4">
              Please allow 9–12 business days before shipping.
            </p>

            {!isSubmitted ? (
              <>
                <div className="mt-8 space-y-4">
                  <p className="text-base text-neutral-600">
                    <strong>Have a question about this edition?</strong><br />
                    Use the form below to reach out — I'm happy to help.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    className="w-full border border-neutral-300 rounded px-4 py-2"
                  />
                  <textarea
                    name="message"
                    placeholder="Your message"
                    rows={4}
                    required
                    className="w-full border border-neutral-300 rounded px-4 py-2"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 hover:bg-neutral-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12 space-y-4 border border-neutral-200 rounded p-6">
                <h2 className="text-2xl font-serif mb-4">Thank You!</h2>
                <p className="text-neutral-700 mb-6">We've received your message and will be in touch soon.</p>
                <a href="/" className="bg-black text-white px-6 py-3 hover:bg-neutral-800 inline-block">
                  Return to Homepage
                </a>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
