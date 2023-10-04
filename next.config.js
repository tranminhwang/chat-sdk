/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLIENT_HOST: process.env.CLIENT_HOST,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
