import type { Photo } from "./images";

/**
 * Club events. The list is intentionally empty until the club confirms real
 * events. Pages show a designed "no events yet" state meanwhile.
 *
 * To add an event, append an object like:
 * {
 *   slug: "orientation-session-2026",          // used in the URL /events/<slug>
 *   title: "Orientation Yoga Session",
 *   type: "Session",
 *   date: "2026-11-14",                         // ISO date
 *   startTime: "07:00", endTime: "08:00",       // 24h, local (IST)
 *   venue: "…, SRIHER campus, Porur",
 *   audience: "Open to SRIHER students and staff",
 *   registration: { status: "open", url: "https://…" },
 *   summary: "One-line description.",
 *   description: ["Paragraph one.", "Paragraph two."],
 *   photo: null,                                 // or an authentic photo
 * }
 */
export type EventType = "Session" | "Workshop" | "Awareness programme" | "Special event";
export type RegistrationStatus = "open" | "closed" | "not-required" | "coming-soon";

export type ClubEvent = {
  slug: string;
  title: string;
  type: EventType;
  date: string;
  startTime?: string | null;
  endTime?: string | null;
  venue: string | null;
  audience: string;
  registration: { status: RegistrationStatus; url?: string | null };
  summary: string;
  description?: string[];
  highlights?: string[];
  photo: Photo | null;
};

export const events: ClubEvent[] = [];

export const registrationLabel: Record<RegistrationStatus, string> = {
  open: "Registration open",
  closed: "Registration closed",
  "not-required": "No registration needed",
  "coming-soon": "Registration opens soon",
};

const todayISO = () => new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().slice(0, 10); // IST

export function splitEvents(list: ClubEvent[] = events) {
  const t = todayISO();
  return {
    upcoming: list.filter((e) => e.date >= t).sort((a, b) => a.date.localeCompare(b.date)),
    past: list.filter((e) => e.date < t).sort((a, b) => b.date.localeCompare(a.date)),
  };
}

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

export function formatEventDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long", year: "numeric" });
}

export function formatTime(t?: string | null) {
  if (!t) return null;
  const [h, m] = t.split(":").map(Number);
  return new Date(2000, 0, 1, h, m).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit" });
}

/** ISO 8601 date-time in IST for structured data and calendar files. */
export function isoDateTime(date: string, time?: string | null) {
  return time ? `${date}T${time}:00+05:30` : date;
}
