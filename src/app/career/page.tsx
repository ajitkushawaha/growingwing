import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Briefcase, GraduationCap } from "lucide-react"

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Work with us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Join our team of talented professionals and help us build amazing digital experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50 hover:border-blue-700" asChild>
                <Link href="/career/jobs">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline-white" asChild>
                <Link href="/career/internship">
                  Explore Internships
                  <GraduationCap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose GrowingWing?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We&apos;re a certified Shopify Plus Agency specializing in custom themes, apps, migrations, and CRO to help brands scale and boost conversions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Environment</h3>
                <p className="text-gray-600">
                  Work with talented professionals in a supportive and collaborative environment that encourages growth and innovation.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Exciting Projects</h3>
                <p className="text-gray-600">
                  Work on diverse and challenging projects for clients across various industries, helping them scale their businesses.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Learning</h3>
                <p className="text-gray-600">
                  Stay updated with the latest technologies and trends in e-commerce and web development through our learning programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Explore Opportunities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <Briefcase className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Full-Time Positions</h3>
                <p className="text-gray-600 mb-6">
                  Join our team in various roles including development, design, marketing, and business development.
                </p>
                <Button asChild>
                  <Link href="/career/jobs">View All Jobs</Link>
                </Button>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Internship Program</h3>
                <p className="text-gray-600 mb-6">
                  Gain hands-on experience and learn from industry experts in our comprehensive internship program.
                </p>
                <Button asChild>
                  <Link href="/career/internship">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Don&apos;t see a position that matches your skills? We&apos;re always looking for talented individuals to join our team.
            </p>
            <Button size="lg" variant="outline-white" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
