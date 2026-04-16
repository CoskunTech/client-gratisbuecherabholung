import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB – Gratis Bücher Abholung",
};

export default function AgbPage() {
  return (
    <main className="pt-[72px] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-heading text-4xl font-bold text-primary mb-10">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        {/* TODO: Replace with finalized AGB content from client (Mustafa/Kamil) */}
        <div className="space-y-8 text-on-surface-variant">
          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              1. Geltungsbereich
            </h2>
            <p className="leading-relaxed">
              Diese AGB gelten für die kostenlose Bücher-Abholdienstleistung
              von Gratis Bücher Abholung (Betreiber gemäss Impressum) im Raum
              Basel, Baselland, Zürich, Aargau und Solothurn.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              2. Leistungsbeschreibung
            </h2>
            <p className="leading-relaxed">
              Wir holen gebrauchte Bücher, CDs, DVDs und Schallplatten
              kostenlos beim Kunden ab. Die Abholung erfolgt nach vorheriger
              Terminvereinbarung. Ein Rechtsanspruch auf Abholung besteht
              nicht.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              3. Kostenlosigkeit
            </h2>
            <p className="leading-relaxed">
              Die Abholung ist für den Auftraggeber vollständig kostenlos. Es
              werden keine Gebühren erhoben.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              4. Eigentum
            </h2>
            <p className="leading-relaxed">
              Mit der Abholung überträgt der Auftraggeber das Eigentum an den
              abgegebenen Medien an uns. Eine Rückgabe ist nicht möglich.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              5. Haftung
            </h2>
            <p className="leading-relaxed">
              Wir haften nicht für Schäden, die durch die Übergabe der Medien
              entstehen. Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit
              beschränkt.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              6. Anwendbares Recht
            </h2>
            <p className="leading-relaxed">
              Es gilt Schweizer Recht. Gerichtsstand ist Basel-Stadt.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
