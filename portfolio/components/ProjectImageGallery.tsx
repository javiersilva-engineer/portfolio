"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import type { ProjectImage, ProjectSection } from "@/data/projects";

type ProjectImageGalleryProps = {
  images: ProjectImage[];
  layout?: ProjectSection["layout"];
};

export function ProjectImageGallery({ images, layout }: ProjectImageGalleryProps) {
  const [activeImage, setActiveImage] = useState<ProjectImage | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const hasDesktop = images.some((image) => image.frame === "desktop");
  const hasMobile = images.some((image) => image.frame === "mobile");
  const isArchitecture = layout === "architecture";
  const isDesktopWithMobileGrid = layout === "desktop-with-mobile-grid";
  const isMixed = hasDesktop && hasMobile && !isDesktopWithMobileGrid;
  const galleryClass = getGalleryClass({
    hasDesktop,
    hasMobile,
    isArchitecture,
    isDesktopWithMobileGrid,
    count: images.length,
  });
  const desktopImages = images.filter((image) => image.frame === "desktop");
  const mobileImages = images.filter((image) => image.frame === "mobile");
  const otherImages = images.filter((image) => image.frame !== "desktop" && image.frame !== "mobile");

  const openImage = (image: ProjectImage, opener: HTMLButtonElement) => {
    openerRef.current = opener;
    setActiveImage(image);
  };

  const closeImage = () => {
    setActiveImage(null);
    window.setTimeout(() => openerRef.current?.focus(), 0);
  };

  useEffect(() => {
    if (!activeImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeImage();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <>
      <div className={`mt-8 ${galleryClass}`}>
        {isDesktopWithMobileGrid ? (
          <div className="grid gap-6">
            <div className="mx-auto w-full max-w-4xl">
              {[...desktopImages, ...otherImages].map((image) => (
                <ProjectImageFrame key={image.src} image={image} onOpen={openImage} />
              ))}
            </div>
            <div className="mx-auto grid w-full max-w-4xl justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {mobileImages.map((image) => (
                <ProjectImageFrame key={image.src} image={image} onOpen={openImage} />
              ))}
            </div>
          </div>
        ) : isMixed ? (
          <>
            <div className="grid gap-5">
              {[...desktopImages, ...otherImages].map((image) => (
                <ProjectImageFrame key={image.src} image={image} onOpen={openImage} />
              ))}
            </div>
            <div className="grid content-start gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {mobileImages.map((image) => (
                <ProjectImageFrame key={image.src} image={image} onOpen={openImage} />
              ))}
            </div>
          </>
        ) : (
          images.map((image) => (
            <ProjectImageFrame key={image.src} image={image} onOpen={openImage} />
          ))
        )}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-overlay/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={closeImage}
        >
          <div
            className="relative max-h-full w-full max-w-6xl overflow-auto rounded-[4px] border border-ink-border bg-ink-900 p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-start justify-between gap-4">
              <p id={titleId} className="font-mono text-[12px] text-paper-500">
                {activeImage.caption ?? activeImage.alt}
              </p>
              <button
                ref={closeButtonRef}
                type="button"
                className="shrink-0 rounded-[3px] border border-ink-border px-3 py-1.5 font-mono text-[12px] text-paper-300 transition-colors hover:border-signal hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
                onClick={closeImage}
              >
                Cerrar
              </button>
            </div>
            <div className="flex justify-center">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={activeImage.width ?? 1359}
                height={activeImage.height ?? 629}
                sizes="100vw"
                className="h-auto max-h-[82vh] w-auto max-w-full rounded-[2px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function getGalleryClass({
  hasDesktop,
  hasMobile,
  isArchitecture,
  isDesktopWithMobileGrid,
  count,
}: {
  hasDesktop: boolean;
  hasMobile: boolean;
  isArchitecture: boolean;
  isDesktopWithMobileGrid: boolean;
  count: number;
}) {
  if (isArchitecture) return "max-w-3xl";
  if (isDesktopWithMobileGrid) return "max-w-4xl";
  if (hasDesktop && hasMobile) return "grid items-start gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(220px,0.72fr)]";
  if (hasDesktop && count === 1) return "max-w-4xl";
  if (hasDesktop) return "grid items-start gap-5 xl:grid-cols-2";
  return "grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-3";
}

function ProjectImageFrame({
  image,
  onOpen,
}: {
  image: ProjectImage;
  onOpen: (image: ProjectImage, opener: HTMLButtonElement) => void;
}) {
  const isMobile = image.frame === "mobile";
  const isDiagram = image.frame === "diagram";
  const sizes = isMobile
    ? "(min-width: 1024px) 280px, (min-width: 640px) 42vw, 82vw"
    : isDiagram
      ? "(min-width: 1024px) 720px, 100vw"
      : "(min-width: 1024px) 760px, 100vw";

  return (
    <figure className={`${isMobile ? "w-full max-w-[280px]" : "w-full"} ${isMobile ? "mx-auto lg:mx-0" : ""}`}>
      <button
        type="button"
        className="group block w-full rounded-[4px] border border-ink-border bg-ink-800 text-left transition-colors hover:border-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        onClick={(event) => onOpen(image, event.currentTarget)}
        aria-label={`Ampliar imagen: ${image.caption ?? image.alt}`}
      >
        <span className="block overflow-hidden rounded-t-[4px]">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width ?? 1359}
            height={image.height ?? 629}
            sizes={sizes}
            className="h-auto w-full transition duration-300 group-hover:scale-[1.01]"
          />
        </span>
      </button>
      {image.caption && (
        <figcaption className="border-x border-b border-ink-border bg-ink-800 px-4 py-3 font-mono text-[12px] text-paper-500">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
