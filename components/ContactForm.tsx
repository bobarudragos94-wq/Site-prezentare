"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "./icons";

type Stare = "gol" | "trimite" | "trimis" | "eroare";

const camp =
  "mt-2 block w-full rounded-2xl border-[1.5px] border-edge bg-panel px-4 py-3.5 text-base text-paper placeholder:text-mute/70 transition-colors hover:border-mute focus:border-accent";

export function ContactForm() {
  const [stare, setStare] = useState<Stare>("gol");
  const [mesajEroare, setMesajEroare] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    setStare("trimite");
    setMesajEroare("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nume: d.get("nume"),
          telefon: d.get("telefon"),
          mesaj: d.get("mesaj"),
          acord: d.get("acord") === "on",
          // Câmp-capcană: oamenii nu îl văd, roboții îl completează.
          website: d.get("website"),
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setMesajEroare(json.error ?? "");
        setStare("eroare");
        return;
      }
      form.reset();
      setStare("trimis");
    } catch {
      setStare("eroare");
    }
  }

  if (stare === "trimis") {
    return (
      <div role="status" className="rounded-3xl bg-accent p-7 text-ink md:p-10">
        <p className="display text-3xl md:text-4xl">Am primit cererea ta.</p>
        <p className="mt-3 text-lg">Te sun cât pot de repede, ca să stabilim cele 20 de minute de audit.</p>
        <button type="button" onClick={() => setStare("gol")} className="mt-6 font-semibold underline underline-offset-4">
          Trimite încă o cerere
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="f-nume" className="font-semibold">
          Numele tău
        </label>
        <input id="f-nume" name="nume" type="text" required minLength={2} maxLength={100} autoComplete="name" className={camp} />
      </div>
      <div>
        <label htmlFor="f-telefon" className="font-semibold">
          Telefon
        </label>
        <input
          id="f-telefon"
          name="telefon"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          pattern="[0-9+\s\(\)\.\/\-]{7,20}"
          title="Scrie un număr de telefon, de exemplu 07xx xxx xxx"
          maxLength={20}
          className={camp}
        />
      </div>
      <div>
        <label htmlFor="f-mesaj" className="font-semibold">
          Ce te ține cel mai mult pe loc?
        </label>
        <textarea
          id="f-mesaj"
          name="mesaj"
          required
          rows={4}
          maxLength={2000}
          placeholder="De exemplu: răspund prea târziu la mesaje, pierd timp cu facturile…"
          className={camp}
        />
      </div>

      {/* Honeypot anti-spam: ascuns pentru oameni și pentru cititoarele de ecran. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="f-website">Nu completa acest câmp</label>
        <input id="f-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="f-acord"
          name="acord"
          type="checkbox"
          required
          className="mt-0.5 size-6 shrink-0 accent-[var(--color-accent)]"
        />
        <label htmlFor="f-acord" className="text-[15px] text-mute">
          Sunt de acord ca datele de mai sus să fie folosite pentru a fi contactat, conform{" "}
          <Link href="/politica-de-confidentialitate" className="text-paper underline underline-offset-4 hover:text-accent">
            Politicii de confidențialitate
          </Link>
          .
        </label>
      </div>

      <button type="submit" disabled={stare === "trimite"} className="btn btn-accent disabled:opacity-60">
        {stare === "trimite" ? "Se trimite…" : "Cere audit gratuit"}
        {stare === "trimite" ? null : <ArrowIcon className="arrow size-5" />}
      </button>

      <div role="alert" aria-live="assertive">
        {stare === "eroare" ? (
          <p className="rounded-2xl border-[1.5px] border-accent p-4 text-paper">
            {mesajEroare || "Nu am putut trimite cererea."} Încearcă din nou sau scrie-mi direct pe WhatsApp.
          </p>
        ) : null}
      </div>
    </form>
  );
}
