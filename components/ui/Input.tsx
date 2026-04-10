import * as React from "react";
import { cn } from "@/lib/utils";

type BaseProps = {
  label: string;
  name: string;
  error?: string;
  className?: string;
  multiline?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Input({ label, name, error, className, multiline = false, ...props }: BaseProps) {
  const shared =
    "w-full rounded-3xl border border-[var(--surface)] bg-white/80 px-4 py-3.5 text-[var(--text)] shadow-sm transition focus:border-[var(--highlight)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20";

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[var(--brand)]">{label}</span>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          className={cn(shared, "min-h-[150px] resize-y", className)}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={name}
          name={name}
          className={cn(shared, className)}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error ? <span className="mt-2 block text-sm text-rose-600">{error}</span> : null}
    </label>
  );
}
