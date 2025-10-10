import { Coffee, Home, Leaf, Search } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Return to Red Lotus International LLC homepage.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-warm-cream flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number with decorative elements */}
        <div className="relative mb-8">
          <div className="text-9xl md:text-[12rem] font-bold text-amber-800/20 select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <Coffee className="h-12 w-12 text-amber-700 animate-pulse" />
              <Leaf className="h-12 w-12 text-green-700 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Oops! Page Not Found
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            It looks like this page has wandered off like a lost coffee bean.
            Don&apos;t worry, we&apos;ll help you find your way back to our premium
            coffee and matcha collection.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-800 to-green-700 text-white px-8 py-4 rounded-lg hover:from-amber-900 hover:to-green-800 transition-all duration-200 font-semibold text-lg group"
            >
              <Home className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-lg hover:bg-amber-800 hover:text-white transition-colors duration-200 font-semibold text-lg group"
            >
              <Search className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Browse Products
            </Link>
          </div>

          {/* Additional helpful links */}
          <div className="pt-8 border-t border-amber-200">
            <p className="text-sm text-gray-500 mb-4">Or try these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/about"
                className="text-amber-700 hover:text-amber-800 underline decoration-amber-300 hover:decoration-amber-500 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-amber-700 hover:text-amber-800 underline decoration-amber-300 hover:decoration-amber-500 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/services"
                className="text-amber-700 hover:text-amber-800 underline decoration-amber-300 hover:decoration-amber-500 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-amber-700 hover:text-amber-800 underline decoration-amber-300 hover:decoration-amber-500 transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <Coffee className="h-8 w-8 text-amber-600 animate-bounce" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <Leaf className="h-6 w-6 text-green-600 animate-bounce" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <Coffee className="h-6 w-6 text-amber-600 animate-bounce" style={{ animationDelay: '3s' }} />
        </div>
        <div className="absolute bottom-10 right-10 opacity-20">
          <Leaf className="h-8 w-8 text-green-600 animate-bounce" style={{ animationDelay: '4s' }} />
        </div>
      </div>
    </div>
  );
}
