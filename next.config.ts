import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Enable if you're using Server Components with database calls
  serverExternalPackages: ['@prisma/client'],
};

export default nextConfig;
