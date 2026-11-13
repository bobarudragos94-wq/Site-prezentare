import { HeroScene } from "./HeroScene";
import { RotatingWord } from "./RotatingWord";
import { ArrowIcon } from "./icons";

export function Hero() {
  return (
    <section className="bg-night text-paper">
      <div className="wrap grid gap-12 pb-16 pt-8 md:pb-24 md:pt-14 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="eyebrow text-mute">Pentru firme mici din România</p>
          <h1 className="display mt-5 text-[clamp(2.2rem,9.6vw,4.5rem)] [text-wrap:wrap] lg:text-[min(5vw,4.5rem)]">
            Mai mulți clienți preluați. <span className="text-mute">Mai puțin timp pierdut cu</span>{" "}
            <span className="sr-only">munca repetitivă.</span>
            <RotatingWord />
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg text-mute md:text-xl">
            Îți fac site-ul și pun treburile care se repetă să meargă singure. La preț fix.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a href="#contact" className="btn btn-accent">
              Cere audit gratuit
              <ArrowIcon className="arrow size-5" />
            </a>
            <p className="text-center text-[15px] text-mute sm:text-left">
              20 de minute. Fără obligații.
            </p>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="mx-auto max-w-[30rem] pb-2 pr-2 lg:mr-0 lg:pb-3 lg:pr-3">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}
