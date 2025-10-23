"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Briefcase, GraduationCap, Star } from "lucide-react"

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              <span className="text-orange-200 font-semibold">Join Our Team</span>
            </motion.div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
              Work With <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Us</span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-3xl mx-auto px-2">
              Join our team of talented professionals and help us build amazing digital experiences
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-8"
            >
              <span className="text-white font-semibold">Career Opportunities:</span>
              <span className="text-orange-300 font-bold">GROW WITH US</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            >
              <Button size="lg" variant="secondary" asChild>
                <Link href="/career/jobs">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-orange-400 border-orange-400 bg-transparent hover:bg-orange-500 hover:text-white transition-colors" asChild>
                <Link href="/career/internship">
                  Explore Internships
                  <GraduationCap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose GrowingWing?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re a certified Shopify Plus Agency specializing in custom themes, apps, migrations, and CRO to help brands scale and boost conversions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Environment</h3>
                <p className="text-gray-600">
                  Work with talented professionals in a supportive and collaborative environment that encourages growth and innovation.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Exciting Projects</h3>
                <p className="text-gray-600">
                  Work on diverse and challenging projects for clients across various industries, helping them scale their businesses.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                  Stay updated with the latest technologies and trends in e-commerce and web development through our learning programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Explore Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Full-Time Positions</h3>
                <p className="text-gray-600 mb-6">
                  Join our team in various roles including development, design, marketing, and business development.
                </p>
                <Button asChild>
                  <Link href="/career/jobs">View All Jobs</Link>
                </Button>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Internship Program</h3>
                <p className="text-gray-600 mb-6">
                  Gain hands-on experience and learn from industry experts in our comprehensive internship program.
                </p>
                <Button asChild>
                  <Link href="/career/internship">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don&apos;t see a position that matches your skills? We&apos;re always looking for talented individuals to join our team.
            </p>
            <Button size="lg" variant="outline-white" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
