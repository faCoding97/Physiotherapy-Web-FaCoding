import PageHero from "@/components/sections/PageHero";
import ConditionsGrid from "@/components/sections/ConditionsGrid";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/widgets/Reveal.client";
import { buildPageMetadata, site } from "@/lib/utils";

export const metadata = buildPageMetadata("conditions");

export default function ConditionsPage() {
  const page = site.conditionsPage;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <section className={`${site.layout.sectionY}`}>
        <ConditionsGrid />
      </section>

      <section className="section-divider py-20">
        <Container>
          <Reveal>
            <Card className="grid gap-8 overflow-hidden bg-white/85 p-8 md:grid-cols-[0.9fr_1.1fr] md:p-10">
              <div>
                <Badge>{page.journeyTitle}</Badge>
                <h2 className="mt-4 text-3xl font-semibold text-[var(--brand)] md:text-4xl">
                  Every rehabilitation journey starts by understanding what is truly driving symptoms.
                </h2>
                <p className="mt-5 leading-8 text-slate-600">
                  Rather than treating symptoms in isolation, we consider movement habits, loading history, tissue healing, nervous system sensitivity, and the daily or sporting tasks that matter most to you.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {page.journey.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-[var(--surface)] bg-[var(--surface)]/55 p-5"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
                      Step {index + 1}
                    </p>
                    <p className="mt-3 text-lg text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      <CTA />
    </>
  );
}
