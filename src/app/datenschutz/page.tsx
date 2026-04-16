import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – Gratis Bücher Abholung",
};

export default function DatenschutzPage() {
  return (
    <main className="pt-[72px] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-heading text-4xl font-bold text-primary mb-10">
          Datenschutzerklärung
        </h1>

        {/* TODO: Replace with DSG-compliant content. Verify with legal counsel. */}
        <div className="space-y-8 text-on-surface-variant">
          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              1. Verantwortliche Stelle
            </h2>
            <p className="leading-relaxed">
              Verantwortlich für die Datenbearbeitung auf dieser Website ist der
              Betreiber gemäss Impressum. Bei Fragen zum Datenschutz wenden Sie
              sich bitte an:{" "}
              <a
                href="mailto:buecher_abholservice@gmx.ch"
                className="text-primary hover:underline"
              >
                buecher_abholservice@gmx.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              2. Erhobene Daten
            </h2>
            <p className="leading-relaxed">
              Bei der Nutzung dieser Website werden keine personenbezogenen
              Daten automatisch erfasst, ausser jenen, die Ihr Browser
              technisch übermittelt (z. B. IP-Adresse, Zeitstempel). Wenn Sie
              uns über WhatsApp oder E-Mail kontaktieren, speichern wir Ihre
              Kontaktdaten ausschliesslich zur Bearbeitung Ihrer Anfrage.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              3. Keine Weitergabe an Dritte
            </h2>
            <p className="leading-relaxed">
              Wir geben Ihre Daten nicht an Dritte weiter. Eine Ausnahme gilt
              nur, wenn wir gesetzlich dazu verpflichtet sind.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              4. Ihre Rechte (DSG)
            </h2>
            <p className="leading-relaxed">
              Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer
              bei uns gespeicherten Daten. Wenden Sie sich dazu per E-Mail an
              uns.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              5. Cookies
            </h2>
            <p className="leading-relaxed">
              Diese Website verwendet keine Tracking-Cookies. Es werden
              lediglich technisch notwendige Browser-Funktionen genutzt.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
