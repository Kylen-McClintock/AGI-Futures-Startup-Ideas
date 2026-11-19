import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // A stray ~/package-lock.json otherwise makes Next infer the home directory as the workspace root.
  turbopack: { root: path.resolve(__dirname) },
  // Blueprint assets in src/app/*/assets are imported statically or read at build-time for static OG cards;
  // exclude them from dynamic serverless function traces to keep Vercel deploys fast and lightweight.
  outputFileTracingExcludes: {
    "*": ["./src/app/**/assets/**"],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/futuregraph",
          destination: "https://futuregraph-beta.vercel.app/futuregraph",
        },
        {
          source: "/futuregraph/:path*",
          destination: "https://futuregraph-beta.vercel.app/futuregraph/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
