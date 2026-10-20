import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { TeamMember } from "@/data/team";
import { cn } from "@/lib/cn";

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

/** Large rectangular portrait card. */
export function MemberCard({ member, band = "bg-saffron" }: { member: TeamMember; band?: string }) {
  return (
    <article className="glass group flex h-full flex-col rounded-[2rem] p-3 ring-1 ring-gold/40 transition duration-500 ease-zen hover:-translate-y-1.5 hover:ring-gold">
      <div className={cn("relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]", band)}>
        {member.photo ? (
          <Image
            src={member.photo}
            alt={`${member.name}, ${member.clubRole} of SRIHER Yoga Club`}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover object-top transition-transform duration-[1.2s] ease-zen group-hover:scale-[1.04]"
          />
        ) : (
          <span className="grid h-full place-items-center text-6xl font-extrabold text-ink">{initials(member.name)}</span>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-ink px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-[0.08em] text-white">
          {member.clubRole}
        </span>
      </div>
      <div className="px-3 pb-3 pt-5">
        <h3 className="text-[1.5rem] leading-snug">{member.name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{member.department}</p>
        {member.link && (
          <a href={member.link.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-ember hover:text-ink">
            {member.link.label} <ArrowUpRight className="size-4" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
