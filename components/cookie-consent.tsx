"use client"

import { useEffect, useState } from "react"

const CONSENT_STORAGE_KEY = "noir-analytics-consent"

type Choice = "granted" | "denied"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Small, non-blocking banner asking visitors to allow analytics cookies.
 * The choice is saved in localStorage and passed to Google Consent Mode.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CONSENT_STORAGE_KEY)
      if (saved !== "granted" && saved !== "denied") setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const choose = (choice: Choice) => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice)
    } catch {
      // Storage unavailable (e.g. private mode) — apply the choice for this visit only.
    }
    window.gtag?.("consent", "update", { analytics_storage: choice })
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-[#CFC6B8] bg-[#F7F3EC] px-4 py-5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-sans text-sm leading-relaxed text-[#39352F]">
          We use analytics cookies to understand how visitors use our site and improve it.
          You can accept or decline — the site works the same either way.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="min-h-[40px] border border-[#171512] bg-transparent px-5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#171512] transition-colors hover:bg-[#171512] hover:text-white"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="min-h-[40px] border border-[#171512] bg-[#171512] px-5 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-transparent hover:text-[#171512]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
