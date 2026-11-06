"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

function isSupportedEndpoint(endpoint: string): boolean {
  try {
    const url = new URL(endpoint);
    return (
      url.protocol === "https:" &&
      url.hostname === "formspree.io" &&
      /^\/f\/[a-zA-Z0-9]+\/?$/.test(url.pathname)
    );
  } catch {
    return false;
  }
}

const formIsConfigured = isSupportedEndpoint(formEndpoint);

type SubmissionState = "idle" | "sending" | "success" | "error";

export default function EnquiryEmailForm() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formIsConfigured) {
      setSubmissionState("error");
      return;
    }

    const form = event.currentTarget;
    setSubmissionState("sending");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        setSubmissionState("error");
        return;
      }

      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  const statusMessage =
    submissionState === "success"
      ? "הפנייה נשלחה. תודה — נחזור אליכם לפי הפרטים שמסרתם."
      : submissionState === "error"
        ? "השליחה לא הושלמה. אפשר לפנות אלינו ישירות בדוא״ל או בטלפון."
        : submissionState === "sending"
          ? "שולחים את הפנייה…"
          : "";

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="enquiry-form-heading">
        <p className="enquiry-form-title">נשמח לשמוע מכם</p>
        <p className="enquiry-form-description">
          השאירו פרטי קשר ונושא לפנייה. אין לכלול מספרי חשבון או מידע פיננסי, רפואי או ביטוחי רגיש.
        </p>
      </div>

      <div className="enquiry-grid">
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-name">שם מלא</Label>
          <Input autoComplete="name" className="enquiry-control" id="enquiry-name" maxLength={120} name="name" required />
        </div>
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-phone">טלפון</Label>
          <Input autoComplete="tel" className="enquiry-control" id="enquiry-phone" maxLength={40} name="phone" required type="tel" />
        </div>
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-email">כתובת דוא״ל</Label>
          <Input autoComplete="email" className="enquiry-control" dir="ltr" id="enquiry-email" maxLength={254} name="email" required type="email" />
        </div>
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-service">תחום שמעניין אתכם <span>(לא חובה)</span></Label>
          <select className="enquiry-control enquiry-select" defaultValue="" id="enquiry-service" name="service">
            <option value="">בחירת תחום</option>
            <option value="תכנון פיננסי">תכנון פיננסי</option>
            <option value="תכנון פנסיוני">תכנון פנסיוני</option>
            <option value="תכנון פרישה">תכנון פרישה</option>
            <option value="ביטוחי פרט">ביטוחי פרט</option>
            <option value="ביטוח רכוש ועסק">ביטוח רכוש ועסק</option>
            <option value="אחר">אחר</option>
          </select>
        </div>
        <div className="enquiry-field enquiry-field-wide">
          <Label className="enquiry-label" htmlFor="enquiry-message">הודעה <span>(לא חובה)</span></Label>
          <Textarea className="enquiry-control enquiry-message" id="enquiry-message" maxLength={1000} name="message" placeholder="בכמה מילים, במה נוכל לעזור?" rows={4} />
        </div>
      </div>

      <div className="enquiry-consent-row">
        <Checkbox id="enquiry-consent" name="consent" required value="yes" />
        <Label className="enquiry-consent-label" htmlFor="enquiry-consent">
          אני מסכים/ה שקוואנטום תחזור אליי בנוגע לפנייה זו.
        </Label>
      </div>

      <p className="enquiry-privacy-note">
        הפנייה נשלחת באמצעות Formspree, שירות חיצוני. פרטים עשויים להישמר שם לפי תנאי השירות והמסלול; באתר קוואנטום לא נשמרת רשימת פניות.
      </p>

      {!formIsConfigured ? (
        <p className="form-setup-notice" role="status">
          הטופס המקוון עדיין לא הופעל. עד להפעלתו אפשר לפנות אלינו ישירות בדוא״ל או בטלפון.
        </p>
      ) : null}

      <Button className="enquiry-submit" disabled={!formIsConfigured || submissionState === "sending" || submissionState === "success"} type="submit">
        {submissionState === "sending" ? "שולחים…" : submissionState === "success" ? "הפנייה נשלחה" : "שליחת פרטים"}
        <ArrowUpLeft aria-hidden="true" size={17} strokeWidth={1.8} />
      </Button>
      <p aria-live="polite" className={`enquiry-status ${submissionState}`} role="status">{statusMessage}</p>
    </form>
  );
}
