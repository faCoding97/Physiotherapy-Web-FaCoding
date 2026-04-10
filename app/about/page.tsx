import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/widgets/Reveal.client";
import CTA from "@/components/sections/CTA";
import { buildPageMetadata, site } from "@/lib/utils";

export const metadata = buildPageMetadata("about");

export default function AboutPage() {
  const about = site.aboutPage;

  return (
    <>
      <PageHero eyebrow={about.eyebrow} title={about.title} description={about.description} />

      <section className={`${site.layout.sectionY}`}>
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Card className="h-full p-8 md:p-10">
              <Badge>{about.storyTitle}</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--brand)] md:text-4xl">
                Care that feels clear, calm, and deeply considered.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                {about.story}
              </p>
              <div className="mt-8 rounded-[28px] bg-[var(--surface)]/60 p-6">
                <h3 className="text-2xl font-semibold text-[var(--brand)]">{about.philosophyTitle}</h3>
                <p className="mt-4 leading-8 text-slate-600">{about.philosophy}</p>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              <Card className="p-8">
                <Badge>{about.credentialsTitle}</Badge>
                <ul className="mt-5 space-y-4">
                  {about.credentials.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-slate-600">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="overflow-hidden p-0">
                <div className="hero-glow h-40 bg-[var(--brand)]/90 px-8 py-8 text-white">
                  <p className="text-sm uppercase tracking-[0.22em] text-white/70">{about.processTitle}</p>
                  <h3 className="mt-3 text-3xl font-semibold">A premium recovery pathway.</h3>
                </div>
                <div className="space-y-4 p-8">
                  {about.process.map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-sm font-semibold text-[var(--brand)]">
                        0{index + 1}
                      </div>
                      <p className="pt-1 leading-7 text-slate-600">{step}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <Card className="hero-glow overflow-hidden border-[var(--brand)]/10 bg-[var(--brand)] px-8 py-10 text-white md:px-12 md:py-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <Badge className="border-white/20 bg-white/10 text-white">Need a tailored rehabilitation plan?</Badge>
                <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                  Let’s create a treatment path that is elegant in delivery and rigorous in results.
                </h2>
              </div>
              <Button href="/contact" variant="gold">
                Book Appointment
              </Button>
            </div>
          </Card>
        </Container>
      </section>

      <CTA />
    </>
  );
}
