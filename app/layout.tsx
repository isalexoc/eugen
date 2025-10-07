import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Red Lotus International LLC - Global Trade Solutions",
    template: "%s | Red Lotus International LLC",
  },
  description: "Leading global trade solutions provider specializing in premium coffee beans and matcha tea from Japan, Vietnam, and China. Delivering excellence in every container worldwide.",
  keywords: [
    "coffee beans",
    "matcha tea",
    "global trade",
    "international trade",
    "coffee import",
    "tea import",
    "Japan coffee",
    "Vietnam coffee",
    "China tea",
    "trade solutions",
    "Stafford VA",
    "Red Lotus International",
  ],
  authors: [{ name: "Red Lotus International LLC" }],
  creator: "Red Lotus International LLC",
  publisher: "Red Lotus International LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Red Lotus International LLC - Global Trade Solutions",
    description: "Leading global trade solutions provider specializing in premium coffee beans and matcha tea from Japan, Vietnam, and China.",
    siteName: "Red Lotus International LLC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Red Lotus International LLC - Global Trade Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Lotus International LLC - Global Trade Solutions",
    description: "Leading global trade solutions provider specializing in premium coffee beans and matcha tea from Japan, Vietnam, and China.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#DC2626" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
