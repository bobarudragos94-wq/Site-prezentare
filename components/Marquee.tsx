const LUCRURI = [
  "Site-uri de prezentare",
  "Programări online",
  "Răspuns automat pe WhatsApp",
  "Facturi și documente",
  "Rapoarte care se fac singure",
  "Oferte urmărite",
  "Tabele legate între ele",
];

/** Banda care curge sub hero. Doar CSS, fără JavaScript. */
export function Marquee() {
  return (
    <div className="overflow-hidden bg-accent py-4 text-ink md:py-6">
      <p className="sr-only">Ce putem construi: {LUCRURI.join(", ")}.</p>
      <div aria-hidden="true" className="marquee-track flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0">
            {LUCRURI.map((t) => (
              <li
                key={t}
                className="display flex items-center whitespace-nowrap text-2xl uppercase md:text-5xl"
              >
                {t}
                <span className="px-4 md:px-7">/</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
