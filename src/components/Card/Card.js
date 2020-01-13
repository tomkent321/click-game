import React from "react";
import "./Card.css";


const Card = props => (
 
  <div >
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.movePlanes(props.id)} className='responsive' />
  </div>
);

export default Card;