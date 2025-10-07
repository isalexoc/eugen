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
      { name: "Careers", href: "/careers" },
    ],
    products: [
      { name: "Coffee Beans", href: "/products/coffee" },
      { name: "Matcha Tea", href: "/products/matcha" },
      { name: "Quality Assurance", href: "/quality" },
      { name: "Certifications", href: "/certifications" },
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
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center space-x-3">
               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-800 to-green-700">
                <span className="text-xl font-bold text-white">RL</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Red Lotus International</h3>
                <p className="text-gray-400">Global Trade Solutions</p>
              </div>
            </div>
            <p className="mb-6 max-w-md text-gray-300">
              Leading global trade solutions provider specializing in premium
              coffee beans and matcha tea from Japan, Vietnam, and China.
              Delivering excellence in every container worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                 <MapPin className="h-5 w-5 text-amber-600" />
                <span className="text-gray-300">
                  Stafford, VA, United States
                </span>
              </div>
              <div className="flex items-center space-x-3">
                 <Phone className="h-5 w-5 text-amber-600" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-600" />
                <span className="text-gray-300">
                  info@redlotusinternational.com
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
                    className="text-gray-400 transition-colors duration-200 hover:text-amber-600"
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
                    className="text-gray-300 transition-colors duration-200 hover:text-amber-600"
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
                    className="text-gray-300 transition-colors duration-200 hover:text-amber-600"
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
                    className="text-gray-300 transition-colors duration-200 hover:text-amber-600"
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
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for the latest trade insights and
              product updates.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-400 focus:border-transparent focus:ring-2 focus:ring-amber-600 focus:outline-none"
              />
              <button className="rounded-lg bg-gradient-to-r from-amber-800 to-green-700 px-6 py-2 font-medium text-white transition-all duration-200 hover:from-amber-900 hover:to-green-800">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-800">
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
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-red-600"
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
