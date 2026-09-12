import { education, complementaryEducation } from "@/data/education";
import { Section, SectionLabel } from "@/components/ui/Section";

export function Education() {
  return (
    <Section id="education">
      <SectionLabel>Formación</SectionLabel>
      <div className="grid gap-10 sm:grid-cols-2">
        <div className="flex flex-col gap-8">
          {education.map((entry) => (
            <div key={entry.title}>
              <h3 className="text-[16px] font-medium text-paper-100">{entry.title}</h3>
              <p className="mt-1 text-[14.5px] text-paper-500">{entry.institution}</p>
              <p className="mt-1 font-mono text-[13px] text-signal">{entry.period}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-[13px] font-mono text-paper-500">Formación complementaria</p>
          {complementaryEducation.map((entry) => (
            <div key={entry.title}>
              <h3 className="text-[15px] font-medium text-paper-100">{entry.title}</h3>
              <p className="mt-1 text-[14px] text-paper-500">{entry.institution}</p>
              <p className="mt-1 font-mono text-[13px] text-paper-500">{entry.period}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
