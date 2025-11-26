"use client";
import { useState, useEffect } from "react";
import { ShieldCheck, Code2, Network, BarChart2, Users, BarChart3, Settings2, ChevronRight, Layers, TrendingUp, Rocket, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import Spline from '@splinetool/react-spline';
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView, useAnimation } from 'framer-motion';
import Script from 'next/script';

type CalendlyEmbedProps = {
  url: string;
};

const CalendlyEmbed = ({ url }: CalendlyEmbedProps) => {
  return (
    <>
      {/* This div is where Calendly will inject the widget. */}
      {/* The inline style is recommended by Calendly for proper rendering. */}
      <div
        className="calendly-inline-widget w-full h-full"
        data-url={url}
        style={{ minHeight: '700px' }}
      >
      </div>

      {/* Use Next.js Script component for optimized loading */}
      <Script
        id="calendly-widget-script"
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload" // Loads the script after the page is interactive
      />
    </>
  );
};


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


const riseUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


// Services Section Data

const services = [
  {
    number: '01',
    title: 'Conversational Agents',
    description: 'Smart chatbots and voice bots to automate support and boost engagement.',
  },
  {
    number: '02',
    title: 'AI Automation & Business Intelligence',
    description: 'Automate workflows and get actionable insights from your data.',
  },
  {
    number: '03',
    title: 'Advanced AI Solutions',
    description: 'AI-powered tools for smarter decisions and faster growth.',
  },
  {
    number: '04',
    title: 'Web Development Services',
    description: 'Modern, scalable websites and apps built for your business.',
  },
];

// Data for the process steps
const processSteps = [
  {
    imgSrc: '/iconImages/interview.png',
    title: 'Consultation & Discovery',
    description: 'Solve challenges and unlock opportunities with AI and IT solutions that fuel growth and efficiency.',
  },
  {
    imgSrc: '/iconImages/idea.png',
    title: 'Solution Design',
    description: 'We craft AI, IT, and web solutions that spark innovation, scale seamlessly, and fuel business growth.',
  },
  {
    imgSrc: '/iconImages/implementation.png',
    title: 'Development & Implementation',
    description: 'Secure, seamless execution with reliable tech for lasting success.',
  },
  {
    imgSrc: '/iconImages/efficacy.png',
    title: 'Optimization & Training',
    description: 'Driving adoption and efficiency through guidance and continuous improvement.',
  },
];


