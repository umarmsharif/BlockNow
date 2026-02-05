import { contactInfo } from "@shared/schema";

export const CONTACT = contactInfo;

/**
 * WhatsApp number was not provided by the user.
 * Set this to an E.164 number without spaces, e.g. "+447700900123"
 */
export const WHATSAPP_E164: string | null = null;

export function getWhatsAppHref() {
  if (!WHATSAPP_E164) return null;
  const num = WHATSAPP_E164.replace(/\s+/g, "");
  return `https://wa.me/${encodeURIComponent(num)}`;
}
