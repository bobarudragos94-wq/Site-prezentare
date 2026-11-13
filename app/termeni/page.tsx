import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: "Condițiile în care sunt oferite serviciile prezentate pe site.",
  alternates: { canonical: "/termeni" },
};

export default function Page() {
  return (
    <LegalPage
      titlu="Termeni și condiții"
      intro="Acesta este un text-schelet, nu termenii finali. Completează fiecare punct împreună cu un jurist, înainte de lansare."
      sectiuni={[
        {
          titlu: "Cine oferă serviciile",
          indicatii: ["Denumirea firmei, CUI, număr la Registrul Comerțului, sediu și date de contact."],
        },
        {
          titlu: "Ce servicii sunt oferite",
          indicatii: [
            "Descrierea pachetelor și ce include fiecare.",
            "Faptul că prețul final și termenul se stabilesc în scris, în propunere.",
          ],
        },
        {
          titlu: "Prețuri și plată",
          indicatii: [
            "Moneda, momentul plății, avans (dacă există) și modul de facturare.",
            "Costurile separate: găzduire, domeniu, consum de AI.",
          ],
        },
        {
          titlu: "Livrare și suport",
          indicatii: [
            "Cum se predă lucrarea și ce înseamnă că e acceptată.",
            "Ce acoperă suportul, pe ce perioadă și în cât timp se răspunde.",
          ],
        },
        {
          titlu: "Renunțare",
          indicatii: ["Cum poate renunța clientul și ce se întâmplă cu sumele deja plătite."],
        },
        {
          titlu: "Proprietate și răspundere",
          indicatii: [
            "Cui aparține ce s-a construit, după plată.",
            "Limitele răspunderii pentru întreruperi ale serviciilor altor furnizori.",
          ],
        },
        {
          titlu: "Lege aplicabilă și litigii",
          indicatii: ["Legea română, instanța competentă și datele pentru reclamații (ANPC, SOL)."],
        },
      ]}
    />
  );
}
