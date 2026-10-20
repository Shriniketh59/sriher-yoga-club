"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { heroVideo } from "@/data/media";

type Connection = { saveData?: boolean; effectiveType?: string };

/**
 * Full-bleed cinematic hero. The poster image renders immediately (and is all
 * reduced-motion or data-saver visitors get); the muted, looping video is
 * attached after mount, sized for the viewport.
 */
export function VideoHero({ children }: { children: ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<{ webm?: string; mp4: string } | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: Connection }).connection;
    const slow = conn?.saveData || /(^|-)2g$/.test(conn?.effectiveType ?? "");
    if (reduce || slow) return;
    setSrc(window.innerWidth < 768 ? heroVideo.mobile : heroVideo.desktop);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !src) return;
    v.muted = true;
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [src]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-plum">
      <Image
        src={heroVideo.poster}
        alt={heroVideo.posterAlt}
        fill
        priority
        quality={85}
        sizes="100vw"
        className="-z-20 object-cover object-[62%_50%] md:object-center"
      />
      {src && (
        <video
          ref={videoRef}
          className={`absolute inset-0 -z-10 h-full w-full object-cover object-[62%_50%] transition-opacity duration-1000 md:object-center ${playing ? "opacity-100" : "opacity-0"}`}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          poster={heroVideo.poster}
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setPlaying(true)}
        >
          {src.webm && <source src={src.webm} type="video/webm" />}
          <source src={src.mp4} type="video/mp4" />
        </video>
      )}
      {/* Readability overlay: darker at the bottom-left where the copy sits */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(36_27_25/0.35)_0%,rgb(36_27_25/0.05)_35%,rgb(36_27_25/0.55)_75%,rgb(36_27_25/0.8)_100%)]" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(36_27_25/0.55)_0%,transparent_60%)]" />

      <div className="container-zen relative w-full pb-16 pt-40 sm:pb-24">{children}</div>

      {src && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause background video" : "Play background video"}
          className="absolute bottom-6 right-4 grid size-12 place-items-center rounded-full border border-white/40 bg-black/30 text-white backdrop-blur transition hover:bg-black/50 sm:right-8"
        >
          {playing ? <Pause className="size-5" aria-hidden /> : <Play className="size-5" aria-hidden />}
        </button>
      )}
    </section>
  );
}
