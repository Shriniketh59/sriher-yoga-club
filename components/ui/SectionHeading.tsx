import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "light";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "default",
  className,
  as: H = "h2",
}: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow", light && "!text-gold")}>{eyebrow}</p>}
      <H
        className={cn(
          "mt-3 text-[2.4rem] leading-[1.02] tracking-[-0.035em] sm:text-5xl lg:text-[4rem]",
          light && "!text-white [&_.accent]:!text-gold",
        )}
      >
        {title}
      </H>
      {intro && (
        <p className={cn("mt-5 text-lg leading-relaxed", light ? "text-[#f3ded6]" : "text-ink-soft")}>{intro}</p>
      )}
    </Reveal>
  );
}
