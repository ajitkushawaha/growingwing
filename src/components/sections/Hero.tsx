"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing Lines */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
            animate={{
              x: [-100, 100, -100],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-80 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
            animate={{
              x: [100, -100, 100],
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
            className="absolute bottom-1/3 left-1/3 w-72 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
            animate={{
              x: [-80, 80, -80],
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

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => {
          // Use deterministic values to avoid hydration mismatch
          const seededRandom = (seed: number) => {
            const x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
          };
          
          const left = seededRandom(i * 0.1) * 100;
          const top = seededRandom(i * 0.1 + 100) * 100;
          const duration = 3 + seededRandom(i * 0.1 + 200) * 2;
          const delay = seededRandom(i * 0.1 + 300) * 2;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/40 rounded-full"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 min-h-screen relative z-10 py-8">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center max-w-xs sm:max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-3 sm:px-6 py-1.5 sm:py-3 mb-4 sm:mb-8"
            >
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-orange-400 fill-current" />
                <span className="text-xs sm:text-sm font-medium text-white">10+ Years of Innovation</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                Digital Marketing
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  That Drives Growth
                </span>
                <br />
                & Results
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm sm:text-lg md:text-xl text-slate-300 max-w-xs sm:max-w-3xl mx-auto mb-6 sm:mb-10 md:mb-12 leading-relaxed px-2"
            >
              We help businesses grow through strategic digital marketing, creative development, and data-driven solutions. 
              From web design to SEO, social media to e-commerce - we&apos;ve got you covered.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center relative z-10 px-2"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  size="lg" 
                  className="group bg-white text-slate-900 hover:bg-slate-100 border-0 shadow-xl px-4 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-lg font-semibold rounded-lg w-full sm:w-auto" 
                  asChild
                >
                  <Link href="/portfolio">
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  size="lg" 
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white hover:bg-slate-700/50 shadow-xl px-4 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-lg font-semibold rounded-lg w-full sm:w-auto" 
                  asChild
                >
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-8 sm:mt-16 pt-4 sm:pt-8 border-t border-slate-700/50"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 text-center px-2">
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-lg sm:text-3xl font-bold text-orange-400">290+</div>
                  <div className="text-xs sm:text-sm text-slate-400">Happy Clients</div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-lg sm:text-3xl font-bold text-orange-400">500+</div>
                  <div className="text-xs sm:text-sm text-slate-400">Projects Completed</div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-lg sm:text-3xl font-bold text-orange-400">96%</div>
                  <div className="text-xs sm:text-sm text-slate-400">Success Rate</div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-lg sm:text-3xl font-bold text-orange-400">24/7</div>
                  <div className="text-xs sm:text-sm text-slate-400">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}