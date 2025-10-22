import Link from "next/link"
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h1>
            <p className="text-xl text-gray-600">
              Join our team and help us build amazing digital experiences for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12">
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
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don&apos;t See Your Perfect Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We&apos;re always looking for talented individuals. Send us your resume and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Button size="lg" variant="outline-white" asChild>
              <Link href="/contact">Send Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
