
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ | Upteky AI Solutions",
  description: "Find answers to frequently asked questions about Upteky's AI solutions, services, implementation process, data security, and more.",
  openGraph: {
    title: "FAQ | Upteky AI Solutions",
    description: "Answers to common questions about Upteky.",
    images: [{ url: "/assets/og-image.png" }],
  },
};

const faqData = [
  {
    question: "What kind of AI solutions do you offer?",
    answer: "We offer a range of AI solutions including AI-powered chatbots for websites and messaging platforms, AI voice assistants, workflow automation, custom AI model development, data analytics, and AI strategy consulting. Our goal is to help businesses streamline operations, enhance customer engagement, and make data-driven decisions."
  },
  {
    question: "How can AI benefit my specific industry?",
    answer: "AI can be adapted to almost any industry. For example, in real estate, it can help with lead qualification and property management. In customer service, it can provide 24/7 support. We specialize in tailoring solutions to meet the unique needs and challenges of your industry to ensure maximum impact."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "The implementation timeline varies depending on the complexity of the solution and the level of customization required. A standard chatbot might be deployed in a few weeks, while a custom AI model could take several months. We work closely with you to establish a clear timeline during the project planning phase."
  },
  {
    question: "What kind of support do you offer after implementation?",
    answer: "We provide comprehensive post-implementation support, including technical assistance, regular maintenance, performance monitoring, and updates. Our team is dedicated to ensuring your AI solution continues to operate smoothly and deliver value."
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "Data security and privacy are paramount. We adhere to industry best practices and relevant regulations to protect your data. This includes using secure infrastructure, encryption, access controls, and regular security audits. For more details, please refer to our Privacy Policy."
  },
  {
    question: "Can your AI solutions integrate with my existing systems?",
    answer: "Yes, our AI solutions are designed to be flexible and can integrate with many existing systems, including CRMs, ERPs, and other business software. We work with you to ensure seamless integration for a unified workflow."
  }
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about our AI solutions, services, and processes. If you don't find what you're looking for, feel free to contact us.
            </p>
          </div>
        </div>
        <div className="absolute -bottom-6 left-0 right-0 h-12 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 blur-xl" />
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/70 border border-border/30 rounded-lg shadow-md backdrop-blur-sm transition-shadow duration-300 hover:shadow-accent/10">
                <AccordionTrigger className="p-4 sm:p-6 text-left text-base sm:text-lg font-medium text-foreground hover:text-accent transition-colors [&[data-state=open]]:text-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-6 pt-0 text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

       {/* Still Need Help Section */}
       <section className="py-12 sm:py-16 md:py-24 bg-secondary/10 border-t border-border/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-accent mx-auto mb-4 sm:mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
                Our team is here to help. Reach out to us for any further inquiries or to discuss your specific AI needs.
            </p>
            <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2.5 sm:px-8 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-accent-foreground bg-accent hover:opacity-90 transition-opacity duration-300 transform hover:scale-105 shadow-lg"
            >
                Contact Us
            </a>
        </div>
      </section>
    </div>
  );
}
