import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/politica-de-confidentialitate`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/termeni`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
