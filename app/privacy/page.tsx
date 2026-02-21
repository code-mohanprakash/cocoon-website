import Image from 'next/image'
import Link from 'next/link'

const sections = [
  { id: 'intro',        label: '1. Introduction' },
  { id: 'architecture', label: '2. Privacy-First Architecture' },
  { id: 'collection',  label: '3. Information We Collect' },
  { id: 'storage',     label: '4. Data Storage & Security' },
  { id: 'models',      label: '5. AI Model Downloads' },
  { id: 'network',     label: '6. Network Activity' },
  { id: 'third-party', label: '7. Third-Party Services' },
  { id: 'permissions', label: '8. Device Permissions' },
  { id: 'sharing',     label: '9. Data Sharing & Disclosure' },
  { id: 'retention',   label: '10. Data Retention & Deletion' },
  { id: 'rights',      label: '11. Your Rights' },
  { id: 'gdpr',        label: '12. European Users (GDPR)' },
  { id: 'ccpa',        label: '13. California Users (CCPA)' },
  { id: 'children',    label: '14. Children\'s Privacy' },
  { id: 'changes',     label: '15. Changes to This Policy' },
  { id: 'contact',     label: '16. Contact Us' },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-snow text-ink">

      {/* Floating glassmorphic nav — matches home page */}
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

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:grid lg:grid-cols-[240px_1fr] lg:gap-16">

        {/* Sidebar TOC — sticky on desktop */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-1">
            <p className="text-xs font-bold text-slate-text tracking-widest uppercase mb-4">Contents</p>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block text-sm text-charcoal hover:text-ink transition-colors py-0.5 hover:translate-x-1 transition-transform"
              >
                {s.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main>
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-leaf/20 border border-leaf-dark/30 px-4 py-1.5 rounded-full mb-6">
              <svg className="w-3.5 h-3.5 text-leaf-dark" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
              </svg>
              <span className="text-xs font-semibold text-ink">Last updated: February 20, 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-charcoal mb-12 max-w-2xl leading-relaxed">
              Your conversations are private and should never leave your device.
              This is not just a policy — it is how Cocoon was built.
            </p>
          </div>

          <div className="prose prose-neutral max-w-none space-y-12">

            <PolicySection id="intro" title="1. Introduction">
              <p>Cocoon ("the App", "we", "us", or "our") is a meeting transcription and AI summarization application available on iOS (iPhone/iPad) and macOS. This Privacy Policy describes how we collect, use, store, and protect your information when you use our App.</p>
              <p>Cocoon is built on a foundational principle: your conversations are private and should never leave your device. We designed every feature around this commitment.</p>
              <p>By downloading or using Cocoon, you agree to this Privacy Policy. If you do not agree, please do not use the App.</p>
            </PolicySection>

            <PolicySection id="architecture" title="2. Our Privacy-First Architecture">
              <p>Cocoon operates entirely on your device. This means:</p>
              <PrivacyList items={[
                'All audio recording and transcription happens locally on your device',
                'All AI-powered summarization runs on-device using embedded machine learning models',
                'Your meeting recordings, transcripts, and summaries are never uploaded to any server',
                'No user accounts are required — optional Sign in with Apple stores only an anonymous identifier in your device\'s Keychain',
                'No advertising networks or analytics SDKs are embedded in the App',
                'No telemetry, usage tracking, or behavioral profiling is performed',
                'The App functions fully offline after the initial one-time model download',
                'Optional iCloud sync (when enabled) uses Apple\'s end-to-end encrypted CloudKit storage — only your devices can read your data',
              ]} />
            </PolicySection>

            <PolicySection id="collection" title="3. Information We Collect">
              <SubHeading>a) Audio Recordings</SubHeading>
              <p>When you use the recording feature, Cocoon captures audio through your device's microphone. This audio is processed in real-time by Apple's on-device speech recognition (SFSpeechRecognizer) and is stored locally on your device. Audio data is never transmitted to any external server or third party.</p>
              <SubHeading>b) Transcripts & AI Summaries</SubHeading>
              <p>Transcripts are generated from your audio using Apple's on-device speech recognition. Summaries, key points, and action items are generated using the on-device LLaMA language model. All AI inference runs locally — no API calls are made to cloud AI services.</p>
              <SubHeading>c) User Profile</SubHeading>
              <p>You may optionally set a display name during onboarding. This is stored locally on your device using UserDefaults and is never transmitted externally.</p>
              <SubHeading>d) Sign in with Apple (Optional)</SubHeading>
              <p>You may optionally sign in with your Apple ID for cross-device sync. Cocoon stores only the anonymous user identifier provided by Apple in your device's Keychain — we never receive or store your email address, name, or Apple ID password. This identifier is used solely to link iCloud sync across your devices.</p>
              <SubHeading>e) App Preferences & Settings</SubHeading>
              <p>Language preferences, theme settings, and other configurations are stored locally on your device using standard platform storage mechanisms (UserDefaults on iOS, UserDefaults on macOS).</p>
              <SubHeading>f) Calendar Data (macOS only)</SubHeading>
              <p>On macOS, Cocoon may request access to your calendar to display upcoming meetings for context. Calendar data is read locally and is never stored, copied, or transmitted by the App.</p>
            </PolicySection>

            <PolicySection id="storage" title="4. Data Storage & Security">
              <p>All meeting data is stored locally on your device using the following protections:</p>
              <PrivacyList items={[
                'Encrypted Storage: Meeting transcripts and summaries are encrypted using AES-256 encryption via Apple\'s CryptoKit framework before being stored in Core Data',
                'Platform Encryption: Data is further protected by iOS/macOS device-level encryption (Data Protection)',
                'No Cloud Backup of Sensitive Data: Session logs and meeting backup directories are excluded from automatic iCloud backup',
                'Local-Only Storage: By default, all data resides exclusively on your device\'s local storage',
                'Optional iCloud Sync: When enabled, meeting data is synced via Apple CloudKit using CKRecord.encryptedValues (end-to-end encrypted). Audio files are only synced if you separately enable audio sync. You can disable sync at any time in Settings',
              ]} />
              <p>You maintain full control over your data and can delete individual meetings or all data at any time through the App's interface.</p>
            </PolicySection>

            <PolicySection id="models" title="5. AI Model Downloads & Hugging Face">
              <p>On first launch, Cocoon downloads one open-source AI model to enable on-device summarization:</p>
              <PrivacyList items={[
                'LLaMA (Summarization) — An open-source language model developed by Meta, downloaded from Hugging Face',
              ]} />
              <p>Speech recognition uses Apple's built-in SFSpeechRecognizer framework — no additional download is required for transcription.</p>
              <p>The LLaMA model is downloaded once over HTTPS from Hugging Face (huggingface.co), a trusted open-source AI model repository. After download, the model is stored locally and all AI processing happens entirely offline.</p>
              <p>During the download, Hugging Face and its infrastructure providers may automatically collect connection metadata including IP address, device information, and download request metadata. Cocoon does not send any personal data, user accounts, app usage data, or meeting content to Hugging Face.</p>
              <p>For full details, see Hugging Face's Privacy Policy at{' '}
                <a href="https://huggingface.co/privacy" className="text-leaf-dark hover:text-ink underline" target="_blank" rel="noopener noreferrer">
                  huggingface.co/privacy
                </a>.
              </p>
            </PolicySection>

            <PolicySection id="network" title="6. Network Activity">
              <p>Cocoon makes network requests only in the following limited circumstances:</p>
              <PrivacyList items={[
                'Model Downloads: One-time HTTPS downloads from Hugging Face to retrieve AI model files during initial setup',
                'iCloud Sync (Optional): When enabled, Cocoon uses Apple CloudKit to sync meeting data between your devices. All data is end-to-end encrypted — Apple cannot read your meeting content',
              ]} />
              <p>After models are downloaded and aside from optional iCloud sync, Cocoon requires no internet connection.</p>
            </PolicySection>

            <PolicySection id="third-party" title="7. Third-Party Services">
              <p><strong>Hugging Face</strong> — Used exclusively for the one-time download of open-source AI model files.</p>
              <p><strong>Apple iCloud (Optional)</strong> — When iCloud sync is enabled, meeting data uses end-to-end encryption. Apple cannot read your meeting content.</p>
              <p>Cocoon does <strong>not</strong> integrate any of the following:</p>
              <PrivacyList variant="cross" items={[
                'Advertising networks or ad SDKs',
                'Analytics or telemetry services (Google Analytics, Firebase, Mixpanel)',
                'Crash reporting services (Crashlytics, Sentry)',
                'Social media SDKs',
                'Attribution or tracking frameworks',
              ]} />
            </PolicySection>

            <PolicySection id="permissions" title="8. Device Permissions">
              <PrivacyList items={[
                'Microphone (Required): Used to record meeting audio for transcription. Audio is processed and stored locally.',
                'Sign in with Apple (Optional): Used for cross-device sync identity. Only an anonymous identifier is stored in your Keychain. Your email, name, and Apple ID password are never accessed or stored by the App.',
                'iCloud (Optional): When enabled, syncs meeting data across devices using end-to-end encryption.',
                'Calendar (macOS only, Optional): Used to display upcoming meetings for context. Never stored or transmitted.',
              ]} />
            </PolicySection>

            <PolicySection id="sharing" title="9. Data Sharing & Disclosure">
              <p>We do not share, sell, rent, trade, or transfer your personal data to any third party. Since all data remains on your device and we have no access to it, there is no data for us to share.</p>
            </PolicySection>

            <PolicySection id="retention" title="10. Data Retention & Deletion">
              <PrivacyList items={[
                'On-Device Data: Retained until you choose to delete it',
                'iCloud Data: Synced if enabled; removed when you delete meetings in the App',
                'Complete Removal: Uninstalling the App removes all locally stored data',
              ]} />
            </PolicySection>

            <PolicySection id="rights" title="11. Your Rights">
              <PrivacyList items={[
                'Access: View all recordings, transcripts, and summaries directly in the App',
                'Delete: Remove any individual meeting or all data at any time',
                'Export: Export transcripts and summaries for personal use',
                'Revoke Permissions: Disable microphone access at any time via system settings',
              ]} />
            </PolicySection>

            <PolicySection id="gdpr" title="12. European Users (GDPR)">
              <p>If you are located in the EEA, UK, or Switzerland, you have rights under GDPR including data minimization, right to erasure, and no international data transfers. Your data never leaves your device.</p>
            </PolicySection>

            <PolicySection id="ccpa" title="13. California Users (CCPA/CPRA)">
              <p>California residents have rights including the right to know, right to delete, and right to opt-out of sale. We do not sell your personal information and have never done so.</p>
            </PolicySection>

            <PolicySection id="children" title="14. Children's Privacy">
              <p>Cocoon is not directed at children under 13 (or 16 in the EEA). We do not knowingly collect personal information from children.</p>
            </PolicySection>

            <PolicySection id="changes" title="15. Changes to This Policy">
              <p>We may update this Privacy Policy to reflect changes in our practices or applicable laws. When we make changes, we will update the "Last updated" date. Continued use of the App after changes constitutes acceptance.</p>
            </PolicySection>

            <PolicySection id="contact" title="16. Contact Us">
              <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
              <p><strong>Email:</strong>{' '}
                <a href="mailto:mohanprakash462@gmail.com" className="text-leaf-dark hover:text-ink underline">
                  mohanprakash462@gmail.com
                </a>
              </p>
            </PolicySection>

          </div>

          {/* Back to home CTA */}
          <div className="mt-16 pt-10 border-t border-silver/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-ink">Cocoon</p>
              <p className="text-sm text-slate-text">© 2026 Cocoon. All conversations are yours alone.</p>
            </div>
            <Link
              href="/"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to home
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}

function PolicySection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-bold text-ink mb-4 pb-2 border-b border-silver/40">{title}</h2>
      <div className="space-y-3 text-charcoal leading-relaxed">{children}</div>
    </section>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-ink mt-4 mb-1">{children}</h3>
}

function PrivacyList({ items, variant = 'check' }: { items: string[]; variant?: 'check' | 'cross' }) {
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-xs font-bold
            ${variant === 'check' ? 'bg-leaf border border-ink/15 text-ink' : 'bg-red-100 text-red-600'}`}>
            {variant === 'check' ? '✓' : '✕'}
          </span>
          <span className="text-charcoal text-sm">{item}</span>
        </li>
      ))}
    </ul>
  )
}
