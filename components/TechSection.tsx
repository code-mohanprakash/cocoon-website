'use client'

import { motion } from 'framer-motion'

const techItems = [
  {
    title: 'Whisper Base',
    oss: true,
    description: 'Recognizes speech as accurately as a human transcriptionist — even with accents, background noise, and fast speakers.',
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    title: 'SmolLM3 3B',
    oss: true,
    description: 'Reads your entire meeting, writes sharp summaries, extracts action items, and answers questions — all offline.',
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'Metal GPU Acceleration',
    oss: false,
    description: "Apple's graphics chip runs AI up to 10× faster than CPU. Your summary is ready before the meeting ends.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Meta LLaMA',
    oss: true,
    description: "Meta's open-source language model powers deep meeting understanding — summaries, decisions, and action items, fully on-device.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: 'Memory Smart',
    oss: false,
    description: 'Loads only what is needed, when needed. Runs smoothly on iPhone 13 without hogging memory or draining battery.',
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
  },
]

function TechCard({ item, index, className = '' }: {
  item: typeof techItems[0]
  index: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, rotate: index % 2 === 0 ? 1 : -1, scale: 1.02 }}
      whileTap={{ scale: 0.97, rotate: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className={`pastel-card rounded-2xl p-7 ${className}`}
      style={{ boxShadow: '4px 4px 0px rgba(26,26,26,0.18)' }}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-11 h-11 rounded-xl bg-leaf border-2 border-ink/20 text-ink flex items-center justify-center"
          style={{ boxShadow: '2px 2px 0px rgba(26,26,26,0.20)' }}
        >
          {item.icon}
        </div>
        {item.oss && (
          <span className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-full bg-leaf/20 border border-leaf-dark/30 text-leaf-dark">
            OSS
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
      <p className="text-charcoal text-sm leading-relaxed">{item.description}</p>
    </motion.div>
  )
}

export default function TechSection() {
  return (
    <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-ink mb-4 tracking-tight">
            Powered by <span className="text-gradient">open-source</span> AI
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Battle-tested open-source models — no proprietary black boxes, no cloud, no internet required
          </p>
        </motion.div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          {techItems.slice(0, 3).map((item, i) => (
            <TechCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="flex justify-center gap-5">
          {techItems.slice(3).map((item, i) => (
            <TechCard
              key={item.title}
              item={item}
              index={i + 3}
              className="w-full sm:w-[calc(33.333%-10px)] max-w-sm"
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-silver/50 pt-8 mt-10 text-center"
        >
          <p className="text-ink font-medium mb-1">Requires iPhone 13 or later with iOS 16.0+</p>
          <p className="text-slate-text text-sm">
            Recommended: iPhone 14 Pro+ with 6GB+ RAM and 5GB+ free storage
          </p>
        </motion.div>

      </div>
    </section>
  )
}
