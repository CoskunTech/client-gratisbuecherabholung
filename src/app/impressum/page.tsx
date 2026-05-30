import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Impressum | Gratis Bücher Abholung",
  description:
    "Impressum und Kontaktangaben von Gratis Bücher Abholung, Riehen (Basel).",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <>
      <header className="border-b border-neutral-200 bg-bg">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-neutral-900">
            <span className="text-primary-500">Gratis</span> Bücher Abholung
          </Link>
          <Link
            href="/"
            className="text-[15px] font-medium text-neutral-700 transition-colors hover:text-primary-500"
          >
            ← Zur Startseite
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-bold lg:text-4xl">Impressum</h1>
        <p className="mb-10 text-neutral-500">
          Angaben gemäss schweizerischem Recht.
        </p>

        <div className="space-y-8 text-[17px] leading-relaxed text-neutral-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              Verantwortlich für den Inhalt
            </h2>
            <p>
              Kamil Yildiz
              <br />
              {business.name}
              <br />
              {business.address.street}
              <br />
              {business.address.postalCode} {business.address.city} (
              {business.address.region})
              <br />
              Schweiz
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a
                href={`tel:${business.phone}`}
                className="text-primary-500 hover:underline"
              >
                {business.phoneDisplay}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${business.email}`}
                className="text-primary-500 hover:underline"
              >
                {business.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              Art des Angebots
            </h2>
            <p>
              {business.name} ist ein kostenloser, privater Abholdienst für
              Bücher, CDs, DVDs und Schallplatten in der Region Basel, Zürich,
              Aargau und Solothurn. Es handelt sich um keine gewinnorientierte
              Tätigkeit; ein Eintrag im Handelsregister besteht nicht.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              Haftungsausschluss
            </h2>
            <p>
              Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt
              erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte wird jedoch keine Gewähr übernommen. Für Inhalte externer
              Links (z.&nbsp;B. Instagram, Facebook, WhatsApp, Google Maps) sind
              ausschliesslich deren Betreiber verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              Datenschutz
            </h2>
            <p>
              Informationen zur Bearbeitung Ihrer Personendaten finden Sie in
              unserer{" "}
              <Link
                href="/datenschutz"
                className="text-primary-500 hover:underline"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
