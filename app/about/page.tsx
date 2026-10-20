import type { Metadata } from "next";
import { Activity, Brain, Eye, HeartPulse, Salad, Wind } from "lucide-react";
import { Disclaimer } from "@/components/sections/Disclaimer";
import { EditorialRow, InfoPanel } from "@/components/sections/EditorialRow";
import { EvidenceCard } from "@/components/sections/EvidenceCard";
import { JoinCta } from "@/components/sections/JoinCta";
import { PageHero } from "@/components/sections/PageHero";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fourK, photos } from "@/data/images";
import { evidenceLabels, evidenceTopics } from "@/data/research";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Yoga",
  description: "The meaning, history and philosophy of yoga, why it matters, what research suggests, and the purpose of SRIHER Yoga Club.",
  alternates: { canonical: "/about" },
};

const importance = [
  { icon: Activity, title: "Flexibility & balance", text: "Postures move joints through their range and train steadiness, and can be adapted to most abilities." },
  { icon: HeartPulse, title: "Relaxation & stress", text: "Many people find practice calming; research links yoga with lower self-reported stress." },
  { icon: Wind, title: "Mindful breathing", text: "Slow, unhurried breathing helps the body settle and connects movement with attention." },
  { icon: Eye, title: "Body awareness", text: "Noticing sensation and posture helps people spot tension and move with more care." },
  { icon: Brain, title: "Mental wellbeing", text: "Meditation trains attention and can support a calmer, clearer relationship with thoughts." },
  { icon: Salad, title: "Healthy habits", text: "Yoga sits naturally alongside good sleep, nutrition, activity and connection." },
];

const limbs = [
  ["Yama", "ethical restraints"],
  ["Niyama", "personal observances"],
  ["Asana", "steady, comfortable posture"],
  ["Pranayama", "regulation of the breath"],
  ["Pratyahara", "withdrawal of the senses"],
  ["Dharana", "concentration"],
  ["Dhyana", "meditation"],
  ["Samadhi", "absorption"],
];

const commitments = [
  { title: "Our Vision", text: "A campus where yoga and mindfulness are understood, valued and practised as part of everyday wellbeing." },
  { title: "Our Mission", text: "To offer accessible, safe and inclusive yoga practice, and share balanced, evidence-informed knowledge about yoga’s role in health and wellbeing." },
  { title: "Our Approach", text: "Guided practice for every level, taught slowly and safely, with clear explanations of both tradition and research." },
  { title: "Community Engagement", text: "Open sessions, awareness programmes and collaborations that bring yoga to the wider campus and community." },
];

const objectives = [
  "Offer regular guided yoga, pranayama and meditation sessions",
  "Raise awareness of yoga’s traditions and current research",
  "Support student and faculty wellbeing through practice",
  "Build an inclusive community across departments",
];

