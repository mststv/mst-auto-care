import type { NextConfig } from "next";

/**
 * STATIC_EXPORT=1 builds a plain static site into /out (used for GitHub Pages).
 * NEXT_PUBLIC_BASE_PATH is the sub-path the site is served from, e.g. "/mst-auto-care".
 * Leave both unset for a normal `next start` / Vercel deploy.
 */
const isExport = !!process.env.STATIC_EXPORT;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = isExport
  ? { output: "export", basePath, trailingSlash: true, images: { unoptimized: true } }
  : {};

export default nextConfig;
