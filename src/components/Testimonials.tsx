"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    stars: 5,
    text: "Reibungsloser Ablauf, hat prima geklappt, danke nochmals herzlich Herr Yldiz",
    author: "Anita E.",
  },
  {
    stars: 5,
    text: "Hat perfekt geklappt. Sehr zu empfehlen.",
    author: "Daniel M.",
  },
  {
    stars: 5,
    text: "Einfach top! Alles wunderbar und einfach geklappt, würde ich jederzeit wieder nutzen",
    author: "Andreas K.",
  },
  {
    stars: 5,
    text: "Es hat alles super geklappt! Meine Bücher wurden wie abgemacht abgeholt, pünktlich und zuverlässig. Ich bin sehr froh das die Bücher eine zweite Chance bekommen. Wir werden diesen Service gerne wieder beanspruchen. Vielen Dank",
    author: "Beatrice J.",
  },
  {
    stars: 5,
    text: "Sehr freundlicher Kontakt. Es hat bestens geklappt und ich bin sehr froh, dass meine Bücher ein neues Zuhause bekommen. Vielen Dank. Gerne wieder.",
    author: "Esther L.",
  },
  {
    stars: 5,
    text: "Bei mir hat alles super geklappt! Sehr seriös, professionell und diskret. Meine Bücher wurden wie abgemacht abgeholt. Werde bei Bedarf sicher wieder anrufen.",
    author: "Rosanna G.",
  },
  {
    stars: 5,
    text: "Alles super geklappt. Sehr netter Kontakt. Kann ich zu 100% weiterempfehlen! Nochmals vielen Dank und freundliche Grüsse!",
    author: "Aladin W.",
  },
  {
    stars: 5,
    text: "Hat super geklappt, schnell und unkompliziert",
    author: "Katrin H.",
  },
  {
    stars: 5,
    text: "Alles bestens geklappt. Termingerecht erschienen. Alles mitgenommen. Kann ich nur empfehlen.",
    author: "Daniela B.",
  },
  {
    stars: 5,
    text: "SUPER freundlich und zuverlässig. Jeder Zeit würde und werde ich darauf zurückgreifen. Einfach Danke",
    author: "Christa E.",
  },
  {
    stars: 5,
    text: "Gute Idee! Die Bücher, CDs die man nicht zuhause mehr braucht weiter zu geben und jemand kann sie wieder gebrauchen. Sehr Freundlichen",
    author: "Angela V.",
  },
  {
    stars: 5,
    text: "Tolle Sache. Die Abholung mit Bücher hat gut geklappt, bin froh das ich nichts wegschmeissen musste.",
    author: "Martina S.",
  },
  {
    stars: 5,
    text: "Super Güt Idée zum Platz machen in der Regale",
    author: "Michel B.",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 24 : track.clientWidth;
    const atEnd =
      track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    if (dir === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: dir * amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) scrollByCard(1);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="bewertungen" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Das sagen unsere Kunden
          </p>
          <h2 className="text-3xl font-bold lg:text-4xl">Kundenstimmen</h2>
          <p className="mt-3 text-sm text-neutral-500">
            <span className="font-semibold text-secondary">★★★★★</span> Von 100 %
            empfohlen · 15 Bewertungen auf Facebook
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((r) => (
              <div
                key={r.author}
                data-card
                className="flex w-[85%] shrink-0 snap-start flex-col rounded-xl bg-surface p-8 shadow-[var(--shadow-card)] sm:w-[45%] lg:w-[calc((100%-3rem)/3)]"
              >
                <p className="mb-4 text-xl tracking-wider text-secondary">
                  {"★".repeat(r.stars)}
                </p>
                <p className="mb-5 flex-1 text-[15px] italic leading-relaxed text-neutral-700">
                  &ldquo;{r.text}&rdquo;
                </p>
                <p className="text-sm font-semibold">{r.author}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Vorherige Bewertung"
            className="absolute left-0 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 -translate-x-1/2 items-center justify-center rounded-full bg-surface/70 text-2xl font-light text-neutral-400 shadow-sm backdrop-blur transition-all hover:bg-surface hover:text-neutral-600 sm:-translate-x-1/3 lg:-translate-x-1/2"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Nächste Bewertung"
            className="absolute right-0 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-surface/70 text-2xl font-light text-neutral-400 shadow-sm backdrop-blur transition-all hover:bg-surface hover:text-neutral-600 sm:translate-x-1/3 lg:translate-x-1/2"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
