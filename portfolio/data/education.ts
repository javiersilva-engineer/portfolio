export type EducationEntry = {
  title: string;
  institution: string;
  period: string;
  status?: string;
};

export type LanguageEntry = {
  language: string;
  level: string;
};

export const education: EducationEntry[] = [
  {
    title: "Grado en Ingeniería Multimedia",
    institution: "Universidad de Alicante",
    period: "Septiembre 2022 — Junio 2026",
    status: "Estudios finalizados",
  },
];

export const languages: LanguageEntry[] = [
  { language: "Castellano", level: "Nativo" },
  { language: "Inglés", level: "Intermedio-alto" },
  { language: "Valenciano", level: "Nivel medio" },
];
