const WA_HREF = "https://wa.me/41767201353";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener"
      className="wa-pulse fixed right-5 bottom-5 z-40 w-[60px] h-[60px] rounded-full bg-whatsapp text-white flex items-center justify-center hover:bg-whatsapp-deep hover:scale-105 transition-all duration-200"
      style={{ boxShadow: "0 10px 28px #25d36650, 0 4px 10px rgba(0,0,0,0.12)" }}
      aria-label="Schreiben Sie uns auf WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" width={28} height={28} aria-hidden="true">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3zM12 2a10 10 0 00-8.7 14.9L2 22l5.3-1.4A10 10 0 1012 2z" />
      </svg>
    </a>
  );
}
