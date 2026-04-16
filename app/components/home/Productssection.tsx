"use client";

import { useState } from "react";
import { Radar, Shield, ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="section">

      <div className="container">

        {/* TITLE */}
        <div className="title-wrap">
          <h2 className="title">Products</h2>
          <div className="underline" />
        </div>

        {/* CARD */}
        <div className="product-card">

          <div className={`inner ${flipped ? "flipped" : ""}`}>

            {/* FRONT */}
            <div className="side front">

              <div className="image-box">
                <img src="/images/products/shield.jpg" alt="Encrava Intel" />
              </div>

              <div className="content">

                <div className="title-row">
                  <Radar className="icon" />
                  Encrava Intel
                </div>

                <p className="lead">
                  Africa-focused threat intelligence platform built for real-time cyber visibility across mobile money, fintech, and government systems.
                </p>

                <ul>
                  <li>Monitors mobile money fraud networks</li>
                  <li>Tracks SIM-swap & phishing syndicates</li>
                  <li>Detects leaked credentials from regional dark web markets</li>
                  <li>Delivers alerts in under 60 seconds</li>
                </ul>

                <p className="sub">
                  Built specifically for African cyber threat environments.
                </p>

                <button className="btn">
                  Learn More <ArrowRight size={14} />
                </button>

                <button className="switch" onClick={() => setFlipped(true)}>
                  Switch to Shield →
                </button>

              </div>
            </div>

            {/* BACK */}
            <div className="side back">

              <div className="content">

                <div className="title-row">
                  <Shield className="icon" />
                  Encrava Shield
                </div>

                <p className="lead">
                  AI-powered phishing detection system trained on African attack patterns including M-Pesa, KRA, and banking impersonation.
                </p>

                <ul>
                  <li>M-Pesa, KRA & bank impersonation detection</li>
                  <li>Business email compromise protection</li>
                  <li>Link & attachment analysis in under 2 seconds</li>
                  <li>Kiswahili + English phishing detection</li>
                </ul>

                <p className="sub">
                  99.7% detection accuracy tuned for African cybercrime behavior.
                </p>

                <button className="btn">
                  Learn More <ArrowRight size={14} />
                </button>

                <button className="switch" onClick={() => setFlipped(false)}>
                  ← Back to Intel
                </button>

              </div>

              <div className="image-box">
                <img src="/images/products/shield.jpg" alt="Encrava Shield" />
              </div>

            </div>

          </div>
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
          margin-bottom: 12px;
        }

        .title {
          font-size: 32px;
          font-weight: 700;
          color: black;
        }

        .underline {
          width: 120px;
          height: 4px;
          background: #14532d;
          margin: 6px auto 0 auto;
          border-radius: 10px;
        }

        /* CARD */
        .product-card {
          margin-top: 18px;

          border-radius: 30px 30px 0 0;
          border: 1px solid rgba(0,0,0,0.12);

          background: #E3EAE5;

          box-shadow: 0 20px 50px rgba(0,0,0,0.08);

          overflow: hidden;
          perspective: 1200px;
        }

        .inner {
          position: relative;
          height: 480px;

          transform-style: preserve-3d;
          transition: transform 0.75s ease;
        }

        .inner.flipped {
          transform: rotateY(180deg);
        }

        .side {
          position: absolute;
          inset: 0;

          display: flex;
          align-items: stretch;
          justify-content: space-between;

          backface-visibility: hidden;
        }

        .back {
          transform: rotateY(180deg);
        }

        /* IMAGE */
        .image-box {
          width: 45%;
          height: 100%;
          overflow: hidden;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* CONTENT */
        .content {
          width: 55%;
          padding: 28px;

          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 8px;

          font-size: 18px;
          font-weight: 700;
          color: black;
        }

        .icon {
          color: #7BE09C;
        }

        .lead {
          font-size: 13px;
          color: rgba(0,0,0,0.75);
        }

        ul {
          padding-left: 16px;
        }

        li {
          font-size: 12.5px;
          color: rgba(0,0,0,0.65);
          margin-top: 6px;
        }

        .sub {
          font-size: 12px;
          color: rgba(0,0,0,0.55);
        }

        /* BUTTONS */
        .btn {
          margin-top: 10px;

          background: #7BE09C;
          color: black;

          border: none;
          border-radius: 10px;

          padding: 9px 14px;
          font-size: 12px;
          font-weight: 600;

          cursor: pointer;

          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .switch {
          margin-top: 6px;

          background: transparent;
          border: none;

          color: #7BE09C;
          font-size: 12px;
          font-weight: 600;

          cursor: pointer;
          text-align: left;
        }

      `}</style>

    </section>
  );
}