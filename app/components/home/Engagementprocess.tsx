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
  return (
    <section className="w-full py-10 bg-[#ffffff] flex justify-center">

      <div className="max-w-6xl px-6 w-full">

        {/* TITLE */}
        <h2 className="title">Client Engagement Process</h2>
        <div className="underline" />

        {/* FLOW */}
        <div className="flow">

          <div className="step">
            <Search className="icon" />
            <h3>Discovery</h3>
            <p>We analyze your systems, exposure, and threat environment.</p>
          </div>

          <div className="arrowWrap">
            <ArrowRight className="arrow" />
          </div>

          <div className="step">
            <FileText className="icon" />
            <h3>Proposal</h3>
            <p>Clear scope, timelines, deliverables, and transparent pricing.</p>
          </div>

          <div className="arrowWrap">
            <ArrowRight className="arrow" />
          </div>

          <div className="step">
            <Settings className="icon" />
            <h3>Execution</h3>
            <p>Hands-on delivery with structured progress updates.</p>
          </div>

          <div className="arrowWrap">
            <ArrowRight className="arrow" />
          </div>

          <div className="step">
            <Activity className="icon" />
            <h3>Findings</h3>
            <p>Technical + executive reporting in simple language.</p>
          </div>

          <div className="arrowWrap">
            <ArrowRight className="arrow" />
          </div>

          <div className="step">
            <ShieldCheck className="icon" />
            <h3>Remediation</h3>
            <p>Optional support to implement fixes and strengthen defenses.</p>
          </div>

        </div>

      </div>

      <style jsx>{`

        .title {
          text-align: center;
          font-size: 28px;
          font-weight: 600;
          color: black;
        }

        .underline {
          width: 120px;
          height: 4px;
          background: #ffe0f0;
          margin: 10px auto 18px auto;
          border-radius: 10px;
        }

        /* FLOW ROW */
        .flow {
          display: flex;
          align-items: stretch;
          justify-content: space-between;
          gap: 12px;

          margin-top: 10px;
        }

        /* STEP CARD */
        .step {
          flex: 1;

          background: white;

          border: 2px solid rgba(20, 83, 45, 0.25);
          border-radius: 18px;

          box-shadow: 0 16px 45px rgba(0,0,0,0.10);

          padding: 14px;

          display: flex;
          flex-direction: column;
          gap: 6px;

          min-height: 130px;
        }

        .icon {
          color: #7BE09C;
        }

        h3 {
          font-size: 14px;
          font-weight: 600;
          color: black;
        }

        p {
          font-size: 12px;
          color: rgba(0,0,0,0.65);
          line-height: 1.4;
        }

        /* ARROW CENTER FIX */
        .arrowWrap {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .arrow {
          color: #14532d;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15));
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .flow {
            flex-direction: column;
            align-items: stretch;
          }

          .arrow {
            transform: rotate(90deg);
          }

          .arrowWrap {
            padding: 6px 0;
          }
        }

      `}</style>

    </section>
  );
}