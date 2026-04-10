import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/widgets/Reveal.client";
import { site } from "@/lib/utils";

export default function ReferralSection() {
  const referral = site.referrals[0];

  return (
    <div className={site.layout.sectionY}>
      <Container>
        <Reveal>
          <Card className="hero-glow overflow-hidden bg-[var(--brand)] px-8 py-10 text-white md:px-12 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
              <div>
                <Badge className="border-white/15 bg-white/10 text-white">{site.homeIntro.referralsHeading}</Badge>
                <h2 id="referrals-heading" className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                  {referral.title}
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
                  {referral.description}
                </p>
              </div>

              <div className="grid gap-4">
                {[
                  "Continuity of care with professional communication",
                  "Support for musculoskeletal, neurological, vestibular, pelvic health, and post-operative cases",
                  "Elegant patient experience from first contact to follow-up"
                ].map((item) => (
                  <div key={item} className="rounded-[24px] border border-white/15 bg-white/10 px-5 py-4 text-white/85">
                    {item}
                  </div>
                ))}

                <div className="mt-2 flex flex-wrap gap-3">
                  <Button href={referral.pdfHref} variant="secondary" target="_blank">
                    {referral.pdfLabel}
                  </Button>
                  <Button href={referral.ctaHref} variant="gold">
                    {referral.ctaLabel}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </Container>
    </div>
  );
}
