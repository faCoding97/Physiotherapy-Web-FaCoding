import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ConditionsGrid from "@/components/sections/ConditionsGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReferralSection from "@/components/sections/ReferralSection";
import LocationsSection from "@/components/sections/LocationsSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { buildPageMetadata, site } from "@/lib/utils";

export const metadata = buildPageMetadata("home");

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="trust" aria-labelledby="trust-heading" className="anchor-section section-divider">
        <Trust />
      </section>

      <section id="services" aria-labelledby="services-heading" className="anchor-section section-divider">
        <ServicesGrid preview />
      </section>

      <section id="conditions" aria-labelledby="conditions-heading" className="anchor-section section-divider">
        <ConditionsGrid preview />
      </section>

      <section id="why-us" aria-labelledby="why-us-heading" className="anchor-section section-divider">
        <WhyChooseUs />
      </section>

      <section id="referrals" aria-labelledby="referrals-heading" className="anchor-section section-divider">
        <ReferralSection />
      </section>

      <section id="locations" aria-labelledby="locations-heading" className="anchor-section section-divider">
        <LocationsSection preview />
      </section>

      <section id="testimonials" aria-labelledby="testimonials-heading" className="anchor-section section-divider">
        <Testimonials />
      </section>

      <section id="faq" aria-labelledby="faq-heading" className="anchor-section section-divider">
        <FAQ />
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="anchor-section section-divider">
        <CTA />
      </section>
    </>
  );
}
