import React from "react";
import { CourseItem } from "./CourseItem";

const CoursesOverview = () =>{
 return(
  <div className="courses__container">
   <CourseItem 
    title="Liderazgo de equipos remotos"
    link="courses.html#equipo_remoto"
   />
   <CourseItem 
    title="El arte de comunicarse efectivamente"
    link="courses.html#comunicacion_efectiva"
   />
   <CourseItem 
    title="Liderazgo e inteligencia emocional"
    link="courses.html#inteligencia_emocional"
   />
   <CourseItem 
    title="Negociacion efectiva a distancia"
    link="courses.html#negociacion"
   />
  </div>
 );
}

export { CoursesOverview };
