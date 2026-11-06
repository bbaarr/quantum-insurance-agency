interface QuantumLogoProps {
  /** "stacked" is the printed lockup (Q above the wordmark); "inline" puts the Q beside it. */
  layout?: "stacked" | "inline";
  /** "dark" for paper backgrounds, "light" for the charcoal ones. */
  tone?: "dark" | "light";
  className?: string;
}

const files = {
  stacked: { dark: "/brand/quantum-logo-dark.svg", light: "/brand/quantum-logo-light.svg" },
  inline: { dark: "/brand/quantum-logo-inline-dark.svg", light: "/brand/quantum-logo-inline-light.svg" },
} as const;

const sizes = {
  stacked: { width: 174, height: 121 },
  inline: { width: 208, height: 38 },
} as const;

/** Quantum's full logo, taken from the vector artwork in the brand stationery. */
export default function QuantumLogo({ layout = "inline", tone = "dark", className }: QuantumLogoProps) {
  return (
    // An SVG logo needs no resizing, so a plain <img> serves it as is.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt="קוואנטום — ביטוח. פנסיה. פיננסים."
      className={["quantum-logo", `quantum-logo-${layout}`, className].filter(Boolean).join(" ")}
      decoding="async"
      height={sizes[layout].height}
      src={files[layout][tone]}
      width={sizes[layout].width}
    />
  );
}
