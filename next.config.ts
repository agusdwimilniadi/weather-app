import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["openweathermap.org"],
  },
  output: 'standalone'
};

export default nextConfig;
