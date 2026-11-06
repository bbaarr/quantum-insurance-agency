import Link from "next/link";
import QuantumLogo from "@/components/brand/QuantumLogo";
import FloatingContents from "@/components/site/FloatingContents";
import { servicePages } from "@/lib/site-content";

interface SiteHeaderProps {
  sections: { id: string; label: string }[];
}

export default function SiteHeader({ sections }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link aria-label="קוואנטום — לעמוד הבית" className="header-logo" href="/">
          <QuantumLogo layout="wordmark" tone="dark" />
        </Link>

        <nav aria-label="ניווט ראשי" className="primary-navigation">
          {servicePages.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>{service.navTitle}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="button button-ink header-cta" href="/contact">
            לתיאום פגישה
          </Link>
          <FloatingContents sections={sections} />
        </div>
      </div>
      <span aria-hidden="true" className="scroll-progress" />
    </header>
  );
}
