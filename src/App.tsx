import "./App.css";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <About />
      <Experience />
      {/* <Projects />
      <Contact /> */}
    </>
  );
}

export default App;
