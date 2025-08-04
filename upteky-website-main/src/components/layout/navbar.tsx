"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { UptekyLogo } from '@/components/upteky-logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/solution', label: 'Solutions' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loadingHref, setLoadingHref] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
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
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
          isScrolled ? "bg-background/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center" prefetch={false} onClick={() => handleLinkClick('/')}>
            <UptekyLogo className="h-12 w-auto text-primary" />
            <span className="sr-only">Upteky AI Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-foreground/70 transition-colors hover:text-primary relative group py-2",
                  pathname === item.href && "text-primary"
                )}
                onClick={() => handleLinkClick(item.href)}
                prefetch={false}
              >
                <span>{item.label}</span>
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 ease-out",
                  (pathname === item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:bg-accent/10">
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-0 border-l-border/50">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-border/30">
                   <Link href="/" onClick={() => handleLinkClick('/')} prefetch={false}>
                      <UptekyLogo className="h-10 w-auto text-primary" />
                      <span className="sr-only">Upteky AI Solutions</span>
                    </Link>
                  </div>
                  <nav className="flex-grow p-6 space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center justify-center text-lg font-medium text-foreground/80 transition-colors hover:text-primary py-3 rounded-md px-3",
                          pathname === item.href && "text-primary bg-accent/10"
                        )}
                        onClick={() => handleLinkClick(item.href)}
                        prefetch={false}
                      >
                        <span>{item.label}</span>
                      </Link>
                    ))}
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
