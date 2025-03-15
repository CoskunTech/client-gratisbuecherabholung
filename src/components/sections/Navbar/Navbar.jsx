import React from "react";
import { HamburgerMenu, WhatsappButton } from "../../common";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-main-container">
      <div className="navbar-container">
        <div className="navbar-logo">BÜCHEREİ</div>
        <div className="hamburger-menu">
          <HamburgerMenu />
        </div>
        <div className="navbar-links">
          <a href="#home">Startseite</a>
          <a href="#funktioniert">So funktioniert es</a>
          <a href="#mission">Unsere Aufgabe</a>
          <a href="#fragen">Fragen?</a>
          <a href="#kontakt">Kontakt</a>
          <WhatsappButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
