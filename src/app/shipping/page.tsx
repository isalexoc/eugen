import { CTAButton } from "@/components/ui/CTAButton";
import { InteractiveButton } from "@/components/ui/InteractiveButton";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Globe,
  Info,
  MapPin,
  Package,
  Shield,
  Truck,
  Zap,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Information",
  description:
    "Comprehensive shipping information for coffee and matcha orders. Shipping methods, rates, tracking, and delivery policies for international and domestic shipments.",
};

export default function ShippingInfoPage() {
  const shippingMethods = [
    {
      icon: Truck,
      title: "Standard Shipping",
      description:
        "Reliable ground shipping for domestic orders and standard international delivery.",
      duration: "5-7 business days",
      coverage: "Domestic & International",
      features: [
        "Trackable shipments",
        "Insurance included",
        "Standard packaging",
        "Delivery confirmation",
      ],
      color: "from-brand-primary to-brand-secondary",
    },
    {
      icon: Zap,
      title: "Express Shipping",
      description:
        "Fast delivery for urgent orders with priority handling and expedited processing.",
      duration: "2-3 business days",
      coverage: "Domestic & International",
      features: [
        "Priority handling",
        "Express packaging",
        "Real-time tracking",
        "Guaranteed delivery",
      ],
      color: "from-brand-warm to-brand-primary",
    },
    {
      icon: Globe,
      title: "International Shipping",
      description:
        "Specialized international shipping with customs handling and documentation.",
      duration: "7-14 business days",
      coverage: "Worldwide",
      features: [
        "Customs documentation",
        "Duty calculation",
        "International tracking",
        "Compliance handling",
      ],
      color: "from-brand-secondary to-brand-warm",
    },
    {
      icon: Package,
      title: "Bulk Shipping",
      description:
        "Economical shipping for large orders and wholesale customers with volume discounts.",
      duration: "10-15 business days",
      coverage: "Domestic & International",
      features: [
        "Volume discounts",
        "Pallet shipping",
        "Bulk packaging",
        "Dedicated support",
      ],
      color: "from-brand-primary to-brand-warm",
    },
  ];

  const shippingRates = [
    {
      region: "Domestic (US)",
      standard: "$8.99",
      express: "$19.99",
      freeThreshold: "$75+",
      notes: "Free standard shipping on orders over $75",
    },
    {
      region: "Canada",
      standard: "$15.99",
      express: "$29.99",
      freeThreshold: "$150+",
      notes: "Free standard shipping on orders over $150",
    },
    {
      region: "Europe",
      standard: "$24.99",
      express: "$39.99",
      freeThreshold: "$200+",
      notes: "Free standard shipping on orders over $200",
    },
    {
      region: "Asia Pacific",
      standard: "$19.99",
      express: "$34.99",
      freeThreshold: "$175+",
      notes: "Free standard shipping on orders over $175",
    },
    {
      region: "Rest of World",
      standard: "$29.99",
      express: "$49.99",
      freeThreshold: "$250+",
      notes: "Free standard shipping on orders over $250",
    },
  ];

  const trackingFeatures = [
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description:
        "Track your shipment from warehouse to delivery with detailed location updates.",
      features: [
        "Live location updates",
        "Delivery notifications",
        "Estimated arrival times",
        "Route optimization",
      ],
    },
    {
      icon: Shield,
      title: "Secure Delivery",
      description:
        "Your orders are protected with comprehensive insurance and secure handling.",
      features: [
        "Full insurance coverage",
        "Secure packaging",
        "Signature confirmation",
        "Damage protection",
      ],
    },
    {
      icon: Clock,
      title: "Delivery Scheduling",
      description:
        "Schedule deliveries at your convenience with flexible time slots.",
      features: [
        "Flexible scheduling",
        "Delivery windows",
        "Reschedule options",
        "Special instructions",
      ],
    },
    {
      icon: AlertCircle,
      title: "Delivery Alerts",
      description:
        "Stay informed with proactive notifications about your shipment status.",
      features: [
        "SMS notifications",
        "Email updates",
        "App notifications",
        "Status changes",
      ],
    },
  ];

  const shippingPolicies = [
    {
      title: "Processing Time",
      description:
        "Orders are typically processed within 1-2 business days. During peak seasons, processing may take up to 3 business days.",
      details: [
        "Orders placed before 2 PM EST ship same day",
        "Weekend orders ship on Monday",
        "Holiday processing times may vary",
        "Custom orders may require additional time",
      ],
    },
    {
      title: "Delivery Areas",
      description:
        "We ship to most countries worldwide with some restrictions on certain products and destinations.",
      details: [
        "Worldwide shipping available",
        "Some restrictions may apply",
        "Remote areas may have extended delivery times",
        "Customs duties may apply for international orders",
      ],
    },
    {
      title: "Packaging & Handling",
      description:
        "All products are carefully packaged to maintain quality and freshness during transit.",
      details: [
        "Temperature-controlled packaging for perishables",
        "Fragile items specially protected",
        "Eco-friendly packaging materials",
        "Quality seals and freshness indicators",
      ],
    },
    {
      title: "Returns & Exchanges",
      description:
        "We offer hassle-free returns and exchanges for damaged or incorrect items.",
      details: [
        "30-day return policy",
        "Free return shipping for damaged items",
        "Exchange for incorrect items",
        "Quality guarantee on all products",
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
                Shipping
                <span className="text-brand-primary block">Information</span>
              </h1>
              <p className="mx-auto mb-8 max-w-4xl text-xl leading-relaxed text-gray-600 sm:mb-12 sm:text-2xl">
                Fast, reliable, and secure shipping worldwide. Get your premium
                coffee and matcha delivered fresh with our comprehensive
                shipping solutions and tracking services.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                <InteractiveButton href="#shipping-methods" variant="primary">
                  View Shipping Options
                </InteractiveButton>
                <InteractiveButton href="/contact" variant="secondary">
                  Get Shipping Quote
                </InteractiveButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Methods Section */}
      <section id="shipping-methods" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Shipping Methods
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Choose the shipping method that best fits your needs, from
              standard delivery to express shipping and specialized
              international services.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {shippingMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
                    <div
                      className={`h-12 w-12 bg-gradient-to-r sm:h-16 sm:w-16 ${method.color} flex flex-shrink-0 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                    </div>
                    <div className="w-full flex-1">
                      <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="group-hover:text-brand-primary mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 sm:mb-0 sm:text-2xl">
                          {method.title}
                        </h3>
                        <div className="text-left sm:text-right">
                          <div className="text-brand-primary text-sm font-semibold">
                            {method.duration}
                          </div>
                          <div className="text-xs text-gray-500">
                            {method.coverage}
                          </div>
                        </div>
                      </div>
                      <p className="mb-4 text-base text-gray-600 sm:text-lg">
                        {method.description}
                      </p>
                      <div className="space-y-2">
                        {method.features.map((feature, featureIndex) => (
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

      {/* Shipping Rates Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Shipping Rates
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Competitive shipping rates with free shipping thresholds.
              Calculate your shipping costs based on destination and order
              value.
            </p>
          </div>
          <div className="from-brand-warm/20 rounded-2xl border border-gray-100 bg-gradient-to-br to-white p-4 shadow-lg sm:p-6 md:p-8">
            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-4 text-left font-semibold text-gray-900">
                      Region
                    </th>
                    <th className="px-4 py-4 text-center font-semibold text-gray-900">
                      Standard
                    </th>
                    <th className="px-4 py-4 text-center font-semibold text-gray-900">
                      Express
                    </th>
                    <th className="px-4 py-4 text-center font-semibold text-gray-900">
                      Free Shipping
                    </th>
                    <th className="px-4 py-4 text-left font-semibold text-gray-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {shippingRates.map((rate, index) => (
                    <tr
                      key={index}
                      className="hover:bg-brand-warm/10 border-b border-gray-100 transition-colors duration-200"
                    >
                      <td className="px-4 py-4 font-medium text-gray-900">
                        {rate.region}
                      </td>
                      <td className="px-4 py-4 text-center text-gray-600">
                        {rate.standard}
                      </td>
                      <td className="px-4 py-4 text-center text-gray-600">
                        {rate.express}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="bg-brand-warm/30 text-brand-primary rounded-md px-2 py-1 text-sm font-medium">
                          {rate.freeThreshold}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">
                        {rate.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-4 md:hidden">
              {shippingRates.map((rate, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {rate.region}
                    </h3>
                    <span className="bg-brand-warm/30 text-brand-primary rounded-md px-2 py-1 text-xs font-medium">
                      {rate.freeThreshold}
                    </span>
                  </div>
                  <div className="mb-3 grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="mb-1 text-sm text-gray-500">Standard</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {rate.standard}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="mb-1 text-sm text-gray-500">Express</div>
                      <div className="text-lg font-semibold text-gray-900">
                        {rate.express}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{rate.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tracking Features Section */}
      <section className="from-brand-warm/20 bg-gradient-to-br to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Tracking & Delivery
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Stay informed about your shipment with our comprehensive tracking
              system and flexible delivery options.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {trackingFeatures.map((feature, index) => {
              const Icon = feature.icon;
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

      {/* Shipping Policies Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
              Shipping Policies
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Important information about our shipping policies, processing
              times, and delivery terms to help you plan your orders.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {shippingPolicies.map((policy, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <div className="from-brand-primary to-brand-secondary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-r sm:h-12 sm:w-12">
                    <Info className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                  </div>
                  <div className="w-full flex-1">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
                      {policy.title}
                    </h3>
                    <p className="mb-4 text-base text-gray-600 sm:text-lg">
                      {policy.description}
                    </p>
                    <ul className="space-y-2">
                      {policy.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start text-sm text-gray-600 sm:text-base"
                        >
                          <CheckCircle className="text-brand-primary mt-0.5 mr-2 h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
                          {detail}
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
            Ready to Ship Your Order?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 sm:mb-12">
            Get started with your order today and experience our fast, reliable
            shipping. Contact us for custom shipping solutions or bulk order
            arrangements.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
            <CTAButton href="/contact" variant="primary">
              Get Shipping Quote
            </CTAButton>
            <CTAButton href="/products" variant="secondary">
              Browse Products
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
