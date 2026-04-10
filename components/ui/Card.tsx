import { cn } from "@/lib/utils";

export default function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("premium-card", className)}>{children}</div>;
}
