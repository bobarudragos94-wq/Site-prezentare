import Link from "next/link";
import { telHref, whatsappHref } from "@/lib/format";
import { PhoneIcon, WhatsAppIcon } from "./icons";

/** Bara de jos, vizibilă permanent pe telefon: WhatsApp, apel și audit. */
export function MobileBar() {
  return (
    <nav
      aria-label="Contact rapid"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-edge bg-panel pb-[env(safe-area-inset-bottom)] text-paper lg:hidden"
    >
      <ul className="grid grid-cols-3">
        <li>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 items-center justify-center gap-2 text-[15px] font-semibold active:bg-edge"
          >
            <WhatsAppIcon className="size-5" />
            WhatsApp
          </a>
        </li>
        <li className="border-l border-edge">
          <a href={telHref} className="flex h-16 items-center justify-center gap-2 text-[15px] font-semibold active:bg-edge">
            <PhoneIcon className="size-5" />
            Sună
          </a>
        </li>
        <li>
          <Link
            href="/#contact"
            className="flex h-16 items-center justify-center bg-accent font-display text-[15px] font-extrabold text-ink"
          >
            Audit gratuit
          </Link>
        </li>
      </ul>
    </nav>
  );
}
