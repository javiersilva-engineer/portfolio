import { site } from "@/data/site";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <Section id="contact" grid>
      <SectionLabel>Contacto</SectionLabel>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="max-w-prose font-display text-[30px] font-semibold leading-tight text-paper-100 sm:text-[36px]">
            Hablemos de tu equipo o proyecto
          </h2>
          <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-paper-500">
            Escríbeme directamente o pásate por GitHub y LinkedIn.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <Button href={`mailto:${site.email}`} variant="solid">
            {site.email}
          </Button>
          <div className="flex gap-5 pt-1">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-paper-500 hover:text-signal"
            >
              GitHub
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-paper-500 hover:text-signal"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
