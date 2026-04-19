import { MetadataRoute } from "next";

// TODO: Update to real domain before going live
const SITE_URL = "https://gratisbuecher.ch";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
