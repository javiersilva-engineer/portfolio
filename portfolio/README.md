# Portfolio — Javier Silva

Portfolio profesional construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS**, generado estáticamente (SSG), listo para desplegar en Vercel.

## Cómo ejecutarlo en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Cómo desplegarlo

1. Sube este proyecto a un repositorio de GitHub.
2. Importa el repositorio en [vercel.com](https://vercel.com) → Vercel detecta Next.js automáticamente, sin configuración adicional.
3. Cada `git push` a la rama principal genera un despliegue nuevo.

## Estructura

```
app/                  Páginas y layout (App Router)
  page.tsx            Home (todas las secciones)
  projects/[slug]/    Case studies dinámicos (ENFO, LOUV)
  sitemap.ts          Sitemap generado automáticamente
  robots.ts           robots.txt generado automáticamente
  icon.png            Favicon (placeholder — sustituir si se quiere uno propio)
components/           Componentes de UI (Hero, Experience, Projects, etc.)
components/ui/        Primitivas reutilizables (Button, Tag, Section, Placeholder)
data/                 Todo el contenido real, separado de la presentación
  site.ts             Datos generales (nombre, email, enlaces, dominio, ruta del CV)
  experience.ts       1MillionBot y Lucentia
  projects.ts         ENFO y LOUV (case studies completos)
  technologies.ts      Tecnologías agrupadas por área
  education.ts         Formación
  gallery3d.ts          Piezas de la galería 3D
public/cv/             CV en PDF (el que subiste)
public/images/          Carpeta para las capturas/imágenes reales cuando las tengas
```

## Qué falta rellenar antes de publicarlo

Busca `TODO` y `PLACEHOLDER` en el proyecto (sobre todo en `data/site.ts`, `data/gallery3d.ts` y `data/projects.ts`):

- **`data/site.ts`**: dominio final (`url`), email a publicar (`email`), enlaces reales de GitHub y LinkedIn.
- **`data/gallery3d.ts`**: nombres, descripciones y técnicas reales de tus modelos 3D (software ya está puesto: Blender).
- **`data/projects.ts`**: decisiones técnicas y aprendizajes de ENFO y LOUV; enlace a GitHub si finalmente publicas los repositorios.
- **Imágenes reales**: las capturas y vídeos aparecen como bloques con el texto "Imagen pendiente" / "Vídeo pendiente". Cuando tengas los archivos, colócalos en `public/images/` y sustituye los componentes `<Placeholder ... />` correspondientes por `<Image src="..." ... />` de `next/image`.
- **Foto personal** (opcional): si decides usarla, añádela en `public/images/` y colócala en el Hero o en Sobre mí.
- **Favicon**: `app/icon.png` es un icono provisional generado automáticamente; sustitúyelo por uno propio si quieres.

## Notas de diseño

- Modo oscuro como único modo por ahora (tal como se decidió). Si más adelante se quiere modo claro, se puede añadir con `next-themes` sin tocar el resto de componentes, ya que los colores están centralizados en `tailwind.config.ts`.
- Los diagramas de flujo (NL-to-SQL, comunicación en Lucentia, IA↔motor 3D en LOUV) son un componente propio (`components/FlowDiagram.tsx`), sin librerías externas — ligero y fácil de mantener.
- El contenido está separado de los componentes en `data/`: para añadir un nuevo proyecto, basta con añadir una entrada en `data/projects.ts`; la página `/projects/[slug]` se genera automáticamente.
