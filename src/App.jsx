import NavbarMobile from "./components/NavbarMobile/";
import About from "./components/about/";
import Footer from "./components/footer/";
import Hero from "./components/hero/";
import Projects from "./components/projects/";
import Services from "./components/services/";
import Skills from "./components/skills/";

function App() {
  return (
    <div className="App">
      <main>
        <NavbarMobile />

        <Hero />

        <About />

        <Projects />

        <Services />

        <Skills />

        <Footer />
      </main>
    </div>
  );
}

export default App;
