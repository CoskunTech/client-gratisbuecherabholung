import React from "react";

const Kontakt = () => {
  return (
    <section id="kontakt" className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 mb-6 md:my-4">
        Kontakt
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-4 border-l-4 border-green-500 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={"./assets/Phone.png"}
            alt="phone"
            className="w-12 h-12 mb-3"
          />
          <h2 className="text-xl font-bold text-green-600 mb-2">Telefon</h2>
          <a
            href="tel:+41791234567"
            className="text-gray-700 hover:text-gray-900 hover:underline">
            +41 79 123 45 67
          </a>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 md:p-4 border-l-4 border-green-500 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={"./assets/Email.png"}
            alt="email"
            className="w-12 h-12 mb-3"
          />
          <h2 className="text-xl font-bold text-green-600 mb-2">Email</h2>
          <a
            href="mailto:buecher_abholservice@gmx.ch"
            className="text-gray-700 hover:text-gray-900 hover:underline">
            buecher_abholservice@gmx.ch
          </a>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 md:p-4 border-l-4 border-green-500 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={"./assets/Location.png"}
            alt="location"
            className="w-12 h-12 mb-3"
          />
          <h2 className="text-xl font-bold text-green-600 mb-2">Ort</h2>
          <a
            href="https://maps.google.com/?q=Im+Niederholzboden+2+4125+Riehen+Basel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 hover:underline">
            Im Niederholzboden 2 4125 Riehen - Basel
          </a>
        </div>
      </div>
    </section>
  );
};

export default Kontakt;
