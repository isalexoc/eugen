import { NewsletterDashboard } from "@/components/admin/NewsletterDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter Dashboard",
  description: "Manage newsletter subscribers, campaigns, and analytics.",
};

export default function AdminNewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Newsletter Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage your newsletter subscribers, campaigns, and analytics.
          </p>
        </div>

        <NewsletterDashboard />
      </div>
    </div>
  );
}
