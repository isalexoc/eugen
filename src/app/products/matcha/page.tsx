import { CTAButton } from "@/components/ui/CTAButton";
import { InteractiveButton } from "@/components/ui/InteractiveButton";
import {
  Award,
  CheckCircle,
  Globe,
  Leaf,
  Package,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentic Matcha Tea",
  description:
    "Discover our premium matcha tea from certified Japanese producers. Traditional stone-ground processing, ceremonial grade quality, and bulk wholesale quantities available.",
};

export default function MatchaTeaPage() {
  const matchaFeatures = [
    {
      icon: Globe,
      title: "Authentic Japanese Sourcing",
      description:
        "We work directly with certified matcha producers in Japan, ensuring authentic quality and traditional processing methods.",
      features: [
        "Direct relationships with Japanese producers",
        "Traditional stone-ground processing",
        "Authentic ceremonial practices",
        "Cultural heritage preservation",
      ],
    },
    {
      icon: Shield,
      title: "Premium Quality Control",
      description:
        "Rigorous quality assessment including color grading, particle size analysis, and taste evaluation to ensure premium matcha.",
      features: [
        "Color and brightness grading",
        "Particle size analysis",
        "Taste and aroma evaluation",
        "Certificate of authenticity provided",
      ],
    },
    {
      icon: Package,
      title: "Bulk Wholesale",
      description:
        "Large-scale wholesale quantities perfect for retail distribution, cafes, and food service operations.",
      features: [
        "Bulk packaging options",
        "Custom packaging solutions",
        "Private labeling available",
        "Flexible quantity requirements",
      ],
    },
    {
      icon: Zap,
      title: "Grade Variety",
      description:
        "Multiple grade options from ceremonial to culinary grade, meeting different quality and price point requirements.",
      features: [
        "Ceremonial grade matcha",
        "Premium culinary grade",
        "Standard culinary grade",
        "Custom grade specifications",
      ],
    },
  ];

  const matchaGrades = [
    {
      name: "Ceremonial Grade",
      origin: "Uji, Kyoto, Japan",
      description:
        "The highest quality matcha reserved for traditional tea ceremonies, with vibrant green color and smooth, sweet flavor.",
      characteristics: [
        "Vibrant emerald green",
        "Sweet and smooth",
        "Fine particle size",
        "No bitterness",
      ],
      grade: "Premium",
      use: "Traditional tea ceremonies, premium beverages",
    },
    {
      name: "Premium Culinary",
      origin: "Nishio, Aichi, Japan",
      description:
        "High-quality matcha perfect for premium culinary applications, lattes, and high-end food products.",
      characteristics: [
        "Bright green color",
        "Balanced flavor",
        "Good solubility",
        "Versatile use",
      ],
      grade: "Grade A",
      use: "Premium lattes, desserts, smoothies",
    },
    {
      name: "Standard Culinary",
      origin: "Shizuoka, Japan",
      description:
        "Quality matcha suitable for general culinary use, baking, and commercial food applications.",
      characteristics: [
        "Good green color",
        "Mild flavor",
        "Cost-effective",
        "Bulk applications",
      ],
      grade: "Grade B",
      use: "Baking, commercial products, general use",
    },
    {
      name: "Organic Matcha",
      origin: "Kagoshima, Japan",
      description:
        "Certified organic matcha grown without pesticides or chemicals, maintaining traditional quality standards.",
      characteristics: [
        "Certified organic",
        "Natural farming",
        "Clean taste",
        "Sustainable practices",
      ],
      grade: "Organic",
      use: "Health-conscious consumers, organic products",
    },
  ];

  const qualityStandards = [
    {
      icon: Award,
      title: "JAS Certified",
      description:
        "Japanese Agricultural Standards certification ensuring authentic Japanese matcha quality and origin.",
    },
    {
      icon: Shield,
      title: "Organic Certified",
      description:
        "Certified organic matcha options available, grown without pesticides or synthetic fertilizers.",
    },
    {
      icon: CheckCircle,
      title: "Traditional Processing",
      description:
        "Authentic stone-ground processing methods preserving traditional Japanese matcha production techniques.",
    },
    {
      icon: Star,
      title: "Direct Trade",
      description:
        "Direct relationships with Japanese producers ensuring fair prices and authentic quality.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Tea Plant Cultivation",
      description:
        "Careful cultivation of shade-grown tea plants, with special attention to soil quality and growing conditions.",
    },
    {
      step: "02",
      title: "Shade Growing",
      description:
        "Tea plants are shaded for 3-4 weeks before harvest to increase chlorophyll and amino acid content.",
    },
    {
      step: "03",
      title: "Hand Harvesting",
      description:
        "Selective hand-picking of the youngest, most tender leaves ensuring the highest quality matcha.",
    },
    {
      step: "04",
      title: "Steaming & Drying",
      description:
        "Fresh leaves are steamed to prevent oxidation and then dried to preserve color and nutrients.",
    },
    {
      step: "05",
      title: "Stone Grinding",
      description:
        "Traditional stone grinding process creates the fine powder texture characteristic of premium matcha.",
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
                Authentic
                <span className="text-brand-primary block">Matcha Tea</span>
              </h1>
              <p className="mx-auto mb-6 max-w-4xl px-4 text-lg leading-relaxed text-gray-600 sm:mb-8 sm:px-0 sm:text-xl">
                Experience the finest authentic matcha tea from certified
                Japanese producers. Traditional stone-ground processing,
                ceremonial grade quality, and cultural heritage preserved in
                every cup.
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

      {/* Matcha Features Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Why Choose Our Matcha
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Our matcha tea represents the pinnacle of Japanese tea culture,
              combining traditional methods with modern quality standards.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {matchaFeatures.map((feature, index) => {
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

      {/* Matcha Grades Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Our Matcha Grades
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Explore our diverse selection of premium matcha grades, each
              carefully selected for specific applications and quality
              requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {matchaGrades.map((grade, index) => (
              <div
                key={index}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:p-8"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="group-hover:text-brand-primary mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 sm:text-2xl">
                      {grade.name}
                    </h3>
                    <p className="text-brand-primary text-sm font-medium sm:text-base">
                      {grade.origin}
                    </p>
                  </div>
                  <div className="from-brand-primary to-brand-secondary rounded-full bg-gradient-to-br px-3 py-1 text-xs font-semibold text-white sm:text-sm">
                    {grade.grade}
                  </div>
                </div>
                <p className="mb-4 text-sm text-gray-600 sm:text-base">
                  {grade.description}
                </p>
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">
                    Key Characteristics:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {grade.characteristics.map((characteristic, charIndex) => (
                      <span
                        key={charIndex}
                        className="from-brand-warm/50 border-brand-primary/20 rounded-md border bg-gradient-to-r to-white px-2 py-1 text-xs text-gray-700 sm:text-sm"
                      >
                        {characteristic}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">
                    Best For:
                  </h4>
                  <p className="text-sm text-gray-600">{grade.use}</p>
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
              We maintain the highest Japanese standards and certifications to
              ensure authenticity, quality, and cultural heritage in all our
              matcha products.
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
              Traditional Matcha Production
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
              Our matcha follows centuries-old Japanese traditions, from careful
              cultivation to traditional stone grinding, ensuring authentic
              quality and cultural heritage.
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
                    <Leaf className="h-3 w-3 text-white sm:h-4 sm:w-4" />
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
            Experience Authentic Japanese Matcha
          </h2>
          <p className="mx-auto mb-6 max-w-3xl text-lg text-white/90 sm:mb-8 sm:text-xl">
            Contact us today to request samples, discuss your requirements, and
            discover how our authentic matcha can enhance your business
            offerings.
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
