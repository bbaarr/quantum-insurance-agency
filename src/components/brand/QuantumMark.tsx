interface QuantumMarkProps {
  className?: string;
  /** "silver" matches the logo; "light" reads on dark navy surfaces. */
  tone?: "silver" | "light";
  title?: string;
}

/**
 * The Quantum "Q" symbol from the supplied logo, drawn as SVG so it can be
 * reused at any size, animated and placed on any background. Gradients are
 * declared once by <QuantumMarkDefs /> inside the site frame.
 */
export default function QuantumMark({ className, tone = "silver", title }: QuantumMarkProps) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      className={["quantum-mark", className].filter(Boolean).join(" ")}
      focusable="false"
      role={title ? "img" : undefined}
      viewBox="0 0 100 100"
    >
      {title ? <title>{title}</title> : null}
      <circle
        className="quantum-mark-ring"
        cx="48"
        cy="45"
        fill="none"
        r="33"
        stroke={tone === "light" ? "url(#qm-ring-light)" : "url(#qm-ring)"}
        strokeWidth="11"
      />
      <path className="quantum-mark-slash" d="M55 58h12.5l21 36H76z" fill="url(#qm-slash)" />
    </svg>
  );
}

export function QuantumMarkDefs() {
  return (
    <svg aria-hidden="true" className="quantum-mark-defs" focusable="false" height="0" width="0">
      <defs>
        <linearGradient id="qm-ring" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.9 0.006 245)" />
          <stop offset="0.55" stopColor="oklch(0.74 0.012 245)" />
          <stop offset="1" stopColor="oklch(0.86 0.008 245)" />
        </linearGradient>
        <linearGradient id="qm-ring-light" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.97 0.004 245)" />
          <stop offset="1" stopColor="oklch(0.78 0.012 245)" />
        </linearGradient>
        <linearGradient id="qm-slash" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.8 0.12 222)" />
          <stop offset="1" stopColor="oklch(0.6 0.16 255)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
