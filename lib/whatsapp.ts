export const whatsappNumber = "6289677686895";

export const whatsappMessages = {
  general:
    "Halo CendikiAksara, saya ingin berkonsultasi mengenai layanan pendampingan menulis.",
  service:
    "Halo CendikiAksara, saya ingin berkonsultasi mengenai layanan pendampingan menulis.",
};

export function whatsappLink(message: string = whatsappMessages.general) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
