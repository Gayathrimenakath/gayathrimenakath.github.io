import { useEffect, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { Projects } from "./components/Projects";

function App() {
  const [activeSection, setActiveSection] = useState<string>("");

  const sectionIds = ["about", "experience", "projects", "contact"];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          window.history.replaceState(null, "", `#${entry.target.id}`);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <HomePage />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
