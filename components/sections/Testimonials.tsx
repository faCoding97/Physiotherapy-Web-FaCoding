import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Carousel from "@/components/widgets/Carousel.client";
import { site } from "@/lib/utils";

export default function Testimonials() {
  return (
    <div className={site.layout.sectionY}>
      <Container>
        <SectionTitle
          id="testimonials-heading"
          eyebrow={site.homeIntro.testimonialsHeading}
          title="Elegant care that patients genuinely remember."
          description="Realistic local-feeling feedback centred on reassurance, kindness, and measurable recovery."
          align="center"
        />
        <div className="mt-10">
          <Carousel />
        </div>
      </Container>
    </div>
  );
}
