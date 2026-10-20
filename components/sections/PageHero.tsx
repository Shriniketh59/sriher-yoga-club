import type { ReactNode } from "react";
import type { Photo } from "@/data/images";
import { ParallaxImage } from "@/components/ui/Parallax";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  photo?: Photo;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  size?: "full" | "page";
  imgClassName?: string;
  aside?: ReactNode;
};

/** Glass headline panel. The photo is optional; without one the colour orbs show through. */
export function PageHero({ photo, eyebrow, title, intro, children, size = "page", imgClassName, aside }: PageHeroProps) {
  return (
    <section className="container-zen pt-[6.5rem] sm:pt-28">
      <div
        className={cn(
          "relative isolate flex items-end overflow-hidden rounded-[2rem] p-3 sm:rounded-[2.75rem] sm:p-5",
          size === "full" ? "min-h-[calc(100svh-8rem)] sm:min-h-[44rem]" : "min-h-[24rem] sm:min-h-[28rem]",
          photo && "shadow-lift",
        )}
      >
        {photo ? (
          <ParallaxImage photo={photo} priority strength={6} className="absolute inset-0 -z-10" imgClassName={imgClassName} />
        ) : (
          <>
            <div aria-hidden className="orb -left-24 top-0 -z-10 size-[26rem] bg-gold opacity-70" />
            <div aria-hidden className="orb -right-20 bottom-0 -z-10 size-[24rem] bg-saffron opacity-50" />
          </>
        )}
        <div className="flex w-full flex-wrap items-end gap-4">
          <Reveal className="glass min-w-0 flex-[999_1_34rem] rounded-[1.6rem] !bg-white/85 p-6 sm:rounded-[2rem] sm:p-9">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white">
                <span aria-hidden className="size-2 rounded-full bg-saffron" />
                {eyebrow}
              </span>
            )}
            <h1 className="mt-5 text-[2.6rem] leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[4.9rem]">{title}</h1>
            {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>}
            {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
          </Reveal>
          {aside && <Reveal delay={0.1} className="min-w-0 flex-[1_1_17rem]">{aside}</Reveal>}
        </div>
      </div>
    </section>
  );
}
