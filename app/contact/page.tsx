import PageHero from "@/components/sections/PageHero";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm.client";
import CTA from "@/components/sections/CTA";
import Reveal from "@/components/widgets/Reveal.client";
import { buildPageMetadata, site } from "@/lib/utils";

export const metadata = buildPageMetadata("contact");

export default function ContactPage() {
  const page = site.contactPage;

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <section className={`${site.layout.sectionY}`}>
        <Container className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <Card className="p-8 md:p-10">
              <Badge>{page.formTitle}</Badge>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--brand)] md:text-4xl">
                {page.formDescription}
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">{page.emergencyNote}</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-6">
              <Card className="overflow-hidden p-0">
                <div className="hero-glow bg-[var(--brand)] p-8 text-white md:p-10">
                  <p className="text-sm uppercase tracking-[0.22em] text-white/70">Quick contact</p>
                  <div className="mt-5 space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/60">Call</p>
                      <a className="mt-2 block text-2xl font-semibold hover:text-white/80" href="tel:+27441112040">
                        {site.contact.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/60">WhatsApp</p>
                      <a className="mt-2 block text-2xl font-semibold hover:text-white/80" href="https://wa.me/27725550188">
                        {site.contact.whatsapp}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/60">Email</p>
                      <a className="mt-2 block text-xl font-semibold hover:text-white/80" href={`mailto:${site.contact.email}`}>
                        {site.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <Badge>Both practice locations</Badge>
                <div className="mt-5 space-y-6">
                  {site.locations.map((location) => (
                    <div key={location.id} className="rounded-2xl border border-[var(--surface)] bg-white/70 p-5">
                      <p className="text-xl font-semibold text-[var(--brand)]">{location.name}</p>
                      <p className="mt-2 leading-7 text-slate-600">{location.address}</p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Button href={location.directionsUrl} variant="secondary" target="_blank">
                          Directions
                        </Button>
                        <Button href={`mailto:${location.email}`} variant="ghost">
                          Email Practice
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTA />
    </>
  );
}
