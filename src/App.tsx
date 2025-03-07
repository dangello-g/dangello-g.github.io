import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavHighlighter from "./components/NavHighlighter"
import "./App.css"

function App() {
  return (
    <>
      <NavHighlighter />
      <Header />
      <main className="container w-75 pt-3 bg-light">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
