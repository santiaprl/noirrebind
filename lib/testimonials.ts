/**
 * Genuine customer reviews shown on the homepage ("Words From Our Readers.").
 *
 * IMPORTANT: Copy review text exactly as the customer wrote it.
 * Do not correct spelling, grammar, capitalisation, or punctuation,
 * and do not paraphrase inside quotation marks.
 *
 * To add a review, append an object to `testimonials` below.
 * - `excerpt`    : the short featured line (taken word-for-word from the review)
 * - `fullReview` : the complete review, unedited
 * - `date`       : ISO format (YYYY-MM-DD), used for the <time> element
 * - `displayDate`: how the date should read on the page
 * If `excerpt` and `fullReview` are identical, the "Read the full review"
 * control is hidden automatically.
 */

export type Testimonial = {
  id: string
  name: string
  rating: 1 | 2 | 3 | 4 | 5
  date: string
  displayDate: string
  source: "Etsy"
  product?: string
  excerpt: string
  fullReview: string
}

export const testimonials: Testimonial[] = [
  {
    id: "joel-2026-09-06",
    name: "Joel",
    rating: 5,
    date: "2026-09-06",
    displayDate: "September 6, 2026",
    source: "Etsy",
    excerpt:
      "It truly feels like something special that I'll treasure for years to come.",
    fullReview:
      "I couldn't be happier with this book! As soon as I opened the package, I could see the incredible attention to detail. The leather binding is absolutely beautiful, and the quality is even better than I expected. It truly feels like something special that I'll treasure for years to come. the packaging was exceptional. You can tell thy put a tremendous amount of care into making sure the book was protected every step of the way. It arrived in perfect condition, which is especially important when you're purchasing a beautiful collectible like this. I'm extremely happy with this purchase. The book itself is gorgeous, and the care and craftsmanship behind the entire experience really stood out to me. Without a doubt, 5 stars! ⭐⭐⭐⭐⭐ I highly recommend it!",
  },
  {
    id: "christina-2025-09-12",
    name: "Christina",
    rating: 5,
    date: "2025-09-12",
    displayDate: "September 12, 2025",
    source: "Etsy",
    product: "The Daily Stoic",
    excerpt:
      "Not only was the binding done beautifully but the way the book came wrapped with all the extra touches really made this book amazing.",
    fullReview:
      "Not only was the binding done beautifully but the way the book came wrapped with all the extra touches really made this book amazing.10/10 would buy again!!",
  },
  {
    id: "kevin-2025-12-11",
    name: "Kevin",
    rating: 5,
    date: "2025-12-11",
    displayDate: "December 11, 2025",
    source: "Etsy",
    product: "The Daily Stoic",
    excerpt: "The added gifts were a nice touch thank you 😊",
    fullReview:
      "Wow! I was totally satisfied with the packing, the care that went into this whole experience im glad to have found the link to engaging in stoicism the added gifts were a nice touch thank you 😊",
  },
  {
    id: "etsy-buyer-2025-07-23",
    name: "Etsy Buyer",
    rating: 5,
    date: "2025-07-23",
    displayDate: "July 23, 2025",
    source: "Etsy",
    excerpt: "Quality leather, fast shipping, and looks wonderful.",
    fullReview: "Quality leather, fast shipping, and looks wonderful.",
  },
]
