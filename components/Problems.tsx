import { BeforeAfter } from "./BeforeAfter";
import { Reveal, RevealTitle } from "./Reveal";

const PROBLEME = [
  {
    titlu: "Recepție și programări",
    inainte: "Răspunzi la mesaje seara, după program. Unii clienți nu mai așteaptă.",
    dupa: "Clientul primește răspuns pe loc și își alege singur ora. Tu vezi programarea în calendar.",
  },
  {
    titlu: "Munca în Excel și rapoarte",
    inainte: "Copiezi date dintr-un tabel în altul și faci raportul de mână, săptămână de săptămână.",
    dupa: "Datele se adună singure. Raportul te așteaptă gata făcut.",
  },
  {
    titlu: "Documente și facturi",
    inainte: "Scrii aceleași contracte, oferte și facturi de la zero, de fiecare dată.",
    dupa: "Completezi câteva câmpuri. Documentul iese gata, cu datele corecte, și pleacă la client.",
  },
  {
    titlu: "Follow-up la oferte și cereri",
    inainte: "Trimiți oferta și uiți de ea. Clientul nu mai răspunde, tu nu mai întrebi.",
    dupa: "Clientul primește singur un mesaj de reamintire. Tu afli cine e încă interesat.",
  },
];

export function Problems() {
  return (
    <section id="ce-automatizam" aria-labelledby="t-probleme" className="bg-paper py-20 text-ink md:py-32">
      <div className="wrap">
        <RevealTitle id="t-probleme" className="text-[clamp(2.4rem,9vw,6rem)]">
          Ce automatizăm
        </RevealTitle>
        <Reveal>
          <p className="mt-5 max-w-[36rem] text-lg text-graphite md:text-xl">
            Pornim de la ce te încurcă pe tine, nu de la tehnologie. Cel mai des, de aici:
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-5 md:mt-16 lg:grid-cols-2">
          {PROBLEME.map((p, i) => (
            <Reveal as="li" key={p.titlu} delay={(i % 2) * 0.08}>
              <article className="lift h-full rounded-3xl border border-rule bg-sheet p-5 md:p-8">
                <h3 className="display text-[1.7rem] md:text-4xl">{p.titlu}</h3>
                <BeforeAfter inainte={p.inainte} dupa={p.dupa} />
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
