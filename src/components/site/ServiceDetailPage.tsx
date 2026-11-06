import Link from "next/link";
import { ArrowDownLeft, ArrowUpLeft, Check, ChevronLeft } from "lucide-react";
import SiteFrame from "@/components/site/SiteFrame";
import { servicePages, serviceSections, type ServicePageContent } from "@/lib/site-content";

interface ServiceDetailPageProps {
  service: ServicePageContent;
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const currentIndex = servicePages.findIndex((item) => item.slug === service.slug);
  const relatedServices = servicePages.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <SiteFrame sections={serviceSections}>
      <section className="page-hero service-hero" id="overview">
        <div className="content-shell page-hero-grid">
          <div className="page-hero-copy">
            <div className="breadcrumb-line">
              <Link href="/">עמוד הבית</Link>
              <ChevronLeft aria-hidden="true" size={15} />
              <span>{service.navTitle}</span>
            </div>
            <p className="eyebrow"><span className="eyebrow-mark" /> תחום שירות</p>
            <h1>{service.title}</h1>
            <p className="page-hero-summary">{service.intro}</p>
            <Link className="primary-link" href="/contact">
              לתיאום שיחה <ArrowUpLeft aria-hidden="true" size={17} />
            </Link>
          </div>
          <div aria-hidden="true" className="page-hero-mark service-page-mark">
            <span className="mark-orbit" />
            <span className="mark-slash" />
            <span className="mark-caption">Q / {String(currentIndex + 1).padStart(2, "0")}</span>
          </div>
        </div>
      </section>

      <section className="content-section" id="review">
        <div className="content-shell service-content-grid">
          <div className="section-aside">
            <p className="eyebrow">סקירה לפי הצורך</p>
            <h2>מה אפשר לבדוק יחד?</h2>
            <p>
              היקף הבדיקה נקבע לפי המידע שתשתפו, הנסיבות האישיות והנושאים שחשובים לכם.
            </p>
          </div>
          <div className="review-list">
            {service.reviewItems.map((item, index) => (
              <article className="review-item" key={item}>
                <span className="review-index">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
                <Check aria-hidden="true" className="review-check" size={17} strokeWidth={1.7} />
              </article>
            ))}
            <p className="review-disclaimer">
              הסקירה מסייעת להבין נתונים ונושאים לבירור. היא אינה מבטיחה תשואה, הכנסה או כיסוי מסוים.
            </p>
          </div>
        </div>
      </section>

      <section className="service-faq-section" id="questions">
        <div className="content-shell service-faq-grid">
          <div className="section-aside">
            <p className="eyebrow">כדאי לדעת</p>
            <h2>שאלות שעולות בדרך</h2>
          </div>
          <div className="faq-list">
            {service.faq.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}<span aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="related-section" id="next-step">
        <div className="content-shell">
          <div className="related-heading">
            <div>
              <p className="eyebrow">המשך התמונה</p>
              <h2>תחומים נוספים לבדיקה</h2>
            </div>
            <Link href="/contact">לכל אפשרויות הקשר <ArrowUpLeft aria-hidden="true" size={16} /></Link>
          </div>
          <div className="related-links">
            {relatedServices.map((item, index) => (
              <Link className="related-link" href={`/services/${item.slug}`} key={item.slug}>
                <span className="related-index">{String(servicePages.findIndex((entry) => entry.slug === item.slug) + 1).padStart(2, "0")}</span>
                <span className="related-title">{item.navTitle}</span>
                <ArrowDownLeft aria-hidden="true" size={18} />
              </Link>
            ))}
          </div>
          <p className="next-step-callout">
            {service.summary}
          </p>
          <Link className="text-link" href="/contact">
            <span>נדבר על מה שרלוונטי לכם</span>
            <ArrowUpLeft aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>
    </SiteFrame>
  );
}
