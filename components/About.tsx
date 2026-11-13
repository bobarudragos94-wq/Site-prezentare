import Image from "next/image";
import { siteConfig } from "@/site.config";
import { Reveal, RevealTitle } from "./Reveal";

export function About() {
  const d = siteConfig.despre;
  return (
    <section id="despre" aria-labelledby="t-despre" className="border-t border-rule bg-paper py-20 text-ink md:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[26rem] overflow-hidden rounded-3xl shadow-[8px_8px_0_0_var(--color-ink)]">
            {d.poza ? (
              <Image
                src={d.poza}
                alt={`Portret ${d.nume}`}
                fill
                sizes="(min-width: 1024px) 26rem, 90vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 border-2 border-dashed border-ink bg-sheet p-6 text-center rounded-3xl">
                <span className="display text-2xl">Loc pentru poză</span>
                <span className="text-[15px] text-graphite">Se setează din site.config.ts</span>
              </div>
            )}
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <p className="eyebrow text-graphite">Despre mine</p>
          <RevealTitle id="t-despre" className="mt-4 text-[clamp(2.2rem,8vw,5rem)]">
            {d.nume}
          </RevealTitle>
          <Reveal>
            <p className="mt-3 text-lg font-semibold">{d.rol}</p>
            <div className="mt-6 flex max-w-[36rem] flex-col gap-3 text-lg text-graphite">
              {d.randuri.map((r) => (
                <p key={r}>{r}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
