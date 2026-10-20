import type { ReactNode } from "react";
import type { Photo } from "@/data/images";
import { ParallaxImage } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type EditorialRowProps = {
  photo?: Photo;
  reverse?: boolean;
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  aside?: ReactNode;
  id?: string;
};

/** Text row with an optional photo. Without a photo it becomes a single glass card. */
export function EditorialRow({ photo, reverse, index, eyebrow, title, children, aside, id }: EditorialRowProps) {
  const text = (
    <Reveal delay={photo ? 0.12 : 0} className={cn("min-w-0", photo && "md:col-span-6", photo && (reverse ? "md:order-1 md:pr-6" : "md:pl-6"))}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3 className="mt-3 text-[2rem] leading-[1.05] tracking-[-0.03em] sm:text-[2.6rem]">{title}</h3>
      <div className="prose-zen mt-6 text-[1.05rem]">{children}</div>
      {aside && <div className="mt-8">{aside}</div>}
    </Reveal>
  );

  if (!photo) {
    return <article id={id} className="glass rounded-[2rem] p-7 sm:p-10">{text}</article>;
  }

  return (
    <article id={id} className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
      <Reveal className={cn("relative md:col-span-6", reverse && "md:order-2")}>
        <ParallaxImage
          photo={photo}
          strength={7}
          sizes="(min-width: 768px) 45vw, 100vw"
          className="aspect-[4/5] rounded-[2.25rem] shadow-lift sm:aspect-[5/4] md:aspect-[4/5]"
        />
        {index && (
          <span
            aria-hidden
            className={cn(
              "glass absolute -bottom-6 grid size-20 place-items-center rounded-full text-2xl font-extrabold text-ink",
              reverse ? "-left-3 md:-left-6" : "-right-3 md:-right-6",
            )}
          >
            {index}
          </span>
        )}
      </Reveal>
      {text}
    </article>
  );
}

export function InfoPanel({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="glass rounded-[1.5rem] p-5">
      <p className="inline-flex rounded-full bg-ink px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold">{label}</p>
      <div className="mt-3 text-[0.95rem] leading-relaxed text-ink">{children}</div>
    </div>
  );
}
