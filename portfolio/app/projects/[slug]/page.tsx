import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import type { ProjectImage, ProjectSection } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { FlowDiagram } from "@/components/FlowDiagram";
import { ProjectImageGallery } from "@/components/ProjectImageGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  const title = `${project.name} — ${project.tagline}`;
  const description = project.tagline;
  const url = `${site.url}/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "es_ES",
      type: "article",
    },
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
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <p className="font-mono text-[13px] text-signal">{project.role}</p>
            <h1 className="mt-2 font-display text-[38px] font-semibold leading-tight text-paper-100 sm:text-[52px]">
              {project.name}
            </h1>
            <p className="mt-4 max-w-prose text-[17px] leading-relaxed text-paper-300">{project.tagline}</p>
            {project.heroIntro && (
              <p className="mt-5 max-w-prose text-[15.5px] leading-relaxed text-paper-500">
                {project.heroIntro}
              </p>
            )}

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
              ) : null}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>

          {project.cover.image && <ProjectImageFrame image={project.cover.image} priority />}
        </div>
      </Section>

      {!project.cover.image && (
        <Section>
          <Placeholder label={project.cover.placeholderLabel ?? "Imagen pendiente"} aspect="aspect-[16/9]" />
        </Section>
      )}

      <Section className="pt-0">
        <div className="flex flex-col gap-20">
          {project.sections.map((section) => (
            <div
              key={section.heading}
              className="grid gap-6 border-t border-ink-border pt-10 lg:grid-cols-[240px_1fr] lg:gap-12"
            >
              <h2 className="font-display text-[19px] font-semibold text-paper-100">{section.heading}</h2>
              <div>
                {section.body.map((paragraph, i) => (
                  <p key={i} className="max-w-prose text-[15.5px] leading-relaxed text-paper-300">
                    {paragraph}
                  </p>
                ))}
                {section.summary && <SectionSummary items={section.summary} />}
                {section.bullets && (
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[14.5px] leading-snug text-paper-300">
                        <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-signal" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {section.images && <ProjectImageGallery images={section.images} layout={section.layout} />}
                {section.diagram && (
                  <div className="mt-8">
                    {section.layout === "algorithm" ? (
                      <AlgorithmDiagram steps={section.diagram} />
                    ) : (
                      <div className="max-w-2xl">
                        <FlowDiagram steps={section.diagram} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

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

function SectionSummary({ items }: { items: NonNullable<ProjectSection["summary"]> }) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="border border-ink-border bg-ink-900 p-5">
          <h3 className="font-mono text-[12px] uppercase text-signal">{item.label}</h3>
          <p className="mt-3 text-[14.5px] leading-relaxed text-paper-300">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectImageFrame({
  image,
  priority = false,
}: {
  image: ProjectImage;
  priority?: boolean;
}) {
  const isMobile = image.frame === "mobile";
  const isDiagram = image.frame === "diagram";

  return (
    <figure
      className={`overflow-hidden rounded-[4px] border border-ink-border bg-ink-800 ${
        isMobile ? "mx-auto w-full max-w-[260px]" : "w-full"
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width ?? 1359}
        height={image.height ?? 629}
        priority={priority}
        sizes={isMobile ? "(min-width: 1024px) 260px, 70vw" : "(min-width: 1024px) 50vw, 100vw"}
        className={`h-auto w-full ${isDiagram ? "p-5" : ""}`}
      />
      {image.caption && (
        <figcaption className="border-t border-ink-border px-4 py-3 font-mono text-[12px] text-paper-500">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function AlgorithmDiagram({ steps }: { steps: { label: string }[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
      {steps.map((step, i) => (
        <li key={step.label} className="relative border border-ink-border bg-ink-900 p-4">
          <span className="font-mono text-[12px] text-signal">{String(i + 1).padStart(2, "0")}</span>
          <p className="mt-3 text-[14px] leading-snug text-paper-300">{step.label}</p>
        </li>
      ))}
    </ol>
  );
}
