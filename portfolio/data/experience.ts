export type DiagramStep = {
  label: string;
};

export type Contribution = {
  title: string;
  description: string;
  diagram?: DiagramStep[];
};

export type ExperienceEntry = {
  slug: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  context: string;
  summary: string;
  emphasis?: string;
  contributions: Contribution[];
  technologies: string[];
  focusTechnologies?: string[];
};

export const experience: ExperienceEntry[] = [
  {
    slug: "1millionbot",
    company: "1MillionBot",
    role: "Desarrollador Full Stack",
    period: "Mayo 2026 — Actualidad",
    location: "Alicante, España",
    context: "Asistentes conversacionales, plataforma propia e integración de IA",
    summary:
      "Desarrollo y mejora de asistentes conversacionales y funcionalidades de plataforma: comprensión de consultas, comportamiento de respuestas, integración de modelos de IA, backend e integración de servicios.",
    emphasis:
      "Trabajo orientado a convertir lenguaje natural en comportamiento útil dentro de productos conversacionales reales.",
    contributions: [
      {
        title: "Migración de proyectos a la plataforma propia",
        description:
          "Migración de proyectos desarrollados inicialmente con Lovable hacia la plataforma y arquitectura utilizada por la empresa.",
      },
      {
        title: "Text-to-Query sobre datos estructurados",
        description:
          "Colaboración en un servicio que transforma preguntas de usuarios en lenguaje natural en consultas a bases de datos para recuperar información y construir respuestas del asistente.",
        diagram: [
          { label: "Usuario" },
          { label: "Pregunta en lenguaje natural" },
          { label: "Interpretación" },
          { label: "Generación de consulta" },
          { label: "Consulta a base de datos" },
          { label: "Recuperación de datos" },
          { label: "Respuesta del asistente" },
        ],
      },
      {
        title: "Evolución de asistentes y plataforma",
        description:
          "Mejoras en comprensión de consultas, comportamiento de respuestas, funcionalidades de plataforma, backend e integración de servicios.",
      },
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Redis",
      "Docker",
      "APIs REST",
      "OpenAI",
      "Modelos LLM",
      "Embeddings",
      "Rasa",
      "Groq",
      "Mistral",
      "n8n",
    ],
    focusTechnologies: ["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Prisma", "MongoDB", "Redis", "Docker", "OpenAI / LLMs", "embeddings", "n8n"],
  },
  {
    slug: "lucentia",
    company: "Lucentia Research Group",
    role: "Desarrollador Full Stack",
    period: "Octubre 2025 — Febrero 2026",
    location: "Alicante, España",
    context: "Realidad virtual aplicada a sesiones supervisadas por profesionales",
    summary:
      "Desarrollo tecnológico dentro de un proyecto de realidad virtual relacionado con terapias psicológicas y evaluación de posibles casos de TDAH en menores, siempre bajo supervisión profesional.",
    emphasis:
      "Mi participación fue tecnológica: interfaz de control, comunicación, TTS y conexión con el entorno de realidad virtual. No incluye diagnóstico médico.",
    contributions: [
      {
        title: "Avatar virtual del psicólogo",
        description:
          "Creación de un avatar dentro del entorno de realidad virtual que representa la presencia del profesional, quien controla la sesión desde el exterior.",
      },
      {
        title: "Comunicación psicólogo ↔ entorno VR",
        description:
          "Sistema de comunicación entre el profesional y el usuario dentro de VR: voz por micrófono desde el exterior y mensajes escritos convertidos a voz mediante Text-to-Speech.",
        diagram: [
          { label: "Psicólogo" },
          { label: "Interfaz de control" },
          { label: "Micrófono o mensaje escrito" },
          { label: "Servicio TTS" },
          { label: "Generación de voz" },
          { label: "Entorno de realidad virtual" },
        ],
      },
      {
        title: "Interfaz para profesionales",
        description:
          "Desarrollo de la interfaz destinada a los psicólogos, desde la que podían controlar aspectos de la sesión, interactuar con el entorno virtual, comunicarse con el usuario y consultar información de sesiones anteriores.",
      },
    ],
    technologies: ["Realidad virtual", "Text-to-Speech (TTS)", "Interfaz de control", "Comunicación en VR"],
    focusTechnologies: ["Realidad virtual", "Text-to-Speech", "Interfaz de control", "Comunicación en VR"],
  },
];
