export type DiagramStep = {
  label: string;
};

export type ExperienceEntry = {
  slug: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  contributions: {
    title: string;
    description: string;
    diagram?: DiagramStep[];
  }[];
  technologies: string[];
};

export const experience: ExperienceEntry[] = [
  {
    slug: "1millionbot",
    company: "1MillionBot",
    role: "Desarrollador Full Stack",
    period: "Mayo 2026 — Actualidad",
    location: "Alicante, España",
    summary:
      "Desarrollo y evolución de asistentes conversacionales y de la plataforma de la empresa: comprensión de consultas, comportamiento de los asistentes, integración de modelos de IA y de servicios externos, backend y automatización.",
    contributions: [
      {
        title: "Migración de proyectos a la plataforma propia",
        description:
          "Participación en la migración de proyectos desarrollados inicialmente con Lovable hacia la arquitectura y plataforma de la empresa, adaptando el código y la estructura al stack interno.",
      },
      {
        title: "Servicio de Text-to-Query (NL-to-SQL)",
        description:
          "Colaboración en el desarrollo de un servicio que traduce preguntas en lenguaje natural a consultas sobre bases de datos, permitiendo que el asistente responda con información precisa extraída directamente de los datos.",
        diagram: [
          { label: "Pregunta en lenguaje natural" },
          { label: "Interpretación de la intención" },
          { label: "Generación de la consulta" },
          { label: "Recuperación de datos" },
          { label: "Respuesta del asistente" },
        ],
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
  },
  {
    slug: "lucentia",
    company: "Lucentia Research Group",
    role: "Desarrollador Full Stack",
    period: "Octubre 2025 — Febrero 2026",
    location: "Alicante, España",
    summary:
      "Desarrollo tecnológico dentro de un proyecto de realidad virtual orientado a terapias psicológicas con menores y al apoyo en la evaluación de posibles casos de TDAH, siempre bajo la supervisión de un profesional de la psicología. Mi trabajo se centró en la capa tecnológica del sistema, no en la evaluación clínica.",
    contributions: [
      {
        title: "Avatar virtual del psicólogo",
        description:
          "Creación de un avatar dentro del entorno de realidad virtual que representa la presencia del profesional, quien controla la sesión desde el exterior.",
      },
      {
        title: "Comunicación psicólogo ↔ entorno VR",
        description:
          "Desarrollo del sistema de comunicación entre el profesional y el usuario dentro del entorno virtual: transmisión de voz por micrófono y una alternativa de texto, convertida automáticamente a voz mediante un servicio de Text-to-Speech (TTS) integrado para reproducirse dentro de la experiencia.",
        diagram: [
          { label: "Interfaz de control (psicólogo)" },
          { label: "Mensaje: voz o texto" },
          { label: "Servicio Text-to-Speech" },
          { label: "Entorno de realidad virtual" },
        ],
      },
      {
        title: "Interfaz para profesionales",
        description:
          "Desarrollo de la interfaz destinada a los psicólogos, desde la que podían controlar aspectos de la sesión, interactuar con el entorno virtual, comunicarse con el usuario y consultar información de sesiones anteriores.",
      },
    ],
    technologies: ["Realidad virtual", "Text-to-Speech (TTS)"],
  },
];
