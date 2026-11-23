
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  experimental: {
    agentFeedback: true,
  },

  // Remove cacheComponents: true

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vitap-backend.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "vitap.ac.in",
      },
    ],
  },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
