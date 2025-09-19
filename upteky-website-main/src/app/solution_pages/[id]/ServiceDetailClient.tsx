'use client';

import React, { useEffect, useState } from "react";
import { serviceDetails, type ServiceDetail } from "@/lib/serviceDetails"; 
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import ProjectDiscussion from '@/components/ProjectDiscussion';
import { 
  ArrowLeft, Mail, CheckCircle, Sparkles, Lightbulb, 
  ArrowRight, Star, Zap, Target, Rocket, Shield, 
  TrendingUp, Users, Clock, Award, Globe, 
  BarChart3, LineChart, PieChart, Activity,
  ChevronRight, ChevronLeft, Quote
} from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

// Enhanced animations with spring physics
const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const cardHover = {
  scale: 1.02,
  rotateY: 5,
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

const iconHover = {
  scale: 1.2,
  rotate: 10,
  transition: { type: "spring", stiffness: 400, damping: 10 }
};

// Animated stat counter component
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60fps
    const increment = value / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setDisplayValue(Math.min(Math.round(increment * currentStep), value));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{displayValue}{suffix}</span>;
};

// Feature card component
const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 shadow-lg"
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-accent" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

interface ServiceDetailClientProps {
  id: string;
}



export default function ServiceDetailClient({ id }: ServiceDetailClientProps) {
  const [service, setService] = useState<ServiceDetail | null>(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const foundService = serviceDetails.find((s: ServiceDetail) => s.id === id);
    setService(foundService || null);
  }, [id]);

  const features = (service?.featureCards ?? [
    { icon: 'Shield', title: 'Enterprise-Grade Solution', description: 'Context-aware and scalable chatbot designed for businesses of all sizes, from startups to enterprises.' },
    { icon: 'Globe', title: 'Global Reach', description: 'Support for multi-language audiences, enabling your brand to connect with customers worldwide.' },
    { icon: 'BarChart3', title: 'Conversion-Focused', description: 'Flows built to capture leads, nurture prospects, and accelerate sales with minimal human intervention' },
    { icon: 'Activity', title: 'Seamless Integrations', description: 'Direct integration with CRM systems, calendars, marketing tools, and databases for complete automation.' },
  ]).map(fc => ({
    icon: fc.icon === 'Shield' ? Shield
      : fc.icon === 'Globe' ? Globe
      : fc.icon === 'BarChart3' ? BarChart3
      : Activity,
    title: fc.title,
    description: fc.description,
  }));

  if (!service) {
    return (
      
      <motion.div 
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center p-12 rounded-2xl bg-card/30 backdrop-blur-lg border border-border/20 shadow-lg">
          <h1 className="text-4xl  font-outfit mb-6 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
            Service Not Found
          </h1>
          <Link href="/solution" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors group">
            <ArrowLeft className="mr-2 h-5 w-5 font-outfit group-hover:-translate-x-1 transition-transform" />
            Back to All Solutions
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    
    <motion.div
      className="min-h-screen bg-[#232629] px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 relative z-10">
        {/* Main Card with 3D Effect */}
        <motion.div
          className="bg-card/40 border border-border/20 shadow-xl overflow-hidden rounded-[20px] xl:rounded-[30px] backdrop-blur-md transform-gpu"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{ perspective: "1000px" }}
        >
          {/* Hero Section with Parallax */}
          <motion.div 
            className="relative w-full h-72 sm:h-96 md:h-[500px] lg:h-[650px] group"
            style={{ opacity, scale }}
          >
            <Image
              src={service.imgSrc}
              alt={service.title}
              fill
              className="object-cover  object-center opacity-90 group-hover:opacity-100 transition-all duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/7 to-transparent flex flex-col justify-end p-4 xs:p-6 sm:p-8 md:p-10">
              <motion.div 
                className="mb-auto pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-accent/10 text-accent border-accent/20 text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] mb-2 xs:mb-3 sm:mb-4 shadow-lg backdrop-blur-sm font-poppins"
                >
                  {service.category}
                </Badge>
              </motion.div>
              <motion.div 
                className="flex items-center mb-2 sm:mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  
                  className="mr-3 sm:mr-4 p-2.5 sm:p-3 bg-card/40 backdrop-blur-sm rounded-xl shadow-lg border border-border/20"
                >
                  {React.cloneElement(service.icon as React.ReactElement, {
                    className: "w-7 h-7 sm:w-8 sm:h-8 text-accent drop-shadow-lg",
                  })}
                </motion.div>
                <h1 className="font-outfit text-white text-[20px] xs:text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] xl:text-[38px] 2xl:text-[45px] leading-[110%] xs:leading-[115%] sm:leading-[120%] md:leading-[121%] drop-shadow-lg">
                  {service.title}
                </h1>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section with Enhanced Styling */}
          <div className="p-5 xs:p-6 sm:p-8 md:p-10 lg:p-12">
            <motion.div
              className=" mx-auto space-y-12"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              {/* Quick Stats */}
              <motion.div
                className={`grid ${service.stats && service.stats.length === 2 ? 'grid-cols-2' : service.stats && service.stats.length === 4 ? 'grid-cols-4' : 'grid-cols-3'} text-center gap-2 xs:gap-8 sm:gap-10`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {(service.stats ?? [
                  { icon: 'TrendingUp', value: 96, suffix: '%', label: 'Client Satisfaction' },
                  { icon: 'Clock', value: 24, suffix: '/7', label: 'Customer Engagement' },
                  { icon: 'LineChart', value: 40, suffix: '% Faster', label: 'Lead Conversion' },
                ]).map((stat, idx) => {
                  const IconComp = stat.icon === 'TrendingUp' ? TrendingUp
                    : stat.icon === 'Clock' ? Clock
                    : stat.icon === 'LineChart' ? LineChart
                    : stat.icon === 'Globe' ? Globe
                    : stat.icon === 'Zap' ? Zap
                    : Activity;
                  return (
                    <motion.div
                      key={idx}
                      className="p-4 xs:p-5 sm:p-6 rounded-[16px] xs:rounded-[18px] sm:rounded-[20px] xl:rounded-[30px] bg-[#2C3035] backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <IconComp className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-accent mb-2 xs:mb-3 mx-auto" />
                      <div className="font-outfit text-white text-[14px] sm:text-[20px] md:text-[22px]">
                        {typeof stat.value === 'number' ? (
                          <AnimatedCounter value={stat.value as number} suffix={stat.suffix} />
                        ) : (
                          <span>{String(stat.value)}</span>
                        )}
                      </div>
                      <div className="font-poppins text-[8px] sm:text-[11px] md:text-[12px] text-[#9FA6AD]">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Introduction with Gradient Text */}
              <motion.p
                className="mt-4 font-poppins text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-center text-[#9FA6AD] md:mx-0 leading-[140%] xs:leading-[145%] sm:leading-[150%]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {service.introduction}
              </motion.p>
              <div className="w-full h-[0.5px] bg-[#414141]" />
              {/* Features List */}
              <motion.div
                className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 justify-items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center text-center p-4 w-full"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                <div className="flex items-center justify-center mb-2 xs:mb-3">
                  <feature.icon className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 text-accent" />
                    </div>
                <h3 className="font-outfit text-white text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] mb-1 leading-[120%]">{feature.title}</h3>
                <p className="font-poppins text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] text-[#9FA6AD] max-w-xs leading-[145%]">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
           <div className="w-full h-[0.5px] bg-[#414141]" />
              {/* Benefits & Highlights with Enhanced Cards */}
              <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                {/* Benefits Card */}
                {/* <motion.div
                  className="group relative p-6 sm:p-8 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/10 shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:transition-opacity duration-300" />
                  <h3 className="text-2xl sm:text-3xl font-semibold text-foreground flex items-center mb-6">
                    <Sparkles className="h-7 w-7 mr-3 text-accent " />
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit: string, idx: number) => (
                      <motion.li
                        key={idx}
                        className="flex items-start text-[#9FA6AD] font-poppins hover:text-foreground transition-colors duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-accent flex-shrink-0" aria-hidden /> 
                        <span className="text-base sm:text-lg">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div> */}
                <motion.div
                  className="group relative p-6 sm:p-8 rounded-2xl xl:rounded-[30px] bg-[#2C3035] backdrop-blur-sm border border-border/10 shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="font-outfit text-white text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] flex items-center mb-4 xs:mb-5 sm:mb-6">
                    <Lightbulb className="h-7 w-7 mr-3 text-accent" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                  {service.benefits.map((benefit: string, idx: number) => (
                      <motion.li
                        key={idx}
                        className="flex items-start text-[#9FA6AD] font-poppins hover:text-foreground transition-colors duration-200"
                        initial={{ opacity: 0, x:-20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-accent flex-shrink-0" aria-hidden /> 
                        <span className="font-poppins text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] text-white/90">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                {/* Highlights Card */}
                <motion.div
                  className="group relative p-6 sm:p-8 rounded-2xl xl:rounded-[30px] bg-[#2C3035] backdrop-blur-sm border border-border/10 shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="font-outfit text-white text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] flex items-center mb-4 xs:mb-5 sm:mb-6">
                    <Lightbulb className="h-7 w-7 mr-3 text-accent" />
                    Highlights
                  </h3>
                  <ul className="space-y-4">
                    {service.highlights.map((item: string, idx: number) => (
                      <motion.li
                        key={idx}
                        className="flex items-start text-[#9FA6AD] font-poppins hover:text-foreground transition-colors duration-200"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-accent flex-shrink-0" aria-hidden /> 
                        <span className="font-poppins text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] text-white/90">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            

              {/* Process Section with Timeline */}
              <motion.div
                className="relative p-8 rounded-2xl xl:rounded-[30px] bg-[#2C3035] backdrop-blur-sm border border-border/10 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="font-outfit text-white text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] mb-6 flex items-center">
                  <Target className="h-7 w-7 mr-3 text-accent" />
                  Our Process
                </h3>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent/5" />
                  {service.process.map((step: string, idx: number) => (
                    <motion.div
                      key={idx}
                      className="relative pl-12 pb-8 last:pb-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                    >
                      <div className="absolute py-2 left-0 top-1 w-8 h-8 rounded-full bg-accent/5 border border-accent flex items-center justify-center">
                        <span className="text-accent ">{idx + 1}</span>
                      </div>
                      <p className="font-poppins text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] text-[#9FA6AD] hover:text-foreground transition-colors duration-200 leading-[145%]">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <div className="w-full h-[0.5px] bg-[#414141]" />
              {/* Impact Section with Cards */}
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                {service.impacts.map((impact: string, idx: number) => (
                  <motion.div
                    key={idx}
                    className="p-6 rounded-2xl xl:rounded-[30px] bg-[#2C3035] backdrop-blur-sm border border-border/10 shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Zap className="h-6 w-6 text-accent mb-4" />
                    <p className="font-poppins text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] text-[#9FA6AD] hover:text-white transition-colors duration-200 leading-[145%]">
                      {impact}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
              <div className="w-full h-[0.5px] bg-[#414141]" />
              {/* Partnership Section with Gradient Background */}
              <motion.div
                className="relative p-8 sm:p-10 rounded-2xl xl:rounded-[30px] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="absolute inset-0 bg-[#2B3035] via-accent/2 to-transparent" />
                <div className="relative z-10">
                  <h3 className="font-outfit text-white text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] mb-5 sm:mb-6 ">
                    {service.partnerTitle ?? 'Why Partner with Upteky?'}
                  </h3>
                  <p className="font-poppins text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#9FA6AD]  mx-auto pr-0 lg:pr-20 leading-[145%]">
                    {service.partnerIntro ?? 'At Upteky Solutions Pvt. Ltd., our solutions are:'}
                  </p>
                  <div>
                  <ul className="list-disc font-poppins list-inside marker:text-accent space-y-2 mt-4 text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] text-white/80 leading-[145%]">
                    {(service.partnerBullets ?? [
                      'Custom-designed to match your brand identity',
                      'Secure and scalable, with enterprise-grade compliance',
                      'Analytics-enabled, so you always know what’s working',
                      'Proven to deliver results across industries like healthcare, real estate, e-commerce, SaaS.'
                    ]).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  </div>
                  
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full h-[0.5px] bg-[#414141]" />
          <section className="container mx-auto px-4 md:px-6 py-10 sm:py-8 md:py-10">
        <div>
          <ProjectDiscussion
            onSubmit={async (values) => {
              console.log('Web Dev form values:', values);
            }}
          />
        </div>
      </section>
        </motion.div>
      </div>
    </motion.div>
  );
}