export type DiagramStep = { label: string };

export type ProjectSection = {
  heading: string;
  body: string[];
  diagram?: DiagramStep[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  featured: boolean;
  cover: {
    placeholderLabel: string;
  };
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string; // TODO: añadir si se publica el repositorio
  videoPlaceholder?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: "enfo",
    name: "ENFO",
    tagline: "Planificación nutricional y seguimiento de alimentación",
    role: "Trabajo de Fin de Grado — Ingeniería Multimedia",
    featured: true,
    cover: { placeholderLabel: "PLACEHOLDER: captura principal de ENFO" },
    highlights: [
      "Generación automática de menús ajustados a objetivos nutricionales",
      "Gestión de alergias y preferencias alimentarias por usuario",
      "Seguimiento diario, rachas y recetas publicadas por la comunidad",
    ],
    technologies: [
      "Ionic",
      "Angular",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Spoonacular API",
    ],
    githubUrl: undefined,
    videoPlaceholder: "PLACEHOLDER: vídeo de demostración de ENFO",
    sections: [
      {
        heading: "Contexto",
        body: [
          "ENFO es mi Trabajo de Fin de Grado del Grado en Ingeniería Multimedia: una aplicación orientada a la planificación nutricional y al seguimiento de la alimentación diaria.",
        ],
      },
      {
        heading: "Problema",
        body: [
          "Planificar una alimentación equilibrada de forma manual, ajustada a objetivos personales de calorías y macronutrientes, alergias y preferencias, es un proceso tedioso que la mayoría de personas no sostiene en el tiempo.",
        ],
      },
      {
        heading: "Solución",
        body: [
          "Una aplicación que calcula los objetivos nutricionales de cada usuario y genera automáticamente menús semanales de cuatro comidas diarias, respetando alergias y preferencias, con seguimiento diario y almacenamiento de menús personalizados.",
        ],
      },
      {
        heading: "Arquitectura",
        body: [
          "Frontend construido con Ionic, Angular y TypeScript. Backend en Node.js con Express, expuesto mediante una API REST. Persistencia en MongoDB con Mongoose como capa de modelado de datos. Integración con la API externa de Spoonacular para el catálogo de recetas.",
        ],
        diagram: [
          { label: "App (Ionic + Angular)" },
          { label: "API REST (Node.js + Express)" },
          { label: "MongoDB / Mongoose" },
          { label: "Spoonacular API" },
        ],
      },
      {
        heading: "Algoritmo de generación de menús",
        body: [
          "El núcleo técnico del proyecto es el algoritmo encargado de generar combinaciones de comidas que se ajusten a los objetivos de calorías y macronutrientes de cada usuario, teniendo en cuenta al mismo tiempo sus alergias y preferencias alimentarias declaradas.",
        ],
      },
      {
        heading: "Funcionalidades",
        body: [],
        bullets: [
          "Cálculo de objetivos de calorías y macronutrientes",
          "Generación automática de menús semanales (4 comidas diarias)",
          "Gestión de alergias y preferencias alimentarias",
          "Seguimiento diario y de rachas",
          "Publicación de recetas por parte de los usuarios",
          "Almacenamiento de menús personalizados por usuario",
        ],
      },
      {
        heading: "Decisiones técnicas",
        body: [
          "TODO: ampliar con decisiones concretas (por ejemplo, por qué Ionic frente a otra alternativa, cómo se modeló la relación usuario–menú–receta en MongoDB, etc.) cuando se disponga del detalle.",
        ],
      },
      {
        heading: "Aprendizajes",
        body: ["TODO: añadir aprendizajes concretos del proyecto."],
      },
    ],
  },
  {
    slug: "louv",
    name: "LOUV",
    tagline: "Configurador 3D de anillos con un asistente que actúa sobre el modelo",
    role: "Integración de IA conversacional y motor 3D",
    featured: true,
    cover: { placeholderLabel: "PLACEHOLDER: captura del configurador 3D de LOUV" },
    highlights: [
      "Motor 3D en tiempo real para diseñar y personalizar un anillo",
      "Asistente conversacional propio con Rasa y Groq",
      "El chatbot no solo responde: modifica el modelo 3D en tiempo real",
    ],
    technologies: ["Rasa", "Groq", "Motor 3D (personalización en tiempo real)"],
    liveUrl: "https://louv.ovh",
    githubUrl: undefined,
    videoPlaceholder: "PLACEHOLDER: vídeo de demostración de LOUV",
    sections: [
      {
        heading: "Qué es LOUV",
        body: [
          "LOUV es una plataforma disponible en louv.ovh que incorpora un motor 3D para diseñar y personalizar un anillo: el usuario modifica gemas, engastes, forma y materiales, y ve los cambios reflejados directamente en el visor 3D.",
        ],
      },
      {
        heading: "Mi aportación",
        body: [
          "Mi trabajo en LOUV se centró en la inteligencia artificial: el desarrollo de un asistente conversacional y, sobre todo, su integración directa con el motor 3D del configurador.",
        ],
      },
      {
        heading: "Asistente conversacional",
        body: [
          "Desarrollé un chatbot con Rasa para la comprensión de lenguaje natural y Groq como motor de inferencia, permitiendo al usuario realizar consultas y recibir respuestas del asistente dentro de la plataforma.",
        ],
      },
      {
        heading: "IA conectada al motor 3D",
        body: [
          "La parte más relevante del proyecto: el usuario puede pedir en lenguaje natural que el asistente modifique el anillo que está diseñando (por ejemplo, cambiar una gema o un material). El chatbot no se limita a responder — actúa sobre la aplicación y modifica en tiempo real el objeto que el usuario está configurando.",
        ],
        diagram: [
          { label: "Petición en lenguaje natural" },
          { label: "Interpretación de la intención (Rasa + Groq)" },
          { label: "Comunicación con el sistema de personalización" },
          { label: "Ejecución de la acción" },
          { label: "Actualización del modelo 3D en tiempo real" },
        ],
      },
      {
        heading: "Resultado",
        body: [
          "Un configurador donde la capa conversacional y la capa 3D dejan de estar separadas: la IA conversacional, el procesamiento de lenguaje natural, la lógica de aplicación y el motor 3D funcionan como un único sistema en tiempo real.",
        ],
      },
      {
        heading: "Aprendizajes",
        body: ["TODO: añadir aprendizajes concretos del proyecto."],
      },
    ],
  },
];
