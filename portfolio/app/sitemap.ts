import { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((p) => ({
    url: `${site.url}/projects/${p.slug}`,
  }));

  return [
    { url: site.url },
    ...projectRoutes,
  ];
}
