"use client";

import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export function Hero({
  title = "Global Trade Solutions for",
  subtitle = "Premium Coffee & Matcha",
  description = "Red Lotus International LLC delivers excellence in every container, connecting the world's finest coffee beans and matcha tea from Japan, Vietnam, and China to clients worldwide.",
  primaryButtonText = "Get Quote",
  primaryButtonHref = "/contact",
  secondaryButtonText = "View Services",
  secondaryButtonHref = "/services",
}: HeroProps) {
  return (
    <section className="from-brand-warm relative overflow-hidden bg-gradient-to-br to-white py-20 lg:py-32">
      {/* Fallback Background */}
      <div className="from-brand-warm absolute inset-0 h-full w-full bg-gradient-to-br to-white"></div>

      {/* Video Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full scale-110 object-cover opacity-90"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23f3f4f6'/%3E%3C/svg%3E"
          onError={(e) => {
            console.log("Video failed to load:", e);
          }}
          onLoadStart={() => {
            console.log("Video started loading");
          }}
          onCanPlay={() => {
            console.log("Video can play");
          }}
          onLoadedData={() => {
            console.log("Video data loaded");
          }}
          onPlay={() => {
            console.log("Video is playing");
          }}
        >
          <source
            src="https://res.cloudinary.com/isaacdev/video/upload/f_auto,q_auto:eco,vc_auto,w_1920,ac_none/v1760293851/redlotus_swtl6w.mp4"
            type="video/mp4"
          />
        </video>
        {/* Very subtle overlay for text readability */}
        <div className="from-brand-warm/15 to-brand-warm/15 absolute inset-0 bg-gradient-to-br via-white/10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-black/2"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Title with enhanced readability */}
          <div className="hero-text-container mb-8">
            <h1 className="relative mb-4 text-4xl font-bold text-white md:text-6xl">
              <span className="relative z-10">{title}</span>
              <span className="hero-subtitle-container mt-4 block">
                <span className="text-brand-warm hero-subtitle-pulse relative z-10">
                  {subtitle}
                </span>
              </span>
            </h1>
          </div>

          {/* Description with enhanced readability */}
          <div className="hero-description-container mb-10">
            <p className="relative mx-auto max-w-4xl text-xl leading-relaxed text-white">
              {description}
            </p>
          </div>
          {/* Enhanced CTA Buttons */}
          <div className="hero-buttons-container flex flex-col justify-center gap-6 sm:flex-row">
            <Link
              href={primaryButtonHref}
              className="from-brand-primary to-brand-secondary hover:from-brand-primary-dark hover:to-brand-secondary-dark group border-brand-primary/30 hover:border-brand-primary/50 relative transform overflow-hidden rounded-xl border bg-gradient-to-r px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="relative z-10 flex items-center space-x-2">
                <span>{primaryButtonText}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
            <Link
              href={secondaryButtonHref}
              className="border-brand-primary text-brand-primary hover:from-brand-primary hover:to-brand-secondary hover:border-brand-primary group relative hidden transform overflow-hidden rounded-xl border-2 bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:text-white hover:shadow-xl sm:block"
            >
              <div className="from-brand-primary/10 to-brand-secondary/10 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="relative z-10">{secondaryButtonText}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
