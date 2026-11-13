"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import * as m from "motion/react-m";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "article";
};

/** Apariție discretă la scroll: urcă puțin și devine vizibil. */
export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const Tag = m[as];
  return (
    <Tag
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}

/** Titlu de secțiune: rândurile urcă dintr-o „mască". */
export function RevealTitle({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  // Urmărim titlul întreg, nu textul ascuns în mască (acela nu „se vede" până nu urcă).
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  return (
    <h2 ref={ref} id={id} className={`display overflow-hidden pb-[0.08em] ${className ?? ""}`}>
      <m.span
        data-reveal
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: inView ? 0 : "105%" }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </m.span>
    </h2>
  );
}
