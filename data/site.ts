/**
 * Site-wide settings. Anything marked PLACEHOLDER must be replaced with
 * official information before the site goes live.
 */

/**
 * Production URL used for canonical links, Open Graph, the sitemap and
 * structured data. Set NEXT_PUBLIC_SITE_URL (e.g. https://yogaclub.sriher.in)
 * in the hosting dashboard. On Vercel the production domain is picked up
 * automatically when the variable is not set.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const raw = explicit || (vercel ? `https://${vercel}` : "https://example.org"); // PLACEHOLDER fallback
  return raw.replace(/\/+$/, "");
}

export const site = {
  name: "SRIHER Yoga Club",
  alternateName: "Sri Ramachandra Yoga Club",
  institution: "Sri Ramachandra Institute of Higher Education and Research",
  institutionShort: "SRIHER",
  institutionUrl: "https://www.sriramachandra.edu.in",
  location: "Porur, Chennai, Tamil Nadu, India",
  address: {
    street: "No. 1, Ramachandra Nagar, Porur",
    locality: "Chennai",
    region: "Tamil Nadu",
    regionCode: "IN-TN",
    postalCode: "600116",
    country: "IN",
  },
  tagline: "Find your balance. Discover your strength.",
  description:
    "SRIHER Yoga Club is the yoga, pranayama and meditation community of Sri Ramachandra Institute of Higher Education and Research, Porur, Chennai — guided practice and evidence-informed wellbeing for students and faculty.",
  keywords: [
    "SRIHER Yoga Club",
    "Sri Ramachandra yoga club",
    "SRIHER yoga",
    "yoga club Chennai",
    "yoga in Porur",
    "college yoga club Chennai",
    "student wellbeing SRIHER",
    "pranayama",
    "meditation",
    "mindfulness",
    "International Day of Yoga",
  ],
  locale: "en_IN",
  language: "en-IN",
  themeColor: "#68140e",
  url: resolveSiteUrl(),
  contact: {
    email: "yogaclub@example.org", // PLACEHOLDER
    phone: "", // PLACEHOLDER — leave empty to hide
    whatsapp: "", // PLACEHOLDER — digits with country code, e.g. "919876543210"; leave empty to hide the link
    address: "Venue to be confirmed, SRIHER campus, Porur, Chennai", // PLACEHOLDER
  },
  social: [
    // PLACEHOLDER — add real handles; entries with an empty href are hidden
    { label: "Instagram", href: "" },
    { label: "YouTube", href: "" },
    { label: "Facebook", href: "" },
  ],
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

export const joinHref = "/contact#join";

/** True only on the real production deployment, so previews are never indexed. */
export const isIndexable =
  process.env.NEXT_PUBLIC_NOINDEX !== "true" &&
  (process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true);
