"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-white shadow-inner">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">

        {/* GLOW ORBS */}
        <div className="absolute -top-50 -left-50 w-162.5 h-162.5 bg-[#7BE09C]/30 rounded-full blur-3xl shadow-2xl animate-pulse" />
        <div className="absolute -bottom-50 -right-50 w-162.5 h-162.5 bg-black/10 rounded-full blur-3xl shadow-2xl animate-pulse" />

        {/* GRID */}
        <div className="grid-overlay" />

        {/* FLOATING NODES */}
        <div className="nodes">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className="node" />
          ))}
        </div>

      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-5xl px-6 text-center">

        {/* HEADLINE */}
        <h1 className="hero-title">
          Africa’s Cyber Threats Are Unique. <br />
          So Is Our Protection.
        </h1>

        {/* 🔥 UNDERLINE ACCENT */}
        <div className="underline" />

        {/* SUBTEXT */}
        <p className="hero-sub">
          Encrava delivers expert cybersecurity consulting and AI-powered security products
          built for the African market — protecting mobile money platforms, fintech innovators,
          government systems, and enterprises across the continent.
        </p>

        {/* CTA */}
        <div className="cta">

          <button className="primary-btn">
            Book Free Consultation
          </button>

          <button className="secondary-btn">
            Explore Products
          </button>

        </div>

      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`

        /* TITLE */
        .hero-title {
          font-size: 44px;
          font-weight: 600;
          color: black;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 60px;
          }
        }

        /* 🔥 UNDERLINE SYSTEM */
        .underline {
          width: 110px;
          height: 6px;

          background: #ffe0f0;

          margin: 16px auto 0 auto;

          border-radius: 999px;
        }

        /* SUBTEXT */
        .hero-sub {
          margin-top: 20px;

          font-size: 15px;
          color: rgba(0,0,0,0.7);

          max-width: 720px;
          margin-left: auto;
          margin-right: auto;

          line-height: 1.6;
        }

        /* CTA */
        .cta {
          margin-top: 28px;

          display: flex;
          flex-direction: column;
          gap: 12px;

          align-items: center;
        }

        @media (min-width: 768px) {
          .cta {
            flex-direction: row;
            justify-content: center;
          }
        }

        .primary-btn {
          padding: 12px 22px;

          background: #166b5f;
          color: white;

          font-size: 13px;
          font-weight: 600;

          border-radius: 10px;

          box-shadow: 0 12px 30px rgba(123, 224, 156, 0.4);

          transition: all 0.25s ease;
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(123, 224, 156, 0.5);
        }

        .secondary-btn {
          padding: 12px 22px;

          border: 1px solid rgba(0,0,0,0.2);

          font-size: 13px;
          font-weight: 500;

          border-radius: 10px;

          background: white;

          box-shadow: 0 8px 20px rgba(0,0,0,0.05);

          transition: all 0.25s ease;
        }

        .secondary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
        }

        /* GRID */
        .grid-overlay {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px);

          background-size: 70px 70px;

          opacity: 0.7;

          animation: gridMove 22s linear infinite;

          box-shadow: inset 0 0 140px rgba(123, 224, 156, 0.18);
        }

        @keyframes gridMove {
          0% { transform: translateY(0px); }
          100% { transform: translateY(90px); }
        }

        /* NODES */
        .nodes {
          position: absolute;
          inset: 0;
        }

        .node {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 999px;

          background: #7BE09C;

          box-shadow: 0 0 14px rgba(123, 224, 156, 0.7);

          animation: float 5s infinite ease-in-out;
        }

        .node:nth-child(odd) {
          background: rgba(0,0,0,0.2);
          box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }

        /* POSITIONS */
        .node:nth-child(1) { top: 10%; left: 20%; }
        .node:nth-child(2) { top: 30%; left: 75%; }
        .node:nth-child(3) { top: 50%; left: 40%; }
        .node:nth-child(4) { top: 70%; left: 15%; }
        .node:nth-child(5) { top: 80%; left: 85%; }
        .node:nth-child(6) { top: 45%; left: 60%; }

        @keyframes float {
          0% { transform: translate(0,0) scale(1); opacity: 0.5; }
          50% { transform: translate(30px,-30px) scale(1.5); opacity: 1; }
          100% { transform: translate(0,0) scale(1); opacity: 0.5; }
        }

      `}</style>

    </section>
  );
}