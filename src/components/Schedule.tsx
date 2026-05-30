const days = [
  { day: "Montag", region: "Aargau · Solothurn" },
  { day: "Dienstag", region: "Basel & Baselland" },
  { day: "Mittwoch", region: "Zürich" },
  { day: "Donnerstag", region: "Zürich" },
  { day: "Freitag", region: "Basel & Baselland" },
];

export default function Schedule() {
  return (
    <section id="abholtermine" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Wöchentliche Abholtermine
          </p>
          <h2 className="text-3xl font-bold lg:text-4xl">
            Unsere Abholtermine in Ihrer Region
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {days.map((d) => (
            <div
              key={d.day}
              className="rounded-lg border border-neutral-200 bg-surface p-6 text-center"
            >
              <p className="mb-1 text-lg font-bold text-primary-500">
                {d.day}
              </p>
              <p className="text-[15px] text-neutral-700">{d.region}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 text-center text-[15px] text-neutral-500">
          Kein passender Termin? Schreiben Sie uns — wir finden eine Lösung!
        </p>
      </div>
    </section>
  );
}
