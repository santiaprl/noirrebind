"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart-provider"  

const navigation = [
  { name: "The Collection", href: "/arcs" },
  { name: "Our Process", href: "/process" },
  { name: "The Studio", href: "/community" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { itemCount } = useCart()

  return (
    <header className="bg-white">
      <nav className="container mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="font-serif text-2xl font-medium tracking-tight">Noir Rebind</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
                <div className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-sans hover:underline underline-offset-4"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/cart"
            className="relative inline-flex items-center justify-center p-2"
            aria-label={`Shopping bag with ${itemCount} items`}
          >
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />

            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[9px] text-white">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "fixed inset-0 z-50" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="font-serif text-2xl font-medium tracking-tight">Noir Rebind</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
