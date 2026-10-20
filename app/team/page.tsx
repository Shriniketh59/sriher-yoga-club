import type { Metadata } from "next";
import { JoinCta } from "@/components/sections/JoinCta";
import { PageHero } from "@/components/sections/PageHero";
import { TeamDirectory } from "@/components/sections/TeamDirectory";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { members } from "@/data/team";
import { absoluteUrl, breadcrumbLd, ids, pageMetadata, webPageLd } from "@/lib/seo";

const title = "Board Members & Council In-charges 2026–27";
const description =
  "Meet the 2026–27 SRIHER Yoga Club board: chairperson, secretary, treasurer, editorial and social media heads, and council in-charges at Sri Ramachandra, Chennai.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/team",
  image: { url: "/og/og-team.jpg", alt: "SRIHER Yoga Club board members 2026–27" },
  keywords: ["SRIHER Yoga Club team", "SRIHER Yoga Club board members", "SRIHER club office bearers"],
});

const peopleLd = {
  "@type": "ItemList",
  name: `${site.name} board 2026–27`,
  itemListElement: members.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Person",
      name: m.name,
      jobTitle: m.clubRole,
      ...(m.photo ? { image: absoluteUrl(m.photo) } : {}),
      memberOf: { "@id": ids.organization },
    },
  })),
};

export default function TeamPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageLd({ path: "/team", name: `${title} | ${site.name}`, description, image: "/og/og-team.jpg" }),
          breadcrumbLd([{ name: "Team", path: "/team" }]),
          peopleLd,
        ]}
      />
      <PageHero
        eyebrow="Board members · 2026–27"
        title={<>The people behind <span className="accent">SRIHER Yoga Club</span></>}
        intro="The student board guiding the SRIHER Yoga Club this academic year: programmes, editorial, communications and finance."
      />

      <section aria-label="Team directory" className="container-zen py-20 md:py-28">
        <TeamDirectory />
      </section>

      <JoinCta />
    </>
  );
}
