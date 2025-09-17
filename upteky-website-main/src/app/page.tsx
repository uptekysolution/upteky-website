'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, Zap, Settings, Linkedin, Facebook, Instagram, Layers, Users, Sparkles, Clock3, Repeat, MessagesSquare, Settings2, DollarSign, PhoneOff, Lightbulb, ChevronLeft, TrendingUp, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";





const services = [

  {
    id: "01",
    title: "AI-Powered Chatbot",
    description: "Enhance customer engagement with an AI-powered chatbot that provides instant responses, streamlines inquiries, and improves lead conversion.",
    features: [
      "Interactive AI Website Chatbot",
      "WhatsApp & Multi-Platform Chatbot",
      "AI-Powered Lead Reactivation",
    ],
    icon: <Sparkles className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/chatbot.jpg",
    imgAlt: "AI Chatbot for real-time interactions",
    linkId: "s01"
  },
  {
    id: "02",
    title: "AI Voice Assistant",
    description: "Improve customer experience with an AI-powered voice bot that can understand, process, and respond to user queries in real-time.",
    features: [
      "Seamless Voice Interaction",
      "Smart Task Automation",
      "Personalized User Experience",
    ],
    icon: <Zap className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/10.jpg",
    imgAlt: "AI Voice Bot with real-time response",
    linkId: "s04"
  },
  {
    id: "03",
    title: "AI Workflow Optimization",
    description: "Automate repetitive tasks and improve efficiency with AI-powered workflow automation solutions.",
    features: [
      "Enhancing Efficiency with AI",
      "Automating Repetitive Tasks",
      "Optimizing Decision-Making Processes",
    ],
    icon: <Settings className="w-8 h-8 text-accent" />,
    imgSrc: "/assets/11.jpg",
    imgAlt: "AI Workflow Optimization for Efficiency",
    linkId: "s05"
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



      {/* Services Section with Enhanced Styling */}
      <section
        id="services"
        className="py-12 md:py-16 bg-background/30 backdrop-blur-sm border-t border-b border-border/20 snap-start"
      >
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <motion.span
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-1.5 sm:mb-2 inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              What We Offer
            </motion.span>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Our Core AI Solutions
            </motion.h2>
            <motion.div
              className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="flex" // ensure equal card height
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <Link href={`/solution_pages/${service.linkId}`} className="group flex-1 flex">
                  <div className="w-full">
                    <Card className="flex flex-col w-full h-full bg-card/80 border border-border/30 shadow-xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden rounded-xl backdrop-blur-md cursor-pointer">

                      {/* Consistent Image Section */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                          src={service.imgSrc}
                          alt={service.imgAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "cover" }}
                          className="group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute top-4 right-4 p-2.5 sm:p-3 bg-card/90 backdrop-blur-sm rounded-full shadow-lg border border-border/20">
                          {service.icon}
                        </div>
                        <span className="absolute bottom-4 left-4 text-4xl sm:text-5xl font-extrabold text-white/20 select-none group-hover:text-white/30 transition-colors duration-300">
                          {service.id}
                        </span>
                      </div>

                      {/* Content */}
                      <CardContent className="p-5 sm:p-6 flex-grow flex flex-col">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 sm:mb-5 text-sm leading-relaxed flex-grow">
                          {service.description}
                        </p>
                        <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 text-sm">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-2.5 mt-0.5 text-accent flex-shrink-0" />
                              <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      {/* Footer */}
                      <CardFooter className="mt-auto p-6 pt-0">
                        <span className="text-accent hover:text-accent/80 hover:underline p-0 font-semibold group-hover:translate-x-1 transition-all duration-300 text-sm sm:text-base inline-flex items-center">
                          Explore More <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </CardFooter>
                    </Card>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}

          <div className="text-center mt-10 md:mt-12">
            <Button
              size="lg"
              asChild
              className="bg-accent/10 hover:bg-accent/20 text-accent rounded-full px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-medium group-hover:bg-accent group-hover:text-white transition-colors"
            >
              <Link href="/solution">
                View All Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
            <motion.span
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-1.5 sm:mb-2 inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Industry Insights
            </motion.span>
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
            <motion.div
              className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-accent mx-auto mt-3 sm:mt-4 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            />
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

      {/* Testimonial Section */}
      
      {/* -----------------------------------------------Here  from our clients-------------------------------------------------- */}
      <section className="py-12 px-6 md:py-16  bg-opacity-90  bg-background/30 backdrop-blur-sm border-t border-border/20 snap-start">
        <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
            <motion.span
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-1.5 sm:mb-2 inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
               CLIENT SUCCESS
            </motion.span>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
                Hear From Our Clients
            </motion.h2>
            <motion.div
              className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>
          

          {/* Desktop Grid Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-8 xl:gap-24 2xl:gap-24 max-w-auto sm:w-full mx-auto">
            {seamlessTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`flex justify-center ${index === 1 ? " lg:mt-16 md:mt-0" : ""
                  }`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                <div className="relative bg-gradient-to-b from-[#232629]/[0.18] to-[#23272B] backdrop-blur-sm border border-border/20 shadow-[0_4px_10px_rgba(142,142,142,0.3)]  p-3 transition-all duration-300 group flex flex-col  w-full max-w-[400px] sm:max-w-[500px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] h-[320px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px] 2xl:h[400px] rounded-[20px]">
                  <div className=" flex-grow z-10 flex flex-col ">
                    <div className="text-center mb-4 lg:mb-6 sm:mb-6 md:mb-6 xl:mb-6 2xl:mb-6">
                      <p className="font-semibold text-accent text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl justify-center items-start mt-10 tracking-tight">
                        {testimonial.author}
                      </p>
                      <p className="text-xs sm:text-xl md:text-base lg:text-base xl:text-base 2xl:text-base mt-1 text-white ">{testimonial.title}</p>
                    </div>
                    <div className="h-px bg-gray-600 opacity-60 w-full " ></div>

                    <div className="flex-grow flex justify-center mt-6 2xl:mt-10 xl:mt-8 xl:px-6 lg:mt-8 md:mt-10 sm:mt-10 px-2  md:px-8 lg:px-4 2xl:px-12 ">
                      <p className="text-white/60 text-center text-sm sm:text-xl md:text-base lg:text-base xl:text-base 2xl:text-base leading-snug tracking-tighter">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet Carousel Layout */}
          <div className="lg:hidden">
            <div className="flex items-center justify-center gap-4">
              {/* Left Navigation Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={goToPreviousTestimonial}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-accent/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 flex-shrink-0"
                disabled={currentTestimonialIndex === 0}
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              </Button>

              {/* Carousel Container */}
              <div className="flex-1 relative overflow-hidden">
                <motion.div
                  className="flex transition-transform duration-700 ease-in-out"
                  animate={{ x: `-${currentTestimonialIndex * 100}%` }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20,
                    duration: 0.7
                  }}
                >
                  {seamlessTestimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <motion.div
                        className="relative bg-gradient-to-b from-[#232629]/[0.18] to-[#23272B] backdrop-blur-sm border border-border/20 shadow-[0_4px_10px_rgba(142,142,142,0.3)] p-3 sm:p-4 md:p-6 transition-all duration-300 group flex flex-col w-full max-w-[300px] sm:max-w-[380px] md:max-w-[450px] mx-auto h-[320px] sm:h-[340px] md:h-[360px] rounded-[20px] mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.15,
                          ease: "easeOut",
                        }}
                      >
                        <div className="flex flex-col h-full">
                          <div className="text-center mb-3 sm:mb-4 md:mb-5">
                            <p className="font-semibold text-accent text-sm sm:text-base md:text-lg lg:text-xl justify-center items-start mt-3 sm:mt-4 md:mt-5 tracking-tight">
                              {testimonial.author}
                            </p>
                            <p className="text-xs sm:text-sm md:text-base mt-1 text-white">{testimonial.title}</p>
                          </div>
                          <div className="h-px bg-gray-600 opacity-60 w-full mb-3 sm:mb-4 md:mb-5"></div>

                          <div className="flex-1 flex justify-center items-start px-3 sm:px-4 overflow-hidden">
                            <p className="text-white/60 text-center text-xs sm:text-sm md:text-base leading-tight sm:leading-snug md:leading-relaxed tracking-tight">
                              {testimonial.quote}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Navigation Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={goToNextTestimonial}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-accent/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 flex-shrink-0"
                disabled={currentTestimonialIndex === seamlessTestimonials.length - 1}
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              </Button>
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


