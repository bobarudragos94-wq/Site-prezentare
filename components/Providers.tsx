"use client";

import { LazyMotion, MotionConfig } from "motion/react";

// Codul de animație se încarcă separat, după ce pagina e deja vizibilă.
const loadFeatures = () => import("./motion-features").then((m) => m.default);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
