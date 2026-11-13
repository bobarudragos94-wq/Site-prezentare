import Link from "next/link";
import { siteConfig } from "@/site.config";
import { mailHref, telHref } from "@/lib/format";

export function Footer() {
  const f = siteConfig.firma;
  return (
    <footer className="border-t border-edge bg-night pb-28 pt-12 text-[15px] text-mute lg:pb-12">
      <div className="wrap grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-extrabold text-paper">{siteConfig.brand}</p>
          <p className="mt-3 max-w-[22rem]">Site-uri și automatizări pentru firme mici din România.</p>
        </div>
        <div>
          <p className="eyebrow text-paper">Date firmă</p>
          <address className="mt-3 flex flex-col gap-1 not-italic">
            <span>{f.denumire}</span>
            <span>CUI: {f.cui}</span>
            <span>Reg. Com.: {f.regCom}</span>
            <span>
              {f.adresa}, {f.oras}, {f.judet}
            </span>
          </address>
        </div>
        <div>
          <p className="eyebrow text-paper">Contact și legal</p>
          <ul className="mt-3 flex flex-col gap-1">
            <li>
              <a href={telHref} className="hover:text-paper">
                {siteConfig.contact.telefonAfisat}
              </a>
            </li>
            <li>
              <a href={mailHref} className="hover:text-paper">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="mt-3">
              <Link href="/politica-de-confidentialitate" className="underline underline-offset-4 hover:text-paper">
                Politică de confidențialitate
              </Link>
            </li>
            <li>
              <Link href="/termeni" className="underline underline-offset-4 hover:text-paper">
                Termeni și condiții
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="wrap mt-10">Acest site nu folosește cookie-uri de urmărire.</p>
    </footer>
  );
}
