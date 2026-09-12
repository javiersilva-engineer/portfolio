export type TechGroup = {
  area: string;
  items: string[];
};

export const technologies: TechGroup[] = [
  {
    area: "Frontend",
    items: ["Angular", "Ionic", "TypeScript", "JavaScript", "HTML", "CSS", "React"],
  },
  {
    area: "Backend",
    items: ["Node.js", "Express", "Fastify", "APIs REST", "PHP", "Java", "C", "C++"],
  },
  {
    area: "Bases de datos",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Prisma", "Mongoose", "Redis"],
  },
  {
    area: "Inteligencia Artificial",
    items: [
      "OpenAI / LLMs",
      "Rasa",
      "Groq",
      "Mistral",
      "Embeddings",
      "NL-to-SQL / Text-to-Query",
      "Integración de IA en aplicaciones",
      "Asistentes conversacionales",
    ],
  },
  {
    area: "Automatización",
    items: ["n8n", "Automatización de workflows", "Integración entre servicios"],
  },
  {
    area: "Multimedia",
    items: ["Realidad virtual", "Sistemas 3D interactivos", "Modelado 3D (Blender)", "Text-to-Speech"],
  },
  {
    area: "Herramientas e infraestructura",
    items: ["Git", "GitHub", "Docker", "Visual Studio Code", "XAMPP"],
  },
];
