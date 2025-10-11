"use client";

import { NewsletterSignup } from "./NewsletterSignup";

interface FooterNewsletterSignupProps {
  source?: string;
  buttonText?: string;
  placeholder?: string;
  successMessage?: string;
}

export function FooterNewsletterSignup({
  source = "footer",
  buttonText = "Subscribe",
  placeholder = "Enter your email",
  successMessage = "Successfully subscribed! Check your email for confirmation.",
}: FooterNewsletterSignupProps) {
  return (
    <>
      <style jsx>{`
        .footer-newsletter :global(input) {
          background-color: #1f2937 !important;
          border-color: #374151 !important;
          color: white !important;
        }
        .footer-newsletter :global(input::placeholder) {
          color: #9ca3af !important;
        }
        .footer-newsletter :global(input:focus) {
          border-color: #dc2626 !important;
          box-shadow: 0 0 0 2px rgba(220, 38, 38, 0.2) !important;
        }
        .footer-newsletter :global(button) {
          background: linear-gradient(to right, #dc2626, #dc2626) !important;
        }
        .footer-newsletter :global(button:hover) {
          background: linear-gradient(to right, #b91c1c, #b91c1c) !important;
        }
        .footer-newsletter :global(.text-red-600) {
          color: #dc2626 !important;
        }
        .footer-newsletter :global(.bg-red-50) {
          background-color: #1f2937 !important;
          border: 1px solid #374151 !important;
        }
        .footer-newsletter :global(.text-green-600) {
          color: #10b981 !important;
        }
        .footer-newsletter :global(.bg-green-50) {
          background-color: #1f2937 !important;
          border: 1px solid #374151 !important;
        }
      `}</style>
      <div className="footer-newsletter">
        <NewsletterSignup
          source={source}
          buttonText={buttonText}
          placeholder={placeholder}
          successMessage={successMessage}
        />
      </div>
    </>
  );
}
