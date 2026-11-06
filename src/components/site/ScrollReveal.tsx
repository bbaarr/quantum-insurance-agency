"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import type { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface ScrollRevealProps {
  children: ReactNode;
}

/** Groups whose children enter one after another. */
const STAGGER_GROUPS = [
  ".service-index",
  ".approach-steps",
  ".faq-list",
  ".point-list",
  ".contact-methods",
];

/** Single elements that rise into place as their section arrives. */
const SINGLE_REVEALS = [
  ".kicker",
  "h2",
  ".section-header > p",
  ".prose > p",
  ".closing-inner > *",
  ".cta-copy > *",
  ".cta-brand",
];

const HERO_SEQUENCE = [
  ".breadcrumb",
  ".kicker",
  "h1",
  ".lead",
  ".hero-actions",
  ".page-hero-inner > .button",
  ".contact-methods",
  ".contact-office",
  ".contact-form-card",
];

const EASE = "expo.out";

/*
  Reveals animate opacity only, never visibility: content waiting to be revealed
  must stay in the accessibility tree so screen readers can reach every heading
  and link (IS 5568 / WCAG 1.3.1, 2.4.3).
*/

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // iOS Safari only applies :active (the buttons' pressed state) once a touch listener exists.
  useEffect(() => {
    const noop = () => {};
    document.addEventListener("touchstart", noop, { passive: true });
    return () => document.removeEventListener("touchstart", noop);
  }, []);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        // Inertia scrolling: eases the page instead of jumping per wheel tick.
        const lenis = new Lenis({
          duration: 1.15,
          easing: (t) => 1 - Math.pow(1 - t, 4),
          smoothWheel: true,
          anchors: { offset: -110 },
        });
        const raf = (time: number) => lenis.raf(time * 1000);
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        // Hero: a soft staggered entrance on load.
        const hero = root.querySelector<HTMLElement>(".home-hero, .page-hero");
        if (hero) {
          const heroItems = HERO_SEQUENCE.flatMap((selector) =>
            gsap.utils.toArray<HTMLElement>(hero.querySelectorAll(selector)),
          );
          gsap.from(heroItems, {
            opacity: 0,
            y: 34,
            duration: 1.3,
            ease: EASE,
            stagger: 0.09,
            delay: 0.05,
          });

          gsap.from(hero.querySelectorAll(".brand-motif"), {
            opacity: 0,
            scale: 0.94,
            duration: 1.8,
            ease: EASE,
            delay: 0.2,
          });

          // Hero copy drifts and fades gently as it scrolls away.
          gsap.to(hero.querySelectorAll(".home-hero-inner, .page-hero-inner"), {
            yPercent: -12,
            opacity: 0.85,
            ease: "none",
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
          });
        }

        // Decorative logo marks move slower than the page for depth.
        gsap.utils
          .toArray<HTMLElement>("[data-parallax]", root)
          .forEach((element) => {
            const speed = Number(element.dataset.parallax ?? 18);
            gsap.to(element, {
              yPercent: speed,
              rotate: speed / 3,
              ease: "none",
              scrollTrigger: {
                trigger: element.closest("section") ?? element,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            });
          });

        const sections = gsap.utils.toArray<HTMLElement>(
          "section:not(.home-hero):not(.page-hero):not(.scroll-story)",
          root,
        );

        const groupItems = sections.flatMap((section) =>
          STAGGER_GROUPS.flatMap((selector) =>
            Array.from(section.querySelectorAll<HTMLElement>(`${selector} > *`)),
          ),
        );
        const groupSet = new Set(groupItems);

        const singles = sections
          .flatMap((section) =>
            SINGLE_REVEALS.flatMap((selector) =>
              Array.from(section.querySelectorAll<HTMLElement>(selector)),
            ),
          )
          .filter((element, index, all) => all.indexOf(element) === index)
          // Skip anything already animated as part of a parent or group.
          .filter((element) => {
            let parent = element.parentElement;
            while (parent && parent !== root) {
              if (groupSet.has(parent)) return false;
              parent = parent.parentElement;
            }
            return !groupSet.has(element);
          });

        const revealTargets = [...singles, ...groupItems];
        gsap.set(revealTargets, { opacity: 0, y: 40 });

        ScrollTrigger.batch(revealTargets, {
          start: "top 90%",
          once: true,
          interval: 0.08,
          batchMax: 8,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 1.25,
              ease: EASE,
              stagger: 0.085,
              overwrite: true,
            }),
        });

        // Reading progress in the brand gradient under the header.
        const progress = document.querySelector<HTMLElement>(".scroll-progress");
        if (progress) {
          gsap.fromTo(
            progress,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
            },
          );
        }

        // A keyboard user can land on content before it has scrolled in: show it at once.
        const revealOnFocus = (event: FocusEvent) => {
          const target = event.target as HTMLElement;
          const pending = revealTargets.filter((element) => element.contains(target));
          if (pending.length) gsap.to(pending, { opacity: 1, y: 0, duration: 0.2, overwrite: true });
        };
        root.addEventListener("focusin", revealOnFocus);

        ScrollTrigger.refresh();

        return () => {
          root.removeEventListener("focusin", revealOnFocus);
          gsap.ticker.remove(raf);
          lenis.destroy();
        };
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
