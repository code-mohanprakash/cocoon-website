'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HeroCanvas from './HeroCanvas'

interface HeroProps {
  scrollY: number
}

/**
 * Brand icons in a genuine organic scatter — every icon has a unique
 * x AND y position so no columns, rows, or circles are visible.
 * All positions are in the right half (left ≥ 56%) and below the nav (top ≥ 13%).
 * Icons avoid the phone body (approximately left 63–83%, top 22–80%).
 */
const BrandIcons = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true" style={{ zIndex: 2 }}>

    {/* Google Calendar — upper-left of phone, diagonal */}
    <motion.div
      animate={{ y: [0, -9, 0] }}
      transition={{ duration: 6.0, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
      className="absolute rounded-2xl shadow-md overflow-hidden"
      style={{ width: 50, height: 50, top: '15%', left: '58%', opacity: 0.82 }}
    >
      <div style={{ background: '#fff', width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: '#1A73E8', height: '34%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#fff', fontSize: 7, fontWeight: 700, letterSpacing: 0.5 }}>JAN</span>
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#1A73E8', fontSize: 17, fontWeight: 700, lineHeight: 1 }}>31</span>
        </div>
      </div>
    </motion.div>

    {/* Voice Memos — upper-center, above phone */}
    <motion.div
      animate={{ y: [0, -11, 0] }}
      transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
      className="absolute rounded-2xl shadow-md flex items-center justify-center"
      style={{ width: 52, height: 52, top: '12%', left: '91%', background: '#FF3B30', opacity: 0.82 }}
    >
      <svg width="22" height="30" viewBox="0 0 24 32" fill="none">
        <rect x="6" y="1" width="12" height="18" rx="6" fill="white"/>
        <path d="M2 16C2 22.627 6.477 28 12 28C17.523 28 22 22.627 22 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="12" y1="28" x2="12" y2="32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="8" y1="32" x2="16" y2="32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    </motion.div>

    {/* Zoom — upper-right, well above phone */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      className="absolute rounded-2xl shadow-md flex items-center justify-center"
      style={{ width: 48, height: 48, top: '17%', left: '84%', background: '#2D8CFF', opacity: 0.80 }}
    >
      <svg width="26" height="20" viewBox="0 0 30 22" fill="none">
        <rect x="1" y="1" width="19" height="20" rx="4" fill="white"/>
        <path d="M21 6.5L29 2V20L21 15.5V6.5Z" fill="white"/>
      </svg>
    </motion.div>

    {/* FaceTime — left of phone, upper-mid */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      className="absolute rounded-2xl shadow-md flex items-center justify-center"
      style={{ width: 50, height: 50, top: '35%', left: '52%', background: '#34C759', opacity: 0.80 }}
    >
      <svg width="28" height="21" viewBox="0 0 30 22" fill="none">
        <rect x="1" y="2" width="18" height="18" rx="4" fill="white"/>
        <path d="M20 7L29 3V19L20 15V7Z" fill="white"/>
      </svg>
    </motion.div>

    {/* Outlook — right of phone, upper-mid (different height from FaceTime) */}
    <motion.div
      animate={{ y: [0, 7, 0] }}
      transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
      className="absolute rounded-2xl shadow-md flex items-center justify-center"
      style={{ width: 50, height: 50, top: '28%', left: '82%', background: '#0078D4', opacity: 0.80 }}
    >
      <svg width="28" height="22" viewBox="0 0 30 24" fill="none">
        <rect x="1" y="1" width="28" height="22" rx="3" fill="white" fillOpacity="0.2"/>
        <rect x="1" y="1" width="28" height="22" rx="3" stroke="white" strokeWidth="1.5"/>
        <path d="M1 6L15 14L29 6" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    </motion.div>

    {/* Google Meet — right of phone, mid (staggered from Outlook) */}
    <motion.div
      animate={{ y: [0, -9, 0] }}
      transition={{ duration: 7.0, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
      className="absolute rounded-2xl shadow-md flex items-center justify-center"
      style={{ width: 48, height: 48, top: '52%', left: '86%', background: '#fff', opacity: 0.82 }}
    >
      <svg width="30" height="25" viewBox="0 0 34 28" fill="none">
        <rect x="1" y="3" width="21" height="22" rx="4" fill="#00832D"/>
        <path d="M23 8.5L33 3V25L23 19.5V8.5Z" fill="#00AC47"/>
        <text x="11" y="17" textAnchor="middle" fill="white" fontSize="11" fontWeight="800" fontFamily="sans-serif">M</text>
      </svg>
    </motion.div>

    {/* Slack — left of phone, lower-mid (different x from FaceTime) */}
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut', delay: 2.2 }}
      className="absolute rounded-2xl shadow-md flex items-center justify-center"
      style={{ width: 50, height: 50, top: '62%', left: '53%', background: '#fff', opacity: 0.82 }}
    >
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
        <rect x="2"  y="11" width="9"  height="4" rx="2" fill="#E01E5A"/>
        <rect x="13" y="11" width="15" height="4" rx="2" fill="#ECB22E"/>
        <rect x="2"  y="15" width="15" height="4" rx="2" fill="#2EB67D"/>
        <rect x="17" y="15" width="11" height="4" rx="2" fill="#36C5F0"/>
        <rect x="11" y="2"  width="4"  height="9" rx="2" fill="#ECB22E"/>
        <rect x="15" y="2"  width="4"  height="9" rx="2" fill="#2EB67D"/>
        <rect x="11" y="14" width="4"  height="14" rx="2" fill="#E01E5A"/>
        <rect x="15" y="14" width="4"  height="14" rx="2" fill="#36C5F0"/>
      </svg>
    </motion.div>

    {/* Teams — right of phone, lower (different x/y from GMeet) */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 6.6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      className="absolute rounded-2xl shadow-md flex items-center justify-center"
      style={{ width: 48, height: 48, top: '70%', left: '80%', background: '#5059C9', opacity: 0.80 }}
    >
      <svg width="28" height="24" viewBox="0 0 32 28" fill="none">
        <circle cx="20" cy="8" r="5" fill="white"/>
        <rect x="13" y="14" width="14" height="10" rx="3" fill="white"/>
        <rect x="4" y="10" width="12" height="3" rx="1.5" fill="#9FA8DA"/>
        <rect x="9" y="10" width="2" height="9" rx="1" fill="#9FA8DA"/>
      </svg>
    </motion.div>

    {/* WhatsApp — lower-left, below phone */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut', delay: 2.0 }}
      className="absolute rounded-2xl shadow-md flex items-center justify-center"
      style={{ width: 50, height: 50, top: '83%', left: '62%', background: '#25D366', opacity: 0.80 }}
    >
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="12" fill="white" fillOpacity="0.15"/>
        <path d="M15 4C9.477 4 5 8.477 5 14c0 1.82.492 3.528 1.352 5L5 25l6.2-1.328A10 10 0 0015 24c5.523 0 10-4.477 10-10S20.523 4 15 4z" fill="white"/>
        <path d="M10.5 11c.3-.6.9-.6 1.2 0l1 2c.2.3.1.7-.1.9l-.8.8c.7 1.4 1.7 2.4 3 3l.8-.8c.3-.3.7-.3 1-.1l2 1c.6.3.6.9 0 1.2-1.5.8-4.2.3-6.3-1.8C10.2 15.2 9.7 12.5 10.5 11z" fill="#25D366"/>
      </svg>
    </motion.div>

    {/* Loom — bottom-center, below phone */}
    <motion.div
      animate={{ y: [0, 9, 0] }}
      transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
      className="absolute rounded-2xl shadow-md flex items-center justify-center"
      style={{ width: 52, height: 52, top: '87%', left: '74%', background: '#625DF5', opacity: 0.80 }}
    >
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="10" fill="white" fillOpacity="0.25"/>
        <circle cx="15" cy="15" r="6" fill="white"/>
        <circle cx="15" cy="15" r="3" fill="#625DF5"/>
      </svg>
    </motion.div>

    {/* Notion — lower-right, diagonal from Loom */}
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      className="absolute rounded-2xl shadow-md flex items-center justify-center"
      style={{ width: 48, height: 48, top: '80%', left: '85%', background: '#fff', opacity: 0.80 }}
    >
      <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
        <rect x="4" y="3" width="22" height="24" rx="3" fill="#1A1A1A"/>
        <path d="M8 7H12L20 20V7H22V23H18L10 10V23H8V7Z" fill="white"/>
      </svg>
    </motion.div>

  </div>
)

export default function Hero({ scrollY }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden:   { opacity: 1, y: 0 },
    visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden hero-gradient">

      {/* Animated silk-thread canvas */}
      <HeroCanvas />

      {/* Brand app icons — right half only, arranged around phone */}
      <BrandIcons />

      {/* Pastel bokeh blobs */}
      <div
        aria-hidden="true"
        className="absolute top-[8%] right-[8%] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(197,216,109,0.22) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.12}px)`,
          zIndex: 1,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[12%] left-[4%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,212,184,0.35) 0%, transparent 65%)',
          transform: `translateY(${scrollY * -0.08}px)`,
          zIndex: 1,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants} className="relative">

          {/* Left accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-leaf rounded-full" />

          <div className="pl-8">
            {/* Label */}
            <p className="text-xs font-bold text-leaf-dark tracking-widest uppercase mb-4">
              A passion project
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] tracking-tight mb-6">
              Your meetings and notes<br className="hidden sm:block" />
              {' '}don't deserve to be{' '}
              <span className="text-gradient">on the internet.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-charcoal mb-4 leading-relaxed max-w-lg">
              Cocoon is one person's answer to an industry that normalised sending
              your most private conversations to distant servers. No VC funding.
              No ads. No servers. Just open-source AI that lives entirely on your
              device — one step toward a future where privacy and intelligence go
              hand in hand.
            </p>

            {/* Desktop in progress badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-ink/10 bg-cloud/40 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-leaf-dark opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-leaf-dark"></span>
              </span>
              <span className="text-xs font-semibold text-charcoal">macOS desktop version in progress</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
              >
                Our story
                <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/privacy"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
              >
                Privacy policy
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Right — Phone with Demo Video */}
        <div
          className="flex justify-center"
          style={{ transform: `translateY(${scrollY * -0.06}px)` }}
          aria-label="Cocoon app demo"
        >
          <div className="relative flex items-center justify-center">

            {/* Soft green glow bloom behind the phone */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: 340,
                height: 340,
                background: 'radial-gradient(circle, rgba(197,216,109,0.20) 0%, transparent 70%)',
              }}
            />

            {/* Floating phone */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-60 h-[520px] sm:w-64 sm:h-[555px] md:w-72 md:h-[560px]"
            >
              {/* Phone Frame */}
              <div className="relative pastel-card rounded-[2.5rem] overflow-hidden p-2 h-full">

                {/* Video screen — clipped inside the rounded frame */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ display: 'block' }}
                  >
                    <source src="/trialdemo.mp4" type="video/mp4" />
                    <source src="/trialdemo.mov" type="video/quicktime" />
                  </video>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
