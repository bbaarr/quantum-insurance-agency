"use client";

import { useRef } from "react";
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
  ".statement-inner",
  ".service-card-grid",
  ".process-list",
  ".faq-list",
  ".review-list",
  ".related-links",
  ".contact-methods",
];

/** Single elements that rise into place as their section arrives. */
const SINGLE_REVEALS = [
  ".eyebrow",
  "h2",
  ".section-heading > p",
  ".section-aside > p",
  ".process-intro > p",
  ".contact-banner p",
  ".contact-banner-link",
  ".related-heading > a",
  ".next-step-callout",
  ".text-link",
  ".contact-form-heading > p",
  ".contact-form-column form",
  ".location-band-inner > *",
];

const HERO_SEQUENCE = [
  ".breadcrumb-line",
  ".eyebrow",
  "h1",
  ".home-hero-summary",
  ".page-hero-summary",
  ".hero-actions",
  ".page-hero-copy > .primary-link",
];

const EASE = "expo.out";

export default function ScrollReveal({ children }: ScrollRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
            autoAlpha: 0,
            y: 34,
            duration: 1.3,
            ease: EASE,
            stagger: 0.09,
            delay: 0.05,
          });

          const heroPanel = hero.querySelectorAll(".hero-index, .page-hero-mark");
          gsap.from(heroPanel, {
            autoAlpha: 0,
            y: 50,
            scale: 0.97,
            duration: 1.6,
            ease: EASE,
            delay: 0.25,
          });
          gsap.from(hero.querySelectorAll(".hero-index-row"), {
            autoAlpha: 0,
            x: -18,
            duration: 1,
            ease: EASE,
            stagger: 0.08,
            delay: 0.55,
          });

          // Hero copy drifts and fades gently as it scrolls away.
          gsap.to(hero.querySelectorAll(".home-hero-copy, .page-hero-copy"), {
            yPercent: -12,
            autoAlpha: 0.35,
            ease: "none",
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
          });
        }

        // Decorative logo marks move slower than the page for depth.
        gsap.utils
          .toArray<HTMLElement>(".hero-watermark, .page-hero-mark, [data-parallax]", root)
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
        gsap.set(revealTargets, { autoAlpha: 0, y: 40 });

        ScrollTrigger.batch(revealTargets, {
          start: "top 90%",
          once: true,
          interval: 0.08,
          batchMax: 8,
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
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

        ScrollTrigger.refresh();

        return () => {
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
