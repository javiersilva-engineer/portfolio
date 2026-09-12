import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { href: "/#about", label: "Sobre mí" },
  { href: "/#experience", label: "Experiencia" },
  { href: "/#projects", label: "Proyectos" },
  { href: "/#technologies", label: "Tecnologías" },
  { href: "/#contact", label: "Contacto" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-border/60 bg-ink-950/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="font-display text-[17px] font-semibold text-paper-100">
          Javier Silva
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14.5px] text-paper-500 transition-colors hover:text-paper-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-paper-500 transition-colors hover:text-paper-100"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[14px] text-paper-500 transition-colors hover:text-paper-100 sm:inline"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
