import React from "react";
import "../../styles/components/pages/HomePage.css"

const CourseBox = (props) =>{
 return(
  <div class="box__course" id="equipo_remoto">
        <div class="box__course_item">
            <h4>{props.title}</h4>
            <p>{props.info}</p>
            <a class="link" href="platform.html">Ir a la plataforma
                <ion-icon class="icon" name="arrow-forward-outline"></ion-icon>
            </a>
        </div>
        <div class="box__course_img">
            <img src={props.image} alt={props.imageDesc} />
        </div>
    </div>
 );
}

export { CourseBox };
