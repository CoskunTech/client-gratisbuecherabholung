import React from "react";
import { WhatsAppButton } from "../../comon";

const Startseite = () => {
  return (
    <section id="startseite" className="container-fluid bg-[#F1F2F4]  !pb-0">
      <div className="container flex flex-col items-center justify-center mx-auto mt-10 lg:flex-row">
        <div className="flex flex-col items-center justify-center lg:items-end ">
          <h1 className="text-3xl font-bold text-center text-gray-800 lg:text-right lg:text-5xl">
            Wir holen <span className="text-green-600">GRATIS</span> Bücher,
            CDs, DVDs und Schallplatten ab.
          </h1>
          <h2 className="my-4 text-xl font-bold text-center text-gray-800 lg:text-right lg:text-3xl">
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
