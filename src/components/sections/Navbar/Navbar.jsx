import React from "react";
import { WhatsAppButton } from "../../UI";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold">
              <span className="text-green-600">Gratis </span>
              <span className="text-gray-800">Bücher Abholung</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#startseite"
              className="text-gray-800 hover:text-green-600 transition-colors">
              Startseite
            </a>
            <a
              href="#hilfe"
              className="text-gray-800 hover:text-green-600 transition-colors">
              So helfen wir Ihnen
            </a>
            <a
              href="#abholtermine"
              className="text-gray-800 hover:text-green-600 transition-colors">
              Abholtermine
            </a>
            <a
              href="#ueberuns"
              className="text-gray-800 hover:text-green-600 transition-colors">
              Über uns
            </a>
            <a
              href="#kontakt"
              className="text-gray-800 hover:text-green-600 transition-colors">
              Kontakt
            </a>
            <WhatsAppButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
