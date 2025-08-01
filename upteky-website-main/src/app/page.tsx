'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronRight, Zap, Settings, Layers, Users, Sparkles, Clock3, Repeat, MessagesSquare, Settings2, DollarSign, PhoneOff, Lightbulb, ChevronLeft, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import Tilt from "react-parallax-tilt";
import ChromaGrid from '@/blocks/Components/ChromaGrid/ChromaGrid';
import type { Metadata } from 'next';



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
  },
  {
    quote: "Upteky built a smart, user-friendly website for us that also automated our documentation process — significantly increasing our team's daily efficiency.",
    author: "Mohit",
    title: "Director, Narayan Reality",
  },
  {
    quote: "Upteky provided us with clear, actionable tech consultancy. Their guidance helped us understand how to implement AI and automation in our business workflows with confidence.",
    author: "Chhavi",
    title: "Founder, Joyory Luxe Pvt. Ltd",
    link: "https://joyory.com/"

  },
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
  },
  {
    quote: "Upteky built a smart, user-friendly website for us that also automated our documentation process — significantly increasing our team's daily efficiency.",
    author: "Mohit",
    title: "Director, Narayan Reality",
  },
  {
    quote: "Upteky provided us with clear, actionable tech consultancy. Their guidance helped us understand how to implement AI and automation in our business workflows with confidence.",
    author: "Chhavi",
    title: "Founder, Joyory Luxe Pvt. Ltd",
    link: "https://joyory.com/"

  }
];

// 1. For seamless infinite loop: prepend last card, append first card
const seamlessTestimonials = [testimonials[testimonials.length - 1], ...testimonials, testimonials[0]];

export default function Home() {
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
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const statsScrollRef = useRef<HTMLDivElement>(null);
  const TESTIMONIAL_SCROLL_INTERVAL = 1000; // 1 second pause

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
      const cardWidth = scrollContainer.querySelector('.testimonial-card')?.clientWidth || 350;
      const gap = 32;
      const total = testimonials.length;
      // If next, and we reach the appended duplicate, jump to first real card
      if (direction === 'next' && newIndex === total + 1) {
        scrollContainer.scrollTo({ left: (cardWidth + gap) * (total + 1), behavior: 'smooth' });
        setTimeout(() => {
          scrollContainer.scrollTo({ left: (cardWidth + gap) * 1, behavior: 'auto' });
        }, 350);
        newIndex = 1;
      }
      // If prev, and we reach the prepended duplicate, jump to last real card
      else if (direction === 'prev' && newIndex === 0) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        setTimeout(() => {
          scrollContainer.scrollTo({ left: (cardWidth + gap) * total, behavior: 'auto' });
        }, 350);
        newIndex = total;
      } else {
        scrollContainer.scrollTo({ left: (cardWidth + gap) * newIndex, behavior: 'smooth' });
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
      const cardWidth = scrollContainer.querySelector('.testimonial-card')?.clientWidth || 350;
      const gap = 32;
      const scrollPosition = (cardWidth + gap) * index;
      scrollContainer.scrollTo({ left: scrollPosition, behavior });
    }
    scrollToIndex(1, 'auto');
    currentIndexRef.current = 1;

    function autoScroll() {
      if (!scrollContainer) return;
      const cardWidth = scrollContainer.querySelector('.testimonial-card')?.clientWidth || 350;
      const gap = 32;
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
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <radialGradient id="centerGlow" cx="50%" cy="5%" r="70%" fx="50%" fy="0%">
                <stop offset="0%" stopColor="#FF8B06" stopOpacity="0.35" />
                <stop offset="30%" stopColor="#FF8B06" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#FF8B06" stopOpacity="0" />
              </radialGradient>

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

        <div className="relative z-10 container mx-auto text-center flex flex-col h-full justify-center pb-10 sm:pb-0">
          <div className="relative inline-block hero-text-container">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-extrabold leading-tight text-foreground hero-text-transform"
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
      <section className="py-12 md:py-16 bg-background/30 backdrop-blur-sm border-t border-border/20 snap-start">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-12">
            <motion.span
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent mb-1.5 sm:mb-2 inline-block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Client Success
            </motion.span>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Hear From Our Partners
            </motion.h2>
            <motion.div
              className="w-16  sm:w-20 h-0.5 sm:h-0.5 bg-gradient-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>

          <div className="relative w-full overflow-hidden" >
            <div
              ref={testimonialScrollRef}
              className="flex overflow-x-auto overflow-y-hidden pb-6 gap-6 md:gap-8 testimonial-scroll snap-x snap-mandatory hide-scrollbar"
              style={{
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none',  /* IE and Edge */
              }}
            >
              {seamlessTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  className="flex-shrink-0 w-[300px] md:w-[350px] testimonial-card snap-center"
                >
                  <Card className="relative bg-card/40 backdrop-blur-sm border border-border/20 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                    <span className="absolute -top-4 -left-4 text-7xl sm:text-8xl text-accent/10 font-bold select-none z-0 group-hover:text-accent/20 transition-colors duration-300">"</span>
                    <CardContent className="pt-6 sm:pt-8 flex-grow z-10">
                      <p className="text-muted-foreground italic text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 group-hover:text-foreground/90 transition-colors duration-300">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardFooter className="pt-3 sm:pt-4 border-t border-border/20 z-10 flex flex-col items-start">
                      <div>
                        <p className="font-semibold text-foreground text-sm sm:text-base group-hover:text-accent transition-colors duration-300">{testimonial.author}</p>
                        {testimonial.link ? (
                          <Link href={testimonial.link} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                            {testimonial.title}
                          </Link>
                        ) : (
                          <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{testimonial.title}</p>
                        )}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-12 md:py-16 md:pt-0 bg-background/30 backdrop-blur-sm text-foreground snap-start">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto bg-card/80 backdrop-blur-lg p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl border border-border/40"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground mb-5 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg max-w-lg mx-auto">
                Join innovative companies already leveraging our enterprise AI solutions to drive growth and efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-accent/40 shadow-lg px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold w-full sm:w-auto">
                  <Link href="/contact">Contact Us</Link><ChevronRight className=" h-4 sm:h-5 w-4 sm:w-5" />
                </Button>
                {/* <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent/90 transition-all duration-300 shadow-sm hover:shadow-md hover:border-accent/70 px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold w-full sm:w-auto">
                   <Link href="/contact">Contact Sales</Link>
                </Button> */}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 pt-5 sm:pt-6 border-t border-border/30 mt-5 sm:mt-6 text-sm">
              {[
                { icon: <Layers className="mr-2 sm:mr-2.5 h-4 w-4 sm:h-5 sm:w-5 text-accent" />, text: "Quick Implementation" },
                { icon: <Users className="mr-2 sm:mr-2.5 h-4 w-4 sm:h-5 sm:w-5 text-accent" />, text: "24/7 Support" },
                { icon: <TrendingUp className="mr-2 sm:mr-2.5 h-4 w-4 sm:h-5 sm:w-5 text-accent" />, text: "Scalable Solutions" }
              ].map(item => (
                <div key={item.text} className="flex items-center justify-center text-muted-foreground p-1.5 sm:p-2 bg-black/20 rounded-md border border-border/20 hover:bg-black/30 hover:border-border/40 transition-colors duration-300">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
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
       `}</style>
    </div>
  );
}


