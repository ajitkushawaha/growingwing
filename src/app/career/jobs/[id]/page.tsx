import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Clock, Users, Briefcase, CheckCircle } from "lucide-react"
import { notFound } from "next/navigation"

const jobPositions = {
  "shopify-frontend-developer": {
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
    location: "Remote/On-site",
    description: "We are looking for a skilled Shopify Frontend Developer to join our team. You will be responsible for creating and customizing Shopify themes, implementing responsive designs, and ensuring optimal user experience across all devices.",
    responsibilities: [
      "Develop and customize Shopify themes using Liquid templating",
      "Implement responsive designs that work across all devices",
      "Optimize website performance and loading speeds",
      "Collaborate with designers and backend developers",
      "Debug and fix frontend issues",
      "Stay updated with Shopify's latest features and best practices"
    ],
    requirements: [
      "Proven experience in Shopify theme development",
      "Strong knowledge of HTML5, CSS3, and JavaScript",
      "Experience with Liquid templating language",
      "Understanding of responsive design principles",
      "Familiarity with Shopify's theme structure and sections",
      "Experience with version control systems (Git)",
      "Strong problem-solving and debugging skills"
    ],
    benefits: [
      "Competitive salary package",
      "Flexible working hours",
      "Remote work options",
      "Professional development opportunities",
      "Health insurance coverage",
      "Paid time off and holidays"
    ]
  },
  "shopify-backend-developer": {
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
    location: "Remote/On-site",
    description: "We are seeking an experienced Shopify Backend Developer to join our development team. You will be responsible for building custom Shopify apps, integrating third-party services, and maintaining backend systems.",
    responsibilities: [
      "Develop custom Shopify apps and plugins",
      "Integrate third-party APIs and services",
      "Work with Shopify Admin and Storefront APIs",
      "Implement webhooks and real-time data synchronization",
      "Design and maintain database schemas",
      "Troubleshoot and debug backend issues"
    ],
    requirements: [
      "2-3 years of experience in Shopify app development",
      "Proficiency in Node.js or PHP",
      "Strong knowledge of REST and GraphQL APIs",
      "Experience with database design and optimization",
      "Understanding of OAuth authentication flows",
      "Familiarity with webhook implementations",
      "Experience with cloud platforms (AWS, Google Cloud)"
    ],
    benefits: [
      "Competitive salary package",
      "Flexible working hours",
      "Remote work options",
      "Professional development opportunities",
      "Health insurance coverage",
      "Paid time off and holidays"
    ]
  },
  "software-tester": {
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
    location: "Remote/On-site",
    description: "We are looking for a dedicated Software Tester to ensure the quality and reliability of our software products. You will be responsible for testing web applications, identifying bugs, and ensuring optimal user experience.",
    responsibilities: [
      "Design and execute test cases",
      "Perform manual testing of web applications",
      "Identify and report bugs and issues",
      "Collaborate with development teams",
      "Maintain test documentation",
      "Ensure quality standards are met"
    ],
    requirements: [
      "At least 1 year of manual testing experience",
      "Knowledge of testing methodologies",
      "Experience with bug tracking tools",
      "Strong attention to detail",
      "Good communication skills",
      "Understanding of web technologies"
    ],
    benefits: [
      "Competitive salary package",
      "Flexible working hours",
      "Remote work options",
      "Professional development opportunities",
      "Health insurance coverage",
      "Paid time off and holidays"
    ]
  },
  "web-designer": {
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
    location: "Remote/On-site",
    description: "We are seeking a creative Web Designer to join our design team. You will be responsible for creating visually appealing and user-friendly websites that meet our clients' requirements.",
    responsibilities: [
      "Design responsive websites and web applications",
      "Create wireframes and prototypes",
      "Collaborate with developers and project managers",
      "Ensure designs are user-friendly and accessible",
      "Stay updated with design trends and best practices",
      "Work with clients to understand their requirements"
    ],
    requirements: [
      "2-3 years of web design experience",
      "Proficiency in HTML5, CSS3, and JavaScript",
      "Experience with responsive design",
      "Knowledge of UI/UX principles",
      "Familiarity with design tools (Figma, Adobe Creative Suite)",
      "Strong portfolio of previous work"
    ],
    benefits: [
      "Competitive salary package",
      "Flexible working hours",
      "Remote work options",
      "Professional development opportunities",
      "Health insurance coverage",
      "Paid time off and holidays"
    ]
  },
  "business-analyst": {
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
    location: "Remote/On-site",
    description: "We are looking for a Business Analyst to help bridge the gap between our technical team and clients. You will analyze business requirements and ensure successful project delivery.",
    responsibilities: [
      "Analyze business requirements and processes",
      "Communicate with clients to understand their needs",
      "Create detailed project documentation",
      "Coordinate between technical and non-technical teams",
      "Conduct market research and analysis",
      "Ensure project deliverables meet client expectations"
    ],
    requirements: [
      "1-3 years of business analysis experience",
      "Strong communication and interpersonal skills",
      "Knowledge of e-commerce platforms",
      "Experience with project management tools",
      "Analytical and problem-solving skills",
      "Bachelor's degree in relevant field"
    ],
    benefits: [
      "Competitive salary package",
      "Flexible working hours",
      "Remote work options",
      "Professional development opportunities",
      "Health insurance coverage",
      "Paid time off and holidays"
    ]
  },
  "business-development-executive": {
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
    location: "Remote/On-site",
    description: "We are seeking a Business Development Executive to help grow our client base and drive business growth. You will be responsible for identifying new opportunities and building relationships with potential clients.",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain client relationships",
      "Prepare and present proposals",
      "Negotiate contracts and close deals",
      "Conduct market research and analysis",
      "Meet and exceed sales targets"
    ],
    requirements: [
      "1-3 years of business development experience",
      "Experience with freelancing platforms",
      "Strong sales and negotiation skills",
      "Knowledge of e-commerce industry",
      "Excellent communication skills",
      "Proven track record of meeting targets"
    ],
    benefits: [
      "Competitive salary package",
      "Performance-based incentives",
      "Flexible working hours",
      "Remote work options",
      "Professional development opportunities",
      "Health insurance coverage"
    ]
  },
  "online-bidder": {
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
    location: "Remote/On-site",
    description: "We are looking for an Online Bidder to help us win projects on various freelancing platforms. You will be responsible for finding suitable projects and crafting winning proposals.",
    responsibilities: [
      "Search and identify relevant projects on freelancing platforms",
      "Write compelling proposals and bids",
      "Communicate with potential clients",
      "Negotiate project terms and pricing",
      "Maintain relationships with existing clients",
      "Track and analyze bidding performance"
    ],
    requirements: [
      "6 months to 2 years of bidding experience",
      "Experience with Upwork, Guru, Freelancer platforms",
      "Excellent writing and communication skills",
      "Understanding of web development projects",
      "Strong negotiation skills",
      "Ability to work under pressure"
    ],
    benefits: [
      "Competitive salary package",
      "Commission-based incentives",
      "Flexible working hours",
      "Remote work options",
      "Professional development opportunities",
      "Health insurance coverage"
    ]
  },
  "seo-executive": {
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
    location: "Remote/On-site",
    description: "We are seeking an SEO Executive to help improve our clients' search engine rankings and drive organic traffic. You will be responsible for developing and implementing SEO strategies.",
    responsibilities: [
      "Conduct keyword research and analysis",
      "Optimize website content for search engines",
      "Monitor and analyze website performance",
      "Implement on-page and off-page SEO strategies",
      "Track and report on SEO metrics",
      "Stay updated with SEO best practices and algorithm changes"
    ],
    requirements: [
      "6 months to 2 years of SEO experience",
      "Knowledge of SEO tools (SEMrush, Ahrefs, etc.)",
      "Understanding of Google Analytics and Search Console",
      "Experience with content optimization",
      "Analytical and reporting skills",
      "Knowledge of HTML and CSS basics"
    ],
    benefits: [
      "Competitive salary package",
      "Flexible working hours",
      "Remote work options",
      "Professional development opportunities",
      "Health insurance coverage",
      "Paid time off and holidays"
    ]
  },
  "content-writer": {
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
    location: "Remote/On-site",
    description: "We are looking for a talented Content Writer to create engaging and SEO-friendly content for our clients. You will be responsible for writing blog posts, website content, and marketing materials.",
    responsibilities: [
      "Write SEO-friendly blog posts and articles",
      "Create website content and copy",
      "Develop marketing materials and newsletters",
      "Research industry topics and trends",
      "Optimize content for search engines",
      "Collaborate with SEO and marketing teams"
    ],
    requirements: [
      "6 months to 2 years of content writing experience",
      "Excellent English writing and grammar skills",
      "Experience with SEO content writing",
      "Knowledge of content management systems",
      "Familiarity with writing tools (Grammarly, SurferSEO)",
      "Portfolio of published work"
    ],
    benefits: [
      "Competitive salary package",
      "Flexible working hours",
      "Remote work options",
      "Professional development opportunities",
      "Health insurance coverage",
      "Paid time off and holidays"
    ]
  }
}

interface JobDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = await params
  const job = jobPositions[id as keyof typeof jobPositions]

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/career/jobs" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Jobs
              </Link>
            </Button>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
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
            <Button size="lg" asChild>
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="space-y-8">
                {/* Job Description */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
                  <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </div>

                {/* Eligibility */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility</h2>
                  <p className="text-gray-600">{job.eligibility}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
                  <ul className="space-y-2">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <Briefcase className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Skills</h2>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {job.skills.map((skill, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
                  <ul className="space-y-2">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
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
              Ready to Apply?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Send us your resume and cover letter, and let&apos;s discuss how you can contribute to our team.
            </p>
            <Button size="lg" variant="outline-white" asChild>
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
