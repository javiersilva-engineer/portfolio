import { gallery3d } from "@/data/gallery3d";
import { Section, SectionLabel } from "@/components/ui/Section";
import { Placeholder } from "@/components/ui/Placeholder";

export function Gallery3D() {
  return (
    <Section id="gallery-3d">
      <SectionLabel>Trabajos 3D</SectionLabel>
      <h2 className="max-w-prose font-display text-[30px] font-semibold leading-tight text-paper-100 sm:text-[36px]">
        Antes del código, el modelado
      </h2>
      <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-paper-500">
        Piezas realizadas durante el Grado en Ingeniería Multimedia, modeladas en Blender.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery3d.map((item, i) => (
          <div key={`${item.name}-${i}`}>
            <Placeholder label={`PLACEHOLDER: render de "${item.name}"`} aspect="aspect-square" />
            <h3 className="mt-3 text-[15px] font-medium text-paper-100">{item.name}</h3>
            <p className="mt-1 text-[13.5px] leading-relaxed text-paper-500">{item.description}</p>
            <p className="mt-2 font-mono text-[12px] text-paper-500">
              {item.software} · {item.techniques.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
