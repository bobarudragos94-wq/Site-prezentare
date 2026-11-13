"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";

/*
  Animația-semnătură, din elemente DOM/SVG:
  0 gol → 1 mesaj de la client → 2 „scrie…" → 3 răspuns automat → 4 programare în calendar → 5 rând în tabel.
  Pornește din starea completă (5), ca pagina să fie întreagă și fără JavaScript sau cu „reduce motion".
*/
const PAUZA: Record<number, number> = { 0: 550, 1: 1300, 2: 1100, 3: 1500, 4: 1500, 5: 3400 };

const pop = {
  off: { opacity: 0, y: 14, scale: 0.94, transition: { duration: 0.2 } },
  on: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 380, damping: 26 },
  },
};

const PASI = [
  { nume: "Mesaj", de: 1 },
  { nume: "Răspuns", de: 3 },
  { nume: "Programare", de: 4 },
  { nume: "Tabel", de: 5 },
];

const ZILE = ["Lu", "Ma", "Mi", "Jo", "Vi"];

export function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.25 });
  const reduced = useReducedMotion();
  const [stage, setStage] = useState(5);
  const active = inView && !reduced;

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setStage((s) => (s + 1) % 6), PAUZA[stage]);
    return () => clearTimeout(t);
  }, [stage, active]);

  const s = reduced ? 5 : stage;

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Exemplu animat: un client scrie pe WhatsApp, primește pe loc un răspuns automat, programarea apare în calendar și un rând nou se completează în tabelul de clienți."
      className="rounded-3xl border border-edge bg-panel p-4 shadow-[6px_6px_0_0_var(--color-accent)] sm:p-5 lg:p-6 lg:shadow-[12px_12px_0_0_var(--color-accent)]"
    >
      <div aria-hidden="true" className="flex flex-col gap-3 text-sm lg:text-[15px]">
        {/* Progresul buclei */}
        <div className="grid grid-cols-4 gap-1.5">
          {PASI.map((p) => (
            <div key={p.nume}>
              <div className="h-[3px] overflow-hidden bg-edge">
                <m.div
                  className="h-full origin-left bg-accent"
                  initial={false}
                  animate={{ scaleX: s >= p.de ? 1 : 0 }}
                  transition={{ duration: s >= p.de ? 0.6 : 0.2, ease: "easeOut" }}
                />
              </div>
              <span
                className={`mt-1.5 block text-xs font-semibold transition-colors duration-300 ${
                  s >= p.de ? "text-paper" : "text-mute"
                }`}
              >
                {p.nume}
              </span>
            </div>
          ))}
        </div>

        {/* WhatsApp */}
        <p className="eyebrow mt-1 text-xs text-mute">WhatsApp</p>
        <div className="flex flex-col gap-2">
          <m.div
            initial={false}
            animate={s >= 1 ? "on" : "off"}
            variants={pop}
            className="max-w-[84%] origin-bottom-left self-start rounded-2xl rounded-bl-md bg-edge px-3.5 py-2.5 leading-snug"
          >
            Bună ziua! Aveți liber mâine dimineață?
            <span className="mt-0.5 block text-xs text-mute">09:41</span>
          </m.div>

          <div className="relative flex flex-col">
            <div
              className={`absolute right-0 top-0 flex gap-1 rounded-2xl rounded-br-md bg-edge px-3.5 py-3 transition-opacity duration-200 ${
                s === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="size-1.5 animate-typing rounded-full bg-paper"
                  style={{ animationDelay: `${d * 0.15}s` }}
                />
              ))}
            </div>
            <m.div
              initial={false}
              animate={s >= 3 ? "on" : "off"}
              variants={pop}
              className="max-w-[84%] origin-bottom-right self-end rounded-2xl rounded-br-md bg-accent px-3.5 py-2.5 font-semibold leading-snug text-ink"
            >
              Bună ziua! Da, mâine la 10:30 e liber. V-am trecut în calendar.
              <span className="mt-0.5 block text-xs font-normal">09:41 · răspuns automat</span>
            </m.div>
          </div>
        </div>

        {/* Calendar */}
        <p className="eyebrow mt-1 text-xs text-mute">Calendar</p>
        <div className="grid grid-cols-5 gap-1.5">
          {ZILE.map((z) => {
            const azi = z === "Jo" && s >= 4;
            return (
              <span
                key={z}
                className={`rounded-lg py-1.5 text-center text-xs font-semibold transition-colors duration-300 ${
                  azi ? "bg-accent text-ink" : "bg-night text-mute"
                }`}
              >
                {z}
              </span>
            );
          })}
        </div>
        <m.div
          initial={false}
          animate={s >= 4 ? "on" : "off"}
          variants={pop}
          className="flex origin-left items-center gap-3 rounded-xl border border-edge bg-night px-3.5 py-2.5"
        >
          <b className="tabular-nums text-accent">10:30</b>
          <span className="text-mute">Maria P. · programare nouă</span>
        </m.div>

        {/* Tabel */}
        <p className="eyebrow mt-1 text-xs text-mute">Tabel clienți</p>
        <div className="tabular-nums">
          <div className="grid grid-cols-[1.2fr_1fr_auto] gap-2 pb-2 text-xs font-semibold uppercase tracking-wider text-mute">
            <span>Nume</span>
            <span>Când</span>
            <span>Stare</span>
          </div>
          <div className="grid grid-cols-[1.2fr_1fr_auto] items-center gap-2 border-t border-edge py-2 text-mute">
            <span>Andrei D.</span>
            <span>Mi 14:00</span>
            <span>Confirmat</span>
          </div>
          <m.div
            initial={false}
            animate={s >= 5 ? "on" : "off"}
            variants={pop}
            className="grid origin-left grid-cols-[1.2fr_1fr_auto] items-center gap-2 border-t border-edge pt-2"
          >
            <span>Maria P.</span>
            <span>Jo 10:30</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent py-0.5 pl-1.5 pr-2.5 text-xs font-semibold text-ink">
              <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <m.path
                  d="M2 6.5l2.5 2.5L10 3.5"
                  initial={false}
                  animate={{ pathLength: s >= 5 ? 1 : 0 }}
                  transition={{ duration: 0.35, delay: s >= 5 ? 0.3 : 0 }}
                />
              </svg>
              Confirmat
            </span>
          </m.div>
        </div>
      </div>
    </div>
  );
}
