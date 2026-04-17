"use client";

import { ShieldCheck } from "lucide-react";

export default function WhyChooseEncrava() {
  return (
    <section className="w-full py-10 bg-white flex justify-center">

      <div className="max-w-6xl px-6 w-full">

        {/* TITLE SYSTEM */}
        <div className="title-wrap">
          <div className="title-row">
            <ShieldCheck className="icon-main" />
            <h2>Why Choose Encrava</h2>
          </div>
          <div className="underline" />
        </div>

        {/* CARD */}
        <div className="mt-6">

          <div className="why-card">

            <h3 className="headline">
              Built for Africa’s Real Threat Landscape
            </h3>

            <p className="desc">
              Encrava is not a foreign vendor retrofitting Western cybersecurity tools.
              We understand the attackers targeting Africa — from M-Pesa fraud syndicates,
              SIM-swap networks, and local phishing campaigns to state-aligned threat actors.
              Our intelligence is built around African realities, not imported assumptions.
            </p>

            {/* FEATURES */}
            <div className="features">

              <div className="feature">
                <div className="dot" />
                <div>
                  <p className="title-sm">Local Threat Intelligence</p>
                  <p className="sub">
                    Tracks African cybercriminal networks and regional attack patterns.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="dot" />
                <div>
                  <p className="title-sm">Mobile-First Security</p>
                  <p className="sub">
                    Built for M-Pesa, USSD systems, fintech apps, and mobile banking.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="dot" />
                <div>
                  <p className="title-sm">Regulatory Alignment</p>
                  <p className="sub">
                    KDPA 2019, CBK guidelines, ODPC requirements, AU frameworks.
                  </p>
                </div>
              </div>

              <div className="feature">
                <div className="dot" />
                <div>
                  <p className="title-sm">Affordable Enterprise Security</p>
                  <p className="sub">
                    Built for African budgets without reducing capability.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`

        /* 🔥 TITLE SYSTEM */
        .title-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .title-row h2 {
          font-size: 32px;
          font-weight: 600;
          color: black;
        }

        .icon-main {
          color: #7BE09C;
          width: 22px;
          height: 22px;
        }

        .underline {
          width: 90px;
          height: 5px;

          background: #ffe0f0;

          margin-top: 10px;

          border-radius: 999px;
        }

        /* CARD */
        .why-card {
          background: white;

          border: 2px solid rgba(0,0,0,0.12);

          border-radius: 30px 30px 0 0;

          box-shadow: 0 22px 60px rgba(0, 0, 0, 0.10);

          padding: 32px;
        }

        .headline {
          font-size: 18px;
          font-weight: 600;
          color: black;
        }

        .desc {
          margin-top: 12px;
          font-size: 13px;
          color: rgba(0,0,0,0.7);
          line-height: 1.6;
        }

        /* FEATURES GRID */
        .features {
          margin-top: 20px;

          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .feature {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .dot {
          width: 10px;
          height: 10px;
          margin-top: 6px;

          border-radius: 999px;

          background: #7BE09C;

          box-shadow: 0 0 12px rgba(123, 224, 156, 0.7);

          flex-shrink: 0;
        }

        .title-sm {
          font-size: 13px;
          font-weight: 600;
          color: black;
        }

        .sub {
          font-size: 12.5px;
          color: rgba(0,0,0,0.65);
          margin-top: 4px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .features {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

    </section>
  );
}