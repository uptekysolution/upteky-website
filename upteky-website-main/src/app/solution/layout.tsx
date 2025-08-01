import SolutionPage from "./page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://upteky.com"),
  title: "AI Solutions | Transform Your Business with Upteky",
  description:
    "Explore powerful AI solutions designed by Upteky to automate, optimize, and elevate your business. Discover how our tools can drive efficiency and innovation.",
  keywords: [
    "AI Solutions",
    "Business Automation",
    "Upteky AI Tools",
    "AI for Real Estate",
    "Custom AI Development",
    "Artificial Intelligence Services",
    "Machine Learning Applications",
    "AI Software Solutions",
    "AI Company India",
    "AI Development Ahmedabad",
    "AI Chatbots",
    "Voicebot Development",
    "Conversational AI",
    "Workflow Automation",
    "Intelligent Automation",
    "AI Web Solutions",
    "AI SaaS Products",
    "Upteky AI Solutions",
    "AI Software Development",
    "AI Strategy Consulting",
    "Enterprise AI Solutions",
    "Custom AI Tools",
    // Core Services
    "AI Solutions",
    "Artificial Intelligence Services",
    "Business Automation",
    "AI Software Development",
    "Machine Learning Applications",
    "Custom AI Development",
    "AI Automation Tools",
    "AI Strategy Consulting",

    // Upteky Capabilities
    "Upteky AI Tools",
    "AI Chatbots",
    "Voicebot Development",
    "Conversational AI",
    "Workflow Automation",
    "AI Website Integration",
    "AI Web Solutions",

    // Industry Applications
    "AI for Real Estate",
    "AI for Healthcare",
    "AI in Fintech",
    "AI for E-commerce",
    "AI for Education",
    "AI in Logistics",
    "AI in Manufacturing",

    // Future & Aspirational Services
    "Generative AI Development",
    "AI Video Analysis",
    "Predictive Analytics",
    "AI CRM Solutions",
    "Natural Language Processing",
    "AI Document Processing",
    "AI Customer Support",
    "RPA with AI",
    "Edge AI Solutions",
    "AI Mobile App Integration",

    // Location-Based SEO
    "AI Company India",
    "AI Development Ahmedabad",
    "AI Services Gujarat",

    // Branding & Reach
    "Upteky AI Solutions",
    "Top AI Companies India",
    "Next-gen AI Services",
    "Enterprise AI Development",
    "Intelligent Automation"

  ],
  openGraph: {
    title: "AI Solutions | Upteky",
    description:
      "Unlock next-gen efficiency with our AI-driven solutions. Browse our portfolio and see how Upteky can transform your business.",
    url: "https://upteky.com/solution",
    siteName: "Upteky",
    images: [
      {
        url: "/assets/Upteky Logo.png", // Consider using a more SEO-optimized image like /assets/og-solutions.png
        width: 1200,
        height: 630,
        alt: "AI Solutions by Upteky",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Upteky's AI Solutions",
    description:
      "Discover innovative AI tools that accelerate business growth and digital transformation.",
    images: ["/assets/Upteky Logo.png"],
  },
};

export default function Page() {
  return <SolutionPage />;
}
