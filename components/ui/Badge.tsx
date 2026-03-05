import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("rounded-full border px-3 py-1 text-xs text-gray-700", className)}>
      {children}
    </span>
  );
}
