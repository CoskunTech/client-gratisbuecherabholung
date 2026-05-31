"use client";

import type { FormEvent, ReactNode } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import {
  business,
  whatsappLink,
  whatsappNumber,
  telLink,
  mailLink,
  addressLine,
} from "@/data/business";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const get = (key: string) => (data.get(key) as string | null)?.trim() ?? "";
    const vorname = get("vorname");
    const nachname = get("nachname");
    const strasse = get("strasse");
    const plz = get("plz");
    const ort = get("ort");
    const anzahl = get("anzahl");
    const kontakt = get("kontakt");
    const bemerkungen = get("bemerkungen");

    // Strasse + "PLZ Ort" zu einer Adresszeile zusammensetzen (leere Teile weglassen).
    const adresse = [strasse, [plz, ort].filter(Boolean).join(" ")]
      .filter(Boolean)
      .join(", ");

    const lines = [
      "Hallo, ich möchte gerne eine kostenlose Abholung anfragen.",
      "",
      `Name: ${[vorname, nachname].filter(Boolean).join(" ")}`,
      `Adresse: ${adresse}`,
    ];
    if (anzahl) lines.push(`Anzahl Bücher (ca.): ${anzahl}`);
    if (kontakt) lines.push(`Telefon / E-Mail: ${kontakt}`);
    if (bemerkungen) lines.push(`Bemerkungen: ${bemerkungen}`);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank", "noopener");
  }

  return (
    <section id="kontakt" className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Jetzt Abholung anfragen
          </p>
          <h2 className="text-3xl font-bold lg:text-4xl">Kontakt</h2>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-xl bg-surface p-8 shadow-[var(--shadow-card)]">
            <h4 className="mb-6 text-xl font-semibold">Abholung anfragen</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="vorname" className="mb-1.5 block text-sm font-semibold">
                    Vorname *
                  </label>
                  <input
                    id="vorname"
                    name="vorname"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder="Ihr Vorname"
                    className="w-full rounded-lg border border-neutral-300 bg-surface px-4 py-3 text-base transition-colors focus:border-primary-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="nachname" className="mb-1.5 block text-sm font-semibold">
                    Nachname *
                  </label>
                  <input
                    id="nachname"
                    name="nachname"
                    type="text"
                    required
                    autoComplete="family-name"
                    placeholder="Ihr Nachname"
                    className="w-full rounded-lg border border-neutral-300 bg-surface px-4 py-3 text-base transition-colors focus:border-primary-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="strasse" className="mb-1.5 block text-sm font-semibold">
                  Strasse & Nr.
                  <span className="ml-1.5 text-xs font-normal italic text-neutral-400">
                    (optional)
                  </span>
                </label>
                <input
                  id="strasse"
                  name="strasse"
                  type="text"
                  autoComplete="address-line1"
                  placeholder="Strasse und Hausnummer"
                  className="w-full rounded-lg border border-neutral-300 bg-surface px-4 py-3 text-base transition-colors focus:border-primary-500 focus:outline-none"
                />
              </div>

              <div className="mb-5 grid gap-5 sm:grid-cols-[1fr_2fr]">
                <div>
                  <label htmlFor="plz" className="mb-1.5 block text-sm font-semibold">
                    Postleitzahl *
                  </label>
                  <input
                    id="plz"
                    name="plz"
                    type="text"
                    required
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="z.B. 4125"
                    className="w-full rounded-lg border border-neutral-300 bg-surface px-4 py-3 text-base transition-colors focus:border-primary-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="ort" className="mb-1.5 block text-sm font-semibold">
                    Ort *
                  </label>
                  <input
                    id="ort"
                    name="ort"
                    type="text"
                    required
                    autoComplete="address-level2"
                    placeholder="z.B. Riehen"
                    className="w-full rounded-lg border border-neutral-300 bg-surface px-4 py-3 text-base transition-colors focus:border-primary-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="anzahl" className="mb-1.5 block text-sm font-semibold">
                    Anzahl Bücher (ca.)
                  </label>
                  <input
                    id="anzahl"
                    name="anzahl"
                    type="text"
                    placeholder="z.B. 50"
                    className="w-full rounded-lg border border-neutral-300 bg-surface px-4 py-3 text-base transition-colors focus:border-primary-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="kontakt-info" className="mb-1.5 block text-sm font-semibold">
                    Telefon / E-Mail *
                  </label>
                  <input
                    id="kontakt-info"
                    name="kontakt"
                    type="text"
                    required
                    placeholder="Für Rückfragen"
                    className="w-full rounded-lg border border-neutral-300 bg-surface px-4 py-3 text-base transition-colors focus:border-primary-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="bemerkungen" className="mb-1.5 block text-sm font-semibold">
                  Bemerkungen
                </label>
                <textarea
                  id="bemerkungen"
                  name="bemerkungen"
                  placeholder="z.B. Zustand der Bücher, besondere Wünsche..."
                  rows={3}
                  className="w-full resize-y rounded-lg border border-neutral-300 bg-surface px-4 py-3 text-base transition-colors focus:border-primary-500 focus:outline-none"
                />
              </div>

              <div className="mb-6 flex items-start gap-3 rounded-lg bg-primary-500/5 px-4 py-3 text-[15px] text-neutral-700">
                <span className="text-lg leading-none">📷</span>
                <span>
                  Fotos Ihrer Bücher können Sie anschliessend direkt im
                  WhatsApp-Chat anhängen.
                </span>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-primary-500 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="size-5" />
                Anfrage über WhatsApp senden
              </button>
              <p className="mt-3 text-center text-sm text-neutral-500">
                Es öffnet sich WhatsApp mit Ihrer ausgefüllten Anfrage.
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex h-full flex-col gap-6">
            <div className="rounded-xl bg-surface p-8 shadow-[var(--shadow-card)]">
              <h4 className="mb-6 text-xl font-semibold">
                Oder direkt kontaktieren
              </h4>

              <div className="flex flex-col gap-5">
                <ContactItem
                  icon={<WhatsAppIcon className="size-5" />}
                  label="WhatsApp"
                  href={whatsappLink}
                  text={business.phoneDisplay}
                />
                <ContactItem
                  icon="📞"
                  label="Telefon"
                  href={telLink}
                  text={business.phoneDisplay}
                />
                <ContactItem
                  icon="✉️"
                  label="E-Mail"
                  href={mailLink}
                  text={business.email}
                />
                <ContactItem
                  icon="📍"
                  label="Adresse"
                  href={`https://maps.google.com/?q=${encodeURIComponent(addressLine)}`}
                  text={addressLine}
                />
              </div>
            </div>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Route nach ${addressLine} in Google Maps planen`}
              className="group relative flex-1 overflow-hidden rounded-xl shadow-[var(--shadow-card)] min-h-[260px]"
            >
              <iframe
                title={`Standort ${business.address.city}, ${business.address.region}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(addressLine)}&z=15&output=embed`}
                className="pointer-events-none h-full min-h-[260px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-lg)] transition-transform group-hover:-translate-x-1/2 group-hover:-translate-y-0.5">
                <span aria-hidden>🧭</span>
                Route planen
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  href,
  text,
}: {
  icon: ReactNode;
  label: string;
  href: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-500 text-lg text-white">
        {icon}
      </div>
      <div>
        <p className="mb-0.5 font-semibold text-neutral-900">{label}</p>
        <a href={href} className="font-medium text-primary-500 hover:underline">
          {text}
        </a>
      </div>
    </div>
  );
}
