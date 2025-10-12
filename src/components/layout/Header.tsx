"use client";

import Logo from "@/components/Logo";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Headroom from "headroom.js";
import { Mail, MapPin, Menu, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

/**
 * Header component for Red Lotus International LLC
 * Features: Headroom scroll behavior, responsive navigation, professional branding
 */
export const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    if (headerRef.current) {
      const headroom = new Headroom(headerRef.current, {
        tolerance: {
          up: 5,
          down: 10,
        },
        offset: 0,
        classes: {
          initial: "header-initial",
          pinned: "header-pinned",
          unpinned: "header-unpinned",
          top: "header-top",
          notTop: "header-not-top",
          bottom: "header-bottom",
          notBottom: "header-not-bottom",
        },
      });
      headroom.init();

      return () => {
        headroom.destroy();
      };
    }
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Top Bar - Hidden on mobile, visible on tablet and desktop */}
      <div className="from-brand-primary via-brand-primary to-brand-secondary relative hidden overflow-hidden bg-gradient-to-r py-2 text-xs text-white shadow-lg md:block md:py-3 md:text-sm">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-white/5"></div>
        {/* Animated shimmer effect */}
        <div className="header-shimmer absolute inset-0"></div>
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center space-x-3 md:space-x-6">
                <div className="hover:text-brand-warm group flex cursor-pointer items-center space-x-2 transition-all duration-200 hover:scale-105">
                  <Phone className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
                  <span className="font-medium">
                    {process.env.NEXT_PUBLIC_COMPANY_PHONE ||
                      "+1 (555) 123-4567"}
                  </span>
                </div>
                <div className="hover:text-brand-warm group flex cursor-pointer items-center space-x-2 transition-all duration-200 hover:scale-105">
                  <Mail className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
                  <span className="font-medium">
                    {process.env.NEXT_PUBLIC_COMPANY_EMAIL ||
                      "info@redlotusintl.com"}
                  </span>
                </div>
              </div>
              <div className="hover:text-brand-warm group hidden cursor-pointer items-center space-x-2 transition-all duration-200 hover:scale-105 lg:flex">
                <MapPin className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
                <span className="font-medium">
                  {process.env.NEXT_PUBLIC_COMPANY_ADDRESS_CITY ||
                    "Stafford, VA"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        ref={headerRef}
        className="from-brand-warm to-brand-warm border-brand-primary/20 header-float sticky top-0 z-50 border-b-2 bg-gradient-to-r via-white shadow-xl backdrop-blur-sm transition-all duration-300 ease-in-out"
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <div className="flex h-full w-full items-center justify-center">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-4 lg:flex xl:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative overflow-hidden rounded-xl px-3 py-2.5 text-xs font-medium transition-all duration-300 lg:px-5 lg:text-sm ${
                    isActive(item.href)
                      ? "from-brand-primary to-brand-secondary border-brand-primary/30 border bg-gradient-to-r font-semibold text-white shadow-lg"
                      : "text-brand-accent hover:from-brand-primary hover:to-brand-secondary hover:border-brand-primary/30 border border-transparent hover:scale-105 hover:bg-gradient-to-r hover:text-white hover:shadow-lg"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden items-center space-x-2 lg:flex xl:space-x-4">
              <Link
                href="/newsletter"
                className="text-brand-accent hover:from-brand-secondary hover:to-brand-primary border-brand-secondary/30 hover:border-brand-secondary/50 rounded-xl border px-3 py-2.5 text-xs font-medium transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:text-white hover:shadow-lg lg:px-5 lg:text-sm"
              >
                Newsletter
              </Link>
              <Link
                href="/contact"
                className="from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-secondary-dark group border-brand-primary/30 hover:border-brand-primary/50 relative transform overflow-hidden rounded-xl border bg-gradient-to-r px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl lg:px-6 lg:py-3 lg:text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Quote</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </div>

            {/* Mobile sheet navigation */}
            <MobileSheet
              isOpen={isMobileMenuOpen}
              setIsOpen={setIsMobileMenuOpen}
              navigation={navigation}
              isActive={isActive}
            />
          </div>
        </div>
      </header>
    </>
  );
};

