import React from "react";
import { WhatsappButton } from "../../common";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="heto-text-container">
        <h1>
          Deine alten <br />
          Bücher verdienen <br />
          <span className="green-text">eine zweite Chance</span>
        </h1>
        <p>
          Wir holen deine alten Bücher kostenlos ab und sorgen dafür, dass sie
          weiterverwendet werden.
        </p>
        <WhatsappButton />
      </div>
      <div className="hero-img-container">
        <img
          src="/public/assets/Hero.png"
          alt="Frau packt Bücher in einen Karton."
        />
      </div>
    </div>
  );
};

export default Hero;
