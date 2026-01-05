import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return ( 
    <div>
      <Navbar />
      <Hero />
      <About />
      <br></br>
      <br></br>
      <br></br>
      <Projects />
      <Skill/>
      <Contact />
    </div>
  );
}

export default App;
