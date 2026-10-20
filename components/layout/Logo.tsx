import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Official SRIHER Yoga Club emblem + wordmark, used unmodified
 * (background removed only). Source: /public/brand/sriher-yoga-club-logo.png
 */
export function Logo({ className, priority }: { className?: string; priority?: boolean }) {
  return (
    <Link href="/" aria-label="SRIHER Yoga Club — home" className={cn("inline-flex min-h-11 shrink-0 items-center", className)}>
      <Image
        src="/brand/sriher-yoga-club-logo.png"
        alt="SRIHER Yoga Club logo"
        width={1400}
        height={505}
        priority={priority}
        quality={85}
        sizes="(min-width: 640px) 220px, 160px"
        className="h-auto w-full"
      />
    </Link>
  );
}

export function Emblem({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/sriher-yoga-club-emblem.png"
      alt=""
      width={666}
      height={665}
      sizes="160px"
      className={className}
    />
  );
}

/** Sri Ramachandra Institute of Higher Education and Research logo (parent institution). */
export function InstituteLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/sriher-institute-logo.png"
      alt="Sri Ramachandra Institute of Higher Education and Research (SRIHER), Porur, Chennai"
      width={914}
      height={136}
      sizes="(min-width: 1280px) 300px, (min-width: 640px) 260px, 150px"
      className={cn("h-auto", className)}
    />
  );
}
