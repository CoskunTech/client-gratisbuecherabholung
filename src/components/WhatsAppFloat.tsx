import WhatsAppIcon from "./WhatsAppIcon";
import { whatsappLink } from "@/data/business";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      className="fixed right-6 bottom-6 z-50 flex size-15 items-center justify-center rounded-full bg-wa text-white shadow-[var(--shadow-lg)] transition-transform hover:scale-110"
      title="WhatsApp"
      aria-label="WhatsApp öffnen"
    >
      <WhatsAppIcon className="size-8" />
    </a>
  );
}
