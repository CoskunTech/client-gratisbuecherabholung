import type { MetadataRoute } from "next";
import { business } from "@/data/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: business.name,
    short_name: "Bücher Abholung",
    description:
      "Gratis Abholservice für Bücher, CDs, DVDs und Schallplatten in Basel, Zürich, Aargau und Solothurn.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F5F2",
    theme_color: "#2D6A4F",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
