import Link from "next/link";
import { siteConfig } from "@/site.config";
import { telHref } from "@/lib/format";
import { PhoneIcon } from "./icons";

const LINKURI = [
  { href: "/#ce-automatizam", text: "Ce automatizăm" },
  { href: "/#cum-lucram", text: "Cum lucrăm" },
  { href: "/#pachete", text: "Pachete" },
  { href: "/#proiecte", text: "Proiecte" },
  { href: "/#intrebari", text: "Întrebări" },
];

export function Header({ tema = "inchis" }: { tema?: "inchis" | "deschis" }) {
  const inchis = tema === "inchis";
  return (
    <header className="wrap flex items-center justify-between gap-4 py-5">
      <Link href="/" className="font-display text-lg font-extrabold tracking-tight">
        {siteConfig.brand}
      </Link>
      <nav aria-label="Meniu principal" className="hidden lg:block">
        <ul className={`flex gap-8 text-[15px] ${inchis ? "text-mute" : "text-graphite"}`}>
          {LINKURI.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`transition-colors ${inchis ? "hover:text-paper" : "hover:text-ink"}`}
              >
                {l.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        <a
          href={telHref}
          className={`hidden items-center gap-2 text-[15px] font-semibold transition-colors lg:inline-flex ${
            inchis ? "hover:text-accent" : "hover:text-graphite"
          }`}
        >
          <PhoneIcon className="size-4" />
          {siteConfig.contact.telefonAfisat}
        </a>
        <Link
          href="/#contact"
          className={`btn min-h-11 px-5 text-sm ${inchis ? "btn-ghost" : "btn-ink"}`}
        >
          Audit gratuit
        </Link>
      </div>
    </header>
  );
}
