import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

const navigation = [
  { href: "/#services", label: "השירותים שלנו" },
  { href: "/#process", label: "איך מתקדמים" },
  { href: "/#questions", label: "שאלות נפוצות" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="brand-plaque" href="/" aria-label="קוואנטום — לעמוד הבית">
          <Image
            alt="קוואנטום — ביטוח, פנסיה, פיננסים"
            className="brand-logo"
            height={402}
            priority
            sizes="156px"
            src="/quantum-logo.png"
            width={618}
          />
        </Link>

        <nav aria-label="ניווט ראשי" className="primary-navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link className="header-contact" href="/contact">
          <span>נדבר?</span>
          <ArrowUpLeft aria-hidden="true" size={17} strokeWidth={1.8} />
        </Link>
      </div>
    </header>
  );
}
