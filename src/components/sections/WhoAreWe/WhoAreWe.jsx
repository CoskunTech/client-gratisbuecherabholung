import React from "react";
import "./WhoAreWe.css";
import { WhatsappButton } from "../../common";

const WhoAreWe = () => {
  return (
    <div className="waw-container">
      <div className="waw-intro">
        <h1>Hallo, ich bin Kamil </h1>
        <div className="waw-content">
          <div className="waw-image-placeholder">
            <img src="" alt="yok" />
          </div>
          <div className="waw-text">
            <div className="green-text">Wer sind wir?</div>
            <p>
              Wir sind ein Familienunternehmen, das gebrauchte Bücher kostenlos
              abholt und ihnen eine zweite Chance gibt. So bringen wir Bücher
              zurück in den Kreislauf und sichern unseren Lebensunterhalt.
            </p>
            <div className="green-text">
              Haben Sie Bücher, die Sie nicht mehr benötigen?"
            </div>
            <p>
              Statt sie wegzuwerfen, können Sie sie uns einfach geben! Wir
              sorgen dafür, dass sie einen neuen Besitzer finden.
            </p>
            <div className="green-text">Warum tun wir das?</div>
            <p>
              Jedes Buch verdient einen neuen Leser. Anstatt sie wegzuwerfen,
              führen wir sie zurück in den Kreislauf!
            </p>
          </div>
        </div>
      </div>

      <div className="waw-text2">
        <div className="waw-benefits">
          <div className="green-text gt-extra">Ihre Vorteile:</div>
          <ul>
            <li>Keine Mühe – wir holen die Bücher direkt ab!</li>
            <li>Nachhaltig & sinnvoll – Bücher bekommen eine zweite Chance.</li>
            <li>Mehr Platz für Sie zu Hause!</li>
          </ul>
        </div>
        <WhatsappButton />
      </div>
    </div>
  );
};

export default WhoAreWe;
