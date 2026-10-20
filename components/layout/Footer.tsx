import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { joinHref, nav, site } from "@/data/site";
import { stockCredit } from "@/data/images";
import { heroVideo } from "@/data/media";
import { Logo } from "./Logo";

export function Footer() {
  const socials = site.social.filter((s) => s.href);
  return (
    <footer className="container-zen pb-[max(2rem,env(safe-area-inset-bottom))] pt-24">
      <div className="glass grid gap-10 rounded-[2.5rem] p-8 md:grid-cols-12 md:p-11">
        <div className="md:col-span-5">
          <Logo className="w-[220px]" />
          <p className="mt-5 max-w-sm leading-relaxed text-ink-soft">
            A student and faculty community at {site.institution} ({site.institutionShort}), Chennai, promoting yoga,
            mindfulness and holistic wellbeing.
          </p>
          <Link
            href={joinHref}
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-saffron px-6 text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            Become a member <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] !text-ember">Explore</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 text-[0.95rem]">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="inline-flex min-h-11 items-center font-medium text-ink-soft transition hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] !text-ember">Contact</h2>
          <ul className="mt-5 space-y-4 text-[0.95rem] text-ink-soft">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-rust" aria-hidden />
              <span>{site.contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-rust" aria-hidden />
              <a href={`mailto:${site.contact.email}`} className="-my-2.5 inline-flex min-h-11 items-center break-all hover:text-ink">
                {site.contact.email}
              </a>
            </li>
            {site.contact.phone && (
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-rust" aria-hidden />
                <a href={`tel:${site.contact.phone}`} className="-my-2.5 inline-flex min-h-11 items-center hover:text-ink">
                  {site.contact.phone}
                </a>
              </li>
            )}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {socials.length ? (
              socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-xs font-bold text-white transition hover:bg-black"
                >
                  {s.label}
                </a>
              ))
            ) : (
              <p className="text-xs text-ink-soft">Official social channels will be listed here.</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 px-2 text-xs text-ink-soft md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}, {site.institution}. All rights reserved.
        </p>
        <p className="max-w-xl md:text-right">{stockCredit} {heroVideo.credit}</p>
      </div>
    </footer>
  );
}
