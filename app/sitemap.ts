import type { MetadataRoute } from "next";
import { site } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return site.nav.map((item) => ({
    url: item.href === "/" ? site.org.domain : `${site.org.domain}${item.href}`,
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8
  }));
}
