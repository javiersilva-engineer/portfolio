import { experience } from "@/data/experience";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { FlowDiagram } from "@/components/FlowDiagram";

export function Experience() {
  return (
    <Section id="experience">
      <SectionLabel>Experiencia</SectionLabel>
      <h2 className="max-w-prose font-display text-[30px] font-semibold leading-tight text-paper-100 sm:text-[36px]">
        Dos entornos, dos problemas distintos
      </h2>

      <div className="mt-14 flex flex-col gap-16">
        {experience.map((entry) => (
          <article key={entry.slug} className="border-t border-ink-border pt-10">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
              <div>
                <h3 className="font-display text-[22px] font-semibold text-paper-100">{entry.company}</h3>
                <p className="mt-1 text-[15px] text-paper-500">
                  {entry.role} {entry.location ? `· ${entry.location}` : ""}
                </p>
              </div>
              <p className="font-mono text-[13px] text-signal">{entry.period}</p>
            </div>

            <p className="mt-6 max-w-prose text-[15.5px] leading-relaxed text-paper-300">
              {entry.summary}
            </p>

            <div className="mt-8 flex flex-col gap-8">
              {entry.contributions.map((c) => (
                <div key={c.title}>
                  <h4 className="text-[15.5px] font-medium text-paper-100">{c.title}</h4>
                  <p className="mt-2 max-w-prose text-[14.5px] leading-relaxed text-paper-500">
                    {c.description}
                  </p>
                  {c.diagram && (
                    <div className="mt-4 max-w-2xl">
                      <FlowDiagram steps={c.diagram} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {entry.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
