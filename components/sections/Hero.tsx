import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/widgets/Reveal.client";
import { site } from "@/lib/utils";

export default function Hero() {
  return (
    <section className={`relative overflow-hidden ${site.layout.heroHeight}`}>
      <div className="absolute inset-0 -z-10 bg-[var(--bg)]" />
      <div className="absolute left-[8%] top-28 -z-10 h-32 w-32 rounded-full bg-[var(--highlight)]/30 motion-orb md:h-48 md:w-48" />
      <div className="absolute bottom-16 right-[7%] -z-10 h-28 w-28 rounded-full bg-[var(--accent)]/20 motion-orb md:h-40 md:w-40" />

      <Container className="grid min-h-[inherit] items-center gap-10 py-12 md:grid-cols-[1.02fr_0.98fr] md:py-20">
        <Reveal className="relative">
          <Badge>{site.hero.eyebrow}</Badge>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[0.98] text-[var(--brand)] sm:text-6xl md:text-[4.35rem]">
            {site.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            {site.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={site.hero.primaryCta.href} variant="primary">
              {site.hero.primaryCta.label}
            </Button>
            <Button href={site.hero.secondaryCta.href} variant="secondary">
              {site.hero.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {[
              "Pain relief with a clear recovery plan",
              "Athlete and active lifestyle rehabilitation",
              "Home visits, pelvic health, and balance care"
            ].map((item) => (
              <div key={item} className="rounded-[22px] border border-white/60 bg-white/70 px-4 py-4 text-sm leading-6 text-slate-600 shadow-sm backdrop-blur-sm">
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="premium-card hero-glow relative overflow-hidden rounded-[34px] border-[var(--brand)]/5 bg-white/72 p-4 md:p-5">
            <div className="absolute inset-0 bg-soft-wave opacity-80" />
            <div className="relative overflow-hidden rounded-[28px] bg-[var(--brand)]/6">
              <Image
                src={site.hero.image || "/images/hero-rehab.svg"}
                alt={site.hero.alt || "Physiotherapy hero visual"}
                width={920}
                height={980}
                className="w-full object-cover"
                priority
              />
            </div>

            <div className="relative mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-white/60 bg-white/85 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-secondary)]">Serving</p>
                <p className="mt-2 text-xl font-semibold text-[var(--brand)]">Mossel Bay & Dana Bay</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">Elegant care designed around recovery, mobility, and long-term wellness.</p>
              </div>
              <div className="rounded-[24px] border border-[var(--accent)]/40 bg-[var(--accent)]/10 p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-secondary)]">Focused sessions</p>
                <p className="mt-2 text-xl font-semibold text-[var(--brand)]">1:1 attention</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">A calm clinical setting with a premium patient experience and clear outcomes.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
