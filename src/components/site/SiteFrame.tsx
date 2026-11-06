import type { ReactNode } from "react";
import FloatingContents from "@/components/site/FloatingContents";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

interface SiteFrameProps {
  children: ReactNode;
  sections: { id: string; label: string }[];
}

export default function SiteFrame({ children, sections }: SiteFrameProps) {
  return (
    <div className="quantum-site" dir="rtl" id="top">
      <a className="skip-link" href="#main-content">דילוג לתוכן הראשי</a>
      <SiteHeader />
      <FloatingContents sections={sections} />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
