import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BrandMotif from "@/components/brand/BrandMotif";
import QuantumLogo from "@/components/brand/QuantumLogo";
import ScrollStory from "@/components/site/ScrollStory";
import SiteFrame from "@/components/site/SiteFrame";
import { homeFaq, homeSections, officePhone, officePhoneHref, servicePages } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "קוואנטום | ביטוח, פנסיה ותכנון פיננסי",
  description:
    "קוואנטום סוכנות לביטוח: תכנון פיננסי לרווחת המשפחה, תכנון פנסיוני, תכנון פרישה, ביטוחי פרט וסיכונים וביטוח אלמנטרי.",
  openGraph: {
    title: "קוואנטום | ביטוח, פנסיה ותכנון פיננסי",
    description: "תכנון פיננסי, פנסיוני וביטוחי למשפחות ולעסקים.",
    type: "website",
    siteName: "קוואנטום",
  },
};

/** "How we approach the process", from Quantum's financial planning copy. */
const approach = servicePages[0].lists[0].items;

export default function Home() {
  return (
    <SiteFrame sections={homeSections}>
      <section className="home-hero" id="home">
        <BrandMotif className="hero-motif" data-parallax="8" surface="paper" />
        <div className="content-shell home-hero-inner">
          <p className="kicker">קוואנטום סוכנות לביטוח</p>
          <h1>רואים רחוק.<br />מתכננים נכון.</h1>
          <p className="lead">
            חיסכון, פנסיה, פרישה וביטוח הם חלקים של אותה תמונה. אנחנו עוזרים לכם לראות אותה במלואה, ומלווים אתכם ואת המשפחה לאורך שלבי החיים.
          </p>
          <div className="hero-actions">
            <Link className="button button-ink" href="/contact">לתיאום פגישה</Link>
            <a className="button button-quiet" href={`tel:${officePhoneHref}`}>
              <bdi dir="ltr">{officePhone}</bdi>
            </a>
          </div>
        </div>
      </section>

      <ScrollStory />

      <section className="section" id="services">
        <div className="content-shell">
          <header className="section-header">
            <p className="kicker">תחומי השירות</p>
            <h2>חמישה תחומים, תמונה אחת.</h2>
          </header>

          <ol className="service-index">
            {servicePages.map((service, index) => (
              <li key={service.slug}>
                <Link className="service-row" href={`/services/${service.slug}`}>
                  <span className="service-row-number">{index + 1}</span>
                  <span className="service-row-title">{service.title}</span>
                  <span className="service-row-summary">{service.summary}</span>
                  <ArrowLeft aria-hidden="true" className="service-row-arrow" size={22} strokeWidth={1.5} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-ink" id="approach">
        <div className="content-shell approach-layout">
          <header className="section-header">
            <p className="kicker">איך אנחנו ניגשים לתהליך</p>
            <h2>מתחילים בהקשבה.</h2>
            <p>
              תכנון פיננסי הוא תהליך הוליסטי המתחיל בהקשבה ובהבנת התמונה הכלכלית הכוללת שלכם ושל המשפחה, ממשיך בבחינת חלופות ובגיבוש דרך פעולה המתאימה למטרות שלכם.
            </p>
          </header>
          <ol className="approach-steps">
            {approach.map((step, index) => (
              <li key={step.label}>
                <span className="approach-number">{index + 1}</span>
                <h3>{step.label}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="questions">
        <div className="content-shell split-layout">
          <header className="section-header">
            <p className="kicker">שאלות ותשובות</p>
            <h2>לפני שנפגשים.</h2>
          </header>
          <div className="faq-list">
            {homeFaq.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band" id="contact">
        <BrandMotif className="cta-motif" data-parallax="10" surface="ink" />
        <div className="content-shell cta-band-inner">
          <QuantumLogo className="cta-logo" layout="stacked" tone="light" />
          <div>
            <h2>נשמח להכיר.</h2>
            <p>פגישת היכרות, ונבין יחד מה נכון לבדוק אצלכם.</p>
          </div>
          <Link className="button button-light" href="/contact">לתיאום פגישה</Link>
        </div>
      </section>
    </SiteFrame>
  );
}
