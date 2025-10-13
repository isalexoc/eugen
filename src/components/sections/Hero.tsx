"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Optimized Cloudinary URLs
  const videoSrc =
    "https://res.cloudinary.com/isaacdev/video/upload/f_auto,q_auto:low,vc_auto,w_1920,h_1080,ac_none,so_0/v1760293851/redlotus_swtl6w.mp4";
  const posterSrc = `https://res.cloudinary.com/isaacdev/image/upload/f_auto,q_auto:eco,w_1920,h_1080,c_fill,g_auto/pexels-adam-lukac-254247-773958_ee8fpg.jpg`;

  // Intersection Observer for lazy loading
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start loading video when it comes into view
            video.load();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
    setShowPoster(false); // Hide poster once video is ready
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoError = () => {
    console.log("Video failed to load, falling back to poster");
    setIsVideoLoaded(false);
  };
  return (
    <section className="from-brand-warm relative overflow-hidden bg-gradient-to-br to-white py-20 lg:py-32">
      {/* Fallback Background */}
      <div className="from-brand-warm absolute inset-0 h-full w-full bg-gradient-to-br to-white"></div>

      {/* Video Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className={`h-full w-full scale-110 object-cover opacity-90 transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-90" : "opacity-0"
          }`}
          poster={posterSrc}
          onLoadedData={handleVideoLoad}
          onPlay={handleVideoPlay}
          onError={handleVideoError}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Poster image fallback - only show when needed */}
        {showPoster && !isVideoLoaded && (
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${posterSrc})`,
            }}
          />
        )}

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
