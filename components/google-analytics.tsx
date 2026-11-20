import Script from "next/script"

// Key used to remember the visitor's analytics choice (shared with cookie-consent.tsx).
export const CONSENT_STORAGE_KEY = "noir-analytics-consent"

// Only accept a well-formed GA4 Measurement ID so nothing unexpected is injected into the page.
const GA_ID = (process.env.NEXT_PUBLIC_GA_ID ?? "").trim()
export const isValidGaId = /^G-[A-Z0-9]+$/i.test(GA_ID)

/**
 * Loads Google Analytics 4 (gtag.js) with Google Consent Mode v2.
 *
 * - Analytics cookies are DENIED by default; they are only enabled after the
 *   visitor clicks "Accept" in the cookie banner (or accepted on a prior visit).
 * - Page views, including client-side navigation between pages, are recorded by
 *   GA4's Enhanced Measurement ("Page changes based on browser history events"),
 *   which is on by default in GA4 web streams. No manual page_view is sent, so
 *   nothing is double-counted.
 * - Renders nothing if NEXT_PUBLIC_GA_ID is missing or invalid.
 */
export default function GoogleAnalytics() {
  if (!isValidGaId) return null

  return (
    <>
      <Script id="ga-consent-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          var granted = false;
          try { granted = localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'granted'; } catch (e) {}
          gtag('consent', 'default', {
            analytics_storage: granted ? 'granted' : 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied'
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <Script
        id="ga-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  )
}
