import React from "react";
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";

const CourseItem = (props) =>{
 return(
  <div className="box">
      <h4>{props.title}</h4>
      <div className="box__link">
          <a className="link" href={props.link}>Saber mas 
           <IonIcon icon={arrowForwardOutline} className="icon"/>
          </a>
      </div>
  </div>
 );
}

export { CourseItem };
