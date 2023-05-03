import React from "react";
import { CourseItem } from "./CourseItem";

const CoursesOverview = () =>{
 const cursos = [
  {
   "id": 1,
   "title": "Liderazgo de equipos remotos",
   "link": "courses.html#equipo_remoto"
  },
  {
   "id": 2,
   "title": "El arte de comunicarse efectivamente",
   "link": "courses.html#comunicacion_efectiva"
  },
  {
   "id": 3,
   "title": "Liderazgo e inteligencia emocional",
   "link": "courses.html#inteligencia_emocional"
  },
  {
   "id": 4,
   "title": "Negociacion efectiva a distancia",
   "link": "courses.html#negociacion"
  }];

 return(
  <div className="courses__container">
   {cursos.map(curso => 
    <CourseItem 
     key={curso.id}
     title={curso.title}
     link={curso.link}
    />)
    }
  </div>
 );
}

export { CoursesOverview };
