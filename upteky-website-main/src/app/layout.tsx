import type { Metadata } from "next";
import { Inter, Outfit, Poppins } from "next/font/google"; // Consolidated imports
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/layout/loading-screen";
import ChatbotWidget from "@/components/widgets";
import { Suspense } from "react";

// --- Font Configurations (Your code is perfect here) ---
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


// --- Metadata (Your code is perfect here) ---
export const metadata: Metadata = {
  title: {
    default: "Upteky AI Solutions - Intelligent Automation",
    template: "%s | Upteky AI Solutions",
  },
  description: "Upteky provides cutting-edge AI solutions, including chatbots, voice assistants, and workflow automation, to enhance business efficiency and customer engagement.",
  keywords: [
    "AI Solutions",
    "Intelligent Automation",
    "AI Chatbot",
    "Voice Assistant",
    "Workflow Automation",
    // ... add all your other keywords
  ],
  // ... rest of your metadata
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* The <head> tag is managed by Next.js. 
        You can remove the manual <link> tags for fonts, 
        as next/font handles this automatically.
      */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          // --- THIS IS THE KEY CHANGE ---
          // Apply all your font variables here
          poppins.variable,
          outfit.variable,
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