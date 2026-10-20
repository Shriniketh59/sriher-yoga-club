"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Photo } from "@/data/images";
import { cn } from "@/lib/cn";

type ParallaxImageProps = {
  photo: Photo;
  className?: string;
  imgClassName?: string;
  /** Vertical travel in percent of the frame. */
  strength?: number;
  priority?: boolean;
  sizes?: string;
};

/**
 * Image that drifts gently against the scroll. The image is over-scaled so
 * the drift never exposes an edge. Static for reduced-motion users.
 */
export function ParallaxImage({
  photo,
  className,
  imgClassName,
  strength = 10,
  priority,
  sizes = "100vw",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={cn("overflow-hidden", !className?.includes("absolute") && "relative", className)}>
      <motion.div className="absolute inset-[-12%_0]" style={reduce ? undefined : { y }}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes}
          quality={75}
          className={cn("object-cover", imgClassName)}
        />
      </motion.div>
    </div>
  );
}
