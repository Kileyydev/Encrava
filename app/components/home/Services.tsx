"use client";

import {
  Shield,
  Search,
  Smartphone,
  FileCheck2,
  AlertTriangle,
  GraduationCap,
  Lock,
  Activity,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="w-full py-8 bg-white flex justify-center">

      <div className="max-w-6xl px-6 w-full">

        {/* TITLE */}
        <div className="title-wrap">
          <h2>Services</h2>
          <div className="underline" />
        </div>

        {/* MAIN CARD */}
        <div className="mt-6 services-card">

          <div className="grid grid-cols-1 md:grid-cols-4 relative">

            {/* GREEN PIPES */}
            <div className="pipe pipe-1" />
            <div className="pipe pipe-2" />
            <div className="pipe pipe-3" />

            {/* COLUMN 1 */}
            <div className="col">
              <div className="title">
                <Search className="icon" />
                Assessment & Testing
              </div>

              <div className="item"><Shield size={14} /> Risk Assessment</div>
              <div className="item"><Activity size={14} /> Penetration Testing</div>
            </div>

            {/* COLUMN 2 */}
            <div className="col">
              <div className="title">
                <Smartphone className="icon" />
                Fintech Security
              </div>

              <div className="item"><Lock size={14} /> Mobile & App Security</div>
              <div className="item"><AlertTriangle size={14} /> API & SIM-Swap Defense</div>
            </div>

            {/* COLUMN 3 */}
            <div className="col">
              <div className="title">
                <FileCheck2 className="icon" />
                Compliance
              </div>

              <div className="item">KDPA Programme</div>
              <div className="item">ODPC Alignment</div>
              <div className="item">ISO / NIST / PCI-DSS</div>
            </div>

            {/* COLUMN 4 */}
            <div className="col">
              <div className="title">
                <GraduationCap className="icon" />
                Response & Training
              </div>

              <div className="item"><AlertTriangle size={14} /> Incident Response</div>
              <div className="item"><GraduationCap size={14} /> Security Training</div>
            </div>

          </div>

        </div>

      </div>

      {/* STYLES */}
      <style jsx>{`

        /* 🔥 TITLE SYSTEM (REUSABLE STYLE NOW) */
        .title-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title-wrap h2 {
          font-size: 32px;
          font-weight: 600;
          color: black;
        }

        .underline {
          width: 80px;
          height: 5px;

          background: #14532d; /* DARK GREEN */

          margin-top: 10px;

          border-radius: 999px;
        }

        /* CARD */
        .services-card {
          background: white;

          border: 2px solid rgba(0,0,0,0.12);

          border-radius: 30px 30px 0 0;

          box-shadow: 0 20px 55px rgba(0, 0, 0, 0.10);

          padding: 28px;

          position: relative;
        }

        .col {
          padding: 10px 18px;
        }

        .title {
          display: flex;
          align-items: center;
          gap: 8px;

          font-weight: 600;
          font-size: 14px;

          color: black;

          margin-bottom: 14px;
        }

        .icon {
          color: #7BE09C;
        }

        .item {
          font-size: 12.5px;
          color: rgba(0,0,0,0.7);

          margin-top: 8px;

          display: flex;
          align-items: center;
          gap: 6px;
        }

        /* 🔥 PIPES (TALL + GLOWY) */
        .pipe {
          position: absolute;

          top: 8%;
          bottom: 8%;

          width: 2px;

          background: #7BE09C;

          box-shadow: 0 0 18px rgba(123, 224, 156, 0.7);
        }

        .pipe-1 { left: 25%; }
        .pipe-2 { left: 50%; }
        .pipe-3 { left: 75%; }

        /* MOBILE */
        @media (max-width: 768px) {
          .pipe {
            display: none;
          }
        }

      `}</style>

    </section>
  );
}