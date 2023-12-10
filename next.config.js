/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  swcMinify: true,

  // Uncoment to add domain whitelist
  images: {
    domains: [
      "res.cloudinary.com",
      "savemaxbc.com",
      "ddfcdn.realtor.ca",
      "savemaxheadlessdemo.csoft.ca",
      "secure.gravatar.com",
    ],
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=10, stale-while-revalidate=59",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
