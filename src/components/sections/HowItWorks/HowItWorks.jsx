import React from "react";
import Card from "../../common/Card/Card";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div id="funktioniert" className="hiw-container">
      <h1>Wie Wir helfen ?</h1>
      <div className="hiw-card-container">
        <p>
          In drei einfachen Schritten kannst du deine alten Bücher weitergeben:{" "}
          <br />
          <span className="green-text">
            Melde dich bei uns, vereinbare einen Termin und unser Team holt sie
            ab!
          </span>
        </p>
        <Card
          imageSrc={"../../../../public/assets/Ablauf-1.png"}
          text="Schreib uns!"
        />
        <Card
          imageSrc={"../../../../public/assets/Ablauf-2.png"}
          text="Buche deinen Termin!"
        />
        <Card
          imageSrc={"../../../../public/assets/Ablauf-3.png"}
          text="Wir holen es ab!"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
