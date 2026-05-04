/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Explicit: URLs should never have a trailing slash (canonical form)
  trailingSlash: false,

  // Redirect bare domain → www (canonical www)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "thebutterflyeffecttherapy.com" }],
        destination: "https://www.thebutterflyeffecttherapy.com/:path*",
        permanent: true,
      },
    ];
  },

  // Allow images from external domains used in the site
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
