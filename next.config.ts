import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores stray lockfiles elsewhere
  // (e.g. one in the user's home directory) and uses this project.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
