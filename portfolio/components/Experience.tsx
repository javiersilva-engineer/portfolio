import { experience } from "@/data/experience";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <Section id="experience">
      <SectionLabel>Experiencia</SectionLabel>
      <h2 className="max-w-prose font-display text-[30px] font-semibold leading-tight text-paper-100 sm:text-[36px]">
        Dos entornos, dos problemas distintos
      </h2>

      <div className="mt-14 flex flex-col gap-16">
        {experience.map((entry) => (
          <article
            key={entry.slug}
            className="grid min-w-0 gap-8 border-t border-ink-border pt-10 lg:grid-cols-[300px_1fr] lg:gap-12"
          >
            <aside className="min-w-0">
              <div>
                <h3 className="font-display text-[22px] font-semibold text-paper-100">{entry.company}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-paper-300">{entry.context}</p>
              </div>

              <div className="mt-6 space-y-2 border-l border-ink-border pl-4">
                <p className="font-mono text-[13px] text-signal">{entry.period}</p>
                <p className="text-[14.5px] text-paper-500">
                  {entry.role}
                  {entry.location ? ` · ${entry.location}` : ""}
                </p>
              </div>

              <div className="mt-6">
                <p className="mb-3 font-mono text-[12px] text-paper-500">Tecnologías relacionadas</p>
                <div className="flex min-w-0 flex-wrap gap-2 [&>span]:max-w-full [&>span]:break-words">
                  {(entry.focusTechnologies ?? entry.technologies).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              <p className="max-w-3xl text-[15.5px] leading-relaxed text-paper-300">{entry.summary}</p>
              {entry.emphasis && (
                <p className="mt-4 max-w-3xl border-l-2 border-signal bg-signal-soft px-4 py-3 text-[14.5px] leading-relaxed text-paper-300">
                  {entry.emphasis}
                </p>
              )}

              <div className="mt-8 grid gap-5">
                {entry.contributions.map((contribution, index) => (
                  <div key={contribution.title} className="min-w-0 border border-ink-border bg-ink-900 p-5">
                    <div className="flex gap-4">
                      <span className="mt-0.5 shrink-0 font-mono text-[12px] text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h4 className="break-words text-[15.5px] font-medium text-paper-100">{contribution.title}</h4>
                        <p className="mt-2 max-w-3xl break-words text-[14.5px] leading-relaxed text-paper-500">
                          {contribution.description}
                        </p>
                      </div>
                    </div>

                    {contribution.diagram && <ExperienceDiagram steps={contribution.diagram} />}
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ExperienceDiagram({ steps }: { steps: { label: string }[] }) {
  return (
    <ol className="mt-5 grid min-w-0 gap-2 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.label} className="relative min-w-0 border border-ink-border bg-ink-800 px-4 py-3">
          <span className="font-mono text-[12px] text-signal">{String(index + 1).padStart(2, "0")}</span>
          <p className="mt-2 break-words text-[13.5px] leading-snug text-paper-300">{step.label}</p>
        </li>
      ))}
    </ol>
  );
}
