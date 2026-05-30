import Image from "next/image";
import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "@/data/business";

export default function Hero() {
  return (
    <section id="startseite" className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-500">
            Abholservice in Basel, Zürich, Aargau &amp; Solothurn
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight text-neutral-900 lg:text-5xl">
            Wir holen Ihre Bücher{" "}
            <span className="text-primary-500">GRATIS</span> ab!
          </h1>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-neutral-700">
            Möchten Sie Ihre alten Bücher, CDs, DVDs oder Schallplatten
            weitergeben? Wir kommen direkt zu Ihnen nach Hause — einfach und
            unkompliziert.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-wa px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="size-5" /> Schreiben Sie uns
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary-500 px-7 py-3.5 font-semibold text-primary-500 transition-transform hover:-translate-y-0.5"
            >
              Formular ausfüllen
            </a>
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            ✓ Schnell & unkompliziert · ✓ Direkt bei Ihnen zu Hause · ✓ Auf
            Anfrage schweizweit
          </p>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-neutral-200 lg:aspect-[4/5]">
          <Image
            src="/family_photo.jpg"
            alt="Kamil und sein Sohn in ihrem Bücherlager"
            fill
            priority
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
