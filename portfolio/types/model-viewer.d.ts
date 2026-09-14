import type { ModelViewerElement } from "@google/model-viewer";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

type ModelViewerAttributes = DetailedHTMLProps<HTMLAttributes<ModelViewerElement>, ModelViewerElement> & {
  src?: string;
  poster?: string;
  "camera-controls"?: boolean | "";
  "touch-action"?: "pan-y" | "pan-x" | "none";
  loading?: "auto" | "lazy" | "eager";
  reveal?: "auto" | "interaction" | "manual";
  "auto-rotate"?: boolean | "";
  "auto-rotate-delay"?: string;
  "rotation-per-second"?: string;
  "shadow-intensity"?: string;
  exposure?: string;
  "interaction-prompt"?: "auto" | "none";
  class?: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerAttributes;
    }
  }
}
