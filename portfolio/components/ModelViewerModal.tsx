"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { ModelViewerElement } from "@google/model-viewer";
import type { Gallery3DItem } from "@/data/gallery3d";

type ModelViewerModalProps = {
  item: Gallery3DItem;
  onClose: () => void;
};

export function ModelViewerModal({ item, onClose }: ModelViewerModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const viewerRef = useRef<ModelViewerElement | null>(null);
  const [viewerReady, setViewerReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [animationReady, setAnimationReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    let active = true;

    const loadModelViewer = async () => {
      if (!window.customElements) {
        throw new Error("Custom elements are not supported in this browser.");
      }

      await import("@google/model-viewer");
      await window.customElements.whenDefined("model-viewer");

      if (active) setViewerReady(true);
    };

    loadModelViewer().catch(() => {
      if (active) {
        setHasError(true);
        setIsLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      if (dialog.open) dialog.close();
    };
  }, []);

  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    let didFinish = false;
    const timeoutId = window.setTimeout(() => {
      if (!didFinish) {
        setIsLoading(false);
        setHasError(true);
      }
    }, 30000);

    const onLoad = () => {
      didFinish = true;
      window.clearTimeout(timeoutId);
      setIsLoading(false);
      setHasError(false);

      if (item.hasAnimation && item.model.animationName) {
        const hasNamedAnimation = viewer.availableAnimations?.includes(item.model.animationName);
        if (hasNamedAnimation) {
          viewer.animationName = item.model.animationName;
          viewer.pause();
          setAnimationReady(true);
          setIsPlaying(false);
        }
      }
    };

    const onError = () => {
      didFinish = true;
      window.clearTimeout(timeoutId);
      setIsLoading(false);
      setHasError(true);
      setAnimationReady(false);
      setIsPlaying(false);
    };

    viewer.addEventListener("load", onLoad);
    viewer.addEventListener("error", onError);

    return () => {
      window.clearTimeout(timeoutId);
      viewer.removeEventListener("load", onLoad);
      viewer.removeEventListener("error", onError);
    };
  }, [item]);

  const close = () => {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
    onClose();
  };

  const playAnimation = () => {
    const viewer = viewerRef.current;
    if (!viewer || !item.model.animationName) return;
    viewer.animationName = item.model.animationName;
    viewer.play();
    setIsPlaying(true);
  };

  const pauseAnimation = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    viewer.pause();
    setIsPlaying(false);
  };

  return (
    <dialog
      ref={dialogRef}
      className="m-auto w-[min(1120px,calc(100vw-24px))] max-w-none rounded-[4px] border border-ink-border bg-ink-900 p-0 text-paper-100 backdrop:bg-ink-950/85"
      aria-labelledby={`${item.id}-viewer-title`}
      onCancel={(event) => {
        event.preventDefault();
        close();
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
    >
      <div className="max-h-[calc(100vh-24px)] overflow-auto">
        <div className="flex items-start justify-between gap-4 border-b border-ink-border px-4 py-4 sm:px-5">
          <div>
            <p className="font-mono text-[12px] text-signal">Visor 3D</p>
            <h3 id={`${item.id}-viewer-title`} className="mt-1 font-display text-[22px] font-semibold text-paper-100">
              {item.title}
            </h3>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-[3px] border border-ink-border px-3 py-2 font-mono text-[12px] text-paper-300 transition-colors hover:border-signal hover:text-signal"
            onClick={close}
          >
            Cerrar
          </button>
        </div>

        <div className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[4px] border border-ink-border bg-ink-950 sm:min-h-[520px]">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1024px) 820px, 100vw"
              className={`object-contain transition-opacity duration-300 ${
                viewerReady && !hasError ? "opacity-0" : "opacity-100"
              }`}
              priority
            />

            {viewerReady && !hasError && (
              <model-viewer
                ref={viewerRef}
                src={item.model.src}
                poster={item.image.src}
                camera-controls
                touch-action="pan-y"
                loading="eager"
                reveal="auto"
                auto-rotate={item.autoRotate && !reducedMotion ? true : undefined}
                auto-rotate-delay="2400"
                rotation-per-second="18deg"
                shadow-intensity="0.8"
                exposure="1"
                interaction-prompt="auto"
                class="h-full min-h-[360px] w-full bg-ink-950 sm:min-h-[520px]"
                aria-label={`Modelo 3D interactivo: ${item.title}`}
              />
            )}

            {isLoading && !hasError && (
              <div className="pointer-events-none absolute left-4 top-4 rounded-[3px] border border-ink-border bg-ink-900/90 px-3 py-2 font-mono text-[12px] text-paper-300">
                Cargando modelo 3D...
              </div>
            )}

            {hasError && (
              <div className="absolute inset-x-4 bottom-4 rounded-[3px] border border-ink-border bg-ink-900/95 px-4 py-3 text-[13.5px] text-paper-300">
                El modelo interactivo no ha podido cargarse. Puedes seguir viendo el render estático.
              </div>
            )}
          </div>

          <aside className="min-w-0">
            <p className="text-[14.5px] leading-relaxed text-paper-300">{item.description}</p>
            <p className="mt-4 font-mono text-[12px] text-paper-500">{item.software}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.techniques.map((technique) => (
                <span
                  key={technique}
                  className="rounded-[3px] border border-ink-border px-2.5 py-1 font-mono text-[12px] text-paper-500"
                >
                  {technique}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t border-ink-border pt-5">
              <p className="font-mono text-[12px] text-paper-500">Controles</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-paper-500">
                Arrastra para rotar, usa la rueda o pellizca para acercar y alejar.
              </p>
            </div>

            {item.hasAnimation && (
              <div className="mt-6 border-t border-ink-border pt-5">
                <p className="font-mono text-[12px] text-paper-500">Animación</p>
                <p className="mt-2 text-[13.5px] text-paper-500">
                  {animationReady
                    ? `Animación detectada: ${item.model.animationName}`
                    : "La animación no está disponible todavía o no pudo activarse."}
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="rounded-[3px] border border-ink-border px-4 py-2 text-[14px] font-medium text-paper-100 transition-colors hover:border-signal hover:text-signal disabled:cursor-not-allowed disabled:text-paper-500"
                    onClick={playAnimation}
                    disabled={!animationReady || isPlaying}
                  >
                    Reproducir
                  </button>
                  <button
                    type="button"
                    className="rounded-[3px] border border-ink-border px-4 py-2 text-[14px] font-medium text-paper-100 transition-colors hover:border-signal hover:text-signal disabled:cursor-not-allowed disabled:text-paper-500"
                    onClick={pauseAnimation}
                    disabled={!animationReady || !isPlaying}
                  >
                    Pausar
                  </button>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </dialog>
  );
}
