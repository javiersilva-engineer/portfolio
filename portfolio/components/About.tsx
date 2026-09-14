import { Section, SectionLabel } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about">
      <SectionLabel>Sobre mí</SectionLabel>
      <div className="max-w-prose">
        <p className="text-[18px] leading-relaxed text-paper-100 sm:text-[20px]">
          Ingeniero Multimedia por la Universidad de Alicante, con experiencia en desarrollo de software,
          inteligencia artificial aplicada y tecnologías interactivas.
        </p>
        <p className="mt-5 text-[16px] leading-relaxed text-paper-500">
          He trabajado en aplicaciones web, asistentes conversacionales, sistemas de consulta de datos
          mediante lenguaje natural, automatización de procesos, realidad virtual e integración de IA con
          aplicaciones y entornos 3D.
        </p>
      </div>
    </Section>
  );
}
