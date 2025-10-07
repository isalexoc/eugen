import { Award, Coffee, Globe, Leaf, Shield, Truck } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "Red Lotus International LLC - Leading global trade solutions provider specializing in premium coffee beans and matcha tea from Japan, Vietnam, and China.",
};

export default function Home() {
  const features = [
    {
      icon: Coffee,
      title: "Premium Coffee Beans",
      description: "Sourced from the finest coffee regions in Japan, Vietnam, and China with guaranteed quality and freshness.",
    },
    {
      icon: Leaf,
      title: "Authentic Matcha Tea",
      description: "Traditional matcha tea from certified producers, maintaining the highest standards of purity and taste.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with reliable shipping and distribution networks across all continents.",
    },
    {
      icon: Truck,
      title: "Container Scale",
      description: "Specialized in large-scale container shipments for wholesale and retail distribution partners.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every shipment meets international standards.",
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Industry certifications and partnerships with leading coffee and tea producers worldwide.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-warm-cream py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Trade Solutions for
              <span className="text-amber-800 block">Premium Coffee & Matcha</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Red Lotus International LLC delivers excellence in every container, 
              connecting the world&apos;s finest coffee beans and matcha tea from Japan, 
              Vietnam, and China to clients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-800 to-green-700 text-white px-8 py-4 rounded-lg hover:from-amber-900 hover:to-green-800 transition-all duration-200 font-semibold text-lg"
              >
                Get Quote
              </Link>
              <Link
                href="/products"
                className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-lg hover:bg-amber-800 hover:text-white transition-colors duration-200 font-semibold text-lg"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Red Lotus International?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine traditional expertise with modern logistics to deliver
              exceptional coffee and tea products to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Global Trade Journey?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who trust Red Lotus International
            for their coffee and tea import needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-800 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg"
            >
              Contact Us Today
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-amber-800 transition-colors duration-200 font-semibold text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
