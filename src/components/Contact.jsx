import { Mail, Phone } from 'lucide-react'

export function Contact() {
  return (
    <div className="bg-gray-600 py-2 text-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-2 md:mb-0">
          <Phone className="mr-2" size={16} />
          <span>Quick Helpline : +91 6526-611-565</span>
        </div>
        <div className="flex items-center">
          <Mail className="mr-2" size={16} />
          <span>Contact us: contact@elearningtechacademy.com</span>
        </div>
      </div>
    </div>
  )
}