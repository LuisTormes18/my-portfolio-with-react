import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";


function App() {
    return (
		<div className="App">
		
            <Hero />

            <About />

            <Services />

            <Projects />
            
            <Skills />

            <Footer />
        </div>

    );
}

export default App;

