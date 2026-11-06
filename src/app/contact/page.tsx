import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import BrandMotif from "@/components/brand/BrandMotif";
import EnquiryEmailForm from "@/components/contact/EnquiryEmailForm";
import SiteFrame from "@/components/site/SiteFrame";
import {
  companyName,
  contactEmail,
  contactSections,
  officeAddress,
  officePhone,
  officePhoneHref,
  postalAddress,
  servicePages,
  whatsappDisplay,
  whatsappHref,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "יצירת קשר | קוואנטום",
  description:
    "תיאום פגישה עם קוואנטום סוכנות לביטוח: טלפון 077-8888777, office@quantum-ins.co.il, WhatsApp, או טופס פנייה. שדרות ירושלים 3, קרית מוצקין.",
  openGraph: {
    title: "יצירת קשר עם קוואנטום",
    description: "פרטי הקשר של קוואנטום וטופס פנייה מקוון.",
    type: "website",
    siteName: "קוואנטום",
  },
};

interface ContactPageProps {
  searchParams: Promise<{ service?: string | string[] }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service } = await searchParams;
  const serviceSlug = typeof service === "string" ? service : undefined;
  const fromService = servicePages.find((item) => item.slug === serviceSlug);

  return (
    <SiteFrame sections={contactSections}>
      <section className="page-hero contact-hero">
        <BrandMotif className="page-hero-motif" surface="paper" />
        <div className="content-shell contact-layout">
          <div className="contact-intro" id="contact-methods">
            <h1>נשמח להכיר.</h1>
            <p className="lead">
              {fromService
                ? `השאירו פרטים ונחזור אליכם לתיאום פגישה בנושא ${fromService.navTitle}.`
                : "השאירו פרטים ונחזור אליכם לתיאום פגישה, או פנו אלינו ישירות."}
            </p>

            <ul className="contact-methods">
              <li>
                <a className="contact-method" href={`tel:${officePhoneHref}`}>
                  <span className="contact-method-icon"><Phone aria-hidden="true" size={19} strokeWidth={1.7} /></span>
                  <span className="contact-method-label">טלפון במשרד</span>
                  <bdi className="contact-method-value" dir="ltr">{officePhone}</bdi>
                </a>
              </li>
              <li>
                <a className="contact-method" href={whatsappHref} rel="noopener noreferrer" target="_blank">
                  <span className="contact-method-icon"><MessageCircle aria-hidden="true" size={19} strokeWidth={1.7} /></span>
                  <span className="contact-method-label" lang="en">WhatsApp</span>
                  <bdi className="contact-method-value" dir="ltr">{whatsappDisplay}</bdi>
                  <span className="sr-only"> (נפתח בחלון חדש)</span>
                </a>
              </li>
              <li className="contact-method-wide">
                <a className="contact-method" href={`mailto:${contactEmail}`}>
                  <span className="contact-method-icon"><Mail aria-hidden="true" size={19} strokeWidth={1.7} /></span>
                  <span className="contact-method-label">דוא״ל</span>
                  <bdi className="contact-method-value" dir="ltr">{contactEmail}</bdi>
                </a>
              </li>
            </ul>

            <div className="contact-office">
              <span className="contact-method-icon"><MapPin aria-hidden="true" size={19} strokeWidth={1.7} /></span>
              <div>
                <p className="contact-method-label">המשרד</p>
                <p className="contact-office-address">{officeAddress}</p>
                <p className="contact-office-postal">כתובת דואר למכתבים: {postalAddress}</p>
                <p className="contact-office-company">{companyName}</p>
              </div>
            </div>
          </div>

          <div className="contact-form-card" id="enquiry-form">
            <h2>השארת פרטים</h2>
            <p>אין צורך לצרף מסמכים. נא לא לשלוח בטופס מספרי חשבון או מידע רפואי.</p>
            <EnquiryEmailForm defaultService={serviceSlug} />
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
