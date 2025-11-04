import LandingPage from "./page";

export const metadata = {
  title: "Landing | Upteky",
  description:
    "Discover Upteky – an AI automation company revolutionizing business operations with smart, scalable solutions. Learn about our mission, vision, and innovation-driven team.",
  keywords: [
    "Upteky",
    "About Upteky",
    "AI company India",
    "AI automation",
    "AI solutions provider",
    "artificial intelligence services",
    "business automation",
    "AI company Ahmedabad",
    "AI development",
    "machine learning company",
    "workflow automation",
    "AI tools for business",
    "custom AI solutions",
    "enterprise AI",
    "AI for startups",
    "automation in business",
    "AI-driven innovation",
    "intelligent automation",
    "digital transformation",
    "AI strategy consulting",
    "AI chatbot development",
    "AI voice assistant",
    "data-driven automation",
    "AI-powered business solutions",
    "smart workflow automation",
    "automation experts",
    "AI implementation",
    "AI SaaS solutions",
    "B2B automation tools",
    "Upteky team",
    "Upteky mission",
    "AI for real estate",
    "AI for education",
    "AI for healthcare",
    "scalable automation",
    "next-gen AI solutions",
    "AI digital services",
    "Upteky values",
    "AI innovation",
    "AI technology partner",
    "future of AI",
    "ethical AI development",
    "Upteky leadership",
    "AI engineering team",
    "Upteky expertise",
    "tailored automation",
    "machine learning applications",
    "custom software solutions",
    "AI research & development",
    "Upteky company culture"
  ],
  openGraph: {
    title: "About Upteky - AI Automation Experts",
    description:
      "Upteky is driving innovation in AI and automation. Meet our team, learn our story, and explore our values as we transform industries with intelligent technology.",
    url: "https://upteky.com/landing",
    siteName: "Upteky",
    images: [
      {
        url: "/assets/Upteky Logo.png",
        width: 1200,
        height: 630,
        alt: "Upteky - AI Automation Company",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Upteky | AI Company in India",
    description:
      "We build future-ready AI automation solutions. Learn more about Upteky’s journey and mission.",
    images: ["/assets/Upteky Logo.png"],
    
  },
  authors: [{ name: "Upteky", url: "https://upteky.com" }],
  metadataBase: new URL("https://upteky.com"),
};

export default function Page() {
  return <LandingPage />;
}
