import { siteConfig } from "@/site.config";
import { mailHref, telHref, whatsappHref } from "@/lib/format";
import { ContactForm } from "./ContactForm";
import { PhoneIcon, WhatsAppIcon } from "./icons";
import { Reveal, RevealTitle } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="t-contact" className="bg-night py-20 text-paper md:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <RevealTitle id="t-contact" className="text-[clamp(2.4rem,9vw,5.5rem)]">
            Cere auditul gratuit
          </RevealTitle>
          <Reveal>
            <p className="mt-5 max-w-[32rem] text-lg text-mute md:text-xl">
              20 de minute. Afli ce merită automatizat la tine și cât ar costa. Fără obligații.
            </p>
            <ul className="mt-10 flex flex-col gap-4">
              <li>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full justify-start sm:w-auto">
                  <WhatsAppIcon className="size-5" />
                  Scrie-mi pe WhatsApp
                </a>
              </li>
              <li>
                <a href={telHref} className="btn btn-ghost w-full justify-start sm:w-auto">
                  <PhoneIcon className="size-5" />
                  Sună: {siteConfig.contact.telefonAfisat}
                </a>
              </li>
              <li className="pt-2 text-mute">
                Sau pe e-mail:{" "}
                <a href={mailHref} className="font-semibold text-paper underline underline-offset-4 hover:text-accent">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
        <Reveal className="relative lg:col-span-6">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
