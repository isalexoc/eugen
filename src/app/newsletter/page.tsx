import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { Award, Coffee, Globe, Leaf } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe to Red Lotus International's newsletter for the latest coffee and tea trade insights, product updates, and industry news.",
};

export default function NewsletterPage() {
  const benefits = [
    {
      icon: Coffee,
      title: "Premium Coffee Updates",
      description: "Get the latest information about our premium coffee beans from Japan, Vietnam, and China.",
    },
    {
      icon: Leaf,
      title: "Matcha Tea Insights",
      description: "Learn about authentic matcha tea, brewing techniques, and health benefits.",
    },
    {
      icon: Globe,
      title: "Global Trade News",
      description: "Stay informed about international trade developments and market trends.",
    },
    {
      icon: Award,
      title: "Exclusive Offers",
      description: "Receive special discounts and early access to new products and services.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-warm-cream">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Stay Connected with
              <span className="text-amber-800 block">Red Lotus International</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our newsletter community and receive exclusive insights into the world of
              premium coffee and matcha tea, global trade updates, and special offers.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600">
                Get started with your email address below. We respect your privacy and never spam.
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
                <a href="/privacy" className="text-amber-700 hover:text-amber-800 underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="text-amber-700 hover:text-amber-800 underline">
                  Terms of Service
                </a>
                . You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You'll Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our newsletter delivers valuable content directly to your inbox,
              helping you stay informed about the coffee and tea industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How often do you send newsletters?
              </h3>
              <p className="text-gray-600">
                We typically send newsletters once or twice a month, depending on industry news and updates.
                We respect your inbox and only send valuable, relevant content.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I unsubscribe at any time?
              </h3>
              <p className="text-gray-600">
                Yes, absolutely! You can unsubscribe at any time by clicking the unsubscribe link
                in any of our emails, or by contacting us directly.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What type of content do you share?
              </h3>
              <p className="text-gray-600">
                Our newsletters include industry insights, product updates, brewing tips,
                global trade news, and exclusive offers for our premium coffee and matcha products.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is my information secure?
              </h3>
              <p className="text-gray-600">
                Yes, we take your privacy seriously. We never share your email address with third parties
                and use industry-standard security measures to protect your information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
