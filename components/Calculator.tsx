"use client";

import { useEffect, useId, useRef, useState } from "react";
import { animate, useReducedMotion } from "motion/react";
import { siteConfig } from "@/site.config";
import { cuPuncte } from "@/lib/format";
import { Reveal, RevealTitle } from "./Reveal";
import { ArrowIcon } from "./icons";

const c = siteConfig.calculator;

/** Cifră care „numără" până la noua valoare. */
function Numar({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const curent = useRef(value);
  const [initial] = useState(value);
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (reduced) {
      curent.current = value;
      node.textContent = cuPuncte(value);
      return;
    }
    const controls = animate(curent.current, value, {
      duration: 0.45,
      ease: "easeOut",
      onUpdate: (v) => {
        curent.current = v;
        node.textContent = cuPuncte(v);
      },
    });
    return () => controls.stop();
  }, [value, reduced]);

  return (
    <span ref={ref} aria-hidden="true" className="tabular-nums">
      {cuPuncte(initial)}
    </span>
  );
}

function Cursor({
  label,
  unitate,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  unitate: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  const id = useId();
  const fill = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-lg font-semibold">
          {label}
        </label>
        <output htmlFor={id} className="display whitespace-nowrap text-3xl tabular-nums md:text-4xl">
          {value} <span className="text-lg md:text-xl">{unitate}</span>
        </output>
      </div>
      <input
        id={id}
        type="range"
        className="slider mt-2"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--fill": `${fill}%` } as React.CSSProperties}
      />
    </div>
  );
}

export function Calculator() {
  const [ore, setOre] = useState(c.oreImplicit);
  const [cost, setCost] = useState(c.costOrarImplicit);

  const peAn = ore * cost * 52;
  const peLuna = peAn / 12;

  return (
    <section id="calculator" aria-labelledby="t-calc" className="bg-accent py-20 text-ink md:py-32">
      <div className="wrap">
        <RevealTitle id="t-calc" className="max-w-[18ch] text-[clamp(2.2rem,8vw,5.25rem)]">
          Cât te costă munca repetitivă?
        </RevealTitle>
        <Reveal>
          <p className="mt-5 max-w-[36rem] text-lg md:text-xl">
            Mișcă cele două cursoare. Socoteala e a ta, cu cifrele tale.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-9">
            <Cursor
              label="Ore pierdute pe săptămână"
              unitate={ore === 1 ? "oră" : "ore"}
              value={ore}
              min={c.oreMin}
              max={c.oreMax}
              step={1}
              onChange={setOre}
            />
            <Cursor
              label="Cât costă o oră din timpul tău"
              unitate={c.moneda}
              value={cost}
              min={c.costOrarMin}
              max={c.costOrarMax}
              step={c.costOrarPas}
              onChange={setCost}
            />
            <p className="text-[15px]">
              Calcul orientativ: ore × cost orar × 52 de săptămâni pe an.
            </p>
          </div>

          <div className="rounded-3xl bg-ink p-6 text-paper md:p-10">
            <p className="sr-only" aria-live="polite">
              Cost estimat: {cuPuncte(peLuna)} {c.moneda} pe lună, {cuPuncte(peAn)} {c.moneda} pe an.
            </p>
            <dl className="flex flex-col gap-8">
              <div>
                <dt className="eyebrow text-mute">Pe lună</dt>
                <dd className="display mt-2 text-[clamp(2.6rem,11vw,5rem)]">
                  <Numar value={peLuna} /> <span className="text-[0.4em]">{c.moneda}</span>
                </dd>
              </div>
              <div className="border-t border-edge pt-8">
                <dt className="eyebrow text-mute">Pe an</dt>
                <dd className="display mt-2 text-[clamp(2.6rem,11vw,5rem)] text-accent">
                  <Numar value={peAn} /> <span className="text-[0.4em]">{c.moneda}</span>
                </dd>
              </div>
            </dl>
            <a href="#contact" className="btn btn-accent mt-9 w-full">
              Cere audit gratuit
              <ArrowIcon className="arrow size-5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
