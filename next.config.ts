/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }, // tillad alle værter (kan strammes senere)
      { protocol: "http", hostname: "**" },
    ],
  },
};

export default nextConfig;
