"use client"

import Link from "next/link"
import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const FORMSPREE_BOOK_SUGGESTION_ACTION =
  "https://formspree.io/f/xqedpdbe"

export default function CommunityPage() {
 const [bookSuggestion, setBookSuggestion] = useState("")

const [selectedBook, setSelectedBook] = useState("")
const [otherBook, setOtherBook] = useState("")
const [reason, setReason] = useState("")
const [newsletterConsent, setNewsletterConsent] = useState(false)

const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")

  const [submitMessage, setSubmitMessage] = useState("")

  async function handleBookSuggestionSubmit(
  e: FormEvent<HTMLFormElement>
) {
  e.preventDefault()

  setIsSubmitting(true)
  setSubmitStatus("idle")
  setSubmitMessage("")

  const submittedBook =
    selectedBook === "Other"
      ? otherBook.trim()
      : selectedBook

  try {
    const formData = new FormData()

    formData.append(
      "selectedBook",
      submittedBook || bookSuggestion.trim()
    )

    formData.append("reason", reason.trim())
    formData.append("email", email.trim())

    formData.append(
      "newsletterConsent",
      newsletterConsent ? "Yes" : "No"
    )

    const response = await fetch(
      FORMSPREE_BOOK_SUGGESTION_ACTION,
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    )

    if (response.ok) {
      setBookSuggestion("")
      setSelectedBook("")
      setOtherBook("")
      setReason("")
      setEmail("")
      setNewsletterConsent(false)

      setSubmitStatus("success")
      setSubmitMessage(
        "Your vote has been recorded. Thank you for helping shape the next edition."
      )

      return
    }

    setSubmitStatus("error")
    setSubmitMessage(
      "Something went wrong. Please try again."
    )
  } catch {
    setSubmitStatus("error")
    setSubmitMessage(
      "Network error. Please try again."
    )
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <div className="min-h-screen bg-[#181612]">
      <div className="container mx-auto px-2 py-2">
        <div className="mt-10">
         <div className="border border-[#A77B2F]/20 bg-[#F8F5EF] px-6 py-16 md:px-12 md:py-20">
            <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.32em] text-[#A77B2F]">
  Community Curation
</p>

<h1 className="text-center font-serif text-5xl font-light tracking-[-0.04em] text-[#241A17] md:text-7xl">
  The Studio
</h1>

<p className="mt-6 text-center font-serif text-xl italic text-[#5F5149] md:text-2xl">
  Every edition begins with a reader.
</p>

<div
  className="mx-auto my-8 h-px w-12 bg-[#A77B2F]"
  aria-hidden="true"
/>


            {/* Book suggestion form */}
            <div className="mx-auto mb-10 max-w-2xl">
              <div className="border border-[#D4C7B6] bg-[#F1ECE3]/50 p-6 md:p-10">
                
                <form
                  action={FORMSPREE_BOOK_SUGGESTION_ACTION}
                  method="POST"
                  onSubmit={handleBookSuggestionSubmit}
                  className="space-y-4"
                >
                 <div className="mb-8 text-center">
  <h3 className="font-serif text-2xl font-light text-[#241A17] md:text-3xl">
    Which book belongs in leather next?
  </h3>

  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#7A6F67]">
    Voting closes August 31, 2026
  </p>

  <p className="mt-1 text-xs text-[#8A817A]">
    The selected edition will be announced September 7, 2026.
  </p>
</div>

<fieldset className="space-y-3">
  <legend className="sr-only">
    Select the book you would like to vote for
  </legend>

  {[
  "The Odyssey",
  "East of Eden",
  "Crime and Punishment",
  "Other",
].map((book) => (
    <label
      key={book}
      className={`flex cursor-pointer items-center justify-between border px-5 py-4 transition-all duration-300 ${
        selectedBook === book
          ? "border-[#A77B2F] bg-[#A77B2F]/10"
          : "border-[#49111C]/20 bg-transparent hover:border-[#A77B2F]/60"
      }`}
    >
      <span className="font-serif text-lg text-[#2B211D]">
        {book}
      </span>

      <input
        type="radio"
        name="selectedBook"
        value={book}
        checked={selectedBook === book}
        onChange={(e) => setSelectedBook(e.target.value)}
        className="h-4 w-4 accent-[#7F1F0E]"
        required
      />
    </label>
  ))}
</fieldset>

{selectedBook === "Other" && (
  <div className="pt-2">
    <label
      htmlFor="other-book"
      className="mb-2 block text-xs uppercase tracking-[0.14em] text-[#655A53]"
    >
      Name the Book
    </label>

    <Input
      id="other-book"
      type="text"
      name="otherBook"
      placeholder="Enter a book title"
      value={otherBook}
      onChange={(e) => setOtherBook(e.target.value)}
      className="border-[#49111C]/20 bg-white/40 focus-visible:ring-[#A77B2F]"
      required
    />
  </div>
)}

<div className="pt-4">
  <label
    htmlFor="reason"
    className="mb-2 block text-xs uppercase tracking-[0.14em] text-[#655A53]"
  >
    Tell us why
    <span className="ml-2 normal-case tracking-normal text-[#8A817A]">
      Optional
    </span>
  </label>

  <Textarea
    id="reason"
    name="reason"
    placeholder="What would this edition mean to you?"
    value={reason}
    onChange={(e) => setReason(e.target.value)}
    className="min-h-[100px] border-[#49111C]/20 bg-white/40 focus-visible:ring-[#A77B2F]"
  />
</div>

<div className="pt-2">
  <label
    htmlFor="vote-email"
    className="mb-2 block text-xs uppercase tracking-[0.14em] text-[#655A53]"
  >
    Email Address
  </label>

  <Input
    id="vote-email"
    type="email"
    name="email"
    placeholder="you@example.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="border-[#49111C]/20 bg-white/40 focus-visible:ring-[#A77B2F]"
    required
  />

  <p className="mt-2 text-xs leading-5 text-[#81766E]">
    We’ll email you when the selected edition is announced.
  </p>
</div>

<label className="flex cursor-pointer items-start gap-3 pt-2">
  <input
    type="checkbox"
    name="newsletterConsent"
    checked={newsletterConsent}
    onChange={(e) =>
      setNewsletterConsent(e.target.checked)
    }
    className="mt-1 h-4 w-4 accent-[#7F1F0E]"
    required
  />

  <span className="text-xs leading-5 text-[#6B625B]">
    I would like to receive the voting result and occasional
    updates from the Noir Rebind studio. I can unsubscribe at
    any time.
  </span>
</label>

                 <Button
  type="submit"
  disabled={isSubmitting}
  className="min-h-[52px] w-full rounded-none border border-[#181612] bg-[#181612] text-[10px] font-medium uppercase tracking-[0.22em] text-[#F8F5EF] transition-all duration-500 hover:border-[#A77B2F] hover:bg-[#A77B2F] hover:text-[#181612]"
>
  {isSubmitting
    ? "Recording Your Vote..."
    : "Cast My Vote"}
</Button>

                  {submitStatus !== "idle" && (
                    <p
                      className={`text-center text-sm ${
                        submitStatus === "success"
                          ? "text-green-700"
                          : "text-red-700"
                      }`}
                    >
                      {submitMessage}
                    </p>
                  )}

                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}