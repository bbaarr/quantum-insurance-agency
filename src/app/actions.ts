"use server";

import "server-only";
import { headers } from "next/headers";
import { sendEmail } from "@/lib/email";
import { servicePages } from "@/lib/site-content";

/**
 * Per-IP throttle for the contact form, so it can't be used to flood the office
 * inbox. In memory, so it is per server instance — enough to stop a script from
 * one address; it is not a substitute for a shared store under heavy abuse.
 */
const ENQUIRY_WINDOW_MS = 10 * 60 * 1000;
const ENQUIRY_MAX_PER_WINDOW = 5;
const enquiryHits = new Map<string, number[]>();

async function enquiryRateLimited(): Promise<boolean> {
  const h = await headers();
  const ip =
    h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  const now = Date.now();
  const recent = (enquiryHits.get(ip) ?? []).filter((t) => now - t < ENQUIRY_WINDOW_MS);
  if (recent.length >= ENQUIRY_MAX_PER_WINDOW) {
    enquiryHits.set(ip, recent);
    return true;
  }
  recent.push(now);
  enquiryHits.set(ip, recent);
  if (enquiryHits.size > 10_000) {
    for (const [key, times] of enquiryHits) {
      if (times.every((t) => now - t >= ENQUIRY_WINDOW_MS)) enquiryHits.delete(key);
    }
  }
  return false;
}

export type EnquiryField = "name" | "phone" | "email" | "service" | "message" | "consent";

interface EnquirySubmissionState {
  status: "idle" | "success" | "error";
  message: string;
  /** The field the error is about, so the form can mark it and move focus to it. */
  field?: EnquiryField;
}

const serviceOptions = [...servicePages.map((service) => service.navTitle), "אחר"];

function readText(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(/[&<>"']/g, (character) => entities[character] ?? character);
}

export async function sendQuantumEnquiry(
  _previousState: EnquirySubmissionState,
  formData: FormData,
): Promise<EnquirySubmissionState> {
  const name = readText(formData, "name").replace(/\s+/g, " ");
  const phone = readText(formData, "phone");
  const email = readText(formData, "email");
  const service = readText(formData, "service");
  const message = readText(formData, "message");

  if (readText(formData, "website")) {
    return {
      status: "error",
      message: "לא הצלחנו לקבל את הפנייה. אפשר לנסות שוב או ליצור קשר ישירות.",
    };
  }

  if (!name || name.length > 120) {
    return { status: "error", field: "name", message: "שם מלא: נא למלא שם של עד 120 תווים." };
  }

  if (!/^[0-9+().\s-]{7,30}$/.test(phone)) {
    return {
      status: "error",
      field: "phone",
      message: "טלפון: נא להזין מספר טלפון של 7 ספרות לפחות, לדוגמה 050-1234567.",
    };
  }

  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      field: "email",
      message: "כתובת דוא״ל: נא להזין כתובת תקינה, לדוגמה name@example.com.",
    };
  }

  if (message.length > 1000) {
    return { status: "error", field: "message", message: "הודעה: אפשר לכתוב עד 1,000 תווים." };
  }

  if (service && !serviceOptions.some((option) => option === service)) {
    return { status: "error", field: "service", message: "תחום: נא לבחור תחום מהרשימה." };
  }

  if (readText(formData, "consent") !== "yes") {
    return {
      status: "error",
      field: "consent",
      message: "כדי שנוכל לחזור אליכם, יש לאשר יצירת קשר בנוגע לפנייה.",
    };
  }

  if (await enquiryRateLimited()) {
    return {
      status: "error",
      message: "נשלחו כמה פניות ברצף. אפשר לנסות שוב בעוד כמה דקות או ליצור קשר ישירות.",
    };
  }

  const html = [
    "<h2>פנייה חדשה מאתר קוואנטום</h2>",
    `<p><strong>שם:</strong> ${escapeHtml(name)}</p>`,
    `<p><strong>טלפון:</strong> ${escapeHtml(phone)}</p>`,
    `<p><strong>דוא״ל:</strong> ${escapeHtml(email)}</p>`,
    `<p><strong>תחום:</strong> ${escapeHtml(service || "לא צוין")}</p>`,
    `<p><strong>הודעה:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>") || "לא צורפה הודעה"}</p>`,
  ].join("");

  try {
    const sent = await sendEmail({
      to: "office@quantum-ins.co.il",
      replyTo: email,
      subject: "פנייה חדשה דרך אתר קוואנטום",
      html,
      fromName: "Quantum Insurance Agency",
    });

    if (!sent) {
      return {
        status: "error",
        message: "לא הצלחנו לשלוח את הפנייה כרגע. אפשר לנסות שוב או ליצור קשר ישירות.",
      };
    }

    return {
      status: "success",
      message: "הפנייה נשלחה למשרד. תודה — נחזור אליכם לפי הפרטים שמסרתם.",
    };
  } catch {
    return {
      status: "error",
      message: "לא הצלחנו לשלוח את הפנייה כרגע. אפשר לנסות שוב או ליצור קשר ישירות.",
    };
  }
}
