'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-silver/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo + tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden border-2 border-ink/10 shadow-sm flex-shrink-0">
              <Image src="/icon.png" alt="Cocoon app icon" width={36} height={36} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-ink">Cocoon</p>
              <p className="text-xs text-slate-text">Private AI Meeting Transcriber</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-sm text-charcoal hover:text-ink transition-colors">About</Link>
            <Link href="/privacy" className="text-sm text-charcoal hover:text-ink transition-colors">Privacy Policy</Link>
            <a href="mailto:privacy@cocoonapp.com" className="text-sm text-charcoal hover:text-ink transition-colors">Support</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-text">&copy; 2026 Cocoon. All conversations are yours alone.</p>
        </div>
      </div>
    </footer>
  )
}
