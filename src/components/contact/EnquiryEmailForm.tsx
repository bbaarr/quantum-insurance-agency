"use client";

import { useActionState, useEffect, useRef } from "react";
import { ArrowUpLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendQuantumEnquiry } from "@/app/actions";
import { contactEmail, officePhone, officePhoneHref, servicePages } from "@/lib/site-content";

const initialState = { status: "idle" as const, message: "" };

interface EnquiryEmailFormProps {
  /** Service slug to preselect, when the visitor arrives from a service page. */
  defaultService?: string;
}

export default function EnquiryEmailForm({ defaultService }: EnquiryEmailFormProps) {
  const preselected = servicePages.find((service) => service.slug === defaultService)?.navTitle ?? "";
  const [state, formAction, pending] = useActionState(sendQuantumEnquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <form action={formAction} className="enquiry-form" ref={formRef}>
      <div aria-hidden="true" className="enquiry-honeypot">
        <Label htmlFor="enquiry-website">השאירו שדה זה ריק</Label>
        <Input autoComplete="off" id="enquiry-website" name="website" tabIndex={-1} />
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
          <select className="enquiry-control enquiry-select" defaultValue={preselected} id="enquiry-service" name="service">
            <option value="">בחירת תחום</option>
            {servicePages.map((service) => (
              <option key={service.slug} value={service.navTitle}>{service.navTitle}</option>
            ))}
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
        הפרטים נשלחים למשרד בדוא״ל דרך Imagine. האתר אינו שומר רשימת פניות; אין לכלול מידע פיננסי או רפואי רגיש.
      </p>

      {state.status === "error" ? (
        <p className="form-setup-notice">
          אפשר לנסות שוב או לפנות ישירות ל־<a dir="ltr" href={`mailto:${contactEmail}`}>{contactEmail}</a> או <a dir="ltr" href={`tel:${officePhoneHref}`}>{officePhone}</a>.
        </p>
      ) : null}

      <Button className="enquiry-submit" disabled={pending} type="submit">
        {pending ? "שולחים…" : "שליחת פרטים"}
        <ArrowUpLeft aria-hidden="true" size={17} strokeWidth={1.8} />
      </Button>
      <p aria-live="polite" className={`enquiry-status ${pending ? "pending" : state.status}`} role="status">
        {pending ? "שולחים את הפנייה…" : state.message}
      </p>
    </form>
  );
}
