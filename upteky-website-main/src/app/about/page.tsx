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
        <p className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 mt-2 ${numberClassName}`}>{count}{label.includes("%") ? "%" : "+"}</p>
        <p className={`text-xs sm:text-sm tracking-widest text-[#8B8B8B] ${labelClassName}`}>{label.replace(/\s*\(\d+-\d+%\)/, '').replace(/\s*\(\d+-\d+\sWeeks\)/, '').replace(" %", "")}</p>
      </div>
    );
  };

  return (
    <div className="bg-background text-foreground font-sans overflow-x-hidden px-20">
      {/*---------------------------------- 1st Section-------------------------------------------  */}
      {/* Hero Section with Abstract Background */}
      <section className="w-full relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-32 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-[#2A2D31] to-transparent blur-3xl opacity-60" />
          <div className="absolute -bottom-24 -right-32 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#2A2D31] to-transparent blur-3xl opacity-60" />
        </div>

        <div className="relative z-10 max-w-[980px] mx-auto px-6 pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 text-center">
          <motion.h1
            className="text-[48px] leading-[1.2] font-normal text-white font-['Outfit']"
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
            className="mt-5 max-w-[860px] mx-auto text-[16px] leading-relaxed text-[#9FA6AD] font-['Poppins'] font-normal"
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
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/careers">
              <Button
                className="w-[180px] h-[45px] rounded-[62px] border border-[#E58A4D] text-[16px] font-normal bg-transparent text-white hover:bg-[#E58A4D]/10 font-['Poppins']"
                variant="outline"
              >
                Join Our Team
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-[1100px] mx-auto pb-8 sm:pb-12 md:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center px-6">
            <div
              className="w-[250px] h-[260px] rounded-[40px] border-4 border-[#434B53] mt-16"
              style={{ 
                transform: "rotate(-6.08deg)",
                background: "linear-gradient(180deg, #232629 0%, #34393F 100%)"
              }}
            />
            <div
              className="w-[250px] h-[260px] rounded-[40px] border-4 border-[#434B53] -mt-8"
              style={{ 
                transform: "rotate(0deg)",
                background: "linear-gradient(180deg, #232629 0%, #34393F 100%)"
              }}
            />
            <div
              className="w-[250px] h-[260px] rounded-[40px] border-4 border-[#434B53] mt-16"
              style={{ 
                transform: "rotate(6.08deg)",
                background: "linear-gradient(180deg, #232629 0%, #34393F 100%)"
              }}
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------2nd Section---------------------------------------- */}
      <div className="border-t border-[#333333] " />
      <section className="w-full max-w-7xl lg:max-w-[1560px] px-4 sm:px-6 lg:px-8 py-[64px] mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-[40px] font-normal text-white font-['Outfit']"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            What We Stand For
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-[#2C3035] text-white rounded-2xl md:rounded-3xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="-mt-2">
                <img src="/images/mission.png" alt="Mission" className="w-14 h-8" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-normal text-white mb-2 font-['Outfit']">Mission</h3>
                <p className="text-xs md:text-sm text-[#BDBDBD] leading-relaxed font-['Poppins'] font-normal">
                  Empowering businesses with smart AI-driven solutions to boost efficiency, streamline operations, unlock growth, and achieve sustainable success.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#2C3035] text-white rounded-2xl md:rounded-3xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="-mt-2">
                <img src="/images/marketpenetration.png" alt="Vision" className="w-14 h-8" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-normal text-white mb-2 font-['Outfit']">Vision</h3>
                <p className="text-xs md:text-sm text-[#BDBDBD] leading-relaxed font-['Poppins'] font-normal">
                  To lead global digital transformation with intelligent automation, making technology simple, seamless, impactful, and accessible for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------3rd Section-------------------------------------------------- */}

      <div className="border-t border-[#333333]  " />
      <section className="w-full max-w-[1210px] lg:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 py-[64px] ">
        <div className="text-center mb-3 md:mb-4 ">
          <motion.h2
            className="text-[40px] font-normal text-white text-center font-['Outfit'] leading-[121%]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Industries We Serve
          </motion.h2>
        </div>
        <p className="text-center text-[16px] text-[#B7B7B7] max-w-[820px] mx-auto mb-12 font-['Poppins'] font-normal leading-[100%]">
          We help businesses in every sector unlock opportunities, optimize operations, and stay future‑ready with technology that works.
        </p>

        <div className="bg-[#2C3035] rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-white font-normal text-base md:text-lg mb-2 font-['Poppins']">Customized AI & Automation Solutions <br /> for Every Sector</h3>
                <p className="text-[#BDBDBD] text-xs md:text-sm leading-relaxed max-w-[520px] font-['Poppins'] font-normal">
                  We build powerful, custom software solutions designed <br /> to solve real business challenges. As a leading provider <br />of enterprise‑grade AI, ML, NLP, and automation tools,<br /> we deliver scalable, tailored solutions that give you a<br /> competitive edge.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/careers">
                  <Button className="rounded-full w-[243px] h-[50px] text-sm font-normal bg-transparent border border-[#E58A4D] text-white hover:bg-[#E58A4D]/10 font-['Poppins']" variant="outline">
                    Join Our Team
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-3">
                {industries.map((label, idx) => (
                  <span
                    key={idx}
                    className="text-[#CFCFCF] bg-[#32373C] border border-white/5 rounded-full px-4 py-2 text-xs md:text-sm font-['Poppins'] font-normal"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------4th Section---------------------------------------- */}
      <div className="border-t border-[#333333]  " />
      <section className="container mx-auto px-4 md:px-6 py-12 sm:py-16 md:py-24">
        <div className="mx-auto rounded-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left heading/description */}
            <div className="col-span-1 px-3 flex flex-col text-center md:text-left">
              <h2 className="font-outfit text-[24px] sm:text-[28px] md:text-[30px] lg:text-[45px] leading-[121%] text-white">
                Why <br />Work With Us?
              </h2>
              <p className="mt-4 font-poppins text-[12px] sm:text-[14px] md:text-[16px] text-[#858C92] max-w-sm mx-auto md:mx-0">
                Seamlessly engage customers across channels with secure, integrated, and conversion-focused solutions.
              </p>
            </div>

            {cards.map((card, idx) => (
              <div key={idx} className="col-span-1">
                <div className="rounded-[20px] md:rounded-[28px] bg-[#2C3035] w-full min-h-[160px] sm:min-h-[180px] md:min-h-[216px] mx-auto p-4 sm:p-5 md:p-6">
                  <h3 className="text-white pt-2 sm:pt-3 md:pt-4 text-lg sm:text-xl leading-[121%] text-center">{card.title}</h3>
                  <div className="-mx-4 sm:-mx-5 md:-mx-6 my-4 sm:my-6 md:my-8 h-px bg-[#4C4C4C]" />
                  <p className="text-[#858C92] text-[12px] sm:text-[14px] md:text-base leading-[121%] text-center max-w-[280px] sm:max-w-[300px] md:max-w-[320px] mx-auto">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full pt-12 md:pt-16 lg:pt-20">
            <div className="text-center lg:mb-0 md:mb-12">

              {/* Stats Grid */}
              <FadeIn>
                <div id="stats-grid" className="grid grid-cols-2 md:grid-cols-4 w-full">
                  {/* Stat 1 */}
                  <div className="relative flex items-center justify-center py-8">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <StatCounter end={10} label="" numberClassName="text-[#353E47] font-poppins font-bold leading-none select-none text-[64px] sm:text-[80px] md:text-[96px]" labelClassName="hidden" trigger={statsInView} />
                    </div>
                    <p className="relative z-[1] text-white text-[12px] sm:text-sm tracking-wide">Industries Served</p>
                  </div>

                  {/* Stat 2 */}
                  <div className="relative flex items-center justify-center py-8">
                    <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-10 md:h-14 w-px bg-white/15" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-[#353E47] font-poppins font-bold leading-none select-none text-[64px] sm:text-[80px] md:text-[96px]">4-8</span>
                    </div>
                    <p className="relative z-[1] text-white text-[12px] sm:text-sm tracking-wide">Delivery Time (Weeks)</p>
                  </div>

                  {/* Stat 3 */}
                  <div className="relative flex items-center justify-center py-8">
                    <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-10 md:h-14 w-px bg-white/15" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <StatCounter end={30} label="%" numberClassName="text-[#353E47] font-poppins font-bold leading-none select-none text-[64px] sm:text-[80px] md:text-[96px]" labelClassName="hidden" trigger={statsInView} />
                    </div>
                    <p className="relative z-[1] text-white text-[12px] sm:text-sm tracking-wide">Avg Client Growth</p>
                  </div>

                  {/* Stat 4 */}
                  <div className="relative flex items-center justify-center py-8">
                    <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-10 md:h-14 w-px bg-white/15" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <StatCounter end={100} label="" numberClassName="text-[#353E47] font-poppins font-bold leading-none select-none text-[64px] sm:text-[80px] md:text-[96px]" labelClassName="hidden" trigger={statsInView} />
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
      <section className="py-12 lg:max-w-[1560px] mx-auto md:py-16">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12 ">
            <motion.h2
              className="text-[40px] font-medium text-white text-center font-['Outfit']"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              Our Proven Path to <br /> Success
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:[grid-template-columns:repeat(2,314px)] lg:[grid-template-columns:repeat(3,314px)] xl:[grid-template-columns:repeat(4,314px)] gap-y-4 gap-x-3 justify-center">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                className="bg-[#2C3035] rounded-xl px-6 py-6 ring-1 ring-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] h-[203px]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <p className="text-[#CFCFCF] font-['Outfit'] font-normal text-[20px] mb-3">{item.step}</p>
                <h4 className="text-white font-['Outfit'] font-normal text-[20px] mb-2">{item.title}</h4>
                <p className="text-[#BDBDBD] font-['Poppins'] font-normal text-[16px] leading-[150%]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
