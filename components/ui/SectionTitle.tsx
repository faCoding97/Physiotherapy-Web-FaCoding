import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  id
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 id={id} className="mt-4 text-4xl font-semibold leading-tight text-[var(--brand)] md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{description}</p> : null}
    </div>
  );
}
