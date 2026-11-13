"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";

const CUVINTE = ["programările", "Excelul", "facturile", "ofertele", "rapoartele"];

/** Cuvântul din titlu care se schimbă la două secunde. Decorativ: cititoarele de ecran primesc textul fix. */
export function RotatingWord() {
  const [i, setI] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % CUVINTE.length), 2200);
    return () => clearInterval(t);
  }, [reduced]);

  return (
    <span aria-hidden="true" className="mt-[0.14em] block overflow-hidden py-[0.08em]">
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={CUVINTE[i]}
          className="inline-block bg-accent px-[0.16em] pb-[0.07em] pt-[0.02em] text-ink"
          initial={{ y: "115%" }}
          animate={{ y: 0 }}
          exit={{ y: "-115%" }}
          transition={{ duration: 0.36, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {CUVINTE[i]}
        </m.span>
      </AnimatePresence>
    </span>
  );
}
