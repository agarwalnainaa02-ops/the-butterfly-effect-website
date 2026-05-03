/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow images from external domains used in the site
  images: {
    domains: ["images.pexels.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
