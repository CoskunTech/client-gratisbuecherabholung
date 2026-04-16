import { MapPin } from "lucide-react";

const TERMINE = [
  { tag: "Montag", region: "Aargau & Solothurn" },
  { tag: "Dienstag", region: "Basel & Baselland" },
  { tag: "Mittwoch", region: "Zürich" },
  { tag: "Donnerstag", region: "Zürich" },
  { tag: "Freitag", region: "Basel & Baselland" },
] as const;

export function Abholtermine() {
  return (
    <section id="abholtermine" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary mb-3 sm:text-4xl md:text-5xl">
            Abholtermine
          </h2>
          <p className="text-lg text-on-surface-variant">
            Unser wöchentlicher Tourplan. Finden Sie Ihren passenden Tag.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl shadow-sm bg-surface-container-lowest border border-outline-variant/30">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-primary">
                <th className="w-1/3 py-4 px-6 text-on-primary uppercase tracking-wider text-xs font-bold">
                  Wochentag
                </th>
                <th className="w-2/3 py-4 px-6 text-on-primary uppercase tracking-wider text-xs font-bold">
                  Region
                </th>
              </tr>
            </thead>
            <tbody>
              {TERMINE.map((termin, index) => (
                <tr
                  key={termin.tag}
                  className={
                    index % 2 === 0
                      ? "bg-surface-container-lowest"
                      : "bg-surface-container-low"
                  }
                >
                  <td className="py-5 px-6 text-lg font-medium text-on-surface border-t border-outline-variant/20">
                    {termin.tag}
                  </td>
                  <td className="py-5 px-6 text-base text-on-surface-variant border-t border-outline-variant/20">
                    <span className="flex items-center gap-2">
                      <MapPin
                        className="w-4 h-4 text-secondary shrink-0"
                        aria-hidden="true"
                      />
                      {termin.region}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-on-surface-variant italic">
          Wohnen Sie außerhalb dieser Regionen? Schreiben Sie uns trotzdem –
          wir finden eine Lösung.
        </p>
      </div>
    </section>
  );
}
