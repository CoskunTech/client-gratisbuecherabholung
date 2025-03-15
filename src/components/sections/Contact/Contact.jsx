import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Kontakt</h1>
      <div className="contact-info">
        <div className="contact-card">
          <img src="../../../../public/assets/Location.png" alt="Adresse" />
          <h3>Adresse</h3>
          <p>
            Im Niederholzboden 2<br />
            4125 Riehen - Basel
          </p>
        </div>
        <div className="contact-card">
          <img src="../../../../public/assets/Email.png" alt="E Mail Adresse" />
          <h3>E Mail Adresse</h3>
          <a href="mailto:buecher_abholservice@gmx.ch">
            buecher_abholservice@gmx.ch
          </a>
        </div>
        <div className="contact-card">
          <img src="../../../../public/assets/Phone.png" alt="Telefon" />
          <h3>Telefon</h3>
          <a href="tel:+41 767 201 353">+41 767 201 353</a>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2691.5849937019516!2d7.633563!3d47.575862537817336!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b75903709243%3A0x745a2877dc36d37e!2sIm%20Niederholzboden%202%2C%204125%20Riehen%2C%20%C4%B0svi%C3%A7re!5e0!3m2!1str!2str!4v1742039160940!5m2!1str!2str"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Contact;
