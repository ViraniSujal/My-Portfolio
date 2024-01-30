import Intro from "./components/intro/intro";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Education from "./components/Education/education";
import Projects from "./components/Projrcts/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
