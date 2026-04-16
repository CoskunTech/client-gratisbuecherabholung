import { Phone, Mail, MapPin } from "lucide-react";

const CONTACT_ITEMS = [
  {
    icon: Phone,
    title: "Telefon & WhatsApp",
    value: "+41 76 720 13 53",
    href: "tel:+41767201353",
  },
  {
    icon: Mail,
    title: "E-Mail",
    value: "buecher_abholservice@gmx.ch",
    href: "mailto:buecher_abholservice@gmx.ch",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Im Niederholzboden 2, 4125 Riehen",
    href: null,
  },
] as const;

export function Kontakt() {
  return (
    <section id="kontakt" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact info */}
          <div>
            <h2 className="font-heading text-4xl font-bold text-primary mb-10">
              Nehmen Sie Kontakt auf
            </h2>
            <div className="space-y-4">
              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center shrink-0">
                      <Icon
                        className="w-5 h-5 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-lg">
                        {item.title}
                      </p>
                      <p className="text-on-surface-variant">{item.value}</p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-6 p-6 bg-surface rounded-xl border border-outline-variant/20 hover:shadow-lg transition-all"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.title}
                    className="flex items-start gap-6 p-6 bg-surface rounded-xl border border-outline-variant/20"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] lg:h-auto rounded-xl overflow-hidden shadow-inner relative bg-surface-container">
            <iframe
              title="Standort Gratis Bücher Abholung, Riehen Basel"
              src="https://maps.google.com/maps?q=Im+Niederholzboden+2,+4125+Riehen,+Switzerland&output=embed&z=15"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Location label overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none">
              <div className="bg-primary text-on-primary px-4 py-2 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-bold whitespace-nowrap">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                Unser Standort in Riehen
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
