import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/widgets/Reveal.client";
import { iconMap, site } from "@/lib/utils";

export default function ServicesGrid({ preview = false }: { preview?: boolean }) {
  const services = preview ? site.services.slice(0, 6) : site.services;

  return (
    <div className={preview ? site.layout.sectionY : ""}>
      <Container>
        <SectionTitle
          id="services-heading"
          eyebrow={site.homeIntro.servicesHeading}
          title="Comprehensive premium physiotherapy services."
          description="From precise pain treatment to progressive rehabilitation and wellness-led movement care, services are delivered with clinical sophistication and warmth."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || iconMap.activity;

            return (
              <Reveal key={service.id} delay={index * 40}>
                <Card className="group h-full p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--brand)] transition group-hover:bg-[var(--brand)] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-[var(--brand)]">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{service.short}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-500">{service.description}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {preview ? (
          <div className="mt-10 flex justify-center">
            <Button href="/services" variant="secondary">
              View all services
            </Button>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
