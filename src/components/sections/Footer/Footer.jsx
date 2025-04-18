import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="flex items-center">
            <a href="https://www.instagram.com/buecher_abholservice?igsh=cDRkOHp5azNkMXJ0">
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/MehmetK.4125#_=_"
              aria-label="Facebook"
              target="_blank">
              <FacebookIcon />
            </a>
          </div>
        </div>
        <p className="text-center">
          © 2024 Gratisbücher Abholung. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
