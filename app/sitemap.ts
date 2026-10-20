import type { MetadataRoute } from "next";
import { members } from "@/data/team";
import { absoluteUrl } from "@/lib/seo";

/** Last meaningful content update. Bump when page copy changes. */
const updated = new Date("2026-10-20");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 1,
      images: [absoluteUrl("/og/og-home.jpg"), absoluteUrl("/brand/sriher-yoga-club-logo.png")],
    },
    {
      url: absoluteUrl("/about"),
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [absoluteUrl("/og/og-about.jpg")],
    },
    {
      url: absoluteUrl("/team"),
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.7,
      images: members.flatMap((m) => (m.photo ? [absoluteUrl(m.photo)] : [])),
    },
    {
      url: absoluteUrl("/contact"),
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.8,
      images: [absoluteUrl("/og/og-contact.jpg")],
    },
  ];
}
