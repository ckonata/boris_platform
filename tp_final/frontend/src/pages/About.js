import React from "react";
import "../styles/components/pages/HomePage.css"
import { Hero } from "../components/HomePage/Hero"
import { MainAbout } from "../components/About/MainAbout"


const About = () => {
 return(
     <>
     <Hero 
      title="Te proporcionamos el poder de acceder a educacion de primer nivel"
      subtitle="Pensamos en la educación como una construcción, conformada por multiples bloques. Nuestra construcción debe tener una base firme para que se mantenga sólida y continúe creciendo."
     />
     <MainAbout />
    </>
 );
}

export { About };