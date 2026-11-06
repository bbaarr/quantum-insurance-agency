"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface EnquiryEmailFormProps {
  recipientEmail: string;
}

export default function EnquiryEmailForm({ recipientEmail }: EnquiryEmailFormProps) {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const interest = String(formData.get("interest") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Area of interest: ${interest || "Not specified"}`,
      "",
      "Message:",
      message || "No message provided.",
    ].join("\n");
    const subject = encodeURIComponent(`Quantum enquiry from ${name}`);
    const encodedBody = encodeURIComponent(body);

    setNotice(
      "Your email app should open with a draft. Review it and press Send to contact Quantum. If it doesn’t open, use the Email Quantum link.",
    );
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${encodedBody}`;
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="enquiry-form-heading">
        <p className="enquiry-form-title">Send a short enquiry</p>
        <p className="enquiry-form-description">
          This prepares a draft in your email app. Nothing is sent until you review it and press Send.
        </p>
      </div>

      <div className="enquiry-grid">
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-name">Name</Label>
          <Input
            autoComplete="name"
            className="enquiry-control"
            id="enquiry-name"
            maxLength={120}
            name="name"
            required
          />
        </div>
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-email">Email</Label>
          <Input
            autoComplete="email"
            className="enquiry-control"
            id="enquiry-email"
            maxLength={254}
            name="email"
            required
            type="email"
          />
        </div>
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-phone">Phone <span>(optional)</span></Label>
          <Input
            autoComplete="tel"
            className="enquiry-control"
            id="enquiry-phone"
            maxLength={40}
            name="phone"
            type="tel"
          />
        </div>
        <div className="enquiry-field">
          <Label className="enquiry-label" htmlFor="enquiry-interest">Area of interest <span>(optional)</span></Label>
          <Input
            className="enquiry-control"
            id="enquiry-interest"
            maxLength={120}
            name="interest"
            placeholder="Pension, retirement, insurance…"
          />
        </div>
        <div className="enquiry-field enquiry-field-wide">
          <Label className="enquiry-label" htmlFor="enquiry-message">Message <span>(optional)</span></Label>
          <Textarea
            className="enquiry-control enquiry-message"
            id="enquiry-message"
            maxLength={1000}
            name="message"
            placeholder="What would you like to discuss?"
            rows={3}
          />
        </div>
      </div>

      <div className="enquiry-consent-row">
        <Checkbox id="enquiry-consent" name="consent" required value="yes" />
        <Label className="enquiry-consent-label" htmlFor="enquiry-consent">
          I agree that Quantum may contact me about this enquiry.
        </Label>
      </div>

      <p className="enquiry-privacy-note">
        The website doesn’t save these details. Please don’t include account numbers or sensitive financial, health, or policy information.
      </p>

      <Button className="enquiry-submit" type="submit">
        Prepare email <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
      </Button>
      <p aria-live="polite" className="enquiry-status" role="status">{notice}</p>
    </form>
  );
}
