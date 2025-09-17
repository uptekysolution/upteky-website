'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectDiscussion from '@/components/ProjectDiscussion';
import Image from 'next/image';
import DeliveryStack from "@/components/DeliveryStack";

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
      cta: ' Explore Lead Reactivation →',
    },
    {
      no: '04',
      title: 'AI Voice Assistant (Voice Bot)',
      desc: 'Automate calls with human-like conversations, smart IVR, real-time transcription, and CRM integration.',
      cta: ' Explore Voice Bot →',
    },
  
  ];
  const PlusMarker = ({ className = '' }: { className?: string }) => (
    <div className={`absolute ${className}`} aria-hidden>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M17.9932 0.292358C27.5331 0.292605 35.2666 8.02673 35.2666 17.5668C35.2664 27.1066 27.5330 34.84 17.9932 34.8402C8.45312 34.8402 0.718994 27.1068 0.71875 17.5668C0.71875 8.02658 8.45297 0.292358 17.9932 0.292358Z" fill="#2C3035" stroke="#545A62" strokeWidth="0.437318"/>
      </svg>
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="13" height="14" viewBox="0 0 13 14" fill="none">
        <path d="M6.41941 1.0199V12.9661M0.446289 6.99302H12.3925" stroke="white" strokeWidth="0.874636" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
  return (
    <div className="min-h-screen bg-[#232629] px-20 text-foreground overflow-x-hidden">
    {/* ------------------------------------------------------Section-1----------------------------------------------- */}
      <section className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 pl-20 lg:grid-cols-2 gap-10 items-center">
          {/* Left copy */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-poppins text-white font-light text-[45px] leading-[121%]"
            >
              Intelligent Conversational Agents 
              
              for Always On

              Customer Engagement
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-12 max-w-xl font-poppins  font-normal text-base leading-[146%] text-[#858C92]"
            >
              Upteky Solutions builds enterprise Conversational AI chatbots, WhatsApp automation, lead reactivation, and voice bots powered by NLP, secure integrations, and analytics to fuel growth.
            </motion.p>

            <div className="mt-16">
              <button
                className="text-white font-poppins shadow-lg hover:bg-[linear-gradient(90deg,_#F58F1D_0%,_#E57D77_100%)] w-[243px] h-[50px] rounded-[62px]  border border-accent font-normal text-[20px] transition-all duration-300"
              >
                Talk to an Expert
              </button>
            </div>
          </div>

          {/* Right visuals: positioned within column to avoid overflow */}
          <div className="relative h-[560px] overflow-hidden">
            {/* 1st box */}
            {/* <div className="absolute top-[20px] right-[230px] w-[286px] h-[286px] rounded-[28px] bg-[linear-gradient(180deg,_rgba(44,48,53,0.7)_0%,_rgba(68,79,93,0.7)_100%)] backdrop-blur-sm" /> */}
            {/* 2nd box */}
            {/* <div className="absolute top-[180px]  right-[90px] w-[286px] h-[286px] rounded-[28px] bg-[linear-gradient(180deg,_rgba(44,48,53,0.7)_0%,_rgba(68,79,93,0.7)_100%)] backdrop-blur-sm" /> */}
            {/* 3rd box */}
            {/* <div className="absolute top-[260px]  right-[320px] w-[286px] h-[286px] rounded-[28px] bg-[linear-gradient(180deg,_rgba(44,48,53,0.7)_0%,_rgba(68,79,93,0.7)_100%)] backdrop-blur-sm" /> */}
            <img src="/Convhero.png" alt="" />
          </div>
        </div>
      </section>
      {/* Divider line */}
      <div className="w-full h-[0.5px] bg-[#414141]" />

      {/* ---------------------------------------------Section-2--------------------------------------------------- */}
      <section className="container mx-auto px-4 md:px-6 py-12 sm:py-16 md:py-24">
        <div className="mx-auto rounded-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left heading/description */}
            <div className="col-span-1 px-3 flex flex-col text-center md:text-left">
              <h2 className="font-outfit text-[24px] sm:text-[28px] md:text-[30px] lg:text-[45px] leading-[121%] text-white">
                Why Choose Upteky Solutions?
              </h2> 
              <p className="mt-4 font-poppins text-[12px] sm:text-[14px] md:text-[16px] text-[#858C92] max-w-sm mx-auto md:mx-0">
                We don't just deploy bots we design intelligent systems that grow your pipeline and reduce support load.
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
        </div>
      </section>
      <div className="w-full h-[0.5px] bg-[#414141]" />
      {/* ---------------------------------------------Section-3--------------------------------------------------- */}
      <section className="container mx-auto px-4 md:px-6 py-12 sm:py-16 md:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white font-outfit text-[24px] sm:text-[28px] md:text-[30px] lg:text-[45px] leading-[121%] pb-8 sm:pb-10 md:pb-12"
        >
         Our Web Development Solutions
        </motion.h1>
        
        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden space-y-4">
          {services.map((s) => (
            <div key={s.no} className="bg-[#2C3035] rounded-[20px]  ">
              <div className="flex flex-col gap-20">
                <div className="text-[#F58F1D] font-outfit font-normal text-sm">{s.no}</div>
                <div className="text-white font-outfit font-normal text-lg sm:text-xl">{s.title}</div>
                <div className="text-[#9FA6AD] font-poppins font-normal text-[12px] sm:text-[14px] md:text-base">{s.desc}</div>
                <div className="text-white font-poppins font-normal text-[12px] sm:text-[14px] md:text-base">{s.cta}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout - All 4 cards in one row */}
        <div className="hidden lg:block">
          <div className="relative rounded-[20px] ring-1 ring-white/10 bg-[#2C3035] overflow-hidden">
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
                <div key={s.no} className="px-6 xl:px-10 py-8">
                  <ul className="flex flex-col gap-6 xl:gap-8">
                    <li className="text-[#F58F1D] font-outfit font-normal text-sm">{s.no}</li>
                    <li className="text-white font-outfit font-normal text-lg xl:text-xl">{s.title}</li>
                    <li className="text-[#9FA6AD] font-poppins font-normal text-sm xl:text-base">{s.desc}</li>
                    <li className="text-white font-poppins font-normal text-sm xl:text-base">{s.cta}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[0.5px] bg-[#414141]" />
        
      {/* ---------------------------------------------Section-4--------------------------------------------------- */}
      <section className="container mx-auto px-4 md:px-6 lg:px-10 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 justify-center">
          {/* Left Section */}
          <div className="space-y-6 sm:space-y-8 max-w-[527px] mx-auto lg:mx-0">
            <h2 className="text-white  mb-12 font-outfit text-[24px] sm:text-[28px] md:text-[30px] lg:text-[45px]">
            Our Delivery Process
            </h2>
            <p className="text-[#9FA6AD] font-poppins font-normal text-[12px] sm:text-[14px] md:text-[16px]">
            We follow a structured, client-first approach to transform ideas into smart digital solutions.
            </p>
            <p className="text-[#9FA6AD] font-poppins font-normal text-[12px] sm:text-[14px] md:text-[16px]">
            From understanding goals and mapping conversations to building integrations, testing thoroughly, and optimizing for performance,each step is designed for precision, scalability, and long-term business impact.
            </p>
          </div>

          {/* Right Section - Card */}
          <div className="flex justify-center">
            <div className="bg-[#2C3035] rounded-[20px] py-6 sm:py-8 px-8 sm:px-12 lg:px-20 w-full max-w-[400px] lg:max-w-none ">
          
              <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-10">
                <Image
                  src="/images/target.png"
                  alt="Target icon"
                  width={62}
                  height={62}
                  className="w-[50px] h-[50px] sm:w-[62px] sm:h-[62px]"
                />
                <h3 className="text-white font-outfit font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-[100%]">
                Discovery and Conversation Mapping
                </h3>
                <p className="text-[#9FA6AD] font-poppins font-normal text-[12px] sm:text-[14px] md:text-base">
                We analyze your business goals, target audiences, key use cases, and define measurable KPIs.This ensures every conversation aligns with your objectives and delivers value.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      
      <div className="w-full h-[0.5px] bg-[#414141]" />
      
      {/* ---------------------------------------------Section-5--------------------------------------------------- */}
      <section className="container mx-auto px-4 md:px-6 py-12 sm:py-16 md:py-24">
        <div>
          <ProjectDiscussion
            onSubmit={async (values) => {
              console.log('Web Dev form values:', values);
            }}
          />
        </div>
      </section>
    </div>
 
  );
}


