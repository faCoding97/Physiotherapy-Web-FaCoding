import PageHero from "@/components/sections/PageHero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/widgets/Reveal.client";
import { buildPageMetadata, site } from "@/lib/utils";

export const metadata = buildPageMetadata("services");

export default function ServicesPage() {
  const page = site.servicesPage;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <section className={`${site.layout.sectionY}`}>
        <ServicesGrid />
      </section>

      <section className="section-divider py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <Card className="h-full p-8 md:p-10">
              <Badge>{page.highlightTitle}</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--brand)] md:text-4xl">
                Who we help most often
              </h2>
              <ul className="mt-6 grid gap-4">
                {page.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 rounded-2xl border border-[var(--surface)] bg-white/75 px-4 py-4 text-slate-600">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card className="h-full overflow-hidden p-0">
              <div className="hero-glow h-full bg-[var(--brand)]/95 p-8 text-white md:p-10">
                <p className="text-sm uppercase tracking-[0.22em] text-white/70">How treatment feels</p>
                <h3 className="mt-3 text-4xl font-semibold">Precise, warm, and confidently progressive.</h3>
                <p className="mt-5 max-w-2xl leading-8 text-white/80">
                  Sessions are designed to feel premium without losing clinical substance. Expect careful listening, a clear explanation of what matters, hands-on care when indicated, and progressive movement work matched to your goals and tolerance.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Hands-on care when clinically helpful",
                    "Movement retraining for quality and confidence",
                    "Progressive exercise prescription",
                    "Clear guidance between sessions"
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-4 text-white/85">
                      {item}
                    </div>
                  ))}
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
