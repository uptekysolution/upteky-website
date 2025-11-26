"use client";
import { useState, useEffect, useRef } from "react";
import { ShieldCheck, Code2, Network, BarChart2, Users, BarChart3, Settings2, ChevronRight, Layers, TrendingUp, Rocket, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { ArrowRight, Zap, Settings, Linkedin, Facebook, Instagram, Sparkles, Clock3, Repeat, MessagesSquare, DollarSign, PhoneOff, Lightbulb, ChevronLeft, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Spline from '@splinetool/react-spline';
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";


const capabilities = [
  {
    image: "/images/WebDevelopment.png",
    alt: "Web Dev",
    title: "Web Development",
    desc: "We design and develop scalable, responsive, and AI-enabled web solutions tailored to your business goals.",
  },
  {
    image: "/images/IT Consultation.png",
    alt: "IT Consultation ",
    title: "IT Consultation",
    desc: "Our experts provide strategic IT guidance to optimize your infrastructure and implement cost-effective solutions.",
  },
  {
    image: "/images/Analytics.png",
    alt: "Analytics",
    title: "Analytics",
    desc: "Transforms data into real-time insights to drive faster, smarter business decisions.",
  },
  {
    image: "/images/Quality Assurance.png",
    alt: "Assurance",
    title: "Quality Assurance",
    desc: "AI-driven testing and monitoring to ensure reliability, performance, and faster delivery.",
  },

];
const steps = [
  {
    step: "01",
    title: "Business Analysis",
    desc: "We analyze your operations to identify key areas where AI can deliver maximum impact and ROI.",
  },
  {
    step: "02",
    title: "Custom AI Building",
    desc: "Our experts develop bespoke AI solutions tailored to your specific business challenges and goals.",
  },
  {
    step: "03",
    title: "Deployment",
    desc: "We implement and integrate our solutions seamlessly into your existing infrastructure with minimal disruption.",
  },
  {
    step: "04",
    title: "Monthly Maintenance",
    desc: "Our team provides ongoing support, updates, and optimization to ensure continued performance.",
  },
];

const cards = [
  {
    title: 'One Partner, Complete Solutions',
    desc: 'AI + Web + IT under one roof.'
  },
  {
    title: 'Built Around You',
    desc: ' Every project is tailored to fit your needs.'
  },
  {
    title: 'Designed to Scale',
    desc: 'Technology that grows as your business grows.'
  },
  {
    title: 'Trusted Experience',
    desc: 'Proven impact across industries worldwide.'
  },
  {
    title: 'Always Available',
    desc: 'Continuous support to keep your business moving.'
  },
];

const industries = [
  "Healthcare",
  "Fintech",
  "Adtech",
  "Retail & E-commerce",
  "Logistics & Transportation",
  "Legal",
  "Pharmaceutical",
  "Real Estate",
  "Manufacturing",
  "Oil and Gas",
  "Media & Entertainment",
  "Food & Restaurant",
  "Automotive",
  "Travel & Hospitality",
  "Fitness",
  "Education",
];

const whyFeatures = [
  {
    title: "One Partner, Complete Solutions",
    desc: "AI + Web + IT under one roof.",
  },
  {
    title: "Built Around You",
    desc: "Every project is tailored to fit your needs.",
  },
  {
    title: "Designed to Scale",
    desc: "Technology that grows as your business grows.",
  },
  {
    title: "Trusted Experience",
    desc: "Proven impact across industries worldwide.",
  },
  {
    title: "Always Available",
    desc: "Continuous support to keep your business moving.",
  },
  {
    title: "Secure & Reliable",
    desc: "Enterprise-grade standards for peace of mind.",
  },
];

const socialMedia = [
  { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://in.linkedin.com/company/uptekysolution' },
  { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: 'https://m.facebook.com/uptekysolution/' },
  { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/uptekysolution?igsh=MTh4b2hxdTUwOWt5cg==' },
];


// Handler for Form Submission



export default function AboutPage() {
  const router = useRouter();
  const [statsInView, setStatsInView] = useState(false);
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

  // HANDLER to trigger the hidden file input
  const handleAttachClick = () => {
    fileInputRef.current?.click();
  };

  // HANDLER to update state when files are selected
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  //HANDLER for the service buttons (toggle selection)
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

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsInView(true);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );

    const statsElement = document.getElementById('stats-grid');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => {
      if (statsElement) {
        observer.unobserve(statsElement);
      }
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  const StatCounter = ({ end, label, duration = 2000, numberClassName = "", labelClassName = "", trigger = true }: { end: number; label: string; duration?: number; numberClassName?: string; labelClassName?: string; trigger?: boolean }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      if (!trigger || hasAnimated) return;

      let startTime: number | undefined;
      const updateCount = (timestamp: number) => {
        if (startTime === undefined) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressRatio = Math.min(progress / duration, 1);
        setCount(Math.floor(progressRatio * end));

        if (progressRatio < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setHasAnimated(true);
        }
      };

      const frame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(frame);
    }, [end, duration, trigger, hasAnimated]);


    return (

      <div className="text-center">
        <p
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 mt-2 ${numberClassName}`}
        >
          {count}
          {label
            ? label.includes("%")
              ? "%"
              : label.includes("-")
                ? "-"
                : "+"
            : ""}
        </p>
        <p
          className={`text-xs sm:text-sm tracking-widest text-[#8B8B8B] ${labelClassName}`}
        >
          {label
            ? label
              .replace(/\s*\(\d+-\d+%\)/, "")
              .replace(/\s*\(\d+-\d+\sWeeks\)/, "")
              .replace(" %", "")
              .trim()
            : ""}
        </p>
      </div>


    );
  };

  return (
    <div className="bg-[#232629] text-foreground font-sans overflow-x-hidden">
      {/*---------------------------------- 1st Section-------------------------------------------  */}
      {/* Hero Section with Abstract Background */}
      <section className="w-full relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#2A2D31] to-transparent blur-3xl opacity-60" />
          <div className="absolute -bottom-24 -right-32 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#2A2D31] to-transparent blur-3xl opacity-60" />
        </div>

        {/* FIX: Set a max-width for the content */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-[150px] lg:pb-20 text-center" style={{ paddingTop: '150px' }}>
          <motion.h1
            className="text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] xl:text-[45px] 2xl:text-[64px] leading-[121%] font-normal text-white font-['Outfit'] max-w-[980px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Transforming Businesses with AI,
            <br className="hidden sm:block" />
            Web, and IT Innovation
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-5 max-w-[860px] mx-auto text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed text-[#9FA6AD] font-['Poppins'] font-normal"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            At Upteky Solution Pvt. Ltd., we're redefining the way businesses adopt technology. Our focus is simple:
            build intelligent, scalable, and user-friendly solutions that help organizations grow faster, operate smarter, and
            serve customers better. Whether it's AI-powered chatbots, voice automation, custom ERP/CRM platforms, or
            enterprise‑grade websites, our solutions are designed to eliminate complexity and put your business a step ahead.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/careers">
              <Button
                className="w-[140px] sm:w-[180px] h-[42px] sm:h-[45px] rounded-[62px] border border-[#E58A4D] text-[14px] sm:text-[16px] font-normal bg-transparent text-white hover:bg-gradient-to-r hover:from-[#F58F1D] hover:to-[#E57D77] font-['Poppins']"
                variant="outline"
              >
                Join Our Team
              </Button>


            </Link>
          </motion.div>
        </div>

        {/* FIX: Set a max-width for the image container and center it */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8 sm:pb-12 md:pb-16">
          {/* Mobile: single composite image */}
          <motion.div
            className="block sm:hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src="/images/about-cards.png" alt="Process preview" className="w-full h-auto rounded-[20px]" />
          </motion.div>
          {/* Tablet/Desktop: three separate cards */}
          <motion.div
            className="hidden sm:grid grid-cols-1 sm:grid-cols-3 place-items-center gap-y-6 sm:gap-y-0 md:gap-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="/images/left-card.png"
              alt="Decorative left card"
              className="w-full max-w-[300px] h-auto aspect-square rounded-[30px] sm:rounded-[40px] object-cover mt-10 sm:mt-16 md:mt-10 hover:scale-[1.03] transition-transform duration-200 ease-in-out"
            />
            <img
              src="/images/middle-card.png"
              alt="Decorative middle card"
              className="w-full max-w-[300px] h-auto aspect-square rounded-[30px] sm:rounded-[40px] object-cover mt-6 sm:-mt-8 md:mt-2 hover:scale-[1.03] transition-transform duration-200 ease-in-out"
            />
            <img
              src="/images/right-card.png"
              alt="Decorative right card"
              className="w-full max-w-[300px] h-auto aspect-square rounded-[30px] sm:rounded-[40px] object-cover mt-10 sm:mt-16 md:mt-10 hover:scale-[1.03] transition-transform duration-200 ease-in-out"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------2nd Section---------------------------------------- */}
      <div className="border-t border-[#333333] " />
      <section className="w-full py-10 sm:py-14 md:py-16 lg:py-[64px]">
        {/* FIX: Set a max-width for the content and center it */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-normal text-white font-['Outfit']"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              What We Stand For
            </motion.h2>
          </div>

          {/* FIX: Removed sm:ml-[30px], md:ml-[60px], sm:mr-[30px], md:mr-[60px] to ensure responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              className="bg-[#2C3035] text-white rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.1, ease: "easeOut" }, // fast hover
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-start gap-4 p-2">
                <div className="-mt-1">
                  <img src="/images/mission.png" alt="Mission" className="w-14 h-8 sm:w-16 sm:h-9 md:w-20 md:h-12 lg:w-20 lg:h-12 xl:w-16 xl:h-9 object-contain" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-[20px] font-normal text-white mb-8 font-['Outfit']">Mission</h3>
                  {/* FIX: Removed negative margin/padding that was breaking mobile layout */}
                  <p className="text-xs sm:text-sm md:text-base text-[#BDBDBD] leading-relaxed font-['Poppins'] font-normal">
                    Empowering businesses with smart AI-driven solutions to boost efficiency, streamline operations, unlock growth, and achieve sustainable success.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[#2C3035] text-white rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.1, ease: "easeOut" }, // fast hover
              }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start gap-4 p-2">
                <div className="-mt-2">
                  <img src="/images/marketpenetration.png" alt="Vision" className="w-14 h-8 sm:w-16 sm:h-9 md:w-20 md:h-12 lg:w-20 lg:h-12 xl:w-16 xl:h-9 object-contain" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-[20px] font-normal text-white mb-8 font-['Outfit']">Vision</h3>
                  {/* FIX: Removed negative margin/padding that was breaking mobile layout */}
                  <p className="text-xs sm:text-sm md:text-base text-[#BDBDBD] leading-relaxed font-['Poppins'] font-normal">
                    To lead global digital transformation with intelligent automation, making technology simple, seamless, impactful, and accessible for everyone.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------3rd Section-------------------------------------------------- */}

      <div className="border-t border-[#333333]  " />
      <section className="w-full pt-16 sm:pt-20 md:pt-24 lg:pt-[96px] pb-10 sm:pb-14 md:pb-16 lg:pb-[64px] ">
        {/* FIX: Set a max-width for the content and center it */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3 md:mb-4 ">
            <motion.h2
              className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-normal text-white text-center font-['Outfit'] leading-[121%]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Industries We Serve
            </motion.h2>
          </div>
          <motion.p
            className="text-center text-[14px] sm:text-[16px] md:text-[18px] text-[#B7B7B7] max-w-[820px] mx-auto mb-8 sm:mb-10 md:mb-12 font-['Poppins'] font-normal leading-[150%]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We help businesses in every sector unlock opportunities, optimize operations, and stay future‑ready with technology that works.
          </motion.p>

          {/* FIX: Removed mx-4 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-24 to rely on parent padding and centering */}
          <motion.div
            className="bg-[#2C3035] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-8 lg:p-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-white font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[1.25] mb-8 font-['Outfit']">
                    Customized AI & Automation Solutions
                    <span className="block">for Every Sector</span>
                  </h3>
                  <p className="text-[#BDBDBD] text-[13px] sm:text-sm md:text-base leading-[1.6] max-w-[520px] font-['Poppins'] font-normal">
                    We build powerful, custom software solutions designed to solve real business challenges. As a leading provider of enterprise‑grade AI, ML, NLP, and automation tools, we deliver scalable, tailored solutions that give you a competitive edge.
                  </p>
                </div>
                <div className="mt-8">
                  <Link href="/careers">
                    <Button className="w-[140px] sm:w-[180px] h-[42px] sm:h-[45px] rounded-[62px] border border-[#E58A4D] text-[14px] sm:text-[16px] font-normal bg-transparent text-white hover:bg-gradient-to-r hover:from-[#F58F1D] hover:to-[#E57D77] font-['Poppins']">
                      Join Our Team
                    </Button>
                  </Link>
                </div>
              </div>

              {/* FIX: Removed sm:mr-[40px] md:mr-[0px] for consistent spacing */}
              <div>
                <div className="flex flex-wrap gap-2 sm:gap-5">
                  {industries.map((label, idx) => (
                    <span
                      key={idx}
                      className="text-[#CFCFCF] bg-[#32373C] border border-white/5 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs md:text-sm font-['Poppins'] font-normal hover:scale-[1.03] cursor-default select-none"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------4th Section---------------------------------------- */}
      <div className="border-t border-[#333333]  " />
      <section className="w-full py-10 sm:py-14 md:py-24">
        {/* FIX: Set standard max-width container. Removed container, mx-auto, and fixed padding classes from parent section. */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto rounded-[30px]">
            {/* FIX: Restored original grid classes (md:grid-cols-2 lg:grid-cols-3) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Left heading/description */}
              <motion.div
                className="col-span-1 px-3 flex flex-col text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Outfit'] text-[22px] sm:text-[28px] md:text-[30px] lg:text-[40px] xl:text-[45px] leading-[121%] text-white hover:scale-[1.02] transition-transform duration-200 ease-in-out">
                  Why <br />Work With Us?
                </h2>
                <p className="mt-3 sm:mt-4 font-poppins text-[14px] sm:text-[14px] md:text-[16px] text-[#858C92] max-w-sm mx-auto md:mx-0 hover:scale-[1.02] transition-transform duration-200 ease-in-out">
                  Seamlessly engage customers across channels with secure, integrated, and conversion-focused solutions.
                </p>
              </motion.div>

              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  className="col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.1, ease: "easeOut" }, // fast hover
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {/* FIX: Restored original card sizing/width classes */}
                  <div className="rounded-[16px] sm:rounded-[20px] md:rounded-[28px] bg-[#2C3035] w-full min-h-[150px] sm:min-h-[180px] md:min-h-[216px] mx-auto p-4 sm:p-5 md:p-6">
                    <h3 className="text-white pt-1.5 sm:pt-3 md:pt-4 text-base font-['Outfit'] sm:text-lg md:text-xl leading-[121%] text-center">{card.title}</h3>
                    <div className="-mx-4 sm:-mx-5 md:-mx-6 my-3 sm:my-5 md:my-8 h-px bg-[#4C4C4C]" />
                    <p className="text-[#858C92] text-[14px] sm:text-base md:text-base leading-[150%] text-center max-w-[260px] sm:max-w-[300px] md:max-w-[320px] mx-auto">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="w-full pt-12 md:pt-16 lg:pt-20">
              <div className="text-center lg:mb-0 md:mb-12">

                {/* Stats Grid */}
                <FadeIn>
                  <div id="stats-grid" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full gap-y-10 md:gap-y-12">
                    {/* Stat 1 */}
                    <div className="relative flex items-center justify-center py-8 hover:scale-[1.02] transition-transform duration-200 ease-in-out">
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <StatCounter end={10} label="+" numberClassName="text-[#353E47] font-poppins font-bold leading-none select-none text-[48px] sm:text-[64px] md:text-[96px] lg:text-[88px]" labelClassName="hidden" trigger={statsInView} />
                      </div>
                      <p className="relative z-[1] text-white text-[18px] font-['Outfit'] tracking-wide">Industries Served</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="relative flex items-center justify-center py-8 hover:scale-[1.02] transition-transform duration-200 ease-in-out">
                      <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-10 lg:h-14 w-px bg-white/15" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none space-x-2">
                        <StatCounter
                          end={4}
                          label=""
                          numberClassName="text-[#353E47] font-poppins font-bold leading-none select-none text-[48px] sm:text-[64px] md:text-[96px] lg:text-[88px]"
                          labelClassName="hidden"
                          trigger={statsInView}
                        />
                        <span className="text-[#353E47] font-poppins font-bold leading-none select-none text-[48px] sm:text-[64px] md:text-[96px] lg:text-[88px]">–</span>
                        <StatCounter
                          end={8}
                          label=""
                          numberClassName="text-[#353E47] font-poppins font-bold leading-none select-none text-[48px] sm:text-[64px] md:text-[96px] lg:text-[88px]"
                          labelClassName="hidden"
                          trigger={statsInView}
                        />
                      </div>
                      <p className="relative z-[1] text-white text-[18px] font-['Outfit'] tracking-wide">
                        Delivery Time (Weeks)
                      </p>
                    </div>


                    {/* Stat 3 */}
                    <div className="relative flex items-center justify-center py-8 hover:scale-[1.02] transition-transform duration-200 ease-in-out">
                      <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-10 lg:h-14 w-px bg-white/15" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <StatCounter end={30} label="%" numberClassName="text-[#353E47] font-poppins font-bold leading-none select-none text-[48px] sm:text-[64px] md:text-[96px] lg:text-[88px]" labelClassName="hidden" trigger={statsInView} />
                      </div>
                      <p className="relative z-[1] text-white text-[18px] font-['Outfit'] tracking-wide">Avg Client Growth</p>
                    </div>

                    {/* Stat 4 */}
                    <div className="relative flex items-center justify-center py-8 hover:scale-[1.02] transition-transform duration-200 ease-in-out">
                      <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-10 lg:h-14 w-px bg-white/15" />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <StatCounter end={100} label="" numberClassName="text-[#353E47] font-poppins font-bold leading-none select-none text-[48px] sm:text-[64px] md:text-[96px] lg:text-[88px]" labelClassName="hidden" trigger={statsInView} />
                      </div>
                      <p className="relative z-[1] text-white text-[18px] font-['Outfit'] tracking-wide">Total Integrations</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/*--------------------------------------------------5th Section: Proven Path to Success --------------------------------------------------*/}
      <div className="border-t border-[#333333]  " />
      <section className="w-full py-10 sm:py-12 md:py-16">
        {/* FIX: Set standard max-width container. Removed redundant lg:max-w-[1560px], mx-auto from parent section. */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 ">
            <motion.h2
              className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-medium text-white text-center font-['Outfit']"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Our Proven Path to Success
            </motion.h2>
          </div>

          {/* FIX: Restored original, dense grid classes */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:[grid-template-columns:repeat(2,314px)] lg:[grid-template-columns:repeat(3,320px)] xl:[grid-template-columns:repeat(4,320px)] gap-y-3 sm:gap-y-4 gap-x-2 sm:gap-x-3 justify-center">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#2C3035] rounded-lg sm:rounded-xl px-5 sm:px-6 py-5 sm:py-6 ring-1 ring-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] h-[210px] md:h-[225px] xl:h-[220px]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.1, ease: "easeOut" }, // fast hover
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <p className="text-[#CFCFCF] font-['Outfit'] font-normal text-[16px] sm:text-[18px] md:text-[20px] mb-4 sm:mb-3 lg:mb-3">{item.step}</p>
                <h4 className="text-white font-['Outfit'] font-normal text-[16px] sm:text-[18px] md:text-[20px] mb-4 sm:mb-3 lg:mb-3">{item.title}</h4>
                <p className="text-[#BDBDBD] font-['Poppins'] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[130%]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*--------------------------------------------------6th Section--------------------------------------------------*/}
      <div className="border-t border-[#333333]  " />
      {/* Free Consultation - two column form */}
      <section id="contact-form" className="py-12 md:py-16 bg-[#232629] backdrop-blur-sm border-t border-border/20 snap-start">
        {/* FIX: Removed the original container for a simpler, consistent max-width one */}
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full mx-auto bg-[#2C3035] backdrop-blur-lg rounded-[30px] border border-gray-600/30 p-4 sm:p-6 md:p-8">
            {/* FIX: Removed 2xl-ml-12 from the right form column by setting a fixed gap */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
              {/* Left info column (no changes here) */}
              <div className="flex flex-col h-full lg:col-span-2 justify-between items-center text-center lg:items-start lg:text-left p-4 md:p-6">

                {/* --- Top Content Block --- */}
                <div className="w-full">
                  <h2 className="text-[18px] sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal font-['Outfit'] leading-[100%] text-foreground mb-3 mt-1 lg:mt-6 pt-6">
                    Ready for Free Consultation?
                  </h2>
                  <p className="mb-10 text-[14px] sm:text-[15px] md:text-[20px] text-[#9FA6AD] font-['Outfit'] font-light leading-normal">
                    Your Demand for IT & AI Experts and free consultation anytime.
                  </p>

                  {/* This container ensures the contact info is grouped and aligned */}
                  <div className="mt-16 flex flex-col items-center lg:items-start gap-4">
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
              <div className="bg-[#2C3035] rounded-[30px] px-8 py-8 sm:px-14 sm:py-10 my-3 md:p-10 border border-[#A9A8A8] lg:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-0">
                    {/* Input fields (no changes) */}
                    <div>
                      <input type="text" placeholder="Full Name*" className="w-full mb-4 bg-transparent border-b border-muted-foreground/50 py-3 focus:border-accent focus:outline-none placeholder:text-base placeholder:text-muted-foreground" name="fullName" value={formData.fullName} onChange={handleChange} required />
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
                      <textarea
                        rows={3}
                        placeholder="Describe your project"
                        className="w-full bg-transparent border-b border-muted-foreground/50 pt-3 focus:border-accent focus:outline-none resize-none placeholder:text-base placeholder:text-muted-foreground text-muted-foreground"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                      />
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
                        className="w-full sm:w-auto bg-muted/40 hover:bg-muted text-sm text-muted-foreground rounded-full px-12 py-4 sm:px-12 sm:py-3 border border-border/40 transition-colors inline-flex items-center justify-center gap-2"
                      >
                        <span className="text-base leading-none m-0 p-0">+</span>
                        <span>Attach File(s)</span>
                      </button>
                      <Button
                        type="submit"
                        className="w-full sm:w-auto bg-gradient-accent text-sm text-white rounded-full px-12 py-6 sm:px-16 sm:py-5 border border-transparent hover:bg-none hover:bg-[#2c2c2c] hover:text-accent hover:border-accent transition-all duration-300"
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
    </div>
  );
}