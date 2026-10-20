/** Minimal line lotus used as an ornament. Decorative only. */
export function Lotus({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 32" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 4c4 5 6 10 6 15s-2.5 8-6 9c-3.5-1-6-4-6-9s2-10 6-15Z" />
        <path d="M26 21c-4-5-9.5-7.5-15-7 0.5 6 4.5 11 11 13 3 .8 6.5.5 10-1" />
        <path d="M38 21c4-5 9.5-7.5 15-7-.5 6-4.5 11-11 13-3 .8-6.5.5-10-1" />
      </g>
    </svg>
  );
}

export function Divider({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <div className="flex items-center justify-center gap-4 text-saffron">
        <span className="h-0.5 w-14 rounded-full bg-ink" />
        <Lotus className="h-6 w-12" />
        <span className="h-0.5 w-14 rounded-full bg-ink" />
      </div>
    </div>
  );
}
