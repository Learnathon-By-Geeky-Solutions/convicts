import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  transpilePackages: ["@auth/prisma-adapter"],
}

export default nextConfig
