import { Info } from "lucide-react";
import { medicalDisclaimer } from "@/data/research";
import { cn } from "@/lib/cn";

export function Disclaimer({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Health disclaimer"
      className={cn("flex gap-4 rounded-2xl border border-line bg-white/20 p-5 text-sm leading-relaxed text-ink-soft", className)}
    >
      <Info className="mt-0.5 size-5 shrink-0 text-ember" aria-hidden />
      <p>{medicalDisclaimer}</p>
    </aside>
  );
}
