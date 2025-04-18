import React from "react";

const Abholtermine = () => {
  return (
    <section id="abholtermine" className="container mx-auto px-4">
      <h1 className="text-center text-3xl lg:text-5xl font-bold text-gray-800 my-4">
        Abholtermine
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { tag: "Montag", ort: "Aargau · Solothurn" },
          { tag: "Dienstag", ort: "Basel und Baselland" },
          { tag: "Mittwoch", ort: "Zürich" },
          { tag: "Donnerstag", ort: "Zürich" },
          { tag: "Freitag", ort: "Basel und Baselland" },
        ].map((termin, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {termin.tag}
            </h3>
            <p className="text-gray-500">{termin.ort}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Abholtermine;
