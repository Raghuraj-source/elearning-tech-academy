
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">eLearning Tech Academy</h3>
            <p className="text-sm leading-relaxed">
              Empowering careers through cutting-edge digital education. Join our community of successful professionals and transform your future.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="rounded-full bg-gray-700 p-2 transition-colors hover:bg-orange-500"
              >
                <Facebook size={20} />
              </Link>
              <Link 
                href="#" 
                className="rounded-full bg-gray-700 p-2 transition-colors hover:bg-orange-500"
              >
                <Instagram size={20} />
              </Link>
              <Link 
                href="#" 
                className="rounded-full bg-gray-700 p-2 transition-colors hover:bg-orange-500"
              >
                <Twitter size={20} />
              </Link>
              <Link 
                href="#" 
                className="rounded-full bg-gray-700 p-2 transition-colors hover:bg-orange-500"
              >
                <Linkedin size={20} />
              </Link>
              <Link 
                href="#" 
                className="rounded-full bg-gray-700 p-2 transition-colors hover:bg-orange-500"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Courses', 'Success Stories', 'Blog', 'Career', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-sm transition-colors hover:text-orange-500"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Popular Courses</h4>
            <ul className="space-y-2">
              {[
                'Digital Marketing Course',
                'Web Development Program',
                'Data Analytics',
                'UI/UX Design',
                'Content Writing',
                'SEO Specialization'
              ].map((course) => (
                <li key={course}>
                  <Link 
                    href="#" 
                    className="text-sm transition-colors hover:text-orange-500"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />
                <span className="text-sm">
                Phase 2, I, 11, Pocket D, Chattarpur Enclave, 
                  <br />
                  Chhatarpur, New Delhi, Delhi 110074
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-orange-500" />
                <span className="text-sm">+91 6366666760</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-orange-500" />
                <span className="text-sm">info@elearning.org.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
            <div className="max-w-md space-y-2">
              <h5 className="text-lg font-semibold text-white">Subscribe to Our Newsletter</h5>
              <p className="text-sm">Stay updated with latest courses and digital trends</p>
            </div>
            <div className="flex w-full max-w-md space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg bg-gray-800 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="rounded-lg bg-orange-500 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col items-center justify-between space-y-4 text-sm md:flex-row md:space-y-0">
            <div className="flex flex-wrap items-center justify-center space-x-4 md:justify-start">
              <span>© 2024 eLearningTechAcademy. All rights reserved.</span>
              <Link href="#" className="hover:text-orange-500">Privacy Policy</Link>
              <Link href="#" className="hover:text-orange-500">Terms of Service</Link>
            </div>
            <div className="text-center md:text-right">
              <span>Designed with ❤️ for aspiring professionals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}