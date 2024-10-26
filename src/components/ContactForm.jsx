// components/ContactForm.tsx
"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export function ContactForm() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="flex w-full max-w-6xl rounded-lg bg-white shadow-lg">
        {/* Form Section */}
        <div className="w-full space-y-6 p-8 lg:w-1/2">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900">
              Confused? Why not let us help!
            </h1>
            <p className="text-gray-600">
              Get in touch with our Friendly Team. Speak to us for Batches, fee and curriculum.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Your Name*</label>
                <Input 
                  placeholder="Your name"
                  className="w-full rounded-md border bg-gray-50/50 p-2"
                />
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Your Phone*</label>
                <Input 
                  placeholder="Your phone"
                  className="w-full rounded-md border bg-gray-50/50 p-2"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email Address*</label>
                <Input 
                  placeholder="Your email"
                  className="w-full rounded-md border bg-gray-50/50 p-2"
                />
              </div>

              {/* Center Select */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Select Center*</label>
                <Select>
                  <SelectTrigger className="w-full rounded-md border bg-gray-50/50 p-2">
                    <SelectValue placeholder="Kailash Colony" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kailash">Kailash Colony</SelectItem>
                    {/* Add more centers as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Course Select - Full Width */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Select Course*</label>
              <Select>
                <SelectTrigger className="w-full rounded-md border bg-gray-50/50 p-2">
                  <SelectValue placeholder="Annual Program in Digital Marketing" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital-marketing">
                    Annual Program in Digital Marketing
                  </SelectItem>
                  {/* Add more courses as needed */}
                </SelectContent>
              </Select>
            </div>

            <Button 
              className="w-full rounded-md bg-[#FF5722] px-6 py-3 text-white hover:bg-[#F4511E]"
            >
              Get Brochure
            </Button>
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex lg:w-1/2">
          <div className="relative w-full">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#FF5722]/90"></div>
            <img
              src="/Hero_Banner.png"
              alt="Contact"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}