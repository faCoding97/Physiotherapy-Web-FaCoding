import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/widgets/Reveal.client";
import ReferralActions from "@/components/sections/ReferralActions.client";
import { buildPageMetadata, site } from "@/lib/utils";

export const metadata = buildPageMetadata("referrals");

export default function ReferralsPage() {
  const page = site.referralsPage;
  const referral = site.referrals[0];

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <section className={`${site.layout.sectionY}`}>
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
          <Reveal>
            <Card className="h-full p-8 md:p-10">
              <Badge>{page.collaborationTitle}</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--brand)] md:text-4xl">
                Collaboration that supports clinical continuity and patient confidence.
              </h2>
              <ul className="mt-6 space-y-4">
                {page.collaborationPoints.map((point) => (
                  <li key={point} className="flex gap-3 leading-8 text-slate-600">
                    <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card className="h-full overflow-hidden p-0">
              <div className="hero-glow bg-[var(--brand)] p-8 text-white md:p-10">
                <p className="text-sm uppercase tracking-[0.22em] text-white/70">Referral process</p>
                <div className="mt-6 space-y-5">
                  {page.process.map((step, index) => (
                    <div key={step} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 font-semibold">
                        {index + 1}
                      </div>
                      <p className="leading-7 text-white/85">{step}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-white/75">
                  {page.note}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={referral.pdfHref} variant="secondary" target="_blank">
                    {referral.pdfLabel}
                  </Button>
                  <ReferralActions />
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      <CTA />
    </>
  );
}
