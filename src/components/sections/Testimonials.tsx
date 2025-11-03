"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2">
            <Star className="h-8 w-8 text-yellow-500" />
            <Star className="h-8 w-8 text-yellow-500" />
            <Star className="h-8 w-8 text-yellow-500" />
            <Star className="h-8 w-8 text-yellow-500" />
            <Star className="h-8 w-8 text-yellow-500" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          What Our Happy Clients Are Saying
          </h2>
         
        </motion.div>

        {/* Video Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 h-1/2 "
        >

          {/* Video 1 */}
          <div className="w-full md:w-1/3 flex flex-col items-center justify-center rounded-2xl bg-gray-200 h-96 ">
            <video
              
              loop
              playsInline
              controls
              className="w-1/2  object-cover group-hover:scale-105 transition-transform duration-500 h-96"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Video 2 */}
          <div className="w-full md:w-1/3 flex items-center justify-center rounded-2xl bg-gray-200 h-96 ">
            <video
              
              loop
              playsInline
              controls
              className="w-1/2  object-cover group-hover:scale-105 transition-transform duration-500 h-96"
            >
              <source src="/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 lg:p-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our Support Team is Best Rated
            </h3>
            <p className="text-lg text-gray-600">
              Because it is super fast, very substantial and high professional.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                <div className="text-xs text-gray-500">Partner {i}</div>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
