"use client";

import {
  newsletterSubscriptionSchema,
  type NewsletterSubscription,
} from "@/lib/types/newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle, Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface NewsletterSignupProps {
  source?: string;
  showFirstName?: boolean;
  showLastName?: boolean;
  className?: string;
  buttonText?: string;
  placeholder?: string;
  successMessage?: string;
}

export function NewsletterSignup({
  source = "website",
  showFirstName = false,
  showLastName = false,
  className = "",
  buttonText = "Subscribe",
  placeholder = "Enter your email",
  successMessage = "Successfully subscribed! Check your email for confirmation.",
}: NewsletterSignupProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterSubscription>({
    resolver: zodResolver(newsletterSubscriptionSchema),
    defaultValues: {
      source,
    },
  });

  const onSubmit = async (data: NewsletterSubscription) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(successMessage);
        reset();
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message || "An error occurred. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`newsletter-signup ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {showFirstName && (
          <div>
            <input
              {...register("firstName")}
              type="text"
              placeholder="First Name"
              className="focus:ring-brand-primary w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors outline-none focus:border-transparent focus:ring-2"
            />
            {errors.firstName && (
              <p className="text-brand-error mt-1 text-sm">
                {errors.firstName.message}
              </p>
            )}
          </div>
        )}

        {showLastName && (
          <div>
            <input
              {...register("lastName")}
              type="text"
              placeholder="Last Name"
              className="focus:ring-brand-primary w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition-colors outline-none focus:border-transparent focus:ring-2"
            />
            {errors.lastName && (
              <p className="text-brand-error mt-1 text-sm">
                {errors.lastName.message}
              </p>
            )}
          </div>
        )}

        <div>
          <div className="relative">
            <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            <input
              {...register("email")}
              type="email"
              placeholder={placeholder}
              className="focus:ring-brand-primary w-full rounded-lg border border-gray-300 bg-white py-3 pr-4 pl-10 text-gray-900 transition-colors outline-none focus:border-transparent focus:ring-2"
            />
          </div>
          {errors.email && (
            <p className="text-brand-error mt-1 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="from-brand-primary to-brand-secondary hover:from-brand-dark hover:to-brand-success-dark flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r px-6 py-3 font-semibold text-white transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <span>{buttonText}</span>
          )}
        </button>

        {submitStatus === "success" && (
          <div className="text-brand-success bg-brand-success-light flex items-center space-x-2 rounded-lg p-3">
            <CheckCircle className="h-5 w-5" />
            <p className="text-sm font-medium">{submitMessage}</p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="text-brand-error bg-brand-error-light flex items-center space-x-2 rounded-lg p-3">
            <AlertCircle className="h-5 w-5" />
            <p className="text-sm font-medium">{submitMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}
