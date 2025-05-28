
"use client"; 

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, MapPin, Briefcase, Users, Star, ArrowRight, Upload } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const openRoles = {
  "Engineering": [
    { 
      title: "FullStack Engineer", 
      location: "Ahmedabad, IND", 
      link: "#apply-form",
      department: "Engineering",
      type: "Full-time",
      experience: "2+ years"
    },
    { 
      title: "Developer Intern", 
      location: "Ahmedabad, IND", 
      link: "#apply-form",
      department: "Engineering",
      type: "Internship",
      experience: "Fresher"
    },
  ],
  "Sales": [
    { 
      title: "Business Developer", 
      location: "Ahmedabad, IND", 
      link: "#apply-form",
      department: "Sales",
      type: "Full-time",
      experience: "3+ years"
    },
  ],
  "Marketing": [
    { 
      title: "Social Media Manager", 
      location: "Ahmedabad, IND", 
      link: "#apply-form",
      department: "Marketing",
      type: "Full-time",
      experience: "1+ years"
    },
  ],
};

const teamMembers = [
    { 
      name: "Alex Johnson", 
      role: "CEO & Founder", 
      quote: "We're building the future of real estate with AI as our cornerstone.", 
      img: "https://placehold.co/200x200.png", 
      hint: "professional portrait man",
      linkedin: "#",
      background: "Previously led product at Zillow"
    },
    { 
      name: "Maria Garcia", 
      role: "Head of Engineering", 
      quote: "Innovation drives everything we do, with a team that's committed to excellence.", 
      img: "https://placehold.co/200x200.png", 
      hint: "professional portrait woman",
      linkedin: "#",
      background: "Ex-Google, Stanford CS"
    },
    { 
      name: "David Chen", 
      role: "Lead AI Researcher", 
      quote: "Solving complex problems with elegant solutions is what gets me up every morning.", 
      img: "https://placehold.co/200x200.png", 
      hint: "tech person portrait",
      linkedin: "#",
      background: "PhD in AI, MIT"
    },
];

const coreValues = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
  },
  {
    title: "Collaboration",
    description: "We believe in the power of diverse perspectives coming together to create something greater than the sum of its parts."
  },
  {
    title: "Impact",
    description: "Every decision we make is guided by the potential to create meaningful change in the real estate industry."
  },
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our interactions, prioritizing honesty and transparency."
  }
];

