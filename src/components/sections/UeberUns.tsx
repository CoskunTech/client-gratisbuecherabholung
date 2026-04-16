import Image from "next/image";
import { BookOpen } from "lucide-react";

export function UeberUns() {
  return (
    <section id="ueber-uns" className="py-24 px-6 md:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20">
        {/* Photo side */}
        <div className="relative group">
          {/* Decorative offset background */}
          <div className="absolute -top-4 -left-4 w-full h-full bg-secondary-container rounded-xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
          <Image
            src="/assets/family_photo.jpg"
            alt="Kamil und sein Sohn – Gratis Bücher Abholung Basel"
            width={600}
            height={700}
            className="w-full rounded-xl shadow-2xl object-cover"
          />
        </div>

        {/* Text side */}
        <div>
          <p className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">
            Unsere Geschichte
          </p>
          <h2 className="font-heading text-4xl font-bold text-primary mb-8 md:text-5xl">
            Hallo, ich bin Kamil
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
            Zusammen mit meinem Sohn habe ich es mir zur Aufgabe gemacht, alten
            Büchern eine zweite Chance zu geben. Was als kleines Hobby begann,
            hat sich zu einem Herzensprojekt für kulturelle Nachhaltigkeit
            entwickelt.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
            Wir glauben, dass jedes Buch eine Geschichte hat, die nicht auf dem
            Dachboden enden sollte. Wir sortieren, kuratieren und spenden die
            gesammelten Werke an Orte, wo sie wieder geschätzt werden.
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-3 p-4 bg-surface-container-low rounded-xl">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
              <BookOpen
                className="w-5 h-5 text-on-primary"
                aria-hidden="true"
              />
            </div>
            <span className="font-bold text-primary">
              Kulturelle Nachhaltigkeit seit 2021
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
