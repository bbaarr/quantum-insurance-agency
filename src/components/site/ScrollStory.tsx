"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Five areas that start scattered and gather into one picture: the Quantum Q. */
const pieces = [
  { label: "חיסכון והשקעות", from: { x: -340, y: -230 }, to: { x: -300, y: -150 } },
  { label: "פנסיה", from: { x: 360, y: -250 }, to: { x: 300, y: -150 } },
  { label: "פרישה", from: { x: 430, y: 120 }, to: { x: 330, y: 40 } },
  { label: "ביטוח חיים ובריאות", from: { x: -430, y: 170 }, to: { x: -330, y: 40 } },
  { label: "רכוש ועסק", from: { x: 0, y: 255 }, to: { x: 0, y: 225 } },
];

/**
 * On narrow screens the pieces sit in one column sized to the stage, so no label
 * crosses another, the Q, or the captions below it.
 */
function columnOffsets(stageHeight: number) {
  const step = Math.max(46, Math.min(78, (stageHeight - 60) / 5));
  return [-2, -1, 0, 1, 2].map((slot) => slot * step);
}

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
          const narrow = Boolean(context.conditions.narrow);
          const canvas = rootRef.current?.querySelector<HTMLElement>(".story-canvas");
          const narrowColumn = columnOffsets(canvas?.clientHeight ?? 400);
          // The faint ring outline would sit behind the column, so it waits for the ring.
          if (narrow) gsap.set(".story-ring-track", { autoAlpha: 0 });
          const q = gsap.utils.selector(rootRef);

          gsap.set(".story-piece", { xPercent: -50, yPercent: -50 });
          q(".story-piece").forEach((element, index) => {
            const piece = pieces[index];
            gsap.set(element, {
              x: narrow ? 0 : piece.from.x,
              y: narrow ? narrowColumn[index] + 24 : piece.from.y,
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
            .to(".story-caption-1", { autoAlpha: 1, y: 0, duration: 0.6 });

          q(".story-piece").forEach((element, index) => {
            const piece = pieces[index];
            timeline.to(
              element,
              narrow
                ? { y: narrowColumn[index], duration: 1.6 }
                : { x: piece.to.x, y: piece.to.y, duration: 1.6 },
              index === 0 ? "<" : "<0.05",
            );
          });

          // Narrow: the column clears before the ring draws where it stood.
          if (narrow) timeline.to(".story-piece", { autoAlpha: 0, duration: 0.7, stagger: 0.06 });

          timeline
            .set(".story-ring, .story-ring-track", { autoAlpha: 1 }, narrow ? ">" : "<0.2")
            .to(".story-ring", { strokeDashoffset: 0, duration: 2.2, ease: "power1.inOut" }, "<")
            .to(".story-piece", { autoAlpha: narrow ? 0 : 0.32, duration: 0.8 }, "<1.2")
            // The slash lands: the picture is complete.
            .to(".story-caption-1", { autoAlpha: 0, y: -30, duration: 0.6 })
            .to(".story-caption-2", { autoAlpha: 1, y: 0, duration: 0.6 })
            .to(".story-slash", { autoAlpha: 1, x: 0, y: 0, duration: 1, ease: "back.out(1.6)" }, "<")
            .to(".story-glow", { autoAlpha: 1, scale: 1, duration: 1.2 }, "<0.3")
            .to(".story-piece", { autoAlpha: 0, duration: 0.6 })
            .to(".story-symbol", { scale: 0.82, yPercent: -10, duration: 1 }, "<")
            .to(".story-caption-2", { autoAlpha: 0, y: -30, duration: 0.6 }, "<")
            .to(".story-final", { autoAlpha: 1, y: 0, duration: 0.9 }, ">")
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
        {/* The animated scene is visual only; this is the same story for screen readers. */}
        <div className="sr-only">
          <p>חיסכון והשקעות, פנסיה, פרישה, ביטוח חיים ובריאות, רכוש ועסק.</p>
          {captions.map((caption) => <p key={caption.kicker}>{caption.text}</p>)}
          <p>כל התמונה. במקום אחד. חיסכון, פנסיה, פרישה וביטוח, בראייה אחת מסודרת.</p>
        </div>
        <div aria-hidden="true" className="story-canvas">
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

        <div aria-hidden="true" className="story-captions">
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
