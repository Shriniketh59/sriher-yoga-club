/**
 * Team directory: Board Members 2026–27.
 *
 * To update: edit `members` below. Add a photo by putting a file in
 * /public/images/team and setting `photo`. Without a photo, initials are shown.
 * Student registration numbers are deliberately not published here.
 */

export const teamCategories = [
  {
    id: "board",
    title: "Board Members",
    description: "The office bearers and editorial team leading the club for the 2026–27 academic year.",
  },
  {
    id: "council",
    title: "Council In-charge",
    description: "The council in-charges overseeing the club for 2026–27.",
  },
] as const;

export type TeamCategoryId = (typeof teamCategories)[number]["id"];

export const academicYears = ["2026–27"] as const;
export type AcademicYear = (typeof academicYears)[number];

export type TeamMember = {
  id: string;
  name: string;
  clubRole: string;
  department: string;
  photo: string | null;
  link?: { label: string; href: string } | null;
  category: TeamCategoryId;
  academicYear: AcademicYear;
  order: number;
};

export const members: TeamMember[] = [
  {
    id: "chairperson",
    name: "Shri Niketh R",
    clubRole: "Chairperson",
    department: "B.Tech CSE (AI & DA) · 3rd year",
    photo: "/images/team/chairperson.jpg",
    category: "board",
    academicYear: "2026–27",
    order: 1,
  },
  {
    id: "secretary",
    name: "Praveen G",
    clubRole: "Secretary",
    department: "BPT · 3rd year",
    photo: "/images/team/secretary.jpg",
    category: "board",
    academicYear: "2026–27",
    order: 2,
  },
  {
    id: "treasurer",
    name: "Uppara Chaitanya",
    clubRole: "Treasurer",
    department: "B.Tech CSE (AI & DA) · 3rd year",
    photo: "/images/team/treasurer.jpg",
    category: "board",
    academicYear: "2026–27",
    order: 3,
  },
  {
    id: "editorial-head",
    name: "Rahul C",
    clubRole: "Editorial Head",
    department: "B.Tech CSE (AI & DA) · 2nd year",
    photo: "/images/team/editorial-head.jpg",
    category: "board",
    academicYear: "2026–27",
    order: 4,
  },
  {
    id: "social-media-head",
    name: "Keerthana U",
    clubRole: "Social Media Head",
    department: "B.Sc (Hons) Biomedical Science · 3rd year",
    photo: "/images/team/social-media-head.jpg",
    category: "board",
    academicYear: "2026–27",
    order: 5,
  },
  {
    id: "council-in-charge",
    name: "Shreeya",
    clubRole: "Council In-charge",
    department: "CSS · 3rd year",
    photo: "/images/team/council-in-charge.jpg",
    category: "council",
    academicYear: "2026–27",
    order: 1,
  },
  {
    id: "mirudula",
    name: "Mirudula",
    clubRole: "Council In-charge",
    department: "BPT · 3rd year",
    photo: "/images/team/mirudula.jpg",
    category: "council",
    academicYear: "2026–27",
    order: 2,
  },
  {
    id: "jeyadev",
    name: "Jeyadev R",
    clubRole: "Council In-charge",
    department: "B.Tech · 3rd year",
    photo: "/images/team/jeyadev.jpg",
    category: "council",
    academicYear: "2026–27",
    order: 3,
  },
];

export function membersFor(year: AcademicYear, category: TeamCategoryId) {
  return members
    .filter((m) => m.academicYear === year && m.category === category)
    .sort((a, b) => a.order - b.order);
}
