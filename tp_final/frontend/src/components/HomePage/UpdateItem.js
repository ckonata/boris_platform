import React from "react";

const UpdateItem = ({title, image, imageDesc, link}) =>{
 return(
  <div className="updates__item">
      <img src={image} alt={imageDesc} />
      <h5>{title}</h5>
      <a className="updates__button" href={link}>
          Lee mas
      </a>
  </div>
 );
}

export { UpdateItem };
