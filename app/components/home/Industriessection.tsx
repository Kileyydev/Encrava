"use client";

import { useEffect, useRef } from "react";

export default function IndustriesSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const fog = Array.from({ length: 85 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 150 + 70,
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
        h * 0.4,
        0,
        w * 0.5,
        h * 0.6,
        w
      );

      base.addColorStop(0, "rgba(22,107,95,0.10)");
      base.addColorStop(1, "rgba(250,250,250,0)");

      ctx.fillStyle = base;
      ctx.fillRect(0, 0, w, h);

      fog.forEach((p) => {
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

  const cards = [
    {
      title: "African Threat Intelligence",
      text:
        "Monitors M-Pesa fraud networks, SIM swap groups, and Africa-specific cybercrime ecosystems in real time.",
    },
    {
      title: "AI-Powered Detection",
      text:
        "Detects phishing, KRA scams, bank impersonation.",
    },
    {
      title: "Mobile-First Security",
      text:
        "Secures fintech, telecom, and mobile money infrastructure built for Africa’s mobile-first economy.",
    },
    {
      title: "KDPA Compliance",
      text:
        "Aligned with Kenya Data Protection Act 2019, ODPC requirements, and regional African privacy laws.",
    },
    {
      title: "Pan-African Coverage",
      text:
        "Protection across Kenya, East Africa, West Africa, and Southern Africa threat landscapes.",
    },
    {
      title: "Built for Africa",
      text:
        "Engineered specifically for African infrastructure, threat actors, and operational realities.",
    },
  ];

  return (
    <section className="section">
      <div className="content">
        <h2 className="title">Industries We Secure</h2>

        {/* UNDERLINE */}
        <div className="underline" />

        <p className="sub">
          Tailored cybersecurity protection for Africa’s most critical digital ecosystems.
        </p>

        <div className="grid">
          {cards.map((c, i) => (
            <div key={i} className="card">
              <div className="line" />
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sphere sphere2">
        <img src="/images/herosection/sphere2.png" alt="Sphere" />
      </div>

      <style jsx>{`
        .section {
          position: relative;
          background: #fff;
          overflow: hidden;

          /* tight integration with previous section */
          padding: 30px 8% 60px;
          margin-top: -15px;
        }

        .content {
          position: relative;
          z-index: 5;
          max-width: 1100px;
        }

        .title {
          font-size: 42px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }

        /* underline */
        .underline {
          width: 70px;
          height: 4px;
          background: #166b5f;
          margin-bottom: 14px;
        }

        .sub {
          color: #64748b;
          margin-bottom: 18px;
          max-width: 620px;
          line-height: 1.6;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        /* ================= SOLID CARDS ================= */
        .card {
          background: #166b5f; /* 🔥 SOLID ENCRAVA GREEN */
          padding: 20px;
          min-height: 150px;

          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.12);

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card h3 {
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .card p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
        }

        /* small accent line */
        .line {
          width: 36px;
          height: 3px;
          background: #ffffff;
          margin-bottom: 10px;
        }

        .sphere {
          position: absolute;
          z-index: 1;
          pointer-events: none;
        }

        .sphere img {
          width: 75%;
          filter: drop-shadow(0 25px 55px rgba(0, 0, 0, 0.12));
        }

        .sphere2 {
          bottom: -10%;
          left: -12%;
          width: 720px;
          transform: rotate(18deg);
        }
      `}</style>
    </section>
  );
}