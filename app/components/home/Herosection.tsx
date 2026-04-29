"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-[98vh] flex items-center justify-center overflow-visible bg-black">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0">
        <div className="grid-overlay" />
        <div className="global-glow" />
      </div>

      {/* ================= SERVER IMAGE (STATIC + PULLED UP) ================= */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[-110px] z-10 pointer-events-none">
        
        {/* GREEN BASE GLOW */}
        <div className="bottom-glow" />

        <img
          src="/images/herosection/server.png"
          className="w-[520px] md:w-[820px] lg:w-[980px] opacity-100 scale-105"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-30 max-w-5xl px-6 text-center">

        <h1 className="hero-title">
          Africa’s Cyber Threats Are Unique. <br />
          So Is Our Protection.
        </h1>

        <div className="underline" />

        <p className="hero-sub">
          Encrava delivers expert cybersecurity consulting and AI-powered security products
          built for the African market — protecting mobile money platforms, fintech innovators,
          government systems, and enterprises across the continent.
        </p>

        <div className="cta">
          <button className="primary-btn">Book Free Consultation</button>
          <button className="secondary-btn">Explore Products</button>
        </div>

      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`

        .hero-title {
          font-size: 44px;
          font-weight: 600;
          color: white;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 60px;
          }
        }

        .underline {
          width: 110px;
          height: 6px;
          background: #7BE09C;
          margin: 16px auto;
          border-radius: 999px;
          box-shadow: 0 0 22px rgba(123,224,156,0.9);
        }

        .hero-sub {
          color: rgba(255,255,255,0.78);
          max-width: 720px;
          margin: auto;
        }

        .cta {
          margin-top: 28px;
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .primary-btn {
          background: #166b5f;
          color: white;
          padding: 12px 22px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(22,107,95,0.35);
        }

        .secondary-btn {
          border: 1px solid rgba(255,255,255,0.2);
          padding: 12px 22px;
          border-radius: 10px;
          color: white;
          backdrop-filter: blur(10px);
        }

        /* GRID */
        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 70px 70px;
          z-index: 0;
        }

        /* GLOBAL LIGHT (BRIGHT CYBER GLOW) */
        .global-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 30%,
            rgba(123,224,156,0.35),
            transparent 60%
          );
          z-index: 2;
          filter: blur(1px);
        }

        /* SERVER GLOW (STATIC IMPACT) */
        .bottom-glow {
          position: absolute;
          width: 560px;
          height: 240px;
          background: rgba(123,224,156,0.55);
          filter: blur(130px);
          left: 50%;
          transform: translateX(-50%);
          z-index: -1;
        }

      `}</style>

    </section>
  );
}