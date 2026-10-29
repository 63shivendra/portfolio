import type { NextConfig } from "next";

/**
 * GitHub Pages serves project sites from /<repo>/, while user pages live at
 * the origin root. The deploy workflow sets this at build time; local builds
 * default to the root.
 */
function normalizeBasePath(value: string | undefined) {
  if (!value || value === "/") return "";
  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

const basePath = normalizeBasePath(
  process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.PAGES_BASE_PATH,
);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
