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
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-amber-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="h-12 w-12 text-red-600" />
          </div>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Something went wrong!
          </h1>

          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            We&apos;re experiencing some technical difficulties. Our team has been
            notified and is working to resolve the issue. Please try again in a few moments.
          </p>

          {/* Error details for development */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left">
              <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
              <p className="text-sm text-red-700 font-mono break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center bg-gradient-to-r from-amber-800 to-green-700 text-white px-8 py-4 rounded-lg hover:from-amber-900 hover:to-green-800 transition-all duration-200 font-semibold text-lg group"
            >
              <RefreshCw className="h-5 w-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              Try Again
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-lg hover:bg-amber-800 hover:text-white transition-colors duration-200 font-semibold text-lg group"
            >
              <Home className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Go Home
            </Link>
          </div>

          {/* Contact information */}
          <div className="pt-8 border-t border-red-200">
            <p className="text-sm text-gray-500 mb-2">
              If the problem persists, please contact our support team.
            </p>
            <Link
              href="/contact"
              className="text-amber-700 hover:text-amber-800 underline decoration-amber-300 hover:decoration-amber-500 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
