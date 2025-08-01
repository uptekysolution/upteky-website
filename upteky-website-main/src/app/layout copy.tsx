import AboutPage from "./page";

export const metadata = {
  title: "About Us | Upteky",
  description: "Learn more about Upteky's mission and revolutionize business with AI automation.",
 openGraph: {
    title: "About Upteky",
    description: "Discover how Upteky is transforming businesses with AI-driven automation solutions.",
    url: "https://upteky.com/about",
    siteName: "Upteky",
    images: [
      {
        url: "/assets/Upteky Logo.png",
        width: 1200,
        height: 630,
        alt: "Upteky - AI Automation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Upteky",
    description: "Discover how Upteky is transforming businesses with AI automation.",
    images: ["/assets/Upteky Logo.png"],
  },
};
//  export default async function generateMetadata(params:{postId}) {
  
//  }

export default function Page() {
  return <AboutPage />;
}
