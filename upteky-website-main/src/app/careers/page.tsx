"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, MapPin, Briefcase, Users, Star, ArrowRight, Upload, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import FadeIn from "@/components/FadeIn";



const StatCounter = ({
  end,
  label,
  duration = 2000,
  numberClassName = "",
  labelClassName = "",
  trigger = true,
}: {
  end: number;
  label?: string;
  duration?: number;
  numberClassName?: string;
  labelClassName?: string;
  trigger?: boolean;
}) => {
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
      <p className={`text-4xl sm:text-5xl font-bold mb-1 ${numberClassName}`}>
        {count}
        {label
          ? label.includes("%")
            ? "%"
            : label.includes("-")
              ? "-"
              : label.includes("x") || label.includes("X")
                ? "x"
                : "+"
          : ""}
      </p>

      {/* Only render descriptive label text if it’s not a symbol-only label */}
      {label &&
        !["%", "-", "+", "x", "X"].includes(label.trim()) && (
          <p
            className={`text-xs sm:text-sm tracking-widest text-[#8B8B8B] ${labelClassName}`}
          >
            {label
              .replace(/\s*\(\d+-\d+%\)/, "")
              .replace(/\s*\(\d+-\d+\sWeeks\)/, "")
              .replace(" %", "")
              .trim()}
          </p>
        )}
    </div>


  );
};

