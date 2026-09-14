export type TechGroup = {
  area: string;
  items: string[];
  capabilitiesLabel?: string;
  capabilities?: string[];
};

export const technologies: TechGroup[] = [
  {
    area: "Frontend",
    items: ["Angular", "Ionic", "TypeScript", "JavaScript", "HTML", "CSS"],
    capabilitiesLabel: "También",
    capabilities: ["React"],
  },
  {
    area: "Backend",
    items: ["Node.js", "Express", "Fastify", "APIs REST"],
  },
  {
    area: "Datos",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Prisma", "Mongoose", "Redis"],
  },
  {
    area: "Inteligencia Artificial",
    items: ["OpenAI / LLMs", "Rasa", "Groq", "Mistral", "embeddings", "NL-to-SQL / Text-to-Query"],
    capabilities: ["asistentes conversacionales", "integración de IA en aplicaciones"],
  },
  {
    area: "Automatización",
    items: ["n8n"],
    capabilities: ["diseño de workflows", "automatización de procesos", "integración entre servicios"],
  },
  {
    area: "Multimedia / tecnologías interactivas",
    items: ["Unity", "Blender"],
    capabilities: ["modelado 3D", "realidad virtual", "sistemas 3D interactivos", "Text-to-Speech"],
  },
  {
    area: "Herramientas / infraestructura",
    items: ["Git", "GitHub", "Docker"],
  },
];
