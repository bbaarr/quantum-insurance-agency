"use server";

import "server-only";
import { sendEmail } from "@/lib/email";

interface EnquirySubmissionState {
  status: "idle" | "success" | "error";
  message: string;
}

const serviceOptions = [
  "תכנון פיננסי",
  "תכנון פנסיוני",
  "תכנון פרישה",
  "ביטוחי פרט",
  "ביטוח רכוש ועסק",
  "אחר",
] as const;

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

  if (!name || name.length > 120 || !/^[0-9+().\s-]{7,30}$/.test(phone)) {
    return {
      status: "error",
      message: "נא לבדוק את השם ואת מספר הטלפון ולנסות שוב.",
    };
  }

  if (
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length > 1000
  ) {
    return {
      status: "error",
      message: "נא לבדוק את כתובת הדוא״ל ואת אורך ההודעה ולנסות שוב.",
    };
  }

  if (service && !serviceOptions.some((option) => option === service)) {
    return {
      status: "error",
      message: "נא לבחור תחום מהרשימה ולנסות שוב.",
    };
  }

  if (readText(formData, "consent") !== "yes") {
    return {
      status: "error",
      message: "כדי שנוכל לחזור אליכם, יש לאשר יצירת קשר בנוגע לפנייה.",
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
