"use client";

import {
  Search,
  FileText,
  Settings,
  Activity,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function EngagementProcess() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      desc: "We analyze your systems, exposure, and threat environment.",
    },
    {
      icon: FileText,
      title: "Proposal",
      desc: "Clear scope, timelines, deliverables, and pricing.",
    },
    {
      icon: Settings,
      title: "Execution",
      desc: "Hands-on delivery with structured progress updates.",
    },
    {
      icon: Activity,
      title: "Findings",
      desc: "Technical + executive reporting in simple language.",
    },
    {
      icon: ShieldCheck,
      title: "Remediation",
      desc: "Optional support to implement fixes and strengthen defenses.",
    },
  ];

  return (
    <section className="section">
      <div className="wrapper">

        {/* ENCRAVA-STYLE TITLE */}
        <div className="title-wrap">
          <span className="kicker">ENCRAVA PROCESS</span>

          <h2>
            Client Engagement{" "}
            <span>Process</span>
          </h2>

          <div className="underline" />

          <p className="subtitle">
            A structured, transparent workflow from discovery to remediation.
          </p>
        </div>

        {/* FLOW */}
        <div className="flow">

          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div key={i} className="step-wrap">

                <div className="step">

                  <div className="top">
                    <Icon size={18} className="icon" />
                    <h3>{step.title}</h3>
                  </div>

                  <p>{step.desc}</p>

                </div>

                {i !== steps.length - 1 && (
                  <div className="arrow">
                    <ArrowRight size={18} />
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

      <style jsx>{`

        /* SECTION */
        .section {
          width: 100%;
          background: #fff;

          padding-top: 14px;   /* reduced */
          padding-bottom: 40px;
        }

        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* TITLE SYSTEM (MATCH ENCRAVA STYLE) */
        .title-wrap {
          text-align: center;
          margin-bottom: 18px;
        }

        .kicker {
          font-size: 10px;
          letter-spacing: 0.25em;
          font-weight: 700;
          color: rgba(22,107,95,0.9);
        }

        .title-wrap h2 {
          font-size: 34px;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #0f172a;
          margin-top: 6px;
        }

        .title-wrap h2 span {
          color: #166b5f;
        }

        .underline {
          width: 70px;
          height: 3px;
          background: #166b5f;
          margin: 10px auto 0;
          border-radius: 999px;
        }

        .subtitle {
          margin-top: 10px;
          font-size: 13px;
          color: rgba(0,0,0,0.6);
        }

        /* FLOW */
        .flow {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          gap: 10px;
        }

        .step-wrap {
          display: flex;
          align-items: center;
          flex: 1;
        }

        /* CARD */
        .step {
          background: #fff;

          border: 1px solid rgba(15,23,42,0.08);

          padding: 14px;

          min-height: 120px;

          display: flex;
          flex-direction: column;
          gap: 8px;

          width: 100%;
        }

        .top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon {
          color: #166b5f;
        }

        h3 {
          font-size: 14px;
          font-weight: 600;
          color: #0f172a;
        }

        p {
          font-size: 12.5px;
          color: rgba(0,0,0,0.65);
          line-height: 1.5;
        }

        /* ARROW */
        .arrow {
          display: flex;
          align-items: center;
          justify-content: center;

          padding: 0 6px;
          color: #166b5f;
        }

        /* MOBILE */
        @media (max-width: 900px) {

          .flow {
            flex-direction: column;
          }

          .step-wrap {
            flex-direction: column;
          }

          .arrow {
            transform: rotate(90deg);
            padding: 8px 0;
          }
        }

      `}</style>

    </section>
  );
}