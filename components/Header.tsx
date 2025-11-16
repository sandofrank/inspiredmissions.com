'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import PhnomPenhClock from './PhnomPenhClock'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 gradient-hero shadow-lg">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-yellow-300 focus:text-gray-900 focus:font-bold focus:rounded"
      >
        Skip to main content
      </a>
      {/* Top bar with clock */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-center md:justify-end">
            <PhnomPenhClock />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Inspired Missions"
              width={200}
              height={64}
              priority
              className="h-14 md:h-16 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            <Link
              href="/"
              className="text-white hover:text-yellow-300 font-medium transition-colors"
              aria-current={isActive('/') ? 'page' : undefined}
            >
              About Us
            </Link>
            <Link
              href="/about-cambodia"
              className="text-white hover:text-yellow-300 font-medium transition-colors"
              aria-current={isActive('/about-cambodia') ? 'page' : undefined}
            >
              Ministries
            </Link>
            <Link
              href="/history"
              className="text-white hover:text-yellow-300 font-medium transition-colors"
              aria-current={isActive('/history') ? 'page' : undefined}
            >
              History
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-yellow-300 font-medium transition-colors"
              aria-current={isActive('/blog') ? 'page' : undefined}
            >
              Inspired News
            </Link>
            <a
              href="https://donorbox.org/im_donations"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              Donate
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 text-white hover:text-yellow-300 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav id="mobile-menu" className="lg:hidden py-4 border-t border-white/20" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-yellow-300 font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                About Us
              </Link>
              <Link
                href="/about-cambodia"
                className="text-white hover:text-yellow-300 font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive('/about-cambodia') ? 'page' : undefined}
              >
                Ministries
              </Link>
              <Link
                href="/history"
                className="text-white hover:text-yellow-300 font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive('/history') ? 'page' : undefined}
              >
                History
              </Link>
              <Link
                href="/blog"
                className="text-white hover:text-yellow-300 font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive('/blog') ? 'page' : undefined}
              >
                Inspired News
              </Link>
              <a
                href="https://donorbox.org/im_donations"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block text-center"
              >
                Donate
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
