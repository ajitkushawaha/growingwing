"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden pt-30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Glowing Lines */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"
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
            className="absolute top-1/3 right-1/4 w-80 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
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
            className="absolute bottom-1/3 left-1/3 w-72 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
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
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-center h-full">
          <div className="text-center max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8"
            >
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-purple-400 fill-current" />
                <span className="text-sm font-medium text-white">Shopify Plus Agency</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Build like the best
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  e-commerce teams
                </span>
                <br />
                on the planet
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              With custom Shopify development, advanced integrations, and the world&apos;s most trusted e-commerce platform, 
              we give your business everything it needs to scale faster and convert better.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  size="lg" 
                  className="group bg-white text-slate-900 hover:bg-slate-100 border-0 shadow-xl px-8 py-4 text-lg font-semibold rounded-lg" 
                  asChild
                >
                  <Link href="/portfolio">
                    Get started
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
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white hover:bg-slate-700/50 shadow-xl px-8 py-4 text-lg font-semibold rounded-lg" 
                  asChild
                >
                  <Link href="/contact">Create a free consultation</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-16 pt-8 border-t border-slate-700/50"
            >
              <p className="text-sm text-slate-400 mb-6">Trusted by leading e-commerce brands</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold text-white">Shopify</div>
                <div className="text-2xl font-bold text-white">Shopify Plus</div>
                <div className="text-2xl font-bold text-white">WooCommerce</div>
                <div className="text-2xl font-bold text-white">Magento</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}