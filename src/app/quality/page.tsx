import { CTAButton } from "@/components/ui/CTAButton";
import { InteractiveButton } from "@/components/ui/InteractiveButton";
import {
  Award,
  CheckCircle,
  FileText,
  Microscope,
  Shield,
  Star,
  Target,
  TestTube,
  Users,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "Comprehensive quality assurance and control processes for premium coffee beans and matcha tea. ISO 9001:2015 certified, HACCP compliance, and rigorous testing standards.",
};

export default function QualityAssurancePage() {
  const qualityPillars = [
    {
      icon: Shield,
      title: "Food Safety Standards",
      description:
        "Rigorous food safety protocols ensuring all products meet international standards for human consumption and quality.",
      features: [
        "HACCP certified processes",
        "Food safety management systems",
        "Contamination prevention protocols",
        "Temperature and humidity control",
      ],
    },
    {
      icon: TestTube,
      title: "Laboratory Testing",
      description:
        "Comprehensive laboratory analysis including chemical composition, microbiological testing, and quality assessment.",
      features: [
        "Chemical composition analysis",
        "Microbiological testing",
        "Pesticide residue screening",
        "Heavy metal detection",
      ],
    },
    {
      icon: Target,
      title: "Quality Control",
      description:
        "Multi-stage quality control processes from raw material inspection to final product verification.",
      features: [
        "Raw material inspection",
        "In-process quality checks",
        "Final product verification",
        "Batch traceability systems",
      ],
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Dedicated quality assurance team with extensive experience in food safety and international standards.",
      features: [
        "Certified quality professionals",
        "International standards expertise",
        "Continuous training programs",
        "Industry best practices",
      ],
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      organization: "International Organization for Standardization",
      description:
        "Quality management system ensuring consistent processes, continuous improvement, and customer satisfaction.",
      scope: "Quality Management System",
      validity: "Annual surveillance audits",
    },
    {
      name: "HACCP",
      organization: "Hazard Analysis Critical Control Points",
      description:
        "Food safety management system identifying and controlling hazards throughout the food production process.",
      scope: "Food Safety Management",
      validity: "Annual certification renewal",
    },
    {
      name: "SCA Standards",
      organization: "Specialty Coffee Association",
      description:
        "Specialty coffee standards for grading, cupping, and quality assessment ensuring premium coffee quality.",
      scope: "Coffee Quality Standards",
      validity: "Continuous compliance",
    },
    {
      name: "JAS Certification",
      organization: "Japanese Agricultural Standards",
      description:
        "Japanese standards for agricultural products ensuring authentic matcha quality and traditional processing.",
      scope: "Japanese Matcha Standards",
      validity: "Annual certification renewal",
    },
  ];

  const testingMethods = [
    {
      icon: Microscope,
      title: "Microbiological Analysis",
      description:
        "Comprehensive testing for bacteria, yeast, mold, and other microorganisms to ensure food safety.",
      tests: [
        "Total plate count",
        "Yeast and mold count",
        "Pathogen screening",
        "Shelf life testing",
      ],
    },
    {
      icon: TestTube,
      title: "Chemical Analysis",
      description:
        "Detailed chemical composition analysis including nutrients, contaminants, and quality indicators.",
      tests: [
        "Moisture content",
        "Caffeine levels",
        "Antioxidant content",
        "Pesticide residues",
      ],
    },
    {
      icon: FileText,
      title: "Physical Testing",
      description:
        "Physical property assessment including particle size, color, texture, and appearance evaluation.",
      tests: [
        "Particle size distribution",
        "Color analysis",
        "Texture evaluation",
        "Defect screening",
      ],
    },
    {
      icon: Star,
      title: "Sensory Evaluation",
      description:
        "Professional cupping and tasting sessions to assess flavor, aroma, and overall quality characteristics.",
      tests: [
        "Professional cupping",
        "Aroma evaluation",
        "Flavor profiling",
        "Quality scoring",
      ],
    },
  ];

  const qualityProcess = [
    {
      step: "01",
      title: "Supplier Qualification",
      description:
        "Rigorous evaluation of suppliers including facility audits, quality systems review, and certification verification.",
    },
    {
      step: "02",
      title: "Raw Material Testing",
      description:
        "Comprehensive testing of incoming raw materials including chemical, microbiological, and physical analysis.",
    },
    {
      step: "03",
      title: "Process Control",
      description:
        "Continuous monitoring and control of production processes to ensure consistent quality and safety standards.",
    },
    {
      step: "04",
      title: "Final Product Testing",
      description:
        "Thorough testing of finished products including quality assessment, safety verification, and compliance checking.",
    },
    {
      step: "05",
      title: "Documentation & Traceability",
      description:
        "Complete documentation of all quality processes and full traceability from source to final product delivery.",
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
                Quality
                <span className="text-brand-primary block">Assurance</span>
              </h1>
              <p className="mx-auto mb-6 max-w-4xl px-4 text-lg leading-relaxed text-gray-600 sm:mb-8 sm:px-0 sm:text-xl">
                Our comprehensive quality assurance program ensures the highest
                standards for all our products. From ISO 9001:2015 certification
                to rigorous testing protocols, we maintain excellence in every
                aspect of our operations.
              </p>
              <div className="flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4 sm:px-0">
                <InteractiveButton href="/contact" variant="primary">
                  Request Certificates
                </InteractiveButton>
                <InteractiveButton href="/services" variant="secondary">
                  View Our Services
                </InteractiveButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Pillars Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Our Quality Pillars
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Our quality assurance program is built on four fundamental
              pillars, ensuring excellence in every aspect of our operations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {qualityPillars.map((pillar, index) => {
              const Icon = pillar.icon;
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
                        {pillar.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600 sm:text-base">
                        {pillar.description}
                      </p>
                      <ul className="space-y-2">
                        {pillar.features.map((feature, featureIndex) => (
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

      {/* Certifications Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Certifications & Standards
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              We maintain the highest industry certifications and standards,
              ensuring compliance with international quality and safety
              requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:p-8"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="group-hover:text-brand-primary mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 sm:text-2xl">
                      {cert.name}
                    </h3>
                    <p className="text-brand-primary text-sm font-medium sm:text-base">
                      {cert.organization}
                    </p>
                  </div>
                  <div className="from-brand-primary to-brand-secondary rounded-full bg-gradient-to-br px-3 py-1 text-xs font-semibold text-white sm:text-sm">
                    Certified
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-600 sm:text-base">
                  {cert.description}
                </p>
                <div className="space-y-2">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Scope:
                    </h4>
                    <p className="text-sm text-gray-600">{cert.scope}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Validity:
                    </h4>
                    <p className="text-sm text-gray-600">{cert.validity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Methods Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Testing Methods & Analysis
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Our comprehensive testing program covers all aspects of quality
              assessment, from microbiological safety to sensory evaluation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {testingMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="from-brand-warm/30 border-brand-primary/20 hover:border-brand-primary/40 group rounded-xl border bg-gradient-to-br to-white p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl sm:p-6"
                >
                  <div className="from-brand-primary to-brand-secondary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-16 sm:w-16">
                    <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="group-hover:text-brand-primary mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 sm:mb-3 sm:text-xl">
                    {method.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 sm:text-base">
                    {method.description}
                  </p>
                  <div className="space-y-1">
                    {method.tests.map((test, testIndex) => (
                      <div
                        key={testIndex}
                        className="text-xs text-gray-500 sm:text-sm"
                      >
                        • {test}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Process Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Our Quality Process
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              From supplier qualification to final delivery, our comprehensive
              quality process ensures excellence at every stage of production.
            </p>
          </div>
          <div className="relative">
            {/* Process line - hidden on mobile, visible on md+ */}
            <div className="from-brand-primary to-brand-secondary absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform bg-gradient-to-b md:block"></div>
            <div className="space-y-8 sm:space-y-12">
              {qualityProcess.map((step, index) => (
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
            Committed to Quality Excellence
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-lg text-white/90 sm:mb-8 sm:text-xl">
            Contact us today to learn more about our quality assurance program,
            request certificates, or discuss your specific quality requirements.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <CTAButton href="/contact" variant="primary">
              Request Certificates
            </CTAButton>
            <CTAButton href="/services" variant="secondary">
              View Our Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
