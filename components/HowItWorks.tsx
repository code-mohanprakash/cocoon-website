'use client'

import { motion } from 'framer-motion'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Record',
      description: 'Tap to start recording. Watch the live waveform as audio is captured securely on your device.',
      icon: (
        <svg className="w-7 h-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Transform',
      description: 'AI instantly transcribes your meeting with speaker detection. Review in real-time or later.',
      icon: (
        <svg className="w-7 h-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Understand',
      description: 'Get smart summaries, extract action items, and chat with your transcript. All offline.',
      icon: (
        <svg className="w-7 h-7" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="how" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-ink mb-4 tracking-tight">
              How Cocoon works
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              From recording to insights — powered by advanced on-device AI
            </p>
          </motion.div>

          <ol className="grid md:grid-cols-3 gap-8 md:gap-6 relative list-none">
            {/* Connecting line (desktop) */}
            <div aria-hidden="true" className="hidden md:block absolute top-14 left-[20%] right-[20%] h-[2px] bg-leaf/40 rounded-full" />

            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-leaf border-2 border-ink/15 flex items-center justify-center text-ink relative z-10 shadow-sm"
                >
                  {step.icon}
                </motion.div>

                <p className="text-xs font-bold text-slate-text tracking-widest uppercase mb-2">{step.number}</p>
                <h3 className="text-xl font-bold text-ink mb-3">{step.title}</h3>
                <p className="text-charcoal leading-relaxed text-sm max-w-xs mx-auto">{step.description}</p>
              </motion.li>
            ))}
          </ol>
      </div>
    </section>
  )
}
