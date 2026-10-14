/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep dev startup from deleting the production build in synced workspaces.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