const benefits = [
  "Competitive salary & equity",
  "Flexible remote work policy",
  "Comprehensive health coverage",
  "Professional development budget",
  "Unlimited PTO policy",
  "Home office stipend",
  "Weekly team social events",
  "Annual company retreats"
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section with Abstract Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMin slice">
            <defs>
              <linearGradient id="heroGradientCareers" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--accent))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.7" />
              </linearGradient>
              <filter id="glowCareers" x="-50%" y="-50%" width="200%" height="200%">
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

        <div className="relative z-10 py-20 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                Join Our Visionary Team
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                Be part of a dynamic team that's revolutionizing real estate through 
                the power of artificial intelligence and innovative thinking.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:opacity-90 rounded-full px-6 py-3 sm:px-8 sm:py-3.5 font-medium text-sm sm:text-base">
                  <Link href="#open-positions">View Open Positions</Link>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/5 rounded-full px-6 py-3 sm:px-8 sm:py-3.5 font-medium text-sm sm:text-base">
                  <Link href="#company-culture">Our Culture</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 py-8 sm:py-10 mb-12 sm:mb-16 bg-card/50 rounded-xl px-4 sm:px-6 md:px-12 border border-border/30">
          <div className="text-center py-3 sm:py-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">3x</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Fastest Career Acceleration</p>
          </div>
          <div className="text-center py-3 sm:py-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">90%</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Multi-Stack Learning Rate</p>
          </div>
          <div className="text-center py-3 sm:py-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">40%</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Annual Growth</p>
          </div>
          <div className="text-center py-3 sm:py-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">4.8</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Employee Rating</p>
          </div>
        </div>

        {/* Open Positions Section */}
        <section id="open-positions" className="mb-16 sm:mb-24 scroll-mt-24">
          <div className="flex items-center justify-between mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Open Positions</h2>
            <Badge variant="outline" className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm border-border text-muted-foreground">
              {Object.values(openRoles).flat().length} Open Roles
            </Badge>
          </div>

          <Tabs defaultValue="Engineering" className="w-full">
            <TabsList className="mb-6 sm:mb-8 w-full max-w-md mx-auto grid grid-cols-3 bg-secondary/50 text-xs sm:text-sm">
              {Object.keys(openRoles).map((department) => (
                <TabsTrigger key={department} value={department} className="data-[state=active]:bg-accent/20 data-[state=active]:text-accent py-1.5 sm:py-2">
                  {department}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {Object.entries(openRoles).map(([department, roles]) => (
              <TabsContent key={department} value={department} className="mt-0">
                <div className="grid gap-3 sm:gap-4">
                  {roles.map((role) => (
                    <Card key={role.title} className="overflow-hidden bg-card border-border/50 hover:border-accent/30 transition-colors group">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row justify-between p-4 sm:p-6">
                          <div className="flex-1">
                            <div className="flex items-center mb-1.5 sm:mb-2">
                              <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-accent" />
                              <p className="text-xs sm:text-sm font-medium text-muted-foreground">{role.department}</p>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-foreground group-hover:text-accent transition-colors">{role.title}</h3>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                              <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
                                {role.location}
                              </div>
                              <Badge variant="secondary" className="text-xs bg-secondary/70 text-secondary-foreground px-1.5 py-0.5 sm:px-2 sm:py-1">
                                {role.type}
                              </Badge>
                              <Badge variant="outline" className="text-xs border-border text-muted-foreground px-1.5 py-0.5 sm:px-2 sm:py-1">
                                {role.experience}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center mt-3 sm:mt-4 md:mt-0">
                            <Button asChild className="bg-accent/10 hover:bg-accent/20 text-accent rounded-full px-5 py-2 sm:px-6 sm:py-2.5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors text-xs sm:text-sm">
                              <a href={role.link}>
                                Apply Now
                                <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Company Culture Section */}
        <section id="company-culture" className="mb-16 sm:mb-24 scroll-mt-24">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-3 sm:mb-4 px-3 py-1 sm:px-4 sm:py-1.5 bg-accent/10 text-accent border-accent/20 rounded-full text-xs sm:text-sm">
              Our Culture
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6 text-foreground">
              Life at Our Company
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built a place where passionate people can thrive and do the best work of their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/5 to-accent/10 p-6 sm:p-8 md:p-10 border border-accent/20">
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 -mt-8 -mr-8 sm:-mt-10 sm:-mr-10 bg-accent/10 rounded-full filter blur-xl opacity-80"></div>
              
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 flex items-center text-foreground">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-accent" />
                Our Values
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex">
                    <div className="mr-3 sm:mr-4 mt-1">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center">
                        <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-foreground text-sm sm:text-base">{value.title}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden bg-card p-6 sm:p-8 md:p-10 border border-border/50">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 flex items-center text-foreground">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-accent" />
                Benefits & Perks
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mr-2.5 sm:mr-3"></div>
                    <p className="text-xs sm:text-sm text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Apply Now Form Section */}
        <section id="apply-form" className="scroll-mt-24 mb-12 sm:mb-16">
          <div className="bg-card/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-12 border border-border/50 max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <Badge className="mb-3 sm:mb-4 px-3 py-1 sm:px-4 sm:py-1.5 bg-accent/10 text-accent border-accent/20 rounded-full text-xs sm:text-sm">
                Apply Now
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4 text-foreground">
                Submit Your Application
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Interested in joining our team? Fill out the form below and we'll get back to you soon.
              </p>
            </div>
            
            <form className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="firstName" className="text-xs sm:text-sm font-medium text-muted-foreground">First Name</Label>
                  <Input id="firstName" placeholder="John" className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm" />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="lastName" className="text-xs sm:text-sm font-medium text-muted-foreground">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm" />
                </div>
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-muted-foreground">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="position" className="text-xs sm:text-sm font-medium text-muted-foreground">Position Applying For</Label>
                  <Input id="position" placeholder="e.g., Senior Backend Engineer" className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm" />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="location" className="text-xs sm:text-sm font-medium text-muted-foreground">Preferred Location</Label>
                  <Input id="location" placeholder="e.g., Remote, New York, etc." className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm" />
                </div>
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <Label className="text-xs sm:text-sm font-medium text-muted-foreground">Resume/CV</Label>
                <div className="border-2 border-dashed border-border/70 rounded-lg p-6 sm:p-8 text-center hover:border-accent/50 transition-colors bg-background/30">
                  <Upload className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground mx-auto mb-3 sm:mb-4" />
                  <p className="text-xs sm:text-sm font-medium mb-1 text-foreground">Drag and drop your resume</p>
                  <p className="text-xs text-muted-foreground mb-3 sm:mb-4">PDF, DOCX or RTF up to 5MB</p>
                  <Button type="button" variant="outline" size="sm" className="mx-auto border-border text-muted-foreground hover:bg-accent/10 hover:text-accent text-xs h-8 sm:h-9">
                    Browse Files
                  </Button>
                </div>
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="linkedin" className="text-xs sm:text-sm font-medium text-muted-foreground">LinkedIn Profile (Optional)</Label>
                <Input id="linkedin" placeholder="https://linkedin.com/in/johndoe" className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm" />
              </div>
              
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="coverLetter" className="text-xs sm:text-sm font-medium text-muted-foreground">Why do you want to join our team?</Label>
                <Textarea 
                  id="coverLetter" 
                  placeholder="Tell us about yourself and why you're interested in this position..." 
                  className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent min-h-28 sm:min-h-32 text-sm"
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-accent to-accent/90 text-accent-foreground hover:opacity-90 transition-opacity rounded-md py-3 sm:py-3.5 text-sm sm:text-base h-10 sm:h-11">
                Submit Application
              </Button>
            </form>
          </div>
        </section>
        
        {/* Join Us Banner */}
        <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 p-6 sm:p-8 md:p-12 border border-accent/20 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-foreground">Don't see a role that fits? We'd still love to hear from you!</h3>
          <p className="text-muted-foreground mb-5 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            We're always on the lookout for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 py-2.5 sm:px-8 text-sm sm:text-base">
            Submit General Application
          </Button>
        </div>
      </div>
    </div>
  );
}
