import Hero from "@/components/sections/Hero"
import ClientLogos from "@/components/sections/ClientLogos"
import Services from "@/components/sections/Services"
import PortfolioBento from "@/components/sections/PortfolioBento"
import Testimonials from "@/components/sections/Testimonials"
import PricingPackages from "@/components/sections/PricingPackages"

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <ClientLogos />
      <Services />
      <PortfolioBento />
      <Testimonials />
      <PricingPackages />
    </div>
  )
}