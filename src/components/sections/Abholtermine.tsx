const WA_HREF = "https://wa.me/41767201353";

const scheduleCards = [
  {
    day: "Montag",
    region: "Aargau / Solothurn",
    zones: "Aarau · Olten · Umgebung",
  },
  {
    day: "Dienstag",
    region: "Basel / Baselland",
    zones: "Basel · Liestal · Umgebung",
  },
  {
    day: "Mittwoch",
    region: "Innerhalb Zürich",
    zones: "Stadtgebiet · alle Stadtkreise",
  },
  {
    day: "Donnerstag",
    region: "Region Zürich",
    zones: "Uster · Winterthur · Zug · umliegend",
  },
  {
    day: "Freitag",
    region: "Basel / Baselland",
    zones: "Basel · Liestal · Umgebung",
  },
];

export function Abholtermine() {
  return (
    <div className="wrap py-[clamp(72px,10vw,130px)]">
      <section
        id="termine"
        className="bg-forest rounded-[10px] px-[clamp(40px,6vw,80px)] py-[clamp(40px,6vw,80px)]"
      >
        <div className="flex items-end justify-between gap-8 mb-14 pb-5 border-b border-white/10 flex-col md:flex-row">
          <div>
            <div className="flex items-center gap-[10px] mb-[14px] font-mono text-[12px] tracking-[0.12em] uppercase text-mint before:content-[''] before:w-6 before:h-px before:bg-mint">
              03 — Abholtermine
            </div>
            <h2 className="font-manrope font-extrabold text-[clamp(32px,4.5vw,56px)] leading-[1.02] tracking-[-0.03em] max-w-[720px] text-paper">
              Wann wir wo unterwegs sind.
            </h2>
          </div>
          <p className="text-white/70 text-[15px] max-w-[320px] md:text-right">
            Wir sind regelmässig unterwegs — mit festen Routen durch die Deutschschweiz. Schreiben
            Sie uns, wir finden einen passenden Termin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-[8px] overflow-hidden">
          {scheduleCards.map(({ day, region, zones }) => (
            <div
              key={day}
              className="bg-forest hover:bg-forest-ink transition-colors duration-200 p-[28px_20px] flex flex-col gap-2.5"
            >
              <span className="font-manrope text-[13px] font-semibold text-mint tracking-[0.08em] uppercase">
                {day}
              </span>
              <span className="font-manrope text-[20px] font-bold tracking-[-0.02em] text-paper leading-tight">
                {region}
              </span>
              <span className="text-[13px] text-white/65">{zones}</span>
            </div>
          ))}
        </div>

        {/* Saturday note */}
        <p className="mt-5 text-[13px] text-white/50 italic">
          * Samstags sind wir bei Bedarf verfügbar — für Abholungen, die unter der Woche nicht gepasst haben.
        </p>

        <div className="mt-6 flex items-center justify-between gap-6 flex-wrap pt-7 border-t border-white/10 text-white/70 text-[15px]">
          <div>
            Sie haben Bücher, Platten oder CDs für uns?{" "}
            <strong className="text-paper font-semibold">Schreiben Sie uns kurz.</strong> Wir melden
            uns mit einem passenden Termin zurück.
          </div>
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-[10px] px-6 py-4 rounded-full bg-mint text-forest-ink font-semibold text-[16px] hover:-translate-y-px transition-all duration-150 whitespace-nowrap"
          >
            Termin anfragen →
          </a>
        </div>
      </section>
    </div>
  );
}
