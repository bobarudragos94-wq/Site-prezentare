/**
 * TOATE DATELE SITE-ULUI SE SCHIMBĂ DE AICI.
 * Modifici textul dintre ghilimele, salvezi, iar site-ul se actualizează.
 * Tot ce e între [paranteze drepte] e de completat.
 */

export type Pachet = {
  nume: string;
  descriere: string;
  /** Preț, în moneda de mai jos. */
  pret: number;
  /** Text opțional după preț, de exemplu „+ costurile de AI". */
  dupaPret?: string;
  /** Text mic de sub preț. */
  nota: string;
  include: string[];
};

export type Proiect = {
  /** Tipul firmei, de exemplu „Cabinet stomatologic". */
  firma: string;
  problema: string;
  solutie: string;
  rezultat: string;
  /** true = cardul afișează vizibil eticheta „EXEMPLU". Pune false la proiectele reale. */
  exemplu: boolean;
};

export const siteConfig = {
  // ——— Brand ———
  brand: "[NUME BRAND]",
  /** Adresa finală a site-ului, fără „/" la final. Folosită în sitemap și la distribuirea pe rețele. */
  url: "https://exemplu.ro",
  /** Apare în Google și când dai share la link. */
  titluSeo: "Site-uri și automatizări pentru firme mici",
  descriereSeo:
    "Site-uri de prezentare cu programări online și automatizări pentru firme mici din România. Preț fix, audit gratuit de 20 de minute.",

  // ——— Contact ———
  contact: {
    /** Cum apare numărul pe site. */
    telefonAfisat: "07xx xxx xxx",
    /** Numărul pentru apel, în format internațional, fără spații. */
    telefonApel: "+40700000000",
    /** Numărul de WhatsApp: doar cifre, cu 40 în față, fără „+". */
    whatsapp: "40700000000",
    /** Mesajul precompletat când cineva apasă pe WhatsApp. */
    mesajWhatsapp: "Bună! Aș vrea un audit gratuit pentru firma mea.",
    /** Adresa afișată pe site. Aici ajung și cererile din formular, dacă nu setezi CONTACT_TO în .env. */
    email: "contact@exemplu.ro",
  },

  // ——— Monedă și pachete ———
  moneda: { simbol: "€", cod: "EUR" },

  pachete: [
    {
      nume: "Site cu programări",
      descriere: "Site de prezentare cu programări online. Fără AI.",
      pret: 300,
      nota: "Preț fix, plată unică",
      include: [
        "Site de prezentare, gândit întâi pentru telefon",
        "Programări online, direct în calendarul tău",
        "Buton de WhatsApp și formular de contact",
      ],
    },
    {
      nume: "Automatizare cu suport",
      descriere: "Site sau automatizare complexă, cu suport inclus.",
      pret: 500,
      nota: "Preț fix, plată unică",
      include: [
        "Site sau automatizare făcută pe felul tău de lucru",
        "Legături între uneltele pe care le folosești deja",
        "Suport după livrare",
      ],
    },
    {
      nume: "Soluție cu AI",
      descriere: "Pentru răspunsuri, documente sau date care cer mai mult decât reguli fixe.",
      pret: 500,
      dupaPret: "+ costurile de AI",
      nota: "Costurile de AI se plătesc separat, după consum",
      include: [
        "Soluție construită în jurul problemei tale",
        "Costuri de AI estimate dinainte, în propunere",
        "Suport după livrare",
      ],
    },
  ] satisfies Pachet[],

  // ——— Calculator ———
  calculator: {
    /** Moneda în care omul își gândește costul orar. */
    moneda: "lei",
    oreImplicit: 5,
    oreMin: 1,
    oreMax: 40,
    costOrarImplicit: 50,
    costOrarMin: 20,
    costOrarMax: 300,
    costOrarPas: 5,
  },

  // ——— Proiecte (înlocuiește exemplele cu proiecte reale) ———
  proiecte: [
    {
      firma: "Cabinet stomatologic",
      problema: "Recepția nu apuca să răspundă la toate mesajele.",
      solutie: "Răspuns automat pe WhatsApp și programări online, legate de calendar.",
      rezultat: "Pacienții se programează singuri, la orice oră.",
      exemplu: true,
    },
    {
      firma: "Birou de contabilitate",
      problema: "Rapoartele lunare se făceau de mână, din mai multe tabele.",
      solutie: "Datele se adună automat într-un singur loc, iar raportul se face singur.",
      rezultat: "Raportul e gata fără copiat dintr-un tabel în altul.",
      exemplu: true,
    },
    {
      firma: "Service auto",
      problema: "Ofertele trimise rămâneau fără răspuns și nimeni nu mai revenea.",
      solutie: "Mesaj automat de reamintire, la câteva zile după ofertă.",
      rezultat: "Fiecare cerere primește un răspuns și o urmare.",
      exemplu: true,
    },
  ] satisfies Proiect[],

  // ——— Despre mine ———
  despre: {
    nume: "[NUMELE TĂU]",
    rol: "Site-uri și automatizări",
    /** Pune poza în folderul „public" și scrie aici calea, de exemplu "/poza.jpg". Gol = apare un loc rezervat. */
    poza: "",
    randuri: [
      "Fac site-uri și automatizări pentru firme mici din România.",
      "Lucrez direct cu tine, fără intermediari, și îți explic totul pe înțelesul tău.",
      "Dacă o automatizare nu merită banii, îți spun de la început.",
      "[De completat: un rând despre tine și experiența ta.]",
    ],
  },

  // ——— Întrebări frecvente ———
  intrebari: [
    {
      intrebare: "Cât durează?",
      raspuns:
        "Depinde de proiect. Un site simplu e gata mai repede decât o automatizare complexă. Termenul exact îl primești în scris, în propunere, înainte să începem.",
    },
    {
      intrebare: "Ce se întâmplă cu datele mele?",
      raspuns:
        "Rămân ale tale. Le folosesc doar ca să construiesc ce am stabilit împreună. Nu le vând și nu le dau mai departe. La final primești acces la tot ce am făcut.",
    },
    {
      intrebare: "Ce fac dacă se strică ceva?",
      raspuns:
        "Îmi scrii pe WhatsApp sau mă suni și mă uit cât pot de repede. Ce acoperă suportul scrie clar în propunere, ca să știi dinainte la ce să te aștepți.",
    },
    {
      intrebare: "Am nevoie de cunoștințe tehnice?",
      raspuns:
        "Nu. Dacă folosești WhatsApp și e-mail, e de ajuns. La predare îți arăt pas cu pas cum funcționează totul.",
    },
    {
      intrebare: "Cât costă lunar?",
      raspuns:
        "Prețul pachetului se plătește o singură dată. Lunar pot apărea doar costuri către alți furnizori: găzduirea site-ului, domeniul și, la soluțiile cu AI, consumul de AI. Le afli pe toate din propunere, înainte să începem.",
    },
    {
      intrebare: "Pot renunța oricând?",
      raspuns:
        "Da. Nu există abonament obligatoriu și nici contract pe termen lung. Ce am construit pentru tine rămâne al tău.",
    },
  ],

  // ——— Date firmă (apar în subsol și în paginile legale) ———
  firma: {
    denumire: "[DENUMIRE FIRMĂ] SRL",
    cui: "[CUI]",
    regCom: "[Nr. Reg. Com.]",
    adresa: "[Stradă și număr]",
    oras: "[Oraș]",
    judet: "[Județ]",
  },
};

export type SiteConfig = typeof siteConfig;
