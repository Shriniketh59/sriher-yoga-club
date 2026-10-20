import { ExternalLink } from "lucide-react";
import { evidenceLabels, references, type EvidenceTopic } from "@/data/research";
import { cn } from "@/lib/cn";

const levelStyle = {
  consistent: "bg-saffron text-white ring-saffron",
  moderate: "bg-gold text-ink ring-gold",
  preliminary: "bg-white/20 text-ink ring-ink/15",
} as const;

export function EvidenceCard({ topic, showRefs = true }: { topic: EvidenceTopic; showRefs?: boolean }) {
  const level = evidenceLabels[topic.level];
  return (
    <article className="glass group flex h-full flex-col rounded-[2rem] p-7 transition duration-500 ease-zen hover:-translate-y-1.5">
      <span className={cn("w-fit rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.1em] ring-1", levelStyle[topic.level])}>
        {level.label}
      </span>
      <h3 className="mt-5 text-[1.45rem] leading-snug">{topic.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{topic.summary}</p>
      {showRefs && (
        <div className="mt-6 border-t border-line pt-4">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-ember">References</p>
          <ul className="mt-2 space-y-2">
            {topic.refs.map((id) => (
              <li key={id}>
                <a
                  href={references[id].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-1.5 text-xs leading-relaxed text-ink-soft hover:text-maroon"
                >
                  <span>{references[id].citation}</span>
                  <ExternalLink className="mt-0.5 size-3 shrink-0" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
