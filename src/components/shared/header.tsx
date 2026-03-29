
"use client";

import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Dialog, DialogTrigger, DialogContent, DialogClose, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { cn } from '@/lib/utils';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

const desktopNavItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
];

const logoUrl = "https://firebasestorage.googleapis.com/v0/b/studio-7158004547-ae16d.firebasestorage.app/o/TYL-FinalLogo_HRZ%20OG.png?alt=media&token=16336bba-a715-4140-8631-4067db3359ad";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const showLogoPages = ['/about', '/services', '/testimonials', '/contact'];
  const showLogo = showLogoPages.includes(pathname);

  return (
    <header className={cn(
      "absolute top-0 z-50 w-full", 
      isHomePage 
        ? "" 
        : "bg-white"
    )}>
      <div className="container flex h-24 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
            {showLogo && (
              <Image 
                src={logoUrl}
                alt="Taylor Leadership Coaching Logo"
                width={300}
                height={75}
                className="w-auto h-24"
              />
            )}
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
                {desktopNavItems.map((item) => (
                <Link 
                    key={item.href}
                    href={item.href}
                    className={cn(
                        "text-sm font-medium transition-colors",
                        isHomePage 
                          ? (pathname === item.href ? "text-secondary" : "text-white hover:text-secondary")
                          : (pathname === item.href ? "text-secondary" : "text-primary hover:text-secondary")
                    )}
                >
                    {item.label}
                </Link>
                ))}
            </nav>
            <Button asChild className="rounded-full" size="lg">
                <a href="https://cal.com/janice-brown-taylor-x55xle/30min" target="_blank" rel="noopener noreferrer">Let's Talk</a>
            </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className={cn("p-2", isHomePage ? "text-white" : "text-secondary")}>
                  <Menu className="h-6 w-6"/>
                  <span className="sr-only">Open menu</span>
              </button>
            </DialogTrigger>
            <DialogContent className="mobile-menu-overlay p-0 pt-16">
                <div className="flex flex-1 flex-col items-center justify-center">
                   <VisuallyHidden>
                    <DialogTitle>Mobile Navigation Menu</DialogTitle>
                    <DialogDescription>A list of links to navigate the site.</DialogDescription>
                  </VisuallyHidden>
                  <nav className="flex flex-col items-center space-y-8">
                      {navItems.map((item) => (
                         <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "text-4xl font-headline transition-colors hover:text-secondary",
                              pathname === item.href ? "text-secondary" : "text-primary"
                            )}
                          >
                            {item.label}
                          </Link>
                      ))}
                  </nav>
                </div>

                <div className="p-4 pb-8 border-t">
                  <Button asChild className="w-full rounded-full" size="lg">
                      <a href="https://cal.com/janice-brown-taylor-x55xle/30min" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Let's Talk</a>
                  </Button>
                </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}

    