interface QuantumMarkProps {
  className?: string;
  /** Scroll parallax strength, read by the site's scroll animations. */
  "data-parallax"?: string;
  /** "silver" matches the printed logo; "light" reads on the charcoal surfaces. */
  tone?: "silver" | "light";
  title?: string;
}

/**
 * The Quantum "Q", traced from the vector artwork in Quantum's stationery files
 * (ring and slash, same proportions). Gradients are declared once by
 * <QuantumMarkDefs /> inside the site frame.
 */
export default function QuantumMark({ className, tone = "silver", title, ...rest }: QuantumMarkProps) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      className={["quantum-mark", className].filter(Boolean).join(" ")}
      focusable="false"
      role={title ? "img" : undefined}
      viewBox="0 0 26.6 26.9"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        className="quantum-mark-ring"
        d="M13.07 0C5.86 0 0 5.86 0 13.07s5.86 13.07 13.07 13.07c1.31 0 2.62-.25 3.87-.63l.11-.05-2.42-2.93-.07-.05c-.51.08-.99.18-1.5.18-5.33 0-9.65-4.26-9.65-9.59S7.74 3.41 13.07 3.41s9.66 4.34 9.66 9.66c0 1.73-.47 3.44-1.35 4.92l-.04.08 2.11 2.74.21-.06c1.6-2.23 2.48-4.93 2.48-7.68C26.14 5.86 20.28 0 13.07 0Z"
        fill={tone === "light" ? "url(#qm-ring-light)" : "url(#qm-ring)"}
      />
      <path className="quantum-mark-slash" d="M18.14 17.8h-4.43l7.13 8.61h4.43Z" fill="url(#qm-slash)" />
    </svg>
  );
}

export function QuantumMarkDefs() {
  return (
    <svg aria-hidden="true" className="quantum-mark-defs" focusable="false" height="0" width="0">
      <defs>
        <linearGradient id="qm-ring" x1="0.15" x2="0.85" y1="0.9" y2="0.1">
          <stop offset="0" stopColor="oklch(0.7 0.012 250)" />
          <stop offset="0.6" stopColor="oklch(0.86 0.006 250)" />
          <stop offset="1" stopColor="oklch(0.94 0.003 250)" />
        </linearGradient>
        <linearGradient id="qm-ring-light" x1="0.15" x2="0.85" y1="0.9" y2="0.1">
          <stop offset="0" stopColor="oklch(0.74 0.01 250)" />
          <stop offset="1" stopColor="oklch(0.98 0.002 250)" />
        </linearGradient>
        <linearGradient id="qm-slash" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.84 0.1 225)" />
          <stop offset="1" stopColor="oklch(0.58 0.15 262)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
