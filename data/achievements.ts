/**
 * Club achievements. PLACEHOLDERS only — replace with verified milestones
 * (and remove unused entries). Never publish unverified claims.
 */
export type Achievement = {
  id: string;
  title: string;
  year: string | null;
  description: string;
};

export const achievements: Achievement[] = [
  { id: "a1", title: "Milestone to be added", year: null, description: "A verified club achievement, recognition or collaboration will appear here." },
  { id: "a2", title: "Milestone to be added", year: null, description: "Include the year, a one-line description and, where possible, a link to evidence." },
  { id: "a3", title: "Milestone to be added", year: null, description: "Community outreach, participation numbers or awards — once officially confirmed." },
];
