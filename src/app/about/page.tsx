import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BrandMotif from "@/components/brand/BrandMotif";
import QuantumMark from "@/components/brand/QuantumMark";
import SiteFrame from "@/components/site/SiteFrame";
import { servicePages } from "@/lib/site-content";
import "./about.css";

export const metadata: Metadata = {
  title: "אודות קוואנטום | תכנון פיננסי, פנסיוני וביטוח",
  description:
    "הכירו את קוואנטום ואת הדרך שלנו ללוות יחידים, משפחות ועסקים בתכנון פיננסי, פנסיה, פרישה וביטוח.",
  openGraph: {
    title: "אודות קוואנטום",
    description: "היכרות עם הגישה, התהליך ותחומי הליווי של קוואנטום.",
    type: "website",
    siteName: "קוואנטום",
  },
};

/**
 * The agency's own introduction copy, taken from the printed source document.
 * It lives with the page because this is the only place that renders it.
 */
const about = {
  eyebrow: "אודות קוואנטום",
  titleLines: ["הרבה מעבר", "לסוכנות ביטוח"],
  tagline: "בית של פתרונות. שותפות של דרך.",
  intro: [
    "QUANTUM היא בית מקצועי לביטוח, פנסיה ופיננסים, המשלב מומחיות, חשיבה אסטרטגית וראייה רחבה, במטרה להעניק לעסקים, לארגונים וללקוחות פרטיים מעטפת פתרונות מקיפה, מדויקת ומותאמת אישית.",
    "כחלק מקבוצת תקשוב, שבבעלות משפחת לבנת, אנו נהנים מעוצמה ארגונית, מתשתיות מתקדמות ומגב מקצועי איתן, לצד גישה אישית, דיסקרטית ושירות בסטנדרט גבוה.",
  ],
  expertise: {
    title: "מומחיות שרואה את התמונה המלאה",
    body: "אנו מאמינים שניהול נכון של ביטחון כלכלי מתחיל בהבנה מעמיקה של הצרכים, בבחינת המצב הקיים ובזיהוי ההזדמנויות. באמצעות ניתוח ביטוחי, פנסיוני ופיננסי, אנו בונים פתרונות חכמים המשלבים הגנה, חיסכון, ניהול סיכונים ותכנון לטווח ארוך.",
  },
  solutions: {
    title: "מעטפת אחת. מגוון רחב של פתרונות.",
    items: [
      "ביטוחי עסקים, רכוש, חבויות ואחריות מקצועית.",
      "ביטוחי פרט, חיים ובריאות.",
      "פתרונות פנסיוניים וחיסכון ארוך טווח.",
      "תכנון פיננסי, השקעות וניהול הון.",
      "תכנון פרישה ומיצוי זכויות.",
      "פתרונות ייעודיים לחברות, ארגונים וקולקטיבים.",
    ],
  },
  experience: {
    title: "ניסיון שמוביל. שירות שרואה אותך.",
    body: [
      "את הפעילות המקצועית מוביל שי ישראל, בעל ניסיון של למעלה מ-15 שנה בעולמות הביטוח, הפיננסים והפיתוח העסקי.",
      "אנו רואים בכל לקוח שותף לדרך. המחויבות שלנו היא לליווי מקצועי מתמשך, לחשיבה קדימה ולהתאמת הפתרונות המשתנים לצרכים האישיים והעסקיים לאורך זמן.",
    ],
    process:
      "כל תהליך מתחיל בהיכרות, במיפוי וקבלת מידעים, בירור צרכים ומטרות בחינת חלופות שונות וקבלת החלטות ביחד עם הלקוח להמשך",
  },
  closing: {
    title: "העוצמה של קבוצה גדולה. הדיוק של בית בוטיק.",
    statement: "QUANTUM – כל הסיכונים. כל הפתרונות. כתובת אחת.",
  },
};

const sections = [
  { id: "about-intro", label: "על קוואנטום" },
  { id: "about-expertise", label: "המומחיות שלנו" },
  { id: "about-team", label: "הניסיון והשירות" },
  { id: "about-contact", label: "יצירת קשר" },
];

const { eyebrow, titleLines, tagline, intro, expertise, solutions, experience, closing } = about;

/**
 * The page carries two renderings of the same content. Desk and tablet get the
 * site's existing page language; phones get their own editorial layout. Exactly
 * one of the two is displayed at any width, so neither leans on the other's
 * styles and phone work cannot reach a desktop layout.
 */
