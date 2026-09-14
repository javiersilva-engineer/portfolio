"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gallery3d } from "@/data/gallery3d";
import type { Gallery3DItem } from "@/data/gallery3d";
import { Section, SectionLabel } from "@/components/ui/Section";
import { ModelViewerModal } from "@/components/ModelViewerModal";

export function Gallery3D() {
  const [selectedModel, setSelectedModel] = useState<Gallery3DItem | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  const openModel = (item: Gallery3DItem, opener: HTMLButtonElement) => {
    openerRef.current = opener;
    setSelectedModel(item);
  };

  const closeModel = () => {
    setSelectedModel(null);
    window.setTimeout(() => openerRef.current?.focus(), 0);
  };

  return (
    <Section id="gallery-3d">
      <SectionLabel>Modelado y render 3D</SectionLabel>
      <h2 className="max-w-prose font-display text-[30px] font-semibold leading-tight text-paper-100 sm:text-[36px]">
        Trabajos académicos realizados en Blender
      </h2>
      <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-paper-500">
        Selección de ejercicios de modelado, materiales, iluminación y render. Algunas piezas son fan art o
        ejercicios basados en propiedades existentes, no diseños comerciales originales.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery3d.map((item) => (
          <ModelCard key={item.id} item={item} onOpen={openModel} />
        ))}
      </div>

      {selectedModel && <ModelViewerModal item={selectedModel} onClose={closeModel} />}
    </Section>
  );
}

function ModelCard({
  item,
  onOpen,
}: {
  item: Gallery3DItem;
  onOpen: (item: Gallery3DItem, opener: HTMLButtonElement) => void;
}) {
  return (
    <article className="group min-w-0">
      <div className="overflow-hidden rounded-[4px] border border-ink-border bg-ink-800">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.025]"
          />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-[16px] font-medium text-paper-100">{item.title}</h3>
        <p className="mt-1 text-[13.5px] leading-relaxed text-paper-500">{item.description}</p>
        <p className="mt-3 font-mono text-[12px] text-paper-500">{item.software}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.techniques.map((technique) => (
            <span
              key={technique}
              className="rounded-[3px] border border-ink-border px-2.5 py-1 font-mono text-[12px] text-paper-500"
            >
              {technique}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="mt-5 inline-flex items-center rounded-[3px] border border-ink-border px-4 py-2.5 text-[14px] font-medium text-paper-100 transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
          onClick={(event) => onOpen(item, event.currentTarget)}
        >
          Ver modelo 3D
        </button>
      </div>
    </article>
  );
}
