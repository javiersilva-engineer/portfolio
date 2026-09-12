import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Gallery3D } from "@/components/Gallery3D";
import { Technologies } from "@/components/Technologies";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Gallery3D />
      <Technologies />
      <Education />
      <Contact />
    </>
  );
}
