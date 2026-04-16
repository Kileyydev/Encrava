"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What makes Encrava different from global cybersecurity vendors?",
      a: "Encrava is built for African threat environments, focusing on M-Pesa fraud, SIM-swap attacks, local phishing campaigns, and regional cybercriminal networks that global tools often miss.",
    },
    {
      q: "How does Encrava Intel detect African cyber threats?",
      a: "Encrava Intel monitors Telegram fraud channels, dark web markets, SIM-swap brokers, and Africa-specific threat actors, delivering real-time alerts in under 60 seconds.",
    },
    {
      q: "What attacks does Encrava Shield protect against?",
      a: "Shield detects M-Pesa impersonation, KRA scams, bank phishing pages, business email compromise, job scams, and WhatsApp-based phishing attacks.",
    },
    {
      q: "Is Encrava compliant with Kenyan regulations?",
      a: "Yes. Encrava aligns with KDPA 2019, ODPC requirements, CBK cybersecurity guidelines, and broader African data protection frameworks.",
    },
    {
      q: "Can Encrava integrate with existing enterprise systems?",
      a: "Yes. It integrates with Microsoft 365, Google Workspace, SIEM tools like Splunk and Sentinel, and supports REST API-based custom integrations.",
    },
    {
      q: "Does Encrava support SMEs or only large enterprises?",
      a: "Encrava supports both SMEs and enterprises with scalable pricing tiers designed for African business environments.",
    },
    {
      q: "How accurate is Encrava Shield in detecting phishing?",
      a: "Shield achieves up to 99.7% accuracy on African phishing datasets, including Kiswahili-language and local impersonation campaigns.",
    },
    {
      q: "Does Encrava provide incident response support?",
      a: "Yes. We offer incident response planning, 24/7 retainer support, and rapid response assistance for active security incidents.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section">

      <div className="container">

        {/* TITLE */}
        <div className="title-wrap">
          <h2 className="title">Frequently Asked Questions</h2>
          <div className="underline" />
        </div>

        <p className="subtitle">
          Everything you need to know about Encrava’s cybersecurity solutions in Africa.
        </p>

        {/* GRID */}
        <div className="grid">

          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="faq-card">

                <button
                  className="question"
                  onClick={() => toggle(index)}
                >
                  <span>{item.q}</span>

                  {isOpen ? (
                    <ChevronUp className="icon" />
                  ) : (
                    <ChevronDown className="icon" />
                  )}
                </button>

                <div className={`answer ${isOpen ? "open" : ""}`}>
                  <p>{item.a}</p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

      <style jsx>{`

        .section {
          width: 100%;
          background: #fff;
          display: flex;
          justify-content: center;
          padding: 20px 0;
        }

        .container {
          width: 100%;
          max-width: 1100px;
          padding: 0 20px;
        }

        /* TITLE */
        .title-wrap {
          text-align: center;
        }

        .title {
          font-size: 30px;
          font-weight: 700;
          color: black;
        }

        .underline {
          width: 140px;
          height: 4px;
          background: #14532d;
          margin: 6px auto 0 auto;
          border-radius: 10px;
        }

        .subtitle {
          text-align: center;
          font-size: 13px;
          color: rgba(0,0,0,0.6);
          margin-top: 8px;
        }

        /* GRID */
        .grid {
          margin-top: 16px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        /* CARD */
        .faq-card {
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 18px;

          background: #E3EAE5;

          box-shadow: 0 12px 35px rgba(0,0,0,0.08);

          overflow: hidden;
        }

        .question {
          width: 100%;
          padding: 14px 16px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          border: none;
          background: transparent;

          cursor: pointer;

          font-size: 13px;
          font-weight: 600;
          color: black;
          text-align: left;
        }

        .icon {
          color: #7BE09C;
        }

        /* ANSWER */
        .answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.35s ease;
          padding: 0 16px;
        }

        .answer.open {
          max-height: 240px;
          padding: 0 16px 14px 16px;
        }

        .answer p {
          font-size: 12.5px;
          color: rgba(0,0,0,0.7);
          line-height: 1.5;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

    </section>
  );
}