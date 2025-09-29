'use client';

import Link from 'next/link';
import { UptekyLogo } from '@/components/upteky-logo';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
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
    <footer className="py-8 md:py-10 border-t border-border/30 bg-background/50 backdrop-blur-md text-foreground font-poppins">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-20">
        {/* Grid layout now adapts for XL screens for better balance */}
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-10 mb-8">
          
          {/* Column 1: Logo and Contact - now wider on XL screens */}
          <div className="md:col-span-1 xl:col-span-2 space-y-3">
            <Link href="/" className="inline-block mb-1" prefetch={false}>
              {/* Logo size is now larger on medium screens and up */}
              <UptekyLogo className="h-10 md:h-12 w-auto text-primary" />
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
            <div className="flex space-x-2 pt-1">
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

          {/* Desktop Links: now spans 3 cols on XL screens and distributes more evenly */}
          <div className="hidden md:flex md:col-span-3 xl:col-span-3 md:justify-end xl:justify-around gap-8 text-left md:text-right xl:text-left">
            {footerLinks.map((section) => (
              <div key={section.title} className="space-y-2">
                <h4 className="font-semibold text-foreground/90 mb-3">{section.title}</h4>
                <ul className="space-y-2.5">
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
          </div>

          {/* Mobile Accordion Links */}
          <div className="md:hidden col-span-1">
            <Accordion type="single" collapsible className="w-full space-y-1">
              {footerLinks.map((section) => (
                <AccordionItem key={section.title} value={section.title} className="border-b border-border/20 last:border-b-0 rounded-md bg-card/50 px-1">
                  <AccordionTrigger className="font-semibold text-foreground/90 text-sm py-3 px-3 hover:no-underline hover:text-accent transition-colors [&[data-state=open]>svg]:text-accent [&[data-state=open]]:text-accent">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-1 pb-3">
                    <ul className="space-y-2.5 pl-5">
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
        
        <div className="border-t border-border/30 pt-6 mt-6">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {currentYear} Upteky Solution Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}