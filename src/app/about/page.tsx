import { CTAButton } from "@/components/ui/CTAButton";
import { InteractiveButton } from "@/components/ui/InteractiveButton";
import {
  Award,
  CheckCircle,
  Coffee,
  Globe,
  Heart,
  Leaf,
  Shield,
  Star,
  Truck,
  Users,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Red Lotus International LLC - Leading global trade solutions provider specializing in premium coffee beans and matcha tea from Japan, Vietnam, and China.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes ensuring every shipment meets international standards and exceeds expectations.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Serving clients worldwide with reliable shipping and distribution networks across all continents.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description:
        "Dedicated to building lasting relationships through exceptional service and personalized trade solutions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Committed to delivering excellence in every container, maintaining the highest standards in global trade.",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "Red Lotus International was established with a vision to connect the world's finest coffee and tea producers with global markets.",
    },
    {
      year: "2017",
      title: "First Major Partnership",
      description:
        "Secured exclusive partnerships with premium coffee producers in Vietnam and matcha suppliers in Japan.",
    },
    {
      year: "2019",
      title: "Global Expansion",
      description:
        "Expanded operations to serve clients across North America, Europe, and Asia with container-scale shipments.",
    },
    {
      year: "2021",
      title: "Quality Certification",
      description:
        "Achieved international quality certifications and established rigorous quality control processes.",
    },
    {
      year: "2023",
      title: "Digital Innovation",
      description:
        "Launched advanced tracking systems and digital platforms for seamless trade management.",
    },
    {
      year: "2024",
      title: "Future Vision",
      description:
        "Continuing to innovate and expand our global network while maintaining our commitment to quality and service.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      expertise: "Global Trade & Supply Chain",
      description:
        "15+ years in international trade with expertise in coffee and tea sourcing from Asia-Pacific regions.",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Operations",
      expertise: "Logistics & Quality Control",
      description:
        "Expert in container logistics and quality assurance with certifications in food safety and international standards.",
    },
    {
      name: "Yuki Tanaka",
      role: "Regional Director - Asia",
      expertise: "Asian Markets & Relationships",
      description:
        "Native Japanese speaker with deep connections to premium matcha producers and coffee growers across Asia.",
    },
    {
      name: "David Thompson",
      role: "Business Development",
      expertise: "Client Relations & Growth",
      description:
        "Specializes in building long-term partnerships with wholesale and retail clients across North America.",
    },
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "HACCP Food Safety Certification",
    "Fair Trade Certified Partner",
    "Organic Certification Support",
    "International Trade Compliance",
    "Container Security Initiative",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="from-brand-warm to-brand-warm relative overflow-hidden bg-gradient-to-br via-white py-12 sm:py-16 md:py-20">
        <div className="from-brand-primary/5 to-brand-secondary/5 absolute inset-0 bg-gradient-to-r via-transparent"></div>
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
                About
                <span className="text-brand-primary block">
                  Red Lotus International
                </span>
              </h1>
              <p className="mx-auto mb-6 max-w-4xl px-4 text-lg leading-relaxed text-gray-600 sm:mb-8 sm:px-0 sm:text-xl">
                We are passionate global trade specialists connecting the
                world's finest coffee beans and matcha tea from Japan, Vietnam,
                and China to clients worldwide. Our commitment to excellence
                drives everything we do.
              </p>
              <div className="flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4 sm:px-0">
                <InteractiveButton href="/contact" variant="primary">
                  Get in Touch
                </InteractiveButton>
                <InteractiveButton href="/services" variant="secondary">
                  Our Services
                </InteractiveButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl">
                Our Story
              </h2>
              <div className="space-y-3 text-base leading-relaxed text-gray-600 sm:space-y-4 sm:text-lg">
                <p>
                  Founded in 2015, Red Lotus International began with a simple
                  yet powerful vision: to bridge the gap between the world's
                  finest coffee and tea producers and global markets hungry for
                  premium quality.
                </p>
                <p>
                  What started as a passion project has grown into a leading
                  global trade solutions provider, specializing in
                  container-scale shipments of premium coffee beans and
                  authentic matcha tea from Japan, Vietnam, and China.
                </p>
                <p>
                  Today, we serve clients across North America, Europe, and
                  Asia, delivering excellence in every container while
                  maintaining the highest standards of quality, sustainability,
                  and customer service.
                </p>
              </div>
            </div>
            <div className="order-1 grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:order-2">
              <div className="from-brand-warm border-brand-primary/20 rounded-xl border bg-gradient-to-br to-white p-4 text-center shadow-sm sm:p-6">
                <div className="from-brand-primary to-brand-secondary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br sm:mb-4 sm:h-16 sm:w-16">
                  <Coffee className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                  Premium Coffee
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Sourced from the finest regions in Vietnam and China
                </p>
              </div>
              <div className="from-brand-warm border-brand-primary/20 rounded-xl border bg-gradient-to-br to-white p-4 text-center shadow-sm sm:p-6">
                <div className="from-brand-primary to-brand-secondary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br sm:mb-4 sm:h-16 sm:w-16">
                  <Leaf className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                  Authentic Matcha
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Traditional matcha from certified Japanese producers
                </p>
              </div>
              <div className="from-brand-warm border-brand-primary/20 rounded-xl border bg-gradient-to-br to-white p-4 text-center shadow-sm sm:p-6">
                <div className="from-brand-primary to-brand-secondary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br sm:mb-4 sm:h-16 sm:w-16">
                  <Truck className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                  Container Scale
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Large-scale shipments for wholesale distribution
                </p>
              </div>
              <div className="from-brand-warm border-brand-primary/20 rounded-xl border bg-gradient-to-br to-white p-4 text-center shadow-sm sm:p-6">
                <div className="from-brand-primary to-brand-secondary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br sm:mb-4 sm:h-16 sm:w-16">
                  <Globe className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                  Global Reach
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm">
                  Serving clients across all continents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              These core principles guide everything we do and shape our
              relationships with clients, partners, and suppliers.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="hover:border-brand-primary/30 group rounded-xl border border-gray-200 bg-white p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl sm:p-6"
                >
                  <div className="from-brand-primary to-brand-secondary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-16 sm:w-16">
                    <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="group-hover:text-brand-primary mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 sm:mb-3 sm:text-xl">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 sm:text-base">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Our experienced team of global trade specialists brings decades of
              combined expertise in coffee, tea, and international logistics.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="from-brand-warm/30 border-brand-primary/20 hover:border-brand-primary/40 group rounded-xl border bg-gradient-to-br to-white p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl sm:p-6"
              >
                <div className="from-brand-primary to-brand-secondary mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-20 sm:w-20">
                  <Users className="h-8 w-8 text-white sm:h-10 sm:w-10" />
                </div>
                <h3 className="group-hover:text-brand-primary mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 sm:text-xl">
                  {member.name}
                </h3>
                <p className="text-brand-primary mb-2 text-sm font-medium sm:text-base">
                  {member.role}
                </p>
                <p className="mb-2 text-xs text-gray-600 sm:mb-3 sm:text-sm">
                  {member.expertise}
                </p>
                <p className="text-xs text-gray-500 sm:text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Our Journey
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              From our founding to today, here are the key milestones that have
              shaped Red Lotus International.
            </p>
          </div>
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on md+ */}
            <div className="from-brand-primary to-brand-secondary absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-gradient-to-b md:block"></div>
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    // Mobile: always single column
                    "flex-col md:flex-row"
                  } ${
                    // Desktop: alternate left/right
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0
                        ? "md:pr-8 md:text-right"
                        : "md:pl-8 md:text-left"
                    }`}
                  >
                    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-6">
                      <div className="text-brand-primary mb-2 text-xl font-bold sm:text-2xl">
                        {milestone.year}
                      </div>
                      <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-gray-600 sm:text-base">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  {/* Timeline dot - centered on mobile, positioned on desktop */}
                  <div className="from-brand-primary to-brand-secondary z-10 my-4 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br shadow-lg sm:h-8 sm:w-8 md:my-0">
                    <Star className="h-3 w-3 text-white sm:h-4 sm:w-4" />
                  </div>
                  <div className="hidden w-1/2 md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Certifications & Standards
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              We maintain the highest industry standards and certifications to
              ensure quality and compliance in all our operations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="from-brand-warm/50 border-brand-primary/20 group flex items-center rounded-xl border bg-gradient-to-r to-white p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg sm:p-4"
              >
                <div className="from-brand-primary to-brand-secondary mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br transition-transform duration-300 group-hover:scale-110 sm:mr-4 sm:h-10 sm:w-10">
                  <CheckCircle className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                </div>
                <span className="group-hover:text-brand-primary text-sm font-medium text-gray-700 transition-colors duration-300 sm:text-base">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-brand-primary to-brand-secondary bg-gradient-to-r py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Ready to Partner with Us?
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-lg text-white/90 sm:mb-8 sm:text-xl">
            Join hundreds of satisfied clients who trust Red Lotus International
            for their premium coffee and tea import needs.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <CTAButton href="/contact" variant="primary">
              Start Your Partnership
            </CTAButton>
            <CTAButton href="/services" variant="secondary">
              Explore Our Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
