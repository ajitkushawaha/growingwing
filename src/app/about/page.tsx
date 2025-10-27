"use client"

import { motion } from "framer-motion"
import { stats } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Zap
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-[80vh] sm:min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-16 sm:pt-20 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Glowing Lines */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 sm:w-64 sm:w-96 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
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
              className="absolute top-1/3 right-1/4 w-48 sm:w-48 sm:w-80 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
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
              className="absolute bottom-1/3 left-1/3 w-40 sm:w-40 sm:w-72 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
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
              <span className="text-orange-200 font-semibold">About Our Company</span>
            </motion.div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
              About <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">GrowingWing</span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-3xl mx-auto px-2">
              We specialize in Shopify store development, customization, and optimization to help your e-commerce business 
              grow and succeed in the competitive online marketplace.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-8 py-2 sm:py-4 mb-6 sm:mb-8"
            >
              <span className="text-white font-semibold">Our Mission:</span>
              <span className="text-orange-300 font-bold">GROW YOUR BUSINESS</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center relative z-10 px-2"
            >
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-orange-400 border-orange-400 bg-transparent hover:bg-orange-500 hover:text-white transition-colors" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission Is To Take Your Business To The Next Level
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide comprehensive Shopify solutions including custom app development, store setup, theme customization, 
                store migration, and performance optimization to help your e-commerce business thrive.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experienced Shopify professionals combines technical expertise with creative vision 
                to deliver solutions that not only meet but exceed our clients&apos; expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Strategic Planning</h3>
                    <p className="text-sm text-gray-600">Data-driven strategies for growth</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Growth Focused</h3>
                    <p className="text-sm text-gray-600">Results that drive business growth</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Reliable Support</h3>
                    <p className="text-sm text-gray-600">24/7 support and maintenance</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-6 w-6 text-yellow-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
                    <p className="text-sm text-gray-600">Quick turnaround times</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose GrowingWing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-green-600" />,
                title: "Quality First",
                description: "Our team never compromises on standards. We deliver high-quality solutions that exceed expectations."
              },
              {
                icon: <Users className="h-8 w-8 text-orange-600" />,
                title: "Client Satisfaction",
                description: "Happy clients bring us new opportunities and growth. We prioritize long-term relationships."
              },
              {
                icon: <Clock className="h-8 w-8 text-purple-600" />,
                title: "On-Time Delivery",
                description: "We meet deadlines and deliver exactly what we promise, every single time."
              },
              {
                icon: <Award className="h-8 w-8 text-yellow-600" />,
                title: "Expert Team",
                description: "Our professionals bring years of experience and expertise to every project."
              },
              {
                icon: <Star className="h-8 w-8 text-orange-600" />,
                title: "Proven Results",
                description: "We have a track record of successful projects and satisfied clients across various industries."
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-green-600" />,
                title: "Growth Focused",
                description: "Our solutions are designed to help your business grow and scale effectively."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let&apos;s work together to take your Shopify store to the next level with our expert 
              Shopify development and optimization services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-orange-500 border-orange-500 bg-transparent hover:bg-orange-500 hover:text-white transition-colors" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
