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
          background-color: white !important;
          border-color: #d1d5db !important;
          color: #111827 !important;
        }
        .footer-newsletter :global(input::placeholder) {
          color: #6b7280 !important;
        }
        .footer-newsletter :global(input:focus) {
          border-color: #8b4513 !important;
          box-shadow: 0 0 0 2px rgba(139, 69, 19, 0.2) !important;
        }
        .footer-newsletter :global(button) {
          background: linear-gradient(to right, #8b4513, #7cb342) !important;
        }
        .footer-newsletter :global(button:hover) {
          background: linear-gradient(to right, #6b3410, #689f38) !important;
        }
        .footer-newsletter :global(.text-brand-error) {
          color: #dc2626 !important;
        }
        .footer-newsletter :global(.bg-brand-error-light) {
          background-color: #fef2f2 !important;
          border: 1px solid #dc2626 !important;
        }
        .footer-newsletter :global(.text-brand-success) {
          color: #7cb342 !important;
        }
        .footer-newsletter :global(.bg-brand-success-light) {
          background-color: #aed581 !important;
          border: 1px solid #7cb342 !important;
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
