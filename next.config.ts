import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server external packages for Next.js 15
  serverExternalPackages: ['@prisma/client'],
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
