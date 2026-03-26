import { contactInfo } from "@shared/schema";

export const CONTACT = contactInfo;

/**
 * WhatsApp number — Abuzar (+44 7557 045710).
 */
export const WHATSAPP_E164: string | null = "+447557045710";

export function getWhatsAppHref() {
  if (!WHATSAPP_E164) return null;
  const num = WHATSAPP_E164.replace(/\s+/g, "");
  return `https://wa.me/${encodeURIComponent(num)}`;
}
