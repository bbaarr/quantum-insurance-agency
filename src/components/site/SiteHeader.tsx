import Link from "next/link";
import QuantumLogo from "@/components/brand/QuantumLogo";
import { servicePages } from "@/lib/site-content";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link aria-label="קוואנטום — לעמוד הבית" className="header-logo" href="/">
          <QuantumLogo layout="inline" tone="dark" />
        </Link>

        <nav aria-label="ניווט ראשי" className="primary-navigation">
          {servicePages.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>{service.navTitle}</Link>
          ))}
        </nav>

        <Link className="button button-ink header-cta" href="/contact">
          לתיאום פגישה
        </Link>
      </div>
      <span aria-hidden="true" className="scroll-progress" />
    </header>
  );
}
