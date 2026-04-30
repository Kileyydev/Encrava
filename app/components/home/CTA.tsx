"use client";

import { ArrowRight, Shield, Radar } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full pt-8 pb-0 bg-[#f3f6f5] flex justify-center">

      <div className="w-full max-w-6xl px-4 md:px-6">

        <div className="cta-card">

          {/* LEFT */}
          <div className="content">
            <h2 className="title">
              Secure Your Organization Before Attacks Happen
            </h2>

            <p className="subtitle">
              Encrava protects African businesses against phishing, SIM-swap fraud,
              mobile money attacks, and advanced cyber threats using AI-driven intelligence
              built for the continent.
            </p>

            <div className="buttons">

              <button className="primary">
                Book a Consultation <ArrowRight size={16} />
              </button>

              <Link href="/products/intel" className="secondary">
                Explore Encrava Intel
              </Link>

            </div>
          </div>

          {/* RIGHT */}
          <div className="visual">

            <div className="badge">
              <Shield className="icon" />
              KDPA Aligned Security
            </div>

            <div className="badge">
              <Radar className="icon" />
              Real-Time African Threat Intelligence
            </div>

            <div className="badge">
              <Shield className="icon" />
              99.7% Phishing Detection Accuracy
            </div>

          </div>

        </div>

      </div>

      {/* STYLE */}
      <style jsx>{`
        .cta-card {
          border: 2px solid rgba(0,0,0,0.12);
          border-radius: 30px 30px 0 0;

          box-shadow: 0 25px 70px rgba(0,0,0,0.12);

          padding: 40px;

          display: flex;
          justify-content: space-between;
          gap: 40px;

          background: white;
        }

        .content {
          flex: 1;
        }

        .title {
          font-size: 28px;
          font-weight: 700;
          color: black;
          line-height: 1.2;
        }

        .subtitle {
          margin-top: 14px;
          font-size: 14px;
          color: rgba(0,0,0,0.65);
          line-height: 1.6;
          max-width: 520px;
        }

        .buttons {
          margin-top: 22px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primary {
          background: black;
          color: white;

          border: none;
          padding: 12px 16px;

          font-size: 13px;
          font-weight: 600;

          border-radius: 10px;

          display: flex;
          align-items: center;
          gap: 8px;

          cursor: pointer;
        }

        .secondary {
          background: transparent;
          color: black;

          border: 1px solid rgba(0,0,0,0.2);

          padding: 12px 16px;

          font-size: 13px;
          font-weight: 600;

          border-radius: 10px;

          cursor: pointer;
        }

        .visual {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 14px;
        }

        .badge {
          display: flex;
          align-items: center;
          gap: 10px;

          padding: 12px 14px;

          border: 1px solid rgba(0,0,0,0.12);
          border-radius: 12px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.06);
        }

        .icon {
          color: black;
        }

        @media (max-width: 768px) {
          .cta-card {
            flex-direction: column;
            padding: 28px;
          }
        }
      `}</style>

    </section>
  );
}