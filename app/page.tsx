import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, HeartPulse, Leaf, Sparkles, Sprout, Wind } from "lucide-react";
import { VideoHero } from "@/components/sections/VideoHero";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fourK, photos } from "@/data/images";
import { JsonLd } from "@/components/seo/JsonLd";
import { joinHref, site } from "@/data/site";
import { pageMetadata, webPageLd } from "@/lib/seo";

export const revalidate = 3600;

const title = "SRIHER Yoga Club | Yoga & Meditation in Porur, Chennai";
const description =
  "Join SRIHER Yoga Club at Sri Ramachandra Institute, Porur, Chennai: guided yoga, pranayama and meditation for students and faculty, for every level.";

export const metadata: Metadata = pageMetadata({ title, description, path: "/", absoluteTitle: true });

const essence = [
  { title: "Mind", text: "Steadier attention and a calmer response to everyday pressure." },
  { title: "Body", text: "Strength, mobility and balance built through mindful movement." },
  { title: "Breath", text: "Slow, conscious breathing that links movement and stillness." },
  { title: "Awareness", text: "Noticing sensations, thoughts and habits with curiosity." },
];

const benefits = [
  { icon: HeartPulse, title: "Physical Wellbeing", text: "Regular practice may support flexibility, balance and strength, and can be adapted to most bodies and ages." },
  { icon: Brain, title: "Mental Wellbeing", text: "Studies link yoga and meditation with lower self-reported stress. Effects are generally modest and vary between people." },
  { icon: Wind, title: "Mindful Breathing", text: "Slow, controlled breathing is associated with feelings of relaxation and a calmer body." },
  { icon: Sparkles, title: "Focus & Awareness", text: "Meditation trains attention: noticing when the mind wanders, and gently returning." },
  { icon: Sprout, title: "Holistic Lifestyle", text: "Yoga works best alongside good sleep, nutrition, activity, connection and medical care." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageLd({ path: "/", name: title, description })} />

      {/* A. Cinematic video hero — CSS-only entrance so the LCP text paints without waiting for JS */}
      <VideoHero>
        <div className="rise max-w-3xl text-white">
          <h1 id="hero-title" className="!text-white">
            <span className="block font-sans text-xs font-semibold not-italic uppercase tracking-[0.16em] text-gold sm:text-sm sm:tracking-[0.22em]">
              SRIHER Yoga Club <span aria-hidden className="mx-1.5 text-white/60 sm:mx-2">·</span> Porur, Chennai
            </span>{" "}
            <span className="mt-5 block text-[2.6rem] leading-[1.04] min-[380px]:text-[2.9rem] sm:mt-6 sm:text-7xl lg:text-[5.5rem]">
              Find Your Balance.{" "}
              <br />
              <span className="italic text-gold">Discover Your Strength.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Experience the harmony of mind, body and breath through yoga, pranayama and meditation at {site.institution}.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/about" variant="saffron" icon={<ArrowRight className="size-4" aria-hidden />}>
              Explore Yoga
            </ButtonLink>
            <ButtonLink href="#welcome" variant="ghostDark">
              Discover SRIHER Yoga Club
            </ButtonLink>
          </div>
        </div>
      </VideoHero>

      {/* B. Welcome */}
      <section id="welcome" aria-labelledby="welcome-title" className="container-zen scroll-mt-28 pt-24 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">Where Tradition Meets Wellbeing</p>
            <h2 id="welcome-title" className="mt-4 text-4xl leading-tight sm:text-5xl lg:text-[3.6rem]">
              Welcome to <span className="accent">SRIHER Yoga Club</span>
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                SRIHER Yoga Club is a community within Sri Ramachandra Institute of Higher Education and Research (SRIHER),
                Porur, Chennai, that brings yoga, mindfulness and holistic living into everyday campus life.
              </p>
              <p>
                We offer guided practice, breathwork and meditation for every level, and share clear, evidence-informed
                knowledge about why these practices matter, so that more people can benefit from them safely.
              </p>
            </div>
            <div className="glass mt-8 flex items-start gap-4 rounded-2xl p-5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sunset/10 text-saffron"><Leaf className="size-5" aria-hidden /></span>
              <p className="text-ink">
                <strong className="text-maroon">Our focus:</strong> practise with awareness, learn with curiosity and share with care.
              </p>
            </div>
            <ButtonLink href="/about#club" variant="primary" className="mt-8" icon={<ArrowRight className="size-4" aria-hidden />}>
              Learn About Our Club
            </ButtonLink>
          </Reveal>
          <Reveal delay={0.1} className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[0_40px_80px_-40px_rgb(104_20_14/0.5)]">
              <Image src={photos.heroHome.src} alt={photos.heroHome.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" quality={85} className="object-cover object-[50%_35%]" />
            </div>
            <span aria-hidden className="absolute -bottom-6 -left-6 -z-10 size-48 rounded-full bg-gold/30 blur-2xl" />
          </Reveal>
        </div>
      </section>

      {/* C. Discover the essence of yoga */}
      <section aria-labelledby="essence-title" className="container-zen pt-24 md:pt-32">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] px-5 py-16 sm:px-12 md:py-24">
          <Image src={fourK.mountain.src} alt="" fill sizes="100vw" quality={85} className="-z-20 object-cover" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(36_27_25/0.55),rgb(36_27_25/0.1)_70%)]" />
          <Reveal className="glass max-w-2xl rounded-[2rem] !bg-white/88 p-8 sm:p-10">
            <p className="eyebrow">What is yoga?</p>
            <h2 id="essence-title" className="mt-3 text-4xl leading-tight sm:text-5xl">
              Discover the <span className="accent">essence of yoga</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Rooted in India’s ancient traditions, yoga (from the Sanskrit <em>yuj</em>, “to unite”) is a practice that brings
              four parts of us into harmony.
            </p>
            <dl className="mt-7 grid gap-4 sm:grid-cols-2">
              {essence.map((e) => (
                <div key={e.title} className="border-l-2 border-sunset pl-4">
                  <dt className="font-accent text-xl font-semibold text-maroon">{e.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{e.text}</dd>
                </div>
              ))}
            </dl>
            <Link href="/about" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-maroon hover:text-saffron">
              Read more about yoga <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* D. Why yoga matters */}
      <section aria-labelledby="benefits-title" className="bg-sunrise mt-24 py-24 md:mt-32">
        <div className="container-zen">
          <SectionHeading
            align="center"
            eyebrow="Why yoga matters"
            title={<span id="benefits-title">The power of yoga <span className="accent">in everyday life</span></span>}
            intro="Small, regular practice can make a real difference. Here is what yoga can support, described honestly."
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((b) => (
              <StaggerItem key={b.title} className="glass group rounded-[1.75rem] p-7 transition duration-500 hover:-translate-y-1.5">
                <span className="grid size-12 place-items-center rounded-2xl bg-sunset/10 text-saffron transition group-hover:bg-saffron group-hover:text-white">
                  <b.icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl">{b.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{b.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* H. Join our community */}
      <section aria-labelledby="community-title" className="container-zen pt-24 md:pt-32">
        <Reveal className="relative isolate overflow-hidden rounded-[2.5rem] bg-ivory px-7 py-16 text-center sm:px-14 md:py-24">
          <span aria-hidden className="absolute -left-24 -top-24 -z-10 size-96 rounded-full bg-sunset/15 blur-3xl" />
          <span aria-hidden className="absolute -bottom-24 -right-24 -z-10 size-96 rounded-full bg-gold/25 blur-3xl" />
          <p className="eyebrow">Join our community</p>
          <h2 id="community-title" className="mx-auto mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
            Begin your journey <span className="accent">towards balance</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Explore yoga, connect with a wellness-focused community and discover opportunities to participate in our activities.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <ButtonLink href={joinHref} variant="saffron" icon={<ArrowRight className="size-4" aria-hidden />}>
              Join the Club
            </ButtonLink>
            <ButtonLink href="/about" variant="outline">Learn About Yoga</ButtonLink>
          </div>
          <Link href="/team" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-maroon hover:text-saffron">
            Meet the 2026–27 board <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
