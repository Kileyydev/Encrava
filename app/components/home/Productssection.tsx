"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const slides = [
  {
    title: "Encrava Intel",
    subtitle: "African Threat Intelligence Platform",
    desc: "Real-time intelligence built around African cybercrime networks — M-Pesa fraud, SIM-swap rings, Telegram fraud channels, and regional threat actors targeting financial systems across East Africa.",
    points: [
      "M-Pesa fraud & SIM-swap monitoring",
      "Dark web + Telegram threat tracking",
      "Sub-60s real-time alert delivery",
    ],
    image: "/images/herosection/sphere2.png",
    cta: "Explore Intel",
  },
  {
    title: "Encrava Shield",
    subtitle: "AI-Powered Phishing Detection",
    desc: "Detects African-targeted phishing including M-Pesa scams, KRA impersonation, fake job offers, and business email compromise with AI models trained on local threat patterns.",
    points: [
      "99.7% phishing detection accuracy",
      "M-Pesa + KRA impersonation blocking",
      "Auto email quarantine & remediation",
    ],
    image: "/images/herosection/sphere2.png",
    cta: "Explore Shield",
  },
];

export default function EncravaProductShowcase() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));

  const slide = slides[index];

  return (
    <section className="relative w-full bg-[#166b5f] text-white overflow-hidden pt-6 pb-16">

      {/* container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative">

        {/* TITLE */}
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.25em] opacity-80">
            Our Products
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Built for Africa’s Cyber Reality
          </h2>

          <div className="w-20 h-0.5 bg-white mx-auto mt-3" />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-10">

          {/* LEFT */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] opacity-80">
              {slide.subtitle}
            </h3>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              {slide.title}
            </h2>

            <div className="w-16 h-0.5 bg-white" />

            <p className="text-sm leading-relaxed opacity-90">
              {slide.desc}
            </p>

            <ul className="space-y-2 text-sm opacity-90">
              {slide.points.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  {p}
                </li>
              ))}
            </ul>

            <button className="cta-btn group mt-4">
              <span>{slide.cta}</span>
              <ArrowUpRight size={18} className="icon" />
            </button>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center items-center">
            <div className="relative w-60 md:w-75 lg:w-85 h-60 md:h-75 lg:h-85">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 md:text-right">
            <h3 className="text-xs uppercase tracking-[0.25em] opacity-80">
              Encrava Platform
            </h3>

            <h2 className="text-2xl md:text-3xl font-bold">
              Built for Africa
            </h2>

            <div className="w-16 h-0.5 bg-white md:ml-auto" />

            <p className="text-sm leading-relaxed opacity-90">
              Every Encrava product is engineered specifically for African infrastructure.
            </p>

            <p className="text-xs opacity-80">
              {index + 1} / {slides.length}
            </p>
          </div>

        </div>

        {/* ✅ FIXED ARROWS (NOW INSIDE RELATIVE CONTAINER) */}
        <div className="absolute left-1/2 -bottom-6 transform -translate-x-1/2 flex gap-5 z-20">

          <button
            onClick={prev}
            className="p-3 border border-white/40 hover:border-white transition bg-white/10 backdrop-blur-md"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={next}
            className="p-3 border border-white/40 hover:border-white transition bg-white/10 backdrop-blur-md"
          >
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

      {/* CTA STYLE */}
      <style jsx>{`
        .cta-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.25);
          font-size: 14px;
          font-weight: 500;
          transition: 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .cta-btn:hover {
          background: white;
          color: #166b5f;
          transform: translateY(-2px);
        }

        .cta-btn .icon {
          opacity: 0;
          transform: translateX(-6px);
          transition: 0.3s;
        }

        .cta-btn:hover .icon {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

    </section>
  );
}