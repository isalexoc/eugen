import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { Award, Coffee, Globe, Leaf } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to Red Lotus International's newsletter for the latest coffee and tea trade insights, product updates, and industry news.",
};

export default function NewsletterPage() {
  const benefits = [
    {
      icon: Coffee,
      title: "Premium Coffee Updates",
      description:
        "Get the latest information about our premium coffee beans from Japan, Vietnam, and China.",
    },
    {
      icon: Leaf,
      title: "Matcha Tea Insights",
      description:
        "Learn about authentic matcha tea, brewing techniques, and health benefits.",
    },
    {
      icon: Globe,
      title: "Global Trade News",
      description:
        "Stay informed about international trade developments and market trends.",
    },
    {
      icon: Award,
      title: "Exclusive Offers",
      description:
        "Receive special discounts and early access to new products and services.",
    },
  ];

  return (
    <div className="to-warm-cream min-h-screen bg-gradient-to-br from-amber-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-6xl">
              Stay Connected with
              <span className="block text-amber-800">
                Red Lotus International
              </span>
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              Join our newsletter community and receive exclusive insights into
              the world of premium coffee and matcha tea, global trade updates,
              and special offers.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600">
                Get started with your email address below. We respect your
                privacy and never spam.
              </p>
            </div>

            <NewsletterSignup
              source="newsletter_page"
              showFirstName={true}
              showLastName={true}
              placeholder="Enter your email address"
              buttonText="Subscribe Now"
              successMessage="Welcome to our newsletter! Check your email for a confirmation message."
            />

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                By subscribing, you agree to our{" "}
                <Link
                  href="/privacy"
                  className="text-amber-700 underline hover:text-amber-800"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms"
                  className="text-amber-700 underline hover:text-amber-800"
                >
                  Terms of Service
                </Link>
                . You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="to-warm-cream bg-gradient-to-br from-amber-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              What You&apos;ll Get
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our newsletter delivers valuable content directly to your inbox,
              helping you stay informed about the coffee and tea industry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 text-center shadow-md transition-shadow duration-200 hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-green-100">
                    <Icon className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                How often do you send newsletters?
              </h3>
              <p className="text-gray-600">
                We typically send newsletters once or twice a month, depending
                on industry news and updates. We respect your inbox and only
                send valuable, relevant content.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Can I unsubscribe at any time?
              </h3>
              <p className="text-gray-600">
                Yes, absolutely! You can unsubscribe at any time by clicking the
                unsubscribe link in any of our emails, or by contacting us
                directly.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                What type of content do you share?
              </h3>
              <p className="text-gray-600">
                Our newsletters include industry insights, product updates,
                brewing tips, global trade news, and exclusive offers for our
                premium coffee and matcha products.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Is my information secure?
              </h3>
              <p className="text-gray-600">
                Yes, we take your privacy seriously. We never share your email
                address with third parties and use industry-standard security
                measures to protect your information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
