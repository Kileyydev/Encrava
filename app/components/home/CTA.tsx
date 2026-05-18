"use client";

import { ArrowRight, Shield, Radar, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CTASection() {
  const [active, setActive] = useState<"consult" | "products" | null>(null);
  const router = useRouter();

  return (
    <section className="section">

      <div className="wrapper">

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

            {/* BUTTONS */}
            <div className="buttons">

              <button
  onMouseEnter={() => setActive("consult")}
  onClick={() => router.push("/consultation")}
  className={`cta-btn ${active === "consult" ? "active" : ""}`}
>
  Book Consultation
  <ArrowUpRight className="icon" size={18} />
</button>

<button
  onMouseEnter={() => setActive("products")}
  onClick={() => router.push("/products")}
  className={`cta-btn ${active === "products" ? "active" : ""}`}
>
  Explore Products
  <ArrowUpRight className="icon" size={18} />
</button>

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

        .section {
          width: 100%;
          background: #fff;
          display: flex;
          justify-content: center;
          padding: 28px 0 0;
        }

        .wrapper {
          width: 100%;
          max-width: 1100px;
          padding: 0 20px;
        }

        .cta-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 25px 70px rgba(0,0,0,0.12);
          padding: 36px;
          display: flex;
          justify-content: space-between;
          gap: 40px;
        }

        /* LEFT */
        .content {
          flex: 1;
        }

        .title {
          font-size: 26px;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.25;
        }

        .subtitle {
          margin-top: 14px;
          font-size: 14px;
          color: rgba(0,0,0,0.65);
          line-height: 1.7;
          max-width: 520px;
        }

        /* BUTTONS */
        .buttons {
          margin-top: 22px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 12px 18px;

          border-radius: 999px;

          background: transparent;
          border: 1px solid rgba(0,0,0,0.12);

          cursor: pointer;

          transition: all 0.3s ease;

          font-size: 13px;
          font-weight: 600;

          color: #0f172a;
        }

        .cta-btn:hover {
          border-color: #166b5f;
        }

        .cta-btn.active {
          background: #166b5f;
          color: white;
          box-shadow: 0 10px 25px rgba(22,107,95,0.25);
        }

        .icon {
          opacity: 0;
          transform: translateX(-6px);
          transition: 0.3s ease;
        }

        .cta-btn.active .icon {
          opacity: 1;
          transform: translateX(0);
        }

        /* RIGHT (UPDATED GREEN BADGES 💚) */
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

          padding: 14px 16px;

          background: #166b5f;
          color: white;

          border-radius: 0;

          box-shadow: 0 10px 25px rgba(0,0,0,0.10);

          transition: 0.25s ease;
        }

        .badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 35px rgba(0,0,0,0.15);
        }

        .badge .icon {
          color: white;
          opacity: 0.9;
          transform: none;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .cta-card {
            flex-direction: column;
            padding: 24px;
          }

          .buttons {
            flex-direction: column;
          }

          .cta-btn {
            width: 100%;
            justify-content: center;
          }
        }

      `}</style>

    </section>
  );
}