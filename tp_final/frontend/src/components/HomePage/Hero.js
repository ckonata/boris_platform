import React from "react";

const Hero = ({title, subtitle}) =>{
 return(
  <div className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <ion-icon className="hero__arrow animate__animated animate__bounce" name="arrow-down-outline"></ion-icon>
  </div>
 );
}

export { Hero };
