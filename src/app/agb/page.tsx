import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB – Gratis Bücher Abholung",
};

export default function AgbPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-paper">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="flex items-center gap-[10px] mb-4 font-mono text-[12px] tracking-[0.12em] uppercase text-forest before:content-[''] before:w-6 before:h-px before:bg-forest">
            Legal
          </div>
          <h1 className="font-manrope font-extrabold text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.03em] text-ink">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>
        </div>

        {/* TODO: Replace with finalized AGB content from Mustafa/Kamil */}
        <div className="flex flex-col gap-8 text-ink-soft text-[16px] leading-relaxed">
          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              1. Geltungsbereich
            </h2>
            <p>
              Diese AGB gelten für die kostenlose Bücher-Abholdienstleistung von Gratis Bücher
              Abholung (Betreiber gemäss Impressum) im Raum Basel, Baselland, Zürich, Aargau und
              Solothurn.
            </p>
          </section>

          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              2. Leistungsbeschreibung
            </h2>
            <p>
              Wir holen gebrauchte Bücher, CDs, DVDs und Schallplatten kostenlos beim Kunden ab.
              Die Abholung erfolgt nach vorheriger Terminvereinbarung. Ein Rechtsanspruch auf
              Abholung besteht nicht.
            </p>
          </section>

          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              3. Kostenlosigkeit
            </h2>
            <p>
              Die Abholung ist für den Auftraggeber vollständig kostenlos. Es werden keine Gebühren
              erhoben.
            </p>
          </section>

          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              4. Eigentum
            </h2>
            <p>
              Mit der Abholung überträgt der Auftraggeber das Eigentum an den abgegebenen Medien an
              uns. Eine Rückgabe ist nicht möglich.
            </p>
          </section>

          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              5. Haftung
            </h2>
            <p>
              Wir haften nicht für Schäden, die durch die Übergabe der Medien entstehen. Die
              Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.
            </p>
          </section>

          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              6. Anwendbares Recht
            </h2>
            <p>Es gilt Schweizer Recht. Gerichtsstand ist Basel-Stadt.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
