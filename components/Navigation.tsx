'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NavigationProps {
  isScrolled: boolean
}

const navLinks = [
  { label: 'Features',     id: 'features' },
  { label: 'How It Works', id: 'how' },
  { label: 'Technology',   id: 'tech' },
  { label: 'FAQ',          id: 'faq' },
]

const VALID_SECTION_IDS = new Set(['features', 'how', 'tech', 'faq', 'download'])

export default function Navigation({ isScrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    if (!VALID_SECTION_IDS.has(sectionId)) return
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    history.pushState(null, '', `#${sectionId}`)
    setMobileMenuOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3" aria-label="Main navigation">
      <nav
        className={`max-w-5xl mx-auto flex items-center justify-between h-14 px-6 rounded-2xl border transition-all duration-500 ${
          isScrolled
            ? 'border-white/40 shadow-lg shadow-ink/[0.04]'
            : 'border-transparent shadow-none'
        }`}
        style={{
          background: isScrolled ? 'rgba(245, 241, 232, 0.55)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
        }}
      >
        {/* Logo */}
        <button
          className="flex items-center gap-2.5"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Cocoon — scroll to top"
        >
          <div className="w-8 h-8 rounded-xl overflow-hidden border border-ink/10 shadow-sm flex-shrink-0">
            <Image src="/icon.png" alt="Cocoon app icon" width={32} height={32} className="w-full h-full object-cover" />
          </div>
          <span className="font-bold text-base text-ink tracking-tight">Cocoon</span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
              className="text-charcoal hover:text-ink transition-all duration-200 font-medium text-sm hover:bg-white/40 px-3 py-1.5 rounded-xl"
            >
              {item.label}
            </a>
          ))}
          <Link href="/about" className="text-charcoal hover:text-ink transition-all duration-200 font-medium text-sm hover:bg-white/40 px-3 py-1.5 rounded-xl">
            About
          </Link>
          <a
            href="#download"
            onClick={(e) => { e.preventDefault(); scrollToSection('download') }}
            className="btn-primary px-5 py-2 rounded-xl text-sm"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-white/40 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-5 h-5 text-ink" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile Menu — drops below the pill */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-5xl mx-auto mt-2 rounded-2xl border border-white/40 shadow-lg shadow-ink/[0.04] p-3 space-y-1"
            style={{
              background: 'rgba(245, 241, 232, 0.75)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            }}
          >
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id) }}
                className="block w-full text-left px-4 py-2.5 text-charcoal hover:text-ink hover:bg-white/50 rounded-xl transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/about"
              className="block w-full text-left px-4 py-2.5 text-charcoal hover:text-ink hover:bg-white/50 rounded-xl transition-colors text-sm font-medium"
            >
              About
            </Link>
            <div className="pt-1">
              <a
                href="#download"
                onClick={(e) => { e.preventDefault(); scrollToSection('download') }}
                className="block w-full btn-primary text-center py-2.5 rounded-xl text-sm"
              >
                Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
