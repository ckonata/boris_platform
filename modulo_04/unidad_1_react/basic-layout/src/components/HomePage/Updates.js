import React from "react";
import { UpdateItem } from "./UpdateItem";

const Updates = (props) =>{
    const updates = [
        {   
            "id": 1,
            "title": "Trabajo en equipo",
            "link": "courses.html#equipo_trabajo",
            "image": "images/alfred-aloushy-Ow-joAY8NyY-unsplash.jpg",
            "imageDesc": "Hombre solo en la montaña"
        },
        {   
            "id": 2,
            "title": "Como ser efectivos: Automotivacion para alcanzar objetivos",
            "link": "courses.html#automotivacion",
            "image": "images/markus-spiske-QozzJpFZ2lg-unsplash.jpg",
            "imageDesc": "Liderazgo"
        },
        {   
            "id": 3,
            "title": "Como ser un buen jefe",
            "link": "courses.html#buen_jefe",
            "image": "images/jason-goodman-Oalh2MojUuk-unsplash.jpg",
            "imageDesc": "Equipo trabajando"
        }
    ];

 return(
  <div className="updates">
   <div className="main__title">
       <h3>Novedades</h3>
   </div>
   <div className="updates__container">
    {updates.map(update => 
        <UpdateItem 
        key= {update.id}
        image={update.image}
        imageDesc={update.imageDesc}
        title={update.title}
        link={update.link}
       />
    )}
    
   </div>
</div>
 );
}

export { Updates };
