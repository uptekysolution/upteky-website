'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectDiscussion from '@/components/ProjectDiscussion';

export default function WebDevelopmentPage() {
    const cards = [
        {
          title: 'Multi-Platform Expertise',
          desc: 'From no-code platforms to full-stack engineering.'
        },
        {
          title: 'Scalable & Future-Ready Solutions',
          desc: 'Built to grow with your business.'
        },
        {
          title: 'Design + Technology Synergy',
          desc: 'Pixel-perfect UI powered by robust backend.'
        },
        {
          title: 'Global Client Trust',
          desc: 'Delivering projects across healthcare, real estate, e-commerce, SaaS, and more.'
        },
        {
          title: 'Dedicated Support',
          desc: 'End-to-end assistance from launch to ongoing maintenance.  '
        },
      ];
  const scaleBg = (v: string) => (v === 'High' ? 'bg-[#C2FFD4]' : v === 'Excellent' ? 'bg-[#B8E7FF]' : 'bg-white');
  const services = [
    {
      no: '01',
      title: 'Wix Development Services',
      desc: 'Build smart websites effortlessly and grow your brand beautifully online.',
      cta: 'Explore Wix Development→',
    },
    {
      no: '02',
      title: 'Webflow Development Services',
      desc: 'Create flexible, scalable sites while expanding your brand online.',
      cta: 'Explore Webflow Development →',
    },
    {
      no: '03',
      title: 'MERN Stack Development',
      desc: 'Develop custom web applications with MERN and scale your business seamlessly.',
      cta: 'Explore MERN Solutions →',
    },
    {
      no: '04',
      title: 'WordPress Development Services',
      desc: 'Build creative, customizable websites faster with WordPress\'s powerful platform.',
      cta: 'Explore WordPress Development →',
    },
    {
      no: '05',
      title: 'Shopify Development',
      desc: 'Scalable e‑commerce platform with fast setup and powerful sales tools.',
      cta: 'Explore Shopify Development →',
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
    <div className="min-h-screen px-4 sm:px-2 md:px-12 lg:px-20 bg-[#232629] text-foreground">
      {/* ---------------------------------------------Section-1--------------------------------------------------- */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 pt-20 sm:pt-32 md:pt-40 pb-8 sm:pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-white font-outfit text-[24px] sm:text-[30px] md:text-[36px] lg:text-[45px] leading-[121%] opacity-100"
        >
          Premium Web Development Solutions Tailored for Your Business Growth
        </motion.h1>
       </section>
       
       <section className="container pb-20 sm:pb-32 md:pb-40 mx-auto px-4 md:px-6">
         <div className="mx-auto rounded-t-[20px] sm:rounded-t-[33.39px] bg-[linear-gradient(180deg,_rgba(69,76,83,0.7)_0%,_rgba(35,38,41,0.7)_100%)] backdrop-blur-[65.437px] overflow-hidden">
           <div className="overflow-x-auto">
             <table className="w-full min-w-[600px] sm:min-w-[860px] mt-[30px] sm:mt-[60px]">
               <thead className="font-outfit font-normal text-[11px] sm:text-[13.35px] text-[#C4C4C4]">
                 <tr className="text-center">
                   <td className="py-3 sm:py-5">Platform</td>
                   <td className="py-3 sm:py-5">Best for</td>
                   <td className="py-3 sm:py-5">Customization</td>
                   <td className="py-3 sm:py-5">Scalability</td>
                   <td className="py-3 sm:py-5">Speed to Market</td>
                 </tr>
               </thead>
               <tbody className="font-poppins font-normal text-[12px] sm:text-[14px] md:text-[16px] text-white">
                 {[
                   ['Wix', 'Small Businesses, Portfolios', 'High', 'High', 'Excellent'],
                   ['Webflow', 'Startups, Agencies, Brands', 'High', 'High', 'Fast'],
                   ['MERN', 'SaaS, Enterprises, Custom Apps', 'Excellent', 'Excellent', 'Fast'],
                   ['WordPress', 'Blogs, Corporate, E‑commerce', 'High', 'High', 'Excellent'],
                   ['Shopify', 'E‑commerce, D2C Brands', 'High', 'Excellent', 'Fast']
                 ].map((row, idx) => (
                   <tr key={idx} className="text-center border-t border-white/10">
                     <td className="py-3 sm:py-5 px-4 sm:px-10">{row[0]}</td>
                     <td className="py-3 sm:py-5 px-4 sm:px-10">{row[1]}</td>
                     <td className="py-3 sm:py-5 px-4 sm:px-10 text-center font-poppins text-[12px] sm:text-[14px] md:text-base text-white">{row[2]}</td>
                     <td className="py-3 sm:py-5 px-4 sm:px-10">
                       <span className={`inline-flex items-center justify-center px-2 sm:px-4 h-[25px] sm:h-[33.386px] rounded-[12px] sm:rounded-[16.69px] text-black text-[12px] sm:text-[15.58px] ${scaleBg(row[3] as string)}`}>
                         {row[3]}
                       </span>
                     </td>
                     <td className="py-3 sm:py-5 px-4 sm:px-10">{row[4]}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
         </div>
       </section>

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
            <div key={s.no} className="bg-[#2C3035] rounded-[20px] p-4 sm:p-6">
              <div className="flex flex-col gap-4">
                <div className="text-[#F58F1D] font-outfit font-normal text-sm">{s.no}</div>
                <div className="text-white font-outfit font-normal text-lg sm:text-xl">{s.title}</div>
                <div className="text-[#9FA6AD] font-poppins font-normal text-[12px] sm:text-[14px] md:text-base">{s.desc}</div>
                <div className="text-white font-poppins font-normal text-[12px] sm:text-[14px] md:text-base">{s.cta}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* ROW 1: full-width panel with 3 columns */}
          <div className="relative rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] ring-1 ring-white/10 bg-[#2C3035] overflow-hidden">
            {/* vertical dividers + plus markers */}
            <div className="absolute inset-y-0 left-[33.333%] -translate-x-1/2 w-px bg-white/10" />
            <div className="absolute inset-y-0 left-[66.666%] -translate-x-1/2 w-px bg-white/10" />
            {/* Row 1 markers */}
            <PlusMarker className="left-[33.333%] top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <PlusMarker className="left-[66.666%] top-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="grid grid-cols-3">
              {services.slice(0, 3).map((s) => (
                <div key={s.no} className="px-8 xl:px-20 py-8">
                  <ul className="flex flex-col gap-6 xl:gap-8">
                    <li className="text-[#F58F1D] font-outfit font-normal text-sm">{s.no}</li>
                    <li className="text-white font-outfit font-normal text-xl">{s.title}</li>
                    <li className="text-[#9FA6AD] font-poppins font-normal text-base">{s.desc}</li>
                    <li className="text-white font-poppins font-normal text-base">{s.cta}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* thin separator between panels */}
          <div className="bg-white/10 w-2/3" />

          {/* ROW 2: panel only 2/3 width (two columns) */}
          <div className="relative w-2/3 rounded-b-[20px] ring-1 ring-white/10 bg-[#2C3035] overflow-hidden">
            {/* single divider at 50% + plus marker */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-white/10" />
            {/* Row 2 marker */}
            <PlusMarker className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="grid grid-cols-2">
              {services.slice(3, 5).map((s) => (
                <div key={s.no} className="px-8 xl:px-20 py-8">
                  <ul className="flex flex-col gap-6 xl:gap-8">
                    <li className="text-[#F58F1D] font-outfit font-normal text-xs">{s.no}</li>
                    <li className="text-white font-outfit font-normal text-xl">{s.title}</li>
                    <li className="text-[#9FA6AD] font-poppins font-normal text-base">{s.desc}</li>
                    <li className="text-white font-poppins font-normal text-base">{s.cta}</li>
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
            <h2 className="text-white font-outfit text-[24px] sm:text-[28px] md:text-[30px] lg:text-[45px]">
              Our Development Process
            </h2>
            <p className="text-[#9FA6AD] font-poppins font-normal text-[12px] sm:text-[14px] md:text-[16px]">
              We follow a structured, client-first process designed to transform ideas into impactful digital solutions. Every stage strategy, design, development, testing, and support is carefully executed with precision and collaboration.
            </p>
            <p className="text-[#9FA6AD] font-poppins font-normal text-[12px] sm:text-[14px] md:text-[16px]">
              This approach ensures scalable, user-friendly products that align with business goals and deliver long-term value.
            </p>
          </div>

          {/* Right Section - Card */}
          <div className="flex justify-center">
            <div className="bg-[#2C3035] rounded-[20px] py-6 sm:py-8 px-8 sm:px-12 lg:px-20 w-full max-w-[400px] lg:max-w-none lg:h-[286px]">
              <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-10">
                <Image
                  src="/images/target.png"
                  alt="Target icon"
                  width={62}
                  height={62}
                  className="w-[50px] h-[50px] sm:w-[62px] sm:h-[62px]"
                />
                <h3 className="text-white font-outfit font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-[100%]">
                  Discovery & Strategy
                </h3>
                <p className="text-[#9FA6AD] font-poppins font-normal text-[12px] sm:text-[14px] md:text-base">
                  We dive deep into your business vision, challenges, and audience to define a roadmap for success.
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


