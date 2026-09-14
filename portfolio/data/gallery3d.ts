export type Gallery3DItem = {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  model: {
    src: string;
    animationName?: string;
  };
  software: string;
  techniques: string[];
  hasAnimation?: boolean;
  autoRotate?: boolean;
};

export const gallery3d: Gallery3DItem[] = [
  {
    id: "piranha-plant",
    title: "Planta Piraña",
    description: "Ejercicio de modelado y render estilizado realizado en Blender.",
    image: {
      src: "/images/3d/piranha-plant.png",
      alt: "Render de una Planta Piraña modelada en Blender",
      width: 1920,
      height: 1080,
    },
    model: {
      src: "/models/3d/piranha-plant.glb",
    },
    software: "Blender",
    techniques: ["Modelado 3D", "Materiales", "Iluminación", "Render"],
    autoRotate: true,
  },
  {
    id: "cinema-room",
    title: "Sala temática de cine",
    description: "Escena interior realizada en Blender.",
    image: {
      src: "/images/3d/cinema-room.webp",
      alt: "Render de una sala temática de cine modelada en Blender",
      width: 3840,
      height: 2160,
    },
    model: {
      src: "/models/3d/cinema-room.glb",
    },
    software: "Blender",
    techniques: ["Modelado de escena", "Composición", "Materiales", "Iluminación", "Render"],
    autoRotate: true,
  },
  {
    id: "bender",
    title: "Bender",
    description: "Ejercicio de modelado de personaje realizado en Blender.",
    image: {
      src: "/images/3d/bender.png",
      alt: "Render de un ejercicio de modelado de personaje inspirado en Bender",
      width: 1920,
      height: 1080,
    },
    model: {
      src: "/models/3d/bender.glb",
      animationName: "ArmatureAction",
    },
    software: "Blender",
    techniques: ["Modelado 3D", "Materiales", "Rigging / animación", "Render"],
    hasAnimation: true,
  },
];
