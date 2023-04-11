import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/UI/Hero";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import Skills from "./components/UI/Skills";
import ExperienceAndEducation from "./components/UI/ExperienceAndEducation";


function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceAndEducation/>
        <Portfolio/>
        <Skills/>
        <Contact/>
      </main>
      <Footer />
    </>
  );
}

export default App;
