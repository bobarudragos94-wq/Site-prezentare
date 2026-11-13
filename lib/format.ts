import { siteConfig } from "@/site.config";

/** 12345 -> "12.345". Scris de mână ca serverul și browserul să dea mereu același rezultat. */
export function cuPuncte(n: number): string {
  return Math.round(n)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function pret(n: number): string {
  return `${cuPuncte(n)} ${siteConfig.moneda.simbol}`;
}

export const telHref = `tel:${siteConfig.contact.telefonApel}`;

export const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  siteConfig.contact.mesajWhatsapp,
)}`;

export const mailHref = `mailto:${siteConfig.contact.email}`;
