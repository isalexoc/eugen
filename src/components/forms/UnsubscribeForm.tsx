"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle, Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const unsubscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type UnsubscribeFormData = z.infer<typeof unsubscribeSchema>;

export function UnsubscribeForm() {
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
  } = useForm<UnsubscribeFormData>({
    resolver: zodResolver(unsubscribeSchema),
  });

  const onSubmit = async (data: UnsubscribeFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/newsletter/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(
          "You have been successfully unsubscribed from our newsletter."
        );
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <div className="relative">
          <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          <input
            {...register("email")}
            type="email"
            placeholder="Enter your email address"
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
        className="bg-brand-error flex w-full items-center justify-center space-x-2 rounded-lg px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Unsubscribing...</span>
          </>
        ) : (
          <span>Unsubscribe</span>
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
  );
}
