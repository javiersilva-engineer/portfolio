import Image from "next/image";
import { projects } from "@/data/projects";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <Section id="projects">
      <SectionLabel>Proyectos destacados</SectionLabel>
      <h2 className="max-w-prose font-display text-[30px] font-semibold leading-tight text-paper-100 sm:text-[36px]">
        Pocos proyectos, explicados a fondo
      </h2>

      <div className="mt-14 flex flex-col gap-24">
        {featured.map((project, i) => {
          const reversed = i % 2 === 1;
          return (
            <article
              key={project.slug}
              className={`grid gap-8 lg:grid-cols-2 lg:gap-14 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {project.cover.image ? (
                <figure className="group overflow-hidden rounded-[4px] border border-ink-border bg-ink-800">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.cover.image.src}
                      alt={project.cover.image.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                  {project.cover.image.caption && (
                    <figcaption className="border-t border-ink-border px-4 py-3 font-mono text-[12px] text-paper-500">
                      {project.cover.image.caption}
                    </figcaption>
                  )}
                </figure>
              ) : (
                <Placeholder label={project.cover.placeholderLabel ?? "Imagen pendiente"} />
              )}
              <div className="flex flex-col justify-center">
                <p className="font-mono text-[13px] text-signal">{project.role}</p>
                <h3 className="mt-2 font-display text-[26px] font-semibold text-paper-100">
                  {project.name}
                </h3>
                <p className="mt-2 text-[15.5px] text-paper-300">{project.tagline}</p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[14.5px] leading-snug text-paper-500">
                      <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                <div className="mt-8">
                  <Button href={`/projects/${project.slug}`} variant="outline">
                    Ver caso completo
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
