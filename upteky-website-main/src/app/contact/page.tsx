'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react"; 
import { useToast } from "@/hooks/use-toast";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

export default function ContactPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false); 

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }; 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true); 
    const formData = new FormData(event.currentTarget);
    const form = event.currentTarget;

    const googleScriptURL = "https://script.google.com/macros/s/AKfycbxduD_9xteaUyBYjJTs9Nbwg6xc27ER2hG_I1WFx2phqkAkIaejRB49-Fn5WWsnc4onhw/exec";
    const googleBody = new URLSearchParams();
    googleBody.append("Name", formData.get("name") as string);
    googleBody.append("Email", formData.get("email") as string);
    googleBody.append("PhoneNo", formData.get("PhoneNo") as string);
    googleBody.append("message", formData.get("message") as string);

    formData.append("access_key", "27bef30b-1264-484a-a599-8e908511251f");
    const web3Body = JSON.stringify(Object.fromEntries(formData));

    try {
      const googleResponse = await fetch(googleScriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: googleBody.toString()
      });
      const googleResult = await googleResponse.text();
      console.log("Google Script submission result:", googleResult);

      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: web3Body
      });
      const web3Result = await web3Response.json();

      if (web3Result.success) {
        console.log("Web3Forms Success", web3Result);
        form.reset();
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you shortly.",
        });
      } else {
        throw new Error(web3Result.message || "Form submission failed. Please try again.");
      }
    } catch (error: any) {
      console.error("Error submitting form", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      {/* Hero Section with Background */}
      {/* <FadeIn>
      <div className="relative bg-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="container mx-auto px-4 md:px-6 py-12 sm:py-16 md:py-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-3 sm:mb-4">
              Get In Touch
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Have questions about our AI solutions or want to discuss a partnership? 
              We'd love to hear from you and explore how we can help.
            </p>
          </div>
        </div>
         */}
        {/* Decorative elements */}
        {/* <div className="absolute -bottom-6 left-0 right-0 h-12 bg-gradient-to-r from-accent/20 via-accent/30 to-accent/20 blur-xl" />
      </div>
      </FadeIn> */}
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
              <div className="relative z-10 min-h-[70vh] md:min-h-[80vh] flex items-center">
              <div className="container mx-auto px-4 md:px-6  ">
                <motion.div
                  className="text-center max-w-4xl mx-auto"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.7 }}
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                  Get In Touch
                  </h1>
                  <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                  Have questions about our AI solutions or want to discuss a partnership? 
                  We'd love to hear from you and explore how we can help.
                  </p>
                 
                </motion.div>
             </div>
           </div>
         </div>
       </FadeIn>

      <div className="container mx-auto px-4 md:px-6 py-10 sm:py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form Section */}
          <FadeIn>
          <section className="space-y-6 sm:space-y-8 flex flex-col justify-between">
            <Card className="bg-card border border-border/50 shadow-xl rounded-xl overflow-hidden">
              <div className="h-1.5 sm:h-2 bg-gradient-to-r from-accent to-accent/70" />
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-xl sm:text-2xl">Send Us a Message</CardTitle>
                <CardDescription className="text-sm sm:text-base">Fill out the form and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="name" className="text-xs sm:text-sm font-medium">Name</Label>
                      <Input 
                        id="name" 
                        name="name"
                        placeholder="Your Name" 
                        className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/30 h-9 sm:h-10 text-sm"
                        required
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="email" className="text-xs sm:text-sm font-medium">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/30 h-9 sm:h-10 text-sm"
                        required
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="phoneNo" className="text-xs sm:text-sm font-medium">Phone Number</Label>
                    <Input 
                      id="phoneNo" 
                      name="PhoneNo"
                      placeholder="Mobile No." 
                      className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/30 h-9 sm:h-10 text-sm"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="message" className="text-xs sm:text-sm font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="How can we help you?" 
                      rows={4} 
                      className="bg-background/50 border-border/50 focus:border-accent focus:ring-accent/30 resize-none text-sm min-h-[100px] sm:min-h-[120px]"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <CardFooter className="border-t border-border/30 pt-3 sm:pt-4 px-0 pb-0">
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium h-10 sm:h-11 text-sm sm:text-base" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Mail size={16} className="ml-2" />
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </form>
              </CardContent>
            </Card>
          </section>
          </FadeIn>

          {/* Contact Details & Map Section */}
          <FadeIn>
          <section className="space-y-3 sm:space-y-4">
            <div>
              <h2 className="text-2xl sm:text-2xl font-semibold mb-1.5 sm:mb-2">Contact Information</h2>
              <div className="h-0.5 sm:h-1 w-16 sm:w-20 bg-accent/70 rounded-full mb-5 sm:mb-6"></div>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                Reach out to us directly or visit our office. We're available Monday through Friday, 9AM-6PM IST.
              </p>
            </div>
            
            <div className="space-y-5 sm:space-y-6">
              <Card className="bg-card/50 border-border/30 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm sm:text-base">Email</h3>
                      <a href="mailto:hello@upteky.com" className="text-accent hover:underline text-sm sm:text-base">Hello@upteky.com</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/30 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm sm:text-base">Phone</h3>
                      <a href="tel:+1234567890" className="text-accent hover:underline text-sm sm:text-base">+91 9979900910</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 border-border/30 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm sm:text-base">Office Address</h3>
                      <p className="text-accent text-sm sm:text-base">C-329 Siddhivinayak Tower, <br></br>S.G. Highway, Ahmedabad, Gujarat - 380051</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            
          </section>
          </FadeIn>
     
        </div>
             {/* Map Section */}
            <Card className="mt-12 border border-border/30 shadow-lg overflow-hidden rounded-xl  md:mt-8 sm:mt-8">
              <div className="w-full h-[300px] sm:h-[350px] md:h-[450px] bg-muted ">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.825979345705!2d72.49883527436673!3d22.993425817417044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b811768d763%3A0x2a9be8fd8040e30!2sUpteky%20Solution%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1747210435904!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </Card>
      </div>
    </div>
  );
}
