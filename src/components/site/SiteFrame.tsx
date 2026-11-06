import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { QuantumMarkDefs } from "@/components/brand/QuantumMark";
import ScrollReveal from "@/components/site/ScrollReveal";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { whatsappHref } from "@/lib/site-content";

interface SiteFrameProps {
  children: ReactNode;
  sections: { id: string; label: string }[];
}

export default function SiteFrame({ children, sections }: SiteFrameProps) {
  return (
    <div className="quantum-site" dir="rtl" id="top">
      <QuantumMarkDefs />
      <a className="skip-link" href="#main-content">דילוג לתוכן הראשי</a>
      <SiteHeader sections={sections} />
      <main id="main-content" tabIndex={-1}>
        <ScrollReveal>{children}</ScrollReveal>
      </main>
      <aside aria-label="פנייה מהירה">
        <a
          aria-label="שליחת הודעה לקוואנטום ב־WhatsApp (נפתח בחלון חדש)"
          className="floating-whatsapp"
          href={whatsappHref}
          rel="noopener noreferrer"
          target="_blank"
        >
          <MessageCircle aria-hidden="true" size={22} strokeWidth={1.7} />
        </a>
      </aside>
      <SiteFooter />
    </div>
  );
}
