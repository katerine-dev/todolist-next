import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // App Router é default em Next 13+, mantido no 15
  },
};

export default nextConfig;
