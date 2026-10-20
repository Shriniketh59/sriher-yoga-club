import type { Metadata } from "next";
import { site } from "@/data/site";

/** Absolute URL for a site-relative path. */
export const absoluteUrl = (path = "/") => new URL(path, `${site.url}/`).toString();

export type OgImage = { url: string; alt: string };

export const defaultOgImage: OgImage = {
  url: "/og/og-home.jpg",
  alt: "SRIHER Yoga Club — yoga, pranayama and meditation at Sri Ramachandra Institute, Porur, Chennai",
};

type PageMetaInput = {
  /** Page title (the template appends " | SRIHER Yoga Club"). Keep the whole title under ~60 characters. */
  title: string;
  /** 140–160 characters, written for people, with the main keyword early. */
  description: string;
  /** Site-relative path, e.g. "/about". Used for the canonical URL. */
  path: string;
  image?: OgImage;
  keywords?: string[];
  /** Use for the home page so the template is not appended. */
  absoluteTitle?: boolean;
  type?: "website" | "article" | "profile";
};

/**
 * One place that builds every page's <title>, description, canonical,
 * Open Graph and Twitter tags. Next.js does not deep-merge `openGraph`, so
 * each page must set all of it or social previews fall back to the root.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  keywords = [],
  absoluteTitle,
  type = "website",
}: PageMetaInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...new Set([...keywords, ...site.keywords])],
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: site.locale,
      title: fullTitle,
      description,
      images: [{ url: image.url, width: 1200, height: 630, alt: image.alt, type: "image/jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

/* ---------------------------- Structured data ---------------------------- */

export const ids = {
  organization: absoluteUrl("/#organization"),
  website: absoluteUrl("/#website"),
  institution: `${site.institutionUrl}/#organization`,
};

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** A WebPage-family node linked to the site and organisation graph. */
export function webPageLd({
  type = "WebPage",
  path,
  name,
  description,
  image = defaultOgImage.url,
  extra = {},
}: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  path: string;
  name: string;
  description: string;
  image?: string;
  extra?: Record<string, unknown>;
}) {
  const url = absoluteUrl(path);
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: site.language,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.organization },
    primaryImageOfPage: { "@type": "ImageObject", url: absoluteUrl(image), width: 1200, height: 630 },
    ...extra,
  };
}
