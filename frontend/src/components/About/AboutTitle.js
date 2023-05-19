import React from "react";
import { IonIcon } from "@ionic/react";
import { logoGithub,  logoGitlab, logoPaypal, logoStackoverflow, logoReddit} from "ionicons/icons";
import "../../styles/components/pages/About.css"

const AboutTitle = () =>{
 const companies = [logoGithub,logoGitlab, logoPaypal, logoStackoverflow, logoReddit];

 return(
  <div className="main__title about">
       <div>
           <h3>Quienes somos</h3>
           <p>Somos una compañia de educadores que buscan que los grandes maestros y profesionales de distintas areas planmen sus conocimientos y experiencias en libros interactivos, para que tengan alcance a cualquier persona que desee crecer personalmente.</p>
       </div>
       <div className="main__title--us">
           <h5>Se capacitan con nosotros:</h5>
           <div className="companies">
               <div className="companies__first">
                {companies
                 .slice(0,3)
                 .map(logoName => 
                  <IonIcon icon={logoName} className="icon"/>
                 )}
               </div>
               <div className="companies__second">
               {companies
                 .slice(3)
                 .map(logoName => 
                  <IonIcon icon={logoName} className="icon"/>
                 )}
               </div>
           </div>
       </div>
   </div>
 );
}

export { AboutTitle };
