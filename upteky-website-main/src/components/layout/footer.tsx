'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UptekyLogo } from '@/components/upteky-logo';
import { Linkedin, Facebook, Instagram, Twitter, Loader2 } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { toast } = useToast();
  const [isSubscribing, setIsSubscribing] = useState(false);

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'AI Chatbot', href: '/solution_pages/s01' },
        { label: 'Voice Assistant', href: '/solution_pages/s04' },
        { label: 'Workflow Automation', href: '/solution_pages/s05' },
        { label: 'View All', href: '/solution'},
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
  ];

  const socialMedia = [
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://in.linkedin.com/company/uptekysolution' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: 'https://m.facebook.com/uptekysolution/' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/uptekysolution?igsh=MTh4b2hxdTUwOWt5cg==' },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubscribing(true);
    const form = e.currentTarget;
    const inputValue = (form.elements.namedItem('input') as HTMLInputElement).value.trim();
    
    const url = "https://script.google.com/macros/s/AKfycbzeP9j_r1edEhYe-BDVaO_44i7BGzcNfW6qvC9zehrq3bSqVF9AJ4EPCN5XCF1HR93Xrg/exec";
    
    const isEmail = /\S+@\S+\.\S+/.test(inputValue);
    const isPhone = /^[0-9]{10}$/.test(inputValue);
  
    let dataField = isEmail ? "Email" : isPhone ? "Phone" : null;
  
    if (!dataField) {
      toast({
        variant: "destructive",
        title: "Invalid Input",
        description: "Please enter a valid email or phone number.",
      });
      setIsSubscribing(false);
      return;
    }
  
    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `${dataField}=${encodeURIComponent(inputValue)}`,
        mode: "no-cors", 
      });
      toast({
        title: "Connected!",
        description: "Thank you for connecting. We'll be in touch.",
      });
      form.reset(); 
    } catch (error) {
      console.error("Connection error:", error);
      toast({
        variant: "destructive",
        title: "Connection Failed",
        description: "Could not connect. Please try again later.",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
      <footer className="py-8 md:py-10 border-t border-border/30 bg-background/50 backdrop-blur-md text-foreground">
        <div className="container mx-auto px-4 md:px-6">
          {/* Top section: Logo and Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-8 mb-8">
            {/* Column 1: Logo and Contact */}
            <div className="md:col-span-1 space-y-3">
              <Link href="/" className="inline-block mb-1" prefetch={false}>
                <UptekyLogo className="h-10 w-auto text-primary" />
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Revolutionizing industries with intelligent AI automation and enterprise solutions.
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="tel:+919978901910" className="hover:text-accent transition-colors">+91 9978901910</a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:hello@upteky.com" className="hover:text-accent transition-colors">Hello@upteky.com</a>
              </p>
            </div>

            {/* Desktop Links (columns 2, 3, 4) */}
            {footerLinks.map((section) => (
              <div key={section.title} className="hidden md:block md:col-span-1 space-y-2">
                <h4 className="font-semibold text-foreground/90 mb-2.5">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors" prefetch={false}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Mobile Accordion Links (spans full width on sm, hidden on md+) */}
            <div className="md:hidden col-span-1">
              <Accordion type="single" collapsible className="w-full space-y-1">
                {footerLinks.map((section) => (
                  <AccordionItem key={section.title} value={section.title} className="border-b border-border/20 last:border-b-0 rounded-md bg-card/50 px-1">
                    <AccordionTrigger className="font-semibold text-foreground/90 text-sm py-3 px-3 hover:no-underline hover:text-accent transition-colors [&[data-state=open]>svg]:text-accent [&[data-state=open]]:text-accent">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-3">
                      <ul className="space-y-2.5 pl-5"> {/* Indented links */}
                        {section.links.map((link) => (
                          <li key={link.label}>
                            <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors" prefetch={false}>
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Newsletter Subscription & Social Media */}
          <div className="border-t border-border/30 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="w-full md:w-auto">
                <h4 className="font-semibold text-foreground/90 mb-2 text-center md:text-left text-sm">Stay Updated</h4>
                <form className="flex items-center w-full max-w-sm" onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    placeholder="Your Email/Phone" 
                    className="bg-input border-border/50 rounded-r-none rounded-l-md flex-grow focus:ring-accent focus:border-accent text-sm py-2.5 h-10"
                    aria-label="Email or Phone for newsletter"
                    id="input" 
                    name="input" 
                    required
                    disabled={isSubscribing}
                  />
                  <Button 
                    type="submit" 
                    className="bg-gradient-accent text-accent-foreground hover:opacity-90 rounded-l-none rounded-r-md flex-shrink-0 px-4 h-10 text-sm -ml-px"
                    disabled={isSubscribing}
                  >
                    {isSubscribing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      "Connect"
                    )}
                  </Button>
                </form>
              </div>

              <div className="flex space-x-2">
                {socialMedia.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="p-2.5 rounded-full bg-secondary/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border/30 pt-6 mt-6">
            <p className="text-center text-xs text-muted-foreground">
              &copy; {currentYear} Upteky Solutions Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}

