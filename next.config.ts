import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    apiUrl: process.env.API_URL,
  }
};

export default nextConfig;
