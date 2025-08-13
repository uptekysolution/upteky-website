"use client";
import { useState, useEffect } from "react";
import { ShieldCheck, Code2, Network, BarChart2, Users, BarChart3, Settings2, ChevronDown, ChevronUp, ChevronRight, Layers, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
import Spline from '@splinetool/react-spline';
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services does Upteky provide?",
    answer:
      "We offer AI-powered solutions including conversational agents, process automation, analytics, and quality assurance.",
  },
  {
    question: "Do you develop custom AI solutions?",
    answer:
      "Yes, we build tailor-made AI tools to address specific business challenges and optimize operations.",
  },
  {
    question: "How long does it take to implement AI solutions?",
    answer:
      "Our typical delivery timeline is 4–8 weeks depending on complexity and integration requirements.",
  },
  {
    question: "What is your approach to integrating AI into existing systems?",
    answer:
      "We follow a collaborative approach that ensures seamless integration with minimal disruption to current workflows.",
  },
];
const capabilities = [
  {
    image: "/images/WebDevelopment.png",
    title: "Web Development",
    desc: "We design and develop scalable, responsive, and AI-enabled web solutions tailored to your business goals.",
  },
  {
    image: "/images/IT Consultation.png",
    title: "IT Consultation",
    desc: "Our experts provide strategic IT guidance to optimize your infrastructure and implement cost-effective solutions.",
  },
  {
    image: "/images/Analytics.png",
    title: "Analytics",
    desc: "Transforms data into real-time insights to drive faster, smarter business decisions.",
  },
  {
    image: "/images/Quality Assurance.png",
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

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleHover = (index: number) => {
    setOpenIndex(index);
  };

  const handleLeave = () => {
    setOpenIndex(null);
  };

  return (
    <section className="w-full max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 pt-[48px] sm:pt-[56px] md:pt-[64px] pb-[40px] sm:pb-[44px] md:pb-[48px]">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <motion.h2
          className="text-3xl sm:text-7xl md:text-5xl lg:text-4xl font-bold text-white"
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
              className="flex items-center justify-between w-full text-left group"
            >
              <span
                className={`text-sm sm:text-base md:text-lg font-medium 
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


export default function AboutPage() {
  const router = useRouter();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  const StatCounter = ({ end, label, duration = 2000 }: { end: number; label: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime: number | undefined;
      const updateCount = (timestamp: number) => {
        if (startTime === undefined) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressRatio = Math.min(progress / duration, 1);
        setCount(Math.floor(progressRatio * end));

        if (progressRatio < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      const frame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(frame);
    }, [end, duration]);


    return (

      <div className="text-center">
        <p className="text-3xl  sm:text-4xl md:text-5xl font-bold text-accent mb-4 mt-2">{count}{label.includes("%") ? "%" : "+"}</p>
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B] ">{label.replace(/\s*\(\d+-\d+%\)/, '').replace(/\s*\(\d+-\d+\sWeeks\)/, '').replace(" %", "")}</p>
      </div>
    );
  };

  return (
    <div className="bg-background text-foreground font-sans">
             {/*---------------------------------- 1st Section-------------------------------------------  */}
       {/* Hero Section with Abstract Background */}
       <FadeIn>
          <div className="relative overflow-hidden bg-gradient-to-br from-[#2d3436] to-[#000000]">
            {/* Top Orange Light Gradient */}
            <div className="absolute top-0 left-0 right-0 w-full h-full z-0" aria-hidden="true">
              <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="xMidYMin slice">
                <defs>
                  <radialGradient id="centerGlow" cx="50%" cy="5%" r="70%" fx="50%" fy="0%">
                    <stop offset="0%" stopColor="#FF8B06" stopOpacity="0.35" />
                    <stop offset="30%" stopColor="#FF8B06" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#FF8B06" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="100%" height="65%" y="0" fill="url(#centerGlow)" />
              </svg>
            </div>

            {/* Background SVG */}
            <div className="absolute inset-0 z-0">
             <svg
               className="w-full h-full opacity-10"
               viewBox="0 0 1440 600"
               preserveAspectRatio="xMidYMin slice"
             >
               <defs>
                 <linearGradient
                   id="heroGradientCareers"
                   x1="0%"
                   y1="0%"
                   x2="100%"
                   y2="100%"
                 >
                   <stop offset="0%" stopColor="hsl(var(--accent))" />
                   <stop
                     offset="100%"
                     stopColor="hsl(var(--accent))"
                     stopOpacity="0.7"
                   />
                 </linearGradient>
                 <filter
                   id="glowCareers"
                   x="-50%"
                   y="-50%"
                   width="200%"
                   height="200%"
                 >
                   <feGaussianBlur stdDeviation="15" result="blur" />
                   <feMerge>
                     <feMergeNode in="blur" />
                     <feMergeNode in="SourceGraphic" />
                   </feMerge>
                 </filter>
               </defs>

               <path
                 d="M -100,100 Q 500,200 1200,100 T 2000,200"
                 stroke="url(#heroGradientCareers)"
                 strokeWidth="2"
                 fill="none"
                 opacity="0.5"
               />
               <path
                 d="M -100,200 Q 600,50 1300,150 T 2000,50"
                 stroke="url(#heroGradientCareers)"
                 strokeWidth="3"
                 fill="none"
                 opacity="0.3"
                 strokeDasharray="5,15"
               />
               <circle cx="200" cy="150" r="3" fill="hsl(var(--accent))" />
               <circle cx="600" cy="120" r="2" fill="hsl(var(--accent))" />
               <circle cx="1000" cy="180" r="4" fill="hsl(var(--accent))" />
               <circle cx="1400" cy="150" r="3" fill="hsl(var(--accent))" />
             </svg>
           </div>

           {/* Content */}
           <div className="relative z-10 min-h-[70vh] md:min-h-[80vh] flex items-center">
              <div className="container mx-auto px-4 md:px-6">
                <motion.div
                  className="text-center max-w-4xl mx-auto"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                    Innovation That Drives Growth
                  </h1>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                    Witness the evolution of artificial intelligence and our journey in shaping the future of business automation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                 
                 <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/5 rounded-full px-6 py-3 sm:px-8 sm:py-3.5 font-medium text-sm sm:text-base">
                   <Link href="/contact">Let's Tech Talk</Link>
                 </Button>
               </div>
                </motion.div>
               {/* <div className="order-1 md:order-2 h-[20rem] sm:h-[24rem] md:h-[34rem] lg:h-[20rem] flex items-center justify-center">
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <Spline
        scene="https://prod.spline.design/gzZr3RkDaeIJ0HKD/scene.splinecode" 
      />
            </div>
          </div> */}
             </div>
           </div>
         </div>
       </FadeIn>

             {/* -------------------------------------2nd Section---------------------------------------- */}
        {/* Track Record Section */}
        <section className="lg:mx-6 py-12 md:py-16 bg-background/30 backdrop-blur-sm ">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
                             <motion.h2
                 className="text-3xl sm:text-7xl md:text-5xl lg:text-4xl font-bold text-white"
                 initial={{ opacity: 0, y: -20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ duration: 0.6 }}
               >
                 Our Track Record
               </motion.h2>

              <motion.div
                className="w-[88px] h-1 mt-2 bg-gradient-to-r from-[#F58F1D] to-[#E57D77] mx-auto rounded-full mb-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ transformOrigin: 'center' }}
              />

              {/* Stats Grid */}
              <FadeIn>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] w-full">
                 {/* Card 1 */}
                 <div className="bg-[#232629] text-center rounded-xl px-4 py-4 shadow-[0px_1px_31px_0px_#6B6B6B40]">
                   <StatCounter end={10} label="Industries Served" />
                 </div>

                 {/* Card 2 */}
                 <div className="bg-[#232629] text-center rounded-xl px-4 py-4 shadow-[0px_1px_31px_0px_#6B6B6B40]">
                   <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mt-2 mb-4">4-8</p>
                   <p className="text-xs sm:text-sm uppercase tracking-widest text-[#8B8B8B]">Delivery Time (Weeks)</p>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-[#232629] text-center rounded-xl px-4 py-4 shadow-[0px_1px_31px_0px_#6B6B6B40]">
                   <StatCounter end={30} label="Avg Client Growth (30-50%)" />
                 </div>

                 {/* Card 4 */}
                 <div className="bg-[#232629] text-center rounded-xl px-4 py-4 shadow-[0px_1px_31px_0px_#6B6B6B40]">
                   <StatCounter end={100} label="Integrations Implemented" />
                 </div>
               </div>
             </FadeIn>
           </div>
         </div>
       </section>
      

      {/* ---------------------------------------------3rd Section---------------------------------------- */}
      <div className="border-t border-[#333333] mt-6" />
      <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-[64px] pb-[48px] mx-auto">
        <div className="text-center mb-12">
                     <motion.h2
             className="text-3xl sm:text-7xl md:text-5xl lg:text-4xl font-bold text-white"
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.6 }}
           >
             Our Capabilities
           </motion.h2>

          <motion.div
            className="w-[88px] h-1 mt-2 bg-gradient-to-r from-[#F58F1D] to-[#E57D77] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: "center" }}
          />
        </div>

        <div className=" mx-auto lg:mx-6  grid grid-cols-1 md:grid-col-2 sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 ">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="lg:w-md h-[300px]  bg-[#232629] text-white p-12 sm:p-8 md:p-10 rounded-[40px]  transition duration-300 hover:shadow-[0px_0px_30px_-3px_#F58F1D]  shadow-[0px_4px_34px_0px_#8E8E8E40]"
            >
              <img className=" h-[60px]  w-[60px] mb-8 " src={cap.image} />
              <h3 className="text-2xl font-semibold mb-5 mt-1">{cap.title}</h3>
              <p className="text-sm text-[#ADADAD] leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* -----------------------------------------4th Section-------------------------------------------------- */}

      <div className="border-t border-[#333333]  mt-8" />
      <section className="w-full max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8  pt-[64px] pb-[48px]">
        <div className="text-center mb-10 md:mb-12 ">
                     <motion.h2
             className="text-3xl sm:text-7xl md:text-5xl lg:text-4xl font-bold text-white"
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.6 }}
           >
             Our Workflow
           </motion.h2>

          <motion.div
            className="w-[88px] h-1 mt-2 bg-gradient-to-r from-[#F58F1D] to-[#E57D77] mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ transformOrigin: "center" }}
          />
        </div>

        {/* Timeline container with absolute line */}
        <div className="relative">
          {/* Horizontal connecting line visible on md+ screens */}
          <div className="absolute mx-[130px] hidden md:block top-[80px] left-0 right-0 h-[1px] bg-white/20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white relative z-10">
            {steps.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center group transition-all duration-300 px-2"
              >
                {/* Step Number */}
                <div
                  className="text-[48px] font-bold mb-2 text-[#BABABA]
                   group-hover:text-accent
                   group-hover:-translate-y-1
                   transition-all duration-300 transform"
                >
                  {item.step}
                </div>

                {/* Dot */}
                <div className="w-2 h-2 rounded-full bg-white mb-4"></div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-4
                   group-hover:text-accent
                   group-hover:-translate-y-1
                   transition-all duration-300 transform"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-gray-300 leading-relaxed max-w-[280px] mx-auto
                   group-hover:-translate-y-1
                   transition-all duration-300 transform"
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

             {/*--------------------------------------------------5th Section--------------------------------------------------*/}
       <div className="border-t border-[#333333]  mt-8" />
       <FAQSection />
    </div>
  );
}
