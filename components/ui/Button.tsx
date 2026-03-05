import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: "_blank";
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition";
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-900"
      : "border text-black hover:bg-gray-50";

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target ?? "_blank"}
          rel="noreferrer"
          className={cn(base, styles, className)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {children}
      </Link>
    );
  }

  return <button className={cn(base, styles, className)}>{children}</button>;
}
