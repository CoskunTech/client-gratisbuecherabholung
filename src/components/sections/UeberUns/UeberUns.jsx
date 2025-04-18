import React from "react";
import { WhatsAppButton } from "../../ui";

const UeberUns = () => {
  return (
    <section id="ueber-uns" className="bg-[#F1F2F4] py-8 md:py-12">
      <div className="container mx-auto px-4 bg-[#F1F2F4]">
        <h1 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 mb-6 md:mb-8">
          Hallo, ich bin Kamil
        </h1>
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden mb-6 md:mb-10">
          <img
            src={"./assets/family_photo.jpg"}
            alt="family_photo"
            className="w-full h-full object-cover rounded-lg"
            style={{
              transform: "scale(1.2) translateY(-5%)",
              objectPosition: "0% 30%",
              "@media (min-width: 768px)": {
                transform: "scale(1.5)",
              },
            }}
          />
        </div>
        <div className="space-y-4 md:space-y-6">
          <p className="text-base md:text-lg">
            Ich und mein Sohn betreiben gemeinsam diesen Service mit Herz und
            Engagement. Was als kleine Idee begann, ist heute unsere
            Leidenschaft – und auch unsere Lebensgrundlage: Wir retten Bücher,
            geben ihnen ein neues Zuhause und sichern damit unseren
            Lebensunterhalt.
          </p>

          <div className="mb-6 md:mb-8">
            <h6 className="text-xl md:text-2xl font-bold text-green-600 mb-2 md:mb-3">
              Haben Sie Bücher, die Sie nicht mehr benötigen?
            </h6>
            <p className="text-base md:text-lg">
              Statt sie wegzuwerfen, können Sie sie uns einfach geben! Wir
              sorgen dafür, dass sie einen neuen Besitzer finden.
            </p>
          </div>

          <div className="mb-6 md:mb-8">
            <h6 className="text-xl md:text-2xl font-bold text-green-600 mb-2 md:mb-3">
              Warum tun wir das?
            </h6>
            <p className="text-base md:text-lg">
              Jedes Buch verdient einen neuen Leser. Anstatt sie wegzuwerfen,
              führen wir sie zurück in den Kreislauf!
            </p>
          </div>

          <div className="mb-8 md:mb-10">
            <h6 className="text-xl md:text-2xl font-bold text-green-600 mb-2 md:mb-3">
              Ihre Vorteile:
            </h6>
            <p className="text-base md:text-lg">
              Keine Mühe – wir holen die Bücher direkt ab! <br />
              Nachhaltig & sinnvoll – Bücher bekommen eine zweite Chance. <br />
              Mehr Platz für Sie zu Hause!
            </p>
          </div>

          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
};

export default UeberUns;
