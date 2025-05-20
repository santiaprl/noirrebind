"use client"

import { useState } from "react"
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function StartYourRebindPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const faqs = [
    {
      q: "Do I need to ship you my book?",
      a: "If you already own the book you'd like rebound or restored, you'll send it to us after we approve your request. Don't have a copy? We're happy to source the book for you-just note that outsourcing includes the cost of purchasing the book, which will be reflected in your quote. ",
    },
    {
      q: "Where do I send my book?",
      a: "Once your request is approved and payment is confirmed, we’ll email you secure shipping instructions along with packaging tips to keep your book safe in transit.",
    },
    {
      q: "How long will it take to receive my finished book?",
      a: "Most custom rebinds are completed within 2–3 weeks after we receive your book. You'll get a specific timeline when we confirm your order.",
    },
    {
      q: "How much does a custom rebind cost?",
      a: "Custom rebinds typically start at $95, with pricing based on book condition, design complexity, and materials.Your quote will reflect your exacr request - no surprises.",
    },
    {
      q: "What if I’m unsure about the design?",
      a: "No pressure. You can leave design fields blank — we’ll follow up to explore ideas together before anything is finalized.  ",
    },
    {
      q: "Do you offer local pickups in San Diego?",
      a: "Yes. If you’re based in San Diego, we can coordinate a safe local drop-off or pickup instead of shipping.",
    },
    {
  q: "Not ready to order yet?",
  a: `No problem – if you have questions or want to talk it through first, feel free to email me at 
      <a href="mailto:noirrebind@gmail.com" class="text-[#b08d4f] underline hover:text-[#a67c33]">
        noirrebind@gmail.com
      </a>, I'd love to hear what you are thinking!`
},
  ]
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);

  await fetch("https://formspree.io/f/movdrndk", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  });

  setIsSubmitted(true);
  setIsSubmitting(false);
};
  return (
  <div className="bg-[#f1ede8] text-[#222] font-sans">
   {/* Custom Header */}
   {!isSubmitted && (
<div className="bg-[#f1ede8] text-[#222] font-sans py-12">
  <div className="text-center max-w-2xl mx-auto px-4">
    <p className="text-sm tracking-widest font-medium text-[#b08d4f] uppercase mb-6">
      Noir Rebind
    </p>
    <h1 className="font-serif text-4xl md:text-5xl font-light mb-6">
      Custom Bookbinding Quote
    </h1>
    <p className="text-neutral-600 text-base md:text-lg">
      Transform your treasured book into a bespoke work of art worthy of display and legacy.
      <span className="ml-1">🖤</span>
    </p>
    <div className="w-16 h-px bg-[#b08d4f] mt-6 mx-auto" />
  </div>
</div>
)}

    <div className="max-w-3xl mx-auto px-3 py-4">
       
      

        {!isSubmitted ? (
          <form
  method="POST"
  onSubmit={handleSubmit}
  className="space-y-12 bg-white border border-neutral-200 p-8 rounded-lg shadow-sm"
>
            <input type="hidden" name="_subject" value="Custom Book Request" />
            <div>
              <h2 className="text-x1 font-serif font-semibold text-[#444] mb-4 border-b pb-2 border-neutral-200">Book Details</h2>
              <div className="space-y-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name*</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" name="phone" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bookTitle">Title of the Book*</Label>
                  <Input id="bookTitle" name="bookTitle" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="projectType">Type of Project*</Label>
                  <Select name="projectType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restore">I have an old book I want restored</SelectItem>
                      <SelectItem value="rebind">I own a book and want it rebound in a new design </SelectItem>
                      <SelectItem value="source">I don’t have the book — I’d like you to source it for me</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bookMeaning">Why is this book meaningful to you?</Label>
                  <Textarea id="bookMeaning" name="bookMeaning" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-x1 font-serif font-semibold text-[#444] mb-4 border-b pb-2 border-neutral-200">Location</h2>
              <div className="grid gap-2">
                <Label htmlFor="location">City + State</Label>
                <Input id="location" name="location" required />
              </div>
            </div>
 {/* Communication Preferences */}
    <div>
      <h2 className="text-x1 font-serif font-semibold text-[#444] mb-4 border-b pb-2 border-neutral-200">Communication Preferences</h2>
      <div className="space-y-6">
        <div>
          <Label>Would you like to schedule a short call to go over the details?</Label>
          <RadioGroup name="callRequest" className="flex space-x-6 pt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="call-yes" />
              <Label htmlFor="call-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="call-no" />
              <Label htmlFor="call-no">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label htmlFor="contactMethod">Preferred way to connect</Label>
          <Select name="contactMethod">
            <SelectTrigger id="contactMethod">
              <SelectValue placeholder="Please select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="text">Text</SelectItem>
              <SelectItem value="phone">Phone Call</SelectItem>
              <SelectItem value="video">Video Call</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
{/* Design Preferences */}
<div>
  <h2 className="text-x1 font-serif font-semibold text-[#444] mb-4 border-b pb-2 border-neutral-200">
    Design Vision <span className="text-sm italic text-neutral-400">(optional)</span>
  </h2>
  <div className="grid gap-2">
    <Textarea
      id="designIdeas"
      name="designIdeas"
      placeholder="Share any ideas, preferences or inspiration you have for the design-like cover material, foil color, or overall style. If you're unsure, that's totally fine! We can explore options together. "
      className="min-h-[120px] w-full md;w-[90%]"
    />
  </div>
</div>
            <div className="text-center pt-8 border-t border-gray-200">
              <Button type="submit" className="bg-[#b08d4f] hover;bg-[#a17e45] text-white font-medium py-3 px-6 rounded-md w-full transition-colors duration-200" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                You’ll receive a follow-up email within 1–2 business days with your quote and next steps.
              </p>
            </div>
          </form>
        ) : isSubmitted ? (
  <div className="text-center py-12 space-y-6">
  <h2 className="text-2xl font-serif mb-4">Thank You!</h2>
  <p className="text-neutral-700 mb-6">
    We’ve received your request and will be in touch within 1–2 business days. In the meantime, feel free to explore the Arcs while you wait!
  </p>

  <div className="flex justify-center gap-4">
    <Button asChild>
      <Link href="/">Return to Homepage</Link>
    </Button>
    <Button asChild variant="outline">
      <Link href="/arcs">Explore the Arcs</Link>
    </Button>
  </div>
</div>
) : null}
        <div className="mt-20 pb-20">
            <h2 className="font-serif text-2xl font-light text-center mb-12 tracking-wide">
    <span className="inline-flex items-center gap-2">
    
      Frequently Asked Questions
    </span>
  </h2>
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <details key={index} className="group bg-[#f8f4f0] border border-neutral-200 rounded-lg p-4 transition-all">
                <summary className="flex justify-between items-center cursor-pointer text-base font-serif text-neutral-800 list-none group-open:font-semibold transition-colors">
                      {item.q}
          <svg
            className="w-3 h-3 text-neutral-500 transition-transform group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </summary>
        <p className="mt-3 text-sm font-sans text-neutral-700 leading-relaxed"
        dangerouslySetInnerHTML={{__html:item.a}}/>
      </details>
    ))}
  </div>
</div>
      </div>
    </div>
  )
}
