import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BrandMotif from "@/components/brand/BrandMotif";
import QuantumMark from "@/components/brand/QuantumMark";
import SiteFrame from "@/components/site/SiteFrame";
import { servicePages, serviceSections, type ServiceList, type ServicePageContent } from "@/lib/site-content";

interface ServiceDetailPageProps {
  service: ServicePageContent;
}

function PointList({ list }: { list: ServiceList }) {
  const ListTag = list.numbered ? "ol" : "ul";
  return (
    <div className="point-block">
      <h2>{list.title}</h2>
      <ListTag className={list.numbered ? "point-list point-list-numbered" : "point-list"}>
        {list.items.map((item, index) => (
          <li key={item.label ?? item.text}>
            {list.numbered ? <span className="point-number">{index + 1}</span> : <span aria-hidden="true" className="point-tick" />}
            <p>
              {item.label ? <strong>{item.label}{item.text ? " – " : ""}</strong> : null}
              {item.text}
            </p>
          </li>
        ))}
      </ListTag>
    </div>
  );
}

export default function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const [lead, ...moreIntro] = service.intro;
  const otherServices = servicePages.filter((item) => item.slug !== service.slug);
  const contactHref = `/contact?service=${service.slug}`;

  return (
    <SiteFrame sections={serviceSections}>
      <section className="page-hero" id="overview">
        <BrandMotif className="page-hero-motif" data-parallax="8" surface="paper" />
        <div className="content-shell page-hero-inner">
          <nav aria-label="מיקום בעמוד" className="breadcrumb">
            <Link href="/">עמוד הבית</Link>
            <span aria-hidden="true">/</span>
            <span>{service.navTitle}</span>
          </nav>
          <h1>{service.title}</h1>
          <p className="lead">{lead}</p>
          <Link className="button button-ink" href={contactHref}>לתיאום פגישה</Link>
        </div>
      </section>

      {moreIntro.length > 0 ? (
        <section className="section section-tight">
          <div className="content-shell prose-layout">
            <QuantumMark className="prose-mark" />
            <div className="prose">
              {moreIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-paper" id="details">
        <div className="content-shell points-layout">
          <PointList list={service.lists[0]} />
          <PointList list={service.lists[1]} />
        </div>
      </section>

      <section className="closing-statement" id="next-step">
        <div className="content-shell closing-inner">
          <QuantumMark className="closing-mark" tone="light" />
          <div>
            {service.closing.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Link className="button button-light" href={contactHref}>לתיאום פגישה</Link>
        </div>
      </section>

      <section className="section" id="questions">
        <div className="content-shell split-layout">
          <header className="section-header">
            <p className="kicker">שאלות ותשובות</p>
            <h2>{service.navTitle}: מה שואלים אותנו.</h2>
          </header>
          <div className="faq-list">
            {service.faq.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="content-shell">
          <header className="section-header">
            <p className="kicker">תחומים נוספים</p>
            <h2>כל התחומים תחת קורת גג אחת.</h2>
          </header>
          <ul className="service-index service-index-compact">
            {otherServices.map((item) => (
              <li key={item.slug}>
                <Link className="service-row" href={`/services/${item.slug}`}>
                  <span className="service-row-title">{item.title}</span>
                  <span className="service-row-summary">{item.summary}</span>
                  <ArrowLeft aria-hidden="true" className="service-row-arrow" size={22} strokeWidth={1.5} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SiteFrame>
  );
}
