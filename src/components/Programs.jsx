import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Users, BarChart, Award, CheckCircle, Star, PlayCircle, Download } from "lucide-react"

// Course data
const courses = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Master the art of digital marketing with comprehensive training in SEO, SEM, Social Media, and Analytics.",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    image: "/trusted.png",
    rating: 4.8,
    students: "2.5K+",
    modules: [
      "Search Engine Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Google Analytics",
      "Paid Advertising"
    ],
    highlights: [
      "Industry recognized certification",
      "Real-world projects",
      "1-on-1 mentorship",
      "Placement assistance"
    ],
    price: "$599"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Become a full-stack web developer with hands-on training in frontend and backend technologies.",
    duration: "16 Weeks",
    level: "Intermediate",
    image: "/apple.png",
    rating: 4.9,
    students: "3K+",
    modules: [
      "HTML5 & CSS3",
      "JavaScript & ES6+",
      "React.js",
      "Node.js",
      "Database Management",
      "API Development"
    ],
    highlights: [
      "Portfolio development",
      "Live project experience",
      "Industry mentorship",
      "Job placement support"
    ],
    price: "$799"
  },
  {
    id: 3,
    title: "Data Analytics",
    description: "Learn to analyze data and derive meaningful insights using cutting-edge tools and technologies.",
    duration: "14 Weeks",
    level: "Intermediate to Advanced",
    image: "/google.webp",
    rating: 4.7,
    students: "2K+",
    modules: [
      "Python Programming",
      "Statistical Analysis",
      "Data Visualization",
      "Machine Learning Basics",
      "SQL & Database",
      "Business Intelligence"
    ],
    highlights: [
      "Real dataset analysis",
      "Industry projects",
      "Expert guidance",
      "Career support"
    ],
    price: "$699"
  }
]

export function Programs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24">
        <div className="absolute inset-0">
          <Image
            src="/Hero_Banner.png"
            alt="Programs Background"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Industry-Driven{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Professional Programs
              </span>
            </h1>
            <p className="text-lg text-gray-300">
              Transform your career with our cutting-edge courses designed by industry experts.
              Learn practical skills that employers demand.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className={`group mb-24 rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:shadow-xl lg:p-12 
                ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-12`}
            >
              {/* Course Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>

              {/* Course Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600">
                    {course.level}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-gray-600">{course.rating}</span>
                  </div>
                  <span className="text-gray-600">{course.students} students</span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900">{course.title}</h2>
                <p className="text-lg text-gray-600">{course.description}</p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-orange-500" />
                    <span>Live Classes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-orange-500" />
                    <span>Certificate</span>
                  </div>
                </div>

                {/* Course Modules */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Course Modules</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {course.modules.map((module) => (
                      <div key={module} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600">{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Highlights */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Highlights</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {course.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  <Button 
                    size="lg" 
                    className="bg-orange-500 transition-all duration-300 hover:bg-orange-600 hover:scale-105"
                  >
                    Enroll Now
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Watch Preview
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Features */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Our Learning Experience</h2>
            <p className="mt-4 text-gray-300">
              What makes our programs stand out from the rest
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: "Expert Instructors",
                description: "Learn from industry professionals with years of experience"
              },
              {
                icon: <PlayCircle className="h-6 w-6" />,
                title: "Live Classes",
                description: "Interactive sessions with real-time doubt clearing"
              },
              {
                icon: <BarChart className="h-6 w-6" />,
                title: "Practical Projects",
                description: "Work on real-world projects to build your portfolio"
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Job Assistance",
                description: "Get placement support and career guidance"
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-xl bg-gray-800 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-gray-700"
              >
                <div className="mx-auto mb-6 inline-block rounded-lg bg-orange-500 p-3 text-white transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-gray-300">{feature.description}</p>
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
              Download Course Brochure
            </h2>
            <p className="max-w-2xl text-lg text-orange-100">
              Get detailed information about our courses, curriculum, and career opportunities
            </p>
            <Button
              size="lg"
              className="group bg-white text-orange-600 transition-all duration-300 hover:bg-orange-50 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              <span>Get Brochure</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}