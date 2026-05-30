import Link from "next/link";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-16 text-white">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        <div>
          <p className="mb-1 text-lg font-bold">Gratis Bücher Abholung</p>
          <p className="text-sm text-neutral-500">
            © 2026 Gratis Bücher Abholung. Alle Rechte vorbehalten.
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href="https://www.instagram.com/buecher_abholservice"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary-500"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href="https://www.facebook.com/MehmetK.4125"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary-500"
          >
            <FacebookIcon className="size-5" />
          </a>
        </div>

        <div className="flex gap-6">
          <Link
            href="/impressum"
            className="text-sm text-neutral-500 transition-colors hover:text-white"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-sm text-neutral-500 transition-colors hover:text-white"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