export default function LandingPage() {
  const router = useRouter();
  const [statsInView, setStatsInView] = useState(false);

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
        <p className={`text-3xl sm:text-4xl md:text-5xl font-medium mb-2 mt-2 ${numberClassName}`}>{count}{label.includes("%") ? "%" : "+"}</p>
        <p className={`text-xs sm:text-sm tracking-widest text-[#8B8B8B] ${labelClassName}`}>{label.replace(/\s*\(\d+-\d+%\)/, '').replace(/\s*\(\d+-\d+\sWeeks\)/, '').replace(" %", "")}</p>
      </div>
    );
  };



  return (
    <div className="bg-[#232629] text-white overflow-x-hidden lg:px-16 px-4">

      {/* Section 1: Hero */}
      <motion.section
        className="pt-36 pb-[90px]"
        variants={riseUpVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left Side — Text */}
            <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl font-medium leading-tight hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                Redefining business growth <br />
                through Web, AI, and <br />
                Automation.
              </h1>
              <p className="text-lg text-gray-400 hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                Build smarter, work faster, and grow stronger with Upteky's integrated Web, AI, and Automation solutions.
              </p>
            </div>

            {/* Right Side — Calendar */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="h-[540px] w-full sm:w-[500px] md:w-[520px] rounded-[30px] shadow-lg overflow-hidden relative">
                <iframe
                  src="https://calendly.com/uptekysolution/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1&embed_domain=yourdomain.com&embed_type=Inline"
                  className="w-full h-[900px] border-0 rounded-[30px]"
                  title="Upteky Meeting Scheduler"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </motion.section>


      <div className="border-t border-[#333333]" />

      {/* Section 2: Services */}
      <motion.section
        className="pt-[90px] pb-[90px]"
        variants={riseUpVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-medium text-center mb-16">
            Services We Offer
          </h2>

          {/* Desktop & Tablet View */}
          <div className="hidden sm:block">
            <div className="bg-[#2F343AB2] rounded-[30px] p-8 sm:p-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
                {services.map((service) => (
                  <motion.div
                    key={service.number}
                    variants={riseUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="space-y-8 flex flex-col items-center sm:items-start"
                  >
                    <p className="text-[#F58F1D] font-semibold text-xl">
                      {service.number}
                    </p>
                    <h3 className="text-xl font-medium h-16">{service.title}</h3>
                    <p className="text-gray-400">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View (Individual Cards) */}
          <div className="block sm:hidden">
            <div className="grid grid-cols-1 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.number}
                  variants={riseUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-[#2F343AB2] rounded-[30px] shadow-lg p-8 flex flex-col justify-center items-center text-center space-y-5 min-h-[280px]"
                >
                  <p className="text-[#F58F1D] font-semibold text-lg">
                    {service.number}
                  </p>
                  <h3 className="text-xl font-medium">{service.title}</h3>
                  <p className="text-gray-400 text-base">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <div className="border-t border-[#333333]" />

      {/* Section 3: Our Process */}
      <motion.section
        className="pt-[90px] pb-[90px]"
        variants={riseUpVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-medium text-center mb-20">
            Our Process
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-px bg-gray-600"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-x-8">
              {processSteps.map((step) => (
                <motion.div
                  key={step.title}
                  variants={riseUpVariant}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex flex-col items-center gap-4 text-center relative 
                 transition-transform duration-300 hover:scale-110"
                >
                  <div className="flex flex-col items-center gap-4 group transition-all duration-300 ease-in-out">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-[#343a40] rounded-full flex items-center justify-center mb-4 z-10 
                        transition-transform duration-300 ease-in-out group-hover:scale-105">
                      <img
                        src={step.imgSrc}
                        alt={step.title}
                        className="w-14 h-14 transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>

                    {/* Heading */}
                    <h3 className="text-xl font-medium mb-2 h-14 w-1/2 
                       transition-transform duration-300 ease-in-out group-hover:scale-110">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 w-3/4 
                      transition-transform duration-300 ease-in-out group-hover:scale-105">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </motion.section>
      <div className="border-t border-[#333333]" />

      {/* Section 4: Business Impact */}
      <motion.section
        className="pt-[90px] pb-[90px]"
        variants={riseUpVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl sm:text-5xl font-medium text-center mb-24">
            Business Impact
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <motion.div
              variants={riseUpVariant}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-[#2F343AB2] rounded-[30px] px-10 py-10 flex flex-col gap-4 justify-center min-h-[260px] cursor-pointer"
            >
              <p className="text-6xl font-medium text-[#F58F1D] mb-4">40%</p>
              <p className="text-gray-400 text-[20px]">
                Automation reduces manual work and accelerates processes, boosting
                team productivity and decision-making speed.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={riseUpVariant}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-[#2F343AB2] rounded-[30px] px-10 py-10 flex flex-col justify-center min-h-[260px] cursor-pointer"
            >
              <h3 className="text-xl font-medium mb-4">
                Instant Support — access smart assistants anytime
              </h3>
              <p className="text-gray-400 mb-8">
                AI-driven insights and digital solutions optimize sales funnels,
                improve customer retention, and unlock new opportunities.
              </p>
              <div className="flex items-center justify-start space-x-4">
                <div className="w-16 h-16 bg-[#3E4448] rounded-2xl flex items-center justify-center">
                  <img
                    src="/iconImages/workflow.png"
                    alt="Workflow Automation Icon"
                    className="w-12 h-12"
                  />
                </div>
                <svg
                  width="40"
                  height="2"
                  viewBox="0 0 40 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="1" x2="40" y2="1" stroke="#6c757d" strokeWidth="2" />
                  <path d="M39 2L40 1L39 0" stroke="#6c757d" strokeWidth="2" />
                </svg>
                <div className="w-16 h-16 bg-[#3E4448] rounded-2xl flex items-center justify-center">
                  <img
                    src="/iconImages/scale.png"
                    alt="Workflow Automation Icon"
                    className="w-10 h-10"
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 3 (Big Card) */}
            <motion.div
              variants={riseUpVariant}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="md:col-span-2 bg-[#2F343AB2] rounded-[30px] px-12 pt-10 pb-0 flex flex-col md:flex-row 
                   items-stretch gap-8 min-h-[320px] overflow-hidden cursor-pointer"
            >
              {/* Text Side */}
              <div className="w-full md:w-1/2 flex flex-col justify-center pb-10 md:pb-0">
                <h3 className="text-2xl font-medium mb-6">Revenue Growth</h3>
                <p className="text-gray-400 text-[20px]">
                  Future-ready systems ensure smooth<br /> business expansion,<br />
                  handling higher demand <br />without extra resource strain.
                </p>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 flex items-end justify-center">
                <img
                  src="/iconImages/graph.png"
                  alt="Revenue Growth Graph"
                  className="w-full object-cover rounded-t-[30px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>



      <div className="border-t border-[#333333]" />

      {/* Section 5: CTA */}
      <motion.section
        className="pt-[90px] pb-24"
        variants={riseUpVariant}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-6 sm:px-8">
          <div className="bg-[#2F343AB2] rounded-[30px] p-10 sm:p-12 md:p-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 md:gap-6">

            {/* Text Content */}
            <div className="md:w-2/3 space-y-4 sm:space-y-6">
              <h2 className="text-3xl md:text-4xl font-medium leading-snug hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                Ready to <br />revolutionize your <br />business?
              </h2>
              <p className="text-gray-400 text-base sm:text-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                Automate workflows, boost productivity, and grow faster with Upteky.
              </p>
            </div>

            {/* Button */}
            <div className="flex-shrink-0 mt-4 sm:mt-6 md:mt-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="whitespace-nowrap bg-gradient-to-r from-[#F58F1D] to-[#E57D77] w-[250px] h-[62px] text-white font-medium py-3 px-10 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Book Now
              </button>

            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
}