export default function AboutPage() {
  return (
    <>
      {/* A. Hero */}
      <PageHero
        size="full"
        photo={fourK.palms}
        imgClassName="object-[50%_40%]"
        eyebrow="About yoga"
        title={<>The art and science <span className="accent">of yoga</span></>}
        intro="Discover a timeless practice that brings together movement, breath, awareness and holistic wellbeing."
      />

      {/* B. What is yoga */}
      <section id="what-is-yoga" aria-labelledby="what-title" className="container-zen scroll-mt-28 pt-24 md:pt-32">
        <h2 id="what-title" className="sr-only">What is yoga?</h2>
        <EditorialRow
          photo={photos.namasteMat}
          eyebrow="Understanding yoga"
          title={<>What is <span className="accent">yoga?</span></>}
          aside={
            <InfoPanel label="Did you know?">
              The United Nations proclaimed 21 June the International Day of Yoga in 2014, and UNESCO inscribed yoga on its list of
              the Intangible Cultural Heritage of Humanity in 2016.
            </InfoPanel>
          }
        >
          <p>
            The word <em>yoga</em> comes from the Sanskrit root <em>yuj</em>, meaning to join or unite. It describes both a set of
            practices and the steady, attentive state of mind those practices aim to cultivate.
          </p>
          <p>
            Yoga developed in ancient India and is discussed in classical texts such as the Upanishads, the Bhagavad Gita and
            Patanjali’s Yoga Sutras. Later hatha yoga texts placed greater emphasis on posture and breath, laying foundations for
            much of the practice familiar today.
          </p>
          <p>
            It is a holistic discipline: physical postures (asana), breathing practices (pranayama) and meditation (dhyana) work
            together, supported by ethical principles. That breadth is what makes yoga relevant to modern life, as a practical way
            to look after body and mind amid study, work and constant connectivity.
          </p>
        </EditorialRow>
      </section>

      {/* C. Why yoga is important */}
      <PhotoBand id="importance" photo={fourK.lake} labelledBy="importance-title">
        <Reveal className="glass mx-auto max-w-2xl rounded-[2rem] !bg-white/90 px-7 py-7 text-center">
          <p className="eyebrow">The importance of yoga</p>
          <h2 id="importance-title" className="mt-2 text-4xl leading-tight sm:text-5xl">
            Why yoga is <span className="accent">important</span>
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {importance.map((c) => (
            <StaggerItem key={c.title} className="glass rounded-[1.75rem] !bg-white/90 p-7">
              <span className="grid size-12 place-items-center rounded-2xl bg-sunset/10 text-saffron"><c.icon className="size-6" aria-hidden /></span>
              <h3 className="mt-5 text-xl">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{c.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </PhotoBand>

      {/* D. Dimensions */}
      <section id="dimensions" aria-labelledby="dimensions-title" className="container-zen scroll-mt-28 pt-24 md:pt-32">
        <SectionHeading
          align="center"
          eyebrow="The dimensions of yoga"
          title={<span id="dimensions-title">Exploring the <span className="accent">dimensions of yoga</span></span>}
          intro="Four threads run through every practice. Each supports the others."
        />
        <div className="mt-16 space-y-24 md:space-y-32">
          <EditorialRow photo={photos.eagleArms} index="01" eyebrow="Physical practice" title={<>Asana</>}>
            <p>
              Asanas are the postures of yoga. Patanjali describes a posture as <em>sthira sukham</em>: steady and comfortable.
              Standing poses build strength and balance; forward bends and twists bring mobility; backbends open the chest.
            </p>
            <p>Practised with attention, postures become a way of noticing the body rather than forcing it.</p>
          </EditorialRow>
          <EditorialRow photo={photos.grassMeditation} reverse index="02" eyebrow="Breath" title={<>Pranayama</>}>
            <p>
              Pranayama means regulation or extension of the breath. Traditional techniques slow, lengthen or pattern the breath,
              and are usually practised seated after postures.
            </p>
            <p>Gentle techniques suit beginners; forceful or breath-holding practices should be learned from a qualified teacher.</p>
          </EditorialRow>
          <EditorialRow photo={photos.cloudsMeditation} index="03" eyebrow="Meditation" title={<>Dhyana</>}>
            <p>
              Dhyana is meditation: sustained, uninterrupted attention. For beginners it often starts with resting attention on the
              breath, noticing when the mind wanders, and returning without judgement.
            </p>
            <p>Over time this builds mindful awareness that carries into daily life.</p>
          </EditorialRow>
          <EditorialRow
            photo={photos.treeSilhouette}
            reverse
            index="04"
            eyebrow="Philosophy"
            title={<>Yoga philosophy</>}
            aside={
              <ol className="grid gap-2 sm:grid-cols-2">
                {limbs.map(([name, meaning], i) => (
                  <li key={name} className="glass flex items-baseline gap-3 rounded-xl px-4 py-3 text-sm">
                    <span className="font-bold text-saffron">{i + 1}</span>
                    <span><strong className="text-maroon">{name}</strong> <span className="text-ink-soft">— {meaning}</span></span>
                  </li>
                ))}
              </ol>
            }
          >
            <p>
              Patanjali’s Yoga Sutras define yoga as the stilling of the fluctuations of the mind (<em>yogas chitta vritti
              nirodhah</em>, 1.2) and describe an eight-limbed path, <em>ashtanga</em>, that moves from how we live to how we
              sit, breathe and attend.
            </p>
          </EditorialRow>
        </div>
      </section>

      {/* E. Science */}
      <section id="science" aria-labelledby="science-title" className="bg-sunrise mt-24 scroll-mt-28 py-24 md:mt-32">
        <div className="container-zen">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <SectionHeading
              className="lg:col-span-7"
              eyebrow="Research"
              title={<span id="science-title">Ancient wisdom. <span className="accent">Modern science.</span></span>}
              intro="Yoga is studied in clinical and academic research. Findings are encouraging in some areas and still emerging in others, so we label each by the strength of the evidence."
            />
            <Reveal className="glass rounded-[1.75rem] p-6 lg:col-span-5">
              <ul className="space-y-3 text-sm">
                {Object.entries(evidenceLabels).map(([k, v]) => (
                  <li key={k} className="flex gap-3">
                    <span aria-hidden className={`mt-1.5 size-2.5 shrink-0 rounded-full ${k === "consistent" ? "bg-saffron" : k === "moderate" ? "bg-gold" : "bg-white ring-2 ring-ink/25"}`} />
                    <span><strong className="text-maroon">{v.label}</strong> <span className="text-ink-soft">— {v.note}</span></span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {evidenceTopics.map((t) => (
              <StaggerItem key={t.title}><EvidenceCard topic={t} /></StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10"><Disclaimer /></Reveal>
        </div>
      </section>

      {/* F. Our club */}
      <section id="club" aria-labelledby="club-title" className="container-zen scroll-mt-28 pt-24 md:pt-32">
        <SectionHeading
          eyebrow="SRIHER Yoga Club"
          title={<span id="club-title">Our club. <span className="accent">Our commitment.</span></span>}
          intro={`A community of students and faculty at ${site.institution}, Chennai, dedicated to yoga, mindfulness and holistic wellbeing.`}
        />
        <p className="mt-6 inline-flex rounded-full bg-ivory px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-ember">
          Draft statements, awaiting official club approval
        </p>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
          {commitments.map((c) => (
            <StaggerItem key={c.title} className="glass rounded-[2rem] p-8">
              <h3 className="text-2xl">{c.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">{c.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-5 rounded-[2rem] border border-line bg-white p-8">
          <h3 className="text-2xl">Our Objectives</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {objectives.map((o) => (
              <li key={o} className="flex gap-3 text-ink-soft">
                <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-sunset" />
                {o}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <JoinCta />
    </>
  );
}
