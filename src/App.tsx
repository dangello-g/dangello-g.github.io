import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import { ThemeProvider } from "@/components/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="relative container w-11/12 mx-auto p-4 space-y-4">
          <Header />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
