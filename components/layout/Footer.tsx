import Link from "next/link";
import Container from "@/components/ui/Container";
import { site } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="section-divider mt-10 border-t border-white/50 bg-white/65 py-14 backdrop-blur-sm">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/brand-mark.svg" alt="Moss & Bay Physiotherapy brand mark" className="h-12 w-12 rounded-full" />
            <div className="leading-none">
              <span className="block font-[var(--font-heading)] text-3xl font-semibold text-[var(--brand)]">Moss & Bay</span>
              <span className="block pt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">Physiotherapy</span>
            </div>
          </div>
          <p className="mt-5 max-w-xl leading-8 text-slate-600">{site.footer.description}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {site.locations.map((location) => (
              <div key={location.id} className="rounded-[24px] border border-[var(--surface)] bg-white/75 p-5">
                <p className="text-lg font-semibold text-[var(--brand)]">{location.name}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{location.address}</p>
                <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="mt-3 block text-sm text-[var(--brand-secondary)] hover:text-[var(--brand)]">
                  {location.phone}
                </a>
                <a href={`mailto:${location.email}`} className="mt-1 block text-sm text-[var(--brand-secondary)] hover:text-[var(--brand)]">
                  {location.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[var(--brand)]">{site.footer.quickLinksTitle}</h3>
          <ul className="mt-5 space-y-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link className="text-slate-600 transition hover:text-[var(--brand)]" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[var(--brand)]">{site.footer.contactTitle}</h3>
          <div className="mt-5 space-y-4">
            <a className="block text-slate-600 transition hover:text-[var(--brand)]" href={`tel:${site.contact.phone.replace(/\s/g, "")}`}>
              {site.contact.phone}
            </a>
            <a className="block text-slate-600 transition hover:text-[var(--brand)]" href="https://wa.me/27725550188">
              {site.contact.whatsapp}
            </a>
            <a className="block text-slate-600 transition hover:text-[var(--brand)]" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
            <a className="block text-slate-600 transition hover:text-[var(--brand)]" href="/locations">
              View both locations
            </a>
          </div>

          <div className="mt-8">
            <p className="text-gray-900 flex flex-col sm:flex-row items-center gap-2 sm:gap-1">
              <span className="whitespace-nowrap">Written by:</span>
              <a
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm sm:text-base"
                href="https://elixcode.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src="/logo/logo.png"
                  alt="Elix Code Logo"
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
                Elix Code
              </a>
            </p>
          </div>
        </div>
      </Container>

      <Container className="mt-10 border-t border-[var(--surface)] pt-6">
        <p className="text-sm text-slate-500">{site.footer.copyright}</p>
      </Container>
    </footer>
  );
}
