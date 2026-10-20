import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

/** Designed placeholder for sections whose real content has not been published yet. */
export function EmptyState({ icon, title, children, action }: { icon: ReactNode; title: string; children: ReactNode; action?: ReactNode }) {
  return (
    <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-[linear-gradient(135deg,#fffaf4,#fff7ed)] px-6 py-14 text-center sm:px-12">
      <span aria-hidden className="absolute -right-16 -top-16 size-56 rounded-full bg-gold/15 blur-2xl" />
      <span className="relative mx-auto grid size-14 place-items-center rounded-2xl bg-white text-saffron shadow-[0_12px_30px_-16px_rgb(104_20_14/0.4)]">
        {icon}
      </span>
      <h3 className="relative mt-6 text-2xl sm:text-3xl">{title}</h3>
      <div className="relative mx-auto mt-3 max-w-xl leading-relaxed text-ink-soft">{children}</div>
      {action && <div className="relative mt-8 flex flex-wrap justify-center gap-3">{action}</div>}
    </Reveal>
  );
}
