'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectDiscussion from '@/components/ProjectDiscussion';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export default function ConversationalAgentsPage() {
  const cards = [
    {
      title: 'Omnichannel Expertise',
      desc: 'Web, WhatsApp, Instagram, Messenger, telephony, and more.'
    },
    {
      title: 'Conversion-First Design',
      desc: 'Flows engineered for lead capture, qualification, and bookings.'
    },
    {
      title: 'Secure and Compliant',
      desc: 'Role-based access, encryption, audit logs, GDPR-aligned practices.'
    },
    {
      title: 'Deep Integrations',
      desc: 'CRM, marketing automation, payment gateways, calendars, and data warehouses.'
    },
    {
      title: 'Analytics and Optimization',
      desc: 'Real-time dashboards, A/B tests, and continuous improvement.'
    },
  ];

  const services = [
    {
      no: '01',
      title: 'Interactive AI Website Chatbot',
      desc: 'Provide instant answers, capture leads, schedule meetings, and sync with your CRM seamlessly.',
      cta: 'Explore Website Chatbot →',
    },
    {
      no: '02',
      title: 'WhatsApp & Multi-Platform Chatbot',
      desc: 'Automate chats on WhatsApp, Instagram, Messenger, and more.',
      cta: 'Explore Multi-Platform Chatbot →',
    },
    {
      no: '03',
      title: 'AI-Powered Lead Reactivation',
      desc: 'Revive dormant leads with automated, personalized outreach.',
      cta: 'Explore Lead Reactivation →',
    },
    {
      no: '04',
      title: 'AI Voice Assistant (Voice Bot)',
      desc: 'Automate calls with human-like conversations, smart IVR, real-time transcription, and CRM integration.',
      cta: 'Explore Voice Bot →',
    },
  ];

  const PlusMarker = ({ className = '' }: { className?: string }) => (
    <div className={`absolute ${className}`} aria-hidden>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M17.9932 0.292358C27.5331 0.292605 35.2666 8.02673 35.2666 17.5668C35.2664 27.1066 27.5330 34.84 17.9932 34.8402C8.45312 34.8402 0.718994 27.1068 0.71875 17.5668C0.71875 8.02658 8.45297 0.292358 17.9932 0.292358Z" fill="#2C3035" stroke="#545A62" strokeWidth="0.437318" />
      </svg>
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="13" height="14" viewBox="0 0 13 14" fill="none">
        <path d="M6.41941 1.0199V12.9661M0.446289 6.99302H12.3925" stroke="white" strokeWidth="0.874636" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );

  const ScrollStack = () => {
    React.useEffect(() => {
      const runGsap = async () => {
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        const { Observer } = await import('gsap/Observer');

        gsap.registerPlugin(ScrollTrigger, Observer);

        let allowScroll = true;
        let scrollTimeout = gsap.delayedCall(0.5, () => (allowScroll = true)).pause();
        const time = 0.5;
        let animating = false;

        gsap.set(".card-stack-card", {
          y: (index) => 20 * index,
          transformOrigin: "center top"
        });

        const tl = gsap.timeline({ paused: true });

        tl.add("card2");
        tl.to(".card-stack-card:nth-child(1)", {
          scale: 0.85,
          duration: time,
          backgroundColor: "#2C3035"
        });
        tl.from(".card-stack-card:nth-child(2)", {
          y: () => window.innerHeight,
          duration: time
        }, "<");

        tl.add("card3");
        tl.to(".card-stack-card:nth-child(2)", {
          scale: 0.9,
          duration: time,
          backgroundColor: "#2C3035"
        });
        tl.from(".card-stack-card:nth-child(3)", {
          y: () => window.innerHeight,
          duration: time
        }, "<");

        tl.add("card4");
        tl.to(".card-stack-card:nth-child(3)", {
          scale: 0.95,
          duration: time,
          backgroundColor: "#2C3035"
        });
        tl.from(".card-stack-card:nth-child(4)", {
          y: () => window.innerHeight,
          duration: time
        }, "<");

        tl.add("card5");
        tl.to(".card-stack-card:nth-child(4)", {
          scale: 0.98,
          duration: time,
          backgroundColor: "#2C3035"
        });
        tl.from(".card-stack-card:nth-child(5)", {
          y: () => window.innerHeight,
          duration: time
        }, "<");

        tl.add("card6");
        tl.to(".card-stack-card:nth-child(5)", {
          scale: 0.99,
          duration: time,
          backgroundColor: "#2C3035"
        });
        tl.from(".card-stack-card:nth-child(6)", {
          y: () => window.innerHeight,
          duration: time
        }, "<");

        function tweenToLabel(direction: string | undefined, isScrollingDown: boolean) {
          if (
            (!tl.nextLabel() && isScrollingDown) ||
            (!tl.previousLabel() && !isScrollingDown)
          ) {
            cardsObserver.disable();
            return;
          }

          if (!animating && direction) {
            animating = true;
            tl.tweenTo(direction, { onComplete: () => { animating = false; } });
          }
        }

        const cardsObserver = Observer.create({
          wheelSpeed: -1,
          onDown: () => tweenToLabel(tl.previousLabel(), false),
          onUp: () => tweenToLabel(tl.nextLabel(), true),
          tolerance: 10,
          preventDefault: true,
          onEnable(self: any) {
            allowScroll = false;
            scrollTimeout.restart(true);
            let savedScroll = self.scrollY();
            self._restoreScroll = () => self.scrollY(savedScroll);
            document.addEventListener("scroll", self._restoreScroll, {
              passive: false
            });
          },
          onDisable: (self: any) =>
            document.removeEventListener("scroll", self._restoreScroll)
        });

        cardsObserver.disable();

        ScrollTrigger.create({
          id: "STOP-SCROLL",
          trigger: ".cards-section-stack",
          pin: true,
          start: "top 30%",
          end: "+=1",
          onEnter: () => {
            if (cardsObserver.isEnabled) return;
            cardsObserver.enable();
          },
          onEnterBack: () => {
            if (cardsObserver.isEnabled) return;
            cardsObserver.enable();
          }
        });

        return () => {
          tl.kill();
          cardsObserver.kill();
          ScrollTrigger.getById("STOP-SCROLL")?.kill();
        };
      };

      runGsap();
    }, []);

    const cardData = [
      {
        icon: "/WebDevlopment/target.png",
        alt: "Target icon",
        title: "Discovery and Conversation Mapping",
        desc: "We analyze your business goals, target audiences, key use cases, and define measurable KPIs.This ensures every conversation aligns with your objectives and delivers value."
      },
      {
        icon: "/Conversational/1.png",
        alt: "Design icon",
        title: "Discovery and Conversation Mapping",
        desc: "We analyze your business goals, target audiences, key use cases, and define measurable KPIs.This ensures every conversation aligns with your objectives and delivers value."
      },
      {
        icon: "/Conversational/2.png",
        alt: "Development icon",
        title: "Design and Knowledge Setup",
        desc: "Create intelligent dialog flows with well-defined intents, entities, and secure knowledge-base integration.This enables accurate responses and seamless user interactions."
      },
      {
        icon: "/Conversational/3.png",
        alt: "Testing icon",
        title: "Build and Integrations",
        desc: "Set up channels like website, WhatsApp, or Messenger and connect essential tools such as CRM, payment gateways, and calendars."
      },
      {
        icon: "/Conversational/4.png",
        alt: "Launch icon",
        title: "Testing and Compliance Review",
        desc: "Thoroughly test for performance, handle edge cases, and ensure GDPR-aligned data security and compliance guardrails."
      },
      {
        icon: "/Conversational/5.png",
        alt: "Optimization icon",
        title: "Launch and Optimization",
        desc: "Go live with real-time analytics, A/B testing, and continuous performance improvements."
      }
    ];

    return (
      <div className="flex justify-center items-center w-full">
        <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl min-h-[260px] xs:min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[360px] bg-transparent overflow-hidden rounded-[16px] xs:rounded-[18px] sm:rounded-[20px] md:rounded-[22px] lg:rounded-[24px]">
          <section
            className="cards-section-stack h-full w-full"
            style={{
              position: "relative",
              minHeight: 240,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {cardData.map((card, idx) => (
              <div
                key={idx}
                className="card-stack-card bg-[#2C3035] rounded-[16px] xs:rounded-[18px] sm:rounded-[20px] py-6 xs:py-7 sm:py-8 md:py-9 lg:py-10 px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 w-full flex flex-col items-start"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  transform: "translateX(-50%)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12) xs:0 6px 24px rgba(0,0,0,0.15) sm:0 8px 32px rgba(0,0,0,0.18)",
                  padding: '1.5rem 1rem',
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.alt}
                  width={40}
                  height={40}
                  className="mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 w-8 xs:w-9 sm:w-10 md:w-11 lg:w-12 xl:w-[62px] h-8 xs:h-9 sm:h-10 md:h-11 lg:h-12 xl:h-[62px]"
                />
                <h3 className="text-white font-outfit text-[16px] xs:text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-2xl text-left mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-[115%] xs:leading-[118%] sm:leading-[120%] md:leading-[121%]">
                  {card.title}
                </h3>
                <p className="text-[#b0b6bb] font-poppins font-normal text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-base text-left max-w-full leading-[135%] xs:leading-[140%] sm:leading-[145%] md:leading-[150%]">
                  {card.desc}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-[#232629] text-foreground overflow-x-hidden">
      {/* Section-1 */}
      <FadeIn>
      <section className="mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 pt-16 xs:pt-20 sm:pt-24 md:pt-32 lg:pt-36 xl:pt-40 pb-6 xs:pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Text content and button */}
          <div className="order-1">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-outfit md:mt-10 mt-14 text-center md:text-left text-white font-light text-[22px] xs:text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] xl:text-[38px] 2xl:text-[45px] leading-[110%] xs:leading-[115%] sm:leading-[120%] md:leading-[121%]"
            >
              Intelligent Conversational Agents
              <br className="hidden xs:block" />
              -for Always On
              <br className="hidden xs:block" />
              Customer Engagement
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-6  text-center md:text-left xs:mt-8 sm:mt-10 md:mt-12 lg:mt-14 max-w-full lg:max-w-xl font-poppins font-normal text-[14px] xs:text-[14px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[140%] xs:leading-[145%] sm:leading-[146%] text-[#858C92]"
            >
              Upteky Solutions builds enterprise Conversational AI chatbots, WhatsApp automation, lead reactivation, and voice bots powered by NLP, secure integrations, and analytics to fuel growth.
            </motion.p>

            <div className="mt-6 xs:mt-8 text-center md:text-left  sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16">
              <button
                className="text-white font-poppins shadow-lg hover:bg-[linear-gradient(90deg,_#F58F1D_0%,_#E57D77_100%)] w-auto min-w-[100px] xs:min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] xl:min-w-[243px] h-[36px] xs:h-[40px] sm:h-[44px] md:h-[46px] lg:h-[48px] xl:h-[50px] rounded-[30px] xs:rounded-[35px] sm:rounded-[40px] md:rounded-[45px] lg:rounded-[50px] xl:rounded-[62px] border border-accent font-normal text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] transition-all duration-300 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8"
              >
                Talk to an Expert
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[500px] xl:h-[560px] 2xl:h-[600px] overflow-hidden order-2">
            <img 
              src="/Convhero.png" 
              alt="Conversational AI Solutions" 
              className="w-full h-full object-contain object-center"
            />
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Divider line */}
      <div className="w-screen h-[0.5px] bg-[#414141] relative left-1/2 -translate-x-1/2" />

      {/* Section-2 */}
      <FadeIn>
      <section className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto rounded-[20px] xs:rounded-[24px] sm:rounded-[26px] md:rounded-[28px] lg:rounded-[30px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8">
            {/* Left heading/description */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-1 px-2 xs:px-3 sm:px-4 flex flex-col text-center lg:text-left">
              <h2 className="font-outfit text-[22px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[35px] leading-[115%] xs:leading-[118%] sm:leading-[120%] md:leading-[121%] text-white">
                Why Choose Upteky Solutions?
              </h2>
              <p className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 font-poppins text-[14px] xs:text-[14px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#858C92] max-w-full sm:max-w-md lg:max-w-sm mx-auto lg:mx-0 leading-[140%] xs:leading-[145%] sm:leading-[150%]">
                We don't just deploy bots we design intelligent systems that grow your pipeline and reduce support load.
              </p>
            </div>

            {cards.map((card, idx) => (
              <div key={idx} className="col-span-1">
                <div className="rounded-[16px] xs:rounded-[18px] sm:rounded-[20px] md:rounded-[22px] lg:rounded-[24px] xl:rounded-[28px] bg-[#2C3035] w-full min-h-[140px] xs:min-h-[150px] sm:min-h-[160px] md:min-h-[180px] lg:min-h-[200px] xl:min-h-[216px] mx-auto p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7">
                  <h3 className="text-white font-outfit pt-1 xs:pt-2 sm:pt-3 md:pt-4 text-[14px] font-outfit xs:text-[14px] sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[18px] leading-[115%] xs:leading-[118%] sm:leading-[120%] md:leading-[121%] text-center font-medium">{card.title}</h3>
                  <div className="-mx-3 xs:-mx-4 sm:-mx-5 md:-mx-6 lg:-mx-7 my-3 xs:my-4 sm:my-5 md:my-6 lg:my-7 h-px bg-[#4C4C4C]" />
                  <p className="text-[#858C92] font-poppins text-[12px] xs:text-[12px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] leading-[135%] xs:leading-[140%] sm:leading-[145%] md:leading-[150%] text-center max-w-[240px] xs:max-w-[260px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] mx-auto">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeIn>

      <div className="w-screen h-[0.5px] bg-[#414141] relative left-1/2 -translate-x-1/2" />

      {/* Section-3 */}
      <FadeIn>
      <section className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white font-outfit text-[22px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[35px] leading-[115%] xs:leading-[118%] sm:leading-[120%] md:leading-[121%] pb-6 xs:pb-7 sm:pb-8 md:pb-10 lg:pb-12"
        >
          Our Conversational AI Solutions
        </motion.h1>

        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden space-y-3 xs:space-y-4 sm:space-y-5">
          {services.map((s) => (
            <div key={s.no} className="bg-[#2C3035] rounded-[16px] xs:rounded-[18px] sm:rounded-[20px] p-4 xs:p-5 sm:p-6">
              <div className="flex flex-col gap-4 xs:gap-5 sm:gap-6">
                <div className="text-[#F58F1D] font-outfit font-normal text-[12px] xs:text-[13px] sm:text-[14px]">{s.no}</div>
                <div className="text-white font-outfit font-normal text-[16px] xs:text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] leading-[120%]">{s.title}</div>
                <div className="text-[#9FA6AD] font-poppins font-normal text-[12px] xs:text-[12px] sm:text-[13px] md:text-[14px] leading-[140%]">{s.desc}</div>
                <div className="text-white font-poppins font-normal text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] leading-[140%]">{s.cta}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - All 4 cards in one row */}
        <div className="hidden lg:block">
          <div className="relative rounded-[18px] lg:rounded-[20px] xl:rounded-[22px] ring-1 ring-white/10 bg-[#2C3035] overflow-hidden">
            {/* vertical dividers + plus markers */}
            <div className="absolute inset-y-0 left-[25%] -translate-x-1/2 w-px bg-white/10" />
            <div className="absolute inset-y-0 left-[50%] -translate-x-1/2 w-px bg-white/10" />
            <div className="absolute inset-y-0 left-[75%] -translate-x-1/2 w-px bg-white/10" />

            {/* Plus markers */}
            <PlusMarker className="left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <PlusMarker className="left-[50%] top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <PlusMarker className="left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="grid grid-cols-4">
              {services.map((s) => (
                <div key={s.no} className="px-4 lg:px-6 xl:px-8 2xl:px-10 py-6 lg:py-7 xl:py-8">
                  <ul className="flex flex-col gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
                    <li className="text-[#F58F1D] font-outfit font-normal text-[12px] lg:text-[13px] xl:text-[14px]">{s.no}</li>
                    <li className="text-white font-outfit font-normal text-[11px] lg:text-[12px] xl:text-[13px] 2xl:text-[14px] leading-[120%]">{s.title}</li>
                    <li className="text-[#9FA6AD] font-poppins font-normal text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[13px] leading-[135%]">{s.desc}</li>
                    <li className="text-white font-poppins font-normal text-[10px] lg:text-[11px] xl:text-[12px] 2xl:text-[13px] leading-[135%]">{s.cta}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      <div className="w-screen h-[0.5px] bg-[#414141] relative left-1/2 -translate-x-1/2" />

      {/* Section-4 */}
      <FadeIn>
      <section className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 justify-center">
          {/* Text Content Section */}
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 max-w-full lg:max-w-[527px] mx-auto lg:mx-0 order-1">
            <h2 className="text-white mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 font-outfit text-[22px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] leading-[115%] xs:leading-[118%] sm:leading-[120%] md:leading-[121%]">
              Our Delivery Process
            </h2>
            <p className="text-[#9FA6AD] font-poppins font-normal text-[12px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[140%] xs:leading-[145%] sm:leading-[150%]">
              We follow a structured, client-first approach to transform ideas into smart digital solutions.
            </p>
            <p className="text-[#9FA6AD] font-poppins font-normal text-[12px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[140%] xs:leading-[145%] sm:leading-[150%]">
              From understanding goals and mapping conversations to building integrations, testing thoroughly, and optimizing for performance, each step is designed for precision, scalability, and long-term business impact.
            </p>
          </div>

          {/* Cards Section */}
          <div className="order-2">
            <ScrollStack />
          </div>
        </div>
      </section>
      </FadeIn>

      <div className="w-screen h-[0.5px] bg-[#414141] relative left-1/2 -translate-x-1/2" />

      {/* Section-5 */}
      <FadeIn>
      <section className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
        <div>
          <ProjectDiscussion />
        </div>
      </section>
      </FadeIn>
    </div>
  );
}


