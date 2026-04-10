import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Accordion from "@/components/widgets/Accordion";
import { site } from "@/lib/utils";

export default function FAQ() {
  return (
    <div className={site.layout.sectionY}>
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionTitle
          id="faq-heading"
          eyebrow={site.homeIntro.faqHeading}
          title="Questions, answered with clarity."
          description="If you need anything more specific, our team will be happy to help."
        />
        <Accordion items={site.faq} />
      </Container>
    </div>
  );
}
