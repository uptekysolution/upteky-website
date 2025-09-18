'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, Zap, Settings, Linkedin, Facebook, Instagram, Layers, Users, Sparkles, Clock3, Repeat, MessagesSquare, Settings2, DollarSign, PhoneOff, Lightbulb, ChevronLeft, TrendingUp, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
// Add these icons to your existing import from lucide-react

const whatWeDoData = [
  {
    id: "conversational-ai",
    buttonText: "Conversational Agents",
    title: "Artificial Intelligence",
    imageSrc: "/images/what-we-do/ai-conversation.jpg", // Replace with your actual image path
    description:
      "Upteky Solutions Pvt. Ltd. specializes in creating robust Conversational AI solutions for web, messaging, and voice channels. From Website Chatbots and WhatsApp automation to AI-powered lead re-engagement and Voice Bots, we integrate advanced natural language processing, secure system connections, and actionable analytics to help businesses achieve measurable growth.",
    services: [
      "Interactive AI Website Chatbot",
      "WhatsApp & Multi-Platform Chatbot",
      "AI-Powered Lead Reactivation",
      "AI Voice Assistant (Voice Bot)",
    ],
  },
  {
    id: "automation-bi",
    buttonText: "AI Automation & Business Intelligence",
    title: "Intelligent Automation",
    imageSrc: "/images/what-we-do/automation-bi.jpg", // Replace with your actual image path
    description:
      "Streamline your operations and unlock data-driven insights. We develop custom automation workflows that eliminate repetitive tasks and integrate powerful business intelligence tools to transform raw data into actionable strategies, enhancing efficiency and decision-making across your organization.",
    services: [
      "Business Process Automation",
      "AI-Powered Data Analytics",
      "Custom ERP/CRM Solutions",
      "Intelligent Document Processing",
    ],
  },
  {
    id: "advanced-ai",
    buttonText: "Advanced AI Solutions",
    title: "Custom AI & Machine Learning",
    imageSrc: "/images/what-we-do/advanced-ai.jpg", // Replace with your actual image path
    description:
      "Go beyond off-the-shelf solutions with custom-trained AI models tailored to your unique challenges. Our expertise in machine learning, computer vision, and predictive analytics allows us to build powerful, proprietary systems that provide a distinct competitive advantage and solve complex business problems.",
    services: [
      "Custom Machine Learning Models",
      "Predictive Analytics & Forecasting",
      "Computer Vision Systems",
      "Natural Language Processing (NLP)",
    ],
  },
  {
    id: "web-development",
    buttonText: "Web Development Services",
    title: "Modern Web Solutions",
    imageSrc: "/images/what-we-do/web-development.jpg", // Replace with your actual image path
    description:
      "We build high-performance, scalable, and secure web applications that deliver exceptional user experiences. From dynamic e-commerce platforms to sophisticated enterprise portals, our development team leverages the latest technologies to create robust solutions that drive engagement and business growth.",
    services: [
      "Full-Stack Web Applications",
      "E-commerce & Marketplace Platforms",
      "API Development & Integration",
      "UI/UX Design & Prototyping",
    ],
  },
];


const problemSolutionStats = [
  {
    icon: <Clock3 />,
    mainNumber: "60%",
    label: "Delayed Lead Response",
    description: "AI agents respond instantly, improving lead conversion by up to 35%.",
  },
  {
    icon: <Repeat />,
    mainNumber: "30%",
    label: "Time on Repetitive Tasks",
    description: "AI automation frees up valuable time, allowing teams to focus on growth.",
  },
  {
    icon: <MessagesSquare />,
    mainNumber: "70%",
    label: "Repetitive Customer Queries",
    description: "AI chatbots and voice agents resolve these instantly, reducing support costs.",
  },
  {
    icon: <Zap />,
    mainNumber: "80%",
    label: "Instant Query Resolution",
    description: "Reduce wait times and improve client satisfaction with 24/7 AI agents.",
  },
  {
    icon: <Sparkles />,
    mainNumber: "25-40%",
    label: "Productivity Boost",
    description: "Let your team focus on what truly matters – AI handles the rest.",
  },
  {
    icon: <Settings2 />,
    mainNumber: "45%",
    label: "Tasks Automatable Now",
    description: "Start automating today and streamline your workflows effortlessly.",
  },
  {
    icon: <DollarSign />,
    mainNumber: "30%",
    label: "Operational Cost Reduction",
    description: "Cut costs while scaling customer service and internal processes.",
  },
  {
    icon: <PhoneOff />,
    mainNumber: "50%",
    label: "Uncontacted Marketing Leads",
    description: "AI follow-ups ensure no lead is left behind, increasing revenue opportunities.",
  },
];


const testimonials = [
  {
    quote: "The custom AI solutions from Upteky helped us simplify internal communication and automate key customer interactions. It's been a game-changer for how we manage operational flow.",
    author: "Ashish Talati",
    title: "Director, JM PlastoPack Pvt. Ltd",
    link: "https://www.jmplastopack.com/"
  },
  {
    quote: "Upteky's expertise transformed our website into a smart, user-friendly platform and integrated automated documentation, making our processes faster and more reliable. This upgrade has been a game-changer for our efficiency and team morale",
    author: "Lokesh Sharma",
    title: "Founder, Game Of Pharma",
    link: "https://gameofpharma.com/"
  },
  {
    quote: "Upteky built a smart, user-friendly website and automated our documentation with AI, streamlining daily operations and boosting team efficiency",
    author: "Pranav",
    title: "Founder, Vtalix Pvt. Ltd",
    link: "https://www.vtalix.com/"
  }
];

// Only 3 testimonials - no need for seamless loop
const seamlessTestimonials = testimonials;


