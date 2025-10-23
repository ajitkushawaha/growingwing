"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Clock, Users, Briefcase } from "lucide-react"

const jobPositions = [
  {
    id: "shopify-frontend-developer",
    title: "Shopify Frontend Developer",
    eligibility: "Any graduate/Post graduate in Computer Science, IT, or related field",
    skills: [
      "Experience in Shopify theme customization",
      "Expertise in Liquid templating language",
      "HTML5, CSS3, JavaScript/jQuery",
      "Responsive design implementation",
      "Debugging frontend issues",
      "Understanding of Shopify's sections, metafields, and theme structure"
    ],
    experience: "6 Months to 2 Years",
    type: "Full-time",
    location: "Remote/On-site"
  },
  {
    id: "shopify-backend-developer",
    title: "Shopify Backend Developer",
    eligibility: "Any graduate/Post graduate in Computer Science, IT, or related field",
    skills: [
      "Experience in developing custom Shopify apps or private/public plugins using Node.js or PHP",
      "Strong knowledge of Shopify Admin and Storefront APIs",
      "Webhooks, REST & GraphQL",
      "Experience with Shopify OAuth authentication",
      "Database design and integration",
      "Troubleshooting Shopify backend workflows"
    ],
    experience: "2 Years to 3 Years",
    type: "Full-time",
    location: "Remote/On-site"
  },
  {
    id: "software-tester",
    title: "Software Tester",
    eligibility: "MCA / B.Tech / BCA",
    skills: [
      "Manual Testing experience",
      "Test case design and execution",
      "Bug reporting and tracking",
      "Quality assurance processes",
      "Understanding of testing methodologies"
    ],
    experience: "Should have at least 1 year experience in Manual Testing",
    type: "Full-time",
    location: "Remote/On-site"
  },
  {
    id: "web-designer",
    title: "Web Designer",
    eligibility: "Any Graduate",
    skills: [
      "HTML5, CSS3",
      "Responsive Designs",
      "jQuery/JavaScript",
      "UI/UX design principles",
      "Design tools proficiency"
    ],
    experience: "2-3 Years",
    type: "Full-time",
    location: "Remote/On-site"
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    eligibility: "Any graduate/Post graduate",
    skills: [
      "Good Communication skills",
      "Knowledge of Ecommerce",
      "Business process analysis",
      "Client communication",
      "Market research",
      "Project coordination"
    ],
    experience: "1-3 Years",
    type: "Full-time",
    location: "Remote/On-site"
  },
  {
    id: "business-development-executive",
    title: "Business Development Executive",
    eligibility: "Any graduate/Post graduate",
    skills: [
      "Strong written and verbal communication skills",
      "Basic experience on Upwork/Freelancer",
      "Knowledge of eCommerce",
      "Online bidding",
      "Lead generation",
      "Client communication",
      "Proposal writing",
      "Closing IT/web development deals"
    ],
    experience: "1-3 Years",
    type: "Full-time",
    location: "Remote/On-site"
  },
  {
    id: "online-bidder",
    title: "Online Bidder",
    eligibility: "Any graduate/Post graduate",
    skills: [
      "Experience/knowledge in Bidding on Upwork, Guru, Freelancer etc.",
      "Lead Conversion and Client negotiation",
      "Strategic planning and execution",
      "Market research",
      "Proposal writing"
    ],
    experience: "6 Months to 2 Years",
    type: "Full-time",
    location: "Remote/On-site"
  },
  {
    id: "seo-executive",
    title: "SEO Executive",
    eligibility: "Any graduate/Post graduate",
    skills: [
      "Keyword research",
      "On-page and Off-page SEO",
      "Google Search Console & Analytics",
      "Basic Technical SEO",
      "Competitor analysis",
      "Familiarity with tools like SEMrush, Ahrefs, Ubersuggest"
    ],
    experience: "6 Months to 2 Years",
    type: "Full-time",
    location: "Remote/On-site"
  },
  {
    id: "content-writer",
    title: "Content Writer",
    eligibility: "Any graduate/Post graduate in English, Journalism, or related field",
    skills: [
      "Excellent command over written English",
      "SEO-friendly blog and website content creation",
      "Strong grammar and proofreading skills",
      "Experience with writing tools like Grammarly, SurferSEO",
      "Ability to write across different niches and platforms"
    ],
    experience: "6 Months to 2 Years",
    type: "Full-time",
    location: "Remote/On-site"
  }
]

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-16 sm:pt-20 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Glowing Lines */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
              animate={{
                x: [-100, 100, -100],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-80 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
              animate={{
                x: [100, -100, 100],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/3 w-72 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
              animate={{
                x: [-80, 80, -80],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            />
          </div>

          {/* Floating Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-4 h-4 bg-orange-400/20 rounded-full"
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-blue-400/20 rounded-full"
            animate={{
              y: [20, -20, 20],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400/20 rounded-full"
            animate={{
              y: [-15, 15, -15],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8"
            >
              <Briefcase className="h-5 w-5 text-orange-400" />
              <span className="text-orange-200 font-semibold">Open Positions</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              Join Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Team</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our team and help us build amazing digital experiences for our clients.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-8"
            >
              <span className="text-white font-semibold">Available Roles:</span>
              <span className="text-orange-300 font-bold">5 POSITIONS</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            >
              <Button size="lg" variant="secondary" asChild>
                <Link href="#job-listings">
                  View All Jobs
                  <ArrowLeft className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-orange-400 border-orange-400 bg-transparent hover:bg-orange-500 hover:text-white transition-colors" asChild>
                <Link href="/career">Back to Careers</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="job-listings" className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8">
              {jobPositions.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h2>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <Button className="lg:ml-4 mb-4 lg:mb-0" asChild>
                      <Link href={`/career/jobs/${job.id}`}>Apply Now</Link>
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Eligibility</h3>
                      <p className="text-gray-600">{job.eligibility}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Skills</h3>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {job.skills.map((skill, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <Briefcase className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don&apos;t See Your Perfect Role?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Button size="lg" variant="outline" className="text-orange-500 border-orange-500 bg-transparent hover:bg-orange-500 hover:text-white transition-colors" asChild>
              <Link href="/contact">Send Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
