import React from "react";
import "./Card.css";

const Card = ({ imageSrc, text }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={text} className="image" />
      <p className="text">{text}</p>
    </div>
  );
};

export default Card;
