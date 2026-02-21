'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How is my data kept private?',
      answer: 'Cocoon processes all audio and generates summaries entirely on your device using Metal GPU acceleration. Your conversations never leave your iPhone — not for recording, transcription, summarization, or analysis. There are no servers, no cloud processing, and no data transmission.',
    },
    {
      question: 'Can I use Cocoon without an internet connection?',
      answer: 'Yes! Cocoon works completely offline. Since all AI processing happens on your device, you don\'t need internet for recording, transcription, or summarization. Perfect for flights, remote locations, or any secure environment.',
    },
    {
      question: 'Do I need to create an account?',
      answer: 'No account required. Download Cocoon, tap record, and start transcribing immediately. No sign-up, no login, no email verification. Your meetings are stored locally on your device.',
    },
    {
      question: 'What are the device requirements?',
      answer: 'Minimum: iPhone 13 with iOS 16.0+. Recommended: iPhone 14 Pro or newer with 6GB+ RAM and 5GB+ free storage. The AI models require about 2GB during processing and ~1.9GB of storage space.',
    },
    {
      question: 'Can I share my meetings?',
      answer: 'Absolutely. Export transcripts and summaries as PDF, Markdown, or plain text. Share via Messages, Email, AirDrop, or any app. You decide what to share and with whom.',
    },
  ]

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-ink mb-4 tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-lg text-charcoal">Everything you need to know about Cocoon</p>
        </motion.div>

        <div className="space-y-3" role="list">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              role="listitem"
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-snow/70 border border-silver/60 rounded-xl overflow-hidden"
            >
              <h3>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full px-6 py-5 flex justify-between items-center hover:bg-snow/40 transition-colors text-left"
                >
                  <span className="font-semibold text-ink text-[15px]">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                    className="flex-shrink-0 ml-4 w-6 h-6 rounded-full bg-leaf border border-ink/15 flex items-center justify-center shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 text-ink" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </motion.div>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="border-t border-ink/08"
                  >
                    <p className="px-6 py-5 text-charcoal leading-relaxed text-[15px]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
