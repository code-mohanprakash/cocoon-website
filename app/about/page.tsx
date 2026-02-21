'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const APP_STORE_URL = 'https://apps.apple.com/app/cocoon-meeting-transcriber/id6738231906'

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'No servers. Ever.',
    text: 'Cocoon has no backend infrastructure. There is no server receiving your audio, no database storing your words, no engineer who could ever access your meetings.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: 'No ads. No tracking.',
    text: 'No advertising SDKs. No analytics. No crash reporting services. No attribution frameworks. Nothing listening. Nothing watching.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: 'AI that respects you.',
    text: 'Whisper and LLaMA run entirely on your device via llama.cpp. The intelligence is real — it just doesn\'t need to phone home to work.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-snow text-ink">

      {/* Floating glassmorphic nav — consistent with home page */}
      <div className="sticky top-0 z-50 px-4 sm:px-6 pt-3">
        <nav
          className="max-w-5xl mx-auto flex items-center justify-between h-14 px-6 rounded-2xl border border-white/40 shadow-lg shadow-ink/[0.04]"
          style={{
            background: 'rgba(245, 241, 232, 0.55)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          }}
        >
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl overflow-hidden border border-ink/10 shadow-sm flex-shrink-0">
              <Image src="/icon.png" alt="Cocoon" width={32} height={32} className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-base text-ink tracking-tight">Cocoon</span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-charcoal hover:text-ink transition-all duration-200 font-medium px-3 py-1.5 rounded-xl hover:bg-white/40"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to home
          </Link>
        </nav>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-20">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          {/* App icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-24 h-24 mx-auto mb-8 rounded-3xl overflow-hidden border-2 border-ink/10 shadow-lg"
          >
            <Image src="/icon.png" alt="Cocoon app icon" width={96} height={96} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-leaf/20 border border-leaf-dark/30 px-4 py-1.5 rounded-full mb-6"
          >
            <svg className="w-3.5 h-3.5 text-leaf-dark" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs font-semibold text-ink">A passion project</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] tracking-tight mb-6">
            Your meetings and notes<br />
            don't deserve to be<br />
            <span className="text-gradient">on the internet.</span>
          </h1>

          <p className="text-xl text-charcoal max-w-2xl mx-auto leading-relaxed">
            Cocoon is one step toward a future where AI is powerful
            and private — not one or the other.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="space-y-5 text-lg text-charcoal leading-relaxed">
            <p>
              Cocoon started as a personal frustration. Every meeting app I tried sent
              audio to someone's server. Every AI note-taker required an account, a
              subscription, and implicit trust that a company wouldn't misuse what I said.
            </p>
            <p>
              I believe that changes in your meeting with your team, the idea you
              captured in a voice memo at midnight, the conversation with your doctor —
              none of it should pass through someone else's infrastructure. Not even for
              a fraction of a second.
            </p>
            <p>
              So I built Cocoon. A single-person passion project. No VC funding, no
              growth team, no ad revenue to chase. Just an app that does exactly what
              it says: AI that lives entirely on your device.
            </p>
            <p className="font-semibold text-ink">
              You don't need a server. You don't need an ad. You just need your phone
              and 5GB of storage.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-ink mb-8 tracking-tight">Built on three promises</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="light-card rounded-2xl p-6 card-lift"
              >
                <div className="w-11 h-11 rounded-xl bg-leaf border-2 border-ink/15 text-ink flex items-center justify-center mb-4 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="font-bold text-ink mb-2">{v.title}</h3>
                <p className="text-charcoal text-sm leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* One step toward privacy AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 border-l-4 border-leaf pl-6"
        >
          <p className="text-xl font-semibold text-ink mb-3">One step toward privacy-first AI</p>
          <p className="text-charcoal leading-relaxed">
            The AI industry has normalised sending your most private moments — your voice, your ideas,
            your decisions — to distant servers to be processed and stored. Cocoon is proof that this
            trade-off is unnecessary. Whisper and LLaMA run on your iPhone. The intelligence is
            real. The privacy is absolute. This is what AI should look like.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-silver/40"
        >
          <p className="text-charcoal mb-6">Ready to take your privacy back?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </a>
            <Link href="/" className="btn-secondary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold">
              See how it works
            </Link>
          </div>
          <p className="text-sm text-slate-text mt-6">© 2026 Cocoon · Made with care for your privacy.</p>
        </motion.div>
      </main>
    </div>
  )
}
