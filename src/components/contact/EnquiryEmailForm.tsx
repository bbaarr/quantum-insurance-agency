"use client";

import { startTransition, useActionState, useEffect, type FormEvent } from "react";
import { ArrowUpLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { sendQuantumEnquiry, type EnquiryField } from "@/app/actions";
import { contactEmail, officePhone, officePhoneHref, servicePages } from "@/lib/site-content";

interface FormState {
  status: "idle" | "success" | "error";
  message: string;
  field?: EnquiryField;
  /** Counts successful sends; the form remounts (and clears) each time it changes. */
  round: number;
}

const initialState: FormState = { status: "idle", message: "", round: 0 };

async function submitEnquiry(previous: FormState, formData: FormData): Promise<FormState> {
  const result = await sendQuantumEnquiry(previous, formData);
  return { ...result, round: previous.round + (result.status === "success" ? 1 : 0) };
}

const fieldIds: Record<EnquiryField, string> = {
  name: "enquiry-name",
  phone: "enquiry-phone",
  email: "enquiry-email",
  service: "enquiry-service",
  message: "enquiry-message",
  consent: "enquiry-consent",
};

interface EnquiryEmailFormProps {
  /** Service slug to preselect, when the visitor arrives from a service page. */
  defaultService?: string;
}

export default function EnquiryEmailForm({ defaultService }: EnquiryEmailFormProps) {
  const preselected = servicePages.find((service) => service.slug === defaultService)?.navTitle ?? "";
  const [state, formAction, pending] = useActionState(submitEnquiry, initialState);
  useEffect(() => {
    // Move focus to the field the error is about (IS 5568 / WCAG 3.3.1).
    if (state.status === "error" && state.field) {
      const id = fieldIds[state.field];
      const target =
        state.field === "consent"
          ? document.querySelector<HTMLElement>('[aria-labelledby="enquiry-consent-label"]')
          : document.getElementById(id);
      target?.focus();
    } else if (state.status === "error") {
      // A send failure isn't about one field: move focus to the message itself.
      document.getElementById("enquiry-status")?.focus();
    }
  }, [state]);

  /** Marks the field the last error was about, and ties it to the error message. */
  const errorProps = (field: EnquiryField) =>
    state.status === "error" && state.field === field
      ? { "aria-invalid": true, "aria-describedby": "enquiry-status" }
      : {};

  // Submit without React's automatic form reset, so an error never wipes what was typed.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  };

  // Browser validation messages follow the browser's language; give them in Hebrew.
  const handleInvalid = (event: FormEvent<HTMLFormElement>) => {
    const field = event.target as HTMLInputElement;
    if (!field.validity || field.validity.customError) return;
    const label = field.labels?.[0]?.textContent?.trim() ?? "השדה";
    if (field.validity.valueMissing) {
      field.setCustomValidity(field.type === "checkbox" ? "יש לאשר כדי שנוכל לחזור אליכם." : `נא למלא: ${label}.`);
    } else if (field.type === "email") {
      field.setCustomValidity("נא להזין כתובת דוא״ל תקינה, לדוגמה name@example.com.");
    } else if (field.type === "tel") {
      field.setCustomValidity("נא להזין מספר טלפון של 7 ספרות לפחות, לדוגמה 050-1234567.");
    }
  };
  const clearCustomValidity = (event: FormEvent<HTMLFormElement>) => {
    (event.target as HTMLInputElement).setCustomValidity?.("");
  };

  return (
    <form
      action={formAction}
      className="enquiry-form"
      key={state.round}
      onChange={clearCustomValidity}
      onInput={clearCustomValidity}
      onInvalidCapture={handleInvalid}
      onSubmit={handleSubmit}
    >
      <div aria-hidden="true" className="enquiry-honeypot">
        <Label htmlFor="enquiry-website">השאירו שדה זה ריק</Label>
        <Input autoComplete="off" id="enquiry-website" name="website" tabIndex={-1} />
      </div>

      <div className="enquiry-grid">
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-name">שם מלא</Label>
          <Input autoComplete="name" className="enquiry-control" id="enquiry-name" maxLength={120} name="name" required {...errorProps("name")} />
        </div>
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-phone">טלפון</Label>
          <Input autoComplete="tel" className="enquiry-control" id="enquiry-phone" maxLength={30} name="phone" pattern="[0-9+\(\)\.\s\-]{7,30}" required type="tel" {...errorProps("phone")} />
        </div>
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-email">כתובת דוא״ל</Label>
          <Input autoComplete="email" className="enquiry-control" dir="ltr" id="enquiry-email" maxLength={254} name="email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" required type="email" {...errorProps("email")} />
        </div>
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-service">תחום שמעניין אתכם <span>(לא חובה)</span></Label>
          <select className="enquiry-control enquiry-select" defaultValue={preselected} id="enquiry-service" name="service" {...errorProps("service")}>
            <option value="">בחירת תחום</option>
            {servicePages.map((service) => (
              <option key={service.slug} value={service.navTitle}>{service.navTitle}</option>
            ))}
            <option value="אחר">אחר</option>
          </select>
        </div>
        <div className="enquiry-field enquiry-field-wide">
          <Label className="enquiry-label" htmlFor="enquiry-message">הודעה <span>(לא חובה)</span></Label>
          <Textarea className="enquiry-control enquiry-message" id="enquiry-message" maxLength={1000} name="message" {...errorProps("message")} placeholder="בכמה מילים, במה נוכל לעזור?" rows={4} />
        </div>
      </div>

      <div className="enquiry-consent-row">
        <Checkbox aria-labelledby="enquiry-consent-label" aria-required="true" id="enquiry-consent" name="consent" required value="yes" {...errorProps("consent")} />
        <Label className="enquiry-consent-label" htmlFor="enquiry-consent" id="enquiry-consent-label">
          אני מסכים/ה שקוואנטום תחזור אליי בנוגע לפנייה זו.
        </Label>
      </div>

      <p className="enquiry-privacy-note">
        הפרטים נשלחים למשרד בדוא״ל דרך Imagine. האתר אינו שומר רשימת פניות; אין לכלול מידע פיננסי או רפואי רגיש.
      </p>

      {state.status === "error" ? (
        <p className="form-setup-notice">
          אפשר לנסות שוב או לפנות ישירות ל־<a dir="ltr" href={`mailto:${contactEmail}`}>{contactEmail}</a> או <a href={`tel:${officePhoneHref}`}><bdi className="nowrap" dir="ltr">{officePhone}</bdi></a>.
        </p>
      ) : null}

      <Button className="enquiry-submit" disabled={pending} type="submit">
        {pending ? "שולחים…" : "שליחת פרטים"}
        <ArrowUpLeft aria-hidden="true" size={17} strokeWidth={1.8} />
      </Button>
      <p aria-live="polite" id="enquiry-status" tabIndex={-1} className={`enquiry-status ${pending ? "pending" : state.status}`} role="status">
        {pending ? "שולחים את הפנייה…" : state.message}
      </p>
    </form>
  );
}
