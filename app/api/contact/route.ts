import { Resend } from "resend";
import { siteConfig } from "@/site.config";

/*
  Primește cererea din formular și o trimite pe e-mail prin Resend.
  Cheia stă în .env (RESEND_API_KEY) și nu ajunge niciodată în browser.
*/

type Cerere = {
  nume?: unknown;
  telefon?: unknown;
  mesaj?: unknown;
  acord?: unknown;
  website?: unknown;
};

// Limită simplă: cel mult 5 cereri la 10 minute de la aceeași adresă.
const FEREASTRA_MS = 10 * 60 * 1000;
const MAXIM = 5;
const incercari = new Map<string, number[]>();

function preaMulte(ip: string): boolean {
  const acum = Date.now();
  const recente = (incercari.get(ip) ?? []).filter((t) => acum - t < FEREASTRA_MS);
  recente.push(acum);
  incercari.set(ip, recente);
  if (incercari.size > 5000) incercari.clear();
  return recente.length > MAXIM;
}

function text(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function raspuns(status: number, body: Record<string, unknown>) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  let date: Cerere;
  try {
    date = (await request.json()) as Cerere;
  } catch {
    return raspuns(400, { error: "Cererea nu a putut fi citită." });
  }

  // Honeypot: dacă e completat, e un robot. Răspundem „ok" și nu trimitem nimic.
  if (text(date.website, 200) !== "") {
    return raspuns(200, { ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "necunoscut";
  if (preaMulte(ip)) {
    return raspuns(429, { error: "Prea multe cereri într-un timp scurt." });
  }

  const nume = text(date.nume, 100);
  const telefon = text(date.telefon, 20);
  const mesaj = text(date.mesaj, 2000);

  if (nume.length < 2) {
    return raspuns(400, { error: "Scrie numele tău." });
  }
  if (!/^[0-9+ ()./-]{7,20}$/.test(telefon) || telefon.replace(/\D/g, "").length < 7) {
    return raspuns(400, { error: "Numărul de telefon nu pare corect." });
  }
  if (mesaj.length < 2) {
    return raspuns(400, { error: "Scrie în câteva cuvinte ce te ține pe loc." });
  }
  if (date.acord !== true) {
    return raspuns(400, { error: "E nevoie de acordul tău pentru a te putea contacta." });
  }

  const cheie = process.env.RESEND_API_KEY;
  if (!cheie) {
    console.error("[contact] Lipsește RESEND_API_KEY. Vezi README.");
    return raspuns(500, { error: "Formularul nu e încă legat la e-mail." });
  }

  const catre = process.env.CONTACT_TO || siteConfig.contact.email;
  const dela = process.env.CONTACT_FROM || `${siteConfig.brand} <onboarding@resend.dev>`;

  const resend = new Resend(cheie);
  const { error } = await resend.emails.send({
    from: dela,
    to: catre,
    subject: `Cerere audit: ${nume}`,
    text: [
      "Cerere nouă de audit gratuit de pe site.",
      "",
      `Nume: ${nume}`,
      `Telefon: ${telefon}`,
      "",
      "Ce îl/o ține cel mai mult pe loc:",
      mesaj,
      "",
      "Acord GDPR: da",
    ].join("\n"),
  });

  if (error) {
    console.error("[contact] Resend:", error);
    return raspuns(502, { error: "E-mailul nu a putut fi trimis." });
  }

  return raspuns(200, { ok: true });
}
