import Hero from "@/components/sections/Hero"
import ClientLogos from "@/components/sections/ClientLogos"
import Services from "@/components/sections/Services"
import PortfolioSwiper from "@/components/sections/PortfolioSwiper"
import Testimonials from "@/components/sections/Testimonials"
import PricingPackages from "@/components/sections/PricingPackages"

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <ClientLogos />
      <Services />
      <PortfolioSwiper />
      <Testimonials />
      <PricingPackages />
    </div>
  )
}