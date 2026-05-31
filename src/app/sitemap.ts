import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  // Build zamanı; her deploy'da güncellenir → tarayıcıya tazelik sinyali.
  const lastModified = new Date();
  return [
    {
      url: business.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${business.url}/impressum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${business.url}/datenschutz`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
