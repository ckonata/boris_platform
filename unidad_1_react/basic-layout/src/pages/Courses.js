import React from "react";
import "../styles/components/pages/HomePage.css"
import { CoursesMain } from "../components/Courses/CoursesMain"
import { Hero } from "../components/HomePage/Hero"


const Courses = () => {
 return(
      <>
       <Hero 
        title="Entrenate para ser un ejemplo a seguir"
        subtitle="Todo lo que necesitas para convertirte en un verdadero lider"
       />
       <CoursesMain />
      </>
 );
}

export { Courses };