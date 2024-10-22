import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { MainContent } from '@/components/MainContent'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="sticky top-0 z-50">
      <Header />
        <Contact />
        
      </div>
      <main className="pt-4">
        <MainContent />
      </main>
    </div>
  )
}