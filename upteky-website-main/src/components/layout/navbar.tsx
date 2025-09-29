"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { UptekyLogo } from '@/components/upteky-logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, } from "@/components/ui/sheet";
import { Menu, X, Loader2, ChevronRight, Linkedin, Facebook, Instagram, } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/solution', label: 'Solutions' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loadingHref, setLoadingHref] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (loadingHref) {
      setLoadingHref(null);
    }
    setIsMobileMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    if (pathname !== href) {
      setLoadingHref(href);
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {isMounted && loadingHref && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/80 backdrop-blur-md">
          <UptekyLogo className="h-16 w-auto mb-6 text-primary" />
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="mt-3 text-sm text-muted-foreground">Loading page...</p>
        </div>
      )}
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
          isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-screen-2xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-20">
          <Link href="/" className="flex items-center" prefetch={false} onClick={() => handleLinkClick('/')}>
            <UptekyLogo className="h-10 md:h-12 w-auto text-primary" />
            <span className="sr-only">Upteky AI Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 flex-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group flex items-center h-20">
                <Link
                  href={item.href === '/solution' ? '#' : item.href}
                  className={cn(
                    "text-base font-medium font-poppins text-foreground/70 transition-colors hover:text-primary relative py-2",
                    pathname === item.href && "text-primary"
                  )}
                  onClick={(e) => {
                    if (item.href === '/solution') {
                      e.preventDefault();
                      return;
                    }
                    handleLinkClick(item.href);
                  }}
                  prefetch={false}
                >
                  <span>{item.label}</span>
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 ease-out",
                      pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
                
                {item.href === "/solution" && (
                  <div className="fixed inset-x-0 top-20 py-10 hidden group-hover:block w-screen rounded-b-2xl bg-[#212529] shadow-xl border-t border-border z-40">
                    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-20 py-12">
                       {/* Mega menu content... */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-8 text-sm">
                        <div className="py-4 lg:py-0 lg:px-4 border-b sm:border-b-0 lg:border-b-0 lg:border-r border-white/10">
                          <h4 className="pb-4 text-white font-semibold text-base"><Link href="/conversational-agents" className="hover:text-accent transition-colors">Conversational Agents</Link></h4>
                          <ul className="space-y-2 text-gray-400">
                            <li><Link href="/solution_pages/s01" className="hover:text-white transition-colors">Interactive AI Website Chatbot</Link></li>
                            <li><Link href="/solution_pages/s02" className="hover:text-white transition-colors">WhatsApp & Multi-Platform Chatbot</Link></li>
                            <li><Link href="/solution_pages/s03" className="hover:text-white transition-colors">AI-Powered Lead Reactivation</Link></li>
                            <li><Link href="/solution_pages/s04" className="hover:text-white transition-colors">AI Voice Assistant (Voice Bot)</Link></li>
                          </ul>
                        </div>
                        <div className="py-4 lg:py-0 lg:px-4 border-b sm:border-b-0 lg:border-b-0 lg:border-r border-white/10">
                          <h4 className="pb-4 text-white font-semibold text-base"><Link href="/ai-automation" className="hover:text-accent transition-colors">AI Automation Solution</Link></h4>
                          <ul className="space-y-2 text-gray-400">
                            <li><Link href="/solution_pages/s05" className="hover:text-white transition-colors">AI Workflow Automation</Link></li>
                            <li><Link href="/solution_pages/s12" className="hover:text-white transition-colors">AI-Powered ERP</Link></li>
                            <li><Link href="/solution_pages/s10" className="hover:text-white transition-colors">AI-Powered CRM Platform</Link></li>
                            <li><Link href="/solution_pages/s07" className="hover:text-white transition-colors">AI-Powered Data Analyst</Link></li>
                          </ul>
                        </div>
                        <div className="py-4 lg:py-0 lg:px-4 border-b sm:border-b-0 lg:border-b-0 lg:border-r border-white/10">
                          <h4 className="pb-4 text-white font-semibold text-base"><Link href="/ai-sales-growth" className="hover:text-accent transition-colors">AI Sales & Growth Solution</Link></h4>
                          <ul className="space-y-2 text-gray-400">
                            <li><Link href="/solution_pages/s08" className="hover:text-white transition-colors">AI Strategy Consulting</Link></li>
                            <li><Link href="/solution_pages/s09" className="hover:text-white transition-colors">AI Sales Agent</Link></li>
                            <li><Link href="/solution_pages/s11" className="hover:text-white transition-colors">AI Digital Marketing Agent</Link></li>
                          </ul>
                        </div>
                        <div className="py-4 lg:py-0 lg:px-4">
                          <h4 className="pb-4 text-white font-semibold text-base"><Link href="/web-development" className="hover:text-accent transition-colors">Web Development Services</Link></h4>
                          <ul className="space-y-2 text-gray-400">
                            <li><Link href="/solution_pages/s13" className="hover:text-white transition-colors">Wix Development</Link></li>
                            <li><Link href="/solution_pages/s14" className="hover:text-white transition-colors">Webflow Development</Link></li>
                            <li><Link href="/solution_pages/s15" className="hover:text-white transition-colors">MERN Stack Development</Link></li>
                            <li><Link href="/solution_pages/s16" className="hover:text-white transition-colors">Shopify Development</Link></li>
                            <li><Link href="/solution_pages/s17" className="hover:text-white transition-colors">WordPress Development</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA - Style Restored */}
          <div className="hidden lg:flex items-center justify-end mr-1">
            <Button
              className="bg-transparent border border-accent text-white rounded-full px-6 py-2.5 text-base font-outfit hover:bg-gradient-to-r from-accent to-accent-dark transition-all duration-300"
              asChild
            >
              <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0Hf-bvSzm-R79180oE1OQfbfQZI_QdfANF-hMCMk0U7i5xALnGlP0GS4vtFsky9z28D5zgGTsT">Let's Tech Talk</Link>
            </Button>
          </div>

          {/* Mobile/Tablet Navigation */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-accent/10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-background p-0">
                {/* Mobile menu content... */}
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}