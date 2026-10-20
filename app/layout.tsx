import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/layout/Providers";
import { site } from "@/data/site";
import "./globals.css";

const jakarta = Inter({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
const instrument = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Yoga, Mindfulness & Holistic Wellbeing`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/brand/sriher-yoga-club-logo.png", width: 1400, height: 505, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable} bg-white`}>
      <body className="bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              logo: new URL("/brand/sriher-yoga-club-logo.png", site.url).toString(),
              parentOrganization: { "@type": "CollegeOrUniversity", name: site.institution },
              address: { "@type": "PostalAddress", addressLocality: "Porur, Chennai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
            }),
          }}
        />
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
