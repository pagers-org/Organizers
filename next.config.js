/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/Organizers',
  assetPrefix: '/Organizers',
  reactStrictMode: true,
  compiler: {
    emotion: true,
    reactRemoveProperties: true
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}

module.exports = nextConfig;
