import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Gratis Bücher Abholung",
};

export default function ImpressumPage() {
  return (
    <main className="pt-[72px] min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-heading text-4xl font-bold text-primary mb-10">
          Impressum
        </h1>

        {/* TODO: Replace with verified legal content from client (Mustafa/Kamil) */}
        <div className="prose prose-lg text-on-surface-variant space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              Angaben gemäss Art. 69 des Schweizer Datenschutzgesetzes
            </h2>
            <p>[Name des Inhabers]</p>
            <p>Im Niederholzboden 2</p>
            <p>4125 Riehen</p>
            <p>Schweiz</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold text-on-surface mb-3">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a
                href="tel:+41767201353"
                className="text-primary hover:underline"
              >
                +41 76 720 13 53
              </a>
            </p>
            <p>
              E-Mail:{" "}
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
              Haftungsausschluss
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschliesslich deren Betreiber
              verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