export default function AboutPage() {
  return (
    <SiteFrame sections={sections}>
      <div className="about-page">
        <section className="about-zone" id="about-intro">
          <div className="about-desktop">
            <div className="page-hero">
              <BrandMotif className="page-hero-motif" data-parallax="8" surface="paper" />
              <div className="content-shell page-hero-inner">
                <nav aria-label="מיקום בעמוד" className="breadcrumb">
                  <Link href="/">עמוד הבית</Link>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page">אודות</span>
                </nav>
                <p className="kicker">{eyebrow}</p>
                <h1>
                  {titleLines[0]}
                  <br />
                  {titleLines[1]}
                </h1>
                <p className="lead">{tagline}</p>
                <Link className="button button-ink" href="/contact">לתיאום פגישה</Link>
              </div>
            </div>
          </div>

          <div className="about-mobile">
            <div className="m-hero">
              <p className="m-hero__eyebrow">
                <span aria-hidden="true" className="m-hero__tick" />
                {eyebrow}
              </p>
              <h1 className="m-hero__title">
                <span className="m-hero__line">{titleLines[0]}</span>
                <span className="m-hero__line m-hero__line--soft">{titleLines[1]}</span>
              </h1>
              <p className="m-hero__tagline">
                בית של פתרונות.
                <br />
                שותפות של דרך.
              </p>
              <p className="m-hero__lead">{intro[0]}</p>
              <span aria-hidden="true" className="m-hero__rule" />
            </div>

            <figure className="m-photo">
              <Image
                alt="קו רקיע עירוני"
                className="m-photo__image"
                height={614}
                priority
                sizes="100vw"
                src="/quantum-skyline.webp"
                width={1100}
              />
            </figure>
          </div>
        </section>

        <section className="about-zone" id="about-expertise">
          <div className="about-desktop">
            <div className="section section-tight">
              <div className="content-shell prose-layout">
                <QuantumMark className="prose-mark" />
                <div className="prose">
                  {intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            </div>

            <div className="section section-paper">
              <div className="content-shell points-layout">
                <div className="point-block">
                  <h2>{expertise.title}</h2>
                  <p className="point-body">{expertise.body}</p>
                </div>
                <div className="point-block">
                  <h2>{solutions.title}</h2>
                  <ul className="point-list">
                    {solutions.items.map((item) => (
                      <li key={item}>
                        <span aria-hidden="true" className="point-tick" />
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="about-mobile">
            <div className="m-panel m-panel--ice">
              <p className="m-kicker">הגישה שלנו</p>
              <h2 className="m-h2">
                מומחיות
                <br />
                שרואה את
                <br />
                התמונה המלאה.
              </h2>
              <div className="m-prose">
                <p>{expertise.body}</p>
                <p>{intro[1]}</p>
              </div>
            </div>

            <div className="m-panel m-panel--navy">
              <p className="m-kicker m-kicker--light">מעטפת אחת</p>
              <h2 className="m-h2 m-h2--light">
                מגוון רחב
                <br />
                <span className="m-h2__soft">של פתרונות.</span>
              </h2>
              <ul className="m-cards">
                {solutions.items.map((item, index) => (
                  <li className="m-card" key={item}>
                    <span aria-hidden="true" className="m-card__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="m-card__text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="about-zone" id="about-team">
          <div className="about-desktop">
            <div className="section">
              <div className="content-shell prose-layout">
                <h2>{experience.title}</h2>
                <div className="prose">
                  {experience.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  <p className="process-note">{experience.process}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-mobile">
            <div className="m-panel m-panel--paper">
              <p className="m-kicker">הניסיון והשירות</p>
              <h2 className="m-h2">
                ניסיון שמוביל.
                <br />
                <span className="m-h2__soft-dark">שירות שרואה אותך.</span>
              </h2>
              <div className="m-prose">
                {experience.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="m-note">
                <p className="m-note__label">התהליך</p>
                <p>{experience.process}</p>
              </div>
            </div>

            <div className="m-panel m-panel--ice">
              <p className="m-kicker">תחומים נוספים</p>
              <ul className="m-links">
                {servicePages.map((service) => (
                  <li key={service.slug}>
                    <Link className="m-link" href={`/services/${service.slug}`}>
                      <span>{service.navTitle}</span>
                      <ArrowLeft aria-hidden="true" size={18} strokeWidth={1.6} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="about-zone" id="about-contact">
          <div className="about-desktop">
            <div className="closing-statement">
              <div className="content-shell closing-inner">
                <QuantumMark className="closing-mark" tone="light" />
                <div>
                  <p>{closing.title}</p>
                  <p>{closing.statement}</p>
                </div>
                <Link className="button button-light" href="/contact">לתיאום פגישה</Link>
              </div>
            </div>
          </div>

          <div className="about-mobile">
            <div className="m-cta">
              <p className="m-kicker m-kicker--light">בואו נדבר</p>
              <h2 className="m-h2 m-h2--light">
                כל תהליך
                <br />
                מתחיל בשיחה.
              </h2>
              <p className="m-cta__text">
                נשמח להכיר, להבין את הצרכים ולבנות יחד את הצעד הבא.
              </p>
              <Link className="m-cta__button" href="/contact">
                ליצירת קשר
                <ArrowLeft aria-hidden="true" size={20} strokeWidth={1.8} />
              </Link>
            </div>

            <div className="m-closing">
              <QuantumMark className="m-closing__mark" tone="light" />
              <p className="m-closing__statement">{closing.title}</p>
              <p className="m-closing__statement m-closing__statement--soft">{closing.statement}</p>
            </div>
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
