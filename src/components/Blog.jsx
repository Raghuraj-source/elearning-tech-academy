// components/Blog.tsx
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Clock, 
  User, 
  Tag, 
  ChevronRight, 
  Search,
  Calendar,
  ArrowRight,
  BookOpen
} from "lucide-react"

// Blog data
const featuredPosts = [
  {
    id: 1,
    title: "The Future of Digital Marketing in 2024",
    excerpt: "Explore the latest trends and technologies shaping the digital marketing landscape.",
    image: "/blog/digital-marketing-trends.jpg",
    category: "Digital Marketing",
    author: {
      name: "Sarah Johnson",
      avatar: "/team/sarah.jpg",
      role: "Marketing Director"
    },
    date: "Mar 15, 2024",
    readTime: "8 min read",
    tags: ["Marketing", "AI", "Social Media"]
  },
  {
    id: 2,
    title: "Top Programming Languages to Learn in 2024",
    excerpt: "A comprehensive guide to the most in-demand programming languages for developers.",
    image: "/blog/programming-languages.jpg",
    category: "Web Development",
    author: {
      name: "Michael Chen",
      avatar: "/team/michael.jpg",
      role: "Lead Developer"
    },
    date: "Mar 12, 2024",
    readTime: "10 min read",
    tags: ["Programming", "Career", "Technology"]
  }
]

const recentPosts = [
  {
    id: 3,
    title: "Mastering Data Analytics: A Beginner&apos;s Guide",
    excerpt: "Learn the fundamentals of data analytics and start your journey in this exciting field.",
    image: "/blog/data-analytics.jpg",
    category: "Data Analytics",
    author: {
      name: "Priya Sharma",
      avatar: "/team/priya.jpg",
      role: "Data Scientist"
    },
    date: "Mar 10, 2024",
    readTime: "6 min read",
    tags: ["Data Science", "Analytics", "Career"]
  },
  // Add more posts...
]

const categories = [
  { name: "Digital Marketing", count: 15 },
  { name: "Web Development", count: 23 },
  { name: "Data Analytics", count: 18 },
  { name: "Career Advice", count: 12 },
  { name: "Industry News", count: 8 },
  { name: "Student Success", count: 10 }
]

const popularTags = [
  "Marketing",
  "Programming",
  "Data Science",
  "Career",
  "Technology",
  "AI",
  "Web Design",
  "SEO",
  "Analytics"
]

export function Blog() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-24">
        <div className="absolute inset-0">
          <Image
            src="/blog-hero.jpg"
            alt="Blog Hero"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Insights &{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-lg text-gray-300">
              Stay updated with the latest trends, tips, and insights in digital education
              and technology.
            </p>
            
            {/* Search Bar */}
            <div className="relative mt-8">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full rounded-full bg-white py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Search articles..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-gray-900">Featured Articles</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            {featuredPosts.map((post) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="mr-1 h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-orange-600">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-gray-600">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{post.author.name}</p>
                        <p className="text-sm text-gray-500">{post.author.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Posts */}
            <div className="lg:col-span-2">
              <h2 className="mb-8 text-2xl font-bold text-gray-900">Recent Articles</h2>
              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex flex-col gap-6 sm:flex-row">
                      <div className="relative aspect-[16/9] w-full sm:w-48 overflow-hidden rounded-lg">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-600">
                            {post.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="mr-1 h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-orange-600">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-gray-600">{post.excerpt}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                            <span className="text-sm text-gray-600">{post.author.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <Button
                className="mt-12 w-full bg-orange-500 transition-all duration-300 hover:bg-orange-600"
              >
                Load More Articles
              </Button>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href="#"
                      className="flex items-center justify-between rounded-lg p-2 transition-colors duration-200 hover:bg-orange-50"
                    >
                      <span className="text-gray-600">{category.name}</span>
                      <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-600">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Link
                      key={tag}
                      href="#"
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 transition-colors duration-200 hover:bg-orange-100 hover:text-orange-600"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="rounded-xl bg-gray-900 p-6 text-white">
                <h3 className="mb-2 text-xl font-bold">Subscribe to Newsletter</h3>
                <p className="mb-4 text-gray-300">
                  Get the latest articles and insights straight to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mb-4 w-full rounded-lg bg-gray-800 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <Button className="w-full bg-orange-500 transition-all duration-300 hover:bg-orange-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-pink-600 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center space-y-8 text-center">
            <h2 className="text-4xl font-bold text-white">
              Start Your Learning Journey
            </h2>
            <p className="max-w-2xl text-lg text-orange-100">
              Explore our courses and transform your career with industry-relevant skills
            </p>
            <Button
              size="lg"
              className="group bg-white text-orange-600 transition-all duration-300 hover:bg-orange-50 hover:scale-105"
            >
              <span>Browse Courses</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}