/**
 * Site-wide settings. Anything marked PLACEHOLDER must be replaced with
 * official information before the site goes live.
 */
export const site = {
  name: "SRIHER Yoga Club",
  institution: "Sri Ramachandra Institute of Higher Education and Research",
  institutionShort: "SRIHER",
  location: "Porur, Chennai, Tamil Nadu, India",
  tagline: "Find your balance. Discover your strength.",
  description:
    "SRIHER Yoga Club brings students and faculty together through yoga, breathwork, meditation and evidence-informed wellbeing education.",
  url: "https://example.org", // PLACEHOLDER — production domain
  contact: {
    email: "yogaclub@example.org", // PLACEHOLDER
    phone: "", // PLACEHOLDER — leave empty to hide
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