const faqs = [
  {
    question: "What AI services does Upteky offer?",
    answer: "Upteky provides comprehensive AI solutions including chatbots, voice assistants, workflow automation, custom AI model development, AI-powered ERP and CRM systems, data analytics, and strategic AI consulting to help businesses transform their operations."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation timelines vary based on complexity. Simple chatbots can be deployed in 2-4 weeks, while comprehensive AI systems may take 2-6 months. We provide detailed project timelines during our initial consultation to ensure realistic expectations."
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer: "Yes, we offer comprehensive post-implementation support including maintenance, updates, training, and optimization. Our support packages are tailored to your needs, ensuring your AI solutions continue to deliver value and evolve with your business."
  },
  {
    question: "Can AI solutions integrate with existing business systems?",
    answer: "Absolutely. Our AI solutions are designed to seamlessly integrate with your existing systems including CRM, ERP, databases, and third-party applications. We ensure minimal disruption to your current workflows while maximizing the benefits of AI automation."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve diverse industries including healthcare, finance, e-commerce, manufacturing, education, and professional services. Our AI solutions are adaptable to specific industry requirements and compliance standards."
  },
  {
    question: "How do you ensure data security and privacy?",
    answer: "Data security is our top priority. We implement enterprise-grade security measures, comply with industry standards like GDPR and HIPAA, use encrypted data transmission, and provide secure cloud or on-premise deployment options based on your requirements."
  }
];




