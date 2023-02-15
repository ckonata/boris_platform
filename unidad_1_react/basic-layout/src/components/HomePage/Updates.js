import React from "react";
import { UpdateItem } from "./UpdateItem";

const Updates = (props) =>{
 return(
  <div className="updates">
   <div className="main__title">
       <h3>Novedades</h3>
   </div>
   <div className="updates__container">
    <UpdateItem 
     image="images/alfred-aloushy-Ow-joAY8NyY-unsplash.jpg"
     imageDesc="Hombre solo en la montaña"
     title="Trabajo en equipo"
     link="courses.html#equipo_trabajo"
    />
    <UpdateItem 
     image="images/jason-goodman-Oalh2MojUuk-unsplash.jpg"
     imageDesc="Equipo trabajando"
     title="Como ser un buen jefe"
     link="courses.html#buen_jefe"
    />
    <UpdateItem 
     image="images/markus-spiske-QozzJpFZ2lg-unsplash.jpg"
     imageDesc="Liderazgo"
     title="Como ser efectivos: Automotivacion para alcanzar objetivos"
     link="courses.html#automotivacion"
    />
   </div>
</div>
 );
}

export { Updates };
