"use client"

import Image from 'next/image'
import Link from 'next/link' // Add this import
import { usePathname } from 'next/navigation' // Add this import
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu, X } from 'lucide-react'

// Modify navItems to include paths
const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT US', path: '/about-us' },
  { name: 'OUR PROGRAMS', path: '/programs' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CENTERS', path: '/centers' },
  { name: 'CONTACT US', path: '/contact' }
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/placeholder.svg" alt="DIGIPERFORM Logo" width={200} height={50} />
          </Link>
        </div>
        
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.path} passHref legacyBehavior>
                  <NavigationMenuLink
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-orange-500
                      ${pathname === item.path ? 'text-orange-500' : 'text-gray-300'}`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
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
            className="lg:hidden bg-white"
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
              <Link
                key={item.name}
                href={item.path}
                className={`py-2 transition-colors hover:text-orange-500
                  ${pathname === item.path ? 'text-orange-500' : 'text-gray-300'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}