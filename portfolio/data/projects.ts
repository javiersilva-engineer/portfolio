export type DiagramStep = { label: string };

export type ProjectImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  frame?: "desktop" | "mobile" | "diagram";
};

export type ProjectSection = {
  heading: string;
  body: string[];
  diagram?: DiagramStep[];
  bullets?: string[];
  images?: ProjectImage[];
  summary?: {
    label: string;
    text: string;
  }[];
  layout?: "overview" | "media" | "architecture" | "algorithm";
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  featured: boolean;
  cover: {
    placeholderLabel?: string;
    image?: ProjectImage;
  };
  heroIntro?: string;
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
    cover: {
      image: {
        src: "/images/enfo/menu-semanal-desktop.webp",
        alt: "Vista de escritorio del menú semanal personalizado generado en ENFO",
        width: 1359,
        height: 629,
        caption: "Menú semanal personalizado generado por la aplicación",
        frame: "desktop",
      },
    },
    heroIntro:
      "Aplicación nutricional multiplataforma que calcula objetivos, personaliza menús semanales y permite hacer seguimiento diario teniendo en cuenta alergias y recetas.",
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
    sections: [
      {
        heading: "Visión general",
        body: [
          "ENFO es mi Trabajo de Fin de Grado en Ingeniería Multimedia: una aplicación completa de nutrición con frontend, backend, base de datos, lógica de negocio e integración con una API externa de recetas.",
        ],
        summary: [
          {
            label: "Problema",
            text: "Planificar una alimentación ajustada a calorías, macronutrientes y alergias requiere cruzar demasiada información de forma manual.",
          },
          {
            label: "Solución",
            text: "Una app que calcula objetivos nutricionales, filtra recetas y genera menús semanales personalizados para cada usuario.",
          },
          {
            label: "Resultado",
            text: "Un producto funcional con experiencia móvil y desktop, API propia, persistencia en MongoDB e integración externa para recetas.",
          },
        ],
        layout: "overview",
      },
      {
        heading: "Cálculo y personalización nutricional",
        body: [
          "La app calcula calorías objetivo y macronutrientes a partir de los datos del usuario, su nivel de actividad y el objetivo físico seleccionado. Esta base nutricional se utiliza después para construir menús coherentes con las necesidades personales.",
        ],
        images: [
          {
            src: "/images/enfo/objetivos-desktop.webp",
            alt: "Pantalla de escritorio de ENFO con cálculo de objetivos nutricionales",
            width: 1359,
            height: 630,
            caption: "Configuración de objetivos en escritorio",
            frame: "desktop",
          },
          {
            src: "/images/enfo/objetivos-mobile.webp",
            alt: "Pantalla móvil de ENFO con objetivos de calorías y macronutrientes",
            width: 309,
            height: 551,
            caption: "Objetivos nutricionales en móvil",
            frame: "mobile",
          },
        ],
        layout: "media",
      },
      {
        heading: "Alergias y generación del menú",
        body: [
          "Antes de generar el menú semanal, el sistema tiene en cuenta las alergias indicadas por el usuario. Esa información condiciona el filtrado de recetas y evita proponer comidas incompatibles con su perfil.",
        ],
        images: [
          {
            src: "/images/enfo/alergias-desktop.webp",
            alt: "Pantalla de escritorio de ENFO para seleccionar alergias alimentarias",
            width: 1359,
            height: 627,
            caption: "Selección de alergias",
            frame: "desktop",
          },
          {
            src: "/images/enfo/menu-semanal-desktop.webp",
            alt: "Menú semanal de ENFO generado tras aplicar objetivos y alergias",
            width: 1359,
            height: 629,
            caption: "Menú semanal generado",
            frame: "desktop",
          },
          {
            src: "/images/enfo/menu-semanal-mobile.webp",
            alt: "Vista móvil del menú semanal personalizado en ENFO",
            width: 307,
            height: 549,
            caption: "Menú semanal en móvil",
            frame: "mobile",
          },
        ],
        layout: "media",
      },
      {
        heading: "Seguimiento diario",
        body: [
          "ENFO permite registrar el avance diario y consultar calorías, macronutrientes y progreso. La experiencia conecta el menú planificado con el seguimiento real de comidas y objetivos.",
        ],
        images: [
          {
            src: "/images/enfo/progreso-desktop.webp",
            alt: "Panel de progreso diario de ENFO con calorías y macronutrientes",
            width: 1359,
            height: 626,
            caption: "Progreso diario",
            frame: "desktop",
          },
          {
            src: "/images/enfo/comidas-desktop.webp",
            alt: "Vista de escritorio de ENFO con comidas registradas durante el día",
            width: 1359,
            height: 626,
            caption: "Registro de comidas",
            frame: "desktop",
          },
        ],
        layout: "media",
      },
      {
        heading: "Recetas",
        body: [
          "La app permite explorar recetas, aplicar filtros para encontrar opciones adecuadas y publicar nuevas recetas. Esta parte amplía el producto más allá del menú generado y lo convierte en una herramienta de consulta y aportación.",
        ],
        images: [
          {
            src: "/images/enfo/recetas-mobile.webp",
            alt: "Listado móvil de recetas disponibles en ENFO",
            width: 306,
            height: 542,
            caption: "Exploración de recetas",
            frame: "mobile",
          },
          {
            src: "/images/enfo/filtros-mobile.webp",
            alt: "Filtros móviles de ENFO para refinar la búsqueda de recetas",
            width: 306,
            height: 547,
            caption: "Filtros de búsqueda",
            frame: "mobile",
          },
          {
            src: "/images/enfo/recetas-filtradas-mobile.webp",
            alt: "Resultados móviles de recetas filtradas en ENFO",
            width: 308,
            height: 547,
            caption: "Recetas filtradas",
            frame: "mobile",
          },
          {
            src: "/images/enfo/publicar-receta-desktop.webp",
            alt: "Formulario de escritorio para publicar una receta en ENFO",
            width: 1359,
            height: 628,
            caption: "Publicación de recetas",
            frame: "desktop",
          },
        ],
        layout: "media",
      },
      {
        heading: "Arquitectura",
        body: [
          "Frontend construido con Ionic, Angular y TypeScript. Backend en Node.js con Express, expuesto mediante una API REST. Persistencia en MongoDB con Mongoose como capa de modelado de datos. Integración con la API externa de Spoonacular para el catálogo de recetas.",
        ],
        images: [
          {
            src: "/images/enfo/architecture-diagram.webp",
            alt: "Diagrama de arquitectura de ENFO con Ionic, Angular, API REST, MongoDB y Spoonacular",
            width: 777,
            height: 1017,
            caption: "Arquitectura general de la aplicación",
            frame: "diagram",
          },
        ],
        layout: "architecture",
      },
      {
        heading: "Algoritmo del menú semanal",
        body: [
          "El núcleo técnico del proyecto es el algoritmo encargado de evaluar combinaciones de comidas y seleccionar el menú semanal que mejor se ajusta a los objetivos nutricionales del usuario, respetando alergias y controlando la variedad.",
        ],
        diagram: [
          { label: "Datos del usuario" },
          { label: "Cálculo de objetivos" },
          { label: "Filtrado por alergias" },
          { label: "Clasificación por tipo de comida" },
          { label: "Generación de combinaciones" },
          { label: "Puntuación nutricional" },
          { label: "Ajuste del snack" },
          { label: "Validación del menú candidato" },
          { label: "Control de variedad" },
          { label: "Selección del mejor menú semanal" },
        ],
        layout: "algorithm",
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
