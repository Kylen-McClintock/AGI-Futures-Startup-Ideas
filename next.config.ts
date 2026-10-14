import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // A stray ~/package-lock.json otherwise makes Next infer the home directory as the workspace root.
  turbopack: { root: path.resolve(__dirname) },
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
};

export default nextConfig;
