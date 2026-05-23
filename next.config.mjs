/** @type {import('next').NextConfig} */
const isCI = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  ...(isCI
    ? {
        basePath: "/E-agro.pro",
        assetPrefix: "/E-agro.pro/"
      }
    : {})
};

export default nextConfig;
