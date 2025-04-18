import React from "react";

const Abholtermine = () => {
  return (
    <section id="abholtermine" className="container px-4 mx-auto">
      <h1 className="my-4 text-3xl font-bold text-center text-gray-800 lg:text-5xl">
        Abholtermine
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { tag: "Montag", ort: "Aargau · Solothurn" },
          { tag: "Dienstag", ort: "Basel und Baselland" },
          { tag: "Mittwoch", ort: "Zürich" },
          { tag: "Donnerstag", ort: "Zürich" },
          { tag: "Freitag", ort: "Basel und Baselland" },
        ].map((termin, index) => (
          <div
            key={index}
            className="p-4 mx-4 bg-white border-l-4 border-r-4 border-green-500 shadow-lg rounded-xl ">
            <h3 className="mb-2 text-xl font-semibold text-gray-700">
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
