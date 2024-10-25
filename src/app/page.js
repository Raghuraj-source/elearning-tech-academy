'use client'
import Certified from '@/components/Certified'
import { Contact } from '@/components/Contact'
import { FeatureCards } from '@/components/FeatureCards'
import { Header } from '@/components/Header'
import LMSBanner from '@/components/LMSBanner'
// import { HeroSection } from '@/components/HeroSection'
import { MainContent } from '@/components/MainContent'
import { NewsSection } from '@/components/NewsSection'
// import { ChatWidget } from '@/components/ChatWidget'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="sticky top-0 z-50">
        <Contact />
        <Header />
      </div>
      <main>
        <MainContent />
        <NewsSection />
        <FeatureCards />
        <LMSBanner />
        <Certified />

      </main>
      
    </div>
  )
}