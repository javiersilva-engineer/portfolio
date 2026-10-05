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
  video?: {
    provider: "youtube";
    id: string;
    title: string;
  };
  diagram?: DiagramStep[];
  bullets?: string[];
  images?: ProjectImage[];
  summary?: {
    label: string;
    text: string;
  }[];
  layout?: "overview" | "media" | "architecture" | "algorithm" | "desktop-with-mobile-grid";
  cta?: {
    label: string;
    note: string;
  };
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  metadata?: {
    title?: string;
    description?: string;
  };
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
        layout: "desktop-with-mobile-grid",
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
    tagline: "Personalización 3D de anillos con IA conversacional integrada",
    role: "Integración de IA conversacional y motor 3D",
    featured: true,
    cover: {
      image: {
        src: "/images/louv/editor.png",
        alt: "Editor 3D de LOUV para personalizar un anillo en tiempo real",
        width: 1359,
        height: 594,
        caption: "Editor 3D interactivo de LOUV",
        frame: "desktop",
      },
    },
    heroIntro:
      "LOUV es una plataforma de personalización de anillos con un editor 3D interactivo. Mi aportación principal fue Luna, un asistente conversacional conectado al editor para transformar peticiones en lenguaje natural en cambios visibles sobre el anillo.",
    highlights: [
      "Editor 3D interactivo para personalizar elementos del anillo",
      "Luna, asistente conversacional desarrollado con Rasa y Groq",
      "Integración entre lenguaje natural, lógica de acción y actualización del editor 3D",
    ],
    technologies: ["Rasa", "Groq", "IA conversacional", "Editor 3D"],
    liveUrl: "https://louv.ovh",
    githubUrl: undefined,
    sections: [
      {
        heading: "Qué es LOUV",
        body: [
          "LOUV es una plataforma de personalización de anillos con un editor 3D interactivo. El usuario puede modificar el diseño y visualizar el resultado en tiempo real dentro del propio visor.",
        ],
        images: [
          {
            src: "/images/louv/landing-limpia.png",
            alt: "Página de presentación de LOUV enfocada en la personalización de anillos",
            width: 1344,
            height: 596,
            caption: "Plataforma LOUV",
            frame: "desktop",
          },
        ],
        layout: "media",
      },
      {
        heading: "Editor 3D y personalización",
        body: [
          "El editor permite modificar elementos del anillo como gemas, materiales, engastes, base, forma y otros detalles del diseño, viendo los cambios reflejados directamente en el visor 3D.",
        ],
        images: [
          {
            src: "/images/louv/editor.png",
            alt: "Editor 3D de LOUV con opciones de personalización del anillo",
            width: 1359,
            height: 594,
            caption: "Personalización en el editor 3D",
            frame: "desktop",
          },
          {
            src: "/images/louv/editor-3d-packaging.webp",
            alt: "Vista del editor 3D de LOUV con opciones de diseño y presentación del anillo",
            width: 1359,
            height: 627,
            caption: "Vista del configurador 3D",
            frame: "desktop",
          },
        ],
        layout: "media",
      },
      {
        heading: "Luna, el asistente conversacional",
        body: [
          "Luna fue desarrollado para permitir interacción en lenguaje natural dentro de LOUV. Mi principal aportación fue conectar el asistente con el editor 3D para que no se limitara a responder consultas, sino que pudiera traducir peticiones del usuario en acciones sobre el anillo.",
        ],
        images: [
          {
            src: "/images/louv/chatbot-editor-clean.webp",
            alt: "Chatbot Luna integrado junto al editor 3D de LOUV",
            width: 1359,
            height: 629,
            caption: "Luna integrado en la experiencia del editor",
            frame: "desktop",
          },
        ],
        layout: "media",
      },
      {
        heading: "Integración chatbot ↔ editor 3D",
        body: [
          "El valor diferencial de Luna está en la conexión entre conversación y acción. El flujo transforma una petición escrita por el usuario en una modificación concreta que el editor 3D aplica sobre el anillo en tiempo real.",
        ],
        diagram: [
          { label: "Usuario" },
          { label: "Petición en lenguaje natural" },
          { label: "Luna interpreta la intención" },
          { label: "Sistema determina la modificación" },
          { label: "Editor 3D aplica el cambio" },
          { label: "Anillo actualizado en tiempo real" },
        ],
        layout: "algorithm",
      },
      {
        heading: "Demostración",
        body: [
          "Demo del asistente Luna interactuando con el editor 3D de LOUV y aplicando cambios sobre el producto mediante instrucciones en lenguaje natural.",
        ],
        video: {
          provider: "youtube",
          id: "qP47tkVvJWE",
          title: "Demostración de LOUV y su asistente Luna",
        },
      },
      {
        heading: "Información complementaria",
        body: [
          "Además del editor y Luna, el proyecto incluye superficies complementarias de gestión y seguimiento. Las presento como contexto secundario, manteniendo el foco del case study en la integración conversacional con el editor 3D.",
        ],
        images: [
          {
            src: "/images/louv/panel-estadisticas.webp",
            alt: "Panel de estadísticas de LOUV como información complementaria de la plataforma",
            width: 1006,
            height: 575,
            caption: "Panel complementario de la plataforma",
            frame: "desktop",
          },
        ],
        layout: "media",
      },
    ],
  },
  {
    slug: "molamazogames",
    name: "MolaMazoGAMES",
    tagline: "Plataforma web para publicación y gestión de assets digitales",
    metadata: {
      title: "MolaMazoGAMES | Javier Silva",
      description:
        "Plataforma web desarrollada con el stack MERN para publicación y gestión de assets digitales. Desarrollo frontend e integración con backend.",
    },
    role: "Proyecto académico en equipo — Desarrollo frontend",
    featured: true,
    cover: {
      image: {
        src: "/images/molamazogames/UA_PROJECT - frame at 0m1s.jpg",
        alt: "Interfaz principal de MolaMazoGAMES con navegación por categorías de assets digitales",
        width: 3840,
        height: 2160,
        caption: "Plataforma de assets digitales desarrollada con stack MERN",
        frame: "desktop",
      },
    },
    heroIntro:
      "MolaMazoGAMES es una plataforma académica desarrollada en equipo con el stack MERN para publicar, explorar, filtrar y descargar assets digitales. Mi aportación se centró en el frontend, la autenticación, la gestión de usuarios y la integración con el backend para operaciones como la subida de assets.",
    highlights: [
      "Proyecto académico en equipo construido sobre el stack MERN",
      "Frontend en React para navegación, autenticación y gestión de usuario",
      "Integración con APIs del backend para consultar assets y gestionar subidas",
    ],
    technologies: ["React", "Frontend", "Integración de APIs", "Autenticación", "Gestión de usuarios", "MERN"],
    githubUrl: undefined,
    sections: [
      {
        heading: "Contexto",
        body: [
          "MolaMazoGAMES es una plataforma web orientada a la publicación y consulta de assets digitales de distintas categorías. El producto permite explorar contenido, filtrar resultados, consultar fichas de asset y realizar acciones asociadas a una cuenta de usuario.",
          "Fue desarrollado como proyecto académico en equipo. Por eso el case study separa las funcionalidades del producto de mi responsabilidad concreta dentro del desarrollo.",
        ],
        summary: [
          {
            label: "Tipo",
            text: "Proyecto académico en equipo.",
          },
          {
            label: "Producto",
            text: "Plataforma web para publicar, explorar, filtrar y descargar assets digitales.",
          },
          {
            label: "Aportación",
            text: "Desarrollo frontend, autenticación, gestión de usuario e integración con backend.",
          },
        ],
        layout: "overview",
      },
      {
        heading: "Funcionalidades principales",
        body: [
          "Como producto, la aplicación reúne flujos de navegación, búsqueda y gestión de assets digitales. Estas funcionalidades describen el alcance global de la plataforma, no una autoría individual de todo el sistema.",
        ],
        bullets: [
          "Navegación por assets y categorías de contenido",
          "Búsqueda y filtrado de assets",
          "Registro e inicio de sesión de usuarios",
          "Publicación y subida de assets",
          "Consulta de información detallada de un asset",
          "Gestión de cuenta y modificación de datos",
          "Cambio de contraseña y opciones de cuenta",
          "Historial de descargas",
        ],
      },
      {
        heading: "Mi contribución",
        body: [
          "Mi responsabilidad principal estuvo en el frontend de la aplicación. Trabajé sobre las interfaces y flujos de usuario en React, conectando la experiencia visual con los servicios expuestos por el backend.",
        ],
        summary: [
          {
            label: "Desarrollo frontend",
            text: "Desarrollo de interfaces y flujos de usuario de la aplicación utilizando React.",
          },
          {
            label: "Autenticación y usuario",
            text: "Implementación desde frontend de registro, inicio de sesión, visualización y modificación de datos, gestión de contraseña y opciones de cuenta.",
          },
          {
            label: "Integración con backend",
            text: "Implementación de llamadas desde frontend hacia el backend, incluyendo el flujo de subida de assets y sus datos asociados.",
          },
        ],
        layout: "overview",
      },
      {
        heading: "Integración frontend-backend",
        body: [
          "El frontend consume servicios del backend mediante llamadas HTTP para obtener assets, autenticar usuarios, actualizar información de cuenta y enviar datos asociados a assets. En el flujo de subida verifiqué el uso de FormData para enviar archivos y metadatos desde React hacia los endpoints de archivos, antes de crear el asset con las referencias devueltas por el backend.",
        ],
        diagram: [
          { label: "Usuario" },
          { label: "React / Frontend" },
          { label: "API / Backend" },
          { label: "Node.js + Express" },
          { label: "MongoDB" },
        ],
        layout: "algorithm",
      },
      {
        heading: "Flujo de subida de assets",
        body: [
          "El usuario podía introducir información del asset, seleccionar categorías y etiquetas, escoger una imagen de portada y añadir archivos. Desde el frontend se preparaban los datos, se subían los archivos al backend y después se enviaba la información del asset para completar la publicación.",
        ],
        diagram: [
          { label: "Formulario de asset" },
          { label: "Frontend React" },
          { label: "FormData con archivos y datos" },
          { label: "Petición al backend" },
          { label: "Respuesta con referencias" },
          { label: "Actualización de interfaz" },
        ],
        layout: "algorithm",
      },
      {
        heading: "Stack MERN",
        body: [
          "El proyecto utiliza el stack MERN como base técnica. En mi aportación el foco estuvo en React, la gestión de flujos de usuario y la integración del frontend con las APIs del backend.",
        ],
        bullets: ["MongoDB", "Express", "React", "Node.js"],
      },
      {
        heading: "Demostración",
        body: [
          "Recorrido por las principales funcionalidades de MolaMazoGAMES, incluyendo navegación, gestión de assets, autenticación y funcionalidades de usuario.",
        ],
        video: {
          provider: "youtube",
          id: "F9kPziYR3mM",
          title: "Demostración de MolaMazoGAMES",
        },
      },
    ],
  },
];
