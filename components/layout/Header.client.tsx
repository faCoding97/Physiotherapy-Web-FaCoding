"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn, site } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled ? "py-3" : "py-4"
      )}
    >
      <Container>
        <div
          className={cn(
            "frosted-border flex items-center justify-between rounded-full px-4 py-3 transition duration-300 md:px-6",
            scrolled ? "bg-white/92 shadow-card backdrop-blur-xl" : "bg-white/78 backdrop-blur-xl"
          )}
        >
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src="/images/brand-mark.svg" alt="Moss & Bay Physiotherapy brand mark" className="h-11 w-11 rounded-full" />
            <div className="leading-none">
              <span className="block font-[var(--font-heading)] text-2xl font-semibold text-[var(--brand)]">
                Moss & Bay
              </span>
              <span className="block pt-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                Physiotherapy
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-[var(--brand)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="tel:+27441112040" variant="ghost" className="px-4">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </Button>
            <Button href="/contact" variant="primary">
              Book Appointment
            </Button>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--surface)] bg-white/80 text-[var(--brand)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "fixed inset-0 top-[88px] z-40 bg-[var(--bg)]/98 px-4 pb-8 pt-6 backdrop-blur transition duration-300 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <Container className="premium-card h-full p-6">
          <nav className="flex flex-col gap-2">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-[var(--surface)] hover:text-[var(--brand)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 space-y-3">
            <Button href="/contact" variant="primary" className="w-full">
              Book Appointment
            </Button>
            <Button href="https://wa.me/27725550188" variant="secondary" className="w-full">
              Call / WhatsApp
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
