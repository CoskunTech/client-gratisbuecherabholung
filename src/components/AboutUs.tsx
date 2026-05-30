import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "@/data/business";

export default function AboutUs() {
  return (
    <section id="ueberuns" className="bg-surface py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-200">
          <Image
            src="/family_photo.jpg"
            alt="Kamil und sein Sohn in ihrem Bücherlager"
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover object-top"
          />
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Über uns
          </p>
          <h2 className="mb-5 text-3xl font-bold lg:text-4xl">
            Hallo, ich bin Kamil
          </h2>
          <p className="mb-5 text-lg leading-relaxed text-neutral-700">
            Ich und mein Sohn betreiben gemeinsam diesen Service mit Herz und
            Engagement. Was als kleine Idee begann, ist heute unsere
            Leidenschaft — und auch unsere Lebensgrundlage.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-neutral-700">
            Wir retten Bücher, geben ihnen ein neues Zuhause und sichern damit
            unseren Lebensunterhalt. Jedes Buch verdient einen neuen Leser!
          </p>

          <div className="mb-8 rounded-xl bg-bg p-6">
            <h4 className="mb-4 text-lg font-semibold">Ihre Vorteile</h4>
            <ul className="flex flex-col gap-2 text-neutral-700">
              <li>✓ Keine Mühe — wir holen direkt ab</li>
              <li>✓ Nachhaltig &amp; sinnvoll — zweite Chance für Bücher</li>
              <li>✓ Mehr Platz bei Ihnen zu Hause</li>
            </ul>
          </div>

          <a
            href={whatsappLink}
            className="inline-flex items-center gap-2 rounded-full bg-wa px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="size-5" /> Schreiben Sie uns
          </a>
        </div>
      </div>
    </section>
  );
}
