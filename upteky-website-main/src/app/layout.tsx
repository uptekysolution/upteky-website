import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import ChatbotWidget from "@/components/widgets";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  
  title: {
    default: "Upteky AI Solutions - Intelligent Automation",
    template: "%s | Upteky AI Solutions",
  },
  description: "Upteky provides cutting-edge AI solutions, including chatbots, voice assistants, and workflow automation, to enhance business efficiency and customer engagement.",
  openGraph: {
    title: "Upteky AI Solutions - Intelligent Automation",
    description: "Streamline your business with Upteky's AI-powered solutions for automation and growth.",
    url: "https://www.upteky.com", // Replace with your actual domain
    siteName: "Upteky AI Solutions",
    images: [
      {
        url: "/assets/og-image.png", // Recommended: 1200x630px
        width: 1200,
        height: 630,
        alt: "Upteky AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upteky AI Solutions - Intelligent Automation",
    description: "Streamline your business with Upteky's AI-powered solutions.",
    images: ["/assets/og-image.png"], // Replace with your actual domain if different for Twitter
  },
  // Add more metadata like icons, manifest if needed
  // icons: {
  //   icon: '/favicon.ico',
  //   apple: '/apple-touch-icon.png',
  // },
  keywords: [
  // Core AI solutions
  "AI Solutions",
  "AI-Based Web Solutions",
  "Intelligent Automation",
  "AI Automation Company",
  "AI Development Services",
  "Artificial Intelligence for Business",

  // Chatbot-related
  "AI Chatbot",
  "Chatbot Development",
  "Conversational AI",
  "AI Customer Support",
  "Chatbot for Website",
  "AI Chatbot Platform",
  "Chatbot Integration Services",

  // Voicebot-related
  "Voice Assistant",
  "Voicebot for Business",
  "AI Voice Assistant",
  "Voicebot Development",
  "Voicebot Integration",
  "Speech Recognition Bots",

  // Automation and workflow
  "Workflow Automation",
  "Process Automation",
  "Business Process Automation",
  "AI Workflow Tools",
  "Enterprise Automation",
  "Automation Software for Business",

  // Web & digital transformation
  "Web Technology Solutions",
  "Custom Web Development",
  "AI-Powered Web Apps",
  "Digital Transformation Services",
  "Smart Web Applications",
  "AI SaaS Platforms",

  // Industries & use cases
  "AI for E-commerce",
  "AI for Healthcare",
  "AI for Education",
  "AI for Real Estate",
  "AI for Customer Service",
  "AI for Enterprises",

  // Business value & goals
  "Boost Customer Engagement with AI",
  "AI to Reduce Costs",
  "Automate Customer Support",
  "Improve Operational Efficiency",
  "Scale Business with AI",
  "Next-Gen Business Automation",

  // Brand and location (if applicable)
  "Upteky",
  "Upteky AI Solutions",
  "Upteky Automation",
  "AI Company India",
  "AI Web Solutions India",
  "Best AI Automation Company"
]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <Suspense fallback={<LoadingScreen />}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatbotWidget />
          </div>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}
