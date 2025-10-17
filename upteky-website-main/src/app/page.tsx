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
    title: "Conversational Agents",
    imageSrc: "/assets/whatWeDo/Conversational-agent.png", // Replace with your actual image path
    description:
      "Upteky Solutions Pvt. Ltd. specializes in creating robust Conversational AI solutions for web, messaging, and voice channels. From Website Chatbots and WhatsApp automation to AI powered lead reengagement and Voice Bots, we integrate advanced natural language processing, secure system connections, and actionable analytics to help businesses achieve measurable growth. Services from 10k to 2Lakh.",
    services: [
      "Interactive AI Website Chatbot",
      "WhatsApp & Multi Platform Chatbot",
      "AI-Powered Lead Reactivation",
      "AI Voice Assistant (Voice Bot)",
    ],
  },
  {
    id: "automation-bi",
    buttonText: "AI Automation & Business Intelligence",
    title: "Intelligent Automation",
    imageSrc: "/assets/whatWeDo/AI Automation.png", // Replace with your actual image path
    description:
      "Streamline your operations and unlock data driven insights. We develop custom automation workflows that eliminate repetitive tasks and integrate powerful business intelligence tools to transform raw data into actionable strategies, enhancing efficiency and decision making across your organization.",
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
    imageSrc: "/assets/whatWeDo/Advance Ai.png", // Replace with your actual image path
    description:
      "Go beyond off the shelf solutions with custom trained AI models tailored to your unique challenges. Our expertise in machine learning, computer vision, and predictive analytics allows us to build powerful, proprietary systems that provide a distinct competitive advantage and solve complex business problems.",
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
    imageSrc: "/assets/whatWeDo/Web dev-services.png", // Replace with your actual image path
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
    description: "Let your team focus on what truly matters AI handles the rest.",
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
    quote: "The custom AI solutions from Upteky helped us simplify internal communication and automate key customer interactions. It's been a game changer for how we manage operational flow.",
    author: "Ashish Talati",
    title: "Director, JM PlastoPack Pvt. Ltd",
    link: "https://www.jmplastopack.com/"
  },
  {
    quote: "Upteky revamped our website, making it intelligent and easy to use. They also automated our documentation, which has sped up our work and made it more reliable. This has been a huge boost for our team's productivity.",
    author: "Lokesh Sharma",
    title: "Founder, Game Of Pharma",
    link: "https://gameofpharma.com/"
  },
  {
    quote: "Upteky built a smart, user friendly website and automated our documentation with AI, streamlining daily operations and boosting team efficiency",
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



// ...




const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // The <section> is now just for vertical padding. The width is handled by the inner <div>.
    <section className="w-full py-16 sm:py-20">
      {/* Use the outer page container; avoid nesting an extra container here */}
      <div className="w-full">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-5xl font-['Outfit'] font-medium text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Question
          </motion.h2>
        </div>

        {/* FAQ Items */}
        <motion.div
          className="bg-[#2D2F33] divide-y divide-[#232629] rounded-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="px-6 py-5 sm:p-6">
              <button
                onClick={() => handleClick(index)}
                className="flex items-center justify-between w-full text-left"
              >
                {/* Left side: Number + Question */}
                <div className="flex items-center">
                  <span className="text-gray-400 font-['Outfit'] text-base sm:text-lg w-8 text-left">
                    {(index + 1).toString().padStart(2, '0')}.
                  </span>
                  <span
                    className={`ml-4 text-base sm:text-xl font-['Outfit'] transition-colors duration-300
                      ${openIndex === index ? "text-[#EE8741]" : "text-white"}`}
                  >
                    {faq.question}
                  </span>
                </div>

                {/* Right side: Icon in a circle */}
                <div
                  className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center transition-all duration-300
                    ${openIndex === index ? "border-[#EE8741]" : "border-gray-500"}`}
                >
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                      <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${openIndex === index ? "text-[#EE8741]" : "text-gray-400" }`} />
                  </motion.div>
                </div>
              </button>

              {/* Answer Panel */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pl-12 text-sm sm:text-base text-[#9FA6AD] font-['Poppins'] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState(whatWeDoData[0].id);
  const [accordionIndex, setAccordionIndex] = useState<number | null>(0); // ADD THIS STATE

  const [files, setFiles] = useState<FileList | null>(null);
const fileInputRef = useRef<HTMLInputElement>(null);


  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectDescription: '',
    services: [] as string[], // Array to hold selected services
});
const [responseMessage, setResponseMessage] = useState('');


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


