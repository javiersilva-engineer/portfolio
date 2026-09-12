type PlaceholderProps = {
  label: string;
  aspect?: string; // e.g. "aspect-[16/10]"
  kind?: "image" | "video";
};

export function Placeholder({ label, aspect = "aspect-[16/10]", kind = "image" }: PlaceholderProps) {
  return (
    <div
      className={`relative flex ${aspect} w-full items-center justify-center overflow-hidden rounded-[4px] border border-dashed border-ink-border bg-ink-800`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 section-grid" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <span className="font-mono text-[11px] tracking-wide text-paper-500">
          {kind === "video" ? "Vídeo pendiente" : "Imagen pendiente"}
        </span>
        <span className="max-w-xs font-mono text-[13px] text-paper-300">{label}</span>
      </div>
    </div>
  );
}