/* ───────────────────────── Mobile Sheet Component ───────────────────────── */

type MobileSheetProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  navigation: Array<{ name: string; href: string }>;
  isActive: (href: string) => boolean;
};

const MobileSheet = ({
  isOpen,
  setIsOpen,
  navigation,
  isActive,
}: MobileSheetProps) => (
  <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetTrigger asChild className="lg:hidden">
      <Button variant="ghost" size="icon" aria-label="Open main menu">
        <Menu className="h-6 w-6" aria-hidden="true" />
      </Button>
    </SheetTrigger>

    <SheetContent className="from-brand-warm to-brand-warm border-brand-primary/30 w-72 border-l-2 bg-gradient-to-b via-white p-0 sm:w-80">
      <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
      <SheetDescription className="sr-only">
        Main navigation menu for Red Lotus International website
      </SheetDescription>
      <div className="flex h-full flex-col">
        <div className="from-brand-warm/50 flex-1 overflow-y-auto bg-gradient-to-b to-white px-4 pt-8">
          <Accordion type="multiple" className="w-full space-y-2">
            {/* Logo */}
            <div className="border-brand-primary/30 from-brand-warm/80 mb-4 rounded-xl border-b-2 bg-gradient-to-r to-white p-4 pb-6 shadow-sm">
              <Logo />
            </div>

            {/* Main Navigation Links */}
            {navigation.map((item) => (
              <MobileLink
                key={item.name}
                label={item.name}
                href={item.href}
                isActive={isActive}
                setIsOpen={setIsOpen}
              />
            ))}

            {/* Newsletter Link */}
            <MobileLink
              label="Newsletter"
              href="/newsletter"
              isActive={isActive}
              setIsOpen={setIsOpen}
              className="pt-4"
            />
          </Accordion>
        </div>

        {/* Sticky bottom section */}
        <div className="border-brand-primary/30 from-brand-warm/90 to-brand-warm/90 border-t-2 bg-gradient-to-r via-white px-4 pt-6 pb-6 backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE || "+15551234567"}`}
                className="text-brand-accent hover:text-brand-primary group flex cursor-pointer items-center space-x-2 text-sm transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
                <span className="font-medium">
                  {process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (555) 123-4567"}
                </span>
              </a>
            </div>
          </div>
          {/* CTA Button */}
          <Link
            href="/contact"
            className="from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-secondary-dark group border-brand-primary/30 hover:border-brand-primary/50 relative block w-full transform overflow-hidden rounded-xl border bg-gradient-to-r px-6 py-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <span className="relative z-10 flex items-center space-x-2">
              <span>Get Quote</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </div>
      </div>
    </SheetContent>
  </Sheet>
);

/* ───────────────────────── Mobile Link Component ───────────────────────── */

type MobileLinkProps = {
  label: string;
  href: string;
  isActive: (href: string) => boolean;
  setIsOpen: (open: boolean) => void;
  className?: string;
};

const MobileLink = ({
  label,
  href,
  isActive,
  setIsOpen,
  className = "",
}: MobileLinkProps) => (
  <Link
    href={href}
    onClick={() => setIsOpen(false)}
    className={`group relative mb-2 block overflow-hidden rounded-xl px-4 py-4 text-base font-medium transition-all duration-300 ${
      isActive(href)
        ? "from-brand-primary to-brand-secondary border-brand-primary/30 border bg-gradient-to-r font-semibold text-white shadow-lg"
        : "text-brand-accent bg-brand-warm/30 hover:from-brand-primary hover:to-brand-secondary border-brand-primary/20 hover:border-brand-primary/40 border hover:scale-105 hover:bg-gradient-to-r hover:text-white hover:shadow-lg"
    } ${className}`}
  >
    {label}
  </Link>
);
