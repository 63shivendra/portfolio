import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Static export needs every metadata route to be known at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-10-29";

  return [
    {
      url: `${site.url}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/resume/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
