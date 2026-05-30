import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: business.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${business.url}/impressum`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${business.url}/datenschutz`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
