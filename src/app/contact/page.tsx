import type { Metadata } from "next";
import { ArrowUpLeft, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import EnquiryEmailForm from "@/components/contact/EnquiryEmailForm";
import SiteFrame from "@/components/site/SiteFrame";
import {
  contactEmail,
  contactSections,
  officeAddress,
  officePhone,
  officePhoneHref,
  postalAddress,
  whatsappDisplay,
  whatsappHref,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "יצירת קשר | קוואנטום",
  description:
    "צרו קשר עם קוואנטום לתכנון פיננסי, פנסיוני וביטוחי. טלפון, דוא״ל, WhatsApp וטופס פנייה מקוון.",
  openGraph: {
    title: "יצירת קשר עם קוואנטום",
    description: "פרטי הקשר של קוואנטום וטופס פנייה מקוון.",
    type: "website",
    siteName: "קוואנטום",
  },
};

export default function ContactPage() {
  return (
    <SiteFrame sections={contactSections}>
      <section className="page-hero contact-hero" id="contact-methods">
        <div className="content-shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> אנחנו כאן לשיחה</p>
            <h1>יצירת קשר</h1>
            <p className="page-hero-summary">
              בחרו את הדרך שנוחה לכם — דוא״ל, שיחת טלפון, WhatsApp או פנייה מקוונת.
            </p>
          </div>
          <div aria-hidden="true" className="page-hero-mark contact-page-mark">
            <span className="mark-orbit" />
            <span className="mark-slash" />
            <span className="mark-caption">Q / CONTACT</span>
          </div>
        </div>
      </section>

      <section className="content-section contact-page-section">
        <div className="content-shell contact-page-grid">
          <div className="contact-methods">
            <article className="contact-method-card">
              <Mail aria-hidden="true" size={19} strokeWidth={1.7} />
              <p className="contact-method-label">דוא״ל</p>
              <a dir="ltr" href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </article>
            <article className="contact-method-card">
              <Phone aria-hidden="true" size={19} strokeWidth={1.7} />
              <p className="contact-method-label">טלפון במשרד</p>
              <a dir="ltr" href={`tel:${officePhoneHref}`}>{officePhone}</a>
            </article>
            <article className="contact-method-card">
              <MessageCircle aria-hidden="true" size={19} strokeWidth={1.7} />
              <p className="contact-method-label">WhatsApp</p>
              <a dir="ltr" href={whatsappHref} rel="noreferrer" target="_blank">{whatsappDisplay}</a>
            </article>

            <div className="office-address-card">
              <p className="contact-method-label"><MapPin aria-hidden="true" size={17} /> כתובת</p>
              <p>{officeAddress}</p>
              <p className="postal-address-label">כתובת למשלוח דואר</p>
              <p>{postalAddress}</p>
            </div>
          </div>

          <div className="contact-form-column" id="enquiry-form">
            <div className="contact-form-heading">
              <p className="eyebrow"><span className="eyebrow-mark" /> טופס פנייה</p>
              <h2>נחזור אליכם</h2>
              <p>השאירו פרטי קשר ונושא קצר. אל תשלחו בטופס מידע פיננסי, רפואי או ביטוחי רגיש.</p>
            </div>
            <EnquiryEmailForm />
          </div>
        </div>
      </section>

      <section className="contact-location-band">
        <div className="content-shell location-band-inner">
          <p>קוואנטום סוכנות לביטוח (2014) בע״מ</p>
          <a href={`mailto:${contactEmail}`}>
            <span>לכל שאלה, כתבו לנו</span>
            <ArrowUpLeft aria-hidden="true" size={17} />
          </a>
        </div>
      </section>
    </SiteFrame>
  );
}
