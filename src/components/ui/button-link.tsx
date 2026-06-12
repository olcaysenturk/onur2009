import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "ghost" | "light";
  showIcon?: boolean;
};

const variants = {
  primary:
    "bg-accent text-white shadow-[0_4px_20px_rgba(13,159,196,0.3)] hover:bg-accent/90",
  ghost:
    "border border-white/35 bg-transparent text-white backdrop-blur-sm hover:bg-white/10",
  light: "bg-white text-primary hover:bg-surface-soft",
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
  showIcon = false,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded px-5 py-2.5 font-display text-xs font-semibold tracking-normal transition-colors md:px-6 md:py-3 ${variants[variant]}`}
    >
      {children}
      {showIcon ? <ArrowRight aria-hidden className="h-4 w-4" /> : null}
    </Link>
  );
}
