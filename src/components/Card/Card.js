import React from "react";
import "./Card.css";


const Card = props => (
  <div className="card img-container">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.movePlanes(props.id)} className='shuffleScore'/>
  </div>
);

export default Card;