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
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ease-out will-change-transform ${
        isScrolled
          ? "bg-white/95 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
      style={{ 
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}
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
              className="h-10 sm:h-12 md:h-14 w-auto max-w-[120px] sm:max-w-none" 
              style={{ 
                filter: 'drop-shadow(0 0 0 transparent)',
                mixBlendMode: 'multiply'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />}
                </Link>
                {item.children && (
                  <div className="absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-0 translate-y-2">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-all duration-200 rounded-lg mx-2"
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
              className={`transition-all duration-300 bg-transparent hover:scale-105 ${
                isScrolled
                  ? "border-orange-300 text-orange-600 hover:bg-orange-50 hover:border-orange-400 shadow-sm"
                  : "border-white/40 text-white hover:bg-white/20 hover:border-white/60"
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
              className={`bg-transparent transition-colors duration-200 p-1 ${
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
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-xl">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-all duration-200 hover:scale-105"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  className="w-full text-sm font-medium border-orange-300 text-orange-600 hover:bg-orange-50 hover:border-orange-400 transition-all duration-200 hover:scale-105" 
                  asChild
                >
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
