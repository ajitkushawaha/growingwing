"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolio } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

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

export default function PortfolioGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Creative Development Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Blending innovation with functionality to craft powerful digital platforms. 
            Explore a portfolio that reflects excellence across diverse industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content Below Image */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title and Category */}
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900">{project.title}</h4>
                  <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                  {project.description}
                </p>
                
                {/* Button */}
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

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
