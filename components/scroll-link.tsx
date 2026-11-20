"use client"

import type { MouseEvent, ReactNode } from "react"

/**
 * In-page anchor link that scrolls smoothly to its target
 * (instantly if the visitor prefers reduced motion).
 * Without JavaScript it still works as a normal #anchor link.
 */
export default function ScrollLink({
  targetId,
  className,
  children,
}: {
  targetId: string
  className?: string
  children: ReactNode
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(targetId)
    if (!target) return

    event.preventDefault()
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" })
    history.replaceState(null, "", `#${targetId}`)
  }

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
