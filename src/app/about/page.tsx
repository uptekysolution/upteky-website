
"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Settings, Users, Zap, BarChart3, Settings2, Bot, Search, GitMerge, Lightbulb, Target, CheckCircle, Share2, BrainCircuit } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const StatCounter = ({ end, label, duration = 2000 }: { end: number; label: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let startTime: number | undefined;
      const updateCount = (timestamp: number) => {
        if (startTime === undefined) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressRatio = Math.min(progress / duration, 1);
        setCount(Math.floor(progressRatio * end));
        
        if (progressRatio < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      const frame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(frame);
    }, [end, duration]);
    
    return (
      <div className="text-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">{count}{label.includes("%") ? "%" : "+"}</p>
        <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">{label.replace(/\s*\(\d+-\d+%\)/, '').replace(/\s*\(\d+-\d+\sWeeks\)/, '').replace(" %", "")}</p>
      </div>
    );
  };

  return (
    <div className="bg-background text-foreground font-sans">
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col justify-center items-center px-4 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background/90 z-0"></div>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-10 z-0">
          <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-accent blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-accent blur-3xl"></div>
        </div>
        
        <div className="container mx-auto z-10">
          <div className="flex flex-col items-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-4 sm:mb-6 tracking-tight text-foreground">About Us</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-center text-accent font-light max-w-2xl mx-auto">
              Where Artificial Intelligence Meets Real-World Impact
            </p>
          </div>
          
          <div className="relative border border-border/30 backdrop-blur-sm bg-card/50 shadow-xl shadow-accent/10 rounded-2xl max-w-4xl mx-auto p-6 sm:p-10 md:p-12">
            <span className="absolute top-2 left-4 sm:top-4 sm:left-8 text-[50px] sm:text-[70px] leading-none text-accent opacity-50 select-none">“</span>
            <span className="absolute bottom-2 right-4 sm:bottom-4 sm:right-8 text-[50px] sm:text-[70px] leading-none text-accent opacity-50 select-none">”</span>
            <p className="text-center text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed font-light">
              At Upteky, we are revolutionizing the way businesses operate through cutting-edge AI automation. Our mission is to streamline workflows, enhance efficiency, and unlock new levels of productivity with intelligent automation solutions. With expertise in artificial intelligence, machine learning, and process automation, we help businesses eliminate repetitive tasks and focus on high-value activities. Our AI-driven solutions are designed to seamlessly integrate with existing systems, reducing operational bottlenecks and enabling smarter decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 sm:py-16 bg-background/70 border-y border-border/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <StatCounter end={10} label="Industries Served" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">4-8</p>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">Delivery Time (Weeks)</p>
            </div>
            <StatCounter end={30} label="Avg Client Growth (30-50%)" />
            <StatCounter end={100} label="Integrations Implemented" />
          </div>
        </div>
      </section>

      {/* "What We Do" Section */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 px-4 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-foreground">What We Do</h2>
              <p className="text-accent text-lg sm:text-xl mb-4 sm:mb-6 font-light">We provide enterprise-level AI solutions with unmatched expertise.</p>
            </div>
            
            <div className="space-y-5 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                At Upteky, we specialize in AI-powered automation to streamline workflows, enhance efficiency, and drive business growth. Our cutting-edge solutions leverage machine learning, NLP, and intelligent automation to optimize processes across industries.
              </p>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
                <div className="border border-border/20 rounded-lg p-3 sm:p-4 bg-card/30">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-accent/20 text-accent mb-2 sm:mb-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-medium text-sm sm:text-lg text-foreground">AI Conversational Agents</h3>
                </div>
                <div className="border border-border/20 rounded-lg p-3 sm:p-4 bg-card/30">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-accent/20 text-accent mb-2 sm:mb-3">
                     <Settings2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-medium text-sm sm:text-lg text-foreground">Process Automation</h3>
                </div>
                <div className="border border-border/20 rounded-lg p-3 sm:p-4 bg-card/30">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-accent/20 text-accent mb-2 sm:mb-3">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-medium text-sm sm:text-lg text-foreground">Analytics</h3>
                </div>
                <div className="border border-border/20 rounded-lg p-3 sm:p-4 bg-card/30">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-accent/20 text-accent mb-2 sm:mb-3">
                     <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="font-medium text-sm sm:text-lg text-foreground">Quality Assurance</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 h-[20rem] sm:h-[24rem] md:h-[34rem] lg:h-[38rem] flex items-center justify-center">
             <div className="w-full h-full rounded-xl overflow-hidden relative">
                <Image
                  src="/assets/what-we-do.png"
                  alt="Showcase of Upteky's AI solutions enhancing business processes"
                  fill
                  className="object-contain"
                  data-ai-hint="AI technology"
                />
             </div>
          </div>
        </div>
      </section>

      {/* "Our Vision" Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-background/70">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 px-4 items-center">
          <div className="h-[20rem] sm:h-[24rem] md:h-[34rem] lg:h-[38rem] flex items-center justify-center">
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <Image
                src="/assets/our-vision.png"
                alt="Futuristic representation of Upteky's vision for AI in business"
                fill
                className="object-contain"
                data-ai-hint="futuristic technology"
              />
            </div>
          </div>
          
          <div>
            <div className="mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-foreground">Our Vision</h2>
              <p className="text-accent text-lg sm:text-xl mb-4 sm:mb-6 font-light">Optimizing Tomorrow with AI-Powered Solutions</p>
            </div>
            
            <div className="space-y-5 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                At Upteky, we aim to revolutionize businesses through AI automation. We streamline workflows, enhance efficiency, and empower businesses to focus on strategic growth, innovation, and high-value operations.
              </p>
              
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-accent flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="font-semibold text-base sm:text-lg text-foreground">Innovation at Scale</h3>
                    <p className="text-muted-foreground mt-1 text-sm sm:text-base">Driving enterprise-level transformation through cutting-edge AI solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-accent flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="font-semibold text-base sm:text-lg text-foreground">Sustainable Growth</h3>
                    <p className="text-muted-foreground mt-1 text-sm sm:text-base">Creating AI solutions that deliver long-term business value.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-accent flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4">
                    <h3 className="font-semibold text-base sm:text-lg text-foreground">Human-Centered AI</h3>
                    <p className="text-muted-foreground mt-1 text-sm sm:text-base">Developing technology that complements and enhances human capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Our Workflow" Section */}
      <section className="py-16 sm:py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-40 left-20 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-accent blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-accent blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-foreground">Our Workflow</h2>
            <p className="text-accent text-lg sm:text-xl max-w-2xl mx-auto font-light">
              A systematic approach to delivering exceptional AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Business Analysis",
                description: "We analyze your operations to identify key areas where AI can deliver maximum impact and ROI."
              },
              {
                title: "Custom AI Building",
                description: "Our experts develop bespoke AI solutions tailored to your specific business challenges and goals."
              },
              {
                title: "Deployment",
                description: "We implement and integrate our solutions seamlessly into your existing infrastructure with minimal disruption."
              },
              {
                title: "Monthly Maintenance",
                description: "Our team provides ongoing support, updates, and optimization to ensure continued performance."
              }
            ].map((step, i) => (
              <div key={i} className="group">
                <div className="bg-gradient-to-br from-card/70 to-card/90 border border-border/20 rounded-xl p-6 sm:p-8 transition-all duration-300 h-full hover:shadow-lg hover:shadow-accent/10 hover:border-accent/30 backdrop-blur-sm">
                  <div className="text-accent font-bold text-4xl sm:text-5xl mb-4 sm:mb-6 opacity-60 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-background/70 border-t border-border/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">Ready to Transform Your Business with AI?</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10">
            Let's discuss how our AI solutions can help you achieve your business objectives and stay ahead of the competition.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium py-2.5 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
