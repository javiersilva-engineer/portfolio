import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { FlowDiagram } from "@/components/FlowDiagram";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.tagline}`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Section grid className="border-b border-ink-border/60 pt-16 sm:pt-20">
        <Button href="/#projects" variant="ghost" className="mb-10 -ml-1">
          ← Volver a proyectos
        </Button>
        <p className="font-mono text-[13px] text-signal">{project.role}</p>
        <h1 className="mt-2 font-display text-[38px] font-semibold leading-tight text-paper-100 sm:text-[52px]">
          {project.name}
        </h1>
        <p className="mt-4 max-w-prose text-[17px] leading-relaxed text-paper-300">{project.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="solid" external>
              Ver demo en vivo
            </Button>
          )}
          {project.githubUrl ? (
            <Button href={project.githubUrl} variant="outline" external>
              Ver en GitHub
            </Button>
          ) : (
            <span className="font-mono text-[12.5px] text-paper-500">
              Repositorio: TODO — pendiente de publicación
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </Section>

      <Section>
        <Placeholder label={project.cover.placeholderLabel} aspect="aspect-[16/9]" />
      </Section>

      <Section className="pt-0">
        <div className="flex flex-col gap-16">
          {project.sections.map((section) => (
            <div key={section.heading} className="grid gap-6 border-t border-ink-border pt-10 lg:grid-cols-[220px_1fr] lg:gap-12">
              <h2 className="font-display text-[19px] font-semibold text-paper-100">{section.heading}</h2>
              <div className="max-w-prose">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-[15.5px] leading-relaxed text-paper-300">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="flex flex-col gap-2.5">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[14.5px] leading-snug text-paper-300">
                        <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {section.diagram && (
                  <div className="mt-2 max-w-2xl">
                    <FlowDiagram steps={section.diagram} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {project.videoPlaceholder && (
        <Section className="pt-0">
          <SectionLabel>Demostración</SectionLabel>
          <Placeholder label={project.videoPlaceholder} aspect="aspect-video" kind="video" />
        </Section>
      )}

      <Section className="border-t border-ink-border/60">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] text-paper-500">¿Quieres ver otro proyecto o hablar sobre este?</p>
          <div className="flex gap-4">
            <Button href="/#projects" variant="outline">
              Otros proyectos
            </Button>
            <Button href="/#contact" variant="solid">
              Contactar
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
