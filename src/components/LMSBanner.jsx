'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function LMSBanner() {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-48 sm:w-96 h-48 sm:h-96 -top-24 sm:-top-48 -left-24 sm:-left-48 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute w-48 sm:w-96 h-48 sm:h-96 -bottom-24 sm:-bottom-48 -right-24 sm:-right-48 bg-blue-500 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 z-10">
            {/* Badge */}
            <div className="inline-block hover:scale-105 transition-transform">
              <span className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium shadow-lg shadow-orange-500/20">
                Theory, Live Practical & Implementation
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Award Winning LMS –{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                DOLMS!
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed">
              High-quality explainer videos of all topics. Learn on desktop or mobile-based on 
              preferences also you can track your learning progress with SMART tracker.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <div className="w-full sm:w-auto">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  Watch the Video
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Button>
              </div>

              <div className="w-full sm:w-auto">
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-gray-700 text-gray-300 hover:bg-gray-800 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base lg:text-lg font-semibold transition-all hover:scale-105 active:scale-95"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] perspective-1000">
              {/* Annual Certificate Card */}
              <div className="absolute right-0 top-0 w-[80%] sm:w-[70%] lg:w-[80%] max-w-[400px] transition-transform hover:translate-y-[-10px]">
                <Card className="bg-white/10 backdrop-blur-lg border-0 shadow-2xl">
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-full w-20 sm:w-28 h-20 sm:h-28 mx-auto">
                      {/* Profile image here */}
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Advanced</h3>
                      <p className="text-sm sm:text-base text-orange-400 font-semibold">
                        ANNUAL CERTIFICATE PROGRAM
                      </p>
                      <p className="text-xs sm:text-sm text-gray-300">
                        in Digital Marketing
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* 3 Years Card */}
              <div className="absolute left-0 bottom-0 w-[80%] sm:w-[70%] lg:w-[80%] max-w-[400px] transition-transform hover:translate-y-[-10px]">
                <Card className="overflow-hidden">
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <span className="text-3xl sm:text-5xl font-bold text-white">3</span>
                        <div className="text-white">
                          <p className="text-lg sm:text-2xl font-bold">YEARS</p>
                          <p className="text-xs sm:text-sm text-blue-200">Experience</p>
                        </div>
                      </div>
                      <p className="text-lg sm:text-xl text-white font-semibold mt-2 sm:mt-4">
                        Are You Aware?
                      </p>
                      <div className="flex gap-2 mt-2 sm:mt-4">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/50" />
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: "Interactive Learning",
    description: "Engage with hands-on exercises and real-world projects.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Track Progress",
    description: "Monitor your learning journey with advanced analytics.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Expert Support",
    description: "Get help from industry professionals whenever needed.",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
]