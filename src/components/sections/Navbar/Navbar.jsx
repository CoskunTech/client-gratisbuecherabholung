import React from "react";
import { WhatsAppButton } from "../../comon";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2">
            <h1 className="text-xl font-bold">
              <span className="text-green-600">Gratis </span>
              <span className="text-gray-800">Bücher Abholung</span>
            </h1>
            <img
              src="./public/assets/logo.png"
              alt="Gratis Bücher Abholung"
              className="w-10 h-10"
            />
          </div>

          {/* Navigation Links */}
          <div className="items-center hidden space-x-4 lg:flex">
            <a
              href="#startseite"
              className="text-gray-800 transition-colors hover:text-green-600">
              Startseite
            </a>
            <a
              href="#hilfe"
              className="text-gray-800 transition-colors hover:text-green-600">
              So helfen wir Ihnen
            </a>
            <a
              href="#abholtermine"
              className="text-gray-800 transition-colors hover:text-green-600">
              Abholtermine
            </a>
            <a
              href="#ueberuns"
              className="text-gray-800 transition-colors hover:text-green-600">
              Über uns
            </a>
            <a
              href="#kontakt"
              className="text-gray-800 transition-colors hover:text-green-600">
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
