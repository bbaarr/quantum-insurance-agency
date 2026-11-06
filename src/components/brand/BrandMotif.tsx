interface BrandMotifProps {
  className?: string;
  /** "paper" draws a white ring for light surfaces; "ink" a silver one for charcoal. */
  surface?: "paper" | "ink";
  /** Scroll parallax strength, read by the site's scroll animations. */
  "data-parallax"?: string;
}

/**
 * The oversized Q from Quantum's envelope and notebook: a ring that runs off the
 * edge and the blue slash crossing it. Decorative only.
 */
export default function BrandMotif({ className, surface = "paper", ...rest }: BrandMotifProps) {
  const id = `motif-${surface}`;
  return (
    <svg
      aria-hidden="true"
      className={["brand-motif", `brand-motif-${surface}`, className].filter(Boolean).join(" ")}
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 600 600"
      {...rest}
    >
      <defs>
        <linearGradient id={`${id}-ring`} x1="0" x2="1" y1="0" y2="1">
          {surface === "paper" ? (
            <>
              <stop offset="0" stopColor="oklch(1 0 0)" stopOpacity="0.95" />
              <stop offset="1" stopColor="oklch(1 0 0)" stopOpacity="0.55" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="oklch(0.62 0.006 260)" stopOpacity="0.55" />
              <stop offset="0.7" stopColor="oklch(0.62 0.006 260)" stopOpacity="0.08" />
            </>
          )}
        </linearGradient>
        <linearGradient id={`${id}-slash`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.84 0.1 225)" />
          <stop offset="1" stopColor="oklch(0.56 0.15 264)" />
        </linearGradient>
      </defs>
      <path
        d="M300 30C151 30 30 151 30 300s121 270 270 270c27 0 54-5 80-13l2-1-50-60-1-1c-11 2-21 4-31 4-110 0-199-88-199-198S190 102 300 102s200 89 200 198c0 36-10 71-28 102l-1 2 44 56 4-1c33-46 51-102 51-159C570 151 449 30 300 30Z"
        fill={`url(#${id}-ring)`}
      />
      <path className="brand-motif-slash" d="M405 397h-92l148 178h92Z" fill={`url(#${id}-slash)`} />
    </svg>
  );
}
