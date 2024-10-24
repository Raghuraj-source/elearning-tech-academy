import { Award, Laptop, Search } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: "GET CERTIFIED",
    description: "Our curriculum is built on suggestions from over 450 corporates across Asia. Get certified to add an edge to your CV."
  },
  {
    icon: Laptop,
    title: "AWARD-WINNING LMS",
    description: "Learn through 24*7 interactive LMS with PPTs, Videos, Assignments, Case Studies & Quizzes along with a progress tracker."
  },
  {
    icon: Search,
    title: "MOST IN-DEPTH PROGRAM",
    description: "50+ Modules, 321+ learning hours, followed by 2 online certification tests. A training program that sets a benchmark."
  }
]

export function FeatureCards() {
  return (
    <section className="bg-gray-900  py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#6e0a3c] rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <feature.icon className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}