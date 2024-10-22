"use client"

import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X } from 'lucide-react'

const navItems = ['HOME', 'ABOUT US', 'OUR PROGRAMS', 'BLOG', 'CENTERS', 'CONTACT US']

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/placeholder.svg" alt="DIGIPERFORM Logo" width={200} height={50} />
        </div>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink 
                  href="#"
                  className="px-3 py-2 text-sm font-medium hover:text-orange-500 transition-colors"
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Button className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 transition-colors">
            PAY COURSE FEE
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <a key={item} href="#" className="py-2 hover:text-orange-500 transition-colors">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}