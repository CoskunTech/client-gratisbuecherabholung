import React from "react";

const SoHelfenWirIhnen = () => {
  return (
    <section id="so-helfen-wir-ihnen">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl lg:text-5xl font-bold text-gray-800 my-4">
          So helfen wir Ihnen
        </h1>
        <div className="">
          <p className="text-center text-xl lg:text-2xl font-bold text-gray-800 my-4">
            In drei einfachen Schritten können Sie Ihre alten Bücher
            weitergeben:
            <br />
            <span className="text-green-600">
              Kontaktieren Sie uns, vereinbaren Sie einen Termin, und unser Team
              holt die Bücher bei Ihnen ab!
            </span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            <div className="bg-[#F1F2F4] rounded-lg shadow-lg p-6 transition-transform hover:scale-105 h-64">
              <div className="flex flex-col items-center h-full justify-between">
                <img
                  src={"./assets/Ablauf-1.png"}
                  alt="Ablauf1"
                  className="object-contain mb-4 h-32"
                />
                <p className="text-lg font-semibold text-gray-700">
                  Schreiben Sie uns!
                </p>
              </div>
            </div>
            <div className="bg-[#F1F2F4] rounded-lg shadow-lg p-6 transition-transform hover:scale-105 h-64">
              <div className="flex flex-col items-center h-full justify-between">
                <img
                  src={"./assets/Ablauf-2.png"}
                  alt="Ablauf2"
                  className="object-contain mb-4 h-32"
                />
                <p className="text-lg font-semibold text-gray-700">
                  Bücher am Abholtag bereitstellen!
                </p>
              </div>
            </div>
            <div className="bg-[#F1F2F4] rounded-lg shadow-lg p-6 transition-transform hover:scale-105 h-64">
              <div className="flex flex-col items-center h-full justify-between">
                <img
                  src={"./assets/Ablauf-3.png"}
                  alt="Ablauf3"
                  className="object-contain mb-4 h-32"
                />
                <p className="text-lg font-semibold text-gray-700">
                  Wir holen Ihre Bücher kostenlos ab!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoHelfenWirIhnen;
