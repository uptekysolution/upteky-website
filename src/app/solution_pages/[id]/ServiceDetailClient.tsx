'use client';

import React, { useEffect, useState } from "react";
import { serviceDetails } from "@/lib/serviceDetails"; 
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

// Define a type for the service details structure if it's not imported from a shared file
interface Service {
  id: string;
  title: string;
  introduction: string;
  benefits: string[];
  highlights: string[];
  process: string[];
  impacts: string[];
  category?: string; // Make category optional
  icon: React.ReactNode; // Or the correct type for your icons
  imgSrc: string;
  imgAlt?: string; // Make imgAlt optional
  contactLink: string;
}

export default function ServiceDetailClient({ id }: ServiceDetailClientProps) {
  const [service, setService] = useState<Service | null>(null); // Use the defined Service type

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const foundService = serviceDetails.find((s: Service) => s.id === id); // Add type annotation here
    setService(foundService || null); // Ensure null if not found
  }, [id]);

  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced security measures to protect your data and operations"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Seamless integration with international markets and partners"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights and reporting tools"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "24/7 monitoring and instant alerts"
    }
  ];

  if (!service) {
    return (
      <motion.div 
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-background/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center p-12 rounded-2xl bg-card/30 backdrop-blur-lg border border-border/20 shadow-lg">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
            Service Not Found
          </h1>
          <Link href="/solution" className="inline-flex items-center text-accent hover:text-accent/80 transition-colors group">
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Back to All Solutions
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        {/* Main Card with 3D Effect */}
        <motion.div
          className="bg-card/40 border border-border/20 shadow-xl overflow-hidden rounded-3xl backdrop-blur-md transform-gpu"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          style={{ perspective: "1000px" }}
        >
          {/* Hero Section with Parallax */}
          <motion.div 
            className="relative w-full h-72 sm:h-96 md:h-[500px] lg:h-[600px] group"
            style={{ opacity, scale }}
          >
            <Image
              src={service.imgSrc}
              alt={service.title}
              fill
              className="object-cover object-center opacity-90 group-hover:opacity-100 transition-all duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex flex-col justify-end p-6 sm:p-8 md:p-10">
              <motion.div 
                className="mb-auto pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-accent/10 text-accent border-accent/20 text-sm sm:text-base mb-3 sm:mb-4 shadow-lg backdrop-blur-sm"
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
                <h1 className="text-xl sm:text-xl md:text-3xl font-bold text-white leading-tight drop-shadow-lg">
                  {service.title}
                </h1>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section with Enhanced Styling */}
          <div className="p-6 sm:p-8 md:p-12">
            <motion.div
              className="max-w-4xl mx-auto space-y-12"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {[
                  { icon: TrendingUp, value: 95, suffix: "%", label: "Success Rate" },
                  { icon: Clock, value: 24, suffix: "h", label: "Response Time" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/10 shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <stat.icon className="h-6 w-6 text-accent mb-2" />
                    <div className="text-2xl font-bold text-foreground">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Introduction with Gradient Text */}
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed border-b border-border/10 pb-8 sm:pb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {service.introduction}
              </motion.p>

              {/* Features List */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center text-center p-4"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div className="h-10 w-10 rounded-xl bg-accent/5 flex items-center justify-center mb-3">
                      <feature.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Benefits & Highlights with Enhanced Cards */}
              <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
                {/* Benefits Card */}
                <motion.div
                  className="group relative p-6 sm:p-8 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/10 shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-2xl sm:text-3xl font-semibold text-foreground flex items-center mb-6">
                    <Sparkles className="h-7 w-7 mr-3 text-accent" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit: string, idx: number) => (
                      <motion.li
                        key={idx}
                        className="flex items-start text-muted-foreground hover:text-foreground transition-colors duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                        <span className="text-base sm:text-lg">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Highlights Card */}
                <motion.div
                  className="group relative p-6 sm:p-8 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/10 shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h3 className="text-2xl sm:text-3xl font-semibold text-foreground flex items-center mb-6">
                    <Lightbulb className="h-7 w-7 mr-3 text-accent" />
                    Highlights
                  </h3>
                  <ul className="space-y-4">
                    {service.highlights.map((item: string, idx: number) => (
                      <motion.li
                        key={idx}
                        className="flex items-start text-muted-foreground hover:text-foreground transition-colors duration-200"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        <Star className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                        <span className="text-base sm:text-lg">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Process Section with Timeline */}
              <motion.div
                className="relative p-8 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/10 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 flex items-center">
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
                        <span className="text-accent font-semibold">{idx + 1}</span>
                      </div>
                      <p className="text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors duration-200">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

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
                    className="p-6 rounded-2xl bg-card/20 backdrop-blur-sm border border-border/10 shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Zap className="h-6 w-6 text-accent mb-4" />
                    <p className="text-base sm:text-lg text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {impact}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Partnership Section with Gradient Background */}
              <motion.div
                className="relative p-8 sm:p-10 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-accent/2 to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6 text-center">
                    Why Partner with Upteky for {service.title}?
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground text-center max-w-3xl mx-auto">
                    At Upteky, we don't just offer solutions; we build partnerships. Our expert team works closely with you to understand your specific business challenges and objectives. We tailor the {service.title} solution to integrate seamlessly with your existing workflows, ensuring you derive maximum value and achieve tangible results.
                  </p>
                </div>
              </motion.div>

              {/* CTA Section with Enhanced Button */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Learn how the {service.title} solution can revolutionize your operations. Contact us today for a personalized demo and consultation.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="group relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full font-semibold"
                >
                  <Link href={`${service.contactLink}&title=${encodeURIComponent(service.title)}`}>
                    <span className="relative z-10 flex items-center">
                      <Mail className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      <span className="hidden sm:inline">Contact Us About This Solution</span>
                      <span className="sm:hidden">Contact Us</span>
                      <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}