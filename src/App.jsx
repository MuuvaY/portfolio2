import React from "react";
import { useContext } from "react";
import { LanguageProvider } from "./components/LanguageContext";

import Skills from "./components/Skills";
import Accueil from "./components/Accueil";
import Navbar from "./components/Navbar";
import Compétences from "./components/Compétences";
import Technologies from "./components/Technologies";
import Projets from "./components/Projets";
import Carrousel from "./components/Carrousel";
import Testslide from "./components/Testslide";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <LanguageProvider>
      {/* <Navbar /> */}
      <Accueil />
      <Compétences />
      <Technologies />
      {/* <Skills /> */}
      <Projets />
      <Carrousel />
      {/* <Testslide /> */}
      <Contact />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
