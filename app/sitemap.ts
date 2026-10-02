import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url.endsWith("/") ? site.url : `${site.url}/`, changeFrequency: "monthly", priority: 1 }];
}
