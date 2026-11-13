# Site de prezentare: site-uri și automatizări pentru firme mici

Site într-o singură pagină, în română, făcut cu Next.js (App Router), TypeScript, Tailwind și Motion. Pregătit pentru Vercel.

## Pornire pe calculatorul tău

```bash
npm install
```

```bash
npm run dev
```

Site-ul se deschide la `http://localhost:3000`.

## Cum schimb datele

Totul se schimbă din **`site.config.ts`**. Modifici textul dintre ghilimele și salvezi.

| Ce vrei să schimbi | Unde, în `site.config.ts` |
| --- | --- |
| Numele brandului | `brand` |
| Adresa site-ului (pentru Google și share) | `url` |
| Telefon, WhatsApp, mesajul precompletat, email | `contact` |
| Moneda | `moneda` |
| Pachete și prețuri | `pachete` |
| Valorile din calculator | `calculator` |
| Proiecte (acum sunt exemple) | `proiecte` |
| Nume, poză și textul „Despre mine” | `despre` |
| Întrebări frecvente | `intrebari` |
| Date firmă din subsol | `firma` |

Câteva lucruri de știut:

- Tot ce e între `[paranteze drepte]` e de completat.
- **Proiecte:** cât timp un proiect are `exemplu: true`, cardul afișează eticheta „EXEMPLU”. La proiectele reale pune `exemplu: false`.
- **Poza:** pune fișierul în folderul `public` (de exemplu `public/poza.jpg`) și scrie `poza: "/poza.jpg"`.
- **WhatsApp:** numărul se scrie doar cu cifre, cu `40` în față, fără `+`.
- **Culoarea de accent** se schimbă din `app/globals.css`, la `--color-accent`.
- **Paginile legale** (`app/politica-de-confidentialitate` și `app/termeni`) sunt texte-schelet marcate „De completat”. Completează-le cu un jurist înainte de lansare.

## Cum pun cheia de email

Formularul trimite cererile pe email prin [Resend](https://resend.com).

1. Fă-ți cont pe resend.com și creează o cheie la **API Keys**.
2. Copiază `.env.example` ca `.env.local`:

```bash
cp .env.example .env.local
```

3. Completează în `.env.local`:

```
RESEND_API_KEY=cheia_ta
CONTACT_TO=adresa_unde_vrei_cererile
CONTACT_FROM=Numele tău <contact@domeniul-tau.ro>
```

- `CONTACT_TO` e opțional. Dacă lipsește, cererile ajung la emailul din `site.config.ts`.
- `CONTACT_FROM` trebuie să fie pe un domeniu verificat în Resend (**Domains**). Dacă lipsește, se folosește adresa de test `onboarding@resend.dev`, care trimite doar către emailul contului tău Resend.
- Fără `RESEND_API_KEY`, formularul afișează o eroare și îl trimite pe vizitator spre WhatsApp.

`.env.local` nu se urcă pe GitHub.

## Cum fac deploy pe Vercel

1. Intră pe [vercel.com](https://vercel.com), alege **Add New → Project** și importă acest repository.
2. La **Environment Variables** adaugă `RESEND_API_KEY` și, dacă vrei, `CONTACT_TO` și `CONTACT_FROM`.
3. Apasă **Deploy**. Nu e nevoie de alte setări.
4. După ce legi domeniul, scrie adresa finală la `url` în `site.config.ts` și urcă modificarea. De ea depind sitemap-ul și imaginea de share.

De aici înainte, fiecare modificare urcată pe ramura principală se publică singură.

## Ce mai e util de știut

- Site-ul nu folosește cookie-uri de urmărire și nici unelte de analiză.
- Formularul are bifă de acord GDPR, un câmp-capcană anti-spam și o limită de cereri pe adresă.
- Animațiile se opresc singure pentru cine are „reduce motion” activ pe telefon.
- Verificare înainte de publicare:

```bash
npm run build
```
