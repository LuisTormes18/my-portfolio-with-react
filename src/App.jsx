import Hero from "./components/hero/";
import About from "./components/about/";
import Projects from "./components/projects/";
import Services from "./components/services/";
import Skills from "./components/skills/";
import Footer from "./components/footer/";
import NavbarMobile from "./components/NavbarMobile/";

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
