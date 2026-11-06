"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ScrollRevealProps {
  children: ReactNode;
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const sections = gsap.utils.toArray<HTMLElement>(
          "section:not(.home-hero):not(.page-hero)",
          rootRef.current,
        );

        sections.forEach((section) => {
          const content = section.querySelector<HTMLElement>(".content-shell") ?? section;

          gsap.fromTo(
            content,
            { autoAlpha: 0, y: 48 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: "none",
              scrollTrigger: {
                trigger: content,
                start: "top 92%",
                end: "top 56%",
                scrub: 0.6,
              },
            },
          );
        });
      });

      return () => media.revert();
    },
    { scope: rootRef, dependencies: [pathname], revertOnUpdate: true },
  );

  return (
    <div className="scroll-reveal-root" ref={rootRef}>
      {children}
    </div>
  );
}
