import { UnsubscribeForm } from "@/components/forms/UnsubscribeForm";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Unsubscribe",
  description: "Unsubscribe from Red Lotus International's newsletter.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UnsubscribePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-warm-cream flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Unsubscribe
            </h1>
            <p className="text-gray-600">
              We're sorry to see you go! Enter your email address below to unsubscribe from our newsletter.
            </p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <UnsubscribeForm />
          </Suspense>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Changed your mind?{" "}
              <a href="/newsletter" className="text-amber-700 hover:text-amber-800 underline">
                Resubscribe here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
