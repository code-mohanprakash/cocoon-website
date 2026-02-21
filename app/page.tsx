'use client'

import { useEffect, useState, useCallback } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorks from '@/components/HowItWorks'
import TechSection from '@/components/TechSection'
import FAQ from '@/components/FAQ'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <>
      <a href="#main-content" className="skip-nav">Skip to content</a>
      <main id="main-content" className="min-h-screen">
        <Navigation isScrolled={isScrolled} />
        <Hero scrollY={scrollY} />
        <FeaturesSection />
        <HowItWorks />
        <TechSection />
        <FAQ />
        <DownloadSection />
        <Footer />
      </main>
    </>
  )
}
