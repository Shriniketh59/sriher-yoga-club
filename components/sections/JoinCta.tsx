import { ArrowRight } from "lucide-react";
import { joinHref } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function JoinCta() {
  return (
    <section aria-labelledby="join-cta" className="container-zen pt-24 md:pt-32">
      <Reveal className="relative isolate overflow-hidden rounded-[2.25rem] bg-maroon px-7 py-14 text-white sm:rounded-[3rem] sm:px-14 sm:py-20">
        <span aria-hidden className="absolute -right-24 -top-24 -z-10 size-96 rounded-full bg-sunset/35 blur-2xl" />
        <span aria-hidden className="absolute -bottom-32 right-40 -z-10 size-72 rounded-full bg-gold/30 blur-3xl" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Join our community</p>
        <h2 id="join-cta" className="mt-4 max-w-3xl text-[2.6rem] leading-[1.05] !text-white sm:text-6xl">
          Begin your practice <span className="accent !text-gold">with us.</span>
        </h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#fff1e6]">
          Students and faculty of every experience level are welcome. Register your interest and we will share upcoming
          sessions as they are announced.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href={joinHref} variant="white" icon={<ArrowRight className="size-4" aria-hidden />}>
            Join the Club
          </ButtonLink>
          <ButtonLink href="/about" variant="ghostDark">
            Learn about yoga
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
