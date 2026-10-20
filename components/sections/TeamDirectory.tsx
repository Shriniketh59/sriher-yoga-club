"use client";

import { useState } from "react";
import { academicYears, membersFor, teamCategories, type AcademicYear } from "@/data/team";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { MemberCard } from "./MemberCard";

const tones = [
  { chip: "bg-saffron text-white", band: "bg-saffron" },
  { chip: "bg-gold text-ink", band: "bg-gold" },
  { chip: "bg-ink text-white", band: "bg-maroon" },
  { chip: "bg-saffron text-white", band: "bg-sunset" },
];
const tone = (i: number) => tones[i % tones.length];

export function TeamDirectory() {
  const [year, setYear] = useState<AcademicYear>(academicYears[academicYears.length - 1]);

  return (
    <div>
      {academicYears.length > 1 && (
        <div role="group" aria-label="Academic year" className="glass mx-auto mb-16 flex w-fit gap-1 rounded-full p-1.5">
          {academicYears.map((y) => (
            <button
              key={y}
              type="button"
              aria-pressed={y === year}
              onClick={() => setYear(y)}
              className={cn(
                "min-h-11 rounded-full px-5 text-sm font-semibold transition",
                y === year ? "bg-ink text-white" : "text-ink-soft hover:text-ink",
              )}
            >
              {y}
            </button>
          ))}
        </div>
      )}

      <div className="space-y-24">
        {teamCategories.map((cat, ci) => {
          const list = membersFor(year, cat.id);
          if (!list.length) return null;
          return (
            <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
              <Reveal className="flex flex-col gap-3 border-b-2 border-ink pb-6 md:flex-row md:items-end md:justify-between">
                <div className="flex items-center gap-4">
                  <span className={cn("grid size-14 shrink-0 place-items-center rounded-[1.1rem] text-lg font-extrabold", tone(ci).chip)}>
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <h2 id={`cat-${cat.id}`} className="text-3xl tracking-[-0.03em] sm:text-[2.6rem]">
                    {cat.title}
                  </h2>
                </div>
                <p className="max-w-md text-ink-soft md:text-right">{cat.description}</p>
              </Reveal>
              <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((m) => (
                  <StaggerItem key={m.id}>
                    <MemberCard member={m} band={tone(ci).band} />
                  </StaggerItem>
                ))}
              </Stagger>
            </section>
          );
        })}
      </div>
    </div>
  );
}
