"use client"

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconShoppingCart,
  IconTrendingUp,
  IconSettings,
  IconRocket,
  IconShield,
  IconUsers,
  IconStar,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function PortfolioBento() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Recent Project Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we&apos;ve helped Shopify stores achieve remarkable growth and success
          </p>
        </motion.div>

        <BentoGrid className="max-w-6xl mx-auto">
          {portfolioItems.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              link={item.link}
              className={i === 0 || i === 3 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const ProjectSkeleton = ({ bgColor = "from-blue-500 to-blue-600", icon }: { bgColor?: string; icon: React.ReactNode }) => (
  <div className={`flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br ${bgColor} items-center justify-center shadow-sm`}>
    <div className="text-white text-center">
      <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
        {icon}
      </div>
    </div>
  </div>
);

const portfolioItems = [
  {
    title: "E-commerce Fashion Store",
    description: "Complete Shopify Plus redesign with 150% increase in conversion rate and 200% boost in mobile sales.",
    header: <ProjectSkeleton bgColor="from-blue-500 to-blue-600" icon={<IconTrendingUp className="h-8 w-8" />} />,
    icon: <IconTrendingUp className="h-6 w-6 text-white" />,
    link: "/portfolio/fashion-store",
  },
  {
    title: "Electronics Marketplace",
    description: "Custom app development and theme customization resulting in 300% growth in average order value.",
    header: <ProjectSkeleton bgColor="from-blue-600 to-blue-700" icon={<IconSettings className="h-8 w-8" />} />,
    icon: <IconSettings className="h-6 w-6 text-white" />,
    link: "/portfolio/electronics-marketplace",
  },
  {
    title: "Health & Beauty Brand",
    description: "Store migration from WooCommerce to Shopify Plus with zero downtime and improved SEO rankings.",
    header: <ProjectSkeleton bgColor="from-blue-400 to-blue-500" icon={<IconRocket className="h-8 w-8" />} />,
    icon: <IconRocket className="h-6 w-6 text-white" />,
    link: "/portfolio/health-beauty",
  },
  {
    title: "Luxury Watch Collection",
    description: "Premium Shopify Plus store with advanced product customization and AR try-on features, achieving 400% revenue growth.",
    header: <ProjectSkeleton bgColor="from-blue-700 to-blue-800" icon={<IconShield className="h-8 w-8" />} />,
    icon: <IconShield className="h-6 w-6 text-white" />,
    link: "/portfolio/luxury-watches",
  },
  {
    title: "Sports Equipment Store",
    description: "Speed optimization and mobile-first design leading to 50% faster load times and 80% better mobile experience.",
    header: <ProjectSkeleton bgColor="from-blue-500 to-blue-600" icon={<IconUsers className="h-8 w-8" />} />,
    icon: <IconUsers className="h-6 w-6 text-white" />,
    link: "/portfolio/sports-equipment",
  },
  {
    title: "Home Decor Marketplace",
    description: "Multi-vendor marketplace setup with custom vendor dashboard and automated inventory management.",
    header: <ProjectSkeleton bgColor="from-blue-600 to-blue-700" icon={<IconStar className="h-8 w-8" />} />,
    icon: <IconStar className="h-6 w-6 text-white" />,
    link: "/portfolio/home-decor",
  },
  {
    title: "Food & Beverage Brand",
    description: "Subscription box integration with recurring billing and customer portal, increasing customer lifetime value by 250%.",
    header: <ProjectSkeleton bgColor="from-blue-400 to-blue-500" icon={<IconShoppingCart className="h-8 w-8" />} />,
    icon: <IconShoppingCart className="h-6 w-6 text-white" />,
    link: "/portfolio/food-beverage",
  },
];
