"use client"

import { motion } from "framer-motion"
import { testimonials } from "@/lib/constants"
import { Star, Quote, ThumbsUp, Award, Users } from "lucide-react"
import Link from "next/link"

export default function ReviewsPage() {
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8"
            >
              <Star className="h-5 w-5 text-orange-400" />
              <span className="text-orange-200 font-semibold">Client Reviews</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              Client <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Reviews</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              What our clients say about us - reviews of our clients
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center justify-center space-x-2 text-yellow-400 mb-8"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-current" />
              ))}
              <span className="ml-2 text-lg font-semibold text-white">4.9/5 Average Rating</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            >
              <Link href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center">
                Get Started Today
              </Link>
              <Link href="/portfolio" className="border-2 border-orange-400 text-orange-400 bg-transparent px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-colors inline-block text-center">
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { icon: <Star className="h-8 w-8 text-yellow-500" />, value: "4.9/5", label: "Average Rating" },
              { icon: <Users className="h-8 w-8 text-orange-500" />, value: "290+", label: "Happy Clients" },
              { icon: <ThumbsUp className="h-8 w-8 text-green-500" />, value: "96%", label: "Satisfaction Rate" },
              { icon: <Award className="h-8 w-8 text-purple-500" />, value: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-100 group-hover:text-blue-200 transition-colors">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed text-lg">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Reviews Section */}
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
              More Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our support team is best rated. Because it is super fast, very substantial and high professional.
            </p>
          </motion.div>

          {/* Additional Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "E-commerce Manager",
                company: "Fashion Forward",
                content: "GrowingWing transformed our online store completely. The conversion rate increased by 60% and our revenue doubled within 6 months. Highly recommended!",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "CEO",
                company: "TechGear Solutions",
                content: "The team's expertise in Shopify development is unmatched. They delivered our project on time and exceeded all our expectations. Great work!",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director",
                company: "Beauty Essentials",
                content: "Working with GrowingWing was a game-changer for our business. Their attention to detail and customer service is outstanding.",
                rating: 5
              },
              {
                name: "David Kim",
                role: "Founder",
                company: "Sports Central",
                content: "The migration from our old platform to Shopify was seamless. GrowingWing made the entire process smooth and stress-free.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let&apos;s work together to create amazing results for your business. 
              We&apos;re committed to your success and satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
                View Our Work
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
