import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper file handling
  generateEtags: false,
  // Disable x-powered-by header
  poweredByHeader: false,
};

export default nextConfig;
