"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/portfolio" },
  { name: "Reviews", href: "/reviews" },
  {
    name: "Career",
    href: "/career",
    children: [
      { name: "Jobs", href: "/career/jobs" },
      { name: "Internship", href: "/career/internship" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-md"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <nav
        className="container mx-auto px-1 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex w-full items-center justify-between py-2 sm:py-3 min-w-0">
          <Link href="/" className="flex items-center flex-shrink-0">
            <img 
              src="https://growingwing.net/public/img/growing-logo.png" 
              alt="GrowingWing" 
              className="h-6 sm:h-8 md:h-10 w-auto max-w-[120px] sm:max-w-none" 
              style={{ 
                filter: 'drop-shadow(0 0 0 transparent)',
                mixBlendMode: 'multiply'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:text-orange-600"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.children && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button
              variant="outline"
              size="sm"
              className={`transition-all duration-300 bg-transparent ${
                isScrolled
                  ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                  : "border-white/40 text-white hover:bg-white/20"
              }`}
              asChild
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex-shrink-0 ml-2">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              className={`bg-transparent duration-300 p-1 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t shadow-lg">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-2 sm:px-3 py-2 text-sm sm:text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-3 sm:pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-md"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 sm:pt-4">
                <Button variant="outline" className="w-full text-xs sm:text-sm" asChild>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
