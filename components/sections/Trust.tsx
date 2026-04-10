import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/widgets/Reveal.client";
import { site } from "@/lib/utils";

export default function Trust() {
  return (
    <div className={site.layout.sectionY}>
      <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <Card className="h-full p-8 md:p-10">
            <SectionTitle
              id="trust-heading"
              eyebrow={site.homeIntro.trustHeading}
              title={site.trust.title}
              description={site.trust.description}
            />
          </Card>
        </Reveal>

        <Reveal delay={120} className="grid gap-6">
          <Card className="p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {site.trust.stats?.map((stat) => (
                <div key={stat.label} className="rounded-[22px] border border-[var(--surface)] bg-white/70 p-5">
                  <p className="text-4xl font-semibold text-[var(--brand)]">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-[var(--brand)]">Why patients and referrers feel confident here</h3>
            <ul className="mt-5 space-y-4">
              {site.trust.qualifications?.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-slate-600">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </Container>
    </div>
  );
}
