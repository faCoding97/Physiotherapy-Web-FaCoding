import PageHero from "@/components/sections/PageHero";
import LocationsSection from "@/components/sections/LocationsSection";
import CTA from "@/components/sections/CTA";
import { buildPageMetadata, site } from "@/lib/utils";

export const metadata = buildPageMetadata("locations");

export default function LocationsPage() {
  const page = site.locationsPage;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />
      <section className={`${site.layout.sectionY}`}>
        <LocationsSection />
      </section>
      <CTA />
    </>
  );
}
