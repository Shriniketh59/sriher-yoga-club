import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/layout/Providers";
import { JsonLd } from "@/components/seo/JsonLd";
import { isIndexable, site } from "@/data/site";
import { absoluteUrl, defaultOgImage, ids } from "@/lib/seo";
import "./globals.css";

const jakarta = Inter({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
const instrument = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const defaultTitle = `${site.name} | Yoga & Meditation in Porur, Chennai`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.institution,
  category: "Health & Wellness",
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: false, email: false, address: false },
  robots: isIndexable
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
      }
    : { index: false, follow: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    locale: site.locale,
    title: defaultTitle,
    description: site.description,
    images: [{ url: defaultOgImage.url, width: 1200, height: 630, alt: defaultOgImage.alt, type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    images: [{ url: defaultOgImage.url, alt: defaultOgImage.alt }],
  },
  appleWebApp: { capable: true, title: "SRIHER Yoga", statusBarStyle: "default" },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  other: {
    "geo.region": site.address.regionCode,
    "geo.placename": `${site.address.locality}, ${site.address.region}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
  colorScheme: "light",
};

const socials = site.social.map((s) => s.href).filter(Boolean);

const siteGraph = [
  {
    "@type": ["Organization", "SportsOrganization"],
    "@id": ids.organization,
    name: site.name,
    alternateName: [site.alternateName, "SRIHER Yoga"],
    url: absoluteUrl("/"),
    description: site.description,
    sport: "Yoga",
    logo: {
      "@type": "ImageObject",
      "@id": absoluteUrl("/#logo"),
      url: absoluteUrl("/brand/sriher-yoga-club-logo.png"),
      width: 1400,
      height: 505,
      caption: `${site.name} logo`,
    },
    image: { "@id": absoluteUrl("/#logo") },
    email: site.contact.email,
    ...(site.contact.phone ? { telephone: site.contact.phone } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: { "@type": "City", name: "Chennai" },
    knowsAbout: ["Yoga", "Asana", "Pranayama", "Meditation", "Mindfulness", "Holistic wellbeing"],
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      "@id": ids.institution,
      name: site.institution,
      alternateName: site.institutionShort,
      url: site.institutionUrl,
    },
    ...(socials.length ? { sameAs: socials } : {}),
  },
  {
    "@type": "WebSite",
    "@id": ids.website,
    url: absoluteUrl("/"),
    name: site.name,
    alternateName: site.alternateName,
    description: site.description,
    inLanguage: site.language,
    publisher: { "@id": ids.organization },
  },
];

/** Without JavaScript, motion's initial `opacity:0` would hide content. Show it. */
const noScriptCss = `[style*="opacity:0"]{opacity:1!important;transform:none!important}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={site.language} dir="ltr" className={`${jakarta.variable} ${instrument.variable} bg-white`}>
      <head>
        <noscript>
          <style>{noScriptCss}</style>
        </noscript>
      </head>
      <body className="bg-white">
        <JsonLd data={siteGraph} />
        <Providers>
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
