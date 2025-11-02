/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add remote patterns here if you plan to use external images
  },
  experimental: {
    optimizePackageImports: ["framer-motion"]
  }
};

module.exports = nextConfig;
