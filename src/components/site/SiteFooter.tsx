import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, Mail, MapPin, Phone } from "lucide-react";
import QuantumMark from "@/components/brand/QuantumMark";
import {
  companyName,
  contactEmail,
  officeAddress,
  officePhone,
  officePhoneHref,
  postalAddress,
} from "@/lib/site-content";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="site-footer">
      <QuantumMark className="footer-watermark" data-parallax="10" tone="light" />
      <div className="site-footer-main">
        <div className="footer-brand-column">
          <Link className="brand-plaque footer-brand-plaque" href="/" aria-label="קוואנטום — לעמוד הבית">
            <Image
              alt="קוואנטום — ביטוח, פנסיה, פיננסים"
              className="brand-logo"
              height={402}
              sizes="145px"
              src="/quantum-logo.png"
              width={618}
            />
          </Link>
          <p>{companyName}</p>
          <p className="footer-tagline">
            <QuantumMark className="inline-mark" />
            ביטוח. פנסיה. פיננסים.
          </p>
        </div>

        <div className="footer-contact-column">
          <p className="footer-label">פרטי המשרד</p>
          <a href={`mailto:${contactEmail}`}>
            <Mail aria-hidden="true" size={17} strokeWidth={1.8} />
            <bdi dir="ltr">{contactEmail}</bdi>
          </a>
          <a href={`tel:${officePhoneHref}`}>
            <Phone aria-hidden="true" size={17} strokeWidth={1.8} />
            <bdi dir="ltr">{officePhone}</bdi>
          </a>
          <p className="footer-address">
            <MapPin aria-hidden="true" size={17} strokeWidth={1.8} />
            <span>{officeAddress}<br />כתובת למשלוח דואר: {postalAddress}</span>
          </p>
        </div>

        <div className="footer-links-column">
          <p className="footer-label">קישורים</p>
          <Link href="/#services">תחומי השירות <ArrowUpLeft aria-hidden="true" size={15} /></Link>
          <Link href="/contact">יצירת קשר <ArrowUpLeft aria-hidden="true" size={15} /></Link>
          <Link href="#top">חזרה לראש העמוד <ArrowUpLeft aria-hidden="true" size={15} /></Link>
        </div>
      </div>

      <div className="site-footer-legal">
        תכנון פיננסי והשקעות אינם מבטיחים תשואה או הכנסה עתידית. כיסוי ביטוחי נקבע לפי תנאי הפוליסה שהונפקה, לרבות חריגים, גבולות ותנאים, והוא כפוף לחיתום ולהוראות הדין.
      </div>
    </footer>
  );
}
