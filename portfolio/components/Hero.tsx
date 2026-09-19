import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-border/60 section-grid">
      <div className="mx-auto grid max-w-content items-center gap-12 px-6 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.08fr_0.82fr] lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <p className="mb-6 font-mono text-[13px] text-signal">{site.role}</p>
          <h1 className="font-display text-[44px] font-semibold leading-[1.05] text-paper-100 sm:text-[64px]">
            {site.name}
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
              className="rounded-[3px] text-[14.5px] text-paper-500 underline decoration-ink-border underline-offset-4 transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              Descargar CV
            </a>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[360px] min-w-0 flex-col gap-5 self-center sm:max-w-[400px] lg:mx-0 lg:justify-self-end">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] border border-ink-border bg-ink-900 shadow-2xl shadow-ink-950/30">
            <div aria-hidden className="absolute inset-x-5 top-5 h-px bg-signal/45" />
            <div aria-hidden className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-ink-950/80 to-transparent" />
            <div aria-hidden className="absolute right-5 top-8 h-20 w-px bg-ink-border" />
            <div aria-hidden className="absolute left-5 top-10 font-mono text-[11px] text-paper-500/90">
              01
            </div>
            <Image
              src="/images/profile/javier-silva.png"
              alt="Javier Silva"
              width={375}
              height={666}
              priority
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 400px, 360px"
              className="absolute inset-x-0 bottom-0 mx-auto h-[95%] w-auto max-w-none object-contain object-bottom"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[14.5px] leading-relaxed text-paper-500">
              Trabajo en las distintas capas de un producto: interfaz, backend, integración de servicios
              y modelos de IA — con formación de base en tecnologías multimedia, 3D y realidad virtual.
            </p>
            <div className="flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}
