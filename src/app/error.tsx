"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="from-brand-error-light to-brand-warm flex min-h-screen items-center justify-center bg-gradient-to-br px-4">
      <div className="mx-auto max-w-2xl text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="bg-brand-error-light mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full">
            <AlertTriangle className="text-brand-error h-12 w-12" />
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Something went wrong!
          </h1>

          <p className="mx-auto max-w-lg text-lg text-gray-600">
            We&apos;re experiencing some technical difficulties. Our team has
            been notified and is working to resolve the issue. Please try again
            in a few moments.
          </p>

          {/* Error details for development */}
          {process.env.NODE_ENV === "development" && (
            <div className="bg-brand-error-light border-brand-error rounded-lg border p-4 text-left">
              <h3 className="text-brand-error mb-2 font-semibold">
                Error Details:
              </h3>
              <p className="text-brand-error font-mono text-sm break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-brand-error mt-2 text-xs">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
            <button
              onClick={reset}
              className="from-brand-primary to-brand-secondary hover:from-brand-dark hover:to-brand-success-dark group inline-flex items-center justify-center rounded-lg bg-gradient-to-r px-8 py-4 text-lg font-semibold text-white transition-all duration-200"
            >
              <RefreshCw className="mr-2 h-5 w-5 transition-transform duration-500 group-hover:rotate-180" />
              Try Again
            </button>

            <Link
              href="/"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary group inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 text-lg font-semibold transition-colors duration-200 hover:text-white"
            >
              <Home className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Go Home
            </Link>
          </div>

          {/* Contact information */}
          <div className="border-brand-error-light border-t pt-8">
            <p className="mb-2 text-sm text-gray-500">
              If the problem persists, please contact our support team.
            </p>
            <Link
              href="/contact"
              className="text-brand-primary hover:text-brand-dark decoration-brand-primary/30 hover:decoration-brand-primary/50 underline transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
