import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-4">
            <a
              href="https://www.instagram.com/buecher_abholservice?igsh=cDRkOHp5azNkMXJ0"
              className="text-white transition-colors duration-300 hover:text-gray-300"
              aria-label="Instagram"
              target="_blank">
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="https://www.facebook.com/MehmetK.4125#_=_"
              className="text-white transition-colors duration-300 hover:text-gray-300"
              aria-label="Facebook"
              target="_blank">
              <FacebookIcon fontSize="large" />
            </a>
          </div>
        </div>
        <p className="text-sm text-center text-gray-300">
          © 2025 Gratisbücher Abholung. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
