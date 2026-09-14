import { site } from "@/data/site";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const contactLinks = [
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "GitHub", href: site.links.github },
  { label: "Descargar CV", href: site.cvPath },
];

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
            Escríbeme por email o revisa mi perfil, código y CV.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <Button href={site.emailHref} variant="solid">
            {site.email}
          </Button>
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 sm:justify-end">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[3px] text-[14px] text-paper-500 hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