const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleHover = (index: number) => {
    setOpenIndex(index);
  };

  const handleLeave = () => {
    setOpenIndex(null);
  };

  

  return (
    <section className="w-full max-w-7xl mx-auto lg:max-w-[1560px] px-2 sm:px-6 lg:px-8 pt-[48px] sm:pt-[56px] md:py-[64px] pb-[40px] lg:pb-[64px] sm:pb-[44px]">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="w-[64px] sm:w-[88px] h-1 mt-2 bg-gradient-to-r from-[#F58F1D] to-[#E57D77] mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ transformOrigin: "center" }}
        />
      </div>

      {/* FAQ Items */}
      <div className="bg-[#2D2F33] divide-y-4 sm:divide-y-6 md:divide-y-8 divide-[#232629] rounded-lg sm:rounded-xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 
                        transition-all duration-300 
                        ${openIndex === index ? "bg-[#2D2F33]" : ""}`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleLeave}
          >
            <button
              onClick={() => handleClick(index)}
              className="flex items-center justify-between w-full text-left group md:pointer-events-none"
            >
              <span
                className={`text-xs sm:text-base  md:text-base font-medium 
                            transition-colors duration-300
                            ${openIndex === index ? "text-[#EE8741]" : "text-white"}`}
              >
                {faq.question}
              </span>

              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="transition-transform duration-300"
              >
                {openIndex === index ? (
                  <ChevronUp className="text-[#F58F1D] w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <ChevronDown className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </motion.div>
            </button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: openIndex === index ? 1 : 0,
                y: openIndex === index ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {openIndex === index && (
                <p className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState(whatWeDoData[0].id);
  const [accordionIndex, setAccordionIndex] = useState<number | null>(0); // ADD THIS STATE


  const socialMedia = [
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://in.linkedin.com/company/uptekysolution' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: 'https://m.facebook.com/uptekysolution/' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/uptekysolution?igsh=MTh4b2hxdTUwOWt5cg==' },
  ];

  const heroSectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: heroSectionRef,
    offset: ["start start", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.6, 0.8], [1, 0.3, 0]);

  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.6, 0.8], [1, 0.3, 0]);

  const x3 = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.6, 0.8], [1, 0.3, 0]);

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  const [animationIndex, setAnimationIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const STATS_INTERVAL = 3000;

  const duplicatedStats = [...problemSolutionStats, ...problemSolutionStats.slice(0, isMobile ? 1 : 3)];

  const [testimonialScrollIndex, setTestimonialScrollIndex] = useState(1); // Start at first real card
  const [isTestimonialAutoScrolling, setIsTestimonialAutoScrolling] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0); // For mobile carousel
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const statsScrollRef = useRef<HTMLDivElement>(null);
  const TESTIMONIAL_SCROLL_INTERVAL = 1000; // 1 second pause

  // Carousel state for mobile testimonials
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isTestimonialCarouselAutoScrolling, setIsTestimonialCarouselAutoScrolling] = useState(true);

  // Carousel navigation functions
  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === seamlessTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? seamlessTestimonials.length - 1 : prevIndex - 1
    );
  };

  function getTestimonialItemMetrics() {
    const scrollContainer = testimonialScrollRef.current;
    if (!scrollContainer) {
      return { cardWidthPx: 350, gapPx: 32 };
    }
    const firstCard = scrollContainer.querySelector('.testimonial-card') as HTMLElement | null;
    const computed = window.getComputedStyle(scrollContainer);
    const gapPx = parseFloat((computed.columnGap || computed.gap || '0').toString()) || 0;
    const cardWidthPx = firstCard?.clientWidth || 350;
    return { cardWidthPx, gapPx };
  }

  const handleStatsNavigation = (direction: 'prev' | 'next') => {
    const currentIsAutoScrolling = isAutoScrolling;
    setIsAutoScrolling(false);

    setAnimationIndex(prevIndex => {
      let newIndex;
      if (direction === 'next') {
        newIndex = prevIndex + 1;
        if (newIndex >= problemSolutionStats.length) {
          newIndex = 0;
        }
      } else {
        newIndex = prevIndex - 1;
        if (newIndex < 0) {
          newIndex = problemSolutionStats.length - 1;
        }
      }

      if (currentIsAutoScrolling) {
        setTimeout(() => setIsAutoScrolling(true), STATS_INTERVAL * 2);
      }
      return newIndex;
    });
  };

  const handleTestimonialNavigation = (direction: 'prev' | 'next') => {
    const currentIsAutoScrolling = isTestimonialAutoScrolling;
    setIsTestimonialAutoScrolling(false);

    const scrollContainer = testimonialScrollRef.current;
    if (!scrollContainer) return;

    setTestimonialScrollIndex(prevIndex => {
      let newIndex = direction === 'next' ? prevIndex + 1 : prevIndex - 1;
      const { cardWidthPx, gapPx } = getTestimonialItemMetrics();
      const total = testimonials.length;
      // If next, and we reach the appended duplicate, jump to first real card
      if (direction === 'next' && newIndex === total + 1) {
        scrollContainer.scrollTo({ left: (cardWidthPx + gapPx) * (total + 1), behavior: 'smooth' });
        setTimeout(() => {
          scrollContainer.scrollTo({ left: (cardWidthPx + gapPx) * 1, behavior: 'auto' });
        }, 350);
        newIndex = 1;
      }
      // If prev, and we reach the prepended duplicate, jump to last real card
      else if (direction === 'prev' && newIndex === 0) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        setTimeout(() => {
          scrollContainer.scrollTo({ left: (cardWidthPx + gapPx) * total, behavior: 'auto' });
        }, 350);
        newIndex = total;
      } else {
        scrollContainer.scrollTo({ left: (cardWidthPx + gapPx) * newIndex, behavior: 'smooth' });
      }
      if (currentIsAutoScrolling) {
        setTimeout(() => setIsTestimonialAutoScrolling(true), TESTIMONIAL_SCROLL_INTERVAL * 2);
      }
      return newIndex;
    });
  };

  useEffect(() => {
    if (problemSolutionStats.length === 0) return;
    let intervalId: NodeJS.Timeout | undefined;

    if (isAutoScrolling) {
      intervalId = setInterval(() => {
        setAnimationIndex(prevIndex => {
          if (prevIndex >= problemSolutionStats.length - 1) {
            setTimeout(() => {
              setAnimationIndex(0);
            }, 50);
            return problemSolutionStats.length;
          }
          return prevIndex + 1;
        });
      }, STATS_INTERVAL);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoScrolling, isMobile, problemSolutionStats.length]);

  // Auto-scroll for testimonial carousel
  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isTestimonialCarouselAutoScrolling) {
      intervalId = setInterval(() => {
        setCurrentTestimonialIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= seamlessTestimonials.length ? 0 : nextIndex;
        });
      }, 4000); // Change slide every 4 seconds

      return () => {
        if (intervalId) clearInterval(intervalId);
      };
    }
  }, [isTestimonialCarouselAutoScrolling, seamlessTestimonials.length]);

  // Testimonial auto-scroll effect (robust, always works)
  useEffect(() => {
    const scrollContainer = testimonialScrollRef.current;
    if (!scrollContainer) return;

    const total = testimonials.length;
    const currentIndexRef = { current: 1 };
    let timeoutId: NodeJS.Timeout | undefined;

    // On mount, scroll to the first real card (index 1)
    function scrollToIndex(index: number, behavior: ScrollBehavior = 'smooth') {
      if (!scrollContainer) return;
      const { cardWidthPx, gapPx } = getTestimonialItemMetrics();
      const scrollPosition = (cardWidthPx + gapPx) * index;
      scrollContainer.scrollTo({ left: scrollPosition, behavior });
    }
    scrollToIndex(1, 'auto');
    currentIndexRef.current = 1;

    function autoScroll() {
      if (!scrollContainer) return;
      currentIndexRef.current++;
      scrollToIndex(currentIndexRef.current);
      if (currentIndexRef.current === total + 1) {
        setTimeout(() => {
          if (!scrollContainer) return;
          scrollToIndex(1, 'auto');
          currentIndexRef.current = 1;
          timeoutId = setTimeout(autoScroll, 2000);
        }, 350); // match the smooth scroll duration
      } else {
        timeoutId = setTimeout(autoScroll, 2000);
      }
    }
    timeoutId = setTimeout(autoScroll, 2000);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [testimonials.length]);

  const insightsSectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = insightsSectionRef.current;
    if (!section) return;

    const pauseOnHover = () => {
      if (isAutoScrolling) {
        setIsAutoScrolling(false);
      }
    };
    const resumeOnLeave = () => {
      setIsAutoScrolling(true);
    };

    section.addEventListener('mouseenter', pauseOnHover);
    section.addEventListener('mouseleave', resumeOnLeave);
    return () => {
      section.removeEventListener('mouseenter', pauseOnHover);
      section.removeEventListener('mouseleave', resumeOnLeave);
    };
  }, [isAutoScrolling]);


  return (
    <div className="flex flex-col bg-gradient-to-br from-[#2d3436] to-[#000000] text-foreground min-h-screen overflow-x-hidden">
      <section
        ref={heroSectionRef}
        className={cn(
          "relative flex flex-col items-center justify-center",
          "h-screen",
          "px-4 md:px-6",
          "pt-8 sm:pt-12 md:pt-16",
          "overflow-hidden snap-start"
        )}
      >
        {/* Enhanced Background Animation Layer */}
        <div className="absolute top-0 left-0 right-0 w-full h-full z-0" aria-hidden="true">
          <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="xMidYMin slice">
            <defs>
              <linearGradient id="arcGradientHero" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF8B06" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FF8B06" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FF8B06" stopOpacity="0.8" />
              </linearGradient>

              <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF8B06" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FF8B06" stopOpacity="0.7" />
              </linearGradient>

              <filter id="premiumGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="25" result="coloredBlur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="1.5" />
                </feComponentTransfer>
                <feMerge>
                  {/* <feMergeNode in="coloredBlur" /> */}
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* <radialGradient id="centerGlow" cx="50%" cy="5%" r="70%" fx="50%" fy="0%">
                <stop offset="0%" stopColor="#FF8B06" stopOpacity="0.35" />
                <stop offset="30%" stopColor="#FF8B06" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#FF8B06" stopOpacity="0" />
              </radialGradient> */}

              <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="glow" />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.g style={{ transform: isMobile ? 'translateY(100px)' : 'translateY(-20px)' }}>
              <rect width="100%" height="65%" y="0" fill="url(#centerGlow)" />

              <motion.path
                d="M -100,430 Q 720,-170 1540,430"
                stroke="url(#arcGradientHero)"
                strokeWidth="14"
                fill="none"
                filter="url(#premiumGlow)"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.8], [1, 0]) }}
              />

              <motion.path
                d="M -100,390 Q 720,-170 1540,390"
                stroke="#FF8B06"
                strokeWidth="4"
                fill="none"
                filter="url(#particleGlow)"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.7], [0.8, 0]) }}
              />

              <motion.path
                d="M -100,450 Q 720,-150 1540,450"
                stroke="url(#secondaryGradient)"
                strokeWidth="10"
                fill="none"
                filter="url(#particleGlow)"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.75], [0.9, 0]) }}
              />

              <motion.path
                d="M -100,410 Q 720,-178 1540,410"
                stroke="#FF8B06"
                strokeWidth="3"
                strokeDasharray="3 30"
                strokeLinecap="round"
                fill="none"
                className="animate-dash-fast"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.6], [0.6, 0]) }}
              />

              <motion.circle cx="400" cy="355" r="3" fill="#FF8B06" filter="url(#particleGlow)" className="animate-float" style={{ animationDuration: '6s', opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }} />
              <motion.circle cx="700" cy="395" r="4" fill="#FF8B06" filter="url(#particleGlow)" className="animate-float" style={{ animationDuration: '8s', animationDelay: '1s', opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }} />
              <motion.circle cx="1000" cy="375" r="3" fill="#FF8B06" filter="url(#particleGlow)" className="animate-float" style={{ animationDuration: '7s', animationDelay: '0.5s', opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }} />
              <motion.circle cx="1200" cy="435" r="2" fill="#FF8B06" filter="url(#particleGlow)" className="animate-float" style={{ animationDuration: '5s', animationDelay: '1.5s', opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }} />
              <motion.circle cx="300" cy="465" r="2" fill="#FF8B06" filter="url(#particleGlow)" className="animate-float" style={{ animationDuration: '9s', animationDelay: '2s', opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }} />
              <motion.circle cx="900" cy="345" r="3" fill="#FF8B06" filter="url(#particleGlow)" className="animate-float" style={{ animationDuration: '7s', animationDelay: '0.2s', opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) }} />

              <motion.g style={{ opacity: useTransform(scrollYProgress, [0, 0.7], [1, 0]) }}>
                <motion.line
                  x1="-100" y1="405" // Adjusted Y
                  x2="100" y2="435"  // Adjusted Y
                  stroke="#FF8B06"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="animate-shooting-star"
                  style={{ animationDuration: '4s', animationDelay: '0s' }}
                />
                <motion.line
                  x1="1200" y1="375" // Adjusted Y
                  x2="1400" y2="405"  // Adjusted Y
                  stroke="#FF8B06"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="animate-shooting-star"
                  style={{ animationDuration: '5s', animationDelay: '0s' }}
                />
              </motion.g>
            </motion.g>
          </svg>
        </div>

        <div className="relative z-10  container mx-auto text-center flex flex-col h-full justify-center pb-10 sm:pb-0">
          <div className="relative inline-block hero-text-container">
            <motion.h1
              className="text-4xl sm:text-5xl mt-[90px] sm:mt-64  md:mt-56 lg:mt-40 md:text-6xl  lg:text-7xl 2xl:text-8xl font-extrabold leading-tight text-foreground hero-text-transform"
              style={{ x: x1, opacity: opacity1, originX: 0.5, originY: 0.5, textShadow: '0 0 1px rgba(0,0,0,0.1)' }}
            >
              Smarter Decisions
            </motion.h1>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold leading-tight text-gradient-accent hero-text-ease my-1"
              style={{ x: x2, opacity: opacity2, originX: 0.5, originY: 0.5, textShadow: '0 0 1px rgba(0,0,0,0.1)' }}
            >
              Faster Results
            </motion.h1>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold leading-tight text-foreground hero-text-ai"
              style={{ x: x3, opacity: opacity3, originX: 0.5, originY: 0.5, textShadow: '0 0 1px rgba(0,0,0,0.1)' }}
            >
              Powered By AI
            </motion.h1>
            <motion.div
              className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-1.5 sm:h-2 bg-gradient-accent rounded-full shadow-glow"
              style={{ opacity: contentOpacity }}
            />
          </div>

          <div className="flex flex-col items-center mt-4 sm:mt-6">
            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 max-w-xl md:max-w-2xl mx-auto leading-relaxed pt-3"
              style={{ y: contentY, opacity: contentOpacity }}
            >
              Empowering enterprise solutions that deliver measurable results through intelligent automation and cutting-edge AI technology.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              style={{ y: contentY, opacity: contentOpacity }}
            >
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"></div>
              <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-accent/40 shadow-lg px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold">
                <Link href="/solution">Get Started</Link> <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent/90 transition-all duration-300 shadow-sm hover:shadow-md hover:border-accent/70 px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Industry Insights Section - Enhanced & Animated */}
      <section ref={insightsSectionRef} id="stats-section" className="py-12 md:py-16 bg-background/30 backdrop-blur-sm relative overflow-hidden snap-start">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)',
            backgroundSize: '20px 20px'
          }}>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-12">
           
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 mb-3 sm:mb-4 text-foreground"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Real Problems, AI Solutions
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Discover how AI tackles key business challenges and unlocks new opportunities for growth and efficiency.
            </motion.p>
           
          </div>

          {problemSolutionStats.length > 0 && (
            <div className="relative w-full overflow-hidden">
              <motion.div
                ref={statsScrollRef}
                className="flex pb-8"
                animate={{
                  x: `-${animationIndex * (100 / (isMobile ? 1 : 3))}%`,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                drag={isMobile ? "x" : false}
                dragConstraints={{ left: -(problemSolutionStats.length - 1) * 100, right: 0 }}
                onDragEnd={(event, info) => {
                  if (isMobile) {
                    const offset = info.offset.x;
                    const velocity = info.velocity.x;
                    const threshold = 100 / 2;

                    if (offset < -threshold || velocity < -500) {
                      handleStatsNavigation('next');
                    } else if (offset > threshold || velocity > 500) {
                      handleStatsNavigation('prev');
                    }
                  }
                }}
              >
                {duplicatedStats.map((stat, index) => (
                  <div key={index} className={cn(
                    "flex-shrink-0 px-3 sm:px-4 py-1 stats-card",
                    isMobile ? "w-full" : "md:w-1/3"
                  )}>
                    <Card className="h-full bg-card/80 border border-border/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-accent/20 hover:-translate-y-1 flex flex-col backdrop-blur-sm group">
                      <CardContent className="p-6 md:p-8 flex-grow flex flex-col items-center text-center">
                        <div className="bg-accent/10 group-hover:bg-accent/20 p-3 rounded-full inline-block transition-colors duration-300 mb-4">
                          {React.cloneElement(stat.icon as React.ReactElement, { className: "w-8 h-8 text-accent" })}
                        </div>
                        <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:text-accent-dark transition-colors duration-300">
                          {stat.mainNumber}
                        </div>
                        <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3 min-h-[2.5em] group-hover:text-foreground/90 transition-colors duration-300">{stat.label}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed min-h-[3.6em]">{stat.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* What We Do – End-to-End Solutions */}
<section className="py-12 md:py-16 bg-background/30 backdrop-blur-sm snap-start">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-10 md:mb-12">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        What We Do – End-to-End Solutions
      </motion.h2>
    </div>

    {/* Conditionally render based on screen size */}
    {isMobile ? (
      // ======================================================
      // NEW: Mobile Accordion Layout
      // ======================================================
      <motion.div
        className="bg-[#2D2F33] divide-y-2 divide-[#232629] rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        {whatWeDoData.map((tab, index) => (
          <div key={tab.id} className="p-4">
            <button
              onClick={() => setAccordionIndex(accordionIndex === index ? null : index)}
              className="flex items-center justify-between w-full text-left group"
            >
              <span className={`text-base font-medium transition-colors duration-300 ${accordionIndex === index ? "text-[#EE8741]" : "text-white"}`}>
                {tab.buttonText}
              </span>
              <motion.div
                animate={{ rotate: accordionIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {accordionIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#F58F1D]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white" />
                )}
              </motion.div>
            </button>
            
            <AnimatePresence>
              {accordionIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                    <Image src={tab.imageSrc} alt={tab.title} fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tab.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm">{tab.description}</p>
                  <div className="flex flex-col gap-2">
                    {tab.services.map((service, sIndex) => (
                      <div key={sIndex} className="flex items-center gap-3 text-gray-200 text-sm">
                        <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    ) : (
      // ======================================================
      // EXISTING: Desktop Two-Column Layout
      // ======================================================
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        <motion.div
          className="lg:w-1/3 bg-[#2C3035] p-3 rounded-2xl flex flex-col justify-evenly"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {whatWeDoData.map((tab, index) => (
            <React.Fragment key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "p-4 rounded-lg text-center transition-all duration-300 font-medium w-full",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  activeTab === tab.id
                    ? "bg-[#4A4E54] text-white shadow-lg rounded-full"
                    : "bg-transparent text-gray-300 hover:bg-[#2A2D31] rounded-full"
                )}
              >
                {tab.buttonText}
              </button>
              {index < whatWeDoData.length - 1 && <div className="h-px bg-gray-600/50 mx-4" />}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          className="lg:w-2/3 bg-[#2C3035] p-6 md:p-8 rounded-2xl"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {(() => {
              const currentTab = whatWeDoData.find(tab => tab.id === activeTab);
              if (!currentTab) return null;

              return (
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="relative w-full h-48 md:h-60 rounded-lg overflow-hidden mb-6">
                    <Image src={currentTab.imageSrc} alt={currentTab.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 67vw" />
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{currentTab.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{currentTab.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {currentTab.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-200">
                        <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </motion.div>
      </div>
    )}
  </div>
</section>
       
{/* Powering Innovation For */}
<section className="py-16 md:py-20 bg-background/20 backdrop-blur-sm snap-start font-[Poppins]">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-12">
      <motion.h2
        className="font-[Outfit] text-[45px] font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Powering Innovation For
      </motion.h2>
      <motion.p
        className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Tailored technology solutions for startups, small businesses, enterprises, and agencies – driving innovation,
        scalability, and sustainable growth at every stage.
      </motion.p>
    </div>

    <div className=" space-y-8">
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-stretch"> {/* CHANGED: Back to 10-column grid for the 4:6 ratio */}
        {/* Startups */}
        <motion.div
          className="md:col-span-4 bg-[#2A2D31] border border-gray-700/50 rounded-[30px] p-8 hover:bg-[#2F3236] transition-all duration-300 h-full flex flex-col" /* CHANGED: Spans 4 of 10 columns */
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image src="/icons/startup.png" alt="Startups" width={32} height={32} className="mb-4" />
          <h3 className="font-[Outfit] text-2xl font-semibold text-white mb-3">Startups Business</h3>
          <p className="text-gray-400 text-base leading-relaxed">
            We specialize in MVP development, rapid prototyping, and flexible engagement models, helping startups scale from
            idea to launch. With a diverse tech stack and proactive execution, we act as their extended team, managing
            technology while they focus on growth.
          </p>
        </motion.div>

        {/* Small Business */}
        <motion.div
          className="md:col-span-6 bg-[#2A2D31] border border-gray-700/50 rounded-[30px] p-8 hover:bg-[#2F3236] transition-all duration-300 h-full flex flex-col" /* CHANGED: Spans 6 of 10 columns */
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image src="/icons/smallbusiness.png" alt="Small Business" width={32} height={32} className="mb-4" />
          <h3 className="font-[Outfit] text-2xl font-semibold text-white mb-3">Small Business</h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Small businesses seek to scale and boost efficiency through technology and that's where we deliver value. From UI/UX design and development to QA
            and cloud deployment, we provide complete, end-to-end custom
            technology solutions under one roof.
          </p>
        </motion.div>
      </div>

      {/* Second Row (This remains unchanged as the 3 cards are already equal) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Enterprise */}
        <motion.div
          className="bg-[#2A2D31] border border-gray-700/50 rounded-[30px] p-8 hover:bg-[#2F3236] transition-all duration-300 h-full flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image src="/icons/enterprise.png" alt="Enterprise" width={32} height={32} className="mb-4" />
          <h3 className="font-[Outfit] text-2xl font-semibold text-white mb-3">Enterprise Business</h3>
          <p className="text-gray-400 text-base leading-relaxed">
            We build enterprise-grade solutions that drive measurable impact, from clinical systems to insurance platforms. Our
            products power global multi-million-dollar businesses, with enterprises preferring our
            scalable dedicated hire model to match
            evolving needs.
          </p>
        </motion.div>

        {/* Agency */}
        <motion.div
          className="bg-[#2A2D31] border border-gray-700/50 rounded-[30px] p-8 hover:bg-[#2F3236] transition-all duration-300 h-full flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image src="/icons/agency.png" alt="Agency" width={32} height={32} className="mb-4" />
          <h3 className="font-[Outfit] text-2xl font-semibold text-white mb-3">Agency Business</h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Upteky offers free business analysis, tech consultation, and tailored solutions. With
            flexible models and expert teams, we help
            enterprises scale efficiently, accelerate
            growth, and maximize customer value
            globally.
          </p>
        </motion.div>

        {/* Innovation */}
        <motion.div
          className="bg-[#2A2D31] border border-gray-700/50 rounded-[30px] p-8 hover:bg-[#2F3236] transition-all duration-300 flex flex-col justify-between h-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div>
            <Image src="/icons/innovation.png" alt="Innovation" width={32} height={32} className="mb-4" />
            <h3 className="font-[Outfit] text-2xl font-semibold text-white mb-3">Bringing Innovation Together</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Upteky's R&D team ensures clients stay ahead with early tech adoption, seamless
              execution, and access to the latest innovations in a fast-evolving digital
              landscape.
            </p>
          </div>
          <div>
            <Button
              className="bg-[#2A2D31] border border-gray-500 text-gray-200 hover:bg-gray-700 hover:border-gray-400 transition-all duration-300 px-5 py-2 rounded-full text-sm"
            >
              Get In Touch →
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

{/* Our Process */}
<section className="py-16 md:py-20 bg-[#232629] text-white font-poppins">
  <div className="container mx-auto px-4 md:px-6">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4 font-outfit"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Our Process
      </motion.h2>
      <motion.p
        className="text-gray-400 max-w-3xl mx-auto text-lg" /* CHANGED: to text-lg */
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        A streamlined journey from idea to impact – guiding you through every stage with
        clarity, innovation, and measurable results.
      </motion.p>
    </div>

    {/* Process Steps Data */}
    {(() => {
      const processSteps = [
        {
          step: "01",
          title: "Consultation & Discovery",
          description: "Understand your business challenges and uncover hidden opportunities with tailored AI and IT solutions designed to accelerate growth and efficiency.",
        },
        {
          step: "02",
          title: "Solution Design",
          description: "We combine AI, IT, and web expertise to craft the right-fit solutions that empower businesses with innovation, scalability, and measurable growth.",
        },
        {
          step: "03",
          title: "Development & Implementation",
          description: "Delivering smooth and secure execution with reliable processes, robust technology, and enterprise-grade solutions that ensure efficiency, trust, and long-term success.",
        },
        {
          step: "04",
          title: "Optimization & Training",
          description: "We ensure adoption and efficiency through tailored guidance, streamlined processes, and continuous improvements that maximize business impact.",
        },
        {
          step: "05",
          title: "Ongoing Support & Scaling",
          description: "Enabling continuous growth with technology through proactive support, scalable systems, and future-ready solutions tailored for businesses.",
        },
      ];

      return (
        // Outer Box
        <div className="border border-neutral-800 rounded-2xl overflow-hidden bg-[#2C2F33]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className={cn(
                  "text-left",
                  // Re-organized classes for clarity
                  {
                    // For the last item, center it and give it more padding
                    "md:col-span-2 flex flex-col items-left text-left p-10 md:p-12": index === 4,
                    // For all other items
                    "p-10": index < 5,
                    // Border logic
                    "border-b border-neutral-800": index < processSteps.length - 1 && index !== 4, // All but last two items get bottom border
                    "md:border-r border-neutral-800": index % 2 === 0 && index < 4, // Items 0 and 2 get a right border on desktop
                  }
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Constrain width of the centered last item */}
                <div className={cn({ "md:w-2/3 lg:w-1/2": index === 4 })}>
                  <span className="block text-xl font-bold text-[#F58F1D] mb-4"> {/* CHANGED: text-lg to text-xl */}
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mb-3 font-outfit"> {/* CHANGED: text-xl to text-2xl */}
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed font-poppins"> {/* CHANGED: text-sm to text-base */}
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      );
    })()}
  </div>
</section>

{/* Why Choose Upteky Solutions */}
<section className="py-16 md:py-20 bg-[#232629] text-white font-poppins">
  <div className="container mx-auto px-4 md-px-6">
    {(() => {
      // Data for the 5 feature cards
      const whyChooseData = [
        {
          title: "All-in-One Partner",
          description: "AI + Web + IT under one roof",
        },
        {
          title: "Tailored Solutions",
          description: "Customized for your business model",
        },
        {
          title: "Scalable Technology",
          description: "Grow without limitations",
        },
        {
          title: "Proven Track Record",
          description: "Trusted by global clients across industries",
        },
        {
          title: "Round-the-Clock Support",
          description: "Because business never sleeps",
        },
      ];

      return (
        // A single grid container for the text block AND all 5 cards
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          
          {/* Grid Item 1: The Heading Block */}
          <motion.div
            className="flex flex-col justify-center text-center lg:text-left p-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-outfit mb-4">
              Why Choose Upteky Solutions?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses with innovation, scalability, and trusted expertise delivering solutions that truly drive growth.
            </p>
          </motion.div>

          {/* Grid Items 2-6: The 5 Feature Cards */}
          {whyChooseData.map((item, index) => (
            <motion.div
              key={index}
              // ADDED min-h-[240px] to enforce a consistent minimum height for ALL cards
              className="bg-[#2C2F33] border border-neutral-800 rounded-2xl p-6 flex flex-col h-full text-center transition-all duration-300 hover:border-indigo-500/50 hover:-translate-y-1 min-h-[240px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-white font-outfit pb-4">
                  {item.title}
                </h3>
                {/* Divider Line: Centered using mx-auto */}
                <div className="h-px bg-neutral-700 w-2/3 mx-auto" /> 
                <p className="text-gray-400 text-sm pt-4">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      );
    })()}
  </div>
</section>

      
      {/* -----------------------------------------------Here from our clients-------------------------------------------------- */}
<section className="py-12 px-6 md:py-16 bg-opacity-90 bg-background/30 backdrop-blur-sm border-t border-border/20 snap-start">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center mb-10 md:mb-12">
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 mb-3 sm:mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Hear From Our Clients
      </motion.h2>
      <motion.p
        className="text-gray-400 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Real businesses, real results — showcasing the impact of our solutions.
      </motion.p>
    </div>

    {/* Desktop Grid Layout (Unchanged) */}
    <div className="hidden lg:grid grid-cols-3 gap-8 xl:gap-24 2xl:gap-24 max-w-auto sm:w-full mx-auto">
      {seamlessTestimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className={`flex justify-center ${index === 1 ? " lg:mt-16 md:mt-0" : ""}`}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: "easeOut",
          }}
        >
          <div className="relative bg-gradient-to-b from-[#232629]/[0.18] to-[#23272B] backdrop-blur-sm border border-border/20 shadow-[0_4px_10px_rgba(142,142,142,0.3)] p-3 transition-all duration-300 group flex flex-col w-full max-w-[400px] sm:max-w-[500px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] h-[320px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px] 2xl:h[400px] rounded-[20px]">
            <div className=" flex-grow z-10 flex flex-col ">
              <div className="text-center mb-4 lg:mb-6 sm:mb-6 md:mb-6 xl:mb-6 2xl:mb-6">
                <p className="font-semibold text-accent text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl justify-center items-start mt-10 tracking-tight">
                  {testimonial.author}
                </p>
                <p className="text-xs sm:text-xl md:text-base lg:text-base xl:text-base 2xl:text-base mt-1 text-white ">{testimonial.title}</p>
              </div>
              <div className="h-px bg-gray-600 opacity-60 w-full " ></div>
              <div className="flex-grow flex justify-center mt-6 2xl:mt-10 xl:mt-8 xl:px-6 lg:mt-8 md:mt-10 sm:mt-10 px-2 md:px-8 lg:px-4 2xl:px-12 ">
                <p className="text-white/60 text-center text-sm sm:text-xl md:text-base lg:text-base xl:text-base 2xl:text-base leading-snug tracking-tighter">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* ====================================================== */}
    {/* UPDATED: Mobile/Tablet Carousel Layout                 */}
    {/* ====================================================== */}
    <div className="lg:hidden">
      {/* The flex container with arrows is removed */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex" // Removed transition classes, framer handles it
          animate={{ x: `-${currentTestimonialIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}

          // ADDED: Drag gesture for swipe navigation
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipeThreshold = 50; // Min drag distance to trigger swipe
            if (offset.x < -swipeThreshold) {
              goToNextTestimonial();
            } else if (offset.x > swipeThreshold) {
              goToPreviousTestimonial();
            }
          }}
        >
          {seamlessTestimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4"> {/* Adjusted padding */}
              <motion.div
                // REMOVED: max-w-... classes to make the card wider
                // ADDED: min-h-... to maintain a consistent height
                className="relative bg-gradient-to-b from-[#232629]/[0.18] to-[#23272B] backdrop-blur-sm border border-border/20 shadow-[0_4px_10px_rgba(142,142,142,0.3)] p-4 sm:p-6 transition-all duration-300 group flex flex-col w-full mx-auto min-h-[340px] sm:min-h-[360px] rounded-[20px] mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className="flex flex-col h-full">
                  <div className="text-center mb-4 sm:mb-5">
                    <p className="font-semibold text-accent text-base sm:text-lg md:text-xl justify-center items-center mt-4 sm:mt-5 tracking-tight">
                      {testimonial.author}
                    </p>
                    <p className="text-sm sm:text-base mt-1 text-white">{testimonial.title}</p>
                  </div>
                  <div className="h-px bg-gray-600 opacity-60 w-full mb-4 sm:mb-5"></div>
                  <div className="flex-1 flex justify-center items-center px-2 sm:px-4 overflow-hidden">
                    <p className="text-white/60 text-center text-sm sm:text-base leading-snug md:leading-relaxed tracking-tight">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* FAQ Section */}
      <section className=" bg-background/30 backdrop-blur-sm border-t border-b border-border/20 snap-start">
        <FAQSection />
      </section>

      {/* CTA Section - Enhanced */}
      {/* <section className='py-12 md:py-16 md:pt-0 bg-background/30 backdrop-blur-sm text-foreground snap-start'>


      </section> */}
      {/* Free Consultation - two column form */}
      <section className="py-12 md:py-16  bg-opacity-90  bg-background/30 backdrop-blur-sm border-t border-border/20 snap-start">
        <div className="container mx-auto px-4 md:px-6">
          <div className="w-full max-w-auto lg:max-w-[1273px] mx-auto shadow-[0_4px_10px_rgba(142,142,142,0.3)] bg-[#232629] backdrop-blur-lg rounded-[30px] border border-gray-600/30  p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1  lg:grid-cols-5 gap-8 lg:gap-10 items-center">
              {/* Left info column */}
              <div className="flex flex-col h-full lg:col-span-2">
                <div>
                  <h2 className="text-[18px] sm:text-2xl md:text-2xl lg:text-2xl  xl:text-3xl 2xl:text-4xl font-bold text-foreground mb-3 mt-1 lg:mt-6 pt-6 whitespace-nowrap ">Ready for Free Consultation?</h2>
                  <p className=" mb-14 text-sm sm:text-base md:text-base lg:text-base xl:text-xl 2xl:text-xl text-muted-foreground font-semibold whitespace-wrap">
                    Your Demand for IT & AI Expert 
                    and  free consultation anytime
                  </p>
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center gap-3 text-sm">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-accent  "><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                      <span className="text-foreground text-sm sm:text-[18px] whitespace-nowrap">Email us:</span>
                      <span className="text-muted-foreground text-sm sm:text-[18px]">hello@upteky.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-accent"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                      <span className="text-foreground text-sm sm:text-[18px] whitespace-nowrap">Phone :</span>
                      <span className="text-muted-foreground whitespace-nowrap text-sm sm:text-[18px] ">+91 1234567890</span>
                    </div>
                  </div>

                  <div className="lg:mt-60 md:mt-10 xl:mt-40 2xl:mt-40 sm:mt-5  mt-6 ">
                    <p className="text-sm text-foreground mb-2 text-[18px]">Follow Us:</p>
                    <div className="flex gap-3">
                      <div className="flex space-x-2">
                        {socialMedia.map((social) => (
                          <Link
                            key={social.name}
                            href={social.href}
                            aria-label={social.name}
                            className="p-2.5 rounded-full bg-secondary/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {social.icon}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right form column */}
              <div className=" bg-[#2F3133] rounded-[30px] px-5 py-10 sm:px-14  sm:py-10 my-3 md:p-6 border border-muted-foreground/10 lg:col-span-3 2xl:ml-12">
                <form className="space-y-6 ">
                  <div className="space-y-3">
                    {/* First Name - Full Width */}
                    <div>
                      <input type="text" placeholder="Full Name*" className="w-full   my-4 bg-transparent border-b border-muted-foreground/50 p-0 sm:pb-2 sm:pt-0 focus:border-accent focus:outline-none placeholder:text-base placeholder:text-muted-foreground" />
                    </div>

                    {/* Email and Phone - Side by Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input type="email" placeholder="Email*" className="w-full  mb-4 bg-transparent border-b border-muted-foreground/50 pb-2 focus:border-accent focus:outline-none placeholder:text-base placeholder:text-muted-foreground" />
                      </div>
                      <div>
                        <input type="text" placeholder="Phone number" className="w-full mb-4 bg-transparent border-b border-muted-foreground/50 pb-2 focus:border-accent focus:outline-none placeholder:text-base placeholder:text-muted-foreground" />
                      </div>
                    </div>

                    {/* Describe your project - Full Width */}
                    <div>

                      <textarea rows={3} placeholder="Describe your project" className="w-full mb-4 bg-transparent border-b border-muted-foreground/50 pb-2 focus:border-accent focus:outline-none resize-none placeholder:text-base placeholder:text-muted-foreground" />
                    </div>
                  </div>

                  <div>
                    <p className="text-base text-muted-foreground font-medium mb-3">Services</p>
                    <div className="flex flex-wrap gap-2">
                      {[...new Set(['Web development', 'AI automation', 'IT consultation', 'Custom solution', 'IT consultation', 'Voicebots', 'Chatbots', 'App development'])].map((s, idx) => (
                        <button key={`${s}-${idx}`} type="button" className="px-6 py-3 text-[12px] mx-1  text-foreground hover:text-accent rounded-full border border-muted-foreground/50 transition-colors">{s}</button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button type="button" className="w-full sm:w-auto flex-1 px-4 py-3 bg-muted/40 hover:bg-muted text-muted-foreground rounded-full border border-border/40 transition-colors flex items-center justify-center gap-2">
                      <span className="text-lg">+</span> Attach File(s)
                    </button>
                    <Button
                      type="submit"
                      className="w-full sm:w-auto 
                      bg-gradient-accent 
                      text-[14px] 
                      text-white 
                      rounded-[30px] 
                      px-16 py-7 
                      border-transparent   /* reserve 1px border */
                      hover:bg-none hover:bg-[#2c2c2c] 
                      hover:text-accent 
                      hover:border-accent
                      transition-all duration-300" 
                    >
                      Send
                    </Button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      <style jsx global>{`
         .hero-text-container {
           padding-top: 0;
           margin-bottom: 0;
           position: relative;
         }
         @media (min-width: 640px) { /* sm */
           .hero-text-container {
             padding-top: 0;
             margin-bottom: 0;
           }
         }
         @media (min-width: 1024px) { /* lg */
           .hero-text-container {
            padding-top: 0;
            margin-bottom: 0;
           }
         }
          @media (min-width: 1536px) { /* 2xl */
           .hero-text-container {
             padding-top: 0; 
             margin-bottom: 0;
           }
         }
         .hero-text-transform, .hero-text-ease, .hero-text-ai {
            transform-origin: center;
            will-change: transform, opacity;
         }
         .hero-text-ease {
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
         }

         @keyframes dash-fast {
           to {
             stroke-dashoffset: 1000;
           }
         }
        .animate-dash-fast {
          animation: dash-fast 20s linear infinite;
        }

         @keyframes float {
           0% { transform: translateY(0px); opacity: 0.6; }
           50% { transform: translateY(-12px); opacity: 0.9; }
           100% { transform: translateY(0px); opacity: 0.6; }
         }
        .animate-float {
          animation: float 8s infinite ease-in-out;
        }

        @keyframes shootingStar {
          0% {
            opacity: 0;
            stroke-width: 0;
            transform: translateX(0) translateY(0);
          }
          30% {
            opacity: 1;
            stroke-width: 2px;
          }
          100% {
            opacity: 0;
            stroke-width: 0;
            transform: translateX(300px) translateY(30px);
          }
        }
        .animate-shooting-star {
          animation: shootingStar 6s linear infinite;
          opacity: 0;
        }

        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
         /* Testimonial carousel layout: exact n-per-view by breakpoint */
         .testimonial-scroll {
           display: flex;
           gap: 1rem; /* default */
         }
         @media (min-width: 768px) { /* md */
           .testimonial-scroll { gap: 1.5rem; }
         }
         @media (min-width: 1024px) { /* lg */
           .testimonial-scroll { gap: 1.5rem; }
         }
         @media (min-width: 1280px) { /* xl */
           .testimonial-scroll { gap: 1.5rem; }
         }
         /* Widths: 1 per view on small, 2 on md, 3 on lg, 4 on xl+ */
         .testimonial-card { width: calc((100% - (1 * var(--ts-gap, 1rem))) / 2); }
         @media (max-width: 639.98px) {
           .testimonial-card { width: 100%; }
         }
         @media (min-width: 640px) and (max-width: 767.98px) {
           .testimonial-card { width: 80vw; }
         }
         @media (min-width: 768px) and (max-width: 1023.98px) { /* md: 2 per view */
           .testimonial-card { width: calc((100% - (1 * 1.5rem)) / 2); }
         }
         @media (min-width: 1024px) and (max-width: 1279.98px) { /* lg: 3 per view */
           .testimonial-card { width: calc((100% - (2 * 1.5rem)) / 3); }
         }
         @media (min-width: 1280px) { /* xl+: 4 per view */
           .testimonial-card { width: calc((100% - (3 * 1.5rem)) / 4); }
         }
       `}</style>
    </div>
  );
}


