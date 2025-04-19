import React from "react";

const SoHelfenWirIhnen = () => {
  return (
    <section id="so-helfen-wir-ihnen">
      <div className="container px-4 mx-auto">
        <h1 className="my-4 text-3xl font-bold text-center text-gray-800 lg:text-5xl">
          So helfen wir Ihnen
        </h1>
        <div className="">
          <p className="my-4 text-xl font-bold text-center text-gray-800 lg:text-2xl">
            In drei einfachen Schritten können Sie Ihre alten Bücher
            weitergeben:
            <br />
            <span className="text-green-600">
              Kontaktieren Sie uns, vereinbaren Sie einen Termin, und unser Team
              holt die Bücher bei Ihnen ab!
            </span>
          </p>
          <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto mt-12 md:grid-cols-3">
            <div className="bg-[#F1F2F4] rounded-lg shadow-lg p-6 transition-transform hover:scale-105 h-64">
              <div className="flex flex-col items-center justify-between h-full">
                <img
                  src={"./assets/Ablauf-1.png"}
                  alt="Ablauf1"
                  className="object-contain h-32 mb-4"
                />
                <p className="text-lg font-semibold text-gray-700">
                  Schreiben Sie uns!
                </p>
              </div>
            </div>
            <div className="bg-[#F1F2F4] rounded-lg shadow-lg p-6 transition-transform hover:scale-105 h-64">
              <div className="flex flex-col items-center justify-between h-full">
                <img
                  src={"./assets/Ablauf-2.png"}
                  alt="Ablauf2"
                  className="object-contain h-32 mb-4"
                />
                <p className="text-lg font-semibold text-gray-700">
                  Bücher am Abholtag bereitstellen!
                </p>
              </div>
            </div>
            <div className="bg-[#F1F2F4] rounded-lg shadow-lg p-6 transition-transform hover:scale-105 h-64">
              <div className="flex flex-col items-center justify-between h-full">
                <img
                  src={"./assets/Ablauf-3.png"}
                  alt="Ablauf3"
                  className="object-contain h-32 mb-4"
                />
                <p className="text-lg font-semibold text-gray-700">
                  Wir holen Ihre Bücher{" "}
                  <span className="text-green-600">gratis</span> ab!
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
