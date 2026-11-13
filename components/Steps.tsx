"use client";

import { useRef } from "react";
import { useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";
import { Reveal, RevealTitle } from "./Reveal";

const PASI = [
  {
    titlu: "Audit gratuit de 20 de minute",
    text: "Vorbim la telefon sau pe video. Îmi arăți cum lucrezi acum și unde pierzi timp.",
  },
  {
    titlu: "Propunere cu preț fix",
    text: "Primești în scris ce fac, cât durează și cât costă. Fără costuri ascunse.",
  },
  {
    titlu: "Livrare și suport",
    text: "Îți predau totul gata de folosit și îți arăt cum merge. Dacă apare ceva, mă suni.",
  },
];

export function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="cum-lucram" aria-labelledby="t-pasi" className="bg-night py-20 text-paper md:py-32">
      <div className="wrap">
        <RevealTitle id="t-pasi" className="text-[clamp(2.4rem,9vw,6rem)]">
          Cum lucrăm
        </RevealTitle>
        <Reveal>
          <p className="mt-5 max-w-[36rem] text-lg text-mute md:text-xl">
            Trei pași. Știi de la început ce primești și cât plătești.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-14 pl-9 md:mt-20 lg:pl-0 lg:pt-12">
          {/* Linia care se desenează pe măsură ce derulezi: verticală pe telefon, orizontală pe desktop. */}
          <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-[3px] bg-edge lg:bottom-auto lg:right-0 lg:h-[3px] lg:w-auto">
            <m.span
              className="block h-full w-full origin-top bg-accent [transform:scaleY(var(--p))] lg:origin-left lg:[transform:scaleX(var(--p))]"
              style={{ "--p": p } as unknown as React.CSSProperties}
            />
          </div>
          <ol className="grid gap-12 lg:grid-cols-3 lg:gap-10">
          {PASI.map((pas, i) => (
            <Reveal as="li" key={pas.titlu} delay={i * 0.1}>
              <span className="display block text-7xl text-accent md:text-8xl">{i + 1}</span>
              <h3 className="display mt-4 text-2xl md:text-3xl">{pas.titlu}</h3>
              <p className="mt-3 max-w-[26rem] text-mute">{pas.text}</p>
            </Reveal>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
