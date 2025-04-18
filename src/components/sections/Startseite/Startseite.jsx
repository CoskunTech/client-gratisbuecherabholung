import React from "react";
import { WhatsAppButton } from "../../ui";

const Startseite = () => {
  return (
    <section id="startseite" className="container-fluid bg-[#F1F2F4]">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center lg:flex-row">
        <div className="flex flex-col items-center lg:items-end justify-center ">
          <h1 className="text-center lg:text-right text-3xl lg:text-5xl text-gray-800 font-bold my-4">
            Wir holen <span className="text-green-600">GRATIS</span> Bücher,
            CDs, DVDs und Schallplatten ab.
          </h1>
          <h2 className="text-center lg:text-right text-xl lg:text-3xl font-bold text-gray-800 my-4">
            Möchten Sie Ihre alten Bücher weitergeben? Ziehen Sie um oder
            brauchen Platz im Regal? Wir holen sie
            <span className="text-green-600"> GRATIS</span> ab!
          </h2>
          <div className="flex justify-center my-4">
            <WhatsAppButton />
          </div>
        </div>
        <div>
          <img src={"./assets/Hero.png"} alt="book" />
        </div>
      </div>
    </section>
  );
};

export default Startseite;
