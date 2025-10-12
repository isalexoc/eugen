"use client";

import {
  AlertCircle,
  Download,
  Eye,
  Mail,
  Plus,
  Search,
  TrendingUp,
  Upload,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

interface SubscriberStats {
  total: number;
  active: number;
  unsubscribed: number;
  bounced: number;
  newThisMonth: number;
}

interface Subscriber {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  status: string;
  tags: string[];
  source?: string;
  createdAt: string;
  updatedAt: string;
}

interface SubscribersResponse {
  success: boolean;
  data: {
    subscribers: Subscriber[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
    stats: SubscriberStats;
  };
}

export function NewsletterDashboard() {
  const [stats, setStats] = useState<SubscriberStats | null>(null);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchSubscribers();
  }, [currentPage, searchTerm, statusFilter]);

  const fetchSubscribers = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: "20",
      });

      if (searchTerm) params.set("search", searchTerm);
      if (statusFilter !== "all") params.set("status", statusFilter);

      const response = await fetch(`/api/newsletter/subscribers?${params}`);
      const data: SubscribersResponse = await response.json();

      if (data.success) {
        setSubscribers(data.data.subscribers);
        setStats(data.data.stats);
      } else {
        setError("Failed to fetch subscribers");
      }
    } catch (err) {
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchSubscribers();
  };

  const handleBulkImport = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const text = await file.text();
      const lines = text.split("\n").filter((line) => line.trim());
      const emails = lines.map((line) => line.trim());

      const response = await fetch("/api/newsletter/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emails, source: "bulk_import" }),
      });

      const result = await response.json();
      if (result.success) {
        alert(
          `Successfully imported ${result.data.summary.successful} subscribers`
        );
        fetchSubscribers();
      } else {
        alert("Import failed: " + result.message);
      }
    } catch (error) {
      alert("Error reading file");
    }
  };

  if (loading && !stats) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="border-brand-primary h-8 w-8 animate-spin rounded-full border-b-2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-brand-error-light border-brand-error flex items-center space-x-2 rounded-lg border p-4">
        <AlertCircle className="text-brand-error h-5 w-5" />
        <p className="text-brand-error">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center">
              <div className="bg-brand-info-light rounded-lg p-2">
                <Users className="text-brand-info h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Subscribers
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center">
              <div className="bg-brand-success-light rounded-lg p-2">
                <Mail className="text-brand-success h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.active}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center">
              <div className="bg-brand-error-light rounded-lg p-2">
                <AlertCircle className="text-brand-error h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Unsubscribed
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.unsubscribed}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center">
              <div className="rounded-lg bg-yellow-100 p-2">
                <TrendingUp className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  New This Month
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.newThisMonth}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow">
            <div className="flex items-center">
              <div className="rounded-lg bg-purple-100 p-2">
                <Eye className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Bounced</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.bounced}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions Bar */}
      <div className="rounded-lg bg-white p-6 shadow">
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
            <form onSubmit={handleSearch} className="flex space-x-2">
              <div className="relative">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <input
                  type="text"
                  placeholder="Search subscribers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-warning rounded-lg px-4 py-2 text-white transition-colors hover:bg-orange-700"
              >
                Search
              </button>
            </form>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-amber-600"
            >
              <option value="all">All Status</option>
              <option value="ACTIVE">Active</option>
              <option value="UNSUBSCRIBED">Unsubscribed</option>
              <option value="BOUNCED">Bounced</option>
            </select>
          </div>

          <div className="flex space-x-2">
            <label className="bg-brand-success hover:bg-brand-success-dark flex cursor-pointer items-center space-x-2 rounded-lg px-4 py-2 text-white transition-colors">
              <Upload className="h-4 w-4" />
              <span>Import</span>
              <input
                type="file"
                accept=".csv,.txt"
                onChange={handleBulkImport}
                className="hidden"
              />
            </label>
            <button className="bg-brand-info flex items-center space-x-2 rounded-lg px-4 py-2 text-white transition-colors hover:bg-blue-800">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
            <button className="bg-brand-warning flex items-center space-x-2 rounded-lg px-4 py-2 text-white transition-colors hover:bg-orange-700">
              <Plus className="h-4 w-4" />
              <span>Add Subscriber</span>
            </button>
          </div>
        </div>
      </div>

      {/* Subscribers Table */}
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="border-b border-gray-200 px-6 py-4">
          <h3 className="text-lg font-medium text-gray-900">Subscribers</h3>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="border-brand-primary h-8 w-8 animate-spin rounded-full border-b-2"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Source
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {subscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                      {subscriber.email}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      {subscriber.firstName && subscriber.lastName
                        ? `${subscriber.firstName} ${subscriber.lastName}`
                        : subscriber.firstName || "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          subscriber.status === "ACTIVE"
                            ? "bg-brand-success-light text-brand-success-dark"
                            : subscriber.status === "UNSUBSCRIBED"
                              ? "bg-brand-error-light text-brand-error"
                              : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {subscriber.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      {subscriber.source || "-"}
                    </td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                      {new Date(subscriber.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                      <button className="text-brand-warning hover:text-orange-800">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
