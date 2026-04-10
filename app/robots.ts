import type { MetadataRoute } from "next";
import { site } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${site.org.domain}/sitemap.xml`,
    host: site.org.domain
  };
}
