import React from "react";

const Kontakt = () => {
  return (
    <section id="kontakt" className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-2xl font-bold text-center text-gray-800 md:text-3xl lg:text-5xl md:my-4">
        Kontakt
      </h1>
      <div className="grid grid-cols-1 gap-6 mx-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
        <div className="flex flex-col items-center p-6 text-center bg-white border-l-4 border-r-4 border-green-500 shadow-md rounded-xl md:p-4 md:items-start md:text-left">
          <img
            src={"./assets/Phone.png"}
            alt="phone"
            className="w-12 h-12 mb-3"
          />
          <h2 className="mb-2 text-xl font-bold text-green-600">Telefon</h2>
          <a
            href="tel:+41 76 720 13 53"
            className="text-gray-700 hover:text-gray-900 hover:underline">
            +41 76 720 13 53
          </a>
        </div>
        <div className="flex flex-col items-center p-6 text-center bg-white border-l-4 border-r-4 border-green-500 shadow-md rounded-xl md:p-4 md:items-start md:text-left">
          <img
            src={"./assets/Email.png"}
            alt="email"
            className="w-12 h-12 mb-3"
          />
          <h2 className="mb-2 text-xl font-bold text-green-600">Email</h2>
          <a
            href="mailto:buecher_abholservice@gmx.ch"
            className="text-gray-700 hover:text-gray-900 hover:underline">
            buecher_abholservice@gmx.ch
          </a>
        </div>
        <div className="flex flex-col items-center p-6 text-center bg-white border-l-4 border-r-4 border-green-500 shadow-md rounded-xl md:p-4 md:items-start md:text-left">
          <img
            src={"./assets/Location.png"}
            alt="location"
            className="w-12 h-12 mb-3"
          />
          <h2 className="mb-2 text-xl font-bold text-green-600">Ort</h2>
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
