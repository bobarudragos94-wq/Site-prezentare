import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politică de confidențialitate",
  description: "Cum sunt folosite datele trimise prin formularul de contact.",
  alternates: { canonical: "/politica-de-confidentialitate" },
};

export default function Page() {
  return (
    <LegalPage
      titlu="Politică de confidențialitate"
      intro="Acesta este un text-schelet, nu o politică finală. Completează fiecare punct împreună cu un jurist sau cu un specialist GDPR, înainte de lansare."
      sectiuni={[
        {
          titlu: "Cine răspunde de date",
          indicatii: [
            "Denumirea firmei, CUI, sediul și datele de contact ale operatorului.",
            "Adresa de e-mail la care se pot trimite cereri legate de date.",
          ],
        },
        {
          titlu: "Ce date se colectează",
          indicatii: [
            "Prin formular: nume, telefon și mesajul scris de vizitator.",
            "Prin WhatsApp, telefon sau e-mail: datele pe care vizitatorul le trimite singur.",
          ],
        },
        {
          titlu: "De ce și pe ce temei",
          indicatii: [
            "Scopul: contactarea persoanei pentru auditul gratuit și pentru o propunere.",
            "Temeiul legal (de exemplu consimțământul, bifat în formular).",
          ],
        },
        {
          titlu: "Cine mai primește datele",
          indicatii: [
            "Furnizorul de trimitere e-mail (Resend) și furnizorul de găzduire (Vercel).",
            "Dacă datele ajung în afara Uniunii Europene și cu ce garanții.",
          ],
        },
        {
          titlu: "Cât timp se păstrează",
          indicatii: ["Perioada de păstrare a cererilor și ce se întâmplă cu ele după aceea."],
        },
        {
          titlu: "Drepturile tale",
          indicatii: [
            "Acces, rectificare, ștergere, restricționare, opoziție, portabilitate, retragerea acordului.",
            "Cum se face o cerere și dreptul de a depune plângere la ANSPDCP.",
          ],
        },
        {
          titlu: "Cookie-uri",
          indicatii: [
            "Site-ul nu folosește cookie-uri de urmărire și nici unelte de analiză. Actualizează acest punct dacă adaugi vreuna.",
          ],
        },
      ]}
    />
  );
}
