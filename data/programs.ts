import { photos, type Photo } from "./images";

/**
 * Club programmes. `schedule`, `venue` and `registration` are null until the
 * club confirms them — the UI shows a "to be announced" marker instead.
 */
export type Program = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  focus: string[];
  audience: string;
  photo: Photo;
  schedule: string | null;
  venue: string | null;
  registration: string | null;
};

export const programs: Program[] = [
  {
    slug: "yoga-sessions",
    audience: "Beginners and experienced practitioners",
    title: "Yoga Asana Practice",
    summary: "Guided posture practice for strength, mobility and steadiness.",
    description:
      "Structured sessions that combine postures, breath and relaxation. Sequences can be adapted so that beginners and experienced practitioners practise side by side.",
    focus: ["Posture & alignment", "Mobility", "Relaxation"],
    photo: photos.groupWarrior,
    schedule: null,
    venue: null,
    registration: null,
  },
  {
    slug: "pranayama",
    audience: "All levels; no prior experience needed",
    title: "Pranayama Sessions",
    summary: "Breathing practices that cultivate calm, rhythm and awareness.",
    description:
      "An introduction to foundational breathing techniques taught slowly and safely, with attention to comfort and individual limits.",
    focus: ["Breath awareness", "Slow breathing", "Safe technique"],
    photo: photos.beachMeditation,
    schedule: null,
    venue: null,
    registration: null,
  },
  {
    slug: "meditation",
    audience: "Anyone who wants a calmer, more focused mind",
    title: "Guided Meditation",
    summary: "Quiet, guided practice to steady attention and settle the mind.",
    description:
      "Short guided meditations suited to busy academic schedules, building a habit of stillness and focused attention.",
    focus: ["Attention training", "Stillness", "Daily habit"],
    photo: photos.groupHall,
    schedule: null,
    venue: null,
    registration: null,
  },
  {
    slug: "mindfulness-workshops",
    audience: "Students, faculty and healthcare learners",
    title: "Mindfulness Workshops",
    summary: "Practical tools for study, clinical work and everyday life.",
    description:
      "Interactive workshops exploring mindful attention, stress awareness and healthy routines, with time for reflection and discussion.",
    focus: ["Stress awareness", "Mindful study", "Reflection"],
    photo: photos.singingBowl,
    schedule: null,
    venue: null,
    registration: null,
  },
  {
    slug: "awareness-programs",
    audience: "The wider campus community and visitors",
    title: "Wellness Awareness",
    summary: "Evidence-informed talks that share what yoga is — and isn't.",
    description:
      "Talks and demonstrations for the wider campus community, presenting yoga's traditions alongside a balanced view of current research.",
    focus: ["Education", "Community outreach", "Research literacy"],
    photo: photos.classStretch,
    schedule: null,
    venue: null,
    registration: null,
  },
  {
    slug: "special-events",
    audience: "Members, guests and the wider community",
    title: "Special Yoga Programs",
    summary: "Celebrations, observances and collaborative sessions.",
    description:
      "Occasional large-group practices, guest sessions and observances that bring the whole SRIHER community together.",
    focus: ["Community", "Celebration", "Collaboration"],
    photo: photos.outdoorGroup,
    schedule: null,
    venue: null,
    registration: null,
  },
];
