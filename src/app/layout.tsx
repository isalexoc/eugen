import CrispChat from "@/components/admin/crisp-chat";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SanityLive } from "@/sanity/lib/live";
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
  description:
    "Leading global trade solutions provider specializing in premium coffee beans and matcha tea from Japan, Vietnam, and China. Delivering excellence in every container worldwide.",
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Red Lotus International LLC - Global Trade Solutions",
    description:
      "Leading global trade solutions provider specializing in premium coffee beans and matcha tea from Japan, Vietnam, and China.",
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
    description:
      "Leading global trade solutions provider specializing in premium coffee beans and matcha tea from Japan, Vietnam, and China.",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* Standard favicon sizes */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192x192.png"
        />

        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon-180x180.png"
        />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#8B4513" />
        <meta name="msapplication-TileImage" content="/favicon-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#8B4513" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CrispChat />
        </ThemeProvider>
        <SanityLive />
      </body>
    </html>
  );
}
