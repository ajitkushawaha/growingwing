"use client"

import { motion } from "framer-motion"
import { services } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { 
  Code, 
  Store, 
  Palette, 
  ArrowRightLeft, 
  ShoppingCart, 
  Zap,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const iconMap = {
  Code,
  Store,
  Palette,
  ArrowRightLeft,
  ShoppingCart,
  Zap,
}

export default function Services() {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Specialized Services for Your{" "}
            <span className="gradient-text">Shopify Store</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive Shopify solutions to help your e-commerce business 
            grow and succeed in the competitive online marketplace.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="pt-4 mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors"
                      asChild
                    >
                      <Link href={`/services/${service.id}`}>
                        Quote Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 lg:p-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Meeting Your Shopify Development needs is our priority
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Where there is technology, there is prosperity. We know how to utilize the skills, 
              knowledge, and wisdom of our team to deliver the best Shopify development services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">✓</span>
                </div>
                <p className="font-semibold text-gray-900">Quality comes first</p>
                <p className="text-sm text-gray-600">our team never compromises on standards</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">✓</span>
                </div>
                <p className="font-semibold text-gray-900">Happy clients</p>
                <p className="text-sm text-gray-600">bring us new opportunities and growth</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <p className="font-semibold text-gray-900">We meet deadlines</p>
                <p className="text-sm text-gray-600">and deliver exactly what we promise</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/portfolio">See Details</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
