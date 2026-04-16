import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="startseite"
      className="overflow-hidden px-6 pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 md:flex-row md:gap-16">
        {/* Text side */}
        <div className="flex-1 text-center md:text-left">
          {/* Headline */}
          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-primary mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
            Wir holen Ihre Bücher{" "}
            <span className="text-[#15803d]">gratis</span> ab.
          </h1>

          {/* Subtext */}
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg mb-10 mx-auto md:mx-0">
            Geben Sie Ihren Büchern ein neues Zuhause – kostenlos, nachhaltig
            und mit Herz. Wir sorgen dafür, dass Wissen weiterlebt.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="tel:+41767201353"
              className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
              Jetzt anrufen
            </a>
            <a
              href="https://wa.me/41767201353"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all hover:bg-primary hover:text-on-primary hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="flex-1 relative w-full max-w-lg md:max-w-none">
          {/* Glow */}
          <div
            className="absolute inset-0 bg-primary-container/20 rounded-full blur-3xl -z-10 scale-90"
            aria-hidden="true"
          />
          <Image
            src="/assets/Hero.png"
            alt="Gratis Bücher Abholung – Illustration"
            width={600}
            height={500}
            priority
            className="w-full h-auto rounded-xl grayscale-[0.15] hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