// HANDLER to trigger the hidden file input
const handleAttachClick = () => {
  fileInputRef.current?.click();
};

// HANDLER to update state when files are selected
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFiles(e.target.files);
};

// ... your existing handleChange and other handlers
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value,
    }));
};

// 3. HANDLER for the service buttons (toggle selection)
const handleServiceToggle = (serviceName: string) => {
    setFormData(prevState => {
        const currentServices = prevState.services;
        // If the service is already selected, remove it. Otherwise, add it.
        const newServices = currentServices.includes(serviceName)
            ? currentServices.filter(s => s !== serviceName)
            : [...currentServices, serviceName];
        
        return { ...prevState, services: newServices };
    });
};

// 4. HANDLER for form submission
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setResponseMessage('Submitting...');

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyhWHya3HvPyY2PlwH2_EvYprTkHkjovfOJx1tZY0UqhGVZtR1Mp6rKw4cXJFLp2sRTfA/exec';

  const formDataToSubmit = new FormData();
  formDataToSubmit.append('fullName', formData.fullName);
  formDataToSubmit.append('email', formData.email);
  formDataToSubmit.append('phone', formData.phone);
  formDataToSubmit.append('projectDescription', formData.projectDescription);
  formDataToSubmit.append('services', formData.services.join(', '));

  // START: ADD THIS BLOCK TO APPEND FILES
  if (files) {
      for (let i = 0; i < files.length; i++) {
          // Each file will be named 'file0', 'file1', etc.
          formDataToSubmit.append('file' + i, files[i]);
      }
  }
  // END: ADD THIS BLOCK

  try {
      const response = await fetch(scriptURL, {
          method: 'POST',
          body: formDataToSubmit,
          // Google Apps Script doesn't handle attachments with 'no-cors'.
          // You may need to remove this or adjust your backend script.
          // mode: 'no-cors',
      });

      setResponseMessage('Success! Your message was submitted.');
      setFormData({
          fullName: '',
          email: '',
          phone: '',
          projectDescription: '',
          services: [],
      });
      setFiles(null); // Clear the files after submission
  } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
      console.error('Submission error:', error);
  }
};


  return (
    <div className="flex flex-col bg-gradient-to-br from-[#2d3436] to-[#000000] text-foreground min-h-screen overflow-x-hidden">
      <section
        ref={heroSectionRef}
        className={cn(
          "relative flex flex-col items-center justify-center bg-[#232629]",
          "h-screen",
          "px-4 sm:px-6 md:px-8 lg:px-20",
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
              className="text-4xl sm:text-5xl mt-[90px] sm:mt-64  md:mt-56 lg:mt-40 md:text-6xl  lg:text-7xl 2xl:text-8xl font-bold leading-tight text-foreground hero-text-transform"
              style={{ x: x1, opacity: opacity1, originX: 0.5, originY: 0.5, textShadow: '0 0 1px rgba(0,0,0,0.1)' }}
            >
              Smarter Decisions
            </motion.h1>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-tight text-gradient-accent hero-text-ease my-1"
              style={{ x: x2, opacity: opacity2, originX: 0.5, originY: 0.5, textShadow: '0 0 1px rgba(0,0,0,0.1)' }}
            >
              Faster Results
            </motion.h1>
            <motion.h1
              className="  text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-tight text-foreground hero-text-ai"
              style={{ x: x3, opacity: opacity3, originX: 0.5, originY: 0.5, textShadow: '0 0 1px rgba(0,0,0,0.1)' }}
            >
              Powered By AI
            </motion.h1>
            {/* <motion.div
              className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 h-1.5 sm:h-2 bg-gradient-accent rounded-full shadow-glow"
              style={{ opacity: contentOpacity }}
            /> */}
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
              <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-accent/40 shadow-lg px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 hover:text-accent/90 transition-all duration-300 shadow-sm hover:shadow-md hover:border-accent/70 px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold">
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Industry Insights Section - Enhanced */}
      <section ref={insightsSectionRef} id="stats-section" className="py-12 md:py-16 bg-[#232629] backdrop-blur-sm relative overflow-hidden snap-start">

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20 relative z-10">
          <div className="text-center mb-10 md:mb-12">
           
            <motion.h2
              className="text-[40px] font-normal font-['Outfit'] leading-[111%] text-center mt-1 mb-3 sm:mb-4 text-foreground"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Real Problems, AI Solutions
            </motion.h2>
            <motion.p
              className="text-muted-foreground max-w-xl md:max-w-2xl mx-auto text-[16px] leading-[130%] text-center font-['Poppins'] font-normal"
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
                    <Card className="h-full bg-[#2C3035] border border-border/30 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-accent/20 hover:-translate-y-1 flex flex-col backdrop-blur-sm group">
                      <CardContent className="p-6 md:p-8 flex-grow flex flex-col items-center text-center">
                        <div className="bg-accent/10 group-hover:bg-accent/20 p-3 rounded-full inline-block transition-colors duration-300 mb-4">
                          {React.cloneElement(stat.icon as React.ReactElement, { className: "w-8 h-8 text-accent" })}
                        </div>
                        <div className="text-[24px] font-bold font-['Outfit'] leading-[100%] text-[#F58F1D] mb-2 transition-colors duration-300">
                          {stat.mainNumber}
                        </div>
                        <h4 className="text-[24px] font-normal font-['Outfit'] leading-[100%] text-white mb-3 min-h-[2.5em] transition-colors duration-300">{stat.label}</h4>
                        <p className="text-[16px] font-normal font-['Poppins'] leading-[130%] text-center text-[#9FA6AD] mt-1 min-h-[3.6em]">{stat.description}</p>
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
      <div className="border-t border-[#333333] " />
<section className="py-12 md:py-16 bg-[#232629] backdrop-blur-sm snap-start">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
    <div className="text-center mb-10 md:mb-12">
      <motion.h2
        className="text-[40px] font-normal font-['Outfit'] leading-[111%] text-center text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        What We Do End-to-End Solutions
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
              <span className={`text-[18px] leading-[100%] font-normal font-['Poppins'] text-center transition-colors duration-300 ${accordionIndex === index ? "text-[#EE8741]" : "text-white"}`}>
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
                  <h3 className="text-xl text-white mb-2 font-['Outfit'] font-normal leading-[111%]">{tab.title}</h3>
                  <p className="text-[#9FA6AD] leading-[130%] mb-4 text-sm font-['Poppins'] font-normal">{tab.description}</p>
                  <div className="flex flex-col gap-2">
                    {tab.services.map((service, sIndex) => (
                      <div key={sIndex} className="flex items-center gap-3 text-gray-200 text-sm">
                        <ArrowRight className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="font-['Poppins'] font-normal">{service}</span>
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
                  "p-4 rounded-lg text-center transition-all duration-300 w-full text-[18px] leading-[100%] font-normal font-['Poppins']",
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
                  <h3 className="text-2xl md:text-3xl text-white mb-4 font-['Outfit'] font-normal leading-[111%]">{currentTab.title}</h3>
                  <p className="text-[#9FA6AD] leading-[130%] mb-6 font-['Poppins'] font-normal">{currentTab.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {currentTab.services.map((service, index) => (
                      <div key={index} className="flex items-center gap-3 text-gray-200">
                        <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="font-['Poppins'] font-normal">{service}</span>
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
<div className="border-t border-[#333333] " />
<section className="py-16 md:py-20 bg-[#232629] backdrop-blur-sm snap-start font-[Poppins]">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
    <div className="text-center mb-12">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal font-['Outfit'] leading-[111%] text-center text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Powering Innovation For
      </motion.h2>
      <motion.p
        className="text-[#9FA6AD] text-sm sm:text-base leading-[130%] text-center font-['Poppins'] font-normal max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Tailored technology solutions for startups, small businesses, enterprises, and agencies driving innovation,
        scalability, and sustainable growth at every stage.
      </motion.p>
    </div>

    <div className=" space-y-8">
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-stretch">
        {/* Startups */}
        <motion.div
          className="md:col-span-4 bg-[#2C3035] border border-gray-700/50 rounded-[30px] p-8 h-full flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          // 1. Added Framer Motion hover animation
          whileHover={{ y: -8, scale: 1.03 }}
        >
          <Image src="/icons/startup 1.png" alt="Startups" width={32} height={32} className="mb-4" />
          <h3 className="font-['Outfit'] text-2xl font-normal leading-[100%] tracking-[0] text-white mb-3">Startups Business</h3>
          <p className="text-[#9FA6AD] text-base leading-[130%] tracking-[0] text-justify font-['Poppins'] font-normal">
            We specialize in MVP development, rapid prototyping, and flexible engagement models, helping startups scale from
            idea to launch. With a diverse tech stack and proactive execution, we act as their extended team, managing
            technology while they focus on growth.
          </p>
        </motion.div>

        {/* Small Business */}
        <motion.div
          className="md:col-span-6 bg-[#2C3035] border border-gray-700/50 rounded-[30px] p-8 h-full flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          // 1. Added Framer Motion hover animation
          whileHover={{ y: -8, scale: 1.03 }}
        >
          <Image src="/icons/supermarket 1.png" alt="Small Business" width={32} height={32} className="mb-4" />
          <h3 className="font-['Outfit'] text-2xl font-normal leading-[100%] tracking-[0] text-white mb-3">Small Business</h3>
          <p className="text-[#9FA6AD] text-base leading-[130%] tracking-[0] text-justify font-['Poppins'] font-normal">
            Small businesses seek to scale and boost efficiency through technology and that's where we deliver value. From UI/UX design and development to QA
            and cloud deployment, we provide complete, end-to-end custom
            technology solutions under one roof.
          </p>
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Enterprise */}
        <motion.div
          className="bg-[#2C3035] border border-gray-700/50 rounded-[30px] p-8 h-full flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          // 1. Added Framer Motion hover animation
          whileHover={{ y: -8, scale: 1.03 }}
        >
          <Image src="/icons/global-access 1.png" alt="Enterprise" width={32} height={32} className="mb-4" />
          <h3 className="font-['Outfit'] text-2xl font-normal leading-[100%] tracking-[0] text-white mb-3">Enterprise Business</h3>
          <p className="text-[#9FA6AD] text-base leading-[130%] tracking-[0] text-justify font-['Poppins'] font-normal">
            We build enterprise grade solutions that drive measurable impact, from clinical systems to insurance platforms. Our
            products power global multi million dollar businesses, with enterprises preferring our
            scalable dedicated hire model to match
            evolving needs.
          </p>
        </motion.div>

        {/* Agency */}
        <motion.div
          className="bg-[#2C3035] border border-gray-700/50 rounded-[30px] p-8 h-full flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          // 1. Added Framer Motion hover animation
          whileHover={{ y: -8, scale: 1.03 }}
        >
          <Image src="/icons/employee 1.png" alt="Agency" width={32} height={32} className="mb-4" />
          <h3 className="font-['Outfit'] text-2xl font-normal leading-[100%] tracking-[0] text-white mb-3">Agency Business</h3>
          <p className="text-[#9FA6AD] text-base leading-[130%] tracking-[0] text-justify font-['Poppins'] font-normal">
            Upteky offers free business analysis, tech consultation, and tailored solutions. With
            flexible models and expert teams, we help
            enterprises scale efficiently, accelerate
            growth, and maximize customer value
            globally.
          </p>
        </motion.div>

        {/* Innovation */}
        <motion.div
          // 2. Standardized padding to p-8 for consistency
          className="bg-[#2C3035] border border-gray-700/50 rounded-[30px] p-8 flex flex-col justify-between h-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          // 1. Added Framer Motion hover animation
          whileHover={{ y: -8, scale: 1.03 }}
        >
          <div className="space-y-6">
            <h3 className="font-['Outfit'] text-xl sm:text-2xl font-normal leading-[100%] tracking-[0] text-white">Bringing Innovation Together</h3>
            <p className="text-[#9FA6AD] text-base leading-[130%] tracking-[0] text-justify font-['Poppins'] font-normal">
              Upteky's R&D team ensures clients stay ahead with early tech adoption, seamless
              execution, and access to the latest innovations in a fast-evolving digital
              landscape.
            </p>
          </div>
          <div className="pt-6">
            <Button
              className="bg-[#2F3133] border border-gray-600 text-gray-200 hover:bg-[#394046] hover:border-gray-500 transition-all duration-300 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base"
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
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
    {/* Section Heading */}
    <div className="text-center mb-12">
      <motion.h2
        className="text-[40px] font-normal font-['Outfit'] leading-[111%] text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Our Process
      </motion.h2>
      <motion.p
        className="text-[#9FA6AD] text-[16px] leading-[130%] text-center font-['Poppins'] font-normal max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        A streamlined journey from idea to impact – guiding you through every
        stage with clarity, innovation, and measurable results.
      </motion.p>
    </div>

    {/* Process Steps Data */}
    {(() => {
      const processSteps = [
        {
          step: "01",
          title: "Consultation & Discovery",
          description:
            "Understand your business challenges and uncover hidden opportunities with tailored AI and IT solutions designed to accelerate growth and efficiency.",
        },
        {
          step: "02",
          title: "Solution Design",
          description:
            "We combine AI, IT, and web expertise to craft the right-fit solutions that empower businesses with innovation, scalability, and measurable growth.",
        },
        {
          step: "03",
          title: "Development & Implementation",
          description:
            "Delivering smooth and secure execution with reliable processes, robust technology, and enterprise-grade solutions that ensure efficiency, trust, and long-term success.",
        },
        {
          step: "04",
          title: "Optimization & Training",
          description:
            "We ensure adoption and efficiency through tailored guidance, streamlined processes, and continuous improvements that maximize business impact.",
        },
        {
          step: "05",
          title: "Ongoing Support & Scaling",
          description:
            "Enabling continuous growth with technology through proactive support, scalable systems, and future-ready solutions tailored for businesses.",
        },
      ];

      return (
        // The outer border remains unchanged
        <div className="border border-neutral-800 rounded-2xl overflow-hidden bg-[#2C2F33]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                className={cn(
                  "p-10 text-left transition-colors duration-300 ease-in-out hover:bg-neutral-700 cursor-pointer",
                  // Conditional classes for layout and borders
                  {
                    "md:col-span-2 flex flex-col items-start md:p-10":
                      index === processSteps.length - 1,
                    
                    // --- BORDER LOGIC (UPDATED) ---
                    // Add bottom border with the new color
                    "border-b border-[#565656]": index < 3,
                    // Add right border with the new color
                    "md:border-r border-[#565656]":
                      index % 2 === 0 && index < 4,
                  }
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Constrain width of the last item's content */}
                <div
                  className={cn({
                    "md:w-2/3 lg:w-1/2": index === processSteps.length - 1,
                  })}
                >
                  <span className="block text-[24px] font-normal leading-[121%] tracking-[0] font-['Outfit'] text-[#F58F1D] mb-4">
                    {item.step}
                  </span>
                  <h3 className="text-[24px] font-normal leading-[121%] tracking-[0] text-white mb-3 font-['Outfit']">
                    {item.title}
                  </h3>
                  <p className="text-[#9FA6AD] text-[16px] font-normal leading-[121%] tracking-[0] font-['Poppins']">
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
<div className="border-t border-[#333333] " />
<section className="py-16 md:py-20 bg-[#232629] text-white font-poppins">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
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
            <h2 className="text-[40px] font-normal leading-[121%] tracking-[0] font-['Outfit'] mb-4">
              Why Choose Upteky Solutions?
            </h2>
            <p className="text-[#9FA6AD] text-[15.84px] font-normal leading-[121%] tracking-[0] font-['Poppins']">
              Empowering businesses with innovation, scalability, and trusted expertise delivering solutions that truly drive growth.
            </p>
          </motion.div>

          {/* Grid Items 2-6: The 5 Feature Cards */}
          {whyChooseData.map((item, index) => (
            <motion.div
              key={index}
              // The class below is the only thing that changed
              className="bg-[#2C3035] border border-neutral-800 rounded-2xl p-6 flex flex-col h-full text-center transition-all duration-300 hover:border-[#F58F1D]/50 hover:-translate-y-1 min-h-[240px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <div className="flex-grow flex flex-col justify-center">
                <h3 className="text-[21.61px] font-normal leading-[121%] tracking-[0] text-white font-['Outfit'] pb-4">
                  {item.title}
                </h3>
                {/* Divider Line: Centered using mx-auto */}
                <div className="h-px bg-neutral-700 w-2/3 mx-auto" /> 
                <p className="text-[#9FA6AD] text-[15.84px] font-normal leading-[121%] tracking-[0] font-['Poppins'] text-center pt-4">
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

      
    {/* -----------------------------------------------Hear from our clients-------------------------------------------------- */}
<section className="py-12 md:py-16 bg-[#232629] backdrop-blur-sm border-t border-border/20 snap-start">
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
    <div className="text-center mb-10 md:mb-12">
      <motion.h2
        className="text-[40px] font-normal font-['Outfit'] leading-[111%] text-center mt-1 mb-3 sm:mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        Hear From Our Clients
      </motion.h2>
      <motion.p
        className="text-[#9FA6AD] text-[16px] leading-[130%] text-center font-['Poppins'] font-normal max-w-3xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Real businesses, real results — showcasing the impact of our solutions.
      </motion.p>
    </div>

    {/* Desktop Grid Layout (This is where the changes are) */}
    <div className="hidden lg:grid grid-cols-3 gap-8 xl:gap-24 2xl:gap-24 max-w-auto sm:w-full mx-auto">
      {seamlessTestimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className={`flex justify-center ${index === 1 ? " lg:mt-16 md:mt-0" : ""}`}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          // 1. UPDATED: Made the transition faster for a responsive hover
          transition={{
            duration: 0.25,
            delay: index * 0.15,
            ease: "easeOut",
          }}
          // 2. ADDED: The hover animation effect
          whileHover={{ y: -8, scale: 1.03 }}
        >
          <div className="relative bg-[#2C3035] backdrop-blur-sm border border-border/20 p-3 transition-all duration-300 group flex flex-col w-full max-w-[400px] sm:max-w-[500px] md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] h-[320px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px] 2xl:h[400px] rounded-[20px]">
            <div className=" flex-grow z-10 flex flex-col ">
              <div className="text-center mb-4 lg:mb-6 sm:mb-6 md:mb-6 xl:mb-6 2xl:mb-6">
                <p className="font-['Outfit'] font-normal text-white text-[24px] leading-[100%] tracking-[0] justify-center items-start mt-10">
                  {testimonial.author}
                </p>
                <p className="font-['Outfit'] font-normal text-[16px] leading-[100%] tracking-[0] mt-1 text-white">{testimonial.title}</p>
              </div>
              <div className="h-px bg-gray-600 opacity-60 w-full " ></div>
              <div className="flex-grow flex justify-center mt-6 2xl:mt-10 xl:mt-8 xl:px-6 lg:mt-8 md:mt-10 sm:mt-10 px-2 md:px-8 lg:px-4 2xl:px-12 ">
                <p className="font-['Poppins'] font-normal text-[16px] leading-[130%] tracking-[0] text-center text-[#9FA6AD]">
                  {testimonial.quote}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Mobile/Tablet Carousel Layout (Unchanged) */}
    <div className="lg:hidden">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentTestimonialIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, { offset, velocity }) => {
            const swipeThreshold = 50; 
            if (offset.x < -swipeThreshold) {
              goToNextTestimonial();
            } else if (offset.x > swipeThreshold) {
              goToPreviousTestimonial();
            }
          }}
        >
          {seamlessTestimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
              <motion.div
                className="relative bg-[#2C3035] backdrop-blur-sm border border-border/20 p-4 sm:p-6 transition-all duration-300 group flex flex-col w-full mx-auto min-h-[340px] sm:min-h-[360px] rounded-[20px] mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              >
                <div className="flex flex-col h-full">
                  <div className="text-center mb-4 sm:mb-5">
                    <p className="font-['Outfit'] font-normal text-white text-[24px] leading-[100%] tracking-[0] justify-center items-center mt-4 sm:mt-5">
                      {testimonial.author}
                    </p>
                    <p className="font-['Outfit'] font-normal text-[16px] leading-[100%] tracking-[0] mt-1 text-white">{testimonial.title}</p>
                  </div>
                  <div className="h-px bg-gray-600 opacity-60 w-full mb-4 sm:mb-5"></div>
                  <div className="flex-1 flex justify-center items-center px-2 sm:px-4 overflow-hidden">
                    <p className="font-['Poppins'] font-normal text-[16px] leading-[130%] tracking-[0] text-center text-[#9FA6AD]">
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
<section className=" bg-[#232629] backdrop-blur-sm border-t border-b border-border/20 snap-start">
  {/* Added this container div to match other sections */}
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
    <FAQSection />
  </div>
</section>

      {/* CTA Section - Enhanced */}
      {/* <section className='py-12 md:py-16 md:pt-0 bg-background/30 backdrop-blur-sm text-foreground snap-start'>


      </section> */}
      {/* Free Consultation - two column form */}
      <section id="contact-form" className="py-12 md:py-16 bg-[#232629] backdrop-blur-sm border-t border-border/20 snap-start">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
        {/*
            FIX: Removed max-w-auto and lg:max-w-[1273px] to conform to container width.
            The container div above already handles the max-width and centering for the page.
        */}
        <div className="w-full mx-auto bg-[#2C3035] backdrop-blur-lg rounded-[30px] border border-gray-600/30 p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-center">
                {/* Left info column (no changes here) */}
                <div className="flex flex-col h-full lg:col-span-2 justify-between items-center text-center lg:items-start lg:text-left p-4 md:p-6">

    {/* --- Top Content Block --- */}
    <div className="w-full">
        <h2 className="text-[18px] sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal font-['Outfit'] leading-[100%] text-foreground mb-3 mt-1 lg:mt-6 pt-6">
            Ready for Free Consultation?
        </h2>
        <p className="mb-10 text-[14px] sm:text-[15px] md:text-[16px] text-[#9FA6AD] font-['Outfit'] font-light leading-normal">
            Your Demand for IT & AI Experts and free consultation anytime.
        </p>

        {/* This container ensures the contact info is grouped and aligned */}
        <div className="mt-8 flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-3 text-sm">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-accent flex-shrink-0"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                <span className="text-foreground text-sm sm:text-base font-['Outfit'] font-light">Email us:</span>
                <span className="text-muted-foreground text-sm sm:text-base font-['Outfit'] font-light">hello@upteky.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-accent flex-shrink-0"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                <span className="text-foreground text-sm sm:text-base font-['Outfit'] font-light">Phone:</span>
                <span className="text-muted-foreground text-sm sm:text-base font-['Outfit'] font-light">+91 9978901910</span>
            </div>
        </div>
    </div>

    {/* --- Bottom Content Block (pushed to the end by `justify-between`) --- */}
    <div className="w-full mt-10 lg:mt-0">
        <p className="text-[14px] font-['Inter'] font-normal leading-[100%] text-foreground mb-2">Follow Us:</p>
        <div className="flex gap-3 justify-center lg:justify-start">
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

                {/* Right form column */}
                <div className="bg-[#2C3035] rounded-[30px] px-6 py-8 sm:px-14 sm:py-10 my-3 md:p-10 border border-muted-foreground/10 lg:col-span-3 2xl:ml-12">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-3">
                            {/* Input fields (no changes) */}
                            <div>
                                <input type="text" placeholder="Full Name*" className="w-full my-4 bg-transparent border-b border-muted-foreground/50 py-3 focus:border-accent focus:outline-none placeholder:text-base placeholder:text-muted-foreground" name="fullName" value={formData.fullName} onChange={handleChange} required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                <div>
                                    <input type="email" placeholder="Email*" className="w-full mb-4 bg-transparent border-b border-muted-foreground/50 py-3 focus:border-accent focus:outline-none placeholder:text-base placeholder:text-muted-foreground" name="email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone number" className="w-full mb-4 bg-transparent border-b border-muted-foreground/50 py-3 focus:border-accent focus:outline-none placeholder:text-base placeholder:text-muted-foreground" name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <textarea rows={3} placeholder="Describe your project" className="w-full mb-4 bg-transparent border-b border-muted-foreground/50 py-3 focus:border-accent focus:outline-none resize-none placeholder:text-base placeholder:text-muted-foreground" name="projectDescription" value={formData.projectDescription} onChange={handleChange} />
                            </div>
                        </div>

                        <div>
                            <p className="text-base text-muted-foreground font-medium mb-4">Services</p>
                            <div className="flex flex-wrap gap-3">
                                {['Web development', 'AI automation', 'IT consultation', 'Custom solution', 'Voicebots', 'Chatbots', 'App development'].map((service) => (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => handleServiceToggle(service)}
                                        className={cn(
                                            "px-5 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm rounded-full border border-muted-foreground/50 transition-colors",
                                            formData.services.includes(service)
                                                ? "bg-accent text-accent-foreground border-accent"
                                                : "text-foreground hover:text-accent"
                                        )}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* START: FUNCTIONAL FILE INPUT */}
                        <div>
                            {/* This is the hidden file input that does the actual work */}
                            <input
                                type="file"
                                multiple
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                            />
                            {/* This is your styled button that the user sees and clicks */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={handleAttachClick} // Triggers the hidden input
                                    className="w-full sm:w-auto flex-1 px-4 py-4 bg-muted/40 hover:bg-muted text-muted-foreground rounded-full border border-border/40 transition-colors flex items-center justify-center gap-2"
                                >
                                    <span className="text-lg">+</span> Attach File(s)
                                </button>
                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto bg-gradient-accent text-sm text-white rounded-full px-12 py-4 sm:px-16 sm:py-5 border-transparent hover:bg-none hover:bg-[#2c2c2c] hover:text-accent hover:border-accent transition-all duration-300"
                                >
                                    Send
                                </Button>
                            </div>
                            {/* This block will display the names of selected files */}
                            {files && files.length > 0 && (
                                <div className="mt-4 text-sm text-muted-foreground">
                                    <p className="font-medium text-foreground">Selected files:</p>
                                    <ul className="list-disc pl-5 mt-1">
                                        {Array.from(files).map((file, index) => (
                                            <li key={index}>{file.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        {/* END: FUNCTIONAL FILE INPUT */}

                        {responseMessage && <p className="text-center text-white mt-4">{responseMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>


      <style jsx global>{`
          body,
          html {
            font-family: 'Poppins', sans-serif;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Outfit', sans-serif;
          }

          .hero-text-container {
            padding-top: 0;
            margin-bottom: 0;
            position: relative;
          }
          @media (min-width: 640px) {
            /* sm */
            .hero-text-container {
              padding-top: 0;
              margin-bottom: 0;
            }
          }
          @media (min-width: 1024px) {
            /* lg */
            .hero-text-container {
              padding-top: 0;
              margin-bottom: 0;
            }
          }
          @media (min-width: 1536px) {
            /* 2xl */
            .hero-text-container {
              padding-top: 0;
              margin-bottom: 0;
            }
          }
          .hero-text-transform,
          .hero-text-ease,
          .hero-text-ai {
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
            0% {
              transform: translateY(0px);
              opacity: 0.6;
            }
            50% {
              transform: translateY(-12px);
              opacity: 0.9;
            }
            100% {
              transform: translateY(0px);
              opacity: 0.6;
            }
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
          @media (min-width: 768px) {
            /* md */
            .testimonial-scroll {
              gap: 1.5rem;
            }
          }
          @media (min-width: 1024px) {
            /* lg */
            .testimonial-scroll {
              gap: 1.5rem;
            }
          }
          @media (min-width: 1280px) {
            /* xl */
            .testimonial-scroll {
              gap: 1.5rem;
            }
          }
          /* Widths: 1 per view on small, 2 on md, 3 on lg, 4 on xl+ */
          .testimonial-card {
            width: calc((100% - (1 * var(--ts-gap, 1rem))) / 2);
          }
          @media (max-width: 639.98px) {
            .testimonial-card {
              width: 100%;
            }
          }
          @media (min-width: 640px) and (max-width: 767.98px) {
            .testimonial-card {
              width: 80vw;
            }
          }
          @media (min-width: 768px) and (max-width: 1023.98px) {
            /* md: 2 per view */
            .testimonial-card {
              width: calc((100% - (1 * 1.5rem)) / 2);
            }
          }
          @media (min-width: 1024px) and (max-width: 1279.98px) {
            /* lg: 3 per view */
            .testimonial-card {
              width: calc((100% - (2 * 1.5rem)) / 3);
            }
          }
          @media (min-width: 1280px) {
            /* xl+: 4 per view */
            .testimonial-card {
              width: calc((100% - (3 * 1.5rem)) / 4);
            }
          }
        `}</style>
      </div>
  );
}


