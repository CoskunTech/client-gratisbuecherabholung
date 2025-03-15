import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sosyal Medya Linkleri */}
        <div className="footer-section">
          <h5>Folgen Sie uns</h5>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Alanı */}
      <div className="footer-bottom">
        <p>© 2024 Firma Adı. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
};

export default Footer;
