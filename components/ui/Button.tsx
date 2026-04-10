import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-[var(--brand)] text-white hover:bg-[var(--brand-secondary)] shadow-card border border-[var(--brand)]",
  secondary:
    "bg-white text-[var(--brand)] hover:bg-[var(--surface)] border border-[var(--surface)] shadow-sm",
  ghost:
    "bg-transparent text-[var(--brand)] hover:bg-[var(--surface)]/70 border border-[var(--surface)]",
  gold:
    "bg-[var(--accent)] text-slate-950 hover:brightness-95 border border-[var(--accent)] shadow-card"
};

const shared =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

export default function Button({
  children,
  className,
  variant = "primary",
  href,
  target,
  rel,
  type = "button",
  disabled
}: ButtonProps) {
  const finalClassName = cn(shared, variants[variant], disabled && "pointer-events-none opacity-60", className);

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (external) {
      return (
        <a className={finalClassName} href={href} target={target} rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}>
          {children}
        </a>
      );
    }

    return (
      <Link className={finalClassName} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClassName} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
