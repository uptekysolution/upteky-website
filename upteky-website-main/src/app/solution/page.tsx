"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { allSolutions } from '@/lib/solutionsData';
import Tilt from "react-parallax-tilt";



export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 text-foreground">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 bg-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Our Comprehensive AI Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore a wide range of AI-powered tools and services designed to transform your business, enhance efficiency, and drive growth.
            </p>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-6 left-0 right-0 h-12 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 blur-xl" />
      </section>

      {/* Solutions Grid Section */}
     
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
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
      <section className="py-12 sm:py-16 md:py-24 bg-secondary/10 border-t border-border/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <Edit className="h-10 w-10 sm:h-12 sm:w-12 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Tailored AI for Your Unique Needs</h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
              Don't see exactly what you're looking for? At Upteky, we specialize in customizing our AI solutions and developing new ones to perfectly fit your business requirements. Let's build the future, together.
            </p>
            <Button size="lg" className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-105 shadow-lg px-8 py-3 sm:px-10 sm:py-4 text-base sm:text-lg rounded-full font-semibold">
              <Link href="/contact?subject=Custom AI Solution Inquiry">Discuss Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
