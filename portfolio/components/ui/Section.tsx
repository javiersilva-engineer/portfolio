import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  grid?: boolean;
};

export function Section({ id, children, className = "", grid = false }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${grid ? "section-grid" : ""} ${className}`}>
      <div className="mx-auto max-w-content px-6 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[13px] tracking-wide text-signal">{children}</p>
  );
}
