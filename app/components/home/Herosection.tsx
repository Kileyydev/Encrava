"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  const [active, setActive] = useState("consult");

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  /* ================= DRIFTING FOG ENGINE (UNCHANGED) ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const fog = Array.from({ length: 90 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 140 + 60,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      a: Math.random() * 0.09 + 0.04,
      seed: Math.random() * 1000,
    }));

    let t = 0;

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.0025;

      const base = ctx.createRadialGradient(
        w * 0.5,
        h * 0.35,
        0,
        w * 0.5,
        h * 0.6,
        w
      );

      base.addColorStop(0, "rgba(22,107,95,0.12)");
      base.addColorStop(1, "rgba(250,250,250,0)");

      ctx.fillStyle = base;
      ctx.fillRect(0, 0, w, h);

      fog.forEach(p => {
        const waveX = Math.sin(t + p.seed) * 0.4;
        const waveY = Math.cos(t + p.seed) * 0.4;

        p.x += p.dx + waveX;
        p.y += p.dy + waveY;

        if (p.x < -200) p.x = w + 200;
        if (p.x > w + 200) p.x = -200;
        if (p.y < -200) p.y = h + 200;
        if (p.y > h + 200) p.y = -200;

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);

        gradient.addColorStop(0, `rgba(22,107,95,${p.a})`);
        gradient.addColorStop(0.6, `rgba(22,107,95,${p.a * 0.4})`);
        gradient.addColorStop(1, "rgba(22,107,95,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section className="hero">

      {/* ================= FOG CANVAS ================= */}
      <canvas ref={canvasRef} className="fog" />

      {/* ================= BACKGROUND FADE ================= */}
      <div className="bg">
        <div className="sphere-fade" />
      </div>

      {/* ================= SPHERES (FINAL ALIGNMENT) ================= */}
      <div className="sphere sphere1">
        <img src="/images/herosection/sphere1.png" alt="Sphere 1" />
      </div>

      <div className="sphere sphere2">
        <img src="/images/herosection/sphere2.png" alt="Sphere 2" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="content">
        <h1 className="hero-title">
          Africa’s Cyber Threats Are Unique.<br />
          So Is Our Protection.
        </h1>

        <div className="underline" />

        <p className="hero-sub">
          Encrava delivers expert cybersecurity consulting and AI-powered security products
          built for the African market — protecting mobile money platforms, fintech innovators,
          government systems, and enterprises across the continent.
        </p>

        <div className="cta-row">

          <button
            onMouseEnter={() => setActive("consult")}
            className={`cta-btn ${active === "consult" ? "active" : ""}`}
          >
            Book Consultation
            <ArrowUpRight className="icon" size={18} />
          </button>

          <button
            onMouseEnter={() => setActive("products")}
            className={`cta-btn ${active === "products" ? "active" : ""}`}
          >
            Explore Products
            <ArrowUpRight className="icon" size={18} />
          </button>

        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #fafafa;
          overflow-x: clip;
        }

        .fog {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }

        .bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .sphere-fade {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 75% 25%, transparent 0%, transparent 140px, rgba(250,250,250,0.9) 320px),
            radial-gradient(circle at 85% 85%, transparent 0%, transparent 180px, rgba(250,250,250,0.9) 380px);
        }

        /* ================= SPHERES (UPDATED FINAL POSITIONING) ================= */

        .sphere {
          position: absolute;
          z-index: 10;
          pointer-events: none;
        }

        .sphere img {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 25px 55px rgba(0, 0, 0, 0.1));
        }

        /* 🔥 sphere1: pushed RIGHT + UP (away from text, keeps diagonal flow) */
         .sphere1 {
          top: 16%;
          right: 10%;
          width: 290px;
          transform: rotate(-15deg);
        }

        @media (min-width: 768px) {
          .sphere1 { width: 400px; right: 12%; }
        }

        @media (min-width: 1200px) {
          .sphere1 { width: 410px; right: 15%; }
        }

        .sphere2 {
          bottom: -18%;
          right: -6%;
          width: 490px;
          transform: rotate(18deg);
        }

        @media (min-width: 768px) {
          .sphere2 {
            width: 590px;
            bottom: -20%;
            right: -11%;
          }
        }

        @media (min-width: 1200px) {
          .sphere2 {
            width: 690px;
            bottom: -22%;
            right: -13%;
          }
        }

        /* ================= CONTENT ================= */
        .content {
          position: relative;
          z-index: 30;
          max-width: 720px;
          padding-left: 8%;
        }

        .hero-title {
          font-size: 60px;
          line-height: 1.08;
          font-weight: 700;
          color: #0f172a;
        }

        .underline {
          width: 110px;
          height: 6px;
          background: #166b5f;
          margin: 18px 0 28px;
          border-radius: 999px;
        }

        .hero-sub {
          font-size: 18px;
          color: #374151;
          line-height: 1.7;
          margin-bottom: 42px;
        }

        .cta-row {
          display: flex;
          gap: 14px;
        }

        .cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 999px;
          background: transparent;
          border: 1px solid rgba(0,0,0,0.1);
          cursor: pointer;
          transition: 0.3s;
        }

        .cta-btn.active {
          background: #166b5f;
          color: white;
          box-shadow: 0 10px 25px rgba(22,107,95,0.25);
        }

        .cta-btn .icon {
          opacity: 0;
          transform: translateX(-6px);
          transition: 0.3s;
        }

        .cta-btn.active .icon {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .content {
            padding: 24px;
            text-align: center;
          }

          .cta-row {
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