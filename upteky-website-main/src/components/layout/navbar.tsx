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
  const pathname = usePathname();

  const socialMedia = [
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, href: 'https://in.linkedin.com/company/uptekysolution' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, href: 'https://m.facebook.com/uptekysolution/' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/uptekysolution?igsh=MTh4b2hxdTUwOWt5cg==' },
  ];

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
    // For mobile, ensure menu closes even if navigating to the same page (though loadingHref won't be set)
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {isMounted && loadingHref && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/80 backdrop-blur-md transition-opacity duration-300 ease-in-out opacity-100">
          <UptekyLogo className="h-16 w-auto mb-6 text-primary" />
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="mt-3 text-sm text-muted-foreground">Loading page...</p>
        </div>
      )}
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all mx-auto px-4 sm:px-6 md:px-8 lg:px-20 duration-300 ease-in-out",
          isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-2 sm:px-4 md:px-6">
          <Link href="/" className="flex items-center" prefetch={false} onClick={() => handleLinkClick('/')}>
            <UptekyLogo className="h-10 md:h-12 w-auto text-primary" />
            <span className="sr-only">Upteky AI Solutions</span>
          </Link>


          {/* Desktop Navigation (lg and up) */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 flex-1">
            {navItems.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "text-base font-medium  font-poppins text-foreground/70 transition-colors hover:text-primary relative py-2",
                    pathname === item.href && "text-primary"
                  )}
                  onClick={() => handleLinkClick(item.href)}
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
                {/* Solutions Mega Menu */}
                 {item.href === "/solution" && (
                   <div className="fixed inset-x-0 top-20 py-10 hidden group-hover:block w-screen rounded-b-2xl bg-[#212529] shadow-xl border-t border-border z-40">
                     <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-24 py-12">
                       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-x-8 text-sm">
                       
                         {/* Column 1 */}
                         <div className="py-4 lg:py-0 lg:px-4 border-b sm:border-b-0 lg:border-b-0 lg:border-r border-white/10">
                           <h4 className="mb-4 text-white font-semibold text-base"><Link href="/conversational-agents" className="hover:text-accent transition-colors">Conversational Agents</Link></h4>
                           <ul className="space-y-2 text-gray-400">
                             <li><Link href="#" className="hover:text-white transition-colors">Interactive AI Website Chatbot</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">WhatsApp & Multi-Platform Chatbot</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">AI-Powered Lead Reactivation</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">AI Voice Assistant (Voice Bot)</Link></li>
                           </ul>
                         </div>

                         {/* Column 2 */}
                         <div className="py-4 lg:py-0 lg:px-4 border-b sm:border-b-0 lg:border-b-0 lg:border-r border-white/10">
                           <h4 className="mb-4 text-white font-semibold text-base"><Link href="/ai-automation" className="hover:text-accent transition-colors">AI Automation Solution</Link></h4>
                           <ul className="space-y-2 text-gray-400">
                             <li><Link href="#" className="hover:text-white transition-colors">AI Workflow Automation</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">AI-Powered ERP</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">AI-Powered CRM Platform</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">AI-Powered Data Analyst</Link></li>
                           </ul>
                         </div>

                         {/* Column 3 */}
                         <div className="py-4 lg:py-0 lg:px-4 border-b sm:border-b-0 lg:border-b-0 lg:border-r border-white/10">
                           <h4 className="mb-4 text-white font-semibold text-base"><Link href="ai-sales-growth" className="hover:text-accent transition-colors">AI Sales & Growth Solution</Link></h4>
                           <ul className="space-y-2 text-gray-400">
                       
                             <li><Link href="#" className="hover:text-white transition-colors">AI Strategy Consulting</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">AI Sales Agent</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">AI Digital Marketing Agent</Link></li>
                           </ul>
                         </div>

                         {/* Column 4 */}
                         <div className="py-4 lg:py-0 lg:px-4">
                           <h4 className="mb-4 text-white font-semibold text-base"><Link href="/web-development" className="hover:text-accent transition-colors"> Web Development Services</Link></h4>
                           <ul className="space-y-2 text-gray-400">
                             <li><Link href="#" className="hover:text-white transition-colors">Wix Development</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">Webflow Development</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">MERN Stack Development</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">Shopify Development</Link></li>
                             <li><Link href="#" className="hover:text-white transition-colors">WordPress Development</Link></li>
                           </ul>
                         </div>

                       </div>
                     </div>
                   </div>
                 )}

              </div>
            ))}
          </nav>

          {/* Desktop CTA (lg and up) */}
          <div className="hidden lg:flex items-center justify-end mr-1">
            <Button
              className=" bg-transparent border-accent text-white rounded-full px-6 py-2.5 text-base  font-outfit     /* reserve 1px border */
                      hover:bg-none   
                      hover:bg-gradient-accent
                      transition-all duration-300"
              asChild
            >
              <Link href="/contact">Let's Tech Talk</Link>
            </Button>
          </div>


          {/* Mobile/Tablet Navigation (below lg) */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-accent/10">
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[340px] bg-background p-0 border-l-border/50">
                <SheetTitle className="sr-only">Mobile navigation menu</SheetTitle>
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-border/30">
                    <Link href="/" onClick={() => handleLinkClick('/')} prefetch={false}>
                      <UptekyLogo className="h-9 sm:h-10 w-auto text-primary" />
                      <span className="sr-only">Upteky AI Solutions</span>
                    </Link>
                  </div>
                  <nav className="flex-grow p-6 space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center justify-center text-base sm:text-lg font-medium text-accent-foreground transition-colors hover:text-primary py-3 rounded-md px-3",
                          pathname === item.href && "text-primary bg-accent/10"
                        )}
                        onClick={() => handleLinkClick(item.href)}
                        prefetch={false}
                      >
                        <span>{item.label}</span>
                      </Link>
                    ))}
                    <div className="pt-2">
                      <Button className="w-full bg-gradient-accent font-outfit border-transparent
                      hover:bg-none hover:bg-[#2c2c2c] 
                      hover:text-accent 
                      hover:border-accent
                       text-accent-foreground hover:opacity-90 transition-all duration-300 shadow-lg px-6 py-2.5 text-sm sm:text-base font-semibold" asChild>
                        <Link href="/contact">Let's Tech Talk <ChevronRight className="inline-block ml-2 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
