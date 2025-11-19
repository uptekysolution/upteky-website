"use client";
import { useState, useEffect } from "react";
import { ShieldCheck, Code2, Network, BarChart2, Users, BarChart3, Settings2, ChevronRight, Layers, TrendingUp, Rocket, Eye } from "lucide-react";
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

export default function AboutPage() {
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
      {/*---------------------------------- 1st Section-------------------------------------------  */}
      {/* Hero Section with Abstract Background */}
      <section className="w-full relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#2A2D31] to-transparent blur-3xl opacity-60" />
          <div className="absolute -bottom-24 -right-32 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#2A2D31] to-transparent blur-3xl opacity-60" />
        </div>

        <div className="relative z-10 max-w-[980px] mx-auto px-4 sm:px-6 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-[150px] lg:pb-20 text-center" style={{ paddingTop: '150px' }}>
          <motion.h1
            className="text-[24px] sm:text-[28px] md:text-[40px] lg:text-[48px] xl:text-[45px] 2xl:text-[64px] leading-[121%] font-normal text-white font-['Outfit']"
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

        <div className="relative z-10 max-w-[1100px] mx-auto pb-8 sm:pb-12 md:pb-16">
          {/* Mobile: single composite image */}
          <motion.div
            className="block sm:hidden px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img src="/images/about-cards.png" alt="Process preview" className="w-full h-auto rounded-[20px]" />
          </motion.div>
          {/* Tablet/Desktop: three separate cards */}
          <motion.div
            className="hidden sm:grid grid-cols-1 sm:grid-cols-3 place-items-center px-4 sm:px-6 gap-y-6 sm:gap-y-0 md:gap-x-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="/images/left-card.png"
              alt="Decorative left card"
              className="w-[220px] h-[220px] sm:w-[250px] sm:h-[260px] md:w-[210px] md:h-[230px] xl:w-[300px] xl:h-[320px] rounded-[30px] sm:rounded-[40px] object-cover mt-10 sm:mt-16 md:mt-10 hover:scale-[1.03] transition-transform duration-200 ease-in-out"
            />
            <img
              src="/images/middle-card.png"
              alt="Decorative middle card"
              className="w-[220px] h-[220px] sm:w-[250px] sm:h-[260px] md:w-[210px] md:h-[230px] xl:w-[300px] xl:h-[320px] rounded-[30px] sm:rounded-[40px] object-cover mt-6 sm:-mt-8 md:mt-2 hover:scale-[1.03] transition-transform duration-200 ease-in-out"
            />
            <img
              src="/images/right-card.png"
              alt="Decorative right card"
              className="w-[220px] h-[220px] sm:w-[250px] sm:h-[260px] md:w-[210px] md:h-[230px] xl:w-[300px] xl:h-[320px] rounded-[30px] sm:rounded-[40px] object-cover mt-10 sm:mt-16 md:mt-10 hover:scale-[1.03] transition-transform duration-200 ease-in-out"
            />
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------2nd Section---------------------------------------- */}
      <div className="border-t border-[#333333] " />
      <section className="w-full max-w-7xl lg:max-w-[1560px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 lg:py-[64px] mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <motion.div
            className="bg-[#2C3035] text-white rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 sm:ml-[30px] md:ml-[60px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.1, ease: "easeOut" }, // fast hover
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-start gap-4">
              <div className="-mt-2">
                <img src="/images/mission.png" alt="Mission" className="w-14 h-8 sm:w-16 sm:h-9 md:w-20 md:h-12 lg:w-20 lg:h-12 xl:w-16 xl:h-9 object-contain" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-normal text-white mb-2 font-['Outfit']">Mission</h3>
                <p className="text-xs sm:text-sm md:text-base text-[#BDBDBD] leading-relaxed font-['Poppins'] font-normal -ml-16 sm:-ml-[4.5rem] pl-10 sm:pl-8 md:pl-8">
                  Empowering businesses with smart AI-driven solutions to boost efficiency, streamline operations, unlock growth, and achieve sustainable success.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#2C3035] text-white rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 sm:mr-[30px] md:mr-[60px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.1, ease: "easeOut" }, // fast hover
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="-mt-2">
                <img src="/images/marketpenetration.png" alt="Vision" className="w-14 h-8 sm:w-16 sm:h-9 md:w-20 md:h-12 lg:w-20 lg:h-12 xl:w-16 xl:h-9 object-contain" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-normal text-white mb-2 font-['Outfit']">Vision</h3>
                <p className="text-xs sm:text-sm md:text-base text-[#BDBDBD] leading-relaxed font-['Poppins'] font-normal -ml-16 sm:-ml-[4.5rem] pl-10 sm:pl-8 md:pl-8">
                  To lead global digital transformation with intelligent automation, making technology simple, seamless, impactful, and accessible for everyone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -----------------------------------------3rd Section-------------------------------------------------- */}

      <div className="border-t border-[#333333]  " />
      <section className="w-full max-w-[1210px] lg:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-[96px] pb-10 sm:pb-14 md:pb-16 lg:pb-[64px] ">
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

        <motion.div
          className="bg-[#2C3035] rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-8 lg:p-10 mx-4 sm:mx-6 md:mx-10 lg:mx-16 xl:mx-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch">
            <div className="flex flex-col justify-between h-full ml-2 sm:ml-4 md:ml-6 lg:ml-8">
              <div>
                <h3 className="text-white font-normal text-[16px] sm:text-[18px] md:text-lg leading-[1.25] mb-2 font-['Poppins']">
                  Customized AI & Automation Solutions
                  <span className="block">for Every Sector</span>
                </h3>
                <p className="text-[#BDBDBD] text-[13px] sm:text-sm md:text-base leading-[1.6] max-w-[520px] font-['Poppins'] font-normal">
                  We build powerful, custom software solutions designed to solve real business challenges. As a leading provider of enterprise‑grade AI, ML, NLP, and automation tools, we deliver scalable, tailored solutions that give you a competitive edge.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/careers">
                  <Button className="rounded-full w-[140px] sm:w-[243px] h-[46px] sm:h-[50px] text-sm font-normal bg-transparent border border-[#E58A4D] text-white hover:bg-gradient-to-r hover:from-[#F58F1D] hover:to-[#E57D77] font-['Poppins']" variant="outline">
                    Join Our Team
                  </Button>
                </Link>
              </div>
            </div>

            <div className="sm:mr-[40px] md:mr-[0px]">
              <div className="flex flex-wrap gap-2 sm:gap-3">
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
      </section>

      {/* -------------------------------------4th Section---------------------------------------- */}
      <div className="border-t border-[#333333]  " />
      <section className="container mx-auto px-4 md:px-6 lg:px-24 py-10 sm:py-14 md:py-24">
        <div className="mx-auto rounded-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Left heading/description */}
            <motion.div
              className="col-span-1 px-3 flex flex-col text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-outfit text-[22px] sm:text-[28px] md:text-[30px] lg:text-[40px] xl:text-[45px] leading-[121%] text-white hover:scale-[1.02] transition-transform duration-200 ease-in-out">
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
                <div className="rounded-[16px] sm:rounded-[20px] md:rounded-[28px] bg-[#2C3035] w-full min-h-[150px] sm:min-h-[180px] md:min-h-[216px] mx-auto p-4 sm:p-5 md:p-6">
                  <h3 className="text-white pt-1.5 sm:pt-3 md:pt-4 text-base sm:text-lg md:text-xl leading-[121%] text-center">{card.title}</h3>
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
                    <p className="relative z-[1] text-white text-[12px] sm:text-sm tracking-wide">Industries Served</p>
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
                    <p className="relative z-[1] text-white text-[12px] sm:text-sm tracking-wide">
                      Delivery Time (Weeks)
                    </p>
                  </div>


                  {/* Stat 3 */}
                  <div className="relative flex items-center justify-center py-8 hover:scale-[1.02] transition-transform duration-200 ease-in-out">
                    <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-10 lg:h-14 w-px bg-white/15" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <StatCounter end={30} label="%" numberClassName="text-[#353E47] font-poppins font-bold leading-none select-none text-[48px] sm:text-[64px] md:text-[96px] lg:text-[88px]" labelClassName="hidden" trigger={statsInView} />
                    </div>
                    <p className="relative z-[1] text-white text-[12px] sm:text-sm tracking-wide">Avg Client Growth</p>
                  </div>

                  {/* Stat 4 */}
                  <div className="relative flex items-center justify-center py-8 hover:scale-[1.02] transition-transform duration-200 ease-in-out">
                    <span className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-10 lg:h-14 w-px bg-white/15" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <StatCounter end={100} label="" numberClassName="text-[#353E47] font-poppins font-bold leading-none select-none text-[48px] sm:text-[64px] md:text-[96px] lg:text-[88px]" labelClassName="hidden" trigger={statsInView} />
                    </div>
                    <p className="relative z-[1] text-white text-[12px] sm:text-sm tracking-wide">Total Integrations</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------------------------------5th Section--------------------------------------------------*/}
      <div className="border-t border-[#333333]  " />
      <section className="py-10 sm:py-12 lg:max-w-[1560px] mx-auto md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 ">
            <motion.h2
              className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] font-medium text-white text-center font-['Outfit']"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              // whileHover={{
              //   scale: 1.02,
              //   transition: { duration: 0.1, ease: "easeOut" }, // fast hover
              // }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Our Proven Path to Success
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:[grid-template-columns:repeat(2,314px)] lg:[grid-template-columns:repeat(3,314px)] xl:[grid-template-columns:repeat(4,290px)] gap-y-3 sm:gap-y-4 gap-x-2 sm:gap-x-3 justify-center">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#2C3035] rounded-lg sm:rounded-xl px-5 sm:px-6 py-5 sm:py-6 ring-1 ring-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] h-[210px] md:h-[225px] xl:h-[220px]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.1, ease: "easeOut" }, // fast hover
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <p className="text-[#CFCFCF] font-['Outfit'] font-normal text-[16px] sm:text-[18px] md:text-[20px] mb-2 sm:mb-3">{item.step}</p>
                <h4 className="text-white font-['Outfit'] font-normal text-[16px] sm:text-[18px] md:text-[20px] mb-1.5 sm:mb-2">{item.title}</h4>
                <p className="text-[#BDBDBD] font-['Poppins'] font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[130%]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


