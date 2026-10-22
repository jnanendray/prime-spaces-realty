export default function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!number) return null;

  const text = encodeURIComponent(
    "Hi Prime Spaces Realty, I would like to know more about your listings."
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-green-800"
    >
      Chat on WhatsApp
    </a>
  );
}
