"use client";

import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Toast({
  open,
  message,
  onClose
}: {
  open: boolean;
  message: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(onClose, 3200);
    return () => window.clearTimeout(timer);
  }, [open, onClose]);

  return (
    <div
      aria-live="polite"
      className={cn(
        "pointer-events-none fixed bottom-24 right-4 z-[70] w-[calc(100%-2rem)] max-w-sm transition duration-300 sm:bottom-8",
        open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      )}
    >
      <div className="pointer-events-auto flex items-start gap-3 rounded-3xl border border-emerald-200 bg-white px-4 py-4 shadow-soft">
        <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
        <p className="flex-1 text-sm leading-6 text-slate-700">{message}</p>
        <button
          onClick={onClose}
          className="rounded-full p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
          aria-label="Close notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
