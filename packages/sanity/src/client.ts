import type { SanityImageSource } from "@sanity/asset-utils";
import { createImageUrlBuilder } from "@sanity/image-url";
import { env } from "@workspace/env/client";
import { createClient } from "next-sanity";

const realClient = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: env.NODE_ENV === "production",
  perspective: "published",
  stega: {
    studioUrl: env.NEXT_PUBLIC_SANITY_STUDIO_URL,
    enabled: env.NEXT_PUBLIC_VERCEL_ENV === "preview",
  },
});

// Mock fetch method to intercept calls and return dummy/mock data
// This avoids errors when next.config.ts fetches redirects on startup
const mockFetch = async (query: any, params?: any) => {
  const queryStr = typeof query === "string" ? query : (query?.query || "");

  if (queryStr.includes("redirect")) {
    return [];
  }
  
  return [];
};

export const client = new Proxy(realClient, {
  get(target, prop) {
    if (prop === "fetch") {
      return mockFetch;
    }
    const value = target[prop as keyof typeof target];
    if (typeof value === "function") {
      return (value as Function).bind(target);
    }
    return value;
  }
});

const imageBuilder = createImageUrlBuilder({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
});

export const urlFor = (source: SanityImageSource) =>
  imageBuilder.image(source).auto("format").quality(80).format("webp");
