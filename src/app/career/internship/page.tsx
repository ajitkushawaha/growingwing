"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Users, CheckCircle, BookOpen, Briefcase, Award } from "lucide-react"

const internshipPrograms = [
  {
    id: "web-development",
    title: "Web Development Internship",
    duration: "3-6 Months",
    type: "Full-time/Part-time",
    description: "Gain hands-on experience in modern web development technologies including React, Next.js, and Shopify development.",
    skills: [
      "HTML5, CSS3, JavaScript",
      "React.js and Next.js",
      "Shopify theme development",
      "Version control with Git",
      "Responsive design principles",
      "API integration"
    ],
    requirements: [
      "Currently pursuing or completed Computer Science/IT degree",
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Eagerness to learn new technologies",
      "Good problem-solving skills",
      "Ability to work in a team"
    ],
    benefits: [
      "Mentorship from senior developers",
      "Real-world project experience",
      "Certificate of completion",
      "Potential job offer",
      "Stipend based on performance",
      "Flexible working hours"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Internship",
    duration: "3-6 Months",
    type: "Full-time/Part-time",
    description: "Learn user interface and user experience design principles while working on real client projects.",
    skills: [
      "Figma and Adobe Creative Suite",
      "User research and analysis",
      "Wireframing and prototyping",
      "Visual design principles",
      "Responsive design",
      "Design systems"
    ],
    requirements: [
      "Currently pursuing or completed Design/Art degree",
      "Basic knowledge of design tools",
      "Creative thinking and attention to detail",
      "Understanding of user-centered design",
      "Portfolio of design work (preferred)"
    ],
    benefits: [
      "Guidance from experienced designers",
      "Portfolio building opportunities",
      "Certificate of completion",
      "Potential job offer",
      "Stipend based on performance",
      "Access to design resources"
    ]
  },
  {
    id: "shopify-development",
    title: "Shopify Development Internship",
    duration: "3-6 Months",
    type: "Full-time/Part-time",
    description: "Learn Shopify store development including theme customization, liquid templating, and app development.",
    skills: [
      "Shopify Liquid templating",
      "Theme customization and development",
      "Shopify CLI and development tools",
      "Custom app development",
      "Store optimization techniques",
      "Shopify APIs and integrations"
    ],
    requirements: [
      "Currently pursuing or completed Computer Science/IT degree",
      "Basic knowledge of HTML, CSS, and JavaScript",
      "Understanding of e-commerce concepts",
      "Problem-solving skills",
      "Eagerness to learn new technologies"
    ],
    benefits: [
      "Hands-on Shopify development experience",
      "Mentorship from senior Shopify developers",
      "Certificate of completion",
      "Potential job offer",
      "Stipend based on performance",
      "Industry networking opportunities"
    ]
  },
  {
    id: "business-development",
    title: "Business Development Internship",
    duration: "3-6 Months",
    type: "Full-time/Part-time",
    description: "Learn business development strategies, client acquisition, and project management in the tech industry.",
    skills: [
      "Client relationship management",
      "Proposal writing",
      "Market research and analysis",
      "Project coordination",
      "Sales and negotiation",
      "Business communication"
    ],
    requirements: [
      "Currently pursuing or completed Business/MBA degree",
      "Good communication and interpersonal skills",
      "Interest in technology and e-commerce",
      "Analytical thinking",
      "Self-motivated and goal-oriented"
    ],
    benefits: [
      "Real client interaction experience",
      "Mentorship from business development team",
      "Certificate of completion",
      "Potential job offer",
      "Stipend based on performance",
      "Sales training and development"
    ]
  }
]

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="h-[80vh] sm:min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden pt-16 sm:pt-20 relative">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Glowing Lines */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
              animate={{
                x: [-50, 50, -50],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-48 sm:w-80 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
              animate={{
                x: [50, -50, 50],
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
              className="absolute bottom-1/3 left-1/3 w-40 sm:w-72 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"
              animate={{
                x: [-40, 40, -40],
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
              <BookOpen className="h-5 w-5 text-orange-400" />
              <span className="text-orange-200 font-semibold">Internship Programs</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
              Start Your <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Career</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Gain valuable experience and kickstart your career with our comprehensive internship programs.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 mb-8"
            >
              <span className="text-white font-semibold">Learning Opportunities:</span>
              <span className="text-orange-300 font-bold">4 PROGRAMS</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center relative z-10"
            >
              <Button size="lg" variant="secondary" asChild>
                <Link href="#internship-programs">
                  View Programs
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

      {/* Why Intern With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Intern With GrowingWing?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our internship programs are designed to provide you with real-world experience, mentorship, and the skills needed to succeed in the tech industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real Projects</h3>
                <p className="text-gray-600">
                  Work on actual client projects and gain hands-on experience with industry-standard tools and technologies.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Mentorship</h3>
                <p className="text-gray-600">
                  Learn from experienced professionals who will guide you through your internship journey.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Growth</h3>
                <p className="text-gray-600">
                  Many of our interns receive full-time job offers and continue their career with us.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Exposure</h3>
                <p className="text-gray-600">
                  Get exposure to various industries and understand how technology solves real business problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Programs */}
      <section id="internship-programs" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Available Internship Programs
              </h2>
              <p className="text-xl text-gray-600">
                Choose from our comprehensive internship programs designed to match your interests and career goals.
              </p>
            </div>

            <div className="grid gap-8">
              {internshipPrograms.map((program) => (
                <div key={program.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {program.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {program.type}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{program.description}</p>
                    </div>
                    <Button className="lg:ml-4 mb-4 lg:mb-0" asChild>
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Skills You&apos;ll Learn</h4>
                      <ul className="space-y-2">
                        {program.skills.map((skill, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="h-4 w-4 mt-0.5 text-green-600 flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {program.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {program.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-600">
                            <CheckCircle className="h-4 w-4 mt-0.5 text-purple-600 flex-shrink-0" />
                            {benefit}
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

      {/* Application Process */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Application Process
              </h2>
              <p className="text-xl text-gray-600">
                Our simple and straightforward application process makes it easy to get started.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply Online</h3>
                <p className="text-gray-600">Submit your application with your resume and cover letter.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Review</h3>
                <p className="text-gray-600">We review your application and qualifications.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview</h3>
                <p className="text-gray-600">Short interview to discuss your goals and interests.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Internship</h3>
                <p className="text-gray-600">Begin your internship journey with us!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Internship Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Apply now and take the first step towards building a successful career in technology.
            </p>
            <Button size="lg" variant="outline" className="text-orange-500 border-orange-500 bg-transparent hover:bg-orange-500 hover:text-white transition-colors" asChild>
              <Link href="/contact">Apply for Internship</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
