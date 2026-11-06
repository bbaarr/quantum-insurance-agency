import Link from "next/link";
import QuantumLogo from "@/components/brand/QuantumLogo";
import {
  companyName,
  contactEmail,
  officeAddress,
  officePhone,
  officePhoneHref,
  postalAddress,
  servicePages,
  whatsappDisplay,
  whatsappHref,
} from "@/lib/site-content";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="content-shell footer-grid">
        <div className="footer-brand">
          <Link aria-label="קוואנטום — לעמוד הבית" href="/">
            <QuantumLogo layout="stacked" tone="light" />
          </Link>
        </div>

        <nav aria-label="תחומי השירות" className="footer-column">
          <p className="footer-label">תחומי השירות</p>
          {servicePages.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>{service.navTitle}</Link>
          ))}
        </nav>

        <div className="footer-column">
          <p className="footer-label">דברו איתנו</p>
          <a href={`tel:${officePhoneHref}`}><bdi dir="ltr">{officePhone}</bdi></a>
          <a href={`mailto:${contactEmail}`}><bdi dir="ltr">{contactEmail}</bdi></a>
          <a href={whatsappHref} rel="noopener noreferrer" target="_blank">
            <span lang="en">WhatsApp</span> <bdi dir="ltr">{whatsappDisplay}</bdi>
            <span className="sr-only"> (נפתח בחלון חדש)</span>
          </a>
        </div>

        <div className="footer-column">
          <p className="footer-label">המשרד</p>
          <p>{officeAddress}</p>
          <p className="footer-muted">כתובת דואר למכתבים:<br />{postalAddress}</p>
        </div>
      </div>

      <div className="content-shell footer-base">
        <p>{companyName}</p>
        <nav aria-label="מידע משפטי ונגישות" className="footer-legal">
          <Link href="/accessibility">הצהרת נגישות</Link>
        </nav>
        <p>
          תכנון פיננסי והשקעות אינם מבטיחים תשואה או הכנסה עתידית. הכיסוי הביטוחי נקבע לפי תנאי הפוליסה שהונפקה, והוא כפוף לחיתום ולהוראות הדין.
        </p>
      </div>
    </footer>
  );
}
