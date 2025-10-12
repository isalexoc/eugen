import { FooterNewsletterSignup } from "@/components/forms/FooterNewsletterSignup";
import {
  Coffee,
  Facebook,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

/**
 * Footer component for Red Lotus International LLC
 * Features: Company information, navigation links, social media, contact details
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigation = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ],
    products: [
      { name: "Coffee Beans", href: "/products/coffee" },
      { name: "Matcha Tea", href: "/products/matcha" },
      { name: "Quality Assurance", href: "/quality" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Newsletter", href: "/newsletter" },
      { name: "Trade Resources", href: "/resources" },
      { name: "Shipping Info", href: "/shipping" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
  ];

  return (
    <footer className="bg-brand-warm text-brand-primary">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center space-x-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <span className="text-brand-primary text-xl font-bold">RL</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Red Lotus International</h3>
                <p className="text-gray-600">Global Trade Solutions</p>
              </div>
            </div>
            <p className="mb-6 max-w-md text-gray-600">
              Leading global trade solutions provider specializing in premium
              coffee beans and matcha tea from Japan, Vietnam, and China.
              Delivering excellence in every container worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="text-brand-secondary h-5 w-5" />
                <span className="text-gray-600">
                  {process.env.NEXT_PUBLIC_COMPANY_ADDRESS_CITY ||
                    "Stafford, VA"}
                  ,{" "}
                  {process.env.NEXT_PUBLIC_COMPANY_ADDRESS_COUNTRY ||
                    "United States"}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-brand-secondary h-5 w-5" />
                <span className="text-gray-600">
                  {process.env.NEXT_PUBLIC_COMPANY_PHONE || "+1 (555) 123-4567"}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-brand-secondary h-5 w-5" />
                <span className="text-gray-600">
                  {process.env.NEXT_PUBLIC_COMPANY_EMAIL ||
                    "info@redlotusintl.com"}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-brand-secondary text-gray-400 transition-colors duration-200"
                    aria-label={item.name}
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Company</h4>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-secondary text-gray-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Products</h4>
            <ul className="space-y-3">
              {footerNavigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-secondary text-gray-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Resources</h4>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-brand-secondary text-gray-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="max-w-md">
            <h4 className="mb-4 text-lg font-semibold">Stay Updated</h4>
            <p className="mb-4 text-gray-600">
              Subscribe to our newsletter for the latest trade insights and
              product updates.
            </p>
            <FooterNewsletterSignup
              source="footer"
              buttonText="Subscribe"
              placeholder="Enter your email"
              successMessage="Successfully subscribed! Check your email for confirmation."
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-brand-primary/30 bg-brand-primary border-t text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 flex items-center space-x-4 md:mb-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <Coffee className="h-4 w-4" />
                <span className="text-sm">Premium Coffee Beans</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Leaf className="h-4 w-4" />
                <span className="text-sm">Authentic Matcha Tea</span>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
              <p className="text-sm text-gray-400">
                © {currentYear} Red Lotus International LLC. All rights
                reserved.
              </p>
              <div className="flex space-x-4">
                {footerNavigation.support.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-brand-secondary text-sm text-gray-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
