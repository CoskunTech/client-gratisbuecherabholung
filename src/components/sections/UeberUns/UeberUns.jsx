import React from "react";
import { WhatsAppButton } from "../../comon";

const UeberUns = () => {
  return (
    <section id="ueber-uns" className="bg-[#F1F2F4] py-8 md:py-12 ">
      <div className="container mx-auto px-4 bg-[#F1F2F4]">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800 md:text-3xl lg:text-5xl md:mb-8">
          Hallo, ich bin Kamil
        </h1>
        <p className="text-base md:text-lg md:text-center md:mb-8">
          Ich und mein Sohn betreiben gemeinsam diesen Service mit Herz und
          Engagement. Was als kleine Idee begann, ist heute unsere Leidenschaft
          – und auch unsere Lebensgrundlage: Wir retten Bücher, geben ihnen ein
          neues Zuhause und sichern damit unseren Lebensunterhalt.
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="w-full h-64 overflow-hidden rounded-lg md:w-1/2 md:h-125">
            <img
              src={"/assets/family_photo.jpg"}
              alt="family_photo"
              className="object-cover w-full h-full rounded-lg scale-[1.8] lg:scale-[1] translate-y-[-5%] md:translate-y-0 object-[0%30%] md:object-[0%40%]"
            />
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="mb-6 md:mb-8">
              <h6 className="mb-2 text-xl font-bold text-green-600 md:text-2xl md:mb-3">
                Haben Sie Bücher, die Sie nicht mehr benötigen?
              </h6>
              <p className="text-base md:text-lg">
                Statt sie wegzuwerfen, können Sie sie uns einfach geben! Wir
                sorgen dafür, dass sie einen neuen Besitzer finden.
              </p>
            </div>

            <div className="mb-6 md:mb-8">
              <h6 className="mb-2 text-xl font-bold text-green-600 md:text-2xl md:mb-3">
                Warum tun wir das?
              </h6>
              <p className="text-base md:text-lg">
                Jedes Buch verdient einen neuen Leser. Anstatt sie wegzuwerfen,
                führen wir sie zurück in den Kreislauf!
              </p>
            </div>

            <div className="mb-8 md:mb-10">
              <h6 className="mb-2 text-xl font-bold text-green-600 md:text-2xl md:mb-3">
                Ihre Vorteile:
              </h6>
              <p className="text-base md:text-lg">
                Keine Mühe – wir holen die Bücher direkt ab! <br />
                Nachhaltig & sinnvoll – Bücher bekommen eine zweite Chance.{" "}
                <br />
                Mehr Platz für Sie zu Hause!
              </p>
            </div>

            <div className="flex justify-center">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UeberUns;
