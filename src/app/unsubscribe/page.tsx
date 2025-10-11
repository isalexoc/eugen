import { UnsubscribeForm } from "@/components/forms/UnsubscribeForm";
import { Metadata } from "next";
import Link from "next/link";
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
    <div className="to-warm-cream flex min-h-screen items-center justify-center bg-gradient-to-br from-amber-50 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900">
              Unsubscribe
            </h1>
            <p className="text-gray-600">
              We&apos;re sorry to see you go! Enter your email address below to
              unsubscribe from our newsletter.
            </p>
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <UnsubscribeForm />
          </Suspense>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Changed your mind?{" "}
              <Link
                href="/newsletter"
                className="text-amber-700 underline hover:text-amber-800"
              >
                Resubscribe here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
