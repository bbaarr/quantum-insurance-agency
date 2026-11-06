import type { Metadata } from "next";
import Link from "next/link";
import BrandMotif from "@/components/brand/BrandMotif";
import SiteFrame from "@/components/site/SiteFrame";
import {
  accessibilitySections,
  accessibilityStatement,
  companyName,
  officeAddress,
  postalAddress,
} from "@/lib/site-content";

export const metadata: Metadata = {
  title: "הצהרת נגישות | קוואנטום",
  description:
    "הצהרת הנגישות של אתר קוואנטום סוכנות לביטוח: התאמת האתר לתקן הישראלי 5568 ברמה AA, מגבלות ידועות ופרטי רכז הנגישות.",
};

const features = [
  "מבנה כותרות היררכי, אזורי ניווט מסומנים וקישור ״דילוג לתוכן הראשי״ בראש כל עמוד.",
  "תפעול מלא באמצעות המקלדת בלבד, עם סימון פוקוס ברור על כל קישור, כפתור ושדה.",
  "ניגודיות צבעים של 4.5:1 לפחות בטקסט רגיל ו־3:1 לפחות בטקסט גדול.",
  "טקסט חלופי ללוגו ולתמונות בעלות משמעות; עיטורים גרפיים מוסתרים מתוכנות קריאת מסך.",
  "טופס הפנייה כולל תוויות לכל שדה, סימון שדות רשות והודעות מצב המוקראות לתוכנות קריאת מסך.",
  "האתר מוגדר בשפה העברית ובכיוון כתיבה מימין לשמאל; מספרי טלפון וכתובות דוא״ל מוצגים בכיוון הנכון.",
  "התאמה לגדלי מסך שונים ולהגדלת תצוגה עד 200% ללא אובדן תוכן או צורך בגלילה לרוחב.",
  "כיבוד ההגדרה ״הפחתת תנועה״ במערכת ההפעלה: האנימציות והגלילה החלקה מבוטלות, והתוכן מוצג במלואו.",
  "קישורים הנפתחים בחלון חדש מסומנים ככאלה עבור תוכנות קריאת מסך.",
];

export default function AccessibilityPage() {
  const s = accessibilityStatement;

  return (
    <SiteFrame sections={accessibilitySections}>
      <section className="page-hero">
        <BrandMotif className="page-hero-motif" surface="paper" />
        <div className="content-shell page-hero-inner">
          <nav aria-label="מיקום בעמוד" className="breadcrumb">
            <Link href="/">עמוד הבית</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">הצהרת נגישות</span>
          </nav>
          <h1>הצהרת נגישות</h1>
          <p className="lead">
            {companyName} רואה חשיבות רבה במתן שירות שוויוני לכלל הלקוחות, ופועלת כדי שהאתר יהיה נוח ונגיש גם לאנשים עם מוגבלות.
          </p>
        </div>
      </section>

      <section className="section section-tight" id="accessibility-level">
        <div className="content-shell statement">
          <h2>רמת הנגישות באתר</h2>
          <p>
            האתר הותאם לדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג–2013, ולתקן הישראלי ת״י 5568 ״קווים מנחים לנגישות תכנים באינטרנט״ ברמה AA, המבוסס על הנחיות WCAG 2.0 של ארגון W3C.
          </p>
          <p>
            האתר מותאם לדפדפנים הנפוצים בגרסאותיהם העדכניות, ונבדק במחשב ובטלפון נייד, ובכלי בדיקה אוטומטיים וידניים לנגישות.
          </p>

          <h2 id="accessibility-features">מה הונגש באתר</h2>
          <ul className="statement-list">
            {features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>

          <h2 id="accessibility-limits">מגבלות ידועות</h2>
          <ul className="statement-list">
            <li>קישורי WhatsApp, טלפון ודוא״ל פותחים שירותים חיצוניים, שנגישותם באחריות ספקיהם.</li>
            <li>האנימציה בעמוד הבית (״מכל החלקים לתמונה אחת״) היא קישוט חזותי; התוכן שלה מוקרא במלואו לתוכנות קריאת מסך, ומוצג כטקסט סטטי כשההגדרה ״הפחתת תנועה״ פעילה.</li>
          </ul>
          <p>
            אנו ממשיכים לבדוק ולשפר את נגישות האתר. אם נתקלתם בקושי, נשמח שתעדכנו אותנו ונפעל לתקן אותו בהקדם.
          </p>

          <h2>נגישות המשרד</h2>
          <p>המשרד נמצא ב{officeAddress}.</p>
          <p>{s.officeAccessibility}</p>

          <h2 id="accessibility-contact">פנייה לרכז הנגישות</h2>
          <p>
            נתקלתם בבעיית נגישות באתר או במשרד, או שאתם זקוקים למידע בפורמט נגיש? פנו לרכז הנגישות שלנו ונחזור אליכם בהקדם:
          </p>
          <dl className="contact-details statement-contact">
            <div>
              <dt>רכז/ת הנגישות</dt>
              <dd>{s.coordinatorName}</dd>
            </div>
            <div>
              <dt>טלפון</dt>
              <dd><a href={`tel:${s.coordinatorPhoneHref}`}><bdi dir="ltr">{s.coordinatorPhone}</bdi></a></dd>
            </div>
            <div>
              <dt>דוא״ל</dt>
              <dd><a href={`mailto:${s.coordinatorEmail}`}><bdi dir="ltr">{s.coordinatorEmail}</bdi></a></dd>
            </div>
            <div>
              <dt>דואר</dt>
              <dd>{postalAddress}</dd>
            </div>
          </dl>
          <p>כדי שנוכל לטפל בפנייה, נא לפרט את הבעיה, את העמוד שבו נתקלתם בה ואת הדפדפן או הטכנולוגיה המסייעת שבהם השתמשתם.</p>

          <p className="statement-updated">הצהרה זו עודכנה לאחרונה ב־{s.updated}.</p>
        </div>
      </section>
    </SiteFrame>
  );
}
