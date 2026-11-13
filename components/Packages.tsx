import { siteConfig } from "@/site.config";
import { pret } from "@/lib/format";
import { Reveal, RevealTitle } from "./Reveal";

export function Packages() {
  return (
    <section id="pachete" aria-labelledby="t-pachete" className="bg-paper py-20 text-ink md:py-32">
      <div className="wrap">
        <RevealTitle id="t-pachete" className="text-[clamp(2.4rem,9vw,6rem)]">
          Pachete
        </RevealTitle>
        <Reveal>
          <p className="mt-5 max-w-[36rem] text-lg text-graphite md:text-xl">
            Prețuri fixe. Suma exactă o primești în scris, înainte să începem.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-5 md:mt-16 lg:grid-cols-3">
          {siteConfig.pachete.map((p, i) => (
            <Reveal as="li" key={p.nume} delay={i * 0.08}>
              <article className="lift flex h-full flex-col rounded-3xl border border-rule bg-sheet p-6 md:p-8">
                <h3 className="eyebrow text-graphite">{p.nume}</h3>
                <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="display text-6xl tabular-nums md:text-7xl">{pret(p.pret)}</span>
                  {"dupaPret" in p && p.dupaPret ? (
                    <span className="font-display text-lg font-extrabold">{p.dupaPret}</span>
                  ) : null}
                </p>
                <p className="mt-2 text-[15px] text-graphite">{p.nota}</p>
                <p className="mt-6 text-lg font-semibold">{p.descriere}</p>
                <ul className="mt-5 flex flex-col gap-3 border-t border-rule pt-5">
                  {p.include.map((x) => (
                    <li key={x} className="flex gap-3">
                      <span aria-hidden="true" className="mt-[0.55em] size-2 shrink-0 bg-ink" />
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <a href="#contact" className="btn btn-ink w-full">
                    Cere audit gratuit
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
