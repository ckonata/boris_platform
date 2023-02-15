import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";

const CourseItem = (props) =>{
 return(
  <div class="box">
      <h4>{props.title}</h4>
      <div class="box__link">
          <a class="link" href={props.link}>Saber mas 
           <IonIcon icon={arrowForwardOutline} className="icon"/>
          </a>
      </div>
  </div>
 );
}

export { CourseItem };
