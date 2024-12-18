import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/l56",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
