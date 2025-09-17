"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { allSolutions } from '@/lib/solutionsData';
import FadeIn from "@/components/FadeIn";
import { ChevronRight } from "lucide-react";

// import Tilt from "react-parallax-tilt";



export default function SolutionsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 text-foreground">
      {/* Hero Section */}
      {/* Hero Section with Abstract Background */}
      <FadeIn>
        <div className="relative overflow-hidden bg-gradient-to-br from-[#2d3436] to-[#000000]">
          {/* Top Orange Light Gradient */}
          <div className="absolute top-0 left-0 right-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
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
          <div className="absolute inset-0 z-0 pointer-events-none">
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
          <div className="relative z-10 min-h-[50vh] md:min-h-[60vh] flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="text-center max-w-[1560px] mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:mt-10 font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                  Our Comprehensive AI Solutions
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                  Explore a wide range of AI-powered tools and services designed to transform your business, enhance efficiency, and drive growth.
                </p>

              </motion.div>
            </div>
          </div>
        </div>
      </FadeIn>
    
      {/* Solutions Grid Section */}

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 md:gap-10">
            
            {allSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link href={`/solution_pages/${solution.id}`} className="block h-full group">


                  <Card className="bg-card/80 border border-border/30 shadow-xl hover:shadow-accent/20 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col overflow-hidden rounded-xl h-full backdrop-blur-md cursor-pointer">
                    <div className="relative w-full h-40 sm:h-48 md:h-52 overflow-hidden">

                      <Image
                        src={solution.imgSrc}
                        alt={solution.title}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                        className="group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2.5 sm:p-3 bg-card/90 backdrop-blur-sm rounded-full shadow-lg border border-border/20">
                        {solution.icon}
                      </div>
                      <span className="absolute bottom-2 left-3 sm:bottom-3 sm:left-4 text-xs font-semibold uppercase tracking-wider bg-accent/80 text-accent-foreground px-1.5 py-0.5 sm:px-2 sm:py-1 rounded">
                        {solution.category}
                      </span>
                    </div>

                    <CardHeader className="pb-2 sm:pb-3">
                      <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-accent transition-colors duration-300">
                        {solution.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-grow flex flex-col pt-0 px-4 sm:px-6 pb-4 sm:pb-5">
                      <CardDescription className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow">
                        {solution.description}
                      </CardDescription>
                      {solution.features && solution.features.length > 0 && (
                        <ul className="space-y-1 sm:space-y-1.5 mb-4 sm:mb-5 text-xs sm:text-sm">
                          {solution.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-accent/70 flex-shrink-0" />
                              <span className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>

                    <CardFooter className="pt-0 pb-4 sm:pb-5 px-4 sm:px-6">
                      <span className="inline-flex items-center justify-center w-full border border-accent/30 text-accent hover:bg-accent/10 hover:text-accent group-hover:border-accent transition-colors text-sm h-9 sm:h-10 font-medium rounded-md">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </CardFooter>
                  </Card>

                </Link>
              </motion.div>

            ))}
          </div>
        </div>
      </section>




      {/* Customization Section */}
      {/* <section className="py-12 sm:py-16 md:py-24 bg-secondary/10 border-t border-border/20">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >

            <div className="rounded-2xl border border-border/20 bg-card/40 backdrop-blur p-5 sm:p-6 md:p-8 shadow-[0px_1px_31px_0px_#6B6B6B40]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between   md:gap-6">
                <div className="max-w-7xl">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Tailored AI for Your Unique Needs</h2>
                  <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed text-left">
                    Don't see exactly what you're looking for? At Upteky, we specialize in customizing our AI solutions and developing new ones to perfectly fit your business requirements. Let's build the future, together.
                  </p>
                </div>
                <div className="flex justify-start md:justify-end">
                  <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-accent/40 shadow-lg px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-semibold rounded-full">
                    <Link href="/contact" className="inline-flex items-center gap-2">Discuss Your Project<ChevronRight className=" h-4 sm:h-5 w-4 sm:w-5" /></Link>
                  </Button>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section> */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-secondary/10 border-t border-border/20 flex justify-center">
        <div className="container px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
          <motion.div
            className="w-full"  
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="w-full rounded-2xl border border-border/20 bg-card/40 backdrop-blur 
                       py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-12 lg:px-12 xl:py-16 xl:px-16 shadow-[0px_1px_31px_0px_#6B6B6B40]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
                {/* Left Content */}
                <div className=" text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3">
                    Tailored AI for Your Unique Needs
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed tracking-tight text-left max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl md:pr-6">
                    Don&apos;t see exactly what you&apos;re looking for? At Upteky, we specialize in customizing our AI solutions and developing new ones to perfectly fit your business requirements. Let&apos;s build the future, together.
                  </p>
                </div>

                {/* Right Button */}
                <div className="flex justify-start md:justify-end md:items-center mt-4 md:mt-0">
                  <Button
                    size="lg"
                    className="bg-gradient-accent text-accent-foreground hover:opacity-90 
                         transition-all duration-300 transform hover:scale-[1.02] 
                          shadow-lg px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:px-12 xl:py-6
                         text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold rounded-[25px] border-transparent
                      hover:bg-none hover:bg-[#2c2c2c] 
                      hover:text-accent 
                      hover:border-accent
                      "
                  >
                    <Link href="/contact" className="inline-flex items-center gap-1 sm:gap-2">
                      Discuss Your Project
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
     


    </div>
  );
}
