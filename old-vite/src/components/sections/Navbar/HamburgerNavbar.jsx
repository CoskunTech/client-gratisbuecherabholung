import React, { useState, useEffect, useRef } from "react";

const HamburgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Menü dışına tıklandığında kapanma işlevi
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Hamburger butonuna tıklandığında işlemi buttonRef.current.onClick'e bırak
      if (buttonRef.current && buttonRef.current.contains(event.target)) {
        return;
      }

      // Menü dışına tıklandığında kapat
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Menüyü aç/kapat
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Overlay - menü açıkken tıklanabilir yapar */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-40 lg:hidden">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">
            <span className="text-green-600">Gratis </span>
            <span className="text-gray-800">Bücher Abholung</span>
          </h1>

          {/* Hamburger butonu */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-10 h-10 bg-white rounded-lg  z-50">
            <span
              className={`h-0.5 w-6 bg-black rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-black rounded-full transition-all duration-300 my-1 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-black rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Aşağıya doğru açılan menü */}
        <div
          ref={menuRef}
          className={`bg-white shadow-lg transform transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}>
          <div className="container mx-auto px-4 py-4 relative flex flex-col items-center text-center">
            <div className="">
              <a
                href="#startseite"
                className="block py-2 text-lg text-gray-800 hover:text-green-600 hover:underline ">
                Startseite
              </a>
              <a
                href="#so-helfen-wir-ihnen"
                className="block py-2 text-lg text-gray-800 hover:text-green-600 hover:underline ">
                So helfen wir Ihnen
              </a>
              <a
                href="#abholtermine"
                className="block py-2 text-lg text-gray-800 hover:text-green-600 hover:underline ">
                Abholtermine
              </a>
              <a
                href="#ueber-uns"
                className="block py-2 text-lg text-gray-800 hover:text-green-600 hover:underline ">
                Über uns
              </a>
              <a
                href="#kontakt"
                className="block py-2 text-lg text-gray-800 hover:text-green-600 hover:underline">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HamburgerNavbar;
