import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/widgets/Reveal.client";
import { site } from "@/lib/utils";

export default function WhyChooseUs() {
  return (
    <div className={site.layout.sectionY}>
      <Container>
        <SectionTitle
          id="why-us-heading"
          eyebrow={site.homeIntro.whyUsHeading}
          title="Why patients choose a more refined standard of physiotherapy care."
          description="Everything is designed to feel clinically grounded, personally attentive, and practically helpful."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {site.whyChooseUs.map((item, index) => (
            <Reveal key={item.id} delay={index * 40}>
              <Card className="h-full p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[var(--brand)]">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
