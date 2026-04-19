import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Gratis Bücher Abholung",
};

export default function ImpressumPage() {
  return (
    <main className="pt-[72px] min-h-screen bg-paper">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="flex items-center gap-[10px] mb-4 font-mono text-[12px] tracking-[0.12em] uppercase text-forest before:content-[''] before:w-6 before:h-px before:bg-forest">
            Legal
          </div>
          <h1 className="font-manrope font-extrabold text-[clamp(32px,4vw,48px)] leading-[1.05] tracking-[-0.03em] text-ink">
            Impressum
          </h1>
        </div>

        {/* TODO: Replace with verified legal content from Mustafa/Kamil */}
        <div className="flex flex-col gap-8 text-ink-soft text-[16px] leading-relaxed">
          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              Angaben gemäss Art. 69 des Schweizer Datenschutzgesetzes
            </h2>
            <p>[Name des Inhabers]</p>
            <p>Im Niederholzboden 2</p>
            <p>4125 Riehen</p>
            <p>Schweiz</p>
          </section>

          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a href="tel:+41767201353" className="text-forest hover:underline">
                +41 76 720 13 53
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a href="mailto:buecher_abholservice@gmx.ch" className="text-forest hover:underline">
                buecher_abholservice@gmx.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-manrope font-bold text-[22px] tracking-[-0.02em] text-ink mb-3">
              Haftungsausschluss
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
              Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschliesslich
              deren Betreiber verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
