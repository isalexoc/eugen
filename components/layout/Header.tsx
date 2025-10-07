"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import Headroom from "headroom.js";

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
          up: 10,
          down: 20,
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
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-amber-800 py-2 text-sm text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@redlotusinternational.com</span>
              </div>
            </div>
            <div className="hidden items-center space-x-2 md:flex">
              <MapPin className="h-4 w-4" />
              <span>Stafford, VA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        ref={headerRef}
        className="bg-white shadow-lg transition-all duration-300 ease-in-out"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <div className="flex items-center space-x-3">
                  {/* Red Lotus Logo Placeholder */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-800 to-green-700">
                    <span className="text-xl font-bold text-white">RL</span>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-2xl font-bold text-gray-900">
                      Red Lotus International
                    </h1>
                    <p className="text-sm text-gray-600">
                      Global Trade Solutions
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 lg:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "bg-amber-50 text-amber-800"
                      : "text-gray-700 hover:bg-gray-50 hover:text-amber-800"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden items-center space-x-4 lg:flex">
              <Link
                href="/newsletter"
                className="text-gray-700 transition-colors duration-200 hover:text-red-600"
              >
                Newsletter
              </Link>
              <Link
                href="/contact"
                className="rounded-lg bg-gradient-to-r from-amber-800 to-green-700 px-6 py-2 font-medium text-white transition-all duration-200 hover:from-amber-900 hover:to-green-800"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-md p-2 text-gray-700 hover:text-amber-800 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-200 bg-white lg:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "bg-amber-50 text-amber-800"
                      : "text-gray-700 hover:bg-gray-50 hover:text-amber-800"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-4 pb-2">
                <Link
                  href="/newsletter"
                  className="block px-3 py-2 text-gray-700 transition-colors duration-200 hover:text-amber-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Newsletter
                </Link>
                <Link
                  href="/contact"
                  className="mx-3 mt-2 block rounded-lg bg-gradient-to-r from-amber-800 to-green-700 px-6 py-2 text-center font-medium text-white transition-all duration-200 hover:from-amber-900 hover:to-green-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Headroom CSS Classes */}
      <style jsx global>{`
        .header-initial {
          transform: translateY(0);
        }
        .header-pinned {
          transform: translateY(0);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header-unpinned {
          transform: translateY(-100%);
        }
        .header-top {
          background-color: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
        }
        .header-not-top {
          background-color: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
        }
      `}</style>
    </>
  );
};
