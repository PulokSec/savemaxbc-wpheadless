import { withFaust } from '@faustwp/core';
/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  eslint: {
    dirs: ['src'],
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,

  // Uncoment to add domain whitelist
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'savemaxbc.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'ddfcdn.realtor.ca',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'savemaxheadlessdemo.csoft.ca',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'savemaxbc.wpenginepowered.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'savemaxbc.wpengine.com',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'savemax-local.local',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '**',
      },
    ],
  },
  async redirects() {
        return [
          {
            source: "/condos-for-sale-in-surrey",
            destination: "/condos-for-sale-surrey",
            permanent: true,
          },
          {
            source: "/townhouses-for-sale-in-surrey",
            destination: "/townhouses-for-sale-surrey",
            permanent: true,
          },
        ];
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          },
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
            source: "/(.*)",
            headers: [
              {
                key: "Strict-Transport-Security",
                value: "max-age=31536000; includeSubDomains; preload",
              },
            ],
          },
    ];
    
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: { not: /\.(css|scss|sass)$/ },
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
          titleProp: true,
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default withFaust(nextConfig);
