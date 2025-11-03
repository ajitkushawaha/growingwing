"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { portfolio } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Filter, Star } from "lucide-react"
import Link from "next/link"

// Function to get the actual project URLs from GrowingWing website
const getProjectUrl = (projectId: string) => {
  const projectUrls: { [key: string]: string } = {
    "aimsindia": "https://aimsindia.com",
    "chef-supplies-hub": "https://chefsupplies.ca",
    "copper-kitchen-store": "https://copperkitchenstore.com",
    "ramkrushna-developers": "https://ramkrushnadevelopers.com",
    "healing-with-roohi": "https://healingwithroohi.com",
    "loutas": "https://www.lotusdigitalsystems.com",
    "royaliij": "https://royaliij.com",
    "dentician": "https://dentician.com",
    "printer-dekho": "https://printerdekho.com",
    "projector-dekho": "https://projectordekho.com",
    "tongue-tie-india": "https://tonguetieindia.com",
    "yellowframes-media": "https://yellowframesmedia.com",
    "britime": "https://britime.in"
  };
  
  return projectUrls[projectId] || `https://${projectId}.com`;
};

const categories = ["All", "Electronics", "Health & Beauty", "Food & Beverage", "Real Estate", "Education"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showFilters, setShowFilters] = useState(false)

  const filteredPortfolio = selectedCategory === "All" 
    ? portfolio 
    : portfolio.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[80vh] sm:min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-16 sm:pt-20 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Glowing Lines */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
              animate={{
                x: [-50, 50, -50],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-48 sm:w-80 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
              animate={{
                x: [50, -50, 50],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/3 w-40 sm:w-72 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
              animate={{
                x: [-40, 40, -40],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>

          {/* Floating Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-4 h-4 bg-orange-400/20 rounded-full"
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-blue-400/20 rounded-full"
            animate={{
              y: [20, -20, 20],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400/20 rounded-full"
            animate={{
              y: [-15, 15, -15],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        <div className="container mx-auto px-2 sm:px-6 lg:px-8 h-full flex items-center py-4 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-xs sm:max-w-4xl mx-auto text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-3 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
            >
              <Star className="h-5 w-5 text-orange-400" />
              <span className="text-orange-200 font-semibold">Portfolio Showcase</span>
            </motion.div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Creative</span> Projects
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-3xl mx-auto px-2">
              With our Shopify development expertise, each client associated with us has given us positive feedback, 
              and tons of appreciation. Here is the showcase of a few of our works:
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-8"
            >
              <span className="text-white font-semibold">Best business strategy of all times:</span>
              <span className="text-orange-300 font-bold">100% CUSTOMER SATISFACTION</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            >
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-orange-500 border-orange-500 bg-transparent hover:bg-orange-500 hover:text-white transition-colors" asChild>
                <Link href="#portfolio-grid">View Projects</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-900">Filter by Category:</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Desktop Filters */}
            <div className="hidden lg:flex space-x-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedCategory(category)
                      setShowFilters(false)
                    }}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section id="portfolio-grid" className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                    <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-orange-50 group-hover:border-orange-300 transition-colors" asChild>
                      <Link href={getProjectUrl(project.id)} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Project
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredPortfolio.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-6">Try selecting a different category to see more projects.</p>
              <Button onClick={() => setSelectedCategory("All")}>
                Show All Projects
              </Button>
            </motion.div>
          )}

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-lg">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let&apos;s work together to create something amazing for your business. 
                Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
