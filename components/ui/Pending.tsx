import { cn } from "@/lib/cn";

/** Plain muted note for details the club has not yet confirmed. */
export function Pending({ children = "To be announced", className }: { children?: string; className?: string }) {
  return <span className={cn("text-sm font-semibold text-ink-soft", className)}>{children}</span>;
}
