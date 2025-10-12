import { Coffee, Home, Leaf, Search } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for doesn't exist. Return to Red Lotus International LLC homepage.",
};

export default function NotFound() {
  return (
    <div className="from-brand-warm flex min-h-screen items-center justify-center bg-gradient-to-br to-white px-4">
      <div className="mx-auto max-w-2xl text-center">
        {/* 404 Number with decorative elements */}
        <div className="relative mb-8">
          <div className="text-brand-primary/20 text-9xl font-bold select-none md:text-[12rem]">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <Coffee className="text-brand-primary h-12 w-12 animate-pulse" />
              <Leaf
                className="text-brand-secondary h-12 w-12 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Oops! Page Not Found
          </h1>

          <p className="mx-auto max-w-lg text-lg text-gray-600">
            It looks like this page has wandered off like a lost coffee bean.
            Don&apos;t worry, we&apos;ll help you find your way back to our
            premium coffee and matcha collection.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
            <Link
              href="/"
              className="from-brand-primary to-brand-secondary hover:from-brand-dark hover:to-brand-success-dark group inline-flex items-center justify-center rounded-lg bg-gradient-to-r px-8 py-4 text-lg font-semibold text-white transition-all duration-200"
            >
              <Home className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Back to Home
            </Link>

            <Link
              href="/products"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary group inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 text-lg font-semibold transition-colors duration-200 hover:text-white"
            >
              <Search className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Browse Products
            </Link>
          </div>

          {/* Additional helpful links */}
          <div className="border-brand-warm border-t pt-8">
            <p className="mb-4 text-sm text-gray-500">
              Or try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/about"
                className="text-brand-primary hover:text-brand-dark decoration-brand-primary/30 hover:decoration-brand-primary/50 underline transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-brand-primary hover:text-brand-dark decoration-brand-primary/30 hover:decoration-brand-primary/50 underline transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/services"
                className="text-brand-primary hover:text-brand-dark decoration-brand-primary/30 hover:decoration-brand-primary/50 underline transition-colors"
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-brand-primary hover:text-brand-dark decoration-brand-primary/30 hover:decoration-brand-primary/50 underline transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 opacity-20">
          <Coffee
            className="text-brand-primary h-8 w-8 animate-bounce"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <Leaf
            className="text-brand-secondary h-6 w-6 animate-bounce"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <Coffee
            className="text-brand-primary h-6 w-6 animate-bounce"
            style={{ animationDelay: "3s" }}
          />
        </div>
        <div className="absolute right-10 bottom-10 opacity-20">
          <Leaf
            className="text-brand-secondary h-8 w-8 animate-bounce"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>
    </div>
  );
}
