"use client";

import { useState } from "react";
import {
  Banknote,
  Smartphone,
  Building2,
  HeartPulse,
  ShoppingBag,
  Globe,
  Zap,
} from "lucide-react";

export default function IndustriesSection() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const groups = [
    [
      {
        icon: Banknote,
        title: "Financial & Mobile Money Ecosystem",
        desc: "Banks, SACCOs, fintechs, payment processors, and mobile money operators.",
      },
      {
        icon: Smartphone,
        title: "Telecom & Digital Infrastructure",
        desc: "Mobile network operators, ISPs, and communication infrastructure providers.",
      },
      {
        icon: Building2,
        title: "Government & National Systems",
        desc: "Public sector platforms, ministries, county systems, and digital government services.",
      },
    ],
    [
      {
        icon: HeartPulse,
        title: "Healthcare & Critical Services",
        desc: "Hospitals, insurers, pharmaceutical networks, and digital health platforms.",
      },
      {
        icon: ShoppingBag,
        title: "Commerce & Digital Retail Systems",
        desc: "E-commerce platforms, logistics networks, and online consumer services.",
      },
      {
        icon: Globe,
        title: "NGOs & Development Networks",
        desc: "International NGOs, humanitarian orgs, and donor-funded digital systems.",
      },
    ],
    [
      {
        icon: Zap,
        title: "Energy & Critical Utilities",
        desc: "Power grids, oil & gas infrastructure, water systems, and national utilities.",
      },
    ],
  ];

  const next = () => {
    if (animating) return;

    setAnimating(true);
    setIndex((prev) => (prev + 1) % groups.length);

    setTimeout(() => {
      setAnimating(false);
    }, 450);
  };

  return (
    <section className="section">
      <div className="container">

        {/* 🔥 TITLE SYSTEM */}
        <div className="title-wrap">
          <h2>Industries We Serve</h2>
          <div className="underline" />
        </div>

        {/* GRID */}
        <div className={`grid ${animating ? "fade" : ""}`}>
          {groups[index].map((item, i) => {
            const Icon = item.icon;

            return (
              <div key={i} className="card">
                <div className="top">
                  <Icon className="icon" />
                  <h3>{item.title}</h3>
                </div>

                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* DOT CONTROL */}
        <div className="nav">
          <button onClick={next} className="dots">...</button>
        </div>

      </div>

      <style jsx>{`

        .section {
          width: 100%;
          background: #E3EAE5;
          display: flex;
          justify-content: center;
          padding: 26px 0;
        }

        .container {
          width: 100%;
          max-width: 1100px;
          padding: 0 20px;
        }

        /* 🔥 TITLE SYSTEM */
        .title-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 12px;
        }

        .title-wrap h2 {
          font-size: 30px;
          font-weight: 700;
          color: black;
        }

        .underline {
          width: 85px;
          height: 5px;
          background: #14532d;
          margin-top: 8px;
          border-radius: 999px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          transition: all 0.45s ease;
        }

        .fade {
          opacity: 0.6;
          transform: translateY(6px);
        }

        .card {
          background: white;

          border: 1px solid rgba(0,0,0,0.12);

          border-radius: 30px 30px 0 0;

          box-shadow: 0 16px 45px rgba(0,0,0,0.10);

          padding: 14px;
          min-height: 140px;
        }

        .top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon {
          width: 18px;
          height: 18px;
          color: #7BE09C;
        }

        h3 {
          font-size: 13px;
          font-weight: 600;
          color: black;
        }

        p {
          margin-top: 10px;
          font-size: 12px;
          color: rgba(0,0,0,0.65);
          line-height: 1.4;
        }

        .nav {
          display: flex;
          justify-content: flex-end;
          margin-top: 6px;
        }

        .dots {
          font-size: 30px;
          font-weight: 900;
          color: #7BE09C;
          background: transparent;
          border: none;
          cursor: pointer;
          letter-spacing: 3px;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

      `}</style>
    </section>
  );
}