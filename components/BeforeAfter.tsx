"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import * as m from "motion/react-m";

/** „Înainte / După": când cardul ajunge pe ecran, „După" se umple cu accentul. */
export function BeforeAfter({ inainte, dupa }: { inainte: string; dupa: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });

  return (
    <div ref={ref} className="mt-6 grid gap-2.5 sm:grid-cols-2">
      <div className="rounded-2xl border border-rule p-4 md:p-5">
        <p className="eyebrow text-graphite">Înainte</p>
        <p className="mt-2 text-graphite">{inainte}</p>
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-ink p-4 md:p-5">
        <m.span
          aria-hidden="true"
          className="absolute inset-0 origin-left bg-accent"
          initial={false}
          animate={{ scaleX: inView ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <div className="relative">
          <p className="eyebrow">După</p>
          <p className="mt-2 font-semibold">{dupa}</p>
        </div>
      </div>
    </div>
  );
}
