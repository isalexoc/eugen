import { CTAButton } from "@/components/ui/CTAButton";
import { InteractiveButton } from "@/components/ui/InteractiveButton";
import {
  Award,
  CheckCircle,
  Coffee,
  Globe,
  Leaf,
  Package,
  Shield,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive global trade solutions for premium coffee beans and matcha tea. Container-scale shipments, quality assurance, and logistics expertise from Red Lotus International.",
};

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Coffee,
      title: "Premium Coffee Import",
      description:
        "Container-scale imports of premium coffee beans from Vietnam and China, ensuring the highest quality and freshness.",
      features: [
        "Direct sourcing from certified farms",
        "Quality control and cupping tests",
        "Container-scale shipments (20ft/40ft)",
        "Custom roasting profiles available",
      ],
    },
    {
      icon: Leaf,
      title: "Authentic Matcha Tea",
      description:
        "Traditional Japanese matcha tea from certified producers, maintaining authentic quality and cultural heritage.",
      features: [
        "Certified organic matcha suppliers",
        "Traditional stone-ground processing",
        "Grade A ceremonial quality",
        "Bulk wholesale quantities",
      ],
    },
    {
      icon: Truck,
      title: "Global Logistics",
      description:
        "End-to-end logistics solutions for international trade, from origin to destination with full tracking.",
      features: [
        "Ocean freight coordination",
        "Customs clearance assistance",
        "Real-time shipment tracking",
        "Door-to-door delivery",
      ],
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes ensuring every shipment meets international standards and exceeds expectations.",
      features: [
        "ISO 9001:2015 certified processes",
        "HACCP food safety compliance",
        "Third-party quality inspections",
        "Certificate of analysis provided",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Package,
      title: "Custom Packaging",
      description:
        "Tailored packaging solutions for retail and wholesale distribution, including private labeling options.",
    },
    {
      icon: Globe,
      title: "Market Research",
      description:
        "Comprehensive market analysis and sourcing intelligence to help you make informed business decisions.",
    },
    {
      icon: Users,
      title: "Supplier Network",
      description:
        "Access to our extensive network of verified suppliers across Asia-Pacific regions.",
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description:
        "Expedited processing and shipping options for urgent orders and time-sensitive deliveries.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We discuss your specific requirements, quality standards, and delivery timelines to understand your needs.",
    },
    {
      step: "02",
      title: "Sourcing",
      description:
        "Our team identifies and evaluates suppliers, conducts quality assessments, and negotiates the best terms.",
    },
    {
      step: "03",
      title: "Quality Control",
      description:
        "Rigorous testing and inspection processes ensure every product meets your specifications and standards.",
    },
    {
      step: "04",
      title: "Logistics",
      description:
        "We coordinate shipping, handle customs clearance, and provide real-time tracking throughout the journey.",
    },
    {
      step: "05",
      title: "Delivery",
      description:
        "Your products arrive at your specified location with all necessary documentation and certificates.",
    },
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
                Our
                <span className="text-brand-primary block">Services</span>
              </h1>
              <p className="mx-auto mb-6 max-w-4xl px-4 text-lg leading-relaxed text-gray-600 sm:mb-8 sm:px-0 sm:text-xl">
                Comprehensive global trade solutions for premium coffee beans
                and matcha tea. From sourcing to delivery, we provide end-to-end
                services that ensure quality, reliability, and customer
                satisfaction.
              </p>
              <div className="flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4 sm:px-0">
                <InteractiveButton href="/contact" variant="primary">
                  Get a Quote
                </InteractiveButton>
                <InteractiveButton href="/about" variant="secondary">
                  Learn About Us
                </InteractiveButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Core Services
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Our primary services focus on premium coffee and matcha imports
              with comprehensive logistics and quality assurance support.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="from-brand-warm/30 border-brand-primary/20 group rounded-xl border bg-gradient-to-br to-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="from-brand-primary to-brand-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                      <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="group-hover:text-brand-primary mb-3 text-xl font-semibold text-gray-900 transition-colors duration-300 sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600 sm:text-base">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600 sm:text-base"
                          >
                            <CheckCircle className="text-brand-primary mr-2 h-4 w-4 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Additional Services
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Beyond our core offerings, we provide comprehensive support
              services to ensure your business success.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="hover:border-brand-primary/30 group rounded-xl border border-gray-200 bg-white p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl sm:p-6"
                >
                  <div className="from-brand-primary to-brand-secondary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-16 sm:w-16">
                    <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="group-hover:text-brand-primary mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 sm:mb-3 sm:text-xl">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 sm:text-base">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Our Process
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              From initial consultation to final delivery, we follow a proven
              process that ensures quality, transparency, and customer
              satisfaction.
            </p>
          </div>
          <div className="relative">
            {/* Process line - hidden on mobile, visible on md+ */}
            <div className="from-brand-primary to-brand-secondary absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-gradient-to-b md:block"></div>
            <div className="space-y-8 sm:space-y-12">
              {processSteps.map((step, index) => (
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
                    <div className="from-brand-warm/30 border-brand-primary/20 rounded-xl border bg-gradient-to-br to-white p-4 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-6">
                      <div className="text-brand-primary mb-2 text-2xl font-bold sm:text-3xl">
                        {step.step}
                      </div>
                      <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {/* Process dot - centered on mobile, positioned on desktop */}
                  <div className="from-brand-primary to-brand-secondary z-10 my-4 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br shadow-lg sm:h-8 sm:w-8 md:my-0">
                    <Award className="h-3 w-3 text-white sm:h-4 sm:w-4" />
                  </div>
                  <div className="hidden w-1/2 md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-brand-primary to-brand-secondary bg-gradient-to-r py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Ready to Start Your Import Journey?
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-lg text-white/90 sm:mb-8 sm:text-xl">
            Let us help you source the finest coffee beans and matcha tea with
            our comprehensive trade solutions and expert support.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <CTAButton href="/contact" variant="primary">
              Request a Quote
            </CTAButton>
            <CTAButton href="/about" variant="secondary">
              Learn More About Us
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
