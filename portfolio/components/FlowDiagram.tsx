import { Fragment } from "react";

type FlowDiagramProps = {
  steps: { label: string }[];
};

export function FlowDiagram({ steps }: FlowDiagramProps) {
  return (
    <div className="flex flex-col items-stretch gap-1.5 sm:flex-row sm:items-center sm:gap-1.5">
      {steps.map((step, i) => (
        <Fragment key={step.label}>
          <div className="flex min-h-[60px] flex-1 items-center rounded-[3px] border border-ink-border bg-ink-800 px-4 py-3">
            <span className="mr-2.5 shrink-0 font-mono text-[12px] text-signal">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[13.5px] leading-snug text-paper-300">{step.label}</span>
          </div>
          {i < steps.length - 1 && (
            <span aria-hidden className="mx-auto shrink-0 font-mono text-paper-500 sm:mx-0">
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
