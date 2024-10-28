// components/AboutUs.tsx
import { GraduationCap, Users, Award, Target, CheckCircle, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Data arrays for better maintainability
const stats = [
  { number: "10K+", label: "Students Trained", prefix: "+" },
  { number: "95", label: "Placement Rate", suffix: "%" },
  { number: "50", label: "Industry Partners", prefix: "+" },
  { number: "100", label: "Expert Mentors", prefix: "+" },
]

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/apple.png",
    bio: "15+ years in EdTech",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Michael Chen",
    role: "Head of Academics",
    image: "/apple.png",
    bio: "Former Google Engineer",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Priya Sharma",
    role: "Director of Operations",
    image: "/apple.png",
    bio: "MBA from IIM Ahmedabad",
    linkedin: "#",
    twitter: "#"
  },
]

const features = [
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Industry-Aligned Curriculum",
    description: "Courses designed with input from leading industry experts",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Expert Mentorship",
    description: "Learn from professionals with real-world experience",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Placement Assistance",
    description: "Dedicated team to help you land your dream job",
  },
]

export function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/Hero_Banner.png"
            alt="About Us Hero"
            fill
            priority
            className="object-cover opacity-20 transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="relative flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4">
            <div className="max-w-3xl space-y-6">
              <h1 className="animate-fade-in text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Transforming Careers Through{" "}
                <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                  Digital Education
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-gray-300">
                At SkillVertex, we're dedicated to empowering individuals with cutting-edge digital skills
                and creating the next generation of digital leaders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-orange-500 transition-all duration-300 hover:bg-orange-600 hover:scale-105"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-black transition-all duration-300 hover:bg-white hover:text-pink-500"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Mission */}
            <div className="group space-y-4 rounded-2xl bg-orange-50 p-8 transition-all duration-300 hover:shadow-xl">
              <div className="inline-block rounded-lg bg-orange-100 p-3 transition-transform duration-300 group-hover:scale-110">
                <Target className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, industry-relevant digital education that empowers individuals
                to succeed in the ever-evolving digital landscape. We strive to bridge the gap between
                education and industry requirements.
              </p>
            </div>

            {/* Vision */}
            <div className="group space-y-4 rounded-2xl bg-blue-50 p-8 transition-all duration-300 hover:shadow-xl">
              <div className="inline-block rounded-lg bg-blue-100 p-3 transition-transform duration-300 group-hover:scale-110">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the world's leading platform for digital skills education, creating a
                global community of successful digital professionals who drive innovation and
                transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {stats.map((stat) => (
              <div 
                key={stat.label} 
                className="group text-center transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl font-bold text-orange-600">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  {stat.number}
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>
                <div className="mt-2 text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-orange-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Leadership Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={400}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-orange-600">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.bio}</p>
                  <div className="mt-4 flex space-x-4">
                    <a href={member.linkedin} className="text-gray-400 hover:text-blue-600">
                      LinkedIn
                    </a>
                    <a href={member.twitter} className="text-gray-400 hover:text-blue-400">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Why Choose SkillVertex?</h2>
            <p className="mt-4 text-lg text-gray-300">
              What makes us different from other education providers
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl bg-gray-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-gray-700"
              >
                <div className="mb-6 inline-block rounded-lg bg-orange-500 p-3 text-white transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center space-y-8 text-center">
            <h2 className="text-4xl font-bold text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="max-w-2xl text-lg text-orange-100">
              Join thousands of successful professionals who have transformed their
              careers with SkillVertex
            </p>
            <Button
              size="lg"
              className="group bg-white text-orange-600 transition-all duration-300 hover:bg-orange-50 hover:scale-105"
            >
              <span>Explore Courses</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}