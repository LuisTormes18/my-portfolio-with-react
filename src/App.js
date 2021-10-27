import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";

import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
<div className="App">
            <Hero />

            <About />
            <Projects />
            <Services />
            <Skills />

            <Footer />
        </div>

        </ BrowserRouter>
    );
}

export default App;
