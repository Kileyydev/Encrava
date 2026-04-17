"use client";

import {
  ShieldCheck,
  Lock,
  Globe,
  FileCheck2,
  Database,
  Building2,
} from "lucide-react";

export default function ComplianceStrip() {
  const items = [
    { icon: ShieldCheck, text: "KDPA 2019 Compliant" },
    { icon: Lock, text: "ISO/IEC 27001:2022" },
    { icon: FileCheck2, text: "PCI-DSS v4.0" },
    { icon: Globe, text: "GDPR Aligned" },
    { icon: Database, text: "AU Cybersecurity Convention" },
    { icon: Building2, text: "ODPC Registered" },
    { icon: ShieldCheck, text: "CA Kenya Cybersecurity Partner" },
  ];

  return (
    <section className="w-full py-8 bg-white flex justify-center">

      <div className="max-w-6xl w-full px-6">

        {/* TITLE */}
        <div className="text-center">

          <h2 className="title">
            Compliance Frameworks We Support
          </h2>

          {/* thick centered underline */}
          <div className="underline" />

        </div>

        {/* SCROLLER */}
        <div className="mt-6 overflow-hidden strip">

          <div className="track">

            {items.map((item, i) => (
              <div className="item" key={i}>
                <item.icon size={16} className="icon" />
                <span>{item.text}</span>
              </div>
            ))}

            {items.map((item, i) => (
              <div className="item" key={"dup-" + i}>
                <item.icon size={16} className="icon" />
                <span>{item.text}</span>
              </div>
            ))}

          </div>
        </div>

      </div>

      <style jsx>{`
        .title {
          font-size: 28px;
          font-weight: 600;
          color: black;
          text-align: center;
        }

        /* 🔥 custom thick centered underline */
        .underline {
          width: 140px;
          height: 4px;
          background: #ffe0f0; /* dark green */
          margin: 10px auto 0 auto;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(20, 83, 45, 0.25);
        }

        .strip {
          position: relative;
          white-space: nowrap;
        }

        .track {
          display: flex;
          gap: 28px;
          width: max-content;
          animation: scroll 18s linear infinite;
        }

        .item {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 10px 14px;

          border: 1px solid rgba(20, 83, 45, 0.25);
          border-radius: 999px;

          box-shadow: 0 10px 25px rgba(0,0,0,0.06);

          font-size: 12.5px;
          font-weight: 500;

          color: black;
          background: white;
        }

        .icon {
          color: #7BE09C;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
}