const openRoles = {
  "Engineering": [
    {
      title: "FullStack Engineer",
      location: "Ahmedabad, IND",
      link: "#apply-form",
      department: "Engineering",
      type: "Full-time",
      experience: "2+ years",
      place: "On-site",
      description: [
        "Design, develop, and maintain full-stack web applications.",
        "Write clean, efficient, and maintainable code.",
        "Collaborate with cross-functional teams.",
        "Participate in code reviews and contribute to team knowledge sharing.",
      ]
    }
  ],

  "Sales": [
    {
      title: "Business Developer",
      location: "Ahmedabad, IND",
      link: "#apply-form",
      department: "Sales",
      type: "Full-time",
      experience: "0-4 years",
      place: "On-site",
      description: [
        "Identify and pursue new business opportunities.",
        "Build and maintain strong client relationships.",
        "Develop and implement sales strategies.",
        "Achieve sales targets and contribute to revenue growth.",
      ]
    },
  ],

  "Marketing": [
    {
      title: "Social Media Manager",
      location: "Ahmedabad, IND",
      link: "#apply-form",
      department: "Marketing",
      type: "Full-time",
      experience: "1+ years",
      place: "On-site",
      description: [
        "Manage and grow social media presence.",
        "Create engaging content for various platforms.",
        "Analyze social media metrics and adjust strategy.",
        "Stay updated on social media trends.",
      ]
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
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    location: '',
    linkedin: '',
    coverLetter: '',
    resume: null as File | null
  });
  const [statsInView, setStatsInView] = useState(false);

  // 👇 Intersection observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStatsInView(true);
        });
      },
      { threshold: 0.3 }
    );

    const statsElement = document.getElementById("stats-grid");
    if (statsElement) observer.observe(statsElement);

    return () => {
      if (statsElement) observer.unobserve(statsElement);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create FormData object
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          submitData.append(key, value);
        }
      });

      // Google Sheets API endpoint
      const googleScriptURL = "https://script.google.com/macros/s/AKfycbx8PEgTZBJSh4OstHgt_fZ1pneJtBSoVHqPxuz5PPUfXdIOFjfCbMOjQrZMqWHLCx4X/exec";

      // Convert FormData to URLSearchParams for proper submission
      const params = new URLSearchParams();
      for (const [key, value] of submitData.entries()) {
        if (value instanceof File) {
          params.append(key, value.name);
        } else {
          params.append(key, value.toString());
        }
      }



      // Submit to Google Sheets
      const response = await fetch(googleScriptURL, {
        method: "POST",
        body: params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: 'no-cors'
      });

      // Add a small delay to ensure the data is processed
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Since we're using no-cors, we can't check response.ok
      // Instead, we'll assume success if no error is thrown
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll review your application and get back to you shortly.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        position: '',
        location: '',
        linkedin: '',
        coverLetter: '',
        resume: null
      });

    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-[#232629] text-white overflow-x-hidden">
      {/* Hero Section with Abstract Background */}
      <FadeIn>
        <div className="relative overflow-hidden ">
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

          <div className="relative z-10 pt-20 pb-2 md:py-24 lg:pt-32 lg:pb-[12px]">

            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                className="text-center max-w-4xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.7 }}
              >
                <h1 className="font-poppins text-white font-light text-[20px] xs:text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] xl:text-[38px] 2xl:text-[45px] leading-[110%] xs:leading-[115%] sm:leading-[120%] md:leading-[121%]">
                  Join Our Visionary Team
                </h1>
                <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 lg:max-w-xl font-poppins font-normal text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[140%] xs:leading-[145%] sm:leading-[146%] text-[#858C92] max-w-3xl mx-auto">
                  Be part of a dynamic team that's revolutionizing real estate through
                  the power of artificial intelligence and innovative thinking.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 xs:gap-4 sm:gap-5 md:gap-6 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-16">
                  <Button size="lg" className="bg-transparent text-white shadow-lg border border-accent hover:bg-[linear-gradient(90deg,_#F58F1D_0%,_#E57D77_100%)] rounded-full px-6 py-3 sm:px-8 sm:py-3.5 font-medium text-sm sm:text-base transition-all duration-300">
                    <Link href="#open-positions" className="flex items-center">
                      View Open Positions
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent text-white shadow-lg border border-accent hover:bg-accent/5 rounded-full px-6 py-3 sm:px-8 sm:py-3.5 font-medium text-sm sm:text-base transition-all duration-300">
                    <Link href="#company-culture">Our Culture</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="container mx-auto px-4 md:px-6 py-10 md:py-12">
        {/* Stats Banner */}
        <div
          id="stats-grid"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 py-8 sm:py-10 mb-12 sm:mb-16 bg-[#2C3035] rounded-xl xl:rounded-[30px] px-4 sm:px-6 md:px-12 border border-border/30"
        >
          {/* Stat 1 */}
          <div className="text-center py-3 sm:py-4">
            <StatCounter
              end={3}
              label="x"
              numberClassName="text-accent font-outfit text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2"
              labelClassName="font-poppins text-xs sm:text-sm text-[#9FA6AD]"
              trigger={statsInView}
            />
            <p className="font-poppins text-xs sm:text-sm text-[#9FA6AD]">
              Fastest Career Acceleration
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center py-3 sm:py-4">
            <StatCounter
              end={90}
              label="%"
              numberClassName="text-accent font-outfit text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2"
              labelClassName="font-poppins text-xs sm:text-sm text-[#9FA6AD]"
              trigger={statsInView}
            />
            <p className="font-poppins text-xs sm:text-sm text-[#9FA6AD]">
              Multi-Stack Learning Rate
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center py-3 sm:py-4">
            <StatCounter
              end={40}
              label="%"
              numberClassName="text-accent font-outfit text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2"
              labelClassName="font-poppins text-xs sm:text-sm text-[#9FA6AD]"
              trigger={statsInView}
            />
            <p className="font-poppins text-xs sm:text-sm text-[#9FA6AD]">Annual Growth</p>
          </div>

          {/* Stat 4 */}
          <div className="text-center py-3 sm:py-4">
            <StatCounter
              end={4.8}
              label=""
              numberClassName="text-accent font-outfit text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2"
              labelClassName="font-poppins text-xs sm:text-sm text-[#9FA6AD]"
              trigger={statsInView}
            />
            <p className="font-poppins text-xs sm:text-sm text-[#9FA6AD]">Employee Rating</p>
          </div>
        </div>


        {/* Open Positions Section */}
        <FadeIn>
          <section id="open-positions" className="mb-16 sm:mb-24 scroll-mt-24">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="font-outfit text-white text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[35px] leading-[115%] xs:leading-[118%] sm:leading-[120%] md:leading-[121%] mb-3 xs:mb-4 sm:mb-5 md:mb-6">Open Positions</h2>
              <Badge variant="outline" className="font-poppins px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm border-border text-[#9FA6AD]">
                {Object.values(openRoles).flat().length} Open Roles
              </Badge>
            </div>

            <Tabs defaultValue="Sales" className="w-full">
              <TabsList className="mb-6 sm:mb-8 w-full max-w-md mx-auto grid grid-cols-3 bg-secondary/50 font-poppins text-[#9FA6AD] text-xs sm:text-sm h-auto p-1">
                {Object.keys(openRoles).map((department) => (
                  <TabsTrigger
                    key={department}
                    value={department}
                    className="data-[state=active]:bg-[linear-gradient(90deg,_#616D78_0%,_#454A51_100%)] data-[state=active]:text-white py-2 px-3 rounded-md transition-all duration-200"
                  >
                    {department}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(openRoles).map(([department, roles]) => (
                <TabsContent key={department} value={department} className="mt-0">
                  <div className="grid gap-3 sm:gap-4">
                    {roles.map((role) => (
                      <Card key={role.title} className="overflow-hidden bg-card border-border/50 transition-colors transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg group">
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row justify-between p-4 sm:p-6">
                            <div className="flex-1">
                              <div className="flex items-center mb-1.5 sm:mb-2">
                                <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2 text-accent" />
                                <p className="text-xs sm:text-sm font-medium text-[#9FA6AD]">{role.department}</p>
                              </div>
                              <h3 className="font-outfit text-lg sm:text-xl mb-1.5 sm:mb-2 text-white group-hover:text-accent transition-colors">{role.title}</h3>
                              {role.description && (
                                <ul className="list-disc list-inside font-poppins text-sm text-[#9FA6AD] mb-3 sm:mb-4 space-y-1">
                                  {role.description.map((desc, descIdx) => (
                                    <li key={descIdx}>{desc}</li>
                                  ))}
                                </ul>
                              )}
                              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                <div className="font-poppins flex items-center text-xs sm:text-sm text-[#9FA6AD]">
                                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
                                  {role.location}
                                </div>
                                <Badge variant="secondary" className="text-xs bg-secondary/70 text-secondary-foreground px-1.5 py-0.5 sm:px-2 sm:py-1">
                                  {role.type}
                                </Badge>
                                <Badge variant="outline" className="text-xs border-[#414141] text-[#9FA6AD] px-1.5 py-0.5 sm:px-2 sm:py-1">
                                  {role.experience}
                                </Badge>
                                {role.title === "Business Developer" ? (
                                  <Badge variant="outline" className="text-xs border-[#414141] text-[#9FA6AD] px-1.5 py-0.5 sm:px-2 sm:py-1">
                                    {role.place}
                                  </Badge>
                                ) : null}


                              </div>
                            </div>
                            <div className="flex items-center mt-3 sm:mt-4 md:mt-0">
                              <button className="text-white font-poppins shadow-lg bg-[#2C3035] hover:bg-[linear-gradient(90deg,_#F58F1D_0%,_#E57D77_100%)] rounded-[30px] px-4 xs:px-5 sm:px-6 md:px-7 py-2 xs:py-2.5 sm:py-3 md:py-3.5 transition-all duration-300 text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] flex items-center">
                                <a href={role.link} className="flex items-center">
                                  Apply Now
                                  <ArrowRight className="ml-2 h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4" />
                                </a>
                              </button>
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
        </FadeIn>

        {/* Company Culture Section */}
        <FadeIn>
          <section id="company-culture" className="mb-16 sm:mb-24 scroll-mt-24">
            <div className="text-center mb-12 sm:mb-16">

              <h2 className="font-outfit text-white  text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[35px] leading-[115%] xs:leading-[118%] sm:leading-[120%] md:leading-[121%] mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                Life at Our Company
              </h2>
              <p className="font-poppins text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[140%] xs:leading-[145%] sm:leading-[150%] text-[#858C92] max-w-2xl mx-auto">
                We've built a place where passionate people can thrive and do the best work of their careers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
              <div className="relative rounded-2xl overflow-hidden bg-card p-6 sm:p-8 md:p-10 border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 -mt-8 -mr-8 sm:-mt-10 sm:-mr- rounded-full filter blur-xl opacity-80"></div>

                <h3 className="text-xl sm:text-2xl  mb-5 sm:mb-6 flex items-center font-poppins text-white">
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
                        <h4 className="font-medium mb-1 font-poppins text-white text-sm sm:text-base">{value.title}</h4>
                        <p className="text-xs sm:text-sm font-poppins text-[#9FA6AD]">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-card p-6 sm:p-8 md:p-10 border border-border/50 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-lg">
                <h3 className="text-xl sm:text-2xl  mb-6 sm:mb-6 flex items-center font-outfit text-white  group-hover:opacity-80 ">
                  <Star className="h-4 w-4 sm:h-5  sm:w-5 mr-2 text-accent" />
                  Benefits & Perks
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-poppins text-[#9FA6AD]">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent mr-2.5 sm:mr-3"></div>
                      <p className="text-xs sm:text-sm text-[#9FA6AD]">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Apply Now Form Section */}
        <FadeIn>
          <section id="apply-form" className="scroll-mt-24 mb-10 sm:mb-14">
            <div className="   bg-[#232629]/30 backdrop-blur-sm  shadow-[0_4px_10px_rgba(142,142,142,0.3)]   rounded-[30px]  p-4 sm:p-6 md:p-8 border border-border/50 max-w-6xl mx-auto">
              <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                
                <h2 className="font-outfit text-white  text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] 2xl:text-[35px] leading-[115%] xs:leading-[118%] sm:leading-[120%] md:leading-[121%] mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                  Submit Your Application
                </h2>
                <p className="font-poppins text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] leading-[140%] xs:leading-[145%] sm:leading-[150%] text-[#858C92]">
                  Interested in joining our team? Fill out the form below and we'll get back to you soon.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 border-muted-foreground  bg-[#303336]/80 p-6 sm:p-8 rounded-[24px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5  sm:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="firstName" className="text-xs sm:text-sm font-poppins text-[#9FA6AD]">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="lastName" className="text-xs sm:text-sm font-poppins text-[#9FA6AD]">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5  sm:gap-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-xs sm:text-sm font-poppins text-[#9FA6AD]">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="position" className="text-xs sm:text-sm font-poppins text-[#9FA6AD]">Position Applying For</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="location" className="text-xs sm:text-sm font-poppins text-[#9FA6AD]">Preferred Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="linkedin" className="text-xs sm:text-sm font-poppins text-[#9FA6AD]">LinkedIn Profile (Optional)</Label>
                    <Input
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent h-9 sm:h-10 text-sm"
                      disabled={isLoading}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1 sm:space-y-2">
                    <Label className="text-xs sm:text-sm font-poppins text-[#9FA6AD]">Resume/CV</Label>
                    <div className="border-2 border-dashed border-border/70 rounded-lg p-3 sm:p-0 h-30 text-center hover:border-accent/50 transition-colors bg-background/30">
                      <Upload className="h-6 w-6 my-2 sm:h-10 sm:w-10 text-[#9FA6AD] mx-auto  sm:mb-4" />
                      <p className="text-xs sm:text-sm mb-1 font-poppins text-white ">Drag and drop your resume</p>
                      <p className="text-xs  mb-[3px] font-poppins text-[#9FA6AD]">PDF, DOCX or RTF up to 5MB</p>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.rtf"
                        className="hidden"
                        required
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        className="mx-auto  mb-3 border-border font-poppins text-[#9FA6AD]  hover:bg-accent/10 hover:text-accent text-xs h-6 sm:h-9"
                        onClick={() => document.getElementById('resume')?.click()}
                        disabled={isLoading}
                      >
                        Browse Files
                      </Button>
                      {formData.resume && (
                        <p className="mt-2 text-xs text-accent">{formData.resume.name}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="coverLetter" className="text-xs sm:text-sm font-poppins text-[#9FA6AD]">Why do you want to join our team?</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      className="rounded-md bg-background/50 border-border/50 focus:border-accent focus:ring-accent  min-h-[150px]   text-sm"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </form>
              <div className="flex justify-center mt-6 xs:mt-7 sm:mt-8 md:mt-9 lg:mt-10">
                <button
                  type="submit"
                  className="text-white font-poppins shadow-lg hover:bg-[linear-gradient(90deg,_#F58F1D_0%,_#E57D77_100%)] w-full xs:w-auto min-w-[160px] xs:min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] xl:min-w-[243px] h-[36px] xs:h-[40px] sm:h-[44px] md:h-[46px] lg:h-[48px] xl:h-[50px] rounded-[30px] xs:rounded-[35px] sm:rounded-[40px] md:rounded-[45px] lg:rounded-[50px] xl:rounded-[62px] border border-accent font-normal text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] transition-all duration-300 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-3 sm:py-3.5 h-10 sm:h-11 text-sm sm:text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Join Us Banner */}
        <FadeIn>
          <div className="rounded-2xl bg-[#2C3035] p-6 sm:p-8 md:p-12  text-center">
            <h3 className="font-outfit text-white text-[16px] xs:text-[17px] sm:text-[18px] md:text-[19px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mb-3 xs:mb-4 sm:mb-5 md:mb-6">Don't see a role that fits? We'd still love to hear from you!</h3>
            <p className="font-poppins text-[11px] xs:text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] text-[#858C92] mb-4 xs:mb-5 sm:mb-6 md:mb-7 max-w-2xl mx-auto">
              We're always on the lookout for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button
              className="text-white font-poppins shadow-lg hover:bg-[linear-gradient(90deg,_#F58F1D_0%,_#E57D77_100%)] w-full xs:w-auto min-w-[160px] xs:min-w-[180px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[240px] xl:min-w-[243px] h-[36px] xs:h-[40px] sm:h-[44px] md:h-[46px] lg:h-[48px] xl:h-[50px] rounded-[30px] xs:rounded-[35px] sm:rounded-[40px] md:rounded-[45px] lg:rounded-[50px] xl:rounded-[62px] border border-accent font-normal text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] transition-all duration-300 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8"
              onClick={() => {
                document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Submit General Application
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}