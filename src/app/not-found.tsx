import type { Metadata } from "next";
import Link from "next/link";
import BrandMotif from "@/components/brand/BrandMotif";
import SiteFrame from "@/components/site/SiteFrame";

export const metadata: Metadata = {
  title: "העמוד לא נמצא | קוואנטום",
  description: "העמוד שחיפשתם לא נמצא באתר קוואנטום סוכנות לביטוח.",
};

export default function NotFound() {
  return (
    <SiteFrame sections={[]}>
      <section className="page-hero">
        <BrandMotif className="page-hero-motif" surface="paper" />
        <div className="content-shell page-hero-inner">
          <h1>העמוד לא נמצא.</h1>
          <p className="lead">
            ייתכן שהקישור שגוי או שהעמוד הועבר. אפשר לחזור לעמוד הבית או לפנות אלינו ישירות.
          </p>
          <div className="hero-actions">
            <Link className="button button-ink" href="/">לעמוד הבית</Link>
            <Link className="button button-quiet" href="/contact">יצירת קשר</Link>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
