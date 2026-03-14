import { AppProvider } from './context/AppContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <AppProvider>
      <CustomCursor />
      <div className="relative w-full min-h-screen edge-glow flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Internship />
          <Projects />
          <Gallery />
          <Certificates />
          <Contact />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;