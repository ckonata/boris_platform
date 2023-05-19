import React from "react";
import "../../styles/components/pages/About.css"

const Traction = () =>{
const data = [
 {
  "id": 1,
  "amount": "500+",
  "item": "Titulos en la coleccion"
 },
 {
  "id": 2,
  "amount": "60K+",
  "item": "Suscriptores"
 },
 {
  "id": 3,
  "amount": "80+",
  "item": "Profesionales y masterminds"
 }
];

 return(
  <div className="main__title main__traction">
       <h3>Nuestra traccion</h3>
       <div className="traction">
        {data.map(d => 
         <div className="traction__item" key={d.id}>
          <p>{d.amount}</p>
          <p class="item-text">{d.item}</p>
         </div>
         )
        }
       </div>
   </div>
 );
}

export { Traction };
