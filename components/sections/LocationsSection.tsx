import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import MapEmbed from "@/components/widgets/MapEmbed.client";
import Reveal from "@/components/widgets/Reveal.client";
import { site } from "@/lib/utils";

export default function LocationsSection({ preview = false }: { preview?: boolean }) {
  const locations = preview ? site.locations : site.locations;

  return (
    <div className={preview ? site.layout.sectionY : ""}>
      <Container>
        <SectionTitle
          id="locations-heading"
          eyebrow={site.homeIntro.locationsHeading}
          title="Visit our Mossel Bay or Dana Bay location."
          description="Two premium practice settings, each designed to feel welcoming, polished, and easy to access."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {locations.map((location, index) => (
            <Reveal key={location.id} delay={index * 60}>
              <Card className="overflow-hidden p-0">
                <div className="grid gap-0">
                  <div className="p-7 md:p-8">
                    <h3 className="text-3xl font-semibold text-[var(--brand)]">{location.name}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">{location.address}</p>
                    <div className="mt-5 space-y-2 text-sm text-slate-500">
                      <a className="block transition hover:text-[var(--brand)]" href={`tel:${location.phone.replace(/\s/g, "")}`}>
                        {location.phone}
                      </a>
                      <a className="block transition hover:text-[var(--brand)]" href={`mailto:${location.email}`}>
                        {location.email}
                      </a>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button href={location.directionsUrl} variant="secondary" target="_blank">
                        Directions
                      </Button>
                      <Button href={`/contact`} variant="ghost">
                        Enquire
                      </Button>
                    </div>
                  </div>
                  <MapEmbed
                    embedSrc={location.mapEmbedSrc}
                    query={location.mapQuery}
                    title={`${location.name} map`}
                    className="border-t border-[var(--surface)]"
                  />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
