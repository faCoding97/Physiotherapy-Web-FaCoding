"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Modal({
  open,
  title,
  onClose,
  children
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/50 px-4 transition duration-300",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      onClick={onClose}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "w-full max-w-2xl rounded-[28px] border border-white/10 bg-[var(--bg)] p-6 shadow-soft transition duration-300 md:p-8",
          open ? "translate-y-0" : "translate-y-4"
        )}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="modal-title" className="text-3xl font-semibold text-[var(--brand)]">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-full border border-[var(--surface)] bg-white p-2 text-[var(--brand)] transition hover:bg-[var(--surface)]"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 text-slate-600">{children}</div>
      </div>
    </div>
  );
}
