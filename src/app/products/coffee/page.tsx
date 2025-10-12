import { CTAButton } from "@/components/ui/CTAButton";
import { InteractiveButton } from "@/components/ui/InteractiveButton";
import {
  Award,
  CheckCircle,
  Coffee,
  Globe,
  Package,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Coffee Beans",
  description:
    "Discover our premium coffee beans from Vietnam and China. Container-scale imports with rigorous quality control, direct sourcing from certified farms, and custom roasting profiles available.",
};

export default function CoffeeBeansPage() {
  const coffeeFeatures = [
    {
      icon: Globe,
      title: "Direct Sourcing",
      description:
        "We work directly with certified coffee farms in Vietnam and China, ensuring the highest quality beans and fair trade practices.",
      features: [
        "Direct relationships with coffee farmers",
        "Fair trade and sustainable practices",
        "Seasonal availability and freshness",
        "Transparent supply chain",
      ],
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes including cupping tests, moisture analysis, and defect screening to ensure premium quality.",
      features: [
        "Professional cupping and tasting",
        "Moisture content analysis",
        "Defect screening and grading",
        "Certificate of analysis provided",
      ],
    },
    {
      icon: Package,
      title: "Container Scale",
      description:
        "Large-scale shipments in 20ft and 40ft containers, perfect for wholesale distribution and retail operations.",
      features: [
        "20ft and 40ft container options",
        "Bulk packaging solutions",
        "Custom packaging available",
        "Private labeling options",
      ],
    },
    {
      icon: Zap,
      title: "Custom Roasting",
      description:
        "Flexible roasting profiles to meet your specific requirements, from light to dark roasts and specialty blends.",
      features: [
        "Custom roast profiles",
        "Light, medium, and dark roasts",
        "Specialty blend development",
        "Consistent quality control",
      ],
    },
  ];

  const coffeeVarieties = [
    {
      name: "Vietnamese Robusta",
      origin: "Central Highlands, Vietnam",
      description:
        "High-quality Robusta beans with bold flavor and excellent crema formation, perfect for espresso blends.",
      characteristics: [
        "Bold and full-bodied",
        "High caffeine content",
        "Excellent crema",
        "Chocolate notes",
      ],
      grade: "Grade 1",
    },
    {
      name: "Vietnamese Arabica",
      origin: "Da Lat, Vietnam",
      description:
        "Premium Arabica beans grown at high altitude with smooth, balanced flavor profile and floral notes.",
      characteristics: [
        "Smooth and balanced",
        "Floral and fruity notes",
        "Medium acidity",
        "Clean finish",
      ],
      grade: "Grade A",
    },
    {
      name: "Chinese Yunnan",
      origin: "Yunnan Province, China",
      description:
        "Unique Chinese coffee beans with distinctive flavor profile, combining traditional and modern processing methods.",
      characteristics: [
        "Unique flavor profile",
        "Spicy and earthy notes",
        "Medium body",
        "Distinctive aroma",
      ],
      grade: "Premium",
    },
    {
      name: "Vietnamese Catimor",
      origin: "Buon Ma Thuot, Vietnam",
      description:
        "Hybrid variety combining the best of Arabica and Robusta, offering disease resistance and excellent cup quality.",
      characteristics: [
        "Disease resistant",
        "Balanced flavor",
        "Good body",
        "Versatile brewing",
      ],
      grade: "Grade A",
    },
  ];

  const qualityStandards = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description:
        "International quality management system ensuring consistent processes and continuous improvement.",
    },
    {
      icon: Shield,
      title: "HACCP Certified",
      description:
        "Hazard Analysis Critical Control Points certification for food safety and quality assurance.",
    },
    {
      icon: CheckCircle,
      title: "SCA Standards",
      description:
        "Specialty Coffee Association standards for grading, cupping, and quality assessment.",
    },
    {
      icon: Star,
      title: "Direct Trade",
      description:
        "Direct relationships with farmers ensuring fair prices and sustainable farming practices.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Farm Selection",
      description:
        "We carefully select certified farms based on quality, sustainability practices, and direct trade relationships.",
    },
    {
      step: "02",
      title: "Harvest & Processing",
      description:
        "Coffee cherries are harvested at optimal ripeness and processed using traditional and modern methods.",
    },
    {
      step: "03",
      title: "Quality Testing",
      description:
        "Rigorous cupping tests, moisture analysis, and defect screening ensure only premium beans are selected.",
    },
    {
      step: "04",
      title: "Packaging & Shipping",
      description:
        "Carefully packaged in food-grade containers and shipped with temperature and humidity control.",
    },
    {
      step: "05",
      title: "Custom Roasting",
      description:
        "Optional custom roasting to your specifications, from light to dark roasts and specialty blends.",
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
                Premium
                <span className="text-brand-primary block">Coffee Beans</span>
              </h1>
              <p className="mx-auto mb-6 max-w-4xl px-4 text-lg leading-relaxed text-gray-600 sm:mb-8 sm:px-0 sm:text-xl">
                Discover our exceptional coffee beans sourced directly from
                certified farms in Vietnam and China. From harvest to cup, we
                ensure the highest quality through rigorous testing, sustainable
                practices, and custom roasting options.
              </p>
              <div className="flex flex-col justify-center gap-3 px-4 sm:flex-row sm:gap-4 sm:px-0">
                <InteractiveButton href="/contact" variant="primary">
                  Request Samples
                </InteractiveButton>
                <InteractiveButton href="/services" variant="secondary">
                  View Our Services
                </InteractiveButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Features Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Why Choose Our Coffee
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Our coffee beans are carefully selected and processed to deliver
              exceptional quality, flavor, and consistency for your business
              needs.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {coffeeFeatures.map((feature, index) => {
              const Icon = feature.icon;
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
                        {feature.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600 sm:text-base">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.features.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-center text-sm text-gray-600 sm:text-base"
                          >
                            <CheckCircle className="text-brand-primary mr-2 h-4 w-4 flex-shrink-0" />
                            {item}
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

      {/* Coffee Varieties Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Our Coffee Varieties
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Explore our diverse selection of premium coffee beans, each with
              unique flavor profiles and characteristics from different regions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {coffeeVarieties.map((variety, index) => (
              <div
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:p-8"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="group-hover:text-brand-primary mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 sm:text-2xl">
                      {variety.name}
                    </h3>
                    <p className="text-brand-primary text-sm font-medium sm:text-base">
                      {variety.origin}
                    </p>
                  </div>
                  <div className="from-brand-primary to-brand-secondary rounded-full bg-gradient-to-br px-3 py-1 text-xs font-semibold text-white sm:text-sm">
                    {variety.grade}
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-600 sm:text-base">
                  {variety.description}
                </p>
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">
                    Key Characteristics:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {variety.characteristics.map(
                      (characteristic, charIndex) => (
                        <span
                          key={charIndex}
                          className="from-brand-warm/50 border-brand-primary/20 rounded-md border bg-gradient-to-r to-white px-2 py-1 text-xs text-gray-700 sm:text-sm"
                        >
                          {characteristic}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Quality Standards & Certifications
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              We maintain the highest industry standards and certifications to
              ensure quality, safety, and sustainability in all our coffee
              operations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {qualityStandards.map((standard, index) => {
              const Icon = standard.icon;
              return (
                <div
                  key={index}
                  className="from-brand-warm/30 border-brand-primary/20 hover:border-brand-primary/40 group rounded-xl border bg-gradient-to-br to-white p-4 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl sm:p-6"
                >
                  <div className="from-brand-primary to-brand-secondary mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110 sm:mb-4 sm:h-16 sm:w-16">
                    <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="group-hover:text-brand-primary mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 sm:mb-3 sm:text-xl">
                    {standard.title}
                  </h3>
                  <p className="text-sm text-gray-600 sm:text-base">
                    {standard.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              From Farm to Cup
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Our comprehensive process ensures the highest quality coffee
              beans, from careful farm selection to custom roasting and
              delivery.
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
                    <Coffee className="h-3 w-3 text-white sm:h-4 sm:w-4" />
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
            Ready to Experience Premium Coffee?
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-lg text-white/90 sm:mb-8 sm:text-xl">
            Contact us today to request samples, discuss your requirements, and
            discover how our premium coffee beans can elevate your business.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <CTAButton href="/contact" variant="primary">
              Request Samples
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
