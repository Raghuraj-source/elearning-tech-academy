import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function NewsSection() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-12 text-center">eLearning Tech Academy In The News</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <Image src="/google.webp" alt="Zee Business" width={120} height={40} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <Image src="/visa.png" alt="The Times of India" width={120} height={40} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <Image src="/apple.png" alt="Republic" width={120} height={40} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
          <Image src="/trusted.png" alt="The Tribune" width={120} height={40} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="relative bg-gradient-to-r from-[#b33013] via-[#6e0a3c] to-purple-500 rounded-lg shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <Image src="/trusted.png" alt="Trusted Brand Medal" width={100} height={100} className="mx-auto" />
          </div>
          <div className="text-center mt-8">
            <Button variant="secondary" className="bg-orange-500 text-white mb-6 hover:bg-orange-600 transition-colors">
              Your Path to Digital Success Starts Here
            </Button>
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose eLearning Tech Academy?</h2>
            <p className="text-lg text-gray-300 mb-8">
            eLearning Tech Academy is awarded as the &quot;Most Trusted Brand in Digital Education&quot; by WCRC (Leading Marketing Research Firm and Magazine).
            </p>
            <Button className="bg-white text-[#1E1E1E] hover:bg-gray-200 transition-colors">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}