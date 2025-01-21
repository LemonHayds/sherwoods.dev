import About from "../components/sections/about.section";
import Contact from "../components/sections/contact.section";
import Intro from "../components/sections/intro.section";
import Projects from "../components/sections/projects.section";
import Skills from "../components/sections/skills.section";

export default function Home() {
  return (
    <main className="h-full w-full flex flex-col gap-y-6">
      <Intro />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
