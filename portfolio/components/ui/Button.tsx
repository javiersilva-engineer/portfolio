import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  external?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center gap-2 rounded-[3px] px-5 py-3 text-[15px] font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal";

const variants: Record<string, string> = {
  solid: "bg-signal text-ink-950 hover:bg-signal-dim",
  outline: "border border-ink-border text-paper-100 hover:border-signal hover:text-signal",
  ghost: "text-paper-500 hover:text-paper-100",
};

export function Button({ href, children, variant = "solid", external, className = "" }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
