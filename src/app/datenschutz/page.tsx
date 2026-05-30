import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Gratis Bücher Abholung",
  description:
    "Wie Gratis Bücher Abholung Ihre Personendaten gemäss revDSG bearbeitet.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
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
        <h1 className="mb-2 text-3xl font-bold lg:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="mb-10 text-neutral-500">
          Diese Erklärung richtet sich nach dem schweizerischen
          Datenschutzgesetz (revDSG).
        </p>

        <div className="space-y-8 text-[17px] leading-relaxed text-neutral-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              1. Verantwortliche Stelle
            </h2>
            <p>
              Verantwortlich für die Bearbeitung von Personendaten auf dieser
              Website ist:
            </p>
            <p className="mt-3">
              Kamil Yildiz
              <br />
              {business.name}
              <br />
              {business.address.street}, {business.address.postalCode}{" "}
              {business.address.city}
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
              2. Grundsatz
            </h2>
            <p>
              Wir bearbeiten Personendaten nur so weit, wie dies für einen
              funktionsfähigen Internetauftritt und für die Bearbeitung Ihrer
              Anfragen erforderlich ist. Wir geben Ihre Daten nicht zu Werbe-
              oder Verkaufszwecken weiter.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              3. Aufruf der Website / Server-Logfiles
            </h2>
            <p>
              Beim Besuch dieser Website werden durch den Hosting-Anbieter
              automatisch technische Daten in Server-Logfiles erfasst (z.&nbsp;B.
              IP-Adresse, Datum und Uhrzeit des Zugriffs, abgerufene Seite,
              verwendeter Browser und Betriebssystem). Diese Daten dienen
              ausschliesslich dem sicheren und stabilen Betrieb der Website und
              werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
            <p className="mt-3">
              Diese Website wird gehostet bei der Vercel Inc., 340 S Lemon Ave
              #4133, Walnut, CA 91789, USA. Dabei können die oben genannten
              technischen Zugriffsdaten auf Servern von Vercel bearbeitet und in
              die USA übermittelt werden. Es gelten die Datenschutzbestimmungen
              von Vercel.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              4. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns über das Anfrageformular, per WhatsApp, E-Mail oder
              Telefon kontaktieren, werden die von Ihnen mitgeteilten Angaben
              (z.&nbsp;B. Name, Adresse, Kontaktdaten, Anzahl der Bücher,
              Bemerkungen) zur Bearbeitung Ihrer Abholanfrage verwendet. Das
              Anfrageformular auf dieser Website speichert selbst keine Daten;
              es öffnet lediglich WhatsApp mit einer vorausgefüllten Nachricht,
              die Sie vor dem Senden prüfen und anpassen können.
            </p>
            <p className="mt-3">
              Für die Kommunikation über WhatsApp ist die Meta Platforms Ireland
              Ltd. verantwortlich; dabei können Daten in die USA übermittelt
              werden. Es gelten die Datenschutzbestimmungen von WhatsApp. Wenn
              Sie keine Datenübermittlung an WhatsApp wünschen, kontaktieren Sie
              uns bitte per Telefon oder E-Mail.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              5. Google Maps
            </h2>
            <p>
              Auf der Kontaktseite binden wir eine Karte des Dienstes Google
              Maps der Google Ireland Ltd. ein, um unseren Standort
              darzustellen. Beim Laden der Karte wird Ihre IP-Adresse an Google
              übermittelt; dabei können Daten in die USA übermittelt werden. Es
              gelten die Datenschutzbestimmungen von Google.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              6. Keine Cookies, kein Tracking
            </h2>
            <p>
              Diese Website setzt keine Cookies zu Analyse- oder
              Marketingzwecken ein und verwendet keine Tracking- oder
              Webanalyse-Dienste. Die verwendeten Schriftarten werden lokal von
              unserem eigenen Server ausgeliefert; es besteht dafür keine
              Verbindung zu Servern Dritter.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              7. Ihre Rechte
            </h2>
            <p>
              Sie haben im Rahmen des anwendbaren Datenschutzrechts das Recht auf
              Auskunft über die zu Ihrer Person bearbeiteten Daten sowie das
              Recht, deren Berichtigung oder Löschung zu verlangen. Wenden Sie
              sich dazu bitte an die oben genannte verantwortliche Stelle.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-neutral-900">
              8. Änderungen
            </h2>
            <p>
              Wir können diese Datenschutzerklärung jederzeit anpassen. Es gilt
              die jeweils auf dieser Website veröffentlichte Fassung.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
