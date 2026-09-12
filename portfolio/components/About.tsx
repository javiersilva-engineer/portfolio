import { Section, SectionLabel } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about">
      <SectionLabel>Sobre mí</SectionLabel>
      <div className="max-w-prose">
        <p className="text-[18px] leading-relaxed text-paper-100 sm:text-[20px]">
          Graduado en Ingeniería Multimedia por la Universidad de Alicante. Mi perfil combina desarrollo
          de software, inteligencia artificial y tecnologías multimedia: aplicaciones web, backend,
          asistentes conversacionales, modelos de lenguaje, automatización, realidad virtual e
          integración de servicios.
        </p>
        <p className="mt-5 text-[16px] leading-relaxed text-paper-500">
          No me presento como experto absoluto en todas las áreas anteriores; me interesa poder moverme
          entre las distintas capas de un producto — interfaz, lógica de negocio, integración de
          servicios, bases de datos e IA — y entender cómo se conectan entre sí.
        </p>
      </div>
    </Section>
  );
}
