import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export function MainContent() {
  return (
    <main className="container mx-auto px-4 py-0">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-orange-500 text-2xl md:text-3xl font-semibold mb-4 animate-pulse">
            2560+ Batches
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-transparent bg-clip-text">
              Asia&apos;s Leading Brand
            </span>
            <br />
            In Digital Career Training
          </h1>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl">
            Advance your career in Data Science and Digital Marketing with the Most trusted brand in Digital Education.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transition-all duration-300 text-lg group">
              View Courses
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-green-600 hover:text-gray-900 transition-colors duration-300 text-lg">
              Book Free Demo
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative mt-8 lg:mt-0">
          <div className="w-full max-w-[500px] aspect-square bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse"></div>
          <div className="relative z-10 mx-auto w-full max-w-[600px]">
            <Image 
              src="/Hero_Banner.png" 
              alt="Student with laptop" 
              width={600} 
              height={600} 
              className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 py-2 px-4 rounded-full shadow-lg text-sm font-semibold">
              Start Learning Today!
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}