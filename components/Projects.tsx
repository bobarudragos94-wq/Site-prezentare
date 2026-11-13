import { siteConfig } from "@/site.config";
import { Reveal, RevealTitle } from "./Reveal";

export function Projects() {
  const areExemple = siteConfig.proiecte.some((p) => p.exemplu);
  return (
    <section id="proiecte" aria-labelledby="t-proiecte" className="bg-paper py-20 text-ink md:py-32">
      <div className="wrap">
        <RevealTitle id="t-proiecte" className="text-[clamp(2.4rem,9vw,6rem)]">
          Proiecte
        </RevealTitle>
        <Reveal>
          <p className="mt-5 max-w-[36rem] text-lg text-graphite md:text-xl">
            Fiecare proiect pornește de la o problemă concretă.
            {areExemple ? " Cardurile marcate EXEMPLU arată doar cum va fi prezentat un proiect." : ""}
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-5 md:mt-16 lg:grid-cols-3">
          {siteConfig.proiecte.map((p, i) => (
            <Reveal as="li" key={p.firma} delay={i * 0.08}>
              <article
                className={`lift flex h-full flex-col rounded-3xl bg-sheet p-6 md:p-8 ${
                  p.exemplu ? "border-2 border-dashed border-ink" : "border border-rule"
                }`}
              >
                {p.exemplu ? (
                  <p className="mb-4 self-start rounded-full bg-ink px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">
                    Exemplu
                  </p>
                ) : null}
                <h3 className="display text-2xl md:text-3xl">{p.firma}</h3>
                <dl className="mt-7 flex flex-1 flex-col gap-5">
                  <div>
                    <dt className="eyebrow text-graphite">Problemă</dt>
                    <dd className="mt-1.5">{p.problema}</dd>
                  </div>
                  <div className="border-t border-rule pt-5">
                    <dt className="eyebrow text-graphite">Soluție</dt>
                    <dd className="mt-1.5">{p.solutie}</dd>
                  </div>
                  <div className="mt-auto rounded-2xl bg-accent p-4">
                    <dt className="eyebrow">Rezultat</dt>
                    <dd className="mt-1.5 font-semibold">{p.rezultat}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
