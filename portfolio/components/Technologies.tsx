import { technologies } from "@/data/technologies";
import { Section, SectionLabel } from "@/components/ui/Section";

export function Technologies() {
  return (
    <Section id="technologies">
      <SectionLabel>Tecnologías</SectionLabel>
      <h2 className="max-w-prose font-display text-[30px] font-semibold leading-tight text-paper-100 sm:text-[36px]">
        Áreas de conocimiento
      </h2>

      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {technologies.map((group) => (
          <div key={group.area} className="border-t border-ink-border pt-5">
            <h3 className="text-[14px] font-medium text-paper-100">{group.area}</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="text-[14.5px] text-paper-500">
                  {item}
                </li>
              ))}
            </ul>
            {group.capabilities && (
              <div className="mt-5">
                <p className="font-mono text-[12px] text-paper-500">
                  {group.capabilitiesLabel ?? "Capacidades"}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.capabilities.map((item) => (
                    <li
                      key={item}
                      className="rounded-[3px] border border-ink-border px-2.5 py-1 font-mono text-[12px] text-paper-500"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
