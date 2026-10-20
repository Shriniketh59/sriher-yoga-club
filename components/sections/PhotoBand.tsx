import type { ReactNode } from "react";
import type { Photo } from "@/data/images";
import { ParallaxImage } from "@/components/ui/Parallax";

/**
 * Rounded full-width photo panel. The photo stays crisp; content placed
 * on it should be glass cards.
 */
export function PhotoBand({ photo, children, id, labelledBy }: { photo: Photo; children: ReactNode; id?: string; labelledBy?: string }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className="container-zen scroll-mt-28 pt-24 md:pt-32">
      <div className="relative isolate overflow-hidden rounded-[2.25rem] px-4 py-14 sm:rounded-[3rem] sm:px-10 sm:py-20">
        <ParallaxImage photo={photo} strength={10} className="absolute inset-0 -z-10" />
        {children}
      </div>
    </section>
  );
}
