import { CTAButton } from "@/components/ui/CTAButton";
import { InteractiveButton } from "@/components/ui/InteractiveButton";
import {
  Award,
  CheckCircle,
  Coffee,
  Leaf,
  Package,
  Star,
  Truck,
  Users,
  Zap,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Business assessment and consulting services to help your coffee and tea business grow. Expert guidance, market analysis, and strategic planning for sustainable success.",
};

export default function ProductsPage() {
  const serviceCategories = [
    {
      icon: Coffee,
      title: "Coffee Business Assessment",
      description:
        "Comprehensive evaluation of your coffee business operations, market position, and growth opportunities",
      count: "Full Analysis",
      color: "from-brand-primary to-brand-secondary",
      features: [
        "Market positioning analysis",
        "Operational efficiency review",
        "Quality standards assessment",
        "Growth strategy development",
      ],
      link: "/services",
    },
    {
      icon: Leaf,
      title: "Tea Business Consulting",
      description:
        "Expert guidance for tea businesses including sourcing, quality control, and market expansion",
      count: "Expert Guidance",
      color: "from-brand-warm to-brand-primary",
      features: [
        "Supply chain optimization",
        "Quality control systems",
        "Market entry strategies",
        "Product development support",
      ],
      link: "/services",
    },
  ];

  const assessmentServices = [
    {
      name: "Business Health Assessment",
      type: "Comprehensive Analysis",
      duration: "2-4 weeks",
      scope: "Full Business Review",
      description:
        "Complete evaluation of your business operations, market position, and growth potential with actionable recommendations.",
      investment: "Starting at $2,500",
      rating: 4.9,
      clients: 50,
      features: [
        "Market analysis",
        "Operational review",
        "Financial assessment",
        "Growth strategy",
      ],
      icon: Award,
    },
    {
      name: "Supply Chain Optimization",
      type: "Strategic Consulting",
      duration: "3-6 weeks",
      scope: "Supply Chain Focus",
      description:
        "Expert analysis and optimization of your supply chain to improve efficiency, reduce costs, and ensure quality.",
      investment: "Starting at $3,500",
      rating: 4.8,
      clients: 35,
      features: [
        "Supplier evaluation",
        "Cost optimization",
        "Quality control",
        "Risk assessment",
      ],
      icon: Package,
    },
    {
      name: "Market Entry Strategy",
      type: "Growth Planning",
      duration: "4-8 weeks",
      scope: "Market Expansion",
      description:
        "Strategic planning and execution support for entering new markets or expanding your current market presence.",
      investment: "Starting at $4,500",
      rating: 4.7,
      clients: 28,
      features: [
        "Market research",
        "Competitive analysis",
        "Entry strategy",
        "Implementation support",
      ],
      icon: Users,
    },
  ];

  const serviceFeatures = [
    {
      icon: Award,
      title: "Expert Assessment",
      description:
        "Our team brings decades of industry experience to provide comprehensive business evaluations.",
      features: [
        "Industry expertise",
        "Comprehensive analysis",
        "Actionable insights",
        "Proven methodologies",
      ],
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description:
        "Every assessment is tailored to your specific business needs and market conditions.",
      features: [
        "Custom solutions",
        "Industry-specific insights",
        "Scalable strategies",
        "Ongoing support",
      ],
    },
    {
      icon: Package,
      title: "Detailed Reporting",
      description:
        "Receive comprehensive reports with clear recommendations and implementation roadmaps.",
      features: [
        "Executive summaries",
        "Detailed analysis",
        "Implementation plans",
        "Progress tracking",
      ],
    },
    {
      icon: Truck,
      title: "Implementation Support",
      description:
        "We don't just assess - we help you implement changes and track progress for sustainable growth.",
      features: [
        "Change management",
        "Progress monitoring",
        "Performance metrics",
        "Continuous improvement",
      ],
    },
  ];

  const assessmentStandards = [
    {
      title: "Assessment Methodology",
      description:
        "Our assessment process follows industry best practices and proven methodologies for comprehensive business evaluation.",
      standards: [
        "Structured evaluation framework",
        "Industry benchmark comparisons",
        "Data-driven analysis",
        "Actionable recommendations",
      ],
    },
    {
      title: "Quality Assurance",
      description:
        "Every assessment undergoes rigorous quality control to ensure accuracy, relevance, and practical value.",
      standards: [
        "Multi-level review process",
        "Industry expert validation",
        "Client feedback integration",
        "Continuous methodology improvement",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="from-brand-warm to-brand-warm relative overflow-hidden bg-gradient-to-br via-white py-16 sm:py-20 md:py-24">
        <div className="from-brand-primary/5 to-brand-secondary/5 absolute inset-0 bg-gradient-to-r via-transparent"></div>
        <div className="absolute inset-0">
          <div className="bg-brand-primary/10 absolute top-20 left-10 h-72 w-72 rounded-full blur-3xl"></div>
          <div className="bg-brand-secondary/10 absolute right-10 bottom-20 h-96 w-96 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:mb-8 sm:text-5xl md:text-6xl lg:text-7xl">
                Our
                <span className="text-brand-primary block">Services</span>
              </h1>
              <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600 sm:mb-12 sm:text-2xl">
                Our product is the assessment and guidance we provide to help
                your business grow. We offer comprehensive business evaluations,
                strategic consulting, and implementation support to drive
                sustainable success in the coffee and tea industry.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                <InteractiveButton href="#service-categories" variant="primary">
                  Explore Services
                </InteractiveButton>
                <InteractiveButton href="/contact" variant="secondary">
                  Get Assessment Quote
                </InteractiveButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section id="service-categories" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Service Categories
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our comprehensive assessment and consulting services are designed
              to help your business identify opportunities, optimize operations,
              and achieve sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {serviceCategories.map((category, index) => {
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                      <Image
                        src={
                          index === 0
                            ? "/images/services/coffee-business.jpg"
                            : "/images/services/tea-consulting.jpg"
                        }
                        alt={category.title}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="w-full flex-1">
                      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="group-hover:text-brand-primary mb-2 text-2xl font-bold text-gray-900 transition-colors duration-300 sm:mb-0 sm:text-3xl">
                          {category.title}
                        </h3>
                        <span className="self-start rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-600 sm:self-auto">
                          {category.count}
                        </span>
                      </div>
                      <p className="mb-4 text-base text-gray-600 sm:text-lg">
                        {category.description}
                      </p>
                      <div className="mb-6 space-y-2">
                        {category.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600 sm:text-base"
                          >
                            <CheckCircle className="text-brand-primary mr-2 h-4 w-4 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assessment Services Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Assessment Services
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our comprehensive assessment services help you understand your
              business better, identify growth opportunities, and implement
              strategic improvements.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {assessmentServices.map((service, index) => {
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="mb-4 aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={
                        index === 0
                          ? "/images/services/business-assessment.jpg"
                          : index === 1
                            ? "/images/services/supply-chain.jpg"
                            : "/images/services/market-strategy.jpg"
                      }
                      alt={service.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="group-hover:text-brand-primary text-xl font-bold text-gray-900 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <span className="bg-brand-warm/30 text-brand-primary rounded-md px-2 py-1 text-xs font-medium">
                        {service.scope}
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-gray-500">
                      {service.type} • {service.duration}
                    </p>
                    <p className="mb-3 text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(service.rating)
                                  ? "fill-current text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          {service.rating} ({service.clients} clients)
                        </span>
                      </div>
                      <span className="text-brand-primary text-xl font-bold">
                        {service.investment}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-700"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 block w-full rounded-lg bg-gradient-to-r py-3 text-center font-medium text-white transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Features Section */}
      <section className="from-brand-warm/20 bg-gradient-to-br to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Why Choose Our Services?
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              We&apos;re committed to delivering comprehensive assessments with
              actionable insights and ongoing support to help your business
              achieve sustainable growth and success.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {serviceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                    <div className="from-brand-primary to-brand-secondary flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="w-full flex-1">
                      <h3 className="group-hover:text-brand-primary mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="mb-4 text-base text-gray-600 sm:text-lg">
                        {feature.description}
                      </p>
                      <div className="space-y-2">
                        {feature.features.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center text-sm text-gray-600 sm:text-base"
                          >
                            <Zap className="text-brand-primary mr-2 h-4 w-4" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Assessment Standards Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Assessment Standards
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our commitment to excellence is reflected in the rigorous
              standards and methodologies we maintain for all our assessment and
              consulting services.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {assessmentStandards.map((standard, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="from-brand-primary to-brand-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">
                      {standard.title}
                    </h3>
                    <p className="mb-4 text-base text-gray-600 sm:text-lg">
                      {standard.description}
                    </p>
                    <ul className="space-y-2">
                      {standard.standards.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start text-sm text-gray-600 sm:text-base"
                        >
                          <CheckCircle className="text-brand-primary mt-0.5 mr-2 h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-brand-primary to-brand-secondary bg-gradient-to-r py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Ready to Grow Your Business?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 sm:mb-12">
            Get started with a comprehensive business assessment or contact us
            to discuss how we can help you achieve sustainable growth and
            success.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <CTAButton href="/contact" variant="primary">
              Get Assessment Quote
            </CTAButton>
            <CTAButton href="/services" variant="secondary">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
