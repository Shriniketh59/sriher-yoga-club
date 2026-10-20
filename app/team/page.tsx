import type { Metadata } from "next";
import { JoinCta } from "@/components/sections/JoinCta";
import { PageHero } from "@/components/sections/PageHero";
import { TeamDirectory } from "@/components/sections/TeamDirectory";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the Board Members and Council In-charges of SRIHER Yoga Club for 2026–27.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Board members · 2026–27"
        title={<>The people behind <span className="accent">SRIHER Yoga Club</span></>}
        intro="The student board guiding the SRIHER Yoga Club this academic year: programmes, editorial, communications and finance."
      />

      <section className="container-zen py-20 md:py-28">
        <TeamDirectory />
      </section>

      <JoinCta />
    </>
  );
}
