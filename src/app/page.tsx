import BlogPreview from "@/components/sections/BlogPreview";
import { Hero } from "@/components/sections/Hero";
import { Award, Coffee, Globe, Leaf, Shield, Truck } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Red Lotus International LLC - Leading global trade solutions provider specializing in premium coffee beans and matcha tea from Japan, Vietnam, and China.",
};

export default function Home() {
  const features = [
    {
      icon: Coffee,
      title: "Premium Coffee Beans",
      description:
        "Sourced from the finest coffee regions in Japan, Vietnam, and China with guaranteed quality and freshness.",
    },
    {
      icon: Leaf,
      title: "Authentic Matcha Tea",
      description:
        "Traditional matcha tea from certified producers, maintaining the highest standards of purity and taste.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Serving clients worldwide with reliable shipping and distribution networks across all continents.",
    },
    {
      icon: Truck,
      title: "Container Scale",
      description:
        "Specialized in large-scale container shipments for wholesale and retail distribution partners.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes ensuring every shipment meets international standards.",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description:
        "Industry certifications and partnerships with leading coffee and tea producers worldwide.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose Red Lotus International?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We combine traditional expertise with modern logistics to deliver
              exceptional coffee and tea products to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 text-center transition-shadow duration-200 hover:shadow-lg"
                >
                  <div className="from-brand-warm to-brand-success-light mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br">
                    <Icon className="text-brand-primary h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* CTA Section */}
      <section className="from-brand-primary to-brand-secondary bg-gradient-to-r py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your Global Trade Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90">
            Join hundreds of satisfied clients who trust Red Lotus International
            for their coffee and tea import needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="text-brand-primary rounded-lg bg-white px-8 py-4 text-lg font-semibold transition-colors duration-200 hover:bg-gray-100"
            >
              Contact Us Today
            </Link>
            <Link
              href="/about"
              className="hover:text-brand-primary rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-white"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
