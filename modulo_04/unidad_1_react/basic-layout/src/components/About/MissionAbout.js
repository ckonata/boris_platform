import React from "react";
import "../../styles/components/pages/About.css"
import { IonIcon } from "@ionic/react";
import { logoSteam,  chevronForwardCircleOutline, flashOutline, unlinkOutline } from "ionicons/icons";

const MissionAbout = () =>{
const data = [
 {
  "id": 1,
  "title": "Trabajo en equipo",
  "info": "Creemos en la colaboracion y compartir con todos los miembros de la comunidad.",
  "icon": logoSteam
 },
 {
  "id": 2,
  "title": "Proactividad como motor",
  "info": "Sabemos que una actitud proactiva mueve montañas.",
  "icon": chevronForwardCircleOutline
 },
 {
  "id": 3,
  "title": "Apostamos en vos",
  "info": "No nos intimida la incertidumbre y siempre apostamos a dar lo mejor.",
  "icon": flashOutline
 },
 {
  "id": 4,
  "title": "Sabemos como hacerlo",
  "info": "Decadas de experiencia en metodologia de enseñanza nos avalan.",
  "icon": unlinkOutline
 },
];

 return(
  <div class="main__title main__traction">
       <h3>Nuestros valores</h3>
       <div class="values" id="value">
        {data.map(d =>
        <div class="values__item">
            <IonIcon icon={d.icon} className="icon values__icon" />
            <h4>{d.title}</h4>
            <p>{d.info}</p>
        </div>
          )
         }
       </div>
   </div>

 );
}

export { MissionAbout };
