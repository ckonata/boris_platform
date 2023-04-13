import React from "react";
import "../../styles/components/pages/About.css"

const HeroAbout = () =>{
const members = [
  {
    "id": 1,
    "name": "Joe Doe",
    "position": "CEO - Fundador de Boris",
    "imageDesc": "Joe Doe retrato - CEO BORIS",
    "image": "images/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg",
    "description": "Joe Doe es la mente detras de la creacion de BORIS como plataforma educativa. Joe es educador por mas de 20 años, con un Master en educacion superior."
   },
 {
  "id": 2,
  "name": "Doe Joe",
  "position": "CEO - Co-Fundador de Boris",
  "imageDesc": "Doe Joe retrato - CEO BORIS",
  "image": "images/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
  "description": "Doe Joe acompaño a Joe en la aventura de crear BORIS. Con experiencia en el campo de la educacion superior en universidades de gran prestigio, posee varias maestrias en metodologias de enseñanzas."
 },
 {
  "id": 3,
  "name": "Linda D",
  "position": "CTO",
  "imageDesc": "Linda - CTO Boris",
  "image": "images/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg",
  "description": "Linda D realizo una educacion en Economia y Finanzas, trabajando para grandes compañias internacionales y nacionales."
 },
];

 return(
  <div class="main__title main__traction">
       <h3>Nuestro equipo</h3>
       <div class="about">
        {members.map(member =>
          <div class="about__item" key={member.id}>
           <img src={member.image} alt={member.imageDesc}/>
           <h4>{member.name}</h4>
           <h5>{member.position}</h5>
           <p>{member.description}</p>
          </div>
         )
        }
       </div>
   </div>
 );
}

export { HeroAbout };
