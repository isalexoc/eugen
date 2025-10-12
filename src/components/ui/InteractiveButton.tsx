"use client";

import Link from "next/link";

interface InteractiveButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function InteractiveButton({
  href,
  children,
  variant = "primary",
}: InteractiveButtonProps) {
  const baseClasses =
    "px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group transition-all duration-300";

  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={`${baseClasses} from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-secondary-dark border-brand-primary/30 hover:border-brand-primary/50 border bg-gradient-to-r text-white`}
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

  return (
    <Link
      href={href}
      className={`${baseClasses} border-brand-primary text-brand-primary hover:from-brand-primary hover:to-brand-secondary hover:border-brand-primary border-2 bg-white/90 backdrop-blur-sm hover:bg-gradient-to-r hover:text-white`}
    >
      <div className="from-brand-primary/10 to-brand-secondary/10 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
