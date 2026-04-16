import { MessageCircle, CalendarCheck, Truck } from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    title: "Kontaktieren Sie uns",
    description:
      "Senden Sie uns eine Nachricht per WhatsApp oder rufen Sie uns an. Teilen Sie uns einfach mit, was Sie abgeben möchten.",
  },
  {
    icon: CalendarCheck,
    title: "Termin vereinbaren",
    description:
      "Wir finden gemeinsam einen passenden Zeitpunkt für die Abholung bei Ihnen vor Ort – kostenlos und unkompliziert.",
  },
  {
    icon: Truck,
    title: "Wir holen ab",
    description:
      "Unser Team kommt vorbei und nimmt Ihre Bücherschätze gratis mit. Kein Aufwand für Sie.",
  },
] as const;

export function SoGehtEs() {
  return (
    <section
      id="so-helfen-wir"
      className="py-24 px-6 bg-surface-container-low"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4 sm:text-4xl md:text-5xl">
            So geht&apos;s
          </h2>
          <div className="h-1.5 w-20 bg-secondary mx-auto rounded-full" />
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group bg-surface p-10 rounded-xl transition-all duration-300 hover:shadow-xl border-b-4 border-transparent hover:border-secondary"
              >
                <div className="w-16 h-16 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    className="w-8 h-8 text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-on-surface mb-4">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
