import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({
  items
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.q} className="group premium-card overflow-hidden px-6 py-1">
          <summary className="accordion-summary flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-[var(--brand)]">
            <span>{item.q}</span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--surface)] bg-white/80 transition duration-300 group-open:rotate-45">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <div className="pb-5 pr-12 text-base leading-8 text-slate-600">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
