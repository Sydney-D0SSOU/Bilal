import { cn } from "@/lib/utils";

export function ScrollReveal({
  children,
  className,
  delay: _delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={cn(className)}>{children}</div>;
}
