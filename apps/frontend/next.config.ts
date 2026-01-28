import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["localhost", "172.30.1.7", "127.0.0.1"],
  output: "standalone",
};

export default nextConfig;
