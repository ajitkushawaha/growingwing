import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import PortfolioSwiper from "@/components/sections/PortfolioSwiper"
import Testimonials from "@/components/sections/Testimonials"

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      {/* <ClientLogos /> */}
      <Services />
      <PortfolioSwiper />
      <Testimonials />
      {/* <PricingPackages /> */}
    </div>
  )
}