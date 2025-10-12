"use client";

import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function CTAButton({
  href,
  children,
  variant = "primary",
}: CTAButtonProps) {
  const baseClasses =
    "px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group transition-all duration-300";

  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`${baseClasses} text-brand-primary border border-white/30 bg-white hover:bg-gray-100`}
      >
        <div className="from-brand-primary/10 to-brand-secondary/10 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <span className="relative z-10 flex items-center space-x-2">
          <span>{children}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseClasses} hover:text-brand-primary border-2 border-white text-white hover:bg-white`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <span className="relative z-10 flex items-center space-x-2">
        <span>{children}</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
