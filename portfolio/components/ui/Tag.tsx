export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-[3px] border border-ink-border px-2.5 py-1 font-mono text-[12.5px] text-paper-500">
      {children}
    </span>
  );
}
