'use client'

import { motion } from 'framer-motion'

const APP_STORE_URL = 'https://apps.apple.com/app/cocoon-meeting-transcriber/id6738231906'

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center relative overflow-hidden">

          {/* Warm leaf-green glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(197,216,109,0.20) 0%, transparent 65%)' }}
          />
          {/* Bottom bokeh */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(232,212,184,0.35) 0%, transparent 65%)' }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4 tracking-tight">
                Ready to keep your<br />conversations <span className="text-gradient">private?</span>
              </h2>

              <p className="text-lg text-charcoal mb-6 max-w-lg mx-auto">
                Download Cocoon and transform how you capture and understand meetings — completely offline.
              </p>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-8"
              aria-label="App Store rating: 4.9 out of 5 stars"
            >
              <div className="flex gap-0.5" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-leaf-dark" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium text-charcoal">4.9 on the App Store</p>
            </motion.div>

            {/* Download Button */}
            <motion.a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg"
            >
              <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on the App Store
            </motion.a>

            {/* macOS coming soon */}
            <div className="mt-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-ink/10 bg-cloud/50">
              <svg className="w-5 h-5 text-charcoal flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
                <path d="M6 22h12v1H6z" opacity=".5"/>
              </svg>
              <span className="text-sm text-charcoal font-medium">macOS version in progress</span>
              <span className="text-[10px] font-bold text-leaf-dark bg-leaf/25 px-2 py-0.5 rounded-full uppercase tracking-wider">Soon</span>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-ink/10"
            >
              {[
                { label: 'On-Device', value: '100%' },
                { label: 'Cloud Upload', value: 'Zero' },
                { label: 'Account Needed', value: 'None' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl font-bold text-ink">{stat.value}</p>
                  <p className="text-xs text-slate-text mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
      </div>
    </section>
  )
}
