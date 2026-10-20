import type { MetadataRoute } from "next";
import { isIndexable, site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    // Preview / staging deployments must never compete with production.
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
