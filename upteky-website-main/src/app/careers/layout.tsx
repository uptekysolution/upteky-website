import CareersPage from "./page";

export const metadata = {
  title: "Careers |Join Our Visionary Team | Upteky",
  description: "Explore open positions and join a team that's transforming real estate with AI. Discover our culture, values, and the benefits of working with us.",
   keywords: [
    "Careers", "Join Our Team", "Jobs in Real Estate Tech", "AI Careers",
    "Engineering Jobs", "Sales Jobs", "Marketing Jobs", "Ahmedabad Tech Jobs",
    "Startup Jobs", "Apply Now", "Remote AI Jobs", "Hiring AI Developers",
    "AI Internship India", "Tech Careers", "Product Manager AI", "Software Engineer AI",
    "Tech Startup Hiring", "Upteky Careers", "Innovative Company Jobs",
    "Machine Learning Engineer Jobs", "NLP Careers", "AI Research Jobs", "Backend Developer AI",
    "Frontend Developer React", "AI Product Design", "UX UI Jobs Ahmedabad",
    "Full Stack Developer", "Remote Startup Jobs", "Open Roles in AI",
    "Job Opportunities India", "Career Growth in Tech", "High Growth Startups Hiring",
    "AI Software Jobs", "Upteky Hiring", "Tech Talent", "Work With AI Experts",
    "Join AI Revolution", "Company Culture Upteky", "Tech Innovation Jobs",
    "Futuristic Work Culture", "Flexible Work Environment", "Career in Automation",
    "Innovation Jobs India", "Creative Tech Jobs", "Tech Hiring India", "Visionary Team Jobs"
  ],
  openGraph: {
    title: "Careers at [Company Name]",
    description:"We’re building the future of real estate. Explore open roles and apply today.",
    url: "https://upteky.com/careers",
    siteName: "Upteky",
    images: [
      {
        url: "/assets/Upteky Logo.png",
        width: 1200,
        height: 630,
        alt: "Join Our Visionary Team - Careers at Upteky",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Upteky",
    description: "Join a fast-growing startup revolutionizing real estate with AI.",
    images: ["/assets/Upteky Logo.png"],
  
      metadataBase: new URL("https://upteky.com"),
  },
};
//  export default async function generateMetadata(params:{postId}) {
  
//  }

export default function Page() {
  return <CareersPage/>;
}
