import React from "react";
import Card from "../../common/Card/Card";
import "./HowItWorks.css";
import Ablauf1 from "../../../../public/assets/Ablauf-1.png";
import Ablauf2 from "../../../../public/assets/Ablauf-2.png";
import Ablauf3 from "../../../../public/assets/Ablauf-3.png";

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
        <Card imageSrc={Ablauf1} text="Schreib uns!" />
        <Card imageSrc={Ablauf3} text="Buche deinen Termin!" />
        <Card imageSrc={Ablauf2} text="Wir holen es ab!" />
      </div>
    </div>
  );
};

export default HowItWorks;
