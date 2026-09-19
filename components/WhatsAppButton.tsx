import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  className?: string;
};

export default function WhatsAppButton({
  label = "Konsultasi via WhatsApp",
  message = whatsappMessages.general,
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      className={`whatsapp-button ${className}`}
    >
      <span className="whatsapp-button-icon" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-9 8.3 8.5 8.5 0 0 1-4-.9L3 20l1.2-4.6A8.3 8.3 0 0 1 3.5 11.5a8.5 8.5 0 1 1 17.5 0Z" />
          <path d="M8.5 9.5c.3 2 2 3.7 4 4 .6.1 1.1-.1 1.5-.5l.6-.6-.9-1.1-1 .4c-.8-.3-1.5-.8-1.9-1.6l.3-1-1.1-.9-.6.6c-.4.4-.6 1-.5 1.5Z" />
        </svg>
      </span>
      <span>{label}</span>
    </a>
  );
}
