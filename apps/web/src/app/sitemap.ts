import type { MetadataRoute } from "next";

import { getBaseUrl } from "@/utils";

const baseUrl = getBaseUrl();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work-with-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

