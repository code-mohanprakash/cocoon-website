import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// next/font downloads Inter at build time and serves it from your own domain.
// Zero external requests to fonts.googleapis.com or fonts.gstatic.com.
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cocoonapp.com'),
  title: 'Cocoon — Private AI Meeting Transcriber',
  description: 'Record meetings. Get AI summaries. 100% on-device, no cloud, no account. Your conversations stay yours.',
  openGraph: {
    title: 'Cocoon — Private AI Meeting Transcriber',
    description: '100% on-device AI for meeting transcription & summaries. No cloud. No account. Complete privacy.',
    type: 'website',
    locale: 'en_US',
    url: 'https://cocoonapp.com',
    siteName: 'Cocoon',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F5F1E8',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
      </head>
      <body className="bg-snow text-ink">
        {children}
      </body>
    </html>
  )
}
