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
      a: "Shield detects M-Pesa impersonation, KRA scams, bank phishing pages, business email compromise, job scams, WhatsApp phishing, and SMS spoofing attacks.",
    },
    {
      q: "Is Encrava compliant with Kenyan regulations?",
      a: "Yes. Encrava aligns with KDPA 2019, ODPC requirements, CBK cybersecurity guidelines, and broader African data protection frameworks.",
    },
    {
      q: "Can Encrava integrate with existing enterprise systems?",
      a: "Yes. It integrates with Microsoft 365, Google Workspace, SIEM tools like Splunk and Microsoft Sentinel, and supports REST APIs for custom systems.",
    },
    {
      q: "Does Encrava support SMEs or only large enterprises?",
      a: "Encrava supports both SMEs and enterprises with scalable tiers designed for African business environments.",
    },
    {
      q: "How accurate is Encrava Shield in detecting phishing?",
      a: "Shield achieves up to 99.7% accuracy on African phishing datasets including scams and local impersonation campaigns.",
    },
    {
      q: "Does Encrava provide incident response support?",
      a: "Yes. We offer 24/7 incident response support, breach containment, forensic investigation, and recovery assistance.",
    },
    {
      q: "What is Encrava Intel?",
      a: "Encrava Intel is a threat intelligence engine that tracks African cybercrime ecosystems including fraud groups, leaked data sources, and active threat actors.",
    },
    {
      q: "What is Encrava Shield?",
      a: "Encrava Shield is a real-time protection layer that detects and blocks phishing, impersonation, malware links, and fraudulent digital activity.",
    },
    {
      q: "How fast does Encrava respond to threats?",
      a: "Threat detection and alerting happens in real time, typically under 60 seconds depending on the threat source and channel.",
    },
    {
      q: "Can Encrava be used in banking and fintech?",
      a: "Yes. Encrava is designed specifically for fintech, banking, mobile money platforms, and telecom ecosystems across Africa.",
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
          <h2>Frequently Asked Questions</h2>
          <div className="underline" />
          <p>
            Everything you need to know about Encrava’s cybersecurity ecosystem.
          </p>
        </div>

        {/* GRID */}
        <div className="grid">

          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="faq">

                {/* QUESTION */}
                <button
                  className="question"
                  onClick={() => toggle(index)}
                >
                  <span>{item.q}</span>

                  {isOpen ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {/* ANSWER */}
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
          background: #ffffff;

          padding: 30px 0;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* TITLE */
        .title-wrap {
          text-align: center;
          margin-bottom: 14px;
        }

        .title-wrap h2 {
          font-size: 30px;
          font-weight: 700;
          color: #0f172a;
        }

        .title-wrap p {
          font-size: 13px;
          color: #64748b;
          margin-top: 6px;
        }

        .underline {
          width: 100px;
          height: 3px;
          background: #166b5f;
          margin: 8px auto 0;
        }

        /* GRID */
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-top: 16px;
        }

        /* CARD */
        .faq {
          background: #166b5f;
          border: none;

          overflow: hidden;
        }

        /* QUESTION */
        .question {
          width: 100%;

          padding: 14px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          background: #166b5f;
          color: #ffffff;

          border: none;

          cursor: pointer;

          font-size: 13px;
          font-weight: 600;

          text-align: left;
        }

        /* ANSWER */
        .answer {
          max-height: 0;
          overflow: hidden;

          transition: all 0.35s ease;

          padding: 0 14px;

          background: #166b5f;
        }

        .answer.open {
          max-height: 260px;
          padding: 0 14px 14px 14px;
        }

        .answer p {
          font-size: 12.8px;
          color: rgba(255,255,255,0.82);
          line-height: 1.6;
        }

        svg {
          color: white;
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