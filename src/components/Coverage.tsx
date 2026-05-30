import Image from "next/image";

export default function Coverage() {
  return (
    <section id="abdeckung" className="bg-surface py-24">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Gut zu wissen
          </p>
          <h2 className="text-3xl font-bold lg:text-4xl">
            Nicht jede Abholung ist überall möglich
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,400px)_1fr]">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-neutral-200 shadow-[var(--shadow-card)]">
            <Image
              src="/buecher-versand.png"
              alt="Karton voller Bücher, CDs, DVDs und Schallplatten für die Gratis-Bücher-Abholung"
              fill
              sizes="(min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-5 text-[15px] leading-relaxed text-neutral-700">
            <p>
              Aufgrund gestiegener Kosten, längerer Distanzen und der
              notwendigen Fahrzeugplanung ist es uns leider nicht immer möglich,
              jede Region regelmässig anzufahren.
            </p>
            <p>
              Unser kostenloser Abholservice ist vor allem in der Region Basel
              und Zürich möglich. Weiter entfernte Regionen können wir nur sehr
              selten anfahren – und nur dann, wenn Route, Menge und Fahrzeugplatz
              gut zusammenpassen.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-neutral-200 bg-white p-6 text-[15px] leading-relaxed text-neutral-700 lg:p-8">
          <p>
            Wenn Sie uns dennoch Bücher, CDs, DVDs oder Schallplatten zukommen
            lassen möchten, können Sie diese gerne per Post an uns senden. Das
            würde uns sehr freuen. So helfen Sie mit, dass gut erhaltene Medien
            nicht im Abfall landen, sondern eine zweite Chance bekommen.
          </p>
          <p className="mt-4 font-semibold text-neutral-900">
            Bitte kontaktieren Sie uns vor dem Versand kurz.
          </p>
          <p className="mt-2">
            Unsere Lagerfläche ist begrenzt, daher ist es wichtig, dass wir Menge
            und Zustand der Medien vorher einschätzen können.
          </p>
          <div className="mt-5 border-t border-neutral-200 pt-5">
            <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-primary-500">
              Versandadresse
            </p>
            <address className="not-italic leading-relaxed text-neutral-900">
              Kamil Yildiz<br />
              Im Niederholzboden 2<br />
              4125 Riehen
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
