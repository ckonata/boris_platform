import React from "react";

const UpdateItem = (props) =>{
 return(
  <div className="updates__item">
      <img src={props.image} alt={props.imageDesc} />
      <h5>{props.title}</h5>
      <a className="updates__button" href={props.link}>
          Lee mas
      </a>
  </div>
 );
}

export { UpdateItem };
