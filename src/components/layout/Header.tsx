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
      <div className="bg-red-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="hidden md:flex items-center space-x-2">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <div className="flex items-center space-x-3">
                  {/* Red Lotus Logo Placeholder */}
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">RL</span>
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
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-red-600 bg-red-50"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/newsletter"
                className="text-gray-700 hover:text-red-600 transition-colors duration-200"
              >
                Newsletter
              </Link>
              <Link
                href="/contact"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 p-2 rounded-md"
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
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-red-600 bg-red-50"
                      : "text-gray-700 hover:text-red-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-gray-200">
                <Link
                  href="/newsletter"
                  className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Newsletter
                </Link>
                <Link
                  href="/contact"
                  className="block mx-3 mt-2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium text-center"
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
