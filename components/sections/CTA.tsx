import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { site } from "@/lib/utils";

export default function CTA() {
  return (
    <div className={site.layout.sectionY}>
      <Container>
        <Card className="hero-glow overflow-hidden border-[var(--brand)]/5 bg-white/75 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <SectionTitle
              id="contact-heading"
              eyebrow={site.homeIntro.contactHeading}
              title={site.ctaSection.title}
              description={site.ctaSection.description}
            />
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href={site.ctaSection.primary.href} variant="primary">
                {site.ctaSection.primary.label}
              </Button>
              <Button href={site.ctaSection.secondary.href} variant="secondary">
                {site.ctaSection.secondary.label}
              </Button>
              <Button href={site.ctaSection.tertiary.href} variant="gold">
                {site.ctaSection.tertiary.label}
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
}
