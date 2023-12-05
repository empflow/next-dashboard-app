/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sun6-22.userapi.com",
      },
    ],
  },
};

module.exports = nextConfig;
