import Link from "next/link"
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
    id: "digital-marketing",
    title: "Digital Marketing Internship",
    duration: "3-6 Months",
    type: "Full-time/Part-time",
    description: "Learn digital marketing strategies including SEO, social media marketing, and content creation.",
    skills: [
      "SEO and SEM",
      "Social media marketing",
      "Content creation and strategy",
      "Google Analytics and Ads",
      "Email marketing",
      "Marketing automation"
    ],
    requirements: [
      "Currently pursuing or completed Marketing/Communication degree",
      "Basic understanding of digital marketing",
      "Good communication skills",
      "Creative thinking",
      "Analytical mindset"
    ],
    benefits: [
      "Hands-on marketing campaign experience",
      "Mentorship from marketing experts",
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
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/career" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Careers
              </Link>
            </Button>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Internship Programs</h1>
            <p className="text-xl text-gray-600">
              Gain valuable experience and kickstart your career with our comprehensive internship programs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Intern With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
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
      <section className="py-16">
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
                <div key={program.id} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
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
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Internship Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Apply now and take the first step towards building a successful career in technology.
            </p>
            <Button size="lg" variant="outline-white" asChild>
              <Link href="/contact">Apply for Internship</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
