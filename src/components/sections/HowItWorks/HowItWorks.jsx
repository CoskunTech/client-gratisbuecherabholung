import React from "react";
import Card from "../../common/Card/Card";
import "./HowItWorks.css";
import Ablauf1 from "../../../../public/assets/Ablauf-1.png";
import Ablauf2 from "../../../../public/assets/Ablauf-2.png";
import Ablauf3 from "../../../../public/assets/Ablauf-3.png";

const HowItWorks = () => {
  return (
    <div id="funktioniert" className="hiw-container">
      <h1>So helfen wir Ihnen</h1>
      <div className="hiw-card-container">
        <p>
          In drei einfachen Schritten können Sie Ihre alten Bücher weitergeben:
          <br />
          <span className="green-text">
            Kontaktieren Sie uns, vereinbaren Sie einen Termin, und unser Team
            holt die Bücher bei Ihnen ab!
          </span>
        </p>
        <Card imageSrc={Ablauf1} text="Schreiben Sie uns!" />
        <Card imageSrc={Ablauf2} text="Bücher am Abholtag bereitstellen!" />
        <Card imageSrc={Ablauf3} text="Wir holen Ihre Bücher kostenlos ab!" />
      </div>

      <h2>Abholtermine</h2>
      <table className="hiw-table">
        <thead>
          <tr>
            <th>Montag</th>
            <th>Dienstag</th>
            <th>Mittwoch</th>
            <th>Donnerstag</th>
            <th>Freitag</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aargau - Solothurn</td>
            <td>Basel und Baselland</td>
            <td>Zürich</td>
            <td>Zürich</td>
            <td>Basel und Baselland</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HowItWorks;
