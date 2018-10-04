import React from "react";
import "./Score.css";



const Score = props => (
  <div className="gameScore">
    <h3 className="score">Planes Picked : {props.total}    ...  {8 - props.total} left to go </h3>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Score;