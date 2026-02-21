'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutBanner() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Animated left accent bar */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            style={{ originY: 0 }}
            className="absolute left-0 top-0 bottom-0 w-1 bg-leaf rounded-full"
          />

          <div className="pl-8">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xs font-bold text-leaf-dark tracking-widest uppercase mb-4"
            >
              A passion project
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-[1.1] tracking-tight mb-6"
            >
              Your meetings and notes<br className="hidden sm:block" />
              {' '}don't deserve to be{' '}
              <span className="text-gradient">on the internet.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-lg text-charcoal leading-relaxed max-w-2xl mb-8"
            >
              Cocoon is one person's answer to an industry that normalised sending
              your most private conversations to distant servers. No VC funding.
              No ads. No servers. Just AI that lives entirely on your phone —
              one step toward a future where privacy and intelligence go hand in hand.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/about"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
              >
                Our story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/privacy"
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
              >
                Privacy policy
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
