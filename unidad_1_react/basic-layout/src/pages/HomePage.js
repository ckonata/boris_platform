import React from "react";
import "../styles/components/pages/HomePage.css"
import { Hero } from "../components/HomePage/Hero"
import { Main } from "../components/HomePage/Main"

const HomePage = () => {
 return(
      <>
       <Hero 
        title="Aprende a liderar cualquier situación"
        subtitle="Boris es la unica plataforma que te permite acceder a cursos de liderazgo creados por líderes de empresas exitosas"
       />
       <Main />
        
      </>
 );
}

export { HomePage };