"use client";

import {
  Shield,
  Smartphone,
  FileCheck2,
  AlertTriangle,
  GraduationCap,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Risk Assessment",
      desc: "Comprehensive evaluation of your security posture aligned with KDPA 2019, CBK guidelines, and global standards like ISO 27001 and NIST.",
    },
    {
      icon: Activity,
      title: "Penetration Testing (VAPT)",
      desc: "Simulated real-world attacks on web, mobile, APIs, and infrastructure including M-Pesa integrations and USSD systems.",
    },
    {
      icon: FileCheck2,
      title: "KDPA Compliance Programme",
      desc: "End-to-end data protection compliance including ODPC registration, DPIAs, policy frameworks, and audit readiness.",
    },
    {
      icon: Smartphone,
      title: "Mobile & Fintech Security",
      desc: "Security for mobile money platforms, fintech apps, API gateways, and SIM-swap threat mitigation.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response & Retainer",
      desc: "24/7 breach response support, playbooks, tabletop exercises, and rapid containment for active cyber incidents.",
    },
    {
      icon: GraduationCap,
      title: "Security Awareness Training",
      desc: "Employee-focused training in English covering phishing, social engineering, and fraud prevention.",
    },
  ];

  return (
    <section className="w-full py-10 bg-white flex justify-center">
      <div className="max-w-6xl px-6 w-full">

        {/* TITLE */}
        <div className="title-wrap">
          <h2>Services</h2>
          <div className="underline" />
        </div>

        {/* CARD */}
        <div className="services-card">
          <div className="grid">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <div key={i} className="cell">

                  {/* HORIZONTAL LAYOUT */}
                  <div className="service-row">

                    {/* ICON LEFT */}
                    <div className="icon-box">
                      <Icon size={22} />
                    </div>

                    {/* TEXT RIGHT */}
                    <div className="text-box">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>

                      <button className="cta">
                        Explore Service <ArrowRight size={14} />
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`

        /* TITLE (REDUCED SPACE HERE) */
        .title-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;

          /* ↓ reduced from 20px */
          margin-bottom: 10px;
        }

        .title-wrap h2 {
          font-size: 32px;
          font-weight: 600;
          color: black;
        }

        .underline {
          width: 90px;
          height: 5px;
          background: #ffe0f0;
          margin-top: 8px;
          border-radius: 999px;
        }

        /* CARD */
        .services-card {
          background: white;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 26px 26px 0 0;
          box-shadow: 0 20px 60px rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        .cell {
          padding: 28px;
          border-right: 1px solid rgba(0,0,0,0.08);
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }

        .cell:nth-child(3n) {
          border-right: none;
        }

        .cell:nth-last-child(-n+3) {
          border-bottom: none;
        }

        /* HORIZONTAL LAYOUT */
        .service-row {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .icon-box {
          flex-shrink: 0;
          color: black;
          margin-top: 2px;
        }

        .text-box h3 {
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .text-box p {
          font-size: 13px;
          color: rgba(0,0,0,0.65);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .cta {
          font-size: 12px;
          font-weight: 600;
          color: #14532d;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .cta:hover {
          opacity: 0.7;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .cell {
            border-right: none !important;
          }

          .cell:not(:last-child) {
            border-bottom: 1px solid rgba(0,0,0,0.08);
          }
        }

      `}</style>
    </section>
  );
}