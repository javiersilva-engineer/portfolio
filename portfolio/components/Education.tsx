import { education, languages } from "@/data/education";
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
              {entry.status && <p className="mt-2 text-[14px] text-paper-500">{entry.status}</p>}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-[13px] font-mono text-paper-500">Idiomas</p>
            <ul className="mt-4 flex flex-col gap-2">
              {languages.map((entry) => (
                <li key={entry.language} className="text-[14.5px] text-paper-500">
                  <span className="text-paper-300">{entry.language}</span> · {entry.level}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
