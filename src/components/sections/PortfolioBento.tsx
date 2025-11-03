"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

export default function PortfolioBento() {
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
            Blending innovation with functionality to craft powerful digital platforms. Explore a portfolio that reflects excellence across diverse industries.
          </p>
        </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {/* Large featured project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 lg:col-span-2 lg:row-span-2"
      >
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={portfolioItems[0].image}
            alt={portfolioItems[0].title}
            width={600}
            height={320}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Content Below Image */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{portfolioItems[0].title}</h3>
            <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-4 py-2 rounded-full">
              {portfolioItems[0].category}
            </span>
          </div>
          
          <p className="text-gray-600 mb-6 line-clamp-3">
            {portfolioItems[0].description}
          </p>
          
          <Button variant="outline" size="lg" className="w-full group-hover:bg-orange-50 group-hover:border-orange-300 transition-colors" asChild>
            <Link href={getProjectUrl(portfolioItems[0].id)} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit Project
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Medium project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 lg:col-span-2"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={portfolioItems[1].image}
            alt={portfolioItems[1].title}
            width={600}
            height={192}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        {/* Content Below Image */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-gray-900">{portfolioItems[1].title}</h3>
            <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              {portfolioItems[1].category}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {portfolioItems[1].description}
          </p>
          
          <Button variant="outline" size="sm" className="w-full group-hover:bg-orange-50 group-hover:border-orange-300 transition-colors" asChild>
            <Link href={getProjectUrl(portfolioItems[1].id)} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Project
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Small projects */}
      {portfolioItems.slice(2, 4).map((item, i) => (
        <motion.div
          key={i + 2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
          viewport={{ once: true }}
          className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          {/* Image */}
          <div className="relative h-32 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={128}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Content Below Image */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            
            <p className="text-gray-600 text-xs mb-3 line-clamp-2">
              {item.description}
            </p>
            
            <Button variant="outline" size="sm" className="w-full group-hover:bg-orange-50 group-hover:border-orange-300 transition-colors" asChild>
              <Link href={getProjectUrl(item.id)} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-3 w-3" />
                Visit
              </Link>
            </Button>
          </div>
        </motion.div>
      ))}

      {/* Additional projects in a row */}
      {portfolioItems.slice(4).map((item, i) => (
        <motion.div
          key={i + 4}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
          viewport={{ once: true }}
          className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 lg:col-span-2"
        >
          {/* Image */}
          <div className="relative h-40 overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={160}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          {/* Content Below Image */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>
            
            <Button variant="outline" size="sm" className="w-full group-hover:bg-orange-50 group-hover:border-orange-300 transition-colors" asChild>
              <Link href={getProjectUrl(item.id)} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Project
              </Link>
            </Button>
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


const portfolioItems = [
  {
    id: "aimsindia",
    title: "Aimsindia",
    category: "Education",
    image: "/portfolio/aimsinda.webp",
    description: "AIMS India is committed to excellence in education, training, and career growth.",
    link: "/portfolio/aimsindia",
  },
  {
    id: "chef-supplies-hub",
    title: "Chef Supplies Hub",
    category: "Food & Beverage",
    image: "/portfolio/chef.webp",
    description: "Welcome to ChefSuppliesHub – your one-stop shop for quality chef tools.",
    link: "/portfolio/chef-supplies-hub",
  },
  {
    id: "copper-kitchen-store",
    title: "Copper Kitchen Store",
    category: "Food & Beverage",
    image: "/portfolio/copper.webp",
    description: "Copper Kitchen Store – timeless copperware for modern kitchens.",
    link: "/portfolio/copper-kitchen-store",
  },
  {
    id: "ramkrushna-developers",
    title: "Ramkrushna Developers",
    category: "Real Estate",
    image: "/portfolio/ramkrusna.webp",
    description: "Trusted developer specializing in residential and redevelopment projects.",
    link: "/portfolio/ramkrushna-developers",
  },
  {
    id: "healing-with-roohi",
    title: "Healing With Roohi",
    category: "Health & Beauty",
    image: "/portfolio/roohi.webp",
    description: "Healing with Roohi is a wellness platform dedicated to guiding individuals.",
    link: "/portfolio/healing-with-roohi",
  },
];
