import React from "react";

const Hero = (props) =>{
 return(
  <div className="hero">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <ion-icon className="hero__arrow animate__animated animate__bounce" name="arrow-down-outline"></ion-icon>
  </div>
 );
}

export { Hero };
