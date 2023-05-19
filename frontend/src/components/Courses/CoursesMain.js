import React from "react";
import "../../styles/components/pages/HomePage.css"

const CoursesMain = ({name, description, image, imageDescription}) =>{
 console.log("image", image)
 return(
  <div className="box__course" id="equipo_remoto">
      <div className="box__course_item">
          <h4>{name}</h4>
          <p>{description}</p>
          <a className="link" href="platform.html">Ir a la plataforma
              <ion-icon className="icon" name="arrow-forward-outline"></ion-icon>
          </a>
      </div>
      <div className="box__course_img">
          <img src={image} alt={imageDescription} />
      </div>
  </div>
 );
}

export { CoursesMain };
