"use client"

import { motion } from "framer-motion"
import { clientLogos, integrationPartners } from "@/lib/constants"

export default function ClientLogos() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            Here, we proudly display few of our{" "}
            <span className="gradient-text">50+ clients</span>
          </h2>
          
          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              <div className="flex space-x-12 items-center whitespace-nowrap">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <span className="text-gray-500 font-semibold text-sm">
                      Client {index + 1}
                    </span>
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex space-x-12 items-center whitespace-nowrap ml-12">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 w-32 h-16 bg-gray-200 rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <span className="text-gray-500 font-semibold text-sm">
                      Client {index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integration Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            Integration Partners
          </h2>
          
          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6">
            {integrationPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group"
              >
                <div className="w-16 h-8 bg-gray-100 rounded flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <span className="text-gray-400 text-xs font-medium">
                    {partner.split('/').pop()?.replace('.svg', '')}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
