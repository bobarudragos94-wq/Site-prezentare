import { About } from "@/components/About";
import { Calculator } from "@/components/Calculator";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MobileBar } from "@/components/MobileBar";
import { Packages } from "@/components/Packages";
import { Problems } from "@/components/Problems";
import { Projects } from "@/components/Projects";
import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <>
      <div className="bg-night text-paper">
        <Header />
      </div>
      <main id="continut">
        <Hero />
        <Marquee />
        <Problems />
        <Steps />
        <Packages />
        <Calculator />
        <Projects />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
