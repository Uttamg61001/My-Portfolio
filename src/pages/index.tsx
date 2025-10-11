import About from "@/components/HomePageSections/About";
import Contact from "@/components/HomePageSections/Contact";
import Experience from "@/components/HomePageSections/Experience";
import Hero from "@/components/HomePageSections/Hero";
import Projects from "@/components/HomePageSections/Projects";
import Skills from "@/components/HomePageSections/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
