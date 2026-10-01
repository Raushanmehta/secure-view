import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/case-study",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
