import { siteConfig } from "@/site.config";
import { Reveal, RevealTitle } from "./Reveal";

export function Faq() {
  return (
    <section id="intrebari" aria-labelledby="t-faq" className="border-t border-rule bg-paper py-20 text-ink md:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <RevealTitle id="t-faq" className="text-[clamp(2.4rem,9vw,5rem)]">
            Întrebări frecvente
          </RevealTitle>
        </div>
        <Reveal className="lg:col-span-7">
          <ul className="border-b border-ink">
            {siteConfig.intrebari.map((q) => (
              <li key={q.intrebare} className="border-t border-ink">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 md:py-6">
                    <h3 className="display text-xl md:text-2xl">{q.intrebare}</h3>
                    <span
                      aria-hidden="true"
                      className="relative size-9 shrink-0 rounded-full border-[1.5px] border-ink transition-[background-color,transform] duration-300 group-open:rotate-45 group-open:bg-accent"
                    >
                      <span className="absolute left-1/2 top-1/2 h-[2px] w-3.5 -translate-x-1/2 -translate-y-1/2 bg-ink" />
                      <span className="absolute left-1/2 top-1/2 h-3.5 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-ink" />
                    </span>
                  </summary>
                  <p className="max-w-[40rem] pb-6 text-graphite md:text-lg">{q.raspuns}</p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
