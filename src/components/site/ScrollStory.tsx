"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Five areas that start scattered and gather into one picture: the Quantum Q. */
const pieces = [
  { label: "חיסכון והשקעות", from: { x: -340, y: -210 }, to: { x: -150, y: -150 } },
  { label: "פנסיה", from: { x: 360, y: -240 }, to: { x: 160, y: -155 } },
  { label: "פרישה", from: { x: 420, y: 120 }, to: { x: 205, y: 40 } },
  { label: "ביטוח חיים ובריאות", from: { x: -394, y: 170 }, to: { x: -200, y: 60 } },
  { label: "רכוש ועסק", from: { x: 0, y: 300 }, to: { x: 0, y: 175 } },
];

const captions = [
  { kicker: "01 / היום", text: "חיסכון כאן, פנסיה שם, פוליסה במגירה." },
  { kicker: "02 / יחד", text: "אנחנו מחברים את כל החלקים לתמונה אחת." },
  { kicker: "03 / קדימה", text: "וכשהתמונה שלמה, הצעד הבא ברור." },
];

export default function ScrollStory() {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          narrow: "(max-width: 760px)",
        },
        (context) => {
          if (!context.conditions?.motion) return;
          const scale = context.conditions.narrow ? 0.48 : 1;
          const q = gsap.utils.selector(rootRef);

          gsap.set(".story-piece", { xPercent: -50, yPercent: -50 });
          q(".story-piece").forEach((element, index) => {
            const piece = pieces[index];
            gsap.set(element, {
              x: piece.from.x * scale,
              y: piece.from.y * scale,
              autoAlpha: 0,
              rotate: gsap.utils.random(-10, 10),
            });
          });
          gsap.set(".story-ring", { strokeDashoffset: 1, autoAlpha: 0 });
          gsap.set(".story-slash", { autoAlpha: 0, x: 40, y: 60 });
          gsap.set(".story-glow", { autoAlpha: 0, scale: 0.6 });
          gsap.set(".story-caption", { autoAlpha: 0, y: 30 });
          gsap.set(".story-caption-0", { autoAlpha: 1, y: 0 });
          gsap.set(".story-final", { autoAlpha: 0, y: 30 });

          const timeline = gsap.timeline({
            defaults: { ease: "power2.inOut" },
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.9,
            },
          });

          timeline
            // Scattered pieces float in.
            .to(".story-piece", { autoAlpha: 1, rotate: 0, duration: 1, stagger: 0.12 })
            // They gather around the centre while the ring begins to draw.
            .to(".story-caption-0", { autoAlpha: 0, y: -30, duration: 0.6 }, "+=0.3")
            .to(".story-caption-1", { autoAlpha: 1, y: 0, duration: 0.6 }, "<0.2");

          q(".story-piece").forEach((element, index) => {
            const piece = pieces[index];
            timeline.to(
              element,
              { x: piece.to.x * scale, y: piece.to.y * scale, duration: 1.6 },
              index === 0 ? "<" : "<0.05",
            );
          });

          timeline
            .set(".story-ring", { autoAlpha: 1 }, "<0.2")
            .to(".story-ring", { strokeDashoffset: 0, duration: 2.2, ease: "power1.inOut" }, "<")
            .to(".story-piece", { autoAlpha: 0.32, scale: 0.92, duration: 0.8 }, "<1.2")
            // The slash lands: the picture is complete.
            .to(".story-caption-1", { autoAlpha: 0, y: -30, duration: 0.6 })
            .to(".story-caption-2", { autoAlpha: 1, y: 0, duration: 0.6 }, "<0.2")
            .to(".story-slash", { autoAlpha: 1, x: 0, y: 0, duration: 1, ease: "back.out(1.6)" }, "<")
            .to(".story-glow", { autoAlpha: 1, scale: 1, duration: 1.2 }, "<0.3")
            .to(".story-piece", { autoAlpha: 0, duration: 0.6 })
            .to(".story-symbol", { scale: 0.82, yPercent: -10, duration: 1 }, "<")
            .to(".story-caption-2", { autoAlpha: 0, y: -30, duration: 0.6 }, "<")
            .to(".story-final", { autoAlpha: 1, y: 0, duration: 0.9 }, "<0.3")
            .to({}, { duration: 0.6 });
        },
      );

      return () => media.revert();
    },
    { scope: rootRef },
  );

  return (
    <section aria-label="מכל החלקים לתמונה אחת" className="scroll-story" ref={rootRef}>
      <div className="story-stage">
        <div className="story-canvas">
          <span aria-hidden="true" className="story-glow" />
          <svg aria-hidden="true" className="story-symbol" focusable="false" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="story-ring-gradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="oklch(0.95 0.005 245)" />
                <stop offset="0.55" stopColor="oklch(0.74 0.012 245)" />
                <stop offset="1" stopColor="oklch(0.88 0.008 245)" />
              </linearGradient>
              <linearGradient id="story-slash-gradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stopColor="oklch(0.8 0.12 222)" />
                <stop offset="1" stopColor="oklch(0.6 0.16 255)" />
              </linearGradient>
            </defs>
            <circle className="story-ring-track" cx="48" cy="45" fill="none" r="33" strokeWidth="11" />
            <circle
              className="story-ring"
              cx="48"
              cy="45"
              fill="none"
              pathLength="1"
              r="33"
              stroke="url(#story-ring-gradient)"
              strokeDasharray="1"
              strokeWidth="11"
              transform="rotate(48 48 45)"
            />
            <path className="story-slash" d="M55 58h12.5l21 36H76z" fill="url(#story-slash-gradient)" />
          </svg>

          {pieces.map((piece) => (
            <span className="story-piece" key={piece.label}>{piece.label}</span>
          ))}
        </div>

        <div className="story-captions">
          {captions.map((caption, index) => (
            <p className={`story-caption story-caption-${index}`} key={caption.kicker}>
              <span>{caption.kicker}</span>
              {caption.text}
            </p>
          ))}
          <div className="story-final">
            <p className="story-final-title">כל התמונה. במקום אחד.</p>
            <p className="story-final-sub">חיסכון, פנסיה, פרישה וביטוח, בראייה אחת מסודרת.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
