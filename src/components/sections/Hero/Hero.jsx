import React from "react";
import { WhatsappButton } from "../../common";
import heroImage from "../../../../public/assets/Hero.png";

import "./Hero.css";

const Hero = () => {
  return (
    <div id="home" className="hero-container">
      <div className="heto-text-container">
        <h1>
          Wir holen
          <span className="green-text">GRATIS</span> Bücher,
          <br />
          CDs, DVDs und Schallplatten ab.
        </h1>
        <p>
          Möchten Sie Ihre alten Bücher weitergeben? Ziehen Sie um oder brauchen
          Platz im Regal? Wir holen sie{" "}
          <span className="green-text">GRATIS</span> ab!
        </p>
        <WhatsappButton />
      </div>
      <div className="hero-img-container">
        <img src={heroImage} alt="Frau packt Bücher in einen Karton." />
      </div>
    </div>
  );
};

export default Hero;
