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
            <a
              href="https://www.facebook.com/MehmetK.4125#_=_"
              aria-label="Facebook"
              target="_blank">
              <FacebookIcon />
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
