import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUpRight, Mail, MessageCircle } from "lucide-react";

const emailAddress = "office@quantum-ins.co.il";
const phoneNumber = "+972538536090";
const emailHref = `mailto:${emailAddress}?subject=Financial%20or%20insurance%20planning`;
const whatsappHref =
  "https://wa.me/972538536090?text=Hi%20Quantum%2C%20I%27d%20like%20to%20ask%20about%20your%20services.";

const services = [
  {
    id: "financial-planning",
    number: "01",
    title: "Family financial planning",
    description:
      "Bring savings, investments, pensions, assets and liabilities into one household picture. Set short- and long-term goals, compare relevant options and revisit the plan as life changes.",
    points: ["Savings & investments", "Assets & commitments", "Family goals", "Periodic reviews"],
  },
  {
    id: "pension-planning",
    number: "02",
    title: "Pension planning",
    description:
      "Map active and inactive plans, contributions, accumulated balances, investment tracks, fees and existing cover. Review the picture when work, income or family circumstances shift.",
    points: ["Active & inactive plans", "Contributions & balances", "Fees & investment tracks", "Existing cover"],
  },
  {
    id: "retirement-planning",
    number: "03",
    title: "Retirement planning",
    description:
      "Review expected income sources, savings, assets, obligations, goals and monthly cash flow. Identify tax-related questions and topics to discuss with relevant professionals.",
    points: ["Income sources", "Goals & monthly budget", "Assets & obligations", "Questions for specialists"],
  },
  {
    id: "personal-protection",
    number: "04",
    title: "Personal insurance & protection",
    description:
      "Review existing protection against illness, injury or loss of income, and consider what may fit your circumstances. Any cover is subject to underwriting, law and the policy issued.",
    points: ["Life & mortgage life", "Health cover", "Loss of earning ability", "Critical illness & accident", "Long-term care where available"],
  },
  {
    id: "property-insurance",
    number: "05",
    title: "Property & business insurance",
    description:
      "Consider cover for vehicles, homes, contents, businesses and liability. Compare what is covered with exclusions, deductibles, limits and any extensions under consideration.",
    points: ["Vehicle: compulsory, third-party & comprehensive", "Home, building & contents", "Business property", "Third-party & professional liability"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Start with the full picture",
    description:
      "Talk through your priorities and map the savings, plans, assets, obligations and cover already in place.",
  },
  {
    number: "02",
    title: "Understand the options",
    description:
      "Review relevant terms, fees, limits and alternatives, and identify questions that need a closer look.",
  },
  {
    number: "03",
    title: "Revisit when life changes",
    description:
      "Family, employment, income and goals can shift. Periodic reviews help bring the plan back to your current circumstances.",
  },
];

const faqs = [
  {
    question: "Can I review plans or policies I already have?",
    answer:
      "Yes. The review can map the plans and policies you share, explain relevant details such as fees, cover and exclusions, and highlight questions or gaps to consider. Any change depends on the provider, underwriting and applicable terms.",
  },
  {
    question: "Does a review guarantee a particular return or retirement income?",
    answer:
      "No. Investment returns and future income are not guaranteed. Any estimate depends on assumptions and the specific plans and circumstances involved.",
  },
  {
    question: "When should I review my financial or pension plan?",
    answer:
      "A review may be useful when your family, employment, income or goals change. Quantum’s brochure also describes revisiting a financial plan periodically, around every one to two years.",
  },
  {
    question: "What determines whether an insurance claim is covered?",
    answer:
      "The issued policy sets the cover, exclusions, limits and conditions. Coverage is also subject to underwriting and applicable law; the policy documents govern the actual cover.",
  },
];

export const metadata: Metadata = {
  title: "Quantum | Financial & Insurance Planning",
  description:
    "Quantum helps families review financial plans, pensions, retirement and insurance cover. Get in touch to discuss your next step.",
  openGraph: {
    title: "Quantum | Financial & Insurance Planning",
    description:
      "A clearer view of family finances, pensions, retirement and insurance cover.",
    type: "website",
    siteName: "Quantum Insurance Agency",
  },
};

export default function Home() {
  return (
    <div className="quantum-shell" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="content-width header-inner">
          <a className="wordmark" href="#top" aria-label="Quantum, home">
            QUANTUM
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#approach">How we work</a>
            <a href="#questions">Questions</a>
          </nav>
          <a className="header-contact" href="#contact">
            Talk with us <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="content-width hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-kicker">Financial & insurance planning</p>
              <h1 id="hero-title">
                See the whole picture.<br />
                <span>Choose your next step.</span>
              </h1>
              <p className="hero-lede">
                Quantum helps families bring savings, pensions, assets, obligations and
                protection into one practical view—so the options are easier to understand.
              </p>
              <div className="hero-actions">
                <a className="hero-primary" href="#contact">
                  Start a conversation <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
                </a>
                <a className="hero-secondary" href="#services">
                  Explore services <ArrowDown size={16} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="q-graphic">
                <span className="q-ring" />
                <span className="q-ring" />
                <span className="q-ring" />
                <span className="q-axis" />
                <span className="q-core">Q</span>
                <span className="orbit-label orbit-label-one">
                  <strong>Plan</strong>
                  <span>See the full view</span>
                </span>
                <span className="orbit-label orbit-label-two">
                  <strong>Compare</strong>
                  <span>Review options</span>
                </span>
                <span className="orbit-label orbit-label-three">
                  <strong>Protect</strong>
                  <span>Check the cover</span>
                </span>
                <span className="orbit-label orbit-label-four">
                  <strong>Revisit</strong>
                  <span>When life shifts</span>
                </span>
              </div>
              <span className="hero-note">One view · informed choices</span>
            </div>
          </div>
        </section>

        <div className="trust-strip" aria-label="Quantum's planning approach">
          <div className="content-width trust-strip-inner">
            <div className="trust-point"><span>01 /</span> Family finances, seen together</div>
            <div className="trust-point"><span>02 /</span> Options explained without promises</div>
            <div className="trust-point"><span>03 /</span> Reviews as circumstances change</div>
          </div>
        </div>

        <section className="section" id="services" aria-labelledby="services-title">
          <div className="content-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">What we help you review</p>
                <h2 id="services-title">Five areas.<br />One clearer view.</h2>
              </div>
              <p>
                Financial choices connect. We look across family goals, savings, pension
                plans and insurance needs to help you understand what is in place and what
                may be worth reviewing.
              </p>
            </div>

            <div className="service-list">
              {services.map((service) => (
                <article className="service-row" id={service.id} key={service.id}>
                  <span className="service-number">{service.number} / 05</span>
                  <div className="service-title">
                    <h3>{service.title}</h3>
                  </div>
                  <div className="service-copy">
                    <p>{service.description}</p>
                    <ul className="service-tags" aria-label={`${service.title} topics`}>
                      {service.points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                  </div>
                  <ArrowUpRight className="service-arrow" size={20} strokeWidth={1.5} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="approach" aria-labelledby="approach-title">
          <div className="content-width process-inner">
            <div className="process-heading">
              <p className="eyebrow">A practical process</p>
              <h2 id="approach-title">Clarity, one step at a time.</h2>
              <p>
                A useful review starts with listening and understanding your overall
                circumstances—not with a one-size-fits-all recommendation.
              </p>
            </div>
            <div className="process-steps">
              {processSteps.map((step) => (
                <article className="process-step" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section" id="questions" aria-labelledby="questions-title">
          <div className="content-width faq-inner">
            <div className="faq-heading">
              <p className="eyebrow">Good to know</p>
              <h2 id="questions-title">Before we talk.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="content-width contact-inner">
            <div className="contact-heading">
              <p className="eyebrow">Your next step</p>
              <h2 id="contact-title">Let’s make the picture clearer.</h2>
              <p>
                Tell us what you’d like to review. Reach Quantum directly by email or
                WhatsApp and start with a conversation.
              </p>
            </div>
            <div>
              <div className="contact-actions">
                <a className="contact-action" href={emailHref}>
                  <span><Mail size={19} strokeWidth={1.8} aria-hidden="true" /> Email Quantum</span>
                  <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
                </a>
                <a className="contact-action" href={whatsappHref} target="_blank" rel="noreferrer">
                  <span><MessageCircle size={19} strokeWidth={1.8} aria-hidden="true" /> Message on WhatsApp</span>
                  <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>
              <p className="contact-note">
                WhatsApp: <a className="text-link" href={`tel:${phoneNumber}`}>053-853-6090</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-width footer-main">
          <a className="wordmark" href="#top">QUANTUM</a>
          <p className="footer-note">
            Financial planning is based on personal circumstances and assumptions; returns
            and future income are not guaranteed. Insurance cover is subject to underwriting,
            applicable law and the terms, exclusions and limits of the policy issued.
          </p>
        </div>
        <div className="footer-bottom">
          <div className="content-width">Quantum Insurance Agency · Financial & insurance planning</div>
        </div>
      </footer>
    </div>
  );
}
import EnquiryEmailForm from "@/components/contact/EnquiryEmailForm";
        <section className="section contact-section" id="contact" aria-labelledby="contact-title">
          <div className="content-width contact-inner">
            <div className="contact-heading">
              <p className="eyebrow">Your next step</p>
              <h2 id="contact-title">Let’s make the picture clearer.</h2>
              <p>
                Fill in a short note or contact Quantum directly. The form opens your email app;
                it does not send automatically.
              </p>
            </div>
            <div className="contact-details">
              <EnquiryEmailForm recipientEmail={emailAddress} />
              <div className="contact-actions">
                <a className="contact-action" href={emailHref}>
                  <span><Mail size={19} strokeWidth={1.8} aria-hidden="true" /> Email Quantum</span>
                  <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
                </a>
                <a className="contact-action" href={whatsappHref} target="_blank" rel="noreferrer">
                  <span><MessageCircle size={19} strokeWidth={1.8} aria-hidden="true" /> Message on WhatsApp</span>
                  <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>
              <p className="contact-note">
                WhatsApp: <a className="text-link" href={`tel:${phoneNumber}`}>053-853-6090</a>
              </p>
            </div>
          </div>
        </section>
