'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="hidden sm:block font-bold text-primary text-lg">
              Academic Search PH
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-primary' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Search
            </Link>
            <Link
              href="/universities"
              className={`text-sm font-medium transition-colors ${
                isActive('/universities') 
                  ? 'text-primary' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Universities
            </Link>
            <Link
              href="/authors"
              className={`text-sm font-medium transition-colors ${
                isActive('/authors') 
                  ? 'text-primary' 
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Authors
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
