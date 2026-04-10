"use client";

import { MessageCircleMore } from "lucide-react";

export default function FloatingWhatsApp({ phone }: { phone: string }) {
  const clean = phone.replace(/[^\d]/g, "");

  return (
    <a
      href={`https://wa.me/${clean}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-[60] inline-flex items-center gap-3 rounded-full bg-[var(--brand)] px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:translate-y-[-2px] hover:bg-[var(--brand-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:bottom-8 sm:right-8"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
