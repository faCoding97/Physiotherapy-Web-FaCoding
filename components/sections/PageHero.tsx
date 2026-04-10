import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { site } from "@/lib/utils";

export default function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden pb-8 pt-10 md:pb-12 md:pt-16">
      <Container>
        <div className="premium-card hero-glow overflow-hidden border-[var(--brand)]/5 bg-white/72 px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-3xl">
            {eyebrow ? <Badge>{eyebrow}</Badge> : null}
            <h1 className="mt-5 text-balance text-5xl font-semibold leading-tight text-[var(--brand)] md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">{description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
