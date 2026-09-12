export type EducationEntry = {
  title: string;
  institution: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    title: "Grado en Ingeniería Multimedia",
    institution: "Universidad de Alicante, Sant Vicent del Raspeig",
    period: "2022 — 2026",
  },
  {
    title: "Técnico superior en automoción",
    institution: "CIPFP Canastell, Sant Vicent del Raspeig",
    period: "2020 — 2022",
  },
];

export const complementaryEducation: EducationEntry[] = [
  {
    title: "Título de Riesgos Laborales, nivel básico",
    institution: "CIPFP Canastell, Sant Vicent del Raspeig",
    period: "2021",
  },
];

// TODO: añadir cursos y certificaciones adicionales cuando existan.
