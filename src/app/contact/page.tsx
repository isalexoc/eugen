"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import { Clock, Mail, MessageSquare, Users } from "lucide-react";
import { useEffect, useState } from "react";

// Metadata moved to layout or handled via head

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    {
      icon: Mail,
      title: "Email Support",
      description:
        "Get quick responses to your inquiries within 24 hours during business days.",
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description:
        "Speak directly with our trade specialists for personalized service.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our experienced team understands global trade and premium product sourcing.",
    },
    {
      icon: Clock,
      title: "Fast Response",
      description:
        "We prioritize customer inquiries and provide timely, detailed responses.",
    },
  ];

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="border-brand-primary mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="from-brand-warm to-brand-warm relative overflow-hidden bg-gradient-to-br via-white py-20">
        {/* Subtle background pattern */}
        <div className="from-brand-primary/5 to-brand-secondary/5 absolute inset-0 bg-gradient-to-r via-transparent"></div>
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
                Get in Touch with
                <span className="text-brand-primary block">
                  Red Lotus International
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
                Ready to start your global trade journey? Our team of experts is
                here to help you with premium coffee beans, matcha tea, and
                comprehensive trade solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose Our Support?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We're committed to providing exceptional service and support for
              all your trade needs.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="hover:border-brand-primary/30 group rounded-xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="from-brand-primary to-brand-secondary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="group-hover:text-brand-primary mb-3 text-xl font-semibold text-gray-900 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                  Send us a Message
                </h2>
                <p className="mb-8 text-gray-600">
                  Fill out the form below and we'll get back to you as soon as
                  possible. All fields marked with * are required.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                  Contact Information
                </h2>
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-brand-primary to-brand-secondary bg-gradient-to-r py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Ready to Start Your Global Trade Journey?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90">
            Join hundreds of satisfied clients who trust Red Lotus International
            for their coffee and tea import needs. Contact us today for a
            consultation.
          </p>
          <div className="flex flex-col justify-center gap-6 sm:flex-row">
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL || "info@redlotusintl.com"}`}
              className="text-brand-primary group relative transform overflow-hidden rounded-xl border border-white/30 bg-white px-8 py-4 text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-xl"
            >
              <div className="from-brand-primary/10 to-brand-secondary/10 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="relative z-10 flex items-center space-x-2">
                <span>Email Us Directly</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE || "+15551234567"}`}
              className="hover:text-brand-primary group relative transform overflow-hidden rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <span className="relative z-10 flex items-center space-x-2">
                <span>Call Us Now</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
