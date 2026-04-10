import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/widgets/Reveal.client";
import { iconMap, site } from "@/lib/utils";

export default function ConditionsGrid({ preview = false }: { preview?: boolean }) {
  const conditions = preview ? site.conditions.slice(0, 8) : site.conditions;

  return (
    <div className={preview ? site.layout.sectionY : ""}>
      <Container>
        <SectionTitle
          id="conditions-heading"
          eyebrow={site.homeIntro.conditionsHeading}
          title="Conditions treated with clinical precision and calm reassurance."
          description="We help patients move beyond pain, dysfunction, and uncertainty with assessment-driven treatment and progressive rehabilitation."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {conditions.map((condition, index) => {
            const Icon = iconMap[condition.icon as keyof typeof iconMap] || iconMap.activity;

            return (
              <Reveal key={condition.id} delay={index * 35}>
                <Card className="h-full p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--brand)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--brand)]">{condition.title}</h3>
                </Card>
              </Reveal>
            );
          })}
        </div>

        {preview ? (
          <div className="mt-10 flex justify-center">
            <Button href="/conditions-treated" variant="secondary">
              Explore all conditions
            </Button>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
