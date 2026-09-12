import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-border/60 section-grid">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="mb-6 font-mono text-[13px] text-signal">{site.role}</p>
          <h1 className="font-display text-[44px] font-semibold leading-[1.05] text-paper-100 sm:text-[64px]">
            Javier Silva
          </h1>
          <p className="mt-6 max-w-prose text-[17px] leading-relaxed text-paper-300 sm:text-[18px]">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/#projects" variant="solid">
              Ver proyectos
            </Button>
            <Button href="/#contact" variant="outline">
              Contactar
            </Button>
            <a
              href={site.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14.5px] text-paper-500 underline decoration-ink-border underline-offset-4 transition-colors hover:text-signal"
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 self-center">
          <p className="max-w-sm text-[14.5px] leading-relaxed text-paper-500">
            Trabajo en las distintas capas de un producto: interfaz, backend, integración de servicios
            y modelos de IA — con formación de base en tecnologías multimedia, 3D y realidad virtual.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Full stack", "IA aplicada", "Asistentes conversacionales", "3D / VR"].map((tag) => (
              <span
                key={tag}
                className="rounded-[3px] border border-ink-border px-2.5 py-1 font-mono text-[12px] text-paper-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
