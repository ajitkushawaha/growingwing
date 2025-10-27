import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/portfolio" },
  { name: "Reviews", href: "/reviews" },
  { name: "Careers", href: "/career" },
  { name: "Contact Us", href: "/contact" },
  { name: "Get a Quote", href: "/contact" },
]

const services = [
  { name: "Custom Apps & Integrations", href: "/services/custom-apps" },
  { name: "Store Build/Redesign", href: "/services/store-build" },
  { name: "Theme Customization", href: "/services/theme-customization" },
  { name: "Store Migration", href: "/services/store-migration" },
  { name: "Product Page Enhancements", href: "/services/product-enhancements" },
  { name: "Speed Optimization", href: "/services/speed-optimization" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <Link href="/" className="flex items-center mb-3">
                <Image 
                  src="/logo.png" 
                  alt="GrowingWing" 
                  width={200}
                  height={50}
                  className="h-12 w-auto max-w-[200px]"
                  style={{ 
                    filter: 'brightness(0) invert(1)',
                  }}
                />
              </Link>
              <p className="text-gray-300 mt-2">
                Certified Shopify Plus Agency specializing in custom themes, apps, 
                migrations, and CRO to help brands scale and boost conversions.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/growingwingtech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/growingwingtech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/growing-wings-technology-017928128/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/growingwingtech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">+91-9811771263</p>
                  <p className="text-sm text-gray-400">Mon-Sat | 9AM–9PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">info@growingwing.com</p>
                  <p className="text-sm text-gray-400">Online Support</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">Sector 18, Noida, India</p>
                  <p className="text-sm text-gray-400">Office Address</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 Growing Wing Technology | Growingwing.com
            </p>
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Refund & Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
