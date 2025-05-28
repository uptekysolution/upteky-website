
import React from 'react';
import { allSolutions } from '@/lib/solutionsData';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Mail, Zap, DollarSign, Users, BrainCircuit, Sparkles, Lightbulb } from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { Badge } from '@/components/ui/badge';

interface SolutionPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return allSolutions.map((solution) => ({
    id: solution.id,
  }));
}

export async function generateMetadata(
  { params }: SolutionPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const solution = allSolutions.find(s => s.id === params.id);

  if (!solution) {
    return {
      title: 'Solution Not Found | Upteky AI Solutions',
    };
  }

  return {
    title: `${solution.title} | Upteky AI Solutions`,
    description: solution.description,
    openGraph: {
      title: `${solution.title} | Upteky AI Solutions`,
      description: solution.description,
      images: [
        {
          url: solution.imgSrc, 
          width: 1200,
          height: 630,
          alt: solution.title,
        },
      ],
    },
  };
}


export default function SolutionPage({ params }: SolutionPageProps) {
  const solution = allSolutions.find(s => s.id === params.id);

  if (!solution) {
    notFound(); 
  }

  const genericBenefits = [
    { text: "Boost operational efficiency and productivity.", icon: <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-accent" /> },
    { text: "Reduce costs through automation and optimization.", icon: <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-accent" /> },
    { text: "Enhance customer experiences and satisfaction.", icon: <Users className="h-4 w-4 sm:h-5 sm:w-5 text-accent" /> },
    { text: "Gain deeper insights for data-driven decisions.", icon: <BrainCircuit className="h-4 w-4 sm:h-5 sm:w-5 text-accent" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 text-foreground py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6 sm:mb-8">
          <Button variant="outline" asChild className="border-accent/30 text-accent hover:bg-accent/10 group text-sm h-9 sm:h-10">
            <Link href="/solutions" >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Solutions
            </Link>
          </Button>
        </div>

        <Card className="bg-card/80 border border-border/40 shadow-2xl overflow-hidden rounded-2xl backdrop-blur-md">
          {/* Hero Section */}
          <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-[400px]">
            <Image
              src={solution.imgSrc}
              alt={solution.title}
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-10">
              <div className='mb-auto pt-2 sm:pt-4'> 
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 text-xs sm:text-sm mb-2 sm:mb-3">
                    {solution.category}
                </Badge>
              </div>
              <div className="flex items-center mb-1 sm:mb-2">
                {solution.icon && (
                  <div className="mr-2 sm:mr-3 p-2 sm:p-2.5 bg-card/70 backdrop-blur-sm rounded-lg shadow-md border border-border/30">
                    {React.cloneElement(solution.icon as React.ReactElement, { className: "w-6 h-6 sm:w-7 sm:h-7 text-accent" })}
                  </div>
                )}
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-md">{solution.title}</h1>
              </div>
            </div>
          </div>
          
          <CardContent className="p-4 sm:p-6 md:p-10">
            <div className="max-w-4xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10 border-b border-border/30 pb-6 sm:pb-8">{solution.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
                    {solution.features && solution.features.length > 0 && (
                        <div className="space-y-4 sm:space-y-5">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground flex items-center">
                                <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3 text-accent" />
                                Key Features
                            </h3>
                            <ul className="space-y-2.5 sm:space-y-3 pl-1 sm:pl-2">
                            {solution.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start text-muted-foreground hover:text-foreground/90 transition-colors duration-200 text-sm sm:text-base">
                                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 sm:mt-1 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                                </li>
                            ))}
                            </ul>
                        </div>
                    )}

                    <div className="space-y-4 sm:space-y-5">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground flex items-center">
                             <Lightbulb className="h-6 w-6 sm:h-7 sm:w-7 mr-2 sm:mr-3 text-accent" />
                            Potential Benefits
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3 pl-1 sm:pl-2">
                            {genericBenefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground hover:text-foreground/90 transition-colors duration-200 text-sm sm:text-base">
                                {React.cloneElement(benefit.icon as React.ReactElement, { className: "h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 sm:mt-1 flex-shrink-0" })}
                                <span>{benefit.text}</span>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>

                 <div className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-border/30 bg-card/50 p-5 sm:p-6 md:p-8 rounded-lg shadow-inner">
                     <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-4 sm:mb-5 text-center">Why Partner with Upteky for {solution.title}?</h3>
                     <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto text-sm sm:text-base">
                         At Upteky, we don't just offer solutions; we build partnerships. Our expert team works closely with you to understand your specific business challenges and objectives. We tailor the {solution.title} solution to integrate seamlessly with your existing workflows, ensuring you derive maximum value and achieve tangible results. From initial consultation to ongoing support, we're committed to your success with AI.
                     </p>
                 </div>

                 <div className="mt-10 sm:mt-12 text-center">
                     <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Ready to Get Started?</h3>
                     <p className="text-muted-foreground leading-relaxed mb-5 sm:mb-6 max-w-xl mx-auto text-sm sm:text-base">
                         Learn how the {solution.title} solution can transform your operations. Contact us today for a personalized demo and consultation.
                     </p>
                 </div>
            </div>
          </CardContent>

          <CardFooter className="p-5 sm:p-6 md:p-10 bg-card/70 border-t border-border/30 flex flex-col items-center">
            <Button 
                size="lg" 
                asChild 
                className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full font-semibold w-full max-w-md"
            >
              <Link href={`${solution.contactLink}&title=${encodeURIComponent(solution.title)}`}>
                <Mail className="mr-2 sm:mr-2.5 h-4 w-4 sm:h-5 sm:w-5" />
                Contact Us About This Solution
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-3 sm:mt-4">We'll get back to you within 24 hours.</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
