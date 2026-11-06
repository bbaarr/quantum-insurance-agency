import type { Metadata } from "next";
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

            <dl className="contact-details">
              <div>
                <dt>טלפון</dt>
                <dd><a href={`tel:${officePhoneHref}`}><bdi dir="ltr">{officePhone}</bdi></a></dd>
              </div>
              <div>
                <dt>דוא״ל</dt>
                <dd><a href={`mailto:${contactEmail}`}><bdi dir="ltr">{contactEmail}</bdi></a></dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd><a href={whatsappHref} rel="noopener noreferrer" target="_blank"><bdi dir="ltr">{whatsappDisplay}</bdi></a></dd>
              </div>
              <div>
                <dt>המשרד</dt>
                <dd>{officeAddress}</dd>
              </div>
              <div>
                <dt>דואר למכתבים</dt>
                <dd>{postalAddress}</dd>
              </div>
            </dl>
            <p className="contact-company">{companyName}</p>
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
