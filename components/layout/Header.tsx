"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { joinHref, nav } from "@/data/site";
import { cn } from "@/lib/cn";
import { InstituteLogo, Logo } from "./Logo";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Mobile menu: lock scroll, close on Escape, keep focus inside the panel.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusables = () =>
      Array.from(panelRef.current?.querySelectorAll<HTMLElement>("a, button") ?? []);
    focusables()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab") {
        const els = [toggleRef.current!, ...focusables()];
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-[max(0.75rem,env(safe-area-inset-left))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-5 sm:pt-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white/20 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-maroon"
      >
        Skip to content
      </a>
      <div
        className={cn(
          "glass mx-auto flex max-w-[82.5rem] items-center justify-between gap-4 rounded-full py-2 pl-4 pr-2 transition-all duration-700 ease-zen sm:pl-6",
          scrolled && "!bg-white/95 shadow-[0_24px_60px_-28px_rgb(107_20_16/0.3)]",
        )}
      >
        <div className="flex min-w-0 items-center gap-3 sm:gap-5">
          <Logo priority className="w-[104px] shrink-0 sm:w-[150px] xl:w-[132px] 2xl:w-[150px]" />
          <span aria-hidden className="h-9 w-px shrink-0 bg-ink/15 sm:h-12" />
          <InstituteLogo className="w-[150px] min-w-0 sm:w-[250px] xl:w-[190px] 2xl:w-[250px]" />
        </div>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative block rounded-full px-3 py-2.5 text-[0.82rem] font-semibold transition-colors duration-300 2xl:px-3.5 2xl:text-[0.88rem]",
                      active ? "text-white" : "text-ink-soft hover:bg-white/20 hover:text-ink",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId={reduce ? undefined : "nav-pill"}
                        className="absolute inset-0 rounded-full bg-maroon"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={joinHref}
            className="hidden min-h-12 items-center gap-2 rounded-full bg-saffron px-6 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgb(107_20_16/0.25)] transition-transform duration-500 ease-zen hover:-translate-y-0.5 sm:inline-flex"
          >
            Join the Club <ArrowRight className="size-4" aria-hidden />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-12 place-items-center rounded-full bg-ink text-white transition hover:bg-black xl:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            initial={reduce ? false : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass mx-auto mt-3 max-h-[calc(100dvh-6.5rem)] max-w-[82.5rem] overflow-y-auto rounded-[2rem] !bg-white/30 p-3 xl:hidden"
          >
            <nav aria-label="Mobile">
              <ul className="grid gap-1 sm:grid-cols-2">
                {nav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex min-h-13 items-center justify-between rounded-2xl px-5 text-lg font-bold tracking-tight transition",
                          active ? "bg-ink text-white" : "text-ink hover:bg-white/20",
                        )}
                      >
                        {item.label}
                        <ArrowRight className="size-4 text-saffron" aria-hidden />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Link
              href={joinHref}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-saffron text-sm font-bold text-white sm:hidden"
            >
              Join the Club <ArrowRight className="size-4" aria-hidden />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
