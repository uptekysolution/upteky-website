"use client";
import { useState, useEffect } from "react";
import { ShieldCheck, Code2, Network, BarChart2, Users, BarChart3, Settings2, ChevronRight, Layers, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";
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
    <div className="bg-background text-foreground font-sans overflow-x-hidden">
      {/*---------------------------------- 1st Section-------------------------------------------  */}
      {/* Hero Section with Abstract Background */}
      <FadeIn>
        <div className="relative overflow-hidden bg-[url('/hero_section-1.png')] bg-cover bg-center bg-no-repeat">
          {/* Top Orange Light Gradient */}
          <div className="absolute top-0 left-0 right-0 w-full h-full z-0" aria-hidden="true">
            <svg viewBox="0 0 1440 800" className="w-full h-full" preserveAspectRatio="xMidYMin slice">
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="5%" r="70%" fx="50%" fy="0%">
                  {/* <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" /> */}
                  {/* <stop offset="30%" stopColor="#FF" stopOpacity="0.15" /> */}
                  {/* <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" /> */}
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
          <div className="relative z-10 min-h-[100vh] md:min-h-[100vh] sm:min-h-[100vh] flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="text-left max-w-[1560px] sm:max-w-[1200px]  mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl lg:mt-10   tracking-tight mb-4 sm:mb-6 mt-10 bg-clip-text text-transparent   bg-gradient-to-br from-[#FFFFFF] to-[#BF6F28]">
                Where Artificial <br/>
                Intelligence Meets  <br/>
                Real-World Impact
                </h1>
                <p className="text-lg text-left sm:text-xl text-muted-foreground max-w-3xl  mb-8 sm:mb-10 leading-relaxed">
                  Witness the evolution of artificial intelligence and our journey in shaping the future of business automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">


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

     
      {/* ---------------------------------------------3rd Section---------------------------------------- */}
      <div className="border-t border-[#333333] " />
      <section className="w-full max-w-7xl lg:max-w-[1560px]  px-4 sm:px-6 lg:px-8 py-[64px]  mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-2xl sm:text-7xl md:text-3xl lg:text-4xl font-bold text-white"
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
        <div className="mx-auto lg:mx-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
  {capabilities.map((cap, index) => (
    <div
      key={index}
      className="w-full min-h-[260px] bg-[#232629] text-white 
                 p-6 sm:p-8 md:p-10 lg:p-12 
                 rounded-[30px] md:rounded-[40px]
                 transition duration-300 
                 hover:shadow-[0px_0px_30px_-3px_#F58F1D]  
                 shadow-[0px_4px_34px_0px_#8E8E8E40]"
    >
      <img
        className="h-12 w-12 md:h-[60px] md:w-[60px] mb-6 md:mb-8"
        src={cap.image}
        alt={cap.alt}
      />
      <h3 className="text-xl sm:text-2xl font-semibold mb-3 md:mb-5 mt-1">
        {cap.title}
      </h3>
      <p className="text-sm md:text-base text-[#ADADAD] leading-relaxed">
        {cap.desc}
      </p>
    </div>
  ))}
</div>

      </section>

      {/* -----------------------------------------4th Section-------------------------------------------------- */}

      <div className="border-t border-[#333333]  " />
      <section className="w-full max-w-[1210px] lg:max-w-[1560px]  mx-auto px-4 sm:px-6 lg:px-8  py-[64px] ">
        <div className="text-center mb-10 md:mb-12 ">
          <motion.h2
            className="text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-white"
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
          <motion.div
            className="absolute hidden 2xl:mx-40 xl:mx-36 lg:mx-24 md:mx-16 md:block top-[82px] left-4 right-4 h-[1px] bg-orange-500 z-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeOut",
            }}
            style={{ transformOrigin: "left" }}
          />

          <div
            className="absolute hidden 2xl:mx-40 xl:mx-36 lg:mx-24  md:mx-16  md:block    top-[82px] left-4 right-4 h-[1px] bg-white/20 z-0"
          />


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
 {/* -------------------------------------2nd Section---------------------------------------- */}
      {/* Track Record Section */}
      <div className="border-t border-[#333333]  " />
      <section className=" py-12 lg:max-w-[1560px] mx-auto md:py-16 bg-background/30 backdrop-blur-sm ">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center lg:mb-0 md:mb-12">
            <motion.h2
              className="text-2xl sm:text-7xl md:text-3xl lg:text-4xl font-bold text-white"
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
      {/*--------------------------------------------------5th Section--------------------------------------------------*/}
    </div>
  );
}
