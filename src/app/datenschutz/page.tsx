import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – Gratis Bücher Abholung",
};

export default function DatenschutzPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-paper">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="flex items-center gap-[10px] mb-4 font-mono text-[12px] tracking-[0.12em] uppercase text-forest before:content-[''] before:w-6 before:h-px before:bg-forest">
            Legal
          </div>
          <h1 className="font-manrope font-extrabold text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.03em] text-ink">
            Datenschutzerklärung
          </h1>
        </div>

        {/* TODO: Review with legal counsel for DSG compliance */}
        <div className="flex flex-col gap-8 text-ink-soft text-[16px] leading-relaxed">
          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              1. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Datenbearbeitung auf dieser Website ist der Betreiber gemäss
              Impressum. Bei Fragen zum Datenschutz wenden Sie sich bitte an:{" "}
              <a href="mailto:buecher_abholservice@gmx.ch" className="text-forest hover:underline">
                buecher_abholservice@gmx.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              2. Erhobene Daten
            </h2>
            <p>
              Bei der Nutzung dieser Website werden keine personenbezogenen Daten automatisch
              erfasst, ausser jenen, die Ihr Browser technisch übermittelt (z. B. IP-Adresse,
              Zeitstempel). Wenn Sie uns über WhatsApp oder E-Mail kontaktieren, speichern wir Ihre
              Kontaktdaten ausschliesslich zur Bearbeitung Ihrer Anfrage.
            </p>
          </section>

          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              3. Keine Weitergabe an Dritte
            </h2>
            <p>
              Wir geben Ihre Daten nicht an Dritte weiter. Eine Ausnahme gilt nur, wenn wir
              gesetzlich dazu verpflichtet sind.
            </p>
          </section>

          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              4. Ihre Rechte (DSG)
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer bei uns
              gespeicherten Daten. Wenden Sie sich dazu per E-Mail an uns.
            </p>
          </section>

          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              5. Cookies
            </h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch
              notwendige Browser-Funktionen genutzt.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
