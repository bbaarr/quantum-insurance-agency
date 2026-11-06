import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownLeft, ArrowUpLeft, ChevronLeft } from "lucide-react";
import QuantumMark from "@/components/brand/QuantumMark";
import ScrollStory from "@/components/site/ScrollStory";
import SiteFrame from "@/components/site/SiteFrame";
import { homeFaq, homeSections, servicePages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "קוואנטום | ביטוח, פנסיה ותכנון פיננסי",
  description:
    "קוואנטום מציגה שירותי תכנון פיננסי למשפחה, תכנון פנסיוני ופרישה, ביטוחי פרט וביטוח רכוש ועסק. קראו על השירותים וצרו קשר.",
  openGraph: {
    title: "קוואנטום | ביטוח, פנסיה ותכנון פיננסי",
    description: "תכנון פיננסי, פנסיוני וביטוחי למשפחות ולעסקים.",
    type: "website",
    siteName: "קוואנטום",
  },
};

const processSteps = [
  {
    number: "01",
    title: "מקשיבים לכם",
    description: "מכירים את המשפחה, את המטרות ואת מה שכבר קיים: חסכונות, תוכניות וכיסויים.",
  },
  {
    number: "02",
    title: "ממפים את התמונה",
    description: "בוחנים תנאים, דמי ניהול, מסלולים וכיסויים, ומסמנים מה כדאי לברר.",
  },
  {
    number: "03",
    title: "בונים תוכנית",
    description: "מגבשים יחד דרך פעולה ברורה, וחוזרים אליה כשהחיים משתנים.",
  },
];

export default function Home() {
  return (
    <SiteFrame sections={homeSections}>
      <section className="home-hero" id="home">
        <div aria-hidden="true" className="hero-watermark">
          <QuantumMark />
        </div>
        <div className="content-shell home-hero-inner">
          <div className="home-hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> ביטוח. פנסיה. פיננסים.</p>
            <h1>רואים רחוק.<br /><span>מתכננים נכון.</span></h1>
            <p className="home-hero-summary">
              קוואנטום מחברת בין חיסכון, פנסיה וביטוח לתמונה אחת מסודרת, ומלווה אתכם ואת המשפחה בכל שלב בדרך.
            </p>
            <div className="hero-actions">
              <Link className="primary-link" href="/contact">
                לשיחה עם קוואנטום <ArrowUpLeft aria-hidden="true" size={17} />
              </Link>
              <Link className="secondary-link" href="#services">
                לכל השירותים <ArrowDownLeft aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
          <div aria-label="תהליך בחינה בשלושה שלבים" className="hero-index" role="img">
            <p className="hero-index-title">שלושה צעדים<br />לתמונה כלכלית מלאה</p>
            {processSteps.map((step) => (
              <div className="hero-index-row" key={step.number}>
                <span>{step.number}</span>
                <strong>{step.title}</strong>
                <ChevronLeft aria-hidden="true" size={15} />
              </div>
            ))}
            <span className="hero-index-signature">
              <QuantumMark className="signature-mark" tone="light" />
              QUANTUM
            </span>
          </div>
        </div>
        <div className="hero-bottom-rule" aria-hidden="true">
          <span>קוואנטום סוכנות לביטוח</span>
          <span>תכנון. ליווי. ראייה קדימה.</span>
        </div>
      </section>

      <section className="statement-band" aria-label="גישת קוואנטום">
        <div className="content-shell statement-inner">
          <p>יחס אישי</p>
          <span aria-hidden="true" />
          <p>ראייה כוללת</p>
          <span aria-hidden="true" />
          <p>ליווי לאורך זמן</p>
        </div>
      </section>

      <ScrollStory />

      <section className="content-section services-section" id="services">
        <div className="content-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-mark" /> תחומי השירות</p>
              <h2>כל מה שחשוב<br /><span>לעתיד הכלכלי שלכם.</span></h2>
            </div>
            <p>
              חיסכון, פנסיה, פרישה וביטוח, בראייה אחת ותחת קורת גג אחת. כל תחום עומד בפני עצמו, ויחד הם בונים את התמונה המשפחתית השלמה.
            </p>
          </div>

          <div className="service-card-grid">
            {servicePages.map((service, index) => (
              <Link className="service-card" href={`/services/${service.slug}`} key={service.slug}>
                <div className="service-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <ArrowUpLeft aria-hidden="true" size={20} strokeWidth={1.6} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <span className="service-card-cta">לקריאה על השירות <ChevronLeft aria-hidden="true" size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="content-shell process-layout">
          <div className="process-intro">
            <p className="eyebrow"><span className="eyebrow-mark" /> איך מתקדמים</p>
            <h2>קודם מקשיבים.<br /><span>אחר כך מתכננים.</span></h2>
            <p>
              אין תוכנית אחת שמתאימה לכולם. לכן כל תהליך מתחיל בהיכרות אישית, ממשיך בבדיקה יסודית של הנתונים ומסתיים בדרך פעולה שמתאימה לכם.
            </p>
          </div>
          <div className="process-list">
            {processSteps.map((step) => (
              <article className="process-row" key={step.number}>
                <span className="process-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <ChevronLeft aria-hidden="true" size={18} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="questions">
        <div className="content-shell faq-layout">
          <div className="section-aside">
            <p className="eyebrow"><span className="eyebrow-mark" /> לפני שמתחילים</p>
            <h2>שאלות<br /><span>שכדאי לשאול.</span></h2>
            <p>תשובות ישירות על תכנון, בדיקת תוכניות וכיסוי ביטוחי.</p>
          </div>
          <div className="faq-list">
            {homeFaq.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}<span aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-banner" id="contact">
        <QuantumMark className="contact-banner-mark" data-parallax="14" tone="light" />
        <div className="content-shell contact-banner-inner">
          <div>
            <p className="eyebrow"><span className="eyebrow-mark" /> הצעד הבא</p>
            <h2>בואו נבנה את התוכנית שלכם.</h2>
            <p>שיחת היכרות קצרה, ונבין יחד מה הצעד הבא.</p>
          </div>
          <Link className="contact-banner-link" href="/contact">
            לכל פרטי הקשר <ArrowUpLeft aria-hidden="true" size={18} />
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
