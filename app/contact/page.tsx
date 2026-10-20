import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { JoinForm } from "@/components/sections/JoinForm";
import { PageHero } from "@/components/sections/PageHero";
import { Pending } from "@/components/ui/Pending";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { breadcrumbLd, ids, pageMetadata, webPageLd } from "@/lib/seo";

const title = "Contact & Join the Club";
const description =
  "Contact SRIHER Yoga Club or register your interest: students, faculty and visitors at Sri Ramachandra Institute, Porur, Chennai. No experience needed.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/contact",
  image: { url: "/og/og-contact.jpg", alt: "Join SRIHER Yoga Club — your practice begins here" },
  keywords: ["join SRIHER Yoga Club", "SRIHER Yoga Club contact", "yoga club registration Chennai"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({
            type: "ContactPage",
            path: "/contact",
            name: `${title} | ${site.name}`,
            description,
            image: "/og/og-contact.jpg",
            extra: { mainEntity: { "@id": ids.organization } },
          }),
          breadcrumbLd([{ name: "Contact", path: "/contact" }]),
        ]}
      />
      <PageHero
        eyebrow="Contact & join"
        title={
          <>
            Join SRIHER Yoga Club.
            <br />
            <em className="text-gradient-sun font-medium">Your practice begins here</em>
          </>
        }
        intro="Whether you are a student, faculty member or a visitor curious about yoga, we would love to hear from you."
      />

      <section id="join" aria-labelledby="join-title" className="bg-sunrise scroll-mt-28 py-20 md:py-28">
        <div className="container-zen grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Join the club"
              title={<span id="join-title">Get in touch or join</span>}
              intro="Club membership is for the SRIHER community. Anyone can ask about open events or send a general enquiry. No prior experience needed."
            />
            <Reveal delay={0.1} className="mt-10 space-y-4">
              <div className="glass flex gap-4 rounded-2xl p-5">
                <Mail className="mt-0.5 size-5 shrink-0 text-sunset" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-ember">Email</p>
                  <a href={`mailto:${site.contact.email}`} className="mt-1 flex min-h-11 w-fit items-center break-all text-ink hover:text-maroon">
                    {site.contact.email}
                  </a>
                  <Pending className="mt-2">Official address pending</Pending>
                </div>
              </div>
              <div className="glass flex gap-4 rounded-2xl p-5">
                <Phone className="mt-0.5 size-5 shrink-0 text-sunset" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-ember">Phone</p>
                  {site.contact.phone ? (
                    <a href={`tel:${site.contact.phone}`} className="mt-1 block text-ink hover:text-maroon">{site.contact.phone}</a>
                  ) : (
                    <Pending className="mt-2">To be announced</Pending>
                  )}
                </div>
              </div>
              <div className="glass flex gap-4 rounded-2xl p-5">
                <MapPin className="mt-0.5 size-5 shrink-0 text-sunset" aria-hidden />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-ember">Find us</p>
                  <p className="mt-1 text-ink">{site.institution}</p>
                  <p className="text-sm text-ink-soft">{site.location}</p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-8">
            <JoinForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
