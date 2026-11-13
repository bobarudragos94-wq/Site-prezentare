import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MobileBar } from "./MobileBar";

type Sectiune = { titlu: string; indicatii: string[] };

/** Pagină legală-schelet: titluri gata puse, conținut marcat „DE COMPLETAT". */
export function LegalPage({ titlu, intro, sectiuni }: { titlu: string; intro: string; sectiuni: Sectiune[] }) {
  return (
    <>
      <div className="bg-night text-paper">
        <Header />
      </div>
      <main id="continut" className="bg-paper pb-20 pt-12 text-ink md:pb-28 md:pt-20">
        <div className="wrap max-w-[52rem]">
          <p className="inline-block rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
            De completat
          </p>
          <h1 className="display mt-6 text-[clamp(2.2rem,8vw,4.5rem)]">{titlu}</h1>
          <p className="mt-6 rounded-2xl border-2 border-dashed border-ink bg-sheet p-5 text-lg">{intro}</p>

          <div className="mt-12 flex flex-col gap-10">
            {sectiuni.map((s, i) => (
              <section key={s.titlu} aria-labelledby={`s-${i}`}>
                <h2 id={`s-${i}`} className="display text-2xl md:text-3xl">
                  {i + 1}. {s.titlu}
                </h2>
                <ul className="mt-4 flex flex-col gap-2 text-graphite">
                  {s.indicatii.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.6em] size-2 shrink-0 bg-ink" />
                      <span>
                        <strong className="text-ink">[De completat]</strong> {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="mt-14">
            <Link href="/" className="btn btn-ink">
              Înapoi la prima pagină
            </Link>
          </p>
        </div>
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
