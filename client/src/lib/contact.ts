import { contactInfo } from "@shared/schema";

export const CONTACT = contactInfo;

/**
 * WhatsApp number provided by the user.
 */
export const WHATSAPP_E164: string | null = "+442034791300";

export function getWhatsAppHref() {
  if (!WHATSAPP_E164) return null;
  const num = WHATSAPP_E164.replace(/\s+/g, "");
  return `https://wa.me/${encodeURIComponent(num)}`;
}
