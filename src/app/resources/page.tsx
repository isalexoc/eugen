import { CTAButton } from "@/components/ui/CTAButton";
import { InteractiveButton } from "@/components/ui/InteractiveButton";
import {
  BookOpen,
  Calculator,
  Download,
  FileText,
  Globe,
  Lightbulb,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trade Resources",
  description:
    "Comprehensive trade resources, guides, and tools for coffee and matcha importers. Market insights, trading guides, calculators, and educational materials.",
};

export default function TradeResourcesPage() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "Trading Guides",
      description:
        "Comprehensive guides covering all aspects of coffee and matcha trading",
      count: "12 Guides",
      color: "from-brand-primary to-brand-secondary",
      items: [
        "Import Documentation Guide",
        "Quality Standards Overview",
        "Pricing and Negotiation Tips",
        "Shipping and Logistics Guide",
      ],
    },
    {
      icon: Calculator,
      title: "Trading Tools",
      description: "Essential calculators and tools for trade calculations",
      count: "8 Tools",
      color: "from-brand-warm to-brand-primary",
      items: [
        "Container Cost Calculator",
        "Import Duty Calculator",
        "Quality Grade Converter",
        "Shipping Cost Estimator",
      ],
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description: "Latest market trends and price analysis",
      count: "Monthly Reports",
      color: "from-brand-secondary to-brand-warm",
      items: [
        "Coffee Market Trends",
        "Matcha Price Analysis",
        "Seasonal Availability",
        "Regional Market Reports",
      ],
    },
    {
      icon: Users,
      title: "Supplier Directory",
      description: "Verified suppliers and producer networks",
      count: "200+ Suppliers",
      color: "from-brand-primary to-brand-warm",
      items: [
        "Certified Coffee Farms",
        "Matcha Producers",
        "Quality Certifications",
        "Contact Information",
      ],
    },
  ];

  const featuredGuides = [
    {
      title: "Complete Coffee Import Guide",
      description:
        "Everything you need to know about importing coffee beans, from sourcing to delivery.",
      topics: ["Sourcing", "Quality Control", "Documentation", "Shipping"],
      difficulty: "Beginner",
      readTime: "15 min read",
      downloads: "2.3k",
    },
    {
      title: "Matcha Quality Assessment",
      description:
        "Learn how to evaluate matcha quality and understand different grades and characteristics.",
      topics: ["Quality Grades", "Taste Testing", "Color Analysis", "Pricing"],
      difficulty: "Intermediate",
      readTime: "12 min read",
      downloads: "1.8k",
    },
    {
      title: "International Trade Documentation",
      description:
        "Complete guide to all required documents for international coffee and tea trade.",
      topics: ["Certificates", "Customs", "Inspection", "Compliance"],
      difficulty: "Advanced",
      readTime: "20 min read",
      downloads: "3.1k",
    },
  ];

  const tradingTools = [
    {
      icon: Calculator,
      title: "Container Cost Calculator",
      description:
        "Calculate total costs for container shipments including freight, duties, and handling fees.",
      features: [
        "Freight costs",
        "Import duties",
        "Handling fees",
        "Total cost breakdown",
      ],
    },
    {
      icon: TrendingUp,
      title: "Price Trend Analyzer",
      description:
        "Analyze historical price trends and predict future market movements.",
      features: [
        "Historical data",
        "Trend analysis",
        "Price predictions",
        "Market alerts",
      ],
    },
    {
      icon: Globe,
      title: "Origin Quality Map",
      description:
        "Interactive map showing quality characteristics of different coffee and matcha origins.",
      features: [
        "Origin details",
        "Quality profiles",
        "Seasonal availability",
        "Producer info",
      ],
    },
    {
      icon: FileText,
      title: "Documentation Generator",
      description:
        "Generate all required trade documents with our automated system.",
      features: [
        "Invoice generation",
        "Certificate creation",
        "Customs forms",
        "Compliance check",
      ],
    },
  ];

  const marketInsights = [
    {
      title: "Coffee Market Update",
      date: "December 2024",
      summary:
        "Vietnamese coffee prices show strong upward trend due to weather concerns and increased demand.",
      keyPoints: [
        "Robusta prices up 15% this quarter",
        "Weather concerns in Central Highlands",
        "Increased demand from European markets",
        "Supply chain disruptions easing",
      ],
      impact: "Positive for producers, challenging for buyers",
    },
    {
      title: "Matcha Market Analysis",
      date: "December 2024",
      summary:
        "Japanese matcha market remains stable with premium grades showing consistent demand.",
      keyPoints: [
        "Ceremonial grade demand steady",
        "Organic matcha gaining popularity",
        "New processing techniques emerging",
        "Export volumes increasing",
      ],
      impact: "Stable market with growth opportunities",
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
                Trade
                <span className="text-brand-primary block">Resources</span>
              </h1>
              <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600 sm:mb-12 sm:text-2xl">
                Your comprehensive toolkit for coffee and matcha trading
                success. Access guides, tools, market insights, and expert
                knowledge to elevate your trade operations.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                <InteractiveButton href="#resources" variant="primary">
                  Explore Resources
                </InteractiveButton>
                <InteractiveButton href="/contact" variant="secondary">
                  Get Expert Advice
                </InteractiveButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      <section id="resources" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Resource Categories
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Everything you need for successful coffee and matcha trading,
              organized by category for easy access.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                    <div
                      className={`h-12 w-12 bg-gradient-to-r sm:h-16 sm:w-16 ${category.color} flex flex-shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                    </div>
                    <div className="w-full flex-1">
                      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="group-hover:text-brand-primary mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 sm:mb-0 sm:text-2xl">
                          {category.title}
                        </h3>
                        <span className="self-start rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 sm:self-auto sm:text-sm">
                          {category.count}
                        </span>
                      </div>
                      <p className="mb-4 text-base text-gray-600 sm:text-lg">
                        {category.description}
                      </p>
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-center text-sm text-gray-600 sm:text-base"
                          >
                            <div className="bg-brand-primary mr-3 h-2 w-2 flex-shrink-0 rounded-full"></div>
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

      {/* Featured Guides Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Featured Trading Guides
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our most popular and comprehensive guides to help you master
              coffee and matcha trading.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredGuides.map((guide, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      guide.difficulty === "Beginner"
                        ? "bg-green-100 text-green-800"
                        : guide.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {guide.difficulty}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Download className="mr-1 h-4 w-4" />
                    {guide.downloads}
                  </div>
                </div>
                <h3 className="group-hover:text-brand-primary mb-3 text-xl font-bold text-gray-900 transition-colors duration-300">
                  {guide.title}
                </h3>
                <p className="mb-4 text-gray-600">{guide.description}</p>
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-semibold text-gray-900">
                    Topics Covered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {guide.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="bg-brand-warm/30 text-brand-primary rounded-md px-2 py-1 text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {guide.readTime}
                  </span>
                  <button className="from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 rounded-lg bg-gradient-to-r px-4 py-2 text-sm font-medium text-white transition-all duration-300">
                    Download Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Tools Section */}
      <section className="from-brand-warm/20 bg-gradient-to-br to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Trading Tools & Calculators
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Essential tools and calculators to streamline your trading
              operations and make informed decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {tradingTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                    <div className="from-brand-primary to-brand-secondary flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                      <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                    </div>
                    <div className="w-full flex-1">
                      <h3 className="group-hover:text-brand-primary mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 sm:text-2xl">
                        {tool.title}
                      </h3>
                      <p className="mb-4 text-base text-gray-600 sm:text-lg">
                        {tool.description}
                      </p>
                      <div className="mb-6 space-y-2">
                        {tool.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600 sm:text-base"
                          >
                            <Zap className="text-brand-primary mr-2 h-4 w-4" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <button className="from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 w-full rounded-lg bg-gradient-to-r px-4 py-2 text-sm font-medium text-white transition-all duration-300 sm:w-auto sm:px-6 sm:py-3 sm:text-base">
                        Access Tool
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Market Insights & Analysis
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Stay informed with the latest market trends, price analysis, and
              industry insights from our expert team.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {marketInsights.map((insight, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 sm:mb-0 sm:text-2xl">
                    {insight.title}
                  </h3>
                  <span className="bg-brand-warm/30 text-brand-primary self-start rounded-full px-3 py-1 text-xs font-medium sm:self-auto sm:text-sm">
                    {insight.date}
                  </span>
                </div>
                <p className="mb-6 text-base text-gray-600 sm:text-lg">
                  {insight.summary}
                </p>
                <div className="mb-6">
                  <h4 className="mb-3 text-base font-semibold text-gray-900 sm:text-lg">
                    Key Points:
                  </h4>
                  <ul className="space-y-2">
                    {insight.keyPoints.map((point, pointIndex) => (
                      <li
                        key={pointIndex}
                        className="flex items-start text-sm text-gray-600 sm:text-base"
                      >
                        <Lightbulb className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-yellow-500 sm:h-5 sm:w-5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="from-brand-warm/20 to-brand-warm/10 rounded-lg bg-gradient-to-r p-3 sm:p-4">
                  <h4 className="mb-1 text-xs font-semibold text-gray-900 sm:text-sm">
                    Market Impact:
                  </h4>
                  <p className="text-sm font-medium text-gray-700 sm:text-base">
                    {insight.impact}
                  </p>
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
            Ready to Elevate Your Trading?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 sm:mb-12">
            Access our complete resource library, get personalized trading
            advice, and join our community of successful traders.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <CTAButton href="/contact" variant="primary">
              Get Trading Consultation
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
