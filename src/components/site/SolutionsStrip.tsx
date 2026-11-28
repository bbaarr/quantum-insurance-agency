import type { ReactNode } from "react";

/**
 * The line-art row that sits under the hero's solutions line.
 * Hand-drawn style outlines in the brand ink, one per area of cover,
 * matching the printed stationery the rest of the site is built around.
 */
interface Solution {
  label: string;
  icon: ReactNode;
}

const solutions: Solution[] = [
  {
    label: "תכנון פיננסי",
    icon: (
      <>
        <path d="M8 39.5h32" />
        <path d="M13 39.5V32" strokeWidth="3.2" />
        <path d="M21 39.5V27" strokeWidth="3.2" />
        <path d="M29 39.5V30.5" strokeWidth="3.2" />
        <path d="M37 39.5V22" strokeWidth="3.2" />
        <path d="M11 26.5l7-5.5 5.5 3 8.5-8" />
        <path d="M27 16h5.5v5.5" />
      </>
    ),
  },
  {
    label: "פנסיה",
    icon: (
      <>
        <ellipse cx="22" cy="27" rx="12.5" ry="8.5" />
        <ellipse cx="35.6" cy="27.6" rx="3.3" ry="2.9" />
        <path d="M27.6 20.6l1.9-5.3 4.3 3.3z" />
        <path d="M15 35.5v3M29.5 35.5v3" />
        <path d="M9.9 24.2c-1.9-.8-3 .5-2.6 2 .4 1.5 2.3 1.8 2.9.2" />
        <path d="M24.4 19.9h3.6" />
        <circle cx="22" cy="13" r="2.4" />
        <circle cx="17.4" cy="25.4" r=".95" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "ביטוחי בריאות",
    icon: (
      <>
        <g transform="translate(2 3) scale(1.8)">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </g>
        <path d="M15.4 25.1h4.4l2.2-4.2 3.2 7.4 2.1-3.2h4.1" />
      </>
    ),
  },
  {
    label: "ביטוחי פרט",
    icon: (
      <>
        <circle cx="14" cy="16.5" r="4.2" />
        <path d="M6.5 34.5c0-4.1 3.4-7.5 7.5-7.5 1.6 0 3 .5 4.2 1.4" />
        <circle cx="34" cy="16.5" r="4.2" />
        <path d="M41.5 34.5c0-4.1-3.4-7.5-7.5-7.5-1.6 0-3 .5-4.2 1.4" />
        <circle cx="24" cy="24.5" r="3.6" />
        <path d="M17.5 37c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
      </>
    ),
  },
  {
    label: "ביטוחי עסקים",
    icon: (
      <>
        <rect x="7" y="16" width="34" height="22" rx="3" />
        <path d="M18 16v-3.5A2.5 2.5 0 0 1 20.5 10h7a2.5 2.5 0 0 1 2.5 2.5V16" />
        <path d="M7 25h34" />
        <rect x="21" y="22.5" width="6" height="5" rx="1" />
      </>
    ),
  },
  {
    label: "ביטוחי רכוש וחבויות",
    icon: (
      <>
        <path d="M24 6l14 5v11.5c0 9.2-6 15.4-14 18.5-8-3.1-14-9.3-14-18.5V11l14-5Z" />
        <path d="M17.5 23.5l4.5 4.5 8.5-9" />
      </>
    ),
  },
];

export default function SolutionsStrip() {
  return (
    <ul className="solutions-strip" aria-label="תחומי הפתרונות">
      {solutions.map((solution) => (
        <li key={solution.label}>
          <span className="solution-icon" aria-hidden="true">
            <svg
              fill="none"
              focusable="false"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              viewBox="0 0 48 48"
            >
              {solution.icon}
            </svg>
          </span>
          <span className="solution-label">{solution.label}</span>
        </li>
      ))}
    </ul>
  );
}
