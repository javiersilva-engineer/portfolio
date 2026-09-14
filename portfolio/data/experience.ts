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
        title: "Automatización de procesos mediante n8n",
        description:
          "Creación de workflows para automatizar procesos e integrar distintos servicios y fuentes de información.",
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
    role: "Desarrollador front-end",
    period: "Octubre 2025 — Febrero 2026",
    location: "Alicante, España",
    context: "Realidad virtual con Unity para sesiones supervisadas por profesionales",
    summary:
      "Desarrollo tecnológico dentro de un proyecto de realidad virtual en Unity, ejecutado en dispositivos Meta Quest, relacionado con sesiones psicológicas supervisadas y evaluación de posibles casos de TDA/TDAH en menores.",
    emphasis:
      "Mi participación fue tecnológica: interfaz de control, comunicación, TTS, Unity y conexión con el entorno de realidad virtual. No incluye diagnóstico médico.",
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
          { label: "Comunicación / TTS" },
          { label: "Unity" },
          { label: "Entorno de realidad virtual" },
          { label: "Usuario con Meta Quest" },
        ],
      },
      {
        title: "Interfaz para profesionales",
        description:
          "Desarrollo de la interfaz destinada a los psicólogos, desde la que podían controlar aspectos de la sesión, interactuar con el entorno virtual, comunicarse con el usuario y consultar información de sesiones anteriores.",
      },
    ],
    technologies: ["Unity", "Realidad virtual", "Meta Quest", "Text-to-Speech (TTS)", "Interfaz de control", "Comunicación en VR"],
    focusTechnologies: ["Unity", "Realidad virtual", "Text-to-Speech", "Interfaz de control", "Comunicación en VR", "Meta Quest"],
  },
];